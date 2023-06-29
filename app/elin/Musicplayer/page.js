import artists from '@/data/elin/norwegianartists';

export default function ElinMusicPlayer() {
  return <ArtistSelector />;
}

function ArtistSelector() {
  return(<>
    <label>Velg artist: 
    <select>
          {artists.map((artist) => (
            <option value={artist.name}>{artist.name}</option>
          ))}
        </select>
    </label>
  </>);
}