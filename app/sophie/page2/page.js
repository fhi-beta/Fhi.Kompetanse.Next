
'use client'
import * as React from 'react';
import hogwartsProfessors from '@/data/hogwartsProfessors';
import Image from 'next/image'

export default function Test() {

  const [valgtProfessor, setValgtProfessor] = React.useState(hogwartsProfessors[0].name);

  const handleChange = (event) => {
    setValgtProfessor(event.target.value);
  };

  return (
    <>
      <div>
      <label>
        Velg din favoritt
        <select value={valgtProfessor} onChange={handleChange}>
          {hogwartsProfessors.map((professor) => (
            <option value={professor.name}>{professor.name}</option>
          ))}
        </select>
      </label>

      <p>Heia {valgtProfessor}!</p>

    </div>
    </>
  )
}




