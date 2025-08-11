import {ReactElement} from "react";
import {StageBase, StageResponse, InitialData, Message} from "@chub-ai/stages-ts";
import {LoadResponse} from "@chub-ai/stages-ts/dist/types/load";
import axios from "axios";

/***
 Visual Scene Composer - Context-driven image generation for chats
 ***/

// Type definitions
type MessageStateType = {
    last_generated_image?: string;
    scene_context?: any;
};

type ConfigType = {
    chub_api_key?: string;
    image_quality?: 'standard' | 'high';
    scene_style?: string;
    max_characters?: number;
};

type InitStateType = {
    composer_ready?: boolean;
};

type ChatStateType = {
    generated_images?: string[];
};

// Visual Scene Composer interfaces
interface SceneContext {
    characters: string[];
    location: string;
    actions: string;
    mood: string;
    timeOfDay: string;
}

interface VisualComposerState {
    isGenerating: boolean;
    lastGeneratedImage?: string;
    sceneContext?: SceneContext;
    generationProgress: string;
    errorMessage?: string;
}

export class Stage extends StageBase<InitStateType, ChatStateType, MessageStateType, ConfigType> {
    
    // Visual Scene Composer state
    visualState: VisualComposerState;
    
    // Configuration
    private chubApiKey: string;
    private imageQuality: 'standard' | 'high';
    private sceneStyle: string;
    private maxCharacters: number;

    constructor(data: InitialData<InitStateType, ChatStateType, MessageStateType, ConfigType>) {
        super(data);
        const { config, messageState } = data;
        
        // Initialize Visual Scene Composer configuration
        this.chubApiKey = config?.chub_api_key || "";
        this.imageQuality = config?.image_quality || "standard";
        this.sceneStyle = config?.scene_style || "cinematic";
        this.maxCharacters = config?.max_characters || 3;
        
        // Initialize Visual Scene Composer state
        this.visualState = {
            isGenerating: false,
            lastGeneratedImage: messageState?.last_generated_image,
            sceneContext: undefined,
            generationProgress: "Ready",
            errorMessage: undefined
        };
    }

    async load(): Promise<Partial<LoadResponse<InitStateType, ChatStateType, MessageStateType>>> {
        return {
            success: true,
            error: null,
            initState: { composer_ready: true },
            chatState: { generated_images: [] },
        };
    }

    async setState(state: MessageStateType): Promise<void> {
        if (state != null) {
            this.visualState = {
                ...this.visualState,
                lastGeneratedImage: state.last_generated_image || this.visualState.lastGeneratedImage
            };
        }
    }

    // NO AUTO-GENERATION - Only context storage
    async beforePrompt(userMessage: Message): Promise<Partial<StageResponse<ChatStateType, MessageStateType>>> {
        return {
            stageDirections: null,
            messageState: null,
            modifiedMessage: null,
            systemMessage: null,
            error: null,
            chatState: null,
        };
    }

    async afterResponse(botMessage: Message): Promise<Partial<StageResponse<ChatStateType, MessageStateType>>> {
        return {
            stageDirections: null,
            messageState: null,
            modifiedMessage: null,
            systemMessage: null,
            error: null,
            chatState: null
        };
    }

    // Visual Scene Composer - Chub Image API Integration
    private async generateSceneImage(prompt: string): Promise<string | null> {
        if (!this.chubApiKey) {
            throw new Error("No Chub API key configured");
        }

        const baseUrl = "https://api.chub.ai";
        const endpoint = "/images/text2img";
        
        const payload = {
            prompt: prompt,
            width: 1024,
            height: 1024,
            num_inference_steps: this.imageQuality === 'high' ? 50 : 30,
            guidance_scale: 3.5
        };

        try {
            // Initial generation request
            const response = await axios.post(`${baseUrl}${endpoint}`, payload, {
                headers: {
                    'Authorization': `Bearer ${this.chubApiKey}`,
                    'Content-Type': 'application/json'
                },
                timeout: 10000
            });

            const generationUuid = response.data?.generation_uuid;
            if (!generationUuid) {
                throw new Error("No generation UUID received");
            }

            // Poll for completion
            const maxAttempts = 30;
            const pollInterval = 2000;

            for (let attempt = 1; attempt <= maxAttempts; attempt++) {
                this.visualState.generationProgress = `Generating... ${attempt}/${maxAttempts}`;
                this.forceUpdate();

                await new Promise(resolve => setTimeout(resolve, pollInterval));

                try {
                    const checkResponse = await axios.post(`${baseUrl}/check`, {
                        generation_uuid: generationUuid,
                        request_type: "image"
                    }, {
                        headers: {
                            'Authorization': `Bearer ${this.chubApiKey}`,
                            'Content-Type': 'application/json'
                        },
                        timeout: 5000
                    });

                    const result = checkResponse.data;
                    const status = result.status || result.state;

                    if (status === 'completed') {
                        const imageUrl = result.image_url || result.url;
                        if (imageUrl) {
                            return imageUrl;
                        }
                        if (result.images && result.images.length > 0) {
                            return result.images[0];
                        }
                    } else if (status === 'failed' || status === 'error') {
                        throw new Error(`Generation failed: ${result.error || 'Unknown error'}`);
                    }
                } catch (pollError) {
                    console.warn(`Poll attempt ${attempt} failed:`, pollError);
                }
            }

            throw new Error("Generation timed out");
        } catch (error) {
            console.error("Image generation error:", error);
            throw error;
        }
    }

