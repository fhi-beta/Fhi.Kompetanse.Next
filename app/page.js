import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <h2><Link href="/jaei">Jan</Link> </h2>
      <h2><Link href="/gali">Gaute</Link></h2>
      <h2><Link href="/elin">Elin</Link></h2>
      {/* Legg til din root link her  */} 
      <h2><Link href="/jaei">Jan</Link></h2>
      <h2><Link href="/odda">OddA</Link></h2>
      <h2><Link href="/matm">Marius</Link></h2>
      <h2><Link href="/jaei">Jan2</Link></h2>
      <h2><Link href="/dawe">Damian</Link></h2>
      <h2><Link href="/jaei">Jan</Link></h2>
      <h2><Link href="/olkv">Ole-Martin</Link></h2>
      <h2><Link href="/tgje">Torbjørn</Link></h2>
      <h2><Link href="/sophie">Sophie</Link></h2>
    </>
  )
}
