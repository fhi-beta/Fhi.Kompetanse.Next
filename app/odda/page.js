import Image from 'next/image'

export default function OddaHome() {

  return (<>
    <h2>Oddas hommage to cats</h2>

    <Image 
      src="/oddCat.png"
      width={800}
      height={800}
      alt="Picture of the ugly cat"
    />
  </>);
}