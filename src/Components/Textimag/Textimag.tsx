import "./Textimag.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import h3img from "../../assets/h1_img-3.jpg";
import h4img from "../../assets/h1_img-4.jpg";

export const Textimag = () => {
  return (
    <div>
      <div
        className="bg-[#0d0f12] pt-[150px] pb-[150px]"
        style={{ minHeight: "820px" }}
      >
        <Container>
          <Row>
            <Col lg="7">
              <div className="flex">
                <div>
                  <img src={h3img} alt="AI Image" />
                </div>
                <div className="pt-[300px] -ml-[220px]">
                  <img src={h4img} alt="AI Image" />
                </div>
              </div>
            </Col>








            <Col lg="5">
              <div className="flex flex-col">
                <span className="elementor-headline font-bold">
                  HOW AINE ART WORKS
                </span>
                <span
                  className="text-[58px] font-bold text-white pt-3"
                  style={{ lineHeight: "1.2" }}
                >
                  How to generate AI images
                </span>
              </div>

              <div className="lg:flex mt-4">
                <div className="flex items-start">
                  <svg
                    className="mr-8"
                    width="130"
                    height="130"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#02CE80" />
                        <stop offset="100%" stopColor="#7BD706" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#gradient)"
                      d="M8,9H4v3h4V9z M7,11H5v-1h2V11z M8,13H4v3h4V13z M7,15H5v-1h2V15z M6,17c-1.657,0-3,1.343-3,3 s1.343,3,3,3s3-1.343,3-3S7.657,17,6,17z M6,22c-1.103,0-2-0.897-2-2c0-1.103,0.897-2,2-2s2,0.897,2,2C8,21.103,7.103,22,6,22z M21.646,11.646l0.707,0.707l-2,2l-0.707-0.707L21.646,11.646z M31,4h-1.586l-1.707-1.707c-0.391-0.391-1.023-0.391-1.414,0 L24.586,4H1C0.448,4,0,4.448,0,5v22c0,0.552,0.448,1,1,1h30c0.552,0,1-0.448,1-1V5C32,4.448,31.552,4,31,4z M16,14v4h4l8-8v13H11V9 h10L16,14z M17,14.707L19.293,17H17V14.707z M20.146,16.439l-2.586-2.586L27,4.414L29.586,7L20.146,16.439z M2,26V6h22l-2,2H10v16 h19V9l1-1v18H2z"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span
                      className="text-[24px] font-bold text-white"
                      style={{ lineHeight: "50px" }}
                    >
                      Write a prompt
                    </span>
                    <p className="text-lg text-white">
                      Describe the image you see in your mind to Aine art
                      generator with as much or little detail as you'd like.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:flex mt-4">
                <div className="flex items-start">
                  <svg
                    className="mr-8"
                    width="130"
                    height="130"
                    viewBox="0 0 1920 1920"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#02CE80" />
                        <stop offset="100%" stopColor="#7BD706" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#gradient)"
                      d="M1468.235 113v99.388l-112.94 112.941v-99.388H112.94v1468.235h1242.353v-438.211l112.941-112.941v664.094H0V113h1468.235ZM421.271 1163.353c96-9.035 154.729 108.423 190.87 197.647 28.235 68.894 38.4 92.612 72.283 96 33.882 3.388 89.223-58.73 112.94-101.647 16.53-26.51 51.42-34.6 77.93-18.07 26.51 16.529 34.6 51.42 18.07 77.929-9.035 16.94-92.611 160.376-205.552 160.376h-9.036c-70.023-4.517-121.976-48.564-169.411-166.023-47.436-117.46-77.93-127.624-77.93-127.624a484.518 484.518 0 0 0-97.13 225.883c-6.549 31.187-37.14 51.16-68.329 44.611-31.187-6.55-51.16-37.141-44.611-68.33 20.33-94.87 79.059-310.587 199.906-320.752Zm256.376-485.647v112.941H338.824V677.706h338.823ZM903.53 451.824v112.94H338.824v-112.94h564.705Z"
                    />
                    <path
                      fill="url(#gradient)"
                      d="m1903.059 468.765-225.883-225.883a56.47 56.47 0 0 0-80.188 0L919.341 920.53a56.476 56.476 0 0 0-15.813 39.53v282.353h282.354a56.47 56.47 0 0 0 39.53-16.941l677.647-677.647c21.523-21.959 21.523-57.101 0-79.06Zm-740.894 660.706H1016.47V983.776l451.764-451.764 145.694 145.694-451.764 451.765Zm531.953-531.953-145.694-145.694 89.223-89.224 145.694 145.694-89.223 89.224Z"
                    />
                  </svg>

                  <div className="flex flex-col">
                    <span
                      className="text-[24px] font-bold text-white"
                      style={{ lineHeight: "50px" }}
                    >
                      Select styles
                    </span>
                    <p className="text-lg text-white">
                      Select additional details such as the medium, artist, and
                      mood to enhance your creative expression.
                    </p>
                  </div>
                </div>
              </div>

              <div className=" lg:flex mt-4">
                <div className="flex items-start">
                  <svg
                    className="mr-8 icon2"
                    width="130"
                    height="130"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#02CE80" />
                        <stop offset="100%" stopColor="#7BD706" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#gradient)"
                      d="M12,18.209c-1.354,0.196-3.01,0.559-3.657,1.206c-1.172,1.172-1.172,3.071,0,4.243 c1.172,1.172,3.071,1.172,4.243,0c0.647-0.647,1.01-2.302,1.206-3.657h4.417c0.196,1.354,0.559,3.01,1.206,3.657 c1.172,1.172,3.071,1.172,4.243,0c1.172-1.172,1.172-3.071,0-4.243c-0.647-0.647-2.302-1.01-3.657-1.206v-4.417 c1.354-0.196,3.01-0.559,3.657-1.206c1.172-1.172,1.172-3.071,0-4.243c-1.171-1.172-3.071-1.172-4.243,0 c-0.647,0.647-1.01,2.302-1.206,3.657h-4.417c-0.196-1.354-0.559-3.01-1.206-3.657c-1.172-1.172-3.071-1.172-4.243,0 c-1.172,1.172-1.172,3.071,0,4.243c0.647,0.647,2.302,1.01,3.657,1.206V18.209z M11.149,22.265 c-0.388,0.366-1.006,0.363-1.391-0.022c-0.382-0.382-0.39-1-0.022-1.392c0.28-0.195,1.048-0.408,1.987-0.575 C11.554,21.214,11.341,21.988,11.149,22.265z M22.265,20.851c0.368,0.391,0.36,1.009-0.022,1.391 c-0.385,0.385-1.003,0.37-1.391-0.022c-0.318-0.32-0.619-1.064-0.854-1.967C21.717,19.788,21.842,20.392,22.265,20.851z"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span
                      className="text-[24px] font-bold text-white"
                      style={{ lineHeight: "50px" }}
                    >
                      Generate
                    </span>
                    <p className="text-lg text-white">
                      Click the generate button and watch as your creative
                      vision comes to life with stunning AI-generated art.
                    </p>
                  </div>
                </div>
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
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
