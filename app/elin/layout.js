import Link from 'next/link'

export default function JanLayout({ children }) {
  return (
    <>
      
    <nav style={{fontSize:'1.2em',color:'Blue' }}   >
    <ul style={{display:'inline-block',margin:'10px'}}>
        <Link href="elin">Elin Home</Link>
      </ul>
      <ul style={{display:'inline-block',margin:'10px'}}>
         <Link href="elin/page1">Alle undersøkelser (call Fhi.Hu.QDatabank API)</Link>
      </ul>
   </nav>

   {children}

   </>


  )
}
