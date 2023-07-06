import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/amazingescapesph' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRfGGSWpMKWGwzgznxkfcgXwnNLJwlZrkqvNcWmnjdsfnLpvHzKWKHKchFsKVCRGTQxtMN' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='https://www.instagram.com/amazingescapesph/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Amazing Escapes Travels and Tours
              </h6>
              <p>
                Book your dream vacation with us!
                We aim to provide personalised tours for hassle-free vacations.
              </p>
            </MDBCol>



            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FAQ
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Camdas Subdivision, Baguio City, Philippines
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                paula.amazingescapes@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 0977 427 6097
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://www.facebook.com/amazingescapesph'>
          Amazing Escapes Travel and Tours
        </a>
      </div>
    </MDBFooter>
  );
}