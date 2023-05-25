'use client'
import { useState,useEffect } from "react";

export default function SelectorComponent({topper}) {
  const [selectedPeak, setSelectedPeak] = useState('')
  const handleChange = (event) => {
    setSelectedPeak(event.target.value)
  }

  return (
  <>
    <div style={{margin:'30px 10px'}}>
    Velg en fjelltopp:
    <select name="topper" id="topper" value={selectedPeak} onChange={handleChange}>
    {
      topper.map((fjell,index) => {
                //return <option key={index} value={fjell.topp}>{fjell.topp + ", " + fjell.høyde + " moh"}</option>
                return <option key={index} value={fjell.topp}>{fjell.topp}</option>
                })
    }
    </select>

    <p>God tur til {selectedPeak}!</p>
    </div>
  </>
  )
}