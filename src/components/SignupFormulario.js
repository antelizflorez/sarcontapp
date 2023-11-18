import { useState } from "react";
import { Form, Button } from "react-bootstrap";


const SignupFormulario = ({errores, callback}) => {
    
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const enviarFormulario = (e) => {
        e.preventDefault();
        callback({username, password, nombre, email});
    }

    return (
        <Form onSubmit={enviarFormulario}>

            
            <Form.Group className="mt-3 mb-3" controlId="nombre">
                <Form.Label>Nombres</Form.Label>
                <Form.Control 
                type="text"
                
                value={nombre}
                onChange={e=>setNombre(e.target.value)}
                isInvalid={errores.nombre} />

                <Form.Control.Feedback type="invalid">
                    {errores.nombre}
                </Form.Control.Feedback> 
            </Form.Group>


            <Form.Group className="mt-3 mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type="text"
                 
                value={email}
                onChange={e=>setEmail(e.target.value)}
                isInvalid={errores.email} />

                <Form.Control.Feedback type="invalid">
                    {errores.email}
                </Form.Control.Feedback> 
            </Form.Group>


            <Form.Group className="mt-3 mb-3" controlId="username">
                <Form.Label>Usuario</Form.Label>
                <Form.Control 
                type="text"
                placeholder="digita el nombre de tu usuario"
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
                placeholder="crea tu contraseña"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                isInvalid={errores.password} />

                <Form.Control.Feedback type="invalid">
                    {errores.password}
                </Form.Control.Feedback> 
            </Form.Group>


            <Button type="submit" variant="primary" className="mt-3">
                Crear usuario
            </Button>

        </Form>
    );
}

export { SignupFormulario }