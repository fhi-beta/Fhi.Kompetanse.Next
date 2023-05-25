import Link from 'next/link'

export default function TobbaLayout({ children }) {
  return (
    <>
      <h2><Link href="/tgje">Torbjørn</Link> </h2>


    <nav style={{fontSize:'1.2em',color:'Blue' }}   >
      <ul style={{display:'inline-block',margin:'10px'}}>
         <Link href="tgje/galleri">Rollegalleri</Link>
      </ul>
  </nav>

   {children}

   </>


  )
}
