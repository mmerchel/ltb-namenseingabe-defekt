'use client';

import { useState, useEffect } from 'react';
import { TeamId, Team } from '@/types';
import { teamData, appConfig } from '@/config/teams';
import TeamSelector from './TeamSelector';
import TeamPanel from './TeamPanel';
import RegistrationPanel from './RegistrationPanel';
import ConfirmDialog from './ConfirmDialog';
import LoadingAnimation from './LoadingAnimation';

const LOCAL_STORAGE_KEY = 'teamShufflerState';

export default function TeamShuffler() {
  const [isLoading, setIsLoading] = useState(true);
  const [unassignedPlayers, setUnassignedPlayers] = useState<string[]>([]);
  const [selectedTeams, setSelectedTeams] = useState<TeamId[]>(['red', 'blue']);
  const [teams, setTeams] = useState<Team[]>([
    { id: 'red', name: teamData['red'], players: [] },
    { id: 'blue', name: teamData['blue'], players: [] }
  ]);
  const [draggedPlayer, setDraggedPlayer] = useState<{ name: string; source: 'team' | 'unassigned'; teamId?: string } | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    console.log('TeamShuffler useEffect running');
    const loadSavedState = () => {
      console.log('loadSavedState called');
      const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedState) {
        console.log('Saved state found:', savedState);
        const { unassignedPlayers, selectedTeams, teams } = JSON.parse(savedState);
        setUnassignedPlayers(unassignedPlayers);
        setSelectedTeams(selectedTeams);
        setTeams(teams);
      } else {
        console.log('No saved state found');
      }
      setIsLoading(false);
      console.log('isLoading set to false');
    };

    loadSavedState();
  }, []);

  console.log('TeamShuffler render', { isLoading, unassignedPlayers, selectedTeams, teams });

  if (isLoading) {
    console.log('Rendering LoadingAnimation');
    return <LoadingAnimation />;
  }

  console.log('Rendering main content');

  return (
    <div className="min-h-screen p-8 bg-[#1a1b1e] text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{appConfig.projectName}</h1>
        <TeamSelector 
          selectedTeams={selectedTeams}
          onTeamToggle={(teamId) => {
            console.log('Team toggled:', teamId);
            setSelectedTeams(current => 
              current.includes(teamId) 
                ? current.filter(id => id !== teamId)
                : [...current, teamId]
            );
          }}
        />
        <div className="grid grid-cols-2 gap-8 mt-8">
          <RegistrationPanel
            players={unassignedPlayers}
            onAddPlayer={(name) => {
              console.log('Adding player:', name);
              setUnassignedPlayers(prev => [...prev, name]);
              return true;
            }}
            onRemovePlayer={(name) => {
              console.log('Removing player:', name);
              setUnassignedPlayers(prev => prev.filter(player => player !== name));
            }}
            onDragStart={(player) => {
              console.log('Drag started:', player);
              setDraggedPlayer({ name: player, source: 'unassigned' });
            }}
          />
          <TeamPanel 
            teams={teams}
            onRemovePlayer={(name) => {
              console.log('Removing player from team:', name);
              setTeams(prev => prev.map(team => ({
                ...team,
                players: team.players.filter(player => player !== name)
              })));
            }}
            onMovePlayer={(playerId, targetTeamId) => {
              console.log('Moving player:', playerId, 'to team:', targetTeamId);
              // Implement move player logic
            }}
            onDragStart={(player, teamId) => {
              console.log('Drag started from team:', player, teamId);
              setDraggedPlayer({ name: player, source: 'team', teamId });
            }}
            draggedPlayer={draggedPlayer}
            unassignedPlayers={unassignedPlayers}
            onMoveTeam={(sourceTeamId, targetTeamId) => {
              console.log('Moving team:', sourceTeamId, 'to', targetTeamId);
              // Implement move team logic
            }}
            onAddUnassignedToTeam={(teamId) => {
              console.log('Adding unassigned players to team:', teamId);
              // Implement add unassigned to team logic
            }}
          />
        </div>
      </div>
    </div>
  );
}
