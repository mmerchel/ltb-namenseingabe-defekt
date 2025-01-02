import { nameConfig, nameSuffixes, namePrefixes, NameCategory, ThemeCategory } from '@/config/names';
import { aiConfig } from '@/config/aiConfig';
import OpenAI from 'openai';
import { HfInference } from '@huggingface/inference';
import { GoogleGenerativeAI } from '@google/generative-ai';

// ... (previous code remains)

async function generateAIName(baseName: string, category: NameCategory | 'random' | ThemeCategory): Promise<string> {
  switch (aiConfig.provider) {
    case 'openai':
      return generateOpenAIName(baseName, category);
    case 'huggingface':
      return generateHuggingFaceName(baseName, category);
    case 'gemini':
      return generateGeminiName(baseName, category);
    default:
      return generateRandomName(category);
  }
}

async function generateOpenAIName(baseName: string, category: NameCategory | 'random' | ThemeCategory): Promise<string> {
  const openai = new OpenAI({ apiKey: aiConfig.apiKey });
  const prompt = `Generate a creative gamertag for a player named "${baseName}" in the category "${category}". The name should be max 12 characters long and only use letters, numbers, and spaces.`;

  const completion = await openai.chat.completions.create({
    model: aiConfig.model || "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  return completion.choices[0].message.content?.slice(0, 12) || generateRandomName(category);
}

async function generateHuggingFaceName(baseName: string, category: NameCategory | 'random' | ThemeCategory): Promise<string> {
  const hf = new HfInference(aiConfig.apiKey);
  const prompt = `Generate a creative gamertag for a player named "${baseName}" in the category "${category}". The name should be max 12 characters long and only use letters, numbers, and spaces.`;

  const result = await hf.textGeneration({
    model: 'gpt2',
    inputs: prompt,
    parameters: {
      max_new_tokens: 15,
      return_full_text: false,
    },
  });

  return result.generated_text.slice(0, 12).trim();
}

async function generateGeminiName(baseName: string, category: NameCategory | 'random' | ThemeCategory): Promise<string> {
  const genAI = new GoogleGenerativeAI(aiConfig.apiKey!);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Generate a creative gamertag for a player named "${baseName}" in the category "${category}". The name should be max 12 characters long and only use letters, numbers, and spaces.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text.slice(0, 12).trim();
}

export async function generateNameSuggestions(
  existingName: string, 
  category?: NameCategory | 'random' | ThemeCategory, 
  usedNames: string[] = []
): Promise<string[]> {
  const suggestions: string[] = [];
  const usedNamesSet = new Set(usedNames);

  while (suggestions.length < 3) {
    let newName: string;
    if (aiConfig.provider !== 'none' && existingName) {
      newName = await generateAIName(existingName, category || 'random');
    } else if (existingName) {
      newName = modifyExistingName(existingName);
    } else {
      newName = generateRandomName(category);
    }

    newName = newName.slice(0, 12).replace(/[^a-zA-Z0-9 ]/g, '');

    if (!usedNamesSet.has(newName) && !suggestions.includes(newName)) {
      suggestions.push(newName);
    }
  }

  return suggestions;
}

// ... (rest of the code remains)
