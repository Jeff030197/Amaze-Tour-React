import {Container, Card, Accordion,} from 'react-bootstrap';
import short from './../img/short.jpg';

const Cards = () => {
    return ( 
        <Container className ="Cards1 w-50">
           <Card>
            
        <Card.Img variant="top" src={short} />

        <Card.Body className="text2">
          <Card.Text >
          Why travel with us?
          </Card.Text>
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Reason 1</Accordion.Header>
        <Accordion.Body>
          Lorem Lorem sinta
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Reason 2</Accordion.Header>
        <Accordion.Body>
          Buko ng papaya
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Card.Body>
      </Card>

        </Container>

     );
}
 
export default Cards;