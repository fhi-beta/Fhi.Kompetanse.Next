import Image from 'next/image'
import Link from 'next/link'


export const metadata = {
  title: 'Damians sider'
}

export default function DamianHome() {
  return (
    <>
  <h2><Link href="/dawe">Damian</Link> </h2>
  <div style={{display:'grid'}}>
   </div>

   <Image 
      src="/dawe1.jpg"
      width={400}
      height={400}
      alt="Some picture"
    />
   </>
  )
}
