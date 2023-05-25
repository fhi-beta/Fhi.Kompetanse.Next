import Image from 'next/image'
import Link from 'next/link'


export const metadata = {
    title: 'Marius sider'
}

export default function MariusHome() {
    return (
        <>
            <h2>Marius Home</h2>
            <div style={{ display: 'grid' }}>


            </div>

            <Image
                src="/matm.jpg"
                width={400}
                height={400}
                alt="Picture of the author"
            />
        </>
    )
}
