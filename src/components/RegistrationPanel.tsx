'use client';

import { useState, useRef, useEffect } from 'react';
import { Dice6 } from 'lucide-react';
import { generateNameSuggestions, categories } from '@/utils/nameGenerator';
import { NameCategory, ThemeCategory } from '@/config/names';

interface RegistrationPanelProps {
  players: string[];
  onAddPlayer: (name: string) => boolean;
  onRemovePlayer: (name: string) => void;
  onDragStart: (player: string) => void;
}

export default function RegistrationPanel({ players, onAddPlayer, onRemovePlayer, onDragStart }: RegistrationPanelProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddPlayer(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="bg-[#25262b] p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Unassigned Players</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter player name"
            className="flex-1 px-3 py-2 bg-[#2C2E33] border border-[#373A40] rounded-md text-white"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#228be6] text-white rounded-md hover:bg-[#1c7ed6]"
          >
            Add
          </button>
        </div>
      </form>
      <ul className="space-y-2">
        {players.map((player) => (
          <li
            key={player}
            className="flex justify-between items-center bg-[#2C2E33] p-2 rounded-md"
            draggable
            onDragStart={() => onDragStart(player)}
          >
            <span>{player}</span>
            <button
              onClick={() => onRemovePlayer(player)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
