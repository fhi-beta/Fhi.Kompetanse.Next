import Link from 'next/link'

export default function JanLayout({ children }) {
  return (
    <>
      <h2><Link href="/olkv">Ole-Martin</Link> </h2>


    <nav style={{fontSize:'1.2em',color:'Blue' }}   >
      <ul style={{display:'inline-block',margin:'10px'}}>
         <Link href="olkv/page1">Page1 (Server Componment) </Link>
      </ul>
      <ul style={{display:'inline-block',margin:'10px'}}>
        <Link href="olkv/page2">Page2 (Client Componment) </Link>
      </ul>
      <ul style={{display:'inline-block',margin:'10px'}}>
        <Link href="olkv/page3">Page3 (Call extern WebApi) </Link>
      </ul>
      
      <ul style={{display:'inline-block',margin:'10px'}}>
        <Link href="olkv/page4">Page4 (Call locale Api) </Link>
      </ul>

      <ul style={{display:'inline-block',margin:'10px'}}>
        <Link href="olkv/page5">Page5 (Music) </Link>
      </ul>

   </nav>

   {children}

   </>


  )
}
