import Image from 'next/image'
import Link from 'next/link'


export const metadata = {
  title: 'Damians sider'
}

export default function DamianHome() {
  return (
    <>
    <h2 style={{margin: '10px'}}><Link href="/dawe">
          <section class="wrapper">
        <div class="top">Damian</div>
        <div class="bottom" aria-hidden="true">Damian</div>
      </section>
      </Link>
      </h2>
    
  <div style={{display:'grid'}}>
   </div>

   <Image style={{margin: '10px'}}
      src="/dawe1.jpg"
      width={400}
      height={400}
      alt="Some picture"
    />
   </>
  )
}
