import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Movingcards.css";
import { FaStar } from "react-icons/fa";
import avatar1 from "../../assets/avatar-1.jpg";
import avatar2 from "../../assets/avatar-2.jpg";
import avatar3 from "../../assets/avatar-3.jpg";
import avatar4 from "../../assets/avatar-4.jpg";
export const Movingcards = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    touchThreshold: 10,
    swipeToSlide: true,
    centerMode: false,
    autoplay: true,           // تفعيل التمرير التلقائي
    autoplaySpeed: 2000,      // تحديد مدة التمرير التلقائي (بالملي ثانية)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-cover2" style={{ minHeight: "800px" }}>
      <div className="navbar-wrapper2 ">
        <Container>
          <Row>
            <Col className="pt-[60px]">
              <div className="text-white text-center ">
                <span
                  className="block mb-2 elementor-headline"
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                  }}
                >
                  OUR CLIENTS SAY
                </span>

                <div className="text-[60px] font-bold">
                  <div className="flex justify-center items-baseline">
                    <span className="mr-4">We brought</span>
                    <span className="elementor-headline">their</span>
                  </div>

                  <div className="mt-[-16px]">
                    <span className="mr-4 elementor-headline">ideas</span>
                    <span>to life</span>
                  </div>
                </div>

                <span
                  className="block mt-4"
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                  }}
                >
                  10,000+ people love us
                </span>
              </div>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col className="pt-[60px] ">
            <Slider {...settings}>
              <div className="card-wrapper">
                <Card
                  style={{
                    width: "420px",
                    padding: "40px",
                    borderRadius: "0",
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, .05)",
                  }}
                >
                  <Card.Title>
                    <div className="star-rating">
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                    </div>
                  </Card.Title>

                  <Card.Text className="pt-[16px] pb-[16px]">
                    “ The AI image generator is Aine’s most intellectual
                    creative tool. Entering the prompts is funny and creative
                    because you can go on indefinitely. Continuing from the AI
                    image generator to the Aine app is even more fun, giving the
                    creation your own twist.”
                  </Card.Text>
                  <div className="d-flex align-items-center ">
                    <div className="flex space-x-4">
                      <img src={avatar1} alt="" className="imagedo" />
                      <div className="text-[16px] font-bold">
                        <h5>Darron Charles</h5>
                        <span>Graphic Designer</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="card-wrapper">
                <Card
                  style={{
                    width: "420px",

                    padding: "40px",
                    borderRadius: "0",
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, .05)",
                  }}
                >
                  <Card.Title>
                    <div className="star-rating">
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                    </div>
                  </Card.Title>

                  <Card.Text className="pt-[16px] pb-[16px]">
                    “ I love being able to experiment with different styles and
                    filters. I highly recommend this platform to anyone looking
                    to take their images to the next level..”
                  </Card.Text>
                  <div className="d-flex align-items-center ">
                    <div className="flex space-x-4">
                      <img src={avatar2} alt="" className="imagedo" />
                      <div className="text-[16px] font-bold">
                        <h5>Darron Charles</h5>
                        <span>Graphic Designer</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="card-wrapper">
                <Card
                  style={{
                    width: "420px",
                    padding: "40px",
                    borderRadius: "0",
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, .05)",
                  }}
                >
                  <Card.Title>
                    <div className="star-rating">
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                    </div>
                  </Card.Title>

                  <Card.Text className="pt-[16px] pb-[16px]">
                    “ The AI image generator is Aine’s most intellectual
                    creative tool. Entering the prompts is funny and creative
                    because you can go on indefinitely. Continuing from the AI
                    image generator to the Aine app is even more fun, giving the
                    creation your own twist.”
                  </Card.Text>
                  <div className="d-flex align-items-center ">
                    <div className="flex space-x-4">
                      <img src={avatar3} alt="" className="imagedo" />
                      <div className="text-[16px] font-bold">
                        <h5>Darron Charles</h5>
                        <span>Graphic Designer</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="card-wrapper">
                <Card
                  style={{
                    width: "420px",

                    padding: "40px",
                    borderRadius: "0",
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, .05)",
                  }}
                >
                  <Card.Title>
                    <div className="star-rating">
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                    </div>
                  </Card.Title>

                  <Card.Text className="pt-[16px] pb-[16px]">
                    “ I love being able to experiment with different styles and
                    filters. I highly recommend this platform to anyone looking
                    to take their images to the next level..”
                  </Card.Text>
                  <div className="d-flex align-items-center ">
                    <div className="flex space-x-4">
                      <img src={avatar4} alt="" className="imagedo" />
                      <div className="text-[16px] font-bold">
                        <h5>Darron Charles</h5>
                        <span>Graphic Designer</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="card-wrapper">
                <Card
                  style={{
                    width: "420px",
                    padding: "40px",
                    borderRadius: "0",
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, .05)",
                  }}
                >
                  <Card.Title>
                    <div className="star-rating">
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                    </div>
                  </Card.Title>

                  <Card.Text className="pt-[16px] pb-[16px]">
                    “ The AI image generator is Aine’s most intellectual
                    creative tool. Entering the prompts is funny and creative
                    because you can go on indefinitely. Continuing from the AI
                    image generator to the Aine app is even more fun, giving the
                    creation your own twist.”
                  </Card.Text>
                  <div className="d-flex align-items-center ">
                    <div className="flex space-x-4">
                      <img src={avatar1} alt="" className="imagedo" />
                      <div className="text-[16px] font-bold">
                        <h5>Darron Charles</h5>
                        <span>Graphic Designer</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="card-wrapper">
                <Card
                  style={{
                    width: "420px",

                    padding: "40px",
                    borderRadius: "0",
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, .05)",
                  }}
                >
                  <Card.Title>
                    <div className="star-rating">
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                    </div>
                  </Card.Title>

                  <Card.Text className="pt-[16px] pb-[16px]">
                    “ I love being able to experiment with different styles and
                    filters. I highly recommend this platform to anyone looking
                    to take their images to the next level..”
                  </Card.Text>
                  <div className="d-flex align-items-center ">
                    <div className="flex space-x-4">
                      <img src={avatar2} alt="" className="imagedo" />
                      <div className="text-[16px] font-bold">
                        <h5>Darron Charles</h5>
                        <span>Graphic Designer</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="card-wrapper">
                <Card
                  style={{
                    width: "420px",
                    padding: "40px",
                    borderRadius: "0",
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, .05)",
                  }}
                >
                  <Card.Title>
                    <div className="star-rating">
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                    </div>
                  </Card.Title>

                  <Card.Text className="pt-[16px] pb-[16px]">
                    “ The AI image generator is Aine’s most intellectual
                    creative tool. Entering the prompts is funny and creative
                    because you can go on indefinitely. Continuing from the AI
                    image generator to the Aine app is even more fun, giving the
                    creation your own twist.”
                  </Card.Text>
                  <div className="d-flex align-items-center ">
                    <div className="flex space-x-4">
                      <img src={avatar3} alt="" className="imagedo" />
                      <div className="text-[16px] font-bold">
                        <h5>Darron Charles</h5>
                        <span>Graphic Designer</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="card-wrapper">
                <Card
                  style={{
                    width: "420px",

                    padding: "40px",
                    borderRadius: "0",
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, .05)",
                  }}
                >
                  <Card.Title>
                    <div className="star-rating">
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                      <FaStar color="#ff9e0c" />
                    </div>
                  </Card.Title>

                  <Card.Text className="pt-[16px] pb-[16px]">
                    “ I love being able to experiment with different styles and
                    filters. I highly recommend this platform to anyone looking
                    to take their images to the next level..”
                  </Card.Text>
                  <div className="d-flex align-items-center ">
                    <div className="flex space-x-4">
                      <img src={avatar4} alt="" className="imagedo" />
                      <div className="text-[16px] font-bold">
                        <h5>Darron Charles</h5>
                        <span>Graphic Designer</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

            </Slider>
          </Col>
        </Row>
      </div>
    </div>
  );
};
