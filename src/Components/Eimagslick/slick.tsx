import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blog9 from "../../assets/blog_9.jpg";
import blog10 from "../../assets/blog_10.jpg";
import blog11 from "../../assets/blog_11.jpg";
import { FaLongArrowAltDown } from "react-icons/fa";

const Slick = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    touchThreshold: 10,
    swipeToSlide: true,
    centerMode: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Container>
        <Row>
          <Col className="pt-[60px]">
            <Slider {...settings}>
              {/* Slide 1 */}
              <div className="flex justify-center items-center px-2"> {/* Added px-2 for horizontal padding */}
                <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-4">
                  <img src={blog9} alt="Your Alt Text" className="mx-auto" />
                  <h3 className="mt-3">Title</h3>
                  <p className="text-center mt-3">
                    Brave New Playground: How AI is Shaping Our Entertainment
                    Experience
                  </p>
                  <div className="mt-3 flex justify-center">
                    <FaLongArrowAltDown
                      size={20}
                      className="transform rotate-[-45deg]"
                    />
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="flex justify-center items-center px-2"> {/* Added px-2 for horizontal padding */}
                <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-4">
                  <img src={blog10} alt="Your Alt Text" className="mx-auto" />
                  <h3 className="mt-3">Title</h3>
                  <p className="text-center mt-3">
                    Brave New Playground: How AI is Shaping Our Entertainment
                    Experience
                  </p>
                  <div className="mt-3 flex justify-center">
                    <FaLongArrowAltDown
                      size={20}
                      className="transform rotate-[-45deg]"
                    />
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="flex justify-center items-center px-2"> {/* Added px-2 for horizontal padding */}
                <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-4">
                  <img src={blog11} alt="Your Alt Text" className="mx-auto" />
                  <h3 className="mt-3">Title</h3>
                  <p className="text-center mt-3">
                    Brave New Playground: How AI is Shaping Our Entertainment
                    Experience
                  </p>
                  <div className="mt-3 flex justify-center">
                    <FaLongArrowAltDown
                      size={20}
                      className="transform rotate-[-45deg]"
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Slick;
