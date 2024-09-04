import "./Footer.css";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Footer = () => {
  return (
    <div className="bg-cover1" style={{minHeight: "820px"}} >
      <div className="navbar-wrapper1 ">
      <Container>
        <Row>
          <Col>
            <div className="mt-[250px]">
              <div className="flex flex-col">
                <span className="elementor-headline font-bold">COMPANYS VISION</span>
                <div className="mt-4  mb-4  text-[58px] font-bold ">
                  <div>
                    <span className="text-white">Ready to</span>
                    <span className="ml-2 elementor-headline">level up</span>
                  </div>
                  <div style={{marginTop:"-18px"}}>
                    <span className="elementor-headline">your photos</span>
                    <span className="ml-2 text-white">with Aine?</span>
                  </div>
                </div>


                <span className="text-white">
                  Promote yourself from Graphic Designer to Creative Director.
                  Try the AI
                </span>
                <span className="text-white">
                  assistant that helps you write amazing copy and create unique
                  images for
                </span>
                <span className="text-white">your business today!</span>
              </div>
              <Button
                className="bg-gradient-button mt-12"
                style={{
                  border: "none",
                  color: "white",
                  padding: "18px 40px",
                  fontSize: "14px",
                  fontWeight: " 700",
                }}
              >
                Discover More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
};
