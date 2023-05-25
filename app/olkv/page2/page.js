

import ABigClientComponent from "@/components/jaei/ABigClientComponent"


export default function JanPage2() {

  let callback =(text)=> {
    console.log('text='+text)
  } ; 

  return (
  <>
  <h2>JanPage 1</h2>
         <ABigClientComponent></ABigClientComponent>
  </>
   
  )
}