    // Main scene capture function - triggered by button press
    private captureScene = async () => {
        if (this.visualState.isGenerating) return;
        
        this.visualState.isGenerating = true;
        this.visualState.generationProgress = "Analyzing scene context...";
        this.visualState.errorMessage = undefined;
        this.forceUpdate();

        try {
            // Parse scene context from recent messages
            const sceneContext = await this.parseSceneContext();
            this.visualState.sceneContext = sceneContext;
            
            // Create scene prompt
            const scenePrompt = this.createScenePrompt(sceneContext);
            
            // Generate image
            this.visualState.generationProgress = "Generating scene image...";
            this.forceUpdate();
            
            const imageUrl = await this.generateSceneImage(scenePrompt);
            
            if (imageUrl) {
                this.visualState.lastGeneratedImage = imageUrl;
                this.visualState.generationProgress = "Scene captured successfully!";
            } else {
                throw new Error("No image URL returned");
            }
            
        } catch (error: any) {
            console.error("Scene capture error:", error);
            this.visualState.errorMessage = error.message || "Unknown error occurred";
            this.visualState.generationProgress = "Generation failed";
        } finally {
            this.visualState.isGenerating = false;
            this.forceUpdate();
            
            // Reset progress after 3 seconds
            setTimeout(() => {
                this.visualState.generationProgress = "Ready";
                this.visualState.errorMessage = undefined;
                this.forceUpdate();
            }, 3000);
        }
    }

    private async parseSceneContext(): Promise<SceneContext> {
        // Basic scene context parsing - will enhance later
        const sceneContext: SceneContext = {
            characters: ["characters"], // Will implement character detection
            location: "scene location",
            actions: "conversation",
            mood: "neutral",
            timeOfDay: "day"
        };
        
        return sceneContext;
    }

    private createScenePrompt(context: SceneContext): string {
        return `${this.sceneStyle} scene: ${context.characters.join(' and ')} ${context.actions} at ${context.location}, ${context.mood} mood, ${context.timeOfDay} lighting, high quality, detailed`;
    }

    private forceUpdate = () => {
        // Simple re-render trigger for React
        this.visualState = { ...this.visualState };
    }

    render(): ReactElement {
        return (
            <div style={{
                width: '100%',
                height: '100%',
                padding: '20px',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                color: '#ffffff',
                fontFamily: 'sans-serif',
                overflow: 'auto'
            }}>
                {/* Header */}
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ margin: '0 0 10px 0', color: '#ffd700' }}>
                        📸 Visual Scene Composer
                    </h3>
                    <div style={{ fontSize: '14px', opacity: 0.8 }}>
                        {this.sceneStyle} • {this.imageQuality} quality
                    </div>
                </div>

                {/* Scene Capture Controls */}
                <div style={{
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    padding: '15px',
                    marginBottom: '15px',
                    border: '1px solid rgba(255,215,0,0.3)'
                }}>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '10px'
                    }}>
                        <strong style={{ color: '#ffd700' }}>📸 Scene Capture</strong>
                        <button
                            onClick={this.captureScene}
                            disabled={this.visualState.isGenerating || !this.chubApiKey}
                            style={{
                                background: this.visualState.isGenerating || !this.chubApiKey ? '#666' : '#4a9eff',
                                border: 'none',
                                color: 'white',
                                padding: '8px 16px',
                                borderRadius: '15px',
                                cursor: this.visualState.isGenerating || !this.chubApiKey ? 'not-allowed' : 'pointer',
                                fontSize: '14px',
                                fontWeight: 'bold'
                            }}
                        >
                            {this.visualState.isGenerating ? '⏳ Generating...' : '📸 Capture Scene'}
                        </button>
                    </div>
                    
                    {/* Progress indicator */}
                    <div style={{
                        fontSize: '12px',
                        color: this.visualState.errorMessage ? '#ff6b6b' : this.visualState.isGenerating ? '#4a9eff' : '#ffd700',
                        marginBottom: '10px'
                    }}>
                        Status: {this.visualState.errorMessage || this.visualState.generationProgress}
                    </div>

                    {/* Generated image display */}
                    {this.visualState.lastGeneratedImage && (
                        <div style={{ marginTop: '15px' }}>
                            <img 
                                src={this.visualState.lastGeneratedImage} 
                                style={{ 
                                    width: '100%', 
                                    maxHeight: '300px',
                                    objectFit: 'cover',
                                    borderRadius: '10px',
                                    border: '2px solid rgba(255,215,0,0.5)'
                                }}
                                alt="Generated scene"
                            />
                        </div>
                    )}

                    {/* Scene context display */}
                    {this.visualState.sceneContext && (
                        <div style={{
                            marginTop: '10px',
                            fontSize: '12px',
                            opacity: 0.7,
                            fontStyle: 'italic'
                        }}>
                            Scene: {this.visualState.sceneContext.characters.join(', ')} • {this.visualState.sceneContext.location} • {this.visualState.sceneContext.mood}
                        </div>
                    )}
                </div>

                {/* API Status */}
                <div style={{
                    fontSize: '12px',
                    opacity: 0.7,
                    textAlign: 'center'
                }}>
                    {this.chubApiKey ? 
                        `🟢 Connected to Chub API` : 
                        "⚠️ No Chub API key configured - Add chub_api_key to stage settings"
                    }
                </div>
            </div>
        );
    }
}