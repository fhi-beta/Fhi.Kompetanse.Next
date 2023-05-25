import Link from 'next/link'

export default function SophieLayout({ children }) {
  return (
    <>
      <h2><Link href="/sophie">Sophie</Link> </h2>


    <nav style={{fontSize:'1.2em',color:'Blue' }}   >
      <ul style={{display:'inline-block',margin:'10px'}}>
         <Link href="sophie/page1">Page1</Link>
      </ul>
      <ul style={{display:'inline-block',margin:'10px'}}>
         <Link href="sophie/page2">Page2</Link>
      </ul>

   </nav>

   {children}

   </>


  )
}
