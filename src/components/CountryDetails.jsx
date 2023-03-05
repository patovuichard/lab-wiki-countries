import { Link, useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { alpha3Code } = useParams();
  const allCountries = props.countries;

  // console.log(alpha3Code);
  // console.log(allCountries);
  const oneCountry = allCountries.filter(
    (allCountries) => allCountries.alpha3Code === alpha3Code
  );
  console.log(oneCountry);
  return (
    <div style={{width: "500px", padding: "40px"}}>
      <h3>CountryDetails</h3>
      {oneCountry.map((elem) => {
        return (
          <div key={elem.alpha3Code}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`}
              alt="img"
              width={200}
            />
            <h1>{elem.name.common}</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <p>Capital</p>
              <p>{elem.capital}</p>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <p>Area</p>
              <p>{elem.area}km*km</p>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <p>Borders</p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {elem.borders.map((elemento) => {
                  return (
                    <ul>
                      <Link>{elemento}</Link>
                      <br />
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CountryDetails;
