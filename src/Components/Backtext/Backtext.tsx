import { Container, Row, Col } from "react-bootstrap";

export const Backtext = () => {
  return (
    <div className="bg-[#0d0f12]" style={{ minHeight: "400px" }}>
      <Container>
        <Row className="position-relative">
          <Col className="position-relative">
            {/* الخلفية */}
            <p
              className="absolute top-0 left-1/2 
            transform -translate-x-1/2 
            -translate-y-1/2 
            text-transparent
             bg-clip-text
              bg-gradient-to-b from-[#E8E7FF0D] 
              to-[#ECEBF800]
               text-[310px] 
               font-bold uppercase 
               leading-[.75em]
                tracking-[9.3px]"
            >
              Portfolio
            </p>

            {/* المحتوى فوق الخلفية */}
            <div className="text-white text-center ">
              <span
                className="block mb-2 elementor-headline"
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                ALL PORTFOLIO ITEMS
              </span>

              <div className="text-[60px] font-bold">
                <div className="flex justify-center items-baseline">
                  <span className="mr-4">Generate different</span>
                  <span className="elementor-headline">image</span>
                </div>

                <div className="mt-[-16px]">
                  <span className="mr-4 elementor-headline">styles visual</span>
                  <span>products.</span>
                </div>
              </div>

              <span
                className="block mt-4"
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                Explore AI-generated images in diverse styles, unveiling a
              </span>
              <span>collection of visuals crafted by AI.</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
