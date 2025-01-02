export type AIProvider = 'none' | 'openai' | 'huggingface' | 'gemini';

export interface AIConfig {
  provider: AIProvider;
  apiKey?: string;
  model?: string;
}

export const aiConfig: AIConfig = {
  provider: 'none', // Change this to 'openai', 'huggingface', or 'gemini' to enable AI
  apiKey: 'your-api-key-here', // Replace with your actual API key
  model: 'text-davinci-002', // For OpenAI, adjust as needed
};
