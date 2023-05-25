import Link from 'next/link'

export default function MariusLayout({ children }) {
    return (
        <>
            <h2><Link href="/matm">Marius</Link> </h2>

            <nav style={{ fontSize: '1.2em', color: 'Blue' }}   >
                <ul style={{ display: 'inline-block', margin: '10px' }}>
                    <Link href="matm/page1">Page1 (Server Componment) </Link>
                </ul>

            </nav>

            {children}

        </>


    )
}
