'use client'
import { useState } from "react";

export default function TeamSelectorComponent({teams}) {


   

    return (
    <>
      <div style={{margin:'30px 10px'}}>
          My selector
          <select name="teams" id="teams"> 
          {
              teams.map((lag,index) => {
                return <option key={index} value={lag.navn}>{lag.navn}</option>
              } )
          }
</select>    
      </div>
     </>
    )

}