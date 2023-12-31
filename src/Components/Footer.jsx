import React from 'react';
import {
  MDBFooter,
  MDBContainer,
//   MDBIcon,
//   MDBInput,
  MDBCol,
  MDBRow,
//   MDBBtn
} from 'mdb-react-ui-kit';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <>
    <MDBFooter className='text-center mt-5' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        {/* <section className='mb-4'>  */}
          




{/* <!-- Grid container --> */}
  <div class="container p-4 pb-0">
    {/* <!-- Section: Social media --> */}
    {/* <section className="mb-4"> */}
      {/* <!-- Facebook --> */}
      <a
      data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: '#3b5998'}}
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        ><FontAwesomeIcon icon={faFacebook} /></a>

      {/* <!-- Twitter --> */}
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: '#55acee'}}
        href="http://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        ><FontAwesomeIcon icon={faTwitter} /></a>

      {/* <!-- Google --> */}
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: '#dd4b39' }}
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        ><FontAwesomeIcon icon={faGoogle} /></a>

      {/* <!-- Instagram --> */}
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: '#ac2bac' }}
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        ><FontAwesomeIcon icon={faInstagram} /></a>

      {/* <!-- Linkedin --> */}
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{backgroundColor: '#0082ca' }}
        href="http://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        ><FontAwesomeIcon icon={faLinkedinIn} /></a>
      {/* <!-- Github --> */}
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{ backgroundColor: '#333333' }}
        href="https://www.github.com/"
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        ><FontAwesomeIcon icon={faGithub} /></a>
    {/* </section> */}
    {/* <!-- Section: Social media --> */}
  </div>
        {/* </section> */}

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              {/* <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol> */}

              {/* <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol> */}
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
          At Track Me , our mission is to empower individuals to lead healthier and more active lives by providing accessible and personalized fitness solutions. We believe that everyone deserves the opportunity to achieve their wellness goals, regardless of their fitness level or lifestyle.

          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Get Help</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    About Account
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Login
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>More</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Permissions
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Content licensing
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Topics
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Services</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Trademark Notice
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Special Health Reports
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Print Subscriptions
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Follow us</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer" className='text-white'>
                  https://www.facebook.com

                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/' target="_blank"  rel="noopener noreferrer" className='text-white'>
                  https://www.instagram.com
                  </a>
                </li>
                <li>
                  <a href='http://www.linkedin.com/' target="_blank" rel="noopener noreferrer" className='text-white'>
                  https://www.linkedin.com
                  </a>
                </li>
               
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright: Aditya , Lalit , Nikhil , Vaishnavi.
      
      </div>
    </MDBFooter> 
    </>
  );
}