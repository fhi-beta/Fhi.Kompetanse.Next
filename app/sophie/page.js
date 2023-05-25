import Image from 'next/image'
import Link from 'next/link'


export const metadata = {
  title: 'Sophie sin side'
}

export default function SophieHome() {
  return (
    <>
  <h2>Sophies Home Page</h2>
  <div style={{display:'grid'}}>
       
      
   </div>

   <Image 
      src="/sophie.png"
      width={400}
      height={400}
      alt="Picture of the author"
    />
   </>
  )
}
