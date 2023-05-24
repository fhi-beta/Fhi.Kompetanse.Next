import Image from 'next/image'
import Link from 'next/link'


export const metadata = {
  title: 'Jans sider'
}

export default function JanHome() {
  return (
    <>
  <h2>Jan Home</h2>
  <div style={{display:'grid'}}>
       
      
   </div>

   <Image 
      src="/jaei1.jpeg"
      width={400}
      height={400}
      alt="Picture of the author"
    />
   </>
  )
}
