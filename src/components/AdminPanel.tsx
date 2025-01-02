import React, { useState } from 'react';
import { aiConfig, AIProvider } from '@/config/aiConfig';

const AdminPanel: React.FC = () => {
  const [provider, setProvider] = useState<AIProvider>(aiConfig.provider);
  const [apiKey, setApiKey] = useState(aiConfig.apiKey || '');

  const handleSave = () => {
    // In a real application, you would update the config on the server
    console.log('Saving config:', { provider, apiKey });
    // For demo purposes, we'll just update the local config
    aiConfig.provider = provider;
    aiConfig.apiKey = apiKey;
  };

  return (
    <div className="bg-[#25262b] p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Admin Settings</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">AI Provider</label>
        <select
          value={provider}
          onChange={(e) => setProvider(e.target.value as AIProvider)}
          className="w-full bg-[#2C2E33] text-white border border-[#373A40] rounded-md px-3 py-2"
        >
          <option value="none">None (Random Generation)</option>
          <option value="openai">OpenAI</option>
          <option value="huggingface">Hugging Face</option>
          <option value="gemini">Google Gemini</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">API Key</label>
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-full bg-[#2C2E33] text-white border border-[#373A40] rounded-md px-3 py-2"
          placeholder="Enter API key"
        />
      </div>
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-[#228be6] text-white rounded-md hover:bg-[#1c7ed6] transition-colors"
      >
        Save Settings
      </button>
    </div>
  );
};

export default AdminPanel;
