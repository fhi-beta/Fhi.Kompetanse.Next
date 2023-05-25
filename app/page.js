import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <h2><Link href="/jaei">Jan</Link> </h2>
      <h2><Link href="/elin">Elin</Link></h2>
      {/* Legg til din root link her  */} 
      <h2><Link href="/jaei">Jan</Link></h2>
      <h2><Link href="/odda">OddA</Link></h2>
      <h2><Link href="/matm">Marius</Link></h2>
      <h2><Link href="/jaei">Jan2</Link></h2>
      <h2><Link href="/dawe">Damian</Link></h2>
      <h2><Link href="/tgje">Torbjørn</Link></h2>

      <ImageGallery />
    </>
  )
}

//Thank you chat-gpt
const ImageGallery = () => {
  // Hent alle bildene fra public-mappen
  const images = require.context('../public', false, /\.(png|jpe?g|svg)$/);

  // Lag en liste med bildesøkere
  const imageKeys = images.keys();

  return (
    <div>
      <div className="image-grid">
        {imageKeys.map((imageKey) => {
          // Hent bildesøkeren for gjeldende bilde
          const image = images(imageKey);

          // Opprett en unik nøkkel for hvert bilde
          const key = imageKey.slice(2);

          //return <img key={key} src={image.default} alt={key} />;

          return <Link href={'/odda'}><Image key={key} src={image.default} alt={key} width={50} height={50} /></Link>;
        })}
      </div>
    </div>
  );
};
