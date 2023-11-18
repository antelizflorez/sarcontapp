import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from '../layout/Navbar.js';
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import { Signup } from '../pages/Signup.js';
import { Signin } from '../pages/Signin.js';
import { Servicios } from '../pages/Servicios.js';


function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Nosotros' element={<Nosotros/>}></Route>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/Signin' element={<Signin/>}></Route>
          <Route path='/Servicios' element={<Servicios/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
