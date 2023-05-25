
'use client'
import * as React from 'react';

export default function Test() {

  const studies = [
    {
      "fullName": "Den norske mor, far og barn studien",
      "shortName": "MoBa"
    },
    {
      "fullName": "Fylkeshelseundersøkelsen",
      "shortName": "FHUS"
    }
  ]

  const [selectedStudy, setSelectedStudy] = React.useState(studies[0].navn);

  const handleChange = (event) => {
    setSelectedStudy(event.target.value);
  };

  return (
    <>
      <div>
      <label>
        Velg undersøkelse:
        <select value={selectedStudy} onChange={handleChange}>
          {studies.map((study) => (
            <option value={study.shortName}>{study.fullName}</option>
          ))}
        </select>
      </label>

      <p>Valgt undersøkelse: {selectedStudy}!</p>
    </div>
    </>
  )
}




