import Link from 'next/link'

export default function JanLayout({ children }) {
  return (
    <>
      
    <nav style={{fontSize:'1.2em',color:'Blue' }}   >
    <ul style={{display:'inline-block',margin:'10px'}}>
        <li><Link href="elin">Elin Home</Link></li>
         <li><Link href="elin/studyList">Liste med undersøkelser</Link></li>
         <li><Link href="elin/studySelector">Nedtrekksliste med undersøkelser</Link></li>
      </ul>
   </nav>

   {children}

   </>


  )
}
