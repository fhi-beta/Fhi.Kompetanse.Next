import fjelltopper from '@/data/fjelltopper';
import Fjellvelger from '@/components/oist/SelectorComponent';

export default function OisteinPage2() {
  return (
  <>
  <h2>Øisteins andre side</h2>
  <Fjellvelger topper={fjelltopper}></Fjellvelger>
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