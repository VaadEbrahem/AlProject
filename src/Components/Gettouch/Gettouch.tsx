import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import Logo from "../../assets/logo.svg";
import "./Gettouch.css";
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";
const Gettouch = () => {
  return (
    <div className="bg-black min-h-[1200px] relative bgCover pt-[36px]">
      <Container>
        <Row>
          <Col lg={12} sm={12} md={12} className="relative">
            <div className="text-center relative z-10">
              <span className="block mb-2 text-[18px] font-normal elementor-headline">
                JOIN OUR NEWSLETTER
              </span>
              <div className="text-[60px] font-bold fontSize">
                <div className="flex justify-center items-baseline flex-wrap">
                  <span className="mr-4 text-white">
                    Get the best blog stories
                  </span>
                </div>
                <div className="flex justify-center items-baseline mt-[-16px] flex-wrap">
                  <span className="font-bold mr-4 text-white">
                    into your inbox!
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="flex justify-center">
          <Col lg={8} md={10} sm={12}>
            <div className="mt-[80px] relative z-10">
              <div className="w-full">
                <p className="flex">
                  <input
                    className="focus:outline-none"
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      width: "100%",
                      padding: "20px 0 20px 20px",
                      borderRadius: "9px 0 0 9px",
                      color: "#e5e5e5",
                      border: "1px solid rgba(255, 255, 255, .11)",
                      borderRight: "none",
                      background: "rgba(255, 255, 255, .07)",
                      height: "60px",
                    }}
                  />
                  <button
                    type="submit"
                    value="submit"
                    className="inputsbmit relative"
                  >
                    <span className="submit-text">
                      Subscribe
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                      >
                        <defs>
                          <linearGradient
                            id="grad1"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="51%"
                              style={{ stopColor: "#7BD706", stopOpacity: "1" }}
                            />
                            <stop
                              offset="100%"
                              style={{ stopColor: "#02CE80", stopOpacity: "1" }}
                            />
                          </linearGradient>
                        </defs>
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
                            fill="url(#grad1)"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </button>
                </p>
              </div>

              <div className="mt-5">
                <input type="checkbox" className="border border-[#1e3337] mr-4" />
                <span className="text-white font-semibold">By signing up you agree to our <a href="" className="elementor-headline">Privacy Policy</a></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Row className="relative z-10 ">
        <Col className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="shadow-sm  w-[100%] h-[85%] p-[20%] cursor-pointer  border-t-2  border-[#1e3337] mt-[130px]">
            <img src={Logo} alt="Logo" />
            <p
              className="mt-[32px] text-white"
              style={{
                fontSize: "16px",
                lineHeight: "1.25",
                fontWeight: "600",
              }}
            >
              Aine by Inmagine is part of a <br />
              creative ecosystem on a mission
              <br />
              to make design easy for
              <br />
              everyone.
            </p>
            <div className="flex  mt-[32px] space-x-4">
              <a
                href="#"
                className="text-white border border-white rounded-full p-2 hover:icon-gradient-button hover:text-black transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white border border-white rounded-full p-2 hover:icon-gradient-button hover:text-black transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white border border-white rounded-full p-2 hover:icon-gradient-button hover:text-black transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white border border-white rounded-full p-2 hover:icon-gradient-button hover:text-black transition"
              >
                <FaPinterestP />
              </a>
            </div>
          </div>
          <div className="shadow-sm w-[100%] h-[85%] p-[20%] cursor-pointer  border-t-2  border-l-2 border-[#1e3337] mt-[130px]">
            <h3 className="text-white">CONTACT</h3>
            <p className="text-white mt-4">
              <span className="block">2972 Westheimer Rd . Santa Ana, </span>
              <span className="block"> Illinois 85486</span>
            </p>
            <p className="text-white mt-4">
              <span className="block">Need help? Call us</span>
              <h5 className="block elementor-headline  font-bold">
                +(084) 456-0789
              </h5>
            </p>
            <p className="text-white mt-4">
              <span className="block">support@example.com</span>
            </p>
          </div>
          <div className="shadow-sm w-[100%] h-[85%] p-[20%] cursor-pointer border-t-2 border-l-2 border-[#1e3337] mt-[130px]">
            <span className="text-white text-[16px] font-bold">
              DOWNLOAD AND USE
            </span>
            <p className="text-white mt-4">
              We suggest connecting to the apps you use for work.
            </p>
            <div className="flex justify-center mt-6 space-x-4  gap-1">
              <img src={apple} alt="App 1" className="border rounded-lg p-2" />
              <img
                src={google}
                alt="App 2"
                className="border rounded-lg  p-2"
              />
            </div>
          </div>
        </Col>
      </Row>

      <Row className="relative z-10 pt-[100px]">
        <div className="text-center text-white mt-12 ">
          <p className=" text-xl">
            Copyright © 2024 <span className="elementor-headline"> Aine.</span>{" "}
            All rights reserved
          </p>
        </div>
      </Row>
    </div>
  );
};

export default Gettouch;
