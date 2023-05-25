import premierLeagueTeams from '@/data/premierLeagueTeams';
import TeamSelectorComponent from '@/components/olkv/TeamSelectorComponent';

export default function JanPage1() {


  
  return (
  <>
  <h2>Team selector</h2>
         <TeamSelectorComponent teams={premierLeagueTeams}>

         </TeamSelectorComponent>
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




