import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from '../layout/Navbar.js';
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';


function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Nosotros' element={<Nosotros/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
