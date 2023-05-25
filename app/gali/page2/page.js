
'use client'
import * as React from 'react';
import premierLeagueTeams from '@/data/premierLeagueTeams';

export default function Test() {

  const [valgtLag, setValgtLag] = React.useState(premierLeagueTeams[0].navn);

  const handleChange = (event) => {
    setValgtLag(event.target.value);
  };

  return (
    <>
      <div>
      <label>
        Velg Lag
        <select value={valgtLag} onChange={handleChange}>
          {premierLeagueTeams.map((lag) => (
            <option value={lag.navn}>{lag.navn}</option>
          ))}
        </select>
      </label>

      <p>Heia {valgtLag}!</p>
    </div>
    </>
  )
}




