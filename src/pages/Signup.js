import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, CardBody, Col, Container, Row } from "react-bootstrap";
import { SignupFormulario } from "../components/SignupFormulario"


const Signup = () => {

    const [errores, setErrores] = useState({});
    const navegar = useNavigate();

    const registro = async ({username, password, nombre, email}) => {

        const error = {};
        setErrores(error);

        axios.post(SIGNUP_POST_ENDPOINT, {username, password, nombre, email},
            {headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}}
            ).then(respuesta => {
                console.log(respuesta)
                navegar("/src/pages/Signin.js")
            }).catch(err => {
                setErrores({ crear: err.respuesta.data.message})
            })
    }


    return (
        
        <Container id="Singupcon" className="mt-3 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center">Registro de usuario</h3>
                    <CardBody>
                        {errores.crear && <Alert variant="danger">{errores.crear}</Alert>}
                        <SignupFormulario errores={errores} callback={registro}></SignupFormulario>
                        <div className="mt-3">
                            <Link to='/Signin'>¿Ya estas registrado? Inicia sesion aqui</Link>
                        </div>
                    </CardBody>
                </Col>
            </Row>
        </Container>
    );

}


export {Signup}