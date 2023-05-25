import Link from 'next/link'

export default function JanLayout({ children }) {
  return (
    <>
      <h2><Link href="/jaei">Jan</Link> </h2>


    <nav style={{fontSize:'1.2em',color:'Blue' }}   >
      <ul style={{display:'inline-block',margin:'10px'}}>
         <Link href="jaei/page1">Page1 (Server Componment) </Link>
      </ul>
      <ul style={{display:'inline-block',margin:'10px'}}>
        <Link href="jaei/page2">Page2 (Client Componment) </Link>
      </ul>
      <ul style={{display:'inline-block',margin:'10px'}}>
        <Link href="jaei/page3">Page3 (Call extern WebApi) </Link>
      </ul>
      
      <ul style={{display:'inline-block',margin:'10px'}}>
        <Link href="jaei/page4">Page4 (Call locale Api) </Link>
      </ul>

   </nav>

   {children}

   </>


  )
}
