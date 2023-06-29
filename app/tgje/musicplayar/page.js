'use client'
import * as React from 'react';
import bandsongs from '@/data/tgjemusica';

export default function TgjeMusicPlayar() {
  
  const [valgtBand, setValgtBand] = React.useState(bandsongs[0]);

  const handleChange = (event) => {
    setValgtBand(event.target.value);
  };

  return (
  <>
  <h2>Musik Playar</h2>
  <div>
    <button name="Start">Start</button>
    <button name="Stop">Stop</button>

    <label>
        Velg gruppe
        <select value={valgtBand} onChange={handleChange}>
          {bandsongs.map((band, index) => (
            <option value={band.name}>{band.name}</option>
          ))}
        </select>
      </label>
  
  </div>
  </>
   
  )
}




