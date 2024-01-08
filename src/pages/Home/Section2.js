import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";
import '../../styles/Home/Section2.css'
// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Savor the classic and authentic flavor with our 'Original' selection. Each bite is a journey into rich and timeless tastes that make our offerings truly special. Experience the essence of tradition and quality in every bite`,
  },
  {
    image: Salad,
    title: "Quality Foods",
    paragraph: `Indulge in a culinary delight with our "Quality Foods" collection. Immerse yourself in a world of premium ingredients and exceptional flavors. Each dish is crafted with the utmost care and dedication to bring you a dining experience that defines excellence in quality and taste.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Enjoy quick and reliable delivery with our "Fastest Delivery" service. Your favorite meals delivered to your doorstep swiftly, ensuring a convenient and timely dining experience.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section " id="about">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>BURGERS ARE MORE ENJOYABLE WHEN SHARED WITH FAMILY</h2>
              <p>
                The burger tastes better when you eat it with your family. Always open to courses, with the first bites being delightful. Laughter leads the way, and the experience is enjoyable. The journey is filled with care, and everyone is involved in the first moments
              </p>
              <Link to="/" className="btn order_now btn_red mb-4">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p >{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;