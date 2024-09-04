import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import blog8 from '../../assets/blog_8.jpg';
import blog9 from '../../assets/blog_9.jpg';
import blog10 from '../../assets/blog_10.jpg';
import blog11 from '../../assets/blog_11.jpg';
import blog12 from '../../assets/blog_12.jpg';
import blog13 from '../../assets/blog_13.jpg';
import { FaLongArrowAltDown } from 'react-icons/fa';
import  './Eimagslick.css'


  const Eimagslick = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    touchThreshold: 10,
    swipeToSlide: true,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div className="bg-black min-h-[800px] relative">
      <Container>
        <Row>
          <Col lg={16} sm={12} md={12} className="pt-[60px] relative">
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-transparent bg-clip-text bg-gradient-to-b from-[#E8E7FF0D] to-[#ECEBF800] text-[310px] font-bold uppercase leading-[.75em] tracking-[9.3px]">
              aineblog
            </p>
            <div className="text-center relative z-10 mt-[320px]">
              <span className="block mb-2 text-[18px] font-normal elementor-headline">
                READ OUR BLOG
              </span>
              <div className="text-[60px] font-bold fontSize">
                <div className="flex justify-center items-baseline flex-wrap">
                  <span className="mr-4 text-white">Find useful</span>
                  <span className="font-bold elementor-headline">their in</span>
                </div>
                <div className="flex justify-center items-baseline mt-[-16px] flex-wrap">
                  <span className="font-bold mr-4 elementor-headline">
                    our blog
                  </span>
                  <span className="text-white">posts</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="pt-[60px]">
            <Slider {...settings} className="eimagslick-slider">
              {/* Slide 1 */}
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center text-center">
                  <img src={blog8} alt="Educational Innovation" className="mx-auto" />
                  <h6 className="mt-3 elementor-headline">NOVEMBER 29, 2023</h6>
                  <p
                    className="text-center mt-3 text-white"
                    style={{
                      fontSize: '24px',
                      lineHeight: '1.25',
                      fontWeight: '700',
                    }}
                  >
                    Educational Innovation: How AI Technology is Transforming
                  </p>
                  <div className="mt-3 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover-gradient3">
                    <FaLongArrowAltDown
                      size={20}
                      className="transform rotate-[-45deg]"
                    />
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center text-center">
                  <img src={blog9} alt="Educational Innovation" className="mx-auto" />
                  <h6 className="mt-3 elementor-headline">NOVEMBER 29, 2023</h6>
                  <p
                    className="text-center mt-3 text-white"
                    style={{
                      fontSize: '24px',
                      lineHeight: '1.25',
                      fontWeight: '700',
                    }}
                  >
                    Educational Innovation: How AI Technology is Transforming
                  </p>
                  <div className="mt-3 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover-gradient3">
                    <FaLongArrowAltDown
                      size={20}
                      className="transform rotate-[-45deg]"
                    />
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center text-center">
                  <img src={blog10} alt="Educational Innovation" className="mx-auto" />
                  <h6 className="mt-3 elementor-headline">NOVEMBER 29, 2023</h6>
                  <p
                    className="text-center mt-3 text-white"
                    style={{
                      fontSize: '24px',
                      lineHeight: '1.25',
                      fontWeight: '700',
                    }}
                  >
                    Educational Innovation: How AI Technology is Transforming
                  </p>
                  <div className="mt-3 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover-gradient3">
                    <FaLongArrowAltDown
                      size={20}
                      className="transform rotate-[-45deg]"
                    />
                  </div>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center text-center">
                  <img src={blog11} alt="Educational Innovation" className="mx-auto" />
                  <h6 className="mt-3 elementor-headline">NOVEMBER 29, 2023</h6>
                  <p
                    className="text-center mt-3 text-white"
                    style={{
                      fontSize: '24px',
                      lineHeight: '1.25',
                      fontWeight: '700',
                    }}
                  >
                    Educational Innovation: How AI Technology is Transforming
                  </p>
                  <div className="mt-3 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover-gradient3">
                    <FaLongArrowAltDown
                      size={20}
                      className="transform rotate-[-45deg]"
                    />
                  </div>
                </div>
              </div>

              {/* Slide 5 */}
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center text-center">
                  <img src={blog12} alt="Educational Innovation" className="mx-auto" />
                  <h6 className="mt-3 elementor-headline">NOVEMBER 29, 2023</h6>
                  <p
                    className="text-center mt-3 text-white"
                    style={{
                      fontSize: '24px',
                      lineHeight: '1.25',
                      fontWeight: '700',
                    }}
                  >
                    Educational Innovation: How AI Technology is Transforming
                  </p>
                  <div className="mt-3 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover-gradient3">
                    <FaLongArrowAltDown
                      size={20}
                      className="transform rotate-[-45deg]"
                    />
                  </div>
                </div>
              </div>

              {/* Slide 6 */}
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center text-center">
                  <img src={blog13} alt="Educational Innovation" className="mx-auto" />
                  <h6 className="mt-3 elementor-headline">NOVEMBER 29, 2023</h6>
                  <p
                    className="text-center mt-3 text-white"
                    style={{
                      fontSize: '24px',
                      lineHeight: '1.25',
                      fontWeight: '700',
                    }}
                  >
                    Educational Innovation: How AI Technology is Transforming
                  </p>
                  <div className="mt-3 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover-gradient3">
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

export default Eimagslick;
