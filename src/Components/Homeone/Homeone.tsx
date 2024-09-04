import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import h1_img from "../../assets/h1_img-1.jpg";
import h2_img from "../../assets/h1_img-2.jpg";

const Homeone = () => {
  return (
    <div className="min-h-[900px] bg-[#0d0f12] ">
      <Container>
        <Row>
          <Col xs={6}>
            <div
              className="elementor-headline"
              style={{
                boxSizing: "border-box",
                textAlign: "left",
                fontSize: "16px",
                fontWeight: 700,
                textTransform: "uppercase",
                lineHeight: "120px",
              }}
            >
              AI IMAGE GENERATOR
            </div>

            <h2 className="text-[60px] font-bold text-white">
              <div>
                <span>A single </span>
                <span className="elementor-headline">place to</span>
              </div>
              <div>
                <span className="elementor-headline">create</span>
                <span> and edit</span>
              </div>
              <span>images</span>
            </h2>

            <h5 className="text-[#4f5051] pt-4">
              <div>
                <span>Don’t over-explain or use unnecessary words. Focus</span>
              </div>
              <div>
                <span>
                  on taking small steps and including the most valuable
                </span>
              </div>
              <div>
                <span>details in your description.</span>
              </div>
            </h5>

            <div className="text-white text-[20px] font-bold pt-4">
              AI Image Editor
            </div>

            <h5 className="text-[#4f5051] pt-4">
              <div>
                <span>Aine studio, remove background,</span>
              </div>
              <div>
                <span>magic eraser and more.</span>
              </div>
            </h5>

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
          </Col>
          <Col
            xs={6}
            className="d-flex align-items-center justify-content-center" style={{  position: "relative", bottom:"100px"}}
          >
            <div>
              <img
                src={h1_img}
                alt="AI Image"
                className="d-block w-[100%]"
                style={{ zIndex: 1 }}
              />
              <img
                src={h2_img}
                alt="AI Image"
                style={{
                  position:"absolute",
                  top: "430px",
                  right: "5%",
                  transform: "translateX(-5%)",

                  zIndex: 2,
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homeone;
