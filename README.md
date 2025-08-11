# Visual Scene Composer

**Context-driven image generation for roleplay chats**

## Overview

The Visual Scene Composer transforms conversations into visual scenes. Instead of auto-generating content like traditional narrators, it creates images **only when you want them** - completely on-demand.

## Features

- **🎯 On-Demand Only**: No auto-generation, no interruptions
- **📸 Scene Capture**: Single button to generate current scene  
- **🎨 Chub Integration**: Uses Chub's image generation APIs
- **⚡ Real-time Progress**: Live generation status updates
- **🔧 Configurable**: Adjustable quality, style, and parameters

## Usage

1. **Configure** your Chub API key in stage settings
2. **Chat normally** - the stage stays silent
3. **Press "📸 Capture Scene"** when you want a visual snapshot
4. **View generated image** directly in the stage panel

## Configuration

- **chub_api_key**: Your Chub API key (required)
- **image_quality**: "standard" or "high" 
- **scene_style**: Visual style (default: "cinematic")
- **max_characters**: Characters to include (1-5)

## Technical Details

- Built with React + TypeScript
- Uses Chub `/images/text2img` endpoint
- Polling-based generation monitoring
- Error handling and timeout protection
- No conversation interference

**Perfect for**: Visual storytelling, scene documentation, character references