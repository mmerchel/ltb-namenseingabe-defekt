'use client';

import { useState } from 'react';
import { Dice6 } from 'lucide-react';
import { generateNameSuggestions } from '@/utils/nameGenerator';

interface PlayerInputProps {
  onAddPlayer: (name: string) => void;
}

export default function PlayerInput({ onAddPlayer }: PlayerInputProps) {
  const [name, setName] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddPlayer(name.trim());
      setName('');
      setIsOpen(false);
    }
  };

  const handleGenerateNames = () => {
    const newSuggestions = generateNameSuggestions(name);
    setSuggestions(newSuggestions);
    setIsOpen(true);
  };

  const handleSelectName = (suggestion: string) => {
    setName(suggestion);
    setIsOpen(false);
  };

  return (
    <div className="panel p-6 mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="playerName" className="block mb-2 text-sm font-medium text-gray-200">
            Player Name
          </label>
          <div className="relative">
            <input
              id="playerName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter player name"
              className="w-full px-4 py-2 bg-[#2C2E33] border border-[#373A40] rounded-md 
                focus:outline-none focus:border-[#228be6] text-white placeholder-gray-500"
            />
            {isOpen && suggestions.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-[#2C2E33] border border-[#373A40] 
                rounded-md shadow-lg z-10 animate-fadeIn">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSelectName(suggestion)}
                    className="w-full text-left px-4 py-2 text-gray-200 hover:bg-[#373A40] transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={!name.trim()}
            className="flex-1 px-6 py-2.5 bg-[#228be6] text-white rounded-md 
              hover:bg-[#1c7ed6] transition-colors duration-200 font-medium
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Player
          </button>
          <button
            type="button"
            onClick={handleGenerateNames}
            className="px-4 py-2.5 bg-[#2C2E33] text-gray-300 rounded-md 
              hover:bg-[#373A40] transition-colors border border-[#373A40]
              flex items-center gap-2 hover:text-white min-w-[120px]
              justify-center"
          >
            <Dice6 className="w-5 h-5" />
            <span>Random</span>
          </button>
        </div>
      </form>
    </div>
  );
}
