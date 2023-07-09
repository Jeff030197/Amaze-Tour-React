import {Carousel,} from 'react-bootstrap';
import Car1 from "./../img/1.jpg";

import Car3 from "./../img/3.jpg";
const Content = () => {
    return ( 
        <Carousel className="yes">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Car1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Car3}
            alt="Third slide"
          />
        </Carousel.Item>
        
      </Carousel>
      
      




     );
}
 
export default Content;