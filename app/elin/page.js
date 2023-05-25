import Image from 'next/image'
import Link from 'next/link'


export const metadata = {
  title: 'Elin sin side'
}

export default function ElinHome() {
  return (
    <>
  <h2>Elin Hjem</h2>
  <div style={{display:'grid'}}>
       
      
   </div>

   <Image 
      src="/elin2.jfif"
      width={300}
      height={350}
      alt="Picture of the author"
    />
   </>
  )
}
