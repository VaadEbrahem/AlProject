import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import h2vector from "../../assets/h2_vector.png";

export const Titeleimageslick = () => {
  const settings = {
    infinite: true,  // يعمل بشكل مستمر بدون توقف
    speed: 5000,  // سرعة الانتقال بين الشرائح بالمللي ثانية
    slidesToShow: 3,  // عدد الشرائح التي تظهر في نفس الوقت
    slidesToScroll: 1,  // عدد الشرائح التي يتم الانتقال بينها في كل مرة
    draggable: true,  // يمكن سحب الشرائح بالماوس
    swipeToSlide: true,  // الانتقال إلى الشريحة عند السحب
    autoplay: true,  // التشغيل التلقائي للشرائح
    autoplaySpeed: 0,  // سرعة التشغيل التلقائي، 0 يعني بدون توقف
    cssEase: "linear",  // تأثير الانتقال يكون خطي
    responsive: [
      {
        breakpoint: 768,  // نقطة الكسر عند عرض الشاشة 768 بيكسل
        settings: {
          slidesToShow: 1,  // عرض شريحة واحدة عند نقطة الكسر
          slidesToScroll: 1,  // الانتقال بين شريحة واحدة عند نقطة الكسر
        },
      },
    ],
  };


  return (
    <div className="bg-black min-h-[270px] relative pt-[150px]">
          <Slider {...settings} className="bg-[#121213] py-[36px]">
            <div className="flex items-center justify-center">
              <img src={h2vector} alt="Icon"/>
              <div className="ml-[80px] mt-[-45px]">
                <h2 className="text-white">Your Prominent Title</h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img src={h2vector} alt="Icon" />
              <div className="ml-[80px] mt-[-45px]">
                <h2 className="text-white">Image Generator
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img src={h2vector} alt="Icon" />
              <div className="ml-[80px] mt-[-45px]">
                <h2 className="text-white">Creativity</h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img src={h2vector} alt="Icon" />
              <div className="ml-[80px] mt-[-45px]">
                <h2 className="text-white">Magical Images</h2>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img src={h2vector} alt="Icon" />
              <div className="ml-[80px] mt-[-45px]">
                <h2 className="text-white">Your Prominent Title</h2>
              </div>
            </div>
          </Slider>
      </div>
  );
};

export default Titeleimageslick;
