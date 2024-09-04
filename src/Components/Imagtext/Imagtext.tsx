import { Row, Col } from "react-bootstrap";
import portfolio3 from "../../assets/portfolio3.jpg";
import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio4 from "../../assets/portfolio4.jpg";
import portfolio2 from "../../assets/portfolio2.jpg";
import { FaLongArrowAltDown } from "react-icons/fa";
import "./Imagtext.css";

export const Imagtext = () => {
  return (
    <div className="bg-[#0d0f12]" style={{ minHeight: "820px", padding: "0" }}>
      <Row className="align-items-start">
        <Col lg="3" style={{ height: "742px", padding: "4px" }}>
          <div className="image-container" style={{ height: "50%" }}>
            <img src={portfolio3} alt="" className="image" />
            <div className="overlay">
              <h2>ThinkCraft</h2>
              <p>All, Art Direction</p>
            </div>
          </div>
          <div
            className="image-container"
            style={{ height: "50%", marginTop: "6px" }}
          >
            <img src={portfolio1} alt="" className="image" />
            <div className="overlay">
              <h2>ThinkCraft</h2>
              <p>All, Art Direction</p>
            </div>
          </div>
        </Col>
        <Col lg="3" style={{ padding: "4px" }}>
          <div
            className="image-container"
            style={{ height: "740px", padding: "0" }}
          >
            <img src={portfolio4} alt="" className="image" />
            <div className="overlay">
              <h2>ThinkCraft</h2>
              <p>All, Art Direction</p>
            </div>
          </div>
        </Col>
        <Col lg="6" style={{ padding: "4px" }}>
          <div
            className="image-container"
            style={{ height: "740px", padding: "0" }}
          >
            <img src={portfolio2} alt="" className="image" />
            <div className="overlay">
              <h2>ThinkCraft</h2>
              <p>All, Art Direction</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          className="d-flex justify-content-center align-items-center "
          style={{ marginTop: "50px" ,borderBottom:"1px solid rgba(255, 255, 255, 0.1)"  }}
        >
          <div className="flex items-center space-x-4 pb-[60px]">
            <span className="text-[16px] font-bold elementor-headline">
              VIEW ALL GENERATED IMAGES
            </span>
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover-gradient"
            >
              <FaLongArrowAltDown
                size={20}
                className="transform rotate-[-45deg]"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Imagtext;
