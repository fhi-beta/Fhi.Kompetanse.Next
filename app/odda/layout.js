import Link from 'next/link'

export default function OddLayout({ children }) {
  return (
    <>
      <h2><Link href="/odda">Jan</Link> </h2>


    <nav style={{fontSize:'1.2em',color:'Blue' }}   >
      <ul style={{display:'inline-block',margin:'10px'}}>
         <Link href="odda/page1">Power-liste</Link>
      </ul>

   </nav>

   {children}

   </>


  )
}
