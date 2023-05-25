'use client'
import { useState, useEffect } from "react";

export default function Dselector({cities}) {
  const [selectedItem, setSelectedItem] = useState('')
  const handleChange = (event) => {
    setSelectedItem(event.target.value)
  }

  return (
  <>
    <div style={{margin:'30px 10px'}}>
    Velg en by:
    <select name="cities" id="cities" value={selectedItem} onChange={handleChange}>
    {
      cities.map((by,index) => {
                return <option key={index} value={by.capital}>{by.capital}</option>
                })
    }
    </select>

    <p>Du har valgt {selectedItem}!</p>
    </div>
  </>
  )
}