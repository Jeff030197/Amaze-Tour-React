import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Car1 from "./../img/1.jpg";

import Car3 from "./../img/3.jpg";
const Content = () => {
  return (
    <MDBCarousel className='car'>
    <MDBCarouselItem
      className='w-100 d-block img-fluid car'
      itemId={1} 
      src={Car1} 
    />
    <MDBCarouselItem
      className='w-100 d-block h-10 car'
      itemId={2}
      src={Car3}
      alt='...'
    />
  </MDBCarousel>
  );
}

export default Content;