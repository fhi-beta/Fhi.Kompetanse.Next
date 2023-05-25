import Image from 'next/image'
import Link from 'next/link'


export const metadata = {
  title: 'Torbjørns sider'
}

export default function TgjeHome() {
  return (
    <>
   <Image 
      src="/hh.png"
      width={400}
      height={400}
      alt="Picture of the author"
    />
   </>
  )
}
