import {Container, Nav, Navbar, Image, Row, Col, Button,} from 'react-bootstrap';
import Larawan from "./../img/logo.png";
const Heading = () => {
    return ( 
        <div>
          <Navbar fixed="top" bg="primary" data-bs-theme="dark">
            <Container>
         <Row className="B">
            <Col xs={6} md={4}>
           
            <Image src={Larawan} fluid />
            </Col>
          </Row>
          <Nav className="me-auto">
            <Nav.Link href="#App.js"><Button variant="secondary">Home</Button>{' '}</Nav.Link>
            <Nav.Link href="#features"> <Button variant="secondary">Features</Button>{' '}</Nav.Link>
            <Nav.Link href="#pricing"> <Button variant="secondary">Pricing</Button>{' '}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
         

        </div>
     );
}
 
export default Heading;