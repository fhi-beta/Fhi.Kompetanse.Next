import artists from '@/data/elin/norwegianartists';

export default function ElinMusicPlayer() {

  return (
    <>
    <ArtistSelector />
    <NowPlaying />
    </>
    )
}

function ArtistSelector() {
  return(
    <>
    <label>Velg artist: 
    <select>
          {artists.map((artist) => (
            <option value={artist.name}>{artist.name}</option>
          ))}
        </select>
    </label>
    </>);
}

function NowPlaying() {
  return(
    <>
    <label>Spiller nå: </label>
    </>
  )
}