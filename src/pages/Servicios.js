import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import a1 from '../assets/images/a1.png'
import a2nuevo from '../assets/images/a2nuevo.png'
import a3 from '../assets/images/a3.png'
import a4 from '../assets/images/a4.png'
import a5 from '../assets/images/a5.png'

const Servicios = () => {

    return (

        

        <Container className="mt-3">
      <h3 className="serviciosplata">Servicios de la Plataforma Contable</h3>
      <br/>
      <hr/>
      <br/>
      
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={a1} alt="Servicio 1" />
            <Card.Body>
              <Card.Title>Servicio 1</Card.Title>
              <Card.Text>
                <h2>Herramientas</h2>
                Contamos con un buen catalogo de herramientas para tu gestion financiera.
                <p>Facilitamos la colaboración entre equipos contables y departamentos relacionados al proporcionar acceso en tiempo real a la información financiera. Esto fomenta la comunicación fluida y garantiza la coherencia de los datos en toda la organización.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={a2nuevo} alt="Servicio 2" />
            <Card.Body>
              <Card.Title>Servicio 2</Card.Title>
              <Card.Text>
              <h2>Reportes</h2>
                Aplicamos varios modelos de reportes para garantizar tu trabajo.
                <p>Más allá de las tablas y los números, nuestros informes ofrecen visualizaciones gráficas interactivas. Gráficos de torta, barras y líneas facilitan la interpretación rápida de los datos, permitiendo identificar tendencias y patrones con solo un vistazo.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={a3} alt="Servicio 3" />
            <Card.Body>
              <Card.Title>Servicio 3</Card.Title>
              <Card.Text>
              <h2>Ventas</h2>
                Gestiona tus movimientos y ventas realizados.
                <p>Mantenga un control preciso sobre los pagos pendientes y las cuentas por cobrar. Nuestro sistema proporciona herramientas para realizar un seguimiento en tiempo real de las transacciones financieras, permitiéndole tomar decisiones informadas para mantener una salud financiera óptima.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={a4} alt="Servicio 4" />
            <Card.Body>
              <Card.Title>Servicio 4</Card.Title>
              <Card.Text>
              <h2>Recaudos</h2>
                Administra y almacena toda tu informacion. 
                <p>Cada transacción de recaudo se refleja automáticamente en los libros contables, eliminando la necesidad de entradas manuales. Esto no solo acelera el proceso contable, sino que también reduce la posibilidad de errores humanos.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={a5} alt="Servicio 5" />
            <Card.Body>
              <Card.Title>Servicio 5</Card.Title>
              <Card.Text>
                <h2>Nomina</h2>
                Obtendras datos verificados.
                <p>Simplificamos el proceso de conciliación bancaria mediante la automatización. Nuestra herramienta se integra con los estados de cuenta bancarios, facilitando la identificación de discrepancias y asegurando la precisión de los registros financieros.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>


    </Container>
    )

}

export { Servicios } 