'use client'

export default function PrimeButton( {mycallback}  ) {
  return (
    <>
       <div style={{  display:'grid', gridTemplateColumns:'50px 50px 50px'}}>
          <button onClick={()=> mycallback(1)}>1</button>
          <button onClick={()=> mycallback(2)}>2</button>
          <button onClick={()=> mycallback(3)}>3</button>
          <button onClick={()=> mycallback(5)}>5</button>
          <button onClick={()=> mycallback(7)}>7</button>
          <button onClick={()=> mycallback(11)}>11</button>
          <button onClick={()=> mycallback(13)}>13</button>
          <button onClick={()=> mycallback(17)}>17</button>
          <button onClick={()=> mycallback(19)}>19</button>
      </div>
    </>
  )
}
