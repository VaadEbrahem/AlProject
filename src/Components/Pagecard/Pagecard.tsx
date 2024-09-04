import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLongArrowAltDown } from "react-icons/fa";

const PageCard = () => {
  return (
    <div className="min-h-[500px] bg-[#0d0f12]">
      <Container>
        <Row   className="g-5">
          <Col  lg="3" md ="6">
            <Card className="group w-[105%] border-0 bg-black text-white transition-all duration-300" style={{ height: '480px', borderRadius: '0' }}>
              <Card.Body className="flex flex-col justify-center items-center h-full cursor-pointer">
                <div className="flex flex-col space-y-8 ml-[15px] group-hover:icon-class-red">
                  <div className="icon-class">
                  <svg
                    className="mr-8"
                    width="70"
                    height="70"
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

                  </div>
                  <div className="text-class text-white text-2xl font-bold font-sans shadow-lg group-hover:text-gradient">
                    Intelligent
                  </div>
                  <Card.Text className="text-white">
                    Dive into our step-by-step guides and become an expert in no time.
                  </Card.Text>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white group-hover:icon-gradient-button">
                    <FaLongArrowAltDown size={20} className="transform rotate-[-45deg]" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
 
          <Col lg="3" md ="6">
            <Card className="group w-[105%] border-0 bg-black text-white transition-all duration-300" style={{ height: '480px', borderRadius: '0' }}>
              <Card.Body className="flex flex-col justify-center items-center h-full cursor-pointer">
                <div className="flex flex-col space-y-8 ml-[15px] group-hover:icon-class-red">
                  <div className="icon-class">
                  <svg
                    className="mr-8"
                    width="70"
                    height="70"
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

                  </div>
                  <div className="text-class text-white text-2xl font-bold font-sans shadow-lg group-hover:text-gradient">
                    Visualization
                  </div>
                  <Card.Text className="text-white">
                    Dive into our step-by-step guides and become an expert in no time.
                  </Card.Text>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white group-hover:icon-gradient-button">
                    <FaLongArrowAltDown size={20} className="transform rotate-[-45deg]" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" md ="6">
            <Card className="group w-[105%] border-0 bg-black text-white transition-all duration-300" style={{ height: '480px', borderRadius: '0' }}>
              <Card.Body className="flex flex-col justify-center items-center h-full cursor-pointer">
                <div className="flex flex-col space-y-8 ml-[15px] group-hover:icon-class-red">
                  <div className="icon-class">
                  <svg
                    className="mr-8"
                    width="70"
                    height="70"
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

                  </div>
                  <div className="text-class text-white text-2xl font-bold font-sans shadow-lg group-hover:text-gradient">
                    Endless Creativity
                  </div>
                  <Card.Text className="text-white">
                    Dive into our step-by-step guides and become an expert in no time.
                  </Card.Text>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white group-hover:icon-gradient-button">
                    <FaLongArrowAltDown size={20} className="transform rotate-[-45deg]" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" md ="6">
            <Card className="group w-[105%] border-0 bg-black text-white transition-all duration-300" style={{ height: '480px', borderRadius: '0' }}>
              <Card.Body className="flex flex-col justify-center items-center h-full cursor-pointer">
                <div className="flex flex-col space-y-8 ml-[15px] group-hover:icon-class-red">
                  <div className="icon-class">
                  <svg
                    className="mr-8"
                    width="70"
                    height="70"
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

                  </div>
                  <div className="text-class text-white text-2xl font-bold font-sans shadow-lg group-hover:text-gradient">
                    Flexible
                  </div>
                  <Card.Text className="text-white">
                    Dive into our step-by-step guides and become an expert in no time.
                  </Card.Text>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white group-hover:icon-gradient-button">
                    <FaLongArrowAltDown size={20} className="transform rotate-[-45deg]" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageCard;
