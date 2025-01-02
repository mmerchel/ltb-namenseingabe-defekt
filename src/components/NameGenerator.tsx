'use client';

import { useState } from 'react';
import { generateNameSuggestions } from '@/utils/nameGenerator';
import { Dice6 } from 'lucide-react';

interface NameGeneratorProps {
  onSelectName: (name: string) => void;
  currentName?: string;
}

export default function NameGenerator({ onSelectName, currentName }: NameGeneratorProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleGenerateNames = () => {
    const newSuggestions = generateNameSuggestions(currentName);
    setSuggestions(newSuggestions);
    setIsOpen(true);
  };

  const handleSelectName = (name: string) => {
    onSelectName(name);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleGenerateNames}
        className="h-[42px] px-4 bg-[#2C2E33] text-gray-300 rounded-md 
          hover:bg-[#373A40] transition-colors border border-[#373A40]
          flex items-center gap-2 hover:text-white"
      >
        <Dice6 className="w-5 h-5" />
        <span>Random</span>
      </button>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute right-0 mt-2 w-64 bg-[#2C2E33] border border-[#373A40] 
          rounded-md shadow-lg z-10 animate-fadeIn overflow-hidden">
          <div className="py-1">
            {suggestions.map((name, index) => (
              <button
                key={index}
                onClick={() => handleSelectName(name)}
                className="w-full text-left px-4 py-2 text-gray-200
                  hover:bg-[#373A40] transition-colors"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
