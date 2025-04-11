import type { Model } from "@/types/flux";

export const flux_1_1_pro: Model = {
  name: "Flux 1.1 Pro",
  id: "fal-ai/flux-pro/v1.1",
  inputSchema: [
    {
      key: "prompt",
      type: "string",
      required: true
    },
    {
      key: "image_size",
      type: "enum",
      default: "portrait_4_3",
      options: ["square_hd", "square", "portrait_4_3", "portrait_16_9", "landscape_4_3", "landscape_16_9"]
    },
    {
      key: "sync_mode",
      type: "boolean",
      default: false
    },
    {
      key: "num_images",
      type: "number",
      default: 1
    },
    {
      key: "enable_safety_checker",
      type: "boolean",
      default: false
    },
    {
      key: "safety_tolerance",
      type: "enum",
      default: "6",
      options: ["1", "2", "3", "4", "5", "6"]
    },
    {
      key: "output_format",
      type: "enum",
      default: "jpeg",
      options: ["jpeg", "png"]
    },
    {
      key: "seed",
      type: "number"
    }
  ],
  outputSchema: [
    {
      key: "images",
      type: "array",
      items: {
        type: "object",
        properties: {
          url: { type: "string" },
          width: { type: "number" },
          height: { type: "number" },
          content_type: { type: "string" }
        }
      }
    },
    {
      key: "seed",
      type: "number"
    },
    {
      key: "has_nsfw_concepts",
      type: "array",
      items: { type: "boolean" }
    }
  ]
};

export const flux_1_1_pro_ultra: Model = {
  name: "Flux 1.1 Pro Ultra",
  id: "fal-ai/flux-pro/v1.1-ultra",
  inputSchema: [
    {
      key: "prompt",
      type: "string",
      required: true
    },
    {
      key: "aspect_ratio",
      type: "enum",
      default: "16:9",
      options: ["21:9", "16:9", "4:3", "1:1", "3:4", "9:16", "9:21"]
    },
    {
      key: "sync_mode",
      type: "boolean",
      default: false
    },
    {
      key: "num_images",
      type: "number",
      default: 1
    },
    {
      key: "enable_safety_checker",
      type: "boolean",
      default: false
    },
    {
      key: "safety_tolerance",
      type: "enum",
      default: "6",
      options: ["1", "2", "3", "4", "5", "6"]
    },
    {
      key: "output_format",
      type: "enum",
      default: "jpeg",
      options: ["jpeg", "png"]
    },
    {
      key: "raw",
      type: "boolean"
    },
    {
      key: "seed",
      type: "number"
    }
  ],
  outputSchema: [
    {
      key: "images",
      type: "array",
      items: {
        type: "object",
        properties: {
          url: { type: "string" },
          width: { type: "number" },
          height: { type: "number" },
          content_type: { type: "string" }
        }
      }
    },
    {
      key: "seed",
      type: "number"
    },
    {
      key: "has_nsfw_concepts",
      type: "array",
      items: { type: "boolean" }
    }
  ]
};

export const flux_lora: Model = {
  name: "Flux LoRA",
  id: "fal-ai/flux-lora",
  inputSchema: [
    {
      key: "prompt",
      type: "string",
      required: true
    },
    {
      key: "image_size",
      type: "enum",
      default: "landscape_4_3",
      options: ["square_hd", "square", "portrait_4_3", "portrait_16_9", "landscape_4_3", "landscape_16_9"]
    },
    {
      key: "num_inference_steps",
      type: "number",
      default: 35,
      validation: {
        min: 1,
        max: 50
      }
    },
    {
      key: "guidance_scale",
      type: "number",
      default: 3.5,
      validation: {
        min: 1,
        max: 10
      }
    },
    {
      key: "seed",
      type: "number"
    },
    {
      key: "loras",
      type: "array",
      items: {
        type: "object",
        properties: {
          path: {
            type: "string",
            description: "URL or path to the LoRA weights"
          },
          scale: {
            type: "number",
            description: "Scale factor for the LoRA weight (0 to 2)",
            validation: {
              min: 0,
              max: 2
            },
            default: 1
          }
        }
      },
      description: "LoRA weights to use for image generation"
    },
    {
      key: "sync_mode",
      type: "boolean",
      default: false
    },
    {
      key: "num_images",
      type: "number",
      default: 1
    },
    {
      key: "enable_safety_checker",
      type: "boolean",
      default: true
    },
    {
      key: "output_format",
      type: "enum",
      default: "jpeg",
      options: ["jpeg", "png"]
    }
  ],
  outputSchema: [
    {
      key: "images",
      type: "array",
      items: {
        type: "object",
        properties: {
          url: { type: "string" },
          width: { type: "number" },
          height: { type: "number" },
          content_type: { type: "string" }
        }
      }
    },
    {
      key: "seed",
      type: "number"
    },
    {
      key: "has_nsfw_concepts",
      type: "array",
      items: { type: "boolean" }
    }
  ]
};
