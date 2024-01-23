import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';
import Detailcountrie from './components/DetailCountrie/Detailcountrie';
import Form from './components/FormActivity/Formactivity';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './components/SearchBar/Searchbar';
import Landingpage from './components/LandingPage/landingpage';

function App() {
  const [countries, setCountries] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch('http://localhost:3001/countries')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los países: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        setCountries(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const onSearch = async (name) => {
    try {
      if (name === '') {
        const response = await axios.get('http://localhost:3001/countries');
        setCountries(response.data);
      } else {
        const response = await axios.get(`http://localhost:3001/countries/${name}`);
        setCountries(response.data);
      }
    } catch (error) {
      setCountries([]);
    }
  };
  const showSearchbar = location.pathname !== '/' && location.pathname !== '/actividad' && location.pathname !== '/activities' && !location.pathname.startsWith('/detail');
  return (
    <>
      {showSearchbar && <Searchbar onSearch={onSearch} />}
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/home' element={<Homepage countries={countries} onSearch={onSearch} />} />
        <Route path='/detail/:name' element={<Detailcountrie />} />
        <Route path='/activities' element={<Form />} />
      </Routes>
    </>
  );
}

export default App;