import Image from 'next/image'
import Link from 'next/link'


export const metadata = {
  title: 'Øisteins sider'
}

export default function OisteinHome() {
  return (
    <>
  <h2>Øisteins fjord & fjellheim</h2>
  <div style={{display:'grid'}}>
   </div>
   <Image 
      src="/oist1.jpg"
      width={400}
      height={300}
      alt="Picture of the author at Vega"
    />
   </>
  )
}
