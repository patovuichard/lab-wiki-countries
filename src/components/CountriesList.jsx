import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;
  return (
    <div className="container">
      {countries.map((eachCountry) => {
        const code = eachCountry.alpha2Code.toLowerCase();
        return (
          <p key={eachCountry.alpha3Code}>
            <Link to={`/country-details/${eachCountry.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${code}.png`}
                alt="countryImg"
                width={20}
              />
              {eachCountry.name.common}
            </Link>
          </p>
        );
      })}
    </div>
  );
}

export default CountriesList;
