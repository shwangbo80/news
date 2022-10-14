import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
  NavDropdown,
  Offcanvas,
  Row,
  Col,
  Image,
  Spinner,
} from "react-bootstrap";

export default function FooterComponent() {
  return (
    <>
      <Container className="d-none d-sm-none d-md-block  bg-light  pt-4 mt-5 footer-bg">
        <div className="d-flex justify-content-center">
          <a href="/">
            <p className="text-dark  footer-menu-text px-2">Home</p>
          </a>
          <a href="/world">
            <p className="text-dark  footer-menu-text px-2">World</p>
          </a>
          <a href="/us">
            <p className="text-dark  footer-menu-text px-2">U.S</p>
          </a>
          <a href="/politics">
            <p className="text-dark  footer-menu-text px-2">Politics</p>
          </a>
          <a href="/newyork">
            <p className="text-dark  footer-menu-text px-2">N.Y</p>
          </a>
          <a href="/business">
            <p className="text-dark  footer-menu-text px-2">Business</p>
          </a>
          <a href="/opinion">
            <p className="text-dark  footer-menu-text px-2">Opinion</p>
          </a>
          <a href="/tech">
            <p className="text-dark  footer-menu-text px-2">Tech</p>
          </a>
          <a href="/science">
            <p className="text-dark  footer-menu-text px-2">Science</p>
          </a>
          <a href="/sports">
            <p className="text-dark  footer-menu-text px-2">Sports</p>
          </a>
          <a href="/arts">
            <p className="text-dark  footer-menu-text px-2">Arts</p>
          </a>
          <a href="/books">
            <p className="text-dark  footer-menu-text px-2">Books</p>
          </a>
          <a href="/style">
            <p className="text-dark  footer-menu-text px-2">Style</p>
          </a>
          <a href="/food">
            <p className="text-dark  footer-menu-text px-2">Food</p>
          </a>
        </div>
      </Container>
      <Container
        fluid
        className="d-flex justify-content-center bg-dark pt-4 pb-3">
        <p className="footer-text">News App | Developed by</p>
        <a href="http://www.soohwangbo.com">
          <p className="footer-text ps-1">Soo Hwangbo</p>
        </a>
      </Container>
    </>
  );
}
