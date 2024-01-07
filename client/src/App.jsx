import './App.css'
import { Route, Routes } from 'react-router-dom';
import Landingpage from './components/LandingPage/landingpage'
import Homepage from './components/HomePage/Homepage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Homepage/>} />
    </Routes>
    </>
  )
}

export default App;
