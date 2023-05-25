import hhcharacters from '@/data/hhcharacters';


export default function TgjeGalleri() {


  return (
  <>
  <h2>Rolleliste</h2>
         <TGJListServerComponent></TGJListServerComponent>
  </>
   
  )
}

function TGJListServerComponent() {
  return (
    <>
      <div style={{margin:'20px'}}>
          {
              hhcharacters.map((characters,index) => {
                return <li key={index}><b>{characters.name}</b>:<br/> {characters.description}<br/><br/></li>
              })
          }
      </div>
    </>
  )
}




