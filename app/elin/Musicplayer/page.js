'use client'
import * as React from 'react';
import artists from '@/data/elin/norwegianartists';

export default function ElinMusicPlayer() {

  return (
    <>
    <ArtistSelector />
    </>
    )
}

function ArtistSelector() {
  
  const [selectedArtist, setSelectedArtist] = React.useState(artists[0].name);
  const [tracks, setTracks] = React.useState([]);
  const [isPlaying, setIsPlaying] = React.useState(false);
  
  const handleChange = (event) => {
    const selectedValue = event.target.value;

    setSelectedArtist(selectedValue);

    const selectedArtist = artists.find((artist) => artist.name === selectedValue);
    
    if (selectedArtist) {
      setTracks(selectedArtist.tracks);
    } else {
      setTracks([]);
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
    // Add your logic for playing the music here
  };

  const handleStop = () => {
    setIsPlaying(false);
    // Add your logic for stopping the music here
  };

  return(
    <>
    <label>Artister: 
    <select value={selectedArtist} onChange={handleChange}>
          {artists.map((artist) => (
            <option value={artist.name}>{artist.name}</option>
          ))}
        </select>
    </label>
    <br/><br/>    
    <label>Spor:</label>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>{track}</li>
        ))}
      </ul>
    <br/>
    <button onClick={handlePlay} disabled={isPlaying}>
        Play
    </button>
    <button onClick={handleStop} disabled={!isPlaying}>
        Stop
      </button>
    </>);
}