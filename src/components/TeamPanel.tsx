'use client';

import { Team, TeamId } from '@/types';
import { teamStyles } from '@/config/teams';

interface TeamPanelProps {
  teams: Team[];
  onRemovePlayer: (name: string) => void;
  onMovePlayer: (playerId: string, targetTeamId: TeamId) => void;
  onDragStart: (player: string, teamId: string) => void;
  draggedPlayer: { name: string; source: 'team' | 'unassigned'; teamId?: string } | null;
  unassignedPlayers: string[];
  onMoveTeam: (sourceTeamId: TeamId, targetTeamId: TeamId) => void;
  onAddUnassignedToTeam: (teamId: TeamId) => void;
}

export default function TeamPanel(props: TeamPanelProps) {
  // ... Component implementation ...
}
