import { Row, Col } from "react-bootstrap";

import gallery1 from "../../assets/gallery-1.jpg";
import gallery2 from "../../assets/gallery-2.jpg";
import gallery3 from "../../assets/gallery-3.jpg";
import gallery5 from "../../assets/gallery-5.jpg";
import gallery325 from "../../assets/gallery-325.jpg";

const Onlypictures = () => {
  return (
    <div className="pt-4">
      <Row className="justify-start">
        <Col className="p-0">
          <div className="flex">
            <div className="relative w-[350px] h-[350px] overflow-hidden mt-[10px] ml-[12px]">
              <img
                src={gallery1}
                alt=""
                className="object-cover w-full h-full "
              />
            </div>
            <div className="relative w-[350px] h-[350px] overflow-hidden mt-[50px] ml-[25px]">
              <img
                src={gallery2}
                alt=""
                className="object-cover w-full h-full "
              />
            </div>
            <div className="relative w-[350px] h-[350px] overflow-hidden  mt-[100px] ml-[25px]">
              <img
                src={gallery325}
                alt=""
                className="object-cover w-full h-full "
              />
            </div>
            <div className="relative w-[350px] h-[350px] overflow-hidden mt-[50px] ml-[25px]">
              <img
                src={gallery3}
                alt=""
                className="object-cover w-full h-full "
              />
            </div>
            <div className="relative w-[350px] h-[350px] overflow-hidden mt-[10px] ml-[25px]">
              <img
                src={gallery5}
                alt=""
                className="object-cover w-full h-full "
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Onlypictures;
