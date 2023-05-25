import capitals from '@/data/capitals';

export default function MinServerComponen() {
  return <Komponent />;
}

function Komponent() {
  return(<>
    <h3>De mest influential bedriftene i verden</h3>|

    <table>
      <thead>
        <tr>
          <th>Capital</th>
          <th>Country</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        {capitals.map((city, index) => {
          return (
            <tr key={index}>
              <td>{city.capital}</td>
              <td>{city.country}</td>
              <td>{city.population}</td>
            </tr>
          )
        })}
      </tbody>      
    </table>
  </>);
}