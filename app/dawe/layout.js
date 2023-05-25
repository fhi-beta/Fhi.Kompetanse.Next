import Link from 'next/link'

export default function DamianLayout({ children }) {
  return (
    <>
      <h2><Link href="/dawe">Damian</Link> </h2>

      <nav style={{ fontSize: '1.2em', color: 'Blue' }}   >
        <ul style={{ display: 'inline-block', margin: '10px' }}>
          <Link href="dawe/page1">Page (Client Componment) </Link>
        </ul>
      </nav>


      {children}

    </>


  )
}
