import React from 'react';
import SecondSlider from '../components/SecondSlider';
import { Link } from 'react-router-dom';


function Nosotros () {
    return (

    <div> 
        <section className='section' id='section-cata'>
                <div className="container">
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-headingNosotros'>¿Quienes somos?</h3>
                           
                            <p>
                            ¿Estás buscando una solución eficiente para gestionar tus finanzas y mantener un control total sobre tus cuentas? ¡No busques más! Nuestra plataforma contable es la respuesta a tus necesidades.

                            Nuestra plataforma contable ha sido diseñada para simplificar la gestión de tus finanzas, ya seas un pequeño empresario, un autónomo o una empresa grande. Con nuestras herramientas intuitivas y funciones avanzadas, podrás optimizar tus operaciones financieras de manera efectiva y ahorrar tiempo valioso.
                            </p>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="container">
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading-a'>¿Que puedes encontrar en SARCONT?</h3>
                            
                        </div>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        
                        <div className='col-md-4 text-center-justify'>
                            <h6>Automatización de tareas</h6>
                            <p>
                            Las plataformas contables automatizan muchas tareas rutinarias, como la entrada de datos, la conciliación bancaria y la generación de informes, lo que ahorra tiempo y reduce errores humanos.
                            </p>

                        </div>
                        <div className='col-md-4 text-center-justify'>
                            <h6>Mayor precisión</h6>
                            <p>
                            La automatización y la capacidad de realizar cálculos complejos de manera instantánea mejoran la precisión de los registros contables y los informes financieros.
                            </p>

                        </div>
                        <div className='col-md-4 text-center-justify'>
                            <h6>Acceso en línea</h6>
                            <p>
                            Puedes acceder a tu información financiera desde cualquier lugar con conexión a internet, lo que facilita la colaboración entre equipos y la toma de decisiones en tiempo real.
                            </p>
                        </div>
                        <div className='col-md-4 text-center-justify'>
                            <h6>Gestión de facturas y gastos</h6>
                            <p>
                            Facilitan la creación y gestión de facturas, así como el seguimiento de gastos, lo que agiliza los procesos y mejora la gestión de flujo de efectivo.
                            </p>

                        </div>
                        <div className='col-md-4 text-center-justify'>
                            <h6>Seguridad de datos</h6>
                            <p>
                            Ofrecen medidas de seguridad para proteger la información financiera sensible, como cifrado de datos y autenticación de dos factores, lo que brinda tranquilidad.
                            </p>

                        </div>
                        <div className='col-md-4 text-center-justify'>
                            <h6>Escalabilidad</h6>
                            <p>
                            Son flexibles y pueden adaptarse a las necesidades cambiantes de tu negocio a medida que creces.
                            </p>

                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>

            </section>

            <SecondSlider/>

            <section className='sectionSeguir'>
                <div className="container">
                        <div className='row'>
                            <div className='col-md-12 text-center'>
                                <h3 className='main-headingNosotros'>¡Unete y siguenos!</h3>
                            
                                <p>
                                Conoce nuestras redes sociales:
                                </p>
                                <hr/>
                                <ul><p>Facebook: @ModaVirtualOficial</p></ul>
                                <ul><p>Instagram: @ModaVirtualOficial</p></ul>
                                <ul><p>whatsapp: @ModaVirtualOficial</p></ul>
                                <hr/>
                                <Link to="/Contacto" class="btn btn-warning">¡Contactanos!</Link>
                            </div>
                        </div>
                    </div>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
         

        

    );

}

export default Nosotros;