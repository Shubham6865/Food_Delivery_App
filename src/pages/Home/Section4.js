import React from 'react'
import '../../styles/Home/Section4.css'
import { Container, Row, Col } from 'react-bootstrap'
import PromotionImage from '../../assets/promotion/pro.png'

const Section4 = () => {
     return (
          <>
               <section className='promotion_section'>
                    <Container>
                         <Row className='align-items-center'>
                              <Col lg={6} className='text-center mb-5 mb-lg-0'>
                                   <img src={PromotionImage} alt="PromotionImage" className='img-fluid' />


                              </Col>
                              <Col lg={6} className='px-5'>
                                   <h2>Nothing brings people together like a good burger</h2>
                                   <p>Gather around the table and savor the moments with our delectable burgers. An irresistible blend of flavors, bringing people together in the joy of shared culinary delight.</p>
                                   <ul>
                                        <li><p>Delight in every bite, creating memories with each mouthwatering flavor.</p></li>
                                        <li><p>A culinary experience designed to unite friends and family alike.</p></li>
                                        <li><p>Our burgers, a symbol of shared happiness and the joy of good company.</p></li>
                                   </ul>

                              </Col>
                         </Row>
                    </Container>
               </section>
               <section className='bg_parallax_scroll'>


               </section>
          </>
     )
}

export default Section4
