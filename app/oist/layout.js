import Link from 'next/link'

export default function OisteinLayout({ children }) {
  return (
    <>
      <h2><Link href="/oist">Øistein</Link> </h2>

    <nav style={{fontSize:'1.2em',color:'Blue' }}   >
      <ul style={{display:'inline-block',margin:'10px'}}>
         <Link href="oist/page1">Side 1 (Fjelltopper)</Link>
      </ul>
   </nav>

   {children}
   </>
  )
}
