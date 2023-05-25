'use client'
import { useState,useEffect } from "react";

export default  function QDatabankComponent() {
 
   const [hello,setHello]=useState(); 

   async function getHello() {
       const res = await fetch('https://test-fhi-hu-qdatabank-api.azurewebsites.net/api/v1/Study');
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
      }
      return await res.json();
    } 

    useEffect(() => {

      (async () => {
         const message = await getHello();
         setHello(message);
      })();
      
      return () => {
      // this now gets called when the component unmounts
      };
      
      }, []);







    return (
      <>
        <div style={{margin:'30px 10px'}}>
            A Webapi respons 
            <div>       
                Hello:={hello}
            </div>       
        </div>
       </>
      )
  }