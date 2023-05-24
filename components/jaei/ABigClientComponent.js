'use client'
import { useState } from "react";
import MyButtons from "@/components/jaei/PrimeButtons"

export default function ABigClientComponent() {
   const  [totalSum,setCounter]=useState(0);
   const  [buttonPushed,setButtonPushed]=useState('');

   const mycallback =(number)=> {
        console.log('textnumber='+number);
        setCounter( totalSum+number);
        setButtonPushed(number)
    } ; 

   

    return (
    <>
      <div style={{margin:'30px 10px'}}>
          A Big Client Component 
          <MyButtons mycallback={mycallback}></MyButtons>
          <div>
              Last buttomnppushed= <b>{buttonPushed}</b>  
          </div>
          <div>       
              Counter={totalSum}
          </div>       
      </div>
     </>
    )
  }