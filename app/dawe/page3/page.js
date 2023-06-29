import capitals from '@/data/capitals';
import Dselector from '@/components/dawe/SelectorComponent';

export default function DamianPage3() {
  return (
  <>
  <h2>Capitals</h2>
  <Dselector cities={capitals}></Dselector>
  </>
  )
}
