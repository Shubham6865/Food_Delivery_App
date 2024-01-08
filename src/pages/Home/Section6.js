import React from 'react'
import '../../styles/Home/Section6.css'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import User1 from '../../assets/blog/review-author-1.jpg'
import User2 from '../../assets/blog/review-author-2.jpg'
import User3 from '../../assets/blog/review-author-3.jpg'
import User4 from '../../assets/blog/review-author-5.jpg'
const Section6 = () => {
   return (
      <section className='blog_section' id='blog'>
         <Container>
            <Row>
               <Col>
                  <Carousel>
                     <Carousel.Item>
                        <Carousel.Caption>
                           <div className="user_img">
                              <img src={User1} className="img-fluid" alt="UserImg" />
                           </div>
                           <p>" A truly delightful experience! The flavors were exquisite, and the service impeccable. I'll definitely be returning for more culinary adventures! "
                           </p>
                           <div className="item_rating mb-2">
                              <i className='bi bi-star-fill'></i>
                              <i className='bi bi-star-fill'></i>
                              <i className='bi bi-star-fill'></i>
                              <i className='bi bi-star-fill'></i>
                              <i className='bi bi-star-fill'></i>
                           </div>
                           <h5>By Arjun</h5>

                        </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <Carousel.Caption>
                           <div className="user_img">
                              <img src={User2} className="img-fluid" alt="UserImg" />
                           </div>
                           <p>" Exceptional! The restaurant offers an extraordinary blend of flavors. Each dish is a masterpiece. The ambiance and service complement the outstanding culinary experience "
                           </p>
                           <div className="item_rating mb-2">
                              <i className='bi bi-star-fill'></i>
                              <i className='bi bi-star-fill'></i>
                              <i className='bi bi-star-fill'></i>
                              <i className='bi bi-star-fill'></i>
                              <i className='bi bi-star-fill'></i>
                           </div>
                           <h5>By Aisha</h5>

                        </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <Carousel.Caption>
                           <div className="user_img">
                              <img src={User3} className="img-fluid" alt="UserImg" />
                           </div>
                           <p>" Five stars! The restaurant exceeded my expectations. The food is not just a meal; it's an experience. Exceptional taste, presentation, and service. "
                           </p>
                           <div className="item_rating mb-2">
                              <i className='bi bi-star-fill'></i>
                              <i className='bi bi-star-fill'></i>
                              <i className='bi bi-star-fill'></i>
                              <i className='bi bi-star-fill'></i>
                              <i className='bi bi-star-fill'></i>
                           </div>
                           <h5>By Aryan</h5>

                        </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                        <Carousel.Caption>
                           <div className="user_img">
                              <img src={User4} className="img-fluid" alt="UserImg" />
                           </div>
                           <p>" Outstanding service! The food is a burst of flavors, and the staff's attentiveness adds to the overall experience. A must-visit for food enthusiasts. "
                           </p>
                           <div className="item_rating mb-2">
                              <i className='bi bi-star-fill'></i>
                              <i className='bi bi-star-fill'></i>
                              <i className='bi bi-star-fill'></i>
                              <i className='bi bi-star-fill'></i>
                              <i className='bi bi-star-fill'></i>
                           </div>
                           <h5>By Ananya</h5>

                        </Carousel.Caption>
                     </Carousel.Item>

                  </Carousel>
               </Col>
            </Row>
         </Container>

      </section>
   )
}

export default Section6
