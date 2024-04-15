import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import Logo from "../../assets/logo/logo.png";
import "../../styles/Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const [nav, setNav] = useState(false);

  const items = useSelector((state) => state.cart)




  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  const itemsCount = items.reduce((total, item) => total + item.quantity, 0);

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header  >
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand>
            <Link to="home" smooth className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="home" smooth>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="about" smooth>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="menu" smooth>
                Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to="shop" smooth>
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="blog" smooth>
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="contact" smooth>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="cart" smooth>
                <div className="cart">
                  <i className="bi bi-bag fs-5 "></i>
                  <em className="roundpoint">{itemsCount}</em>
                </div>

              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

