import fjelltopper from '@/data/fjelltopper';
import Fjellvelger from '@/components/oist/SelectorComponent';

export default function OisteinPage2() {
  return (
  <>
  <h2>Øisteins andre side</h2>
  <Fjellvelger topper={fjelltopper}></Fjellvelger>
  </>
  )
}
