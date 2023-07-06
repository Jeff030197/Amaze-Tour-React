import { Button, Offcanvas, Card, Row, Col, } from 'react-bootstrap';
import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { useState } from 'react';
import like from "./../img/like.jpg";
const Loading = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <MDBRow>
        
        
          <Col className='yes' ><Button variant="primary" onClick={handleShow} className="papel">
          Promo of the day
        </Button></Col>
       
        
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Like Promo</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={like} />
              <Card.Body>
                <Card.Title>Like us and get discount</Card.Title>
                <Card.Text>
                  Lorem Lorem sinta buko ng papaya
                </Card.Text>
                <Button variant="primary" href="https://www.facebook.com/amazingescapesph">Like us here</Button>
              </Card.Body>
            </Card>
          </Offcanvas.Body>
        </Offcanvas>
    </MDBRow>
  );
}

export default Loading;





