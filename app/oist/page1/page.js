import fjelltopper from '@/data/fjelltopper';

export default function OisteinPage1() {
  return (
  <>
  <h2>Øisteins første side</h2>
  <u><a href="https://www.visitjotunheimen.no/">Visit Jotunheimen</a></u>
  <PeakComponent></PeakComponent>
  </>
  )
}

function PeakComponent() {
  return (
    <>
      <div style={{margin:'30px'}}>
          {
              fjelltopper.map((fjell,index) => {
                return <li key={index}>{fjell.topp + ", " + fjell.høyde + " moh"}</li>
              })
          }
      </div>
    </>
  )
}