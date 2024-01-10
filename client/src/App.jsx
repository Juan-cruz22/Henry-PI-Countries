import './App.css'
import { Route, Routes } from 'react-router-dom';
import Landingpage from './components/LandingPage/landingpage'
import Homepage from './components/HomePage/Homepage';
import Detailcountrie from './components/DetailCountrie/Detailcountrie';
import Form from './components/FormActivity/Formactivity';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Homepage/>} />
      <Route path='/detail/:name' element={<Detailcountrie/>} />
      <Route path='/form' element={<Form/>}/>
    </Routes>
    </>
  )
}

export default App;
