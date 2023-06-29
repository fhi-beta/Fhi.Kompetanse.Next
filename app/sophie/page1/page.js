import hogwartsProfessors from '/data/hogwartsProfessors'
import Image from 'next/image'


export default function TgjeGalleri() {


  return (
  <>

         <TGJListServerComponent></TGJListServerComponent>

         <Image 
      src="/HPProf.png"
      width={400}
      height={400}
      alt="Hogwarts professors"
    />

  </>
   
  )
}

function TGJListServerComponent() {
  return (
    <>
      <div style={{margin:'20px'}}>
          {
              hogwartsProfessors.map((professor,index) => {
                return <li key={index}><b>{professor.name}</b>:<br/> {professor.subject}<br/><br/></li>
              })
          }
      </div>
    </>
  )
}

