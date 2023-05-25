import Link from 'next/link'

export default function JanLayout({ children }) {
  return (
    <>
      <h2><Link href="/svan">hoved siden</Link> </h2>


    <nav style={{fontSize:'1.2em',color:'Blue' }}   >
      <ul style={{display:'inline-block',margin:'10px'}}>
         <Link href="svan/page1">Side 1 </Link>
      </ul>
   </nav>

   {children}

   </>


  )
}
