
export default async function  ElinPage1() {

  async function getStudies() {
    const res = await fetch('https://test-fhi-hu-qdatabank-api.azurewebsites.net/api/v1/Study');
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


  const studies = await getStudies();



  return (
  <>
   <div style={{margin:'20px'}}>
          <h3>En liste med undersøkelser fra QDatabank Poc:</h3> 
          {
              studies.map((study,index) => {
                return(
                    <div style={{display:'grid',gridGap:'10px', gridTemplateColumns:'300px 300px 100px'}} >
                        <Study study={study}></Study>
                   </div>
                )
              })
          }
      </div>
   </>
  )
}

function  Study({study}) {
  return (
    <>
       <div>
          <div style={{fontSize:'1.4em' }}>
             - {study.fullName} ({study.shortName})
        </div>           
       </div>
   </>
  )
 }