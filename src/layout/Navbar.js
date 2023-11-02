import React from 'react';
import { Link } from 'react-router-dom';


function Navbar () {
    return (
        <div className='Minavbar'> 
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>

                        <nav class="navbar navbar-expand-lg">
                            <div class="container-fluid">
                            <Link to="/Home" class="navbar-brand text-white">SARCONT</Link>
                            </div>
                        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/Home" class="nav-link active ">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Nosotros" class="nav-link active ">Nosotros</Link>
                            </li>
                            </ul>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active">Login</Link>
                            </li>
                            </ul>
                            </div>
                        </nav> 

                    </div>
                </div>
            </div>
        </div>
    );

}

export default Navbar;