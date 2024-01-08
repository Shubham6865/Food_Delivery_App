import React from 'react'
import '../../styles/Home/Section7.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Section7 = () => {
  return (


    <section className='contact_section' id='contact'>

      <Container >
        <Row className='justify-content-center'>
          <Col sm={8} className='text-center '>
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <p>Swift and reliable! Our 30 minutes delivery guarantee ensures your favorite meals reach you fresh and hot, promising a timely and satisfying dining experience.
            </p>
            <Link to='/' className='btn btn_red px-4 py-2 rounded-0'>Call: 999-888-7777</Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Section7
