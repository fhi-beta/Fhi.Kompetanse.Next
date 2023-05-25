

import ABigClientComponent from "@/components/jaei/ABigClientComponent"


export default function JanPage2() {

  let callback =(text)=> {
    console.log('text='+text)
  } ; 

  return (
  <>
  <h2>JanPage 2</h2>
         <ABigClientComponent></ABigClientComponent>
  </>
   
  )
}



