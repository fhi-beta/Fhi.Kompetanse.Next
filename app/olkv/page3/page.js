

import ABigClientComponent from "@/components/jaei/ABigClientComponent"
import { Red_Rose } from "next/font/google";


export default async function  JanPage3() {

  async function getUserData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    https://jsonplaceholder.typicode.com/todos/1

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  }


  const userdata = await getUserData();



  return (
  <>
   <div style={{margin:'20px'}}>
          <h3>A List return from a WebApi</h3> 
          {
              userdata.map((user,index) => {
                return(

                    
                    <div style={{display:'grid',gridGap:'10px', gridTemplateColumns:'300px 300px 100px'}} >
                        <Name user={user}></Name>
                        <Adresse address={user.address}></Adresse>
                   </div>
                )
              })
          }
      </div>
   </>
  )
}

function  Name({user}) {
  return (
    <>
       <div>
          <div style={{fontSize:'1.4em' }}>
             {user.name} 
        </div>   
        <div>
          ({user.username}) 
         </div>   
       </div>
   </>
  )
 }


 function  Adresse({address}) {
  return (
    <>
        <div div style={{margin:'10px 10px',backgroundColor:'HighlightText',fontSize:'1.1em' }}>
            <div>
               {address.street}
            </div>   
            <div>
               {address.city}
            </div>  
         </div> 
    </>
  )
 }



/*
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
*/