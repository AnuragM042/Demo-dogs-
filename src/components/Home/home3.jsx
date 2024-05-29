import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from "../../assets/home-3-1.webp";
import Image2 from "../../assets/home-3-2.webp";
import Image3 from "../../assets/home-3-3.webp";
import Image4 from "../../assets/home-3-4.webp";
import Image5 from "../../assets/home-3-5.jpg";
import Image6 from "../../assets/home-3-6.jpg";
import Image7 from "../../assets/home-3-7.jpg";
import Image8 from "../../assets/home-3-8.jpg";
import Image9 from "../../assets/home-3-9.jpg";
import Image10 from "../../assets/Pet-lover-label.png";
import './home3.css'
import { Link } from 'react-router-dom';

// Card
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Home3 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className='bg-custom-gradient'>
      {/* Title */}
      <div className="flex justify-center items-center content-center">
        <p className="font-['Cambria'] text-3xl sm:text-4xl text-white mt-5 font-extrabold">Experience our Paw'dventures</p>
      </div>
      {/* Title ends here */}

      {/* 1st set of images */}
     <div>
     <div className="flex justify-center overflow-x-auto w-full space-x-2 py-6 hide-scrollbar">
        <Card className="mt-6 h-[250px] w-[230px]  sm:w-[400px] sm:h-[350px]  px-2">
          <CardHeader color="blue-gray" className="my-2">
            <img src={Image1} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
              Camping
            </Typography>
            <Typography className="text-center">
              Paw'dventure Nightouts
            </Typography>
          </CardBody>
          <CardFooter className="text-center">
            <Link to="/overnight-camps">
            <Button className='text-black text-base text-center'>Read More</Button>
            </Link>
          </CardFooter>
        </Card>
        {/* card 2 */}
        <Card className="mt-6 h-[250px] min-w-[230px] sm:w-[400px] sm:h-[350px]  px-2">
          <CardHeader color="blue-gray" className="my-2 ">
            <img src={Image2} alt="card-image" className="" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
              SAILING
            </Typography>
            <Typography className="text-center">
              Explore Indian Ocean
            </Typography>
          </CardBody>
          <CardFooter className="text-center">
           <Link to="/Sailing">
           <Button className='text-black text-base text-center'>Read More</Button>
           </Link>
          </CardFooter>
        </Card>
        {/* card 3 */}
        <Card className="mt-6 h-[250px] min-w-[230px] sm:w-[400px] sm:h-[350px]  px-2">
          <CardHeader color="blue-gray" className="my-2">
            <img src={Image3} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
              ONE DAY ACTIVITY
            </Typography>
            <Typography className="text-center">
              Doggo's day out
            </Typography>
          </CardBody>
          <CardFooter className="text-center">
            <Link to='/activity'>
            <Button className='text-black text-base text-center'>Read More</Button>
            </Link>
          </CardFooter>
        </Card>
        {/* card 4 */}
        <Card className="mt-6 h-[250px]  min-w-[230px] sm:w-[400px] sm:h-[350px] px-2 ">
          <CardHeader color="blue-gray" className="my-2">
            <img src={Image4} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
              TRIP INDIA
            </Typography>
            <Typography className="text-center">
              Making India Pet Friendly
            </Typography>
          </CardBody>
          <CardFooter className="text-center">
            <Link to="/tripindia">
            <Button className='text-black text-base text-center'>Read More</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
     </div>

      {/* Pet image */}
      {/* <div className="flex justify-center my-[50px]">
        <div className="">
          <img src={Image10} className='h-[300px] md:h-[100px] hover:animate-left-text-appear' alt="" />
          <span className="text-white text-lg absolute left-0 hidden group-hover:block transition duration-300">Some Text</span>
        </div>
      </div> */}

      {/* 2nd set of images with Slick */}
      <div className="slider-container mt-10 flex flex-col">
        <div className="lg:px-[200px] justify-evenly sm:px-[50px]">
          <Slider {...settings}>
            <div className="px-2">
              <img
                src={Image5}
                alt="Slide 1"
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => handleImageClick(Image5)}
              />
            </div>
            <div className="px-2">
              <img
                src={Image6}
                alt="Slide 2"
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => handleImageClick(Image6)}
              />
            </div>
            <div className="px-2">
              <img
                src={Image7}
                alt="Slide 3"
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => handleImageClick(Image7)}
              />
            </div>
            <div className="px-2">
              <img
                src={Image8}
                alt="Slide 4"
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => handleImageClick(Image8)}
              />
            </div>
            <div className="px-2">
              <img
                src={Image9}
                alt="Slide 5"
                className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => handleImageClick(Image9)}
              />
            </div>
          </Slider>
        </div>
      </div>

      {/* Enlarged image overlay */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
            <img src={selectedImage} alt="Enlarged" className="object-cover w-4/5 h-4/5 mx-auto rounded-lg" />
            <button onClick={handleClose} className="absolute top-2 right-2 text-black px-2 rounded bg-white text-2xl">&times;</button>
          </div>
        </div>
      )}
      {/* Overlay ends here */}
    </div>
  );
};

export default Home3;
