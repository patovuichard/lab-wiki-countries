import { useState } from 'react';
import allCountries from "./countries.json"
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [countries, setCountries] = useState(allCountries)
  // console.log(countries)
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries}/>
      <Routes>
        <Route path="/country-details/:alpha3Code" element={<CountryDetails />}/>
      </Routes>

    </div>
  );
}

export default App;
