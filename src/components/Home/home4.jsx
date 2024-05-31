import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/home4-1.png";
import Image2 from "../../assets/home4-2.png";
import Image3 from "../../assets/home4-3.png";
import Image4 from "../../assets/Home4-4.jpg";
import "./home4.css" 

function Home4() {
  const settings = {
    dots: false,
    dotsClass: "slick-dots slick-thumb text-red-500", 
    infinite: true,
    speed: 500,
    autoplay: true,  
    autoplaySpeed: 5000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: false,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="mb-3">
      {/* Texts */}
      <div className="flex flex-col font-['Cambria'] text-xl items-center justify-center space-y-5">
        <p>Testimonials</p>
        <h3 className="text-2xl font-bold font-['Cambria'] ">See what Other Dog Parents Say</h3>
        {/* <p>ABOUT US</p> */}
      </div>

      {/* Slider */}
      <div className="overflow-hidden  md:h-[540px] am:h[300px] lg:w-[900px] md:w-[600px] sm:w-[500px] w-full mx-auto">
        <Slider {...settings} className="px-5 am:h-[240px]">
          <div className="text-center">
            <img src={Image1} alt="Testimonial 1" className=" h-auto object-cover" />
            {/* Add testimonial content here (text, quote, etc.) */}
          </div>
          <div className="text-center">
            <img src={Image2} alt="Testimonial 2" className=" h-auto object-cover" />
            {/* Add testimonial content here (text, quote, etc.) */}
          </div>
          <div className="text-center">
            <img src={Image3} alt="Testimonial 3" className=" h-auto object-cover" />
            {/* Add testimonial content here (text, quote, etc.) */}
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home4;
