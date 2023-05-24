import premierLeagueTeams from '@/data/premierLeagueTeams';


export default function JanPage1() {


  return (
  <>
  <h2>JanPage 1</h2>
         <AListServerComponent></AListServerComponent>
  </>
   
  )
}

function AListServerComponent() {
  return (
    <>
      <div style={{margin:'20px'}}>
          A List Server Component 
          {
              premierLeagueTeams.map((lag,index) => {
                return <li key={index}>{lag.navn}</li>
              })
          }
      </div>
    </>
  )
}




