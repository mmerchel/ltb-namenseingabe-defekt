import { TeamId } from '@/types'

export const teamData: Record<TeamId, string> = {
  'red': 'Red Team',
  'ocean': 'Ocean Team',
  'green': 'Green Team',
  'yellow': 'Yellow Team',
  'pink': 'Pink Team',
  'blue': 'Blue Team'
};

export const teamOrder: TeamId[] = ['red', 'ocean', 'green', 'yellow', 'pink', 'blue'];

export const teamStyles = {
  'red': {
    border: 'border-red-600/50',
    borderSelected: 'border-red-500',
    text: 'text-red-500',
    textSelected: 'text-red-400',
    bgSelected: 'bg-red-900/30',
    hover: 'hover:border-red-500/70 hover:text-red-400 hover:bg-red-900/20',
    header: 'text-red-400',
    bg: 'bg-red-900/20',
    ring: 'ring-red-500',
    iconColor: 'text-red-500'
  },
  'ocean': {
    border: 'border-cyan-600/50',
    borderSelected: 'border-cyan-500',
    text: 'text-cyan-500',
    textSelected: 'text-cyan-400',
    bgSelected: 'bg-cyan-900/30',
    hover: 'hover:border-cyan-500/70 hover:text-cyan-400 hover:bg-cyan-900/20',
    header: 'text-cyan-400',
    bg: 'bg-cyan-900/20',
    ring: 'ring-cyan-500',
    iconColor: 'text-cyan-500'
  },
  'green': {
    border: 'border-green-600/50',
    borderSelected: 'border-green-500',
    text: 'text-green-500',
    textSelected: 'text-green-400',
    bgSelected: 'bg-green-900/30',
    hover: 'hover:border-green-500/70 hover:text-green-400 hover:bg-green-900/20',
    header: 'text-green-400',
    bg: 'bg-green-900/20',
    ring: 'ring-green-500',
    iconColor: 'text-green-500'
  },
  'yellow': {
    border: 'border-yellow-600/50',
    borderSelected: 'border-yellow-500',
    text: 'text-yellow-500',
    textSelected: 'text-yellow-400',
    bgSelected: 'bg-yellow-900/30',
    hover: 'hover:border-yellow-500/70 hover:text-yellow-400 hover:bg-yellow-900/20',
    header: 'text-yellow-400',
    bg: 'bg-yellow-900/20',
    ring: 'ring-yellow-500',
    iconColor: 'text-yellow-500'
  },
  'pink': {
    border: 'border-pink-600/50',
    borderSelected: 'border-pink-500',
    text: 'text-pink-500',
    textSelected: 'text-pink-400',
    bgSelected: 'bg-pink-900/30',
    hover: 'hover:border-pink-500/70 hover:text-pink-400 hover:bg-pink-900/20',
    header: 'text-pink-400',
    bg: 'bg-pink-900/20',
    ring: 'ring-pink-500',
    iconColor: 'text-pink-500'
  },
  'blue': {
    border: 'border-blue-600/50',
    borderSelected: 'border-blue-500',
    text: 'text-blue-500',
    textSelected: 'text-blue-400',
    bgSelected: 'bg-blue-900/30',
    hover: 'hover:border-blue-500/70 hover:text-blue-400 hover:bg-blue-900/20',
    header: 'text-blue-400',
    bg: 'bg-blue-900/20',
    ring: 'ring-blue-500',
    iconColor: 'text-blue-500'
  }
} as const;

export const appConfig = {
  projectName: 'LaserTag.Berlin',
  playgroundName: 'Großes Spielfeld',
  maxPlayers: 17,
  activePlayers: 16,
  maxTeams: 6
};
