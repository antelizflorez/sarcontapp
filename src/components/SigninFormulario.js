import { useState } from "react";
import { Form, Button } from "react-bootstrap";


const SigninFormulario = ({errores, callback}) => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const enviarFormulario = (e) => {
        e.preventDefault();
        callback({username, password});
    }

    return (
        <Form onSubmit={enviarFormulario}>

            <Form.Group className="mt-3 mb-3" controlId="username">
                <Form.Label>Usuario</Form.Label>
                <Form.Control 
                type="text"
        
                value={username}
                onChange={e=>setUsername(e.target.value)}
                isInvalid={errores.username} />

                <Form.Control.Feedback type="invalid">
                    {errores.username}
                </Form.Control.Feedback> 
            </Form.Group>


            <Form.Group className="mt-3 mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                type="text"
                
                value={password}
                onChange={e=>setPassword(e.target.value)}
                isInvalid={errores.password} />

                <Form.Control.Feedback type="invalid">
                    {errores.password}
                </Form.Control.Feedback> 
            </Form.Group>


            <Button type="submit" variant="primary" className="mt-3">
                Iniciar sesion
            </Button>

        </Form>
    )
}


export { SigninFormulario }