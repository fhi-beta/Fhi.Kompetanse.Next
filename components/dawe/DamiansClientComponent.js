'use client'
import { useState } from "react";
import Image from 'next/image'

export default function DamiansClientComponent() {

  return (
    <>

      <div class="transform" style={{ margin: '10px', float: 'left'}}>
        Damian Client Component
        <br></br>
        <Image 
      src="/dawe1.jpg"
      width={400}
      height={400}
      alt="Some picture"
    />
      </div>
    </>
  )
}