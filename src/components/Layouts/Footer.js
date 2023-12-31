import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';
const Footer = () => {

  const [isVisible, setIsVisible] = useState(false);

  const scrolltop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  })
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Location</h5>
                <p>14 Pune City</p>
                <p>Maharashtra</p>
                <p>India</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 10:00PM</p>
                <p>Sunday: 10:00PM - 12:00PM</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Order Now</h5>
                <p>Discover delectable delights. Dial now to savor the taste of excellence.</p>
                <Link to='tel:9998887777' className='calling'>9998887777</Link>

              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Follow Us </h5>
                <p>Stay updated with our latest offerings and exclusive updates. </p>
                <ul className='list-unstyled text-center mt-2'>
                  <li>
                    <Link to='/'>
                      <i className='bi bi-facebook'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <i className='bi bi-instagram'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <i className='bi bi-whatsapp'></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className='copy_right'>
            <Col>
              <div>
                <ul className='list-unstyled text-center mb-0'>
                  <li>
                    <Link to='/'>
                      © 2023 <span>SHUBHAM PARADE</span>. All Rights Reserved
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      Terms Of Use
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>


      {isVisible && (<div className="scroll_top" onClick={scrolltop}>
        <i className='bi bi-arrow-up'></i>
      </div>)}

    </>
  )
}

export default Footer
