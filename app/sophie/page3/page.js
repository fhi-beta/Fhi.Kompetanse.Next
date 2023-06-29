"use client"
import { useState, useEffect, useRef } from 'react';
import data from '/data/music.json'
import {FhiButton} from '@folkehelseinstituttet/react-components';

export default function Player() {
  const [selectedArtist, setSelectedArtist] = useState('');
  const [selectedSong, setSelectedSong] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playRandomly, setPlayRandomly] = useState(false);
  const [randomPlaying, setRandomPlaying] = useState(false); // New state variable
  const [artistInBold, setArtistInBold] = useState(false);
  const [trackInItalic, setTrackInItalic] = useState(false);

  const abortController = useRef(null); // New ref for the AbortController

  const handleArtistChange = (e) => {
    setSelectedArtist(e.target.value);
    setSelectedSong('');  // Reset song when changing artist
    setIsPlaying(false);  // Reset play state when changing artist
  };

  const handleSongChange = (e) => {
    setSelectedSong(e.target.value);
    setIsPlaying(false);  // Reset play state when changing song
  };

  const handlePlayStop = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePlayRandomlyChange = () => {
    setPlayRandomly(!playRandomly);
    setIsPlaying(false);  // Reset play state when changing mode
  };

  const stopRandomly = () => { // New function to stop random playing
    setPlayRandomly(false);
    if (abortController.current) {
      abortController.current.abort();
    }
  };

  const songs = selectedArtist ? data.find(artist => artist.artist === selectedArtist).sanger : [];

  // Fisher-Yates (aka Knuth) shuffle algorithm
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Function to play all songs randomly
  const playAllRandomly = async () => {
    abortController.current = new AbortController();
    const allSongs = shuffle(data.flatMap(artist => artist.sanger.map(song => ({artist: artist.artist, song: song}))));
    for (const {artist, song} of allSongs) {
      setSelectedArtist(artist);
      setSelectedSong(song);
      setIsPlaying(true);
      try {
        // Simulate playing song for 2 seconds
        await new Promise((resolve, reject) => {
          const timeout = setTimeout(resolve, 2000);
          abortController.current.signal.addEventListener('abort', () => {
            clearTimeout(timeout);
            reject();
          });
        });
      } catch (e) {
        // If the promise is aborted, break the loop
        break;
      }
    }
    setSelectedArtist('');
    setSelectedSong('');
    setIsPlaying(false);

    abortController.current = null;
  };

  // Start playing all songs randomly when playRandomly becomes true
  useEffect(() => {
    if (playRandomly) {
      playAllRandomly();
      setRandomPlaying(true);
    }
  }, [playRandomly]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
  }}>
    <h1>90s Music Player</h1>

    <select value={selectedArtist} onChange={handleArtistChange}>
      <option value="">--Please choose an artist--</option>
      {data.map((artist, index) => (
        <option key={index} value={artist.artist}>
          {artist.artist}
        </option>
      ))}
    </select>

    {selectedArtist && (
      <div>
        <h2>Selected Artist</h2>
        <p style={{ fontWeight: artistInBold ? 'bold' : 'normal' }}>{selectedArtist}</p>

        <select value={selectedSong} onChange={handleSongChange}>
          <option value="">--Please choose a song--</option>
          {songs.map((song, index) => (
            <option key={index} value={song}>
              {song}
            </option>
          ))}
        </select>

        {selectedSong && (
          <div>
            <h3>Selected Song</h3>
            <p style={{ fontStyle: trackInItalic ? 'italic' : 'normal' }}>{selectedSong}</p>
            <FhiButton onClick={handlePlayStop}>
              {isPlaying ? 'Stop' : 'Play'}
            </FhiButton>
            <p>{isPlaying ? 'Playing...' : 'Stopped'}</p>
          </div>
        )}
      </div>
    )}

    <div>
      <input 
        type="checkbox" 
        id="artistInBold" 
        checked={artistInBold} 
        onChange={() => setArtistInBold(!artistInBold)} 
      />
      <label htmlFor="artistInBold">Artist in Bold</label>

      <input 
        type="checkbox" 
        id="trackInItalic" 
        checked={trackInItalic} 
        onChange={() => setTrackInItalic(!trackInItalic)} 
      />
      <label htmlFor="trackInItalic">Track in Italic</label>
    </div>

    <div>
      <input 
        type="radio" 
        id="playRandomly" 
        name="playMode" 
        checked={playRandomly} 
        onChange={handlePlayRandomlyChange} 
      />
      <label htmlFor="playRandomly">Play all songs randomly</label>
    </div>

    {playRandomly && ( // Only show "Stop" button when random playing is in progress
      <FhiButton onClick={stopRandomly}>Stop</FhiButton>
    )}
  </div>
);
}
