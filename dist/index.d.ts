import { InitialData } from '@chub-ai/stages-ts';
import { LoadResponse } from '@chub-ai/stages-ts/dist/types/load';
import { Message } from '@chub-ai/stages-ts';
import { ReactElement } from 'react';
import { StageBase } from '@chub-ai/stages-ts';
import { StageResponse } from '@chub-ai/stages-ts';

declare type ChatStateType = {
    generated_images?: string[];
};

declare type ConfigType = {
    chub_api_key?: string;
    image_quality?: 'standard' | 'high';
    scene_style?: string;
    max_characters?: number;
};

declare type InitStateType = {
    composer_ready?: boolean;
};

/***
 Visual Scene Composer - Context-driven image generation for chats
 ***/
declare type MessageStateType = {
    last_generated_image?: string;
    scene_context?: any;
};

declare interface SceneContext {
    characters: string[];
    location: string;
    actions: string;
    mood: string;
    timeOfDay: string;
}

export declare class Stage extends StageBase<InitStateType, ChatStateType, MessageStateType, ConfigType> {
    visualState: VisualComposerState;
    private chubApiKey;
    private imageQuality;
    private sceneStyle;
    private maxCharacters;
    constructor(data: InitialData<InitStateType, ChatStateType, MessageStateType, ConfigType>);
    load(): Promise<Partial<LoadResponse<InitStateType, ChatStateType, MessageStateType>>>;
    setState(state: MessageStateType): Promise<void>;
    beforePrompt(userMessage: Message): Promise<Partial<StageResponse<ChatStateType, MessageStateType>>>;
    afterResponse(botMessage: Message): Promise<Partial<StageResponse<ChatStateType, MessageStateType>>>;
    private generateSceneImage;
    private captureScene;
    private parseSceneContext;
    private createScenePrompt;
    private forceUpdate;
    render(): ReactElement;
}

declare interface VisualComposerState {
    isGenerating: boolean;
    lastGeneratedImage?: string;
    sceneContext?: SceneContext;
    generationProgress: string;
    errorMessage?: string;
}

export { }
