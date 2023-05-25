import Image from 'next/image'
import Link from 'next/link'


export const metadata = {
  title: 'Elin sin side'
}

export default function ElinHome() {
  return (
    <>
  <h2>Elin Home</h2>
  <div style={{display:'grid'}}>
       
      
   </div>

   <Image 
      src="/elin.jfif"
      width={400}
      height={400}
      alt="Picture of the author"
    />
   </>
  )
}
