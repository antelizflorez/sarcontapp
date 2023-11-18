import React from "react"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, CardBody, Col, Container, Row } from "react-bootstrap";
import { SigninFormulario } from "../components/SigninFormulario";

const Signin = () => {

    const [errores, setErrores] = useState({});
    const navegar = useNavigate();

    const registro = async ({username, password}) => {

        const error = {};
        setErrores(error);

        axios.post(SIGNUP_POST_ENDPOINT, {username, password},
            {headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}}
            ).then(respuesta => {
                console.log(respuesta)
                navegar("#")
            }).catch(err => {
                setErrores({ crear: err.respuesta.data.message})
            })
    }


    return (
        <Container id="Singin" className="mt-3 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center">Iniciar sesion</h3>
                    <CardBody>
                        {errores.crear && <Alert variant="danger">{errores.crear}</Alert>}
                        <SigninFormulario errores={errores} callback={registro}></SigninFormulario>
                    </CardBody>
                </Col>
            </Row>
        </Container>
    )

} 

export { Signin }