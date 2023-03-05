import { useState } from 'react';
import allCountries from './countries.json';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(allCountries);
  // console.log(countries)
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: 'flex' }}>
        <CountriesList countries={countries} />
        <Routes>
          <Route
            path="/:alpha3Code"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
