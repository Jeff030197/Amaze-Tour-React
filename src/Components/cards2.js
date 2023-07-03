import{Carousel, Card, CardGroup,} from  'react-bootstrap';
import Bohol from "./../img/BOHOL2.jpg";
import Boost from "./../img/BOOSTING.jpg";
import Cebu from "./../img/CEBu.jpg";
import Coron from "./../img/CORON.jpg";
import ElNido from "./../img/EL NIDO.jpg";
import Puerto from "./../img/PUERTO.jpg";
const Cards2 = () => {
    return ( 
     <Carousel className="mine">
         <Carousel.Item>
            <CardGroup>
              <Card className="cardo1">
                    <Card.Img variant="top" src={Bohol} />
             </Card>
             <Card className="cardo2">
                    <Card.Img variant="top" src={Boost} />
             </Card>
             <Card className="cardo3">
                    <Card.Img variant="top" src={Cebu} />
             </Card>
            </CardGroup>
         </Carousel.Item>
              <Carousel.Item>
              <CardGroup>
              <Card ClassName="dalisay" >
                    <Card.Img variant="top" src={Coron} />
             </Card>
             <Card className="cardo4">
                    <Card.Img variant="top" src={ElNido} />
             </Card>
             <Card className="cardo5">
                    <Card.Img variant="top" src={Puerto} />
             </Card>
            </CardGroup>
              </Carousel.Item>  
            </Carousel>
     );
}
 
export default Cards2;