'use client'
import { useState } from "react";
import Image from 'next/image'

export default function DamiansClientComponent() {

  return (
    <>


      <div class="transform" style={{float: 'left', margin: '10px'}}>
        Damian Client Component
        <h2 style={{margin: '10px'}}>
          <section class="wrapper">
        <div class="top">D Client</div>
        <div class="bottom" aria-hidden="true">D Client</div>
      </section>
      </h2>
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