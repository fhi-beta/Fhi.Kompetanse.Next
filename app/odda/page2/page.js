"use client"
import premierLeagueTeams from '@/data/premierLeagueTeams';
import { useState } from 'react';

const TavleCase = () => {
  const [team, setTeam] = useState('');

  const selectHandler = (e) => {
    if (e.target.value === 'Liverpool') return;
    setTeam(e.target.value);
  };

  return (
    <>
      <h1>TAVLE</h1>
      <div>
        <TeamSelector teams={premierLeagueTeams} selectHandler={selectHandler} />
        <div>{team && ('GO ' + team)} </div>
      </div>
    </>
  );
}

const TeamSelector = ({teams, selectHandler}) => {
  return (
    <select onChange={selectHandler}>
      <option value="">Velg lag</option>
      {teams.map((lag,index) => <option key={index} value={lag.navn}>{lag.navn}</option>)}
    </select>
  );
}


export default TavleCase;