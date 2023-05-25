import Link from 'next/link'

export default function GauteLayout({ children }) {
  return (
    <>
    <nav style={{fontSize:'1.2em',color:'Blue' }}   >
      <ul style={{display:'inline-block',margin:'10px'}}>
         <Link href="gali/page1">Page1</Link>
      </ul>
      <ul style={{display:'inline-block',margin:'10px'}}>
        <Link href="gali/page2">Page2</Link>
      </ul>
   </nav>

   {children}

   </>


  )
}
