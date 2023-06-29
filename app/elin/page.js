import Image from 'next/image'

export const metadata = {
  title: 'Elin sin side'
}

export default function ElinHome() {
  return (
    <>
 
  <div style={{display:'grid'}}>
  </div>

   <Image 
      src="/elin2.jfif"
      width={300}
      height={350}
      alt="Picture of the author"
    />
   </>
  )
}
