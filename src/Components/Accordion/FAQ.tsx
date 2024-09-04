import { Container, Row, Col } from "react-bootstrap";
import h1img6 from "../../assets/h1_img-6.jpg";
import h1img5 from "../../assets/h1_img-5.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordionn from "./Accordion";

export const FAQ = () => {
  return (
    <div className="bg-black pt-[150px]" style={{ minHeight: "800px" }}>
      <Container>
        <Row>
          <Col lg="6">
            <div>
              <img src={h1img5} alt="" />
            </div>
            <div className="ml-[300px] mt-[-340px]">
              <img src={h1img6} alt="" />
            </div>
          </Col>
          <Col lg="6">
            <div className="flex flex-col mt-12">
              <span className="elementor-headline font-bold">
                YOU ASK. WE ANSWER
              </span>
              <div>
                <span
                  className="text-[58px] font-bold text-white "
                  style={{ lineHeight: "1.2" }}
                >
                  Frequently
                </span>
                <span
                  className="text-[58px] font-bold elementor-headline  pl-2"
                  style={{ lineHeight: "1.2" }}
                >
                  Asked
                </span>
              </div>

              <span
                className="text-[58px] font-bold elementor-headline "
                style={{ lineHeight: "1.2" }}
              >
                Questions
              </span>
            </div>

            <div className="mt-5 bg-black text-white p-4 border-t border-b border-gray-600">
              <Accordionn
                title="How to make an AI image generator?"
                answer="Create something that has never been seen before. Let the generator be
          your paintbrush. It’s time to say goodbye to stock image hunting and
          awaiting new creatives for weeks."
              />
            </div>

            <div className="bg-black text-white p-4 border-t border-b border-gray-600">
              <Accordionn
                title="Is there a free AI image generator?"
                answer="Create something that has never been seen before. Let generator be your paintbrush. It’s time to say goodbye to stock image hunting and awaiting new creatives for weeks."
              />
            </div>

            <div className=" bg-black text-white p-4 border-t border-b border-gray-600">
              <Accordionn
                title="What can AI writing do for me?"
                answer="Create something that has never been seen before. Let generator be your paintbrush. It’s time to say goodbye to stock image hunting and awaiting new creatives for weeks."
              />
            </div>
            <div className="bg-black text-white p-4 border-t border-b border-gray-600">
              <Accordionn
                title="How much does Jasper cost?"
                answer="Create something that has never been seen before. Let generator be your paintbrush. It’s time to say goodbye to stock image hunting and awaiting new creatives for weeks."
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
