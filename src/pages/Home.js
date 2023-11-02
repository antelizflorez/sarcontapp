import React from 'react';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';


function Home () {
    return (
        <div>

            <Slider/>

             

            <section className='section' id='section-cata'>
                <div className="container">
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-heading'>SARCONT</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                            ¿Estás buscando una solución eficiente para gestionar tus finanzas y mantener un control total sobre tus cuentas? ¡No busques más! 
                            </p>
                            <p>
                            No esperes más para transformar la manera en que gestionas tus cuentas. Únete a miles de empresas que ya confían en nuestra plataforma contable. ¡Regístrate hoy y descubre cómo puedes mejorar tu eficiencia y tomar el control de tu éxito financiero!
                            </p>
                            <Link to="/Nosotros" class="btn btn-warning">¡Conoce mas sobre nosotros!</Link>
                        </div>
                    </div>
                </div>
            </section>

            

            <section className='section bg-c-light'>
                <div className="container">
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading1'>¿Que puedes encontrar en SARCONT?</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className='col-md-4 text-center-justify'>
                            <h6>Automatización de tareas</h6>
                            <p>
                            Olvídate de la entrada manual de datos. Nuestra plataforma automatiza la mayoría de las tareas contables, desde la creación de facturas hasta la conciliación bancaria. Esto te permite reducir errores y minimizar el tiempo que pasas en la contabilidad.
                            </p>

                        </div>
                        <div className='col-md-4 text-center-justify'>
                            <h6>Acceso en línea</h6>
                            <p>
                            Puedes acceder a tus datos financieros desde cualquier lugar y en cualquier momento. Esto es especialmente útil si necesitas realizar un seguimiento de tus finanzas mientras estás en movimiento.
                            </p>

                        </div>
                        <div className='col-md-4 text-center-justify'>
                            <h6>Cumplimiento fiscal</h6>
                            <p>
                            Mantente al día con las obligaciones fiscales. Nuestra plataforma está actualizada con las últimas regulaciones fiscales, lo que te permitirá evitar sanciones y multas innecesarias.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );

}

export default Home;