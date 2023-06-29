'use client'
import React, { useState, useEffect } from 'react';

export default function About() {
  const [selectedGruppe, setSelectedGruppe] = useState('');
  const [nowPlaying, setNowPlaying] = useState({ gruppe: '', sang: '' });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };
    const Grupper = ['Led Zeppelin', 'Genesis', 'Pink Floyd'];

    const Sanger = {
      'Led Zeppelin': ['Stairway to Heaven', 'Kashmir', 'Black Dog', 'Whole Lotta Love', 'Immigrant Song'],
      'Genesis': ['Land of Confusion', 'Mama', 'Invisible Touch', 'I Can\'t Dance', 'Tonight, Tonight, Tonight'],
      'Pink Floyd': ['Wish You Were Here', 'Comfortably Numb', 'Another Brick in the Wall', 'Time', 'Money'],
    };

     useEffect(() => {
      // Hent nåværende sang eller tilfeldig sang hvert 10. sekund
      const interval = setInterval(getNowPlaying, 10000);
      return () => clearInterval(interval);
    }, []);

    const getNowPlaying = () => {
      // Implementer logikk for å hente nåværende sang fra serveren
      // og oppdater 'nowPlaying' tilstanden
      const randomGruppe = Grupper[Math.floor(Math.random() * Grupper.length)];
      const randomSang = Sanger[randomGruppe][Math.floor(Math.random() * Sanger[randomGruppe].length)];
      setNowPlaying({ gruppe: randomGruppe, sang: randomSang });
    };
  
    const handleSelectGruppe = (e) => {
      setSelectedGruppe(e.target.value);
      console.log(e.target.value);
      console.log(selectedGruppe);
      
      const randomGruppe = Grupper[Math.floor(Math.random() * Grupper.length)];
      const randomSang = Sanger[randomGruppe][Math.floor(Math.random() * Sanger[randomGruppe].length)];
      setNowPlaying({ gruppe: randomGruppe, sang: randomSang });
    };
  
    const handleNext = () => {
      // Implementer logikk for å spille neste sang
      getNowPlaying();
    };
  
    const handleStart = () => {
      // Implementer logikk for å starte avspilling
    };
  
    const handleStop = () => {
      // Implementer logikk for å stoppe avspilling
    };
  

  return (
    <div>
      <h1>Music Player</h1>

      <h2>Select Gruppe</h2>
      <select value={selectedGruppe} onChange={handleSelectGruppe}>
        <option value="">Velg en gruppe</option>
        {Grupper.map((gruppe) => (
          <option key={gruppe} value={gruppe}>{gruppe}</option>
        ))}
      </select>
      <p>Selected group: {selectedGruppe}</p>

      <h2>Now Playing</h2>
      <p>Now Playing: {nowPlaying.gruppe} - {nowPlaying.sang}</p>
    
      <h2>Controls</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}