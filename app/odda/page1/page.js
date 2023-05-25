import companies from '@/data/companies';

export default function MinServerComponen() {
  return <Komponent />;
}

function Komponent() {
  return(<>
    <h3>De mest influential bedriftene i verden</h3>

    <table>
      <thead>
        <tr>
          <th>Navn</th>
          <th>omsetning</th>
          <th>Opprinnelsesland</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company, index) => {
          return (
            <tr key={index}>
              <td>{company.name}</td>
              <td>{company.gross_income}</td>
              <td>{company.place_of_origin}</td>
            </tr>
          )
        })}
      </tbody>      
    </table>
  </>);
}