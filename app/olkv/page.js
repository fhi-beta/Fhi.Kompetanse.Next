import Image from 'next/image'
import Link from 'next/link'


export const metadata = {
  title: 'Ole-Martin sider'
}

export default function JanHome() {
  return (
    <>
  <h2>Ole-Martin Home</h2>
  <div style={{display:'grid'}}>
       
      
   </div>

   <Image 
      src="/present-package.jpg"
      width={400}
      height={400}
      alt="Picture of the author"
    />
   </>
  )
}
