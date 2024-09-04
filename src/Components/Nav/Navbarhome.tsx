import React, { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.svg";
import { LuSearch } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { HiOutlineViewGrid } from "react-icons/hi";
import { Row, Col } from "react-bootstrap";
import gallery1 from "../../assets/gallery-1.jpg";
import gallery2 from "../../assets/gallery-2.jpg";
import gallery3 from "../../assets/gallery-3.jpg";
import gallery5 from "../../assets/gallery-5.jpg";
import gallery325 from "../../assets/gallery-325.jpg";
import "./Navbarhome.css";

function Navbarhome() {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [imageWidth, setImageWidth] = useState(500); 
  const centerImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsImageVisible(true);
          } else {
            setIsImageVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (centerImageRef.current) {
      observer.observe(centerImageRef.current);
    }

    return () => {
      if (centerImageRef.current) {
        observer.unobserve(centerImageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isImageVisible && imageWidth < 1000) { 
      interval = setInterval(() => {
        setImageWidth((prevWidth) => Math.min(prevWidth + 20, 1000)); 
      }, 100);
    } else if (!isImageVisible && imageWidth > 500) {
      interval = setInterval(() => {
        setImageWidth((prevWidth) => Math.max(prevWidth - 20, 500)); 
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isImageVisible, imageWidth]);

  return (
    <div className="bg-cover min-h-[1000px]">
      <div className="navbar-wrapper py-6">
        <Navbar expand="lg" className="border-b border-custom-color pb-4">
          <Container fluid className="mx-4">
            <div>
              <img
                src={logo}
                alt=""
                className="h-auto max-w-full border-none rounded-none shadow-none"
              />
            </div>

            <Navbar.Brand
              href="#"
              className="text-gradient ml-[160px] text-base font-bold capitalize transition-colors hover:text-gradient"
            >
              Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link
                  href="#action1"
                  className="text-white ml-6 text-base font-bold capitalize transition-colors hover:text-gradient"
                >
                  Pages
                </Nav.Link>
                <Nav.Link
                  href="#action2"
                  className="text-white ml-6 text-base font-bold capitalize transition-colors hover:text-gradient"
                >
                  Portfolio
                </Nav.Link>
                <Nav.Link
                  href="#action3"
                  className="text-white ml-6 text-base font-bold capitalize transition-colors hover:text-gradient"
                >
                  Blogs
                </Nav.Link>
                <Nav.Link
                  href="#action4"
                  className="text-white ml-6 text-base font-bold capitalize transition-colors hover:text-gradient"
                >
                  Shop
                </Nav.Link>
                <Nav.Link
                  href="#action5"
                  className="text-white ml-6 text-base font-bold capitalize transition-colors hover:text-gradient"
                >
                  Contact
                </Nav.Link>
              </Nav>
              <Form className="d-flex items-center justify-center">
                <div className="flex items-center me-4">
                  <LuSearch className="text-[white] me-3 text-xl cursor-pointer transition-colors hover:text-gradient-middle" />
                  <RiShoppingCartLine className="text-[white] me-3 text-xl cursor-pointer transition-colors hover:text-gradient-middle" />
                  <a
                    href="/"
                    className="text-white text-lg me-3 transition-colors hover:text-gradient no-underline"
                  >
                    <span>Login / Register</span>
                  </a>
                </div>
                <Button
                  className="bg-gradient-button me-3"
                  style={{
                    border: "none",
                    color: "white",
                    padding: "14px 30px",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  Join AI
                </Button>
                <HiOutlineViewGrid className="text-[white] text-xl cursor-pointer transition-colors hover:text-gradient-middle" />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="text-center mt-[125px] relative z-10">
        <span
          className="elementor-headline"
          style={{
            boxSizing: "border-box",
            textAlign: "left",
            fontSize: "18px",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: "120px",
          }}
        >
          AI IMAGE GENERATOR
        </span>
        <h2 className="text-[90px] font-bold leading-none">
          <div className="flex justify-center items-baseline">
            <span className="text-white">What if AI could</span>
            <span className="elementor-headline ml-2">create</span>
          </div>
          <div>
            <span className="elementor-headline">any art or image</span>
            <span className="text-white"> in</span>
          </div>
          <div>
            <span className="text-white"> seconds?</span>
          </div>
        </h2>
        <Button
          className="bg-gradient-button mt-12"
          style={{
            border: "none",
            color: "white",
            padding: "18px 40px",
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          Discover More
        </Button>
      </div>

      <div className="pt-4">
        <Row className="justify-center">
          <Col className="p-0">
            <div className="flex overflow-x-auto">
              <div className="relative w-[500px] h-[250px] overflow-hidden mt-[10px] ml-[12px]">
                <img
                  src={gallery1}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative w-[500px] h-[250px] overflow-hidden mt-[50px] ml-[25px]">
                <img
                  src={gallery2}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                ref={centerImageRef}
                className="relative overflow-hidden mt-[100px] ml-[25px] transition-all duration-300"
                style={{ width: `${imageWidth}px`, height: '250px' }}
              >
                <img
                  src={gallery325}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative w-[500px] h-[250px] overflow-hidden mt-[50px] mr-[15px] ml-[25px]">
                <img
                  src={gallery3}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative w-[500px] h-[250px] overflow-hidden mt-[10px] ml-[12px]">
                <img
                  src={gallery5}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Navbarhome;
