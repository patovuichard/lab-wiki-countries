import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;
  return (
    <div>
      {countries.map((eachCountry) => {
        return (
          <div
            key={eachCountry.alpha3Code}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: '100px',
              padding: '20px 0px',
              border: '1px solid gray',
            }}
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
              alt="countryImg"
              width={40}
            />
            <Link
              to={`/${eachCountry.alpha3Code}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <span>{eachCountry.name.common}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
