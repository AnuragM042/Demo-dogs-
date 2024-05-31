import React from 'react';
import { Button } from "@material-tailwind/react";
import calendar from "../../assets/calendar.png"; // Fixed the path by removing extra space
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";
import Image1 from "../../assets/Home2-1.jpg";
import Image2 from "../../assets/Home2-2.png";
import Logo from "../../assets/logo2.png";
import { Link } from 'react-router-dom';
import  './home2.css'
function Home2() {
  

  const activities = [
    {
      date: 'Saturday - May 11th',
      name: 'Summer Woofshop',
      link: "/Reservation"
    },
    {
      date: 'Saturday - June 8th',
      name: 'Overnight Camps',
      link: "/Reservation",
    },
    {
      date: 'Saturday - June 15th',
      name: 'Overnight Camps',
      link: "/Reservation"
    },
    {
      date: 'Saturday - June 20th',
      name: 'Overnight Camps',
      link: "/Reservation"
    },
    {
      date: 'Saturday - June 21th',
      name: 'Overnight Camps',
      link: "/Reservation"
    },
  ];


  return (
    <div className=''> 
      {/* Date and Calendar */}
      <div className="container mx-auto p-4 flex flex-col items-center justify-center">
        <img className='h-[150px] w-[150px]' src={calendar} alt="Calendar" />
        {/* Cards */}
        <div className="flex sm:justify-center w-screen flex-row sm:flex-wrap  am:overflow-x-scroll  gap-4 mt-5">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md w-[250px] transform transition duration-300 hover:shadow-lg hover:scale-110">
              <div className="text-gray-800 font-bold text-xl mb-2">{activity.date}</div>
              <div className="text-2xl">{activity.name}</div>
              {activity.link && (
                <Link to={activity.link} className="block mt-4 text-blue-500 hover:underline">
                  Book Now <MdKeyboardDoubleArrowRight />
                </Link>
              )}
              <FaRegCalendarCheck className="text-gray-500 mt-2" />
            </div>
          ))}
        </div>
      </div>
      {/* Home2 middle section */}
      <div className='flex flex-col md:flex-row justify-center py-5'>
        <div className='px-4 mb-4 md:mb-0'>
          {/* Image 1 */}
          <img className='rounded-xl w-full max-w-[600px]' src={Image1} alt="people" />
        </div>
        <div className='relative w-full max-w-[600px] h-[400px]  '>
          {/* Image 2 as background */}
          <img className='absolute inset-0 w-full  object-cover rounded-xl' src={Image2} alt="background" />
          {/* Logo on top */}
          <div className='absolute inset-0 h-[400px] flex flex-col '>
            <img className='max-h-[90px] max-w-[80%]' src={Logo} alt="logo" />
            <p className="text-lg mb-4 font-[' Lato']  font-bold">Reconnect with your dog through various activities</p>
            <p className="text-lg mb-4 font-[' Lato']  font-bold">With the growing number of dogs and dog parents, more and more places are becoming pet-friendly</p>
            <p className="text-lg mb-4 font-[' Lato']  font-bold">A well-adjusted and social doggo is a prerequisite for making India pet-friendly</p>
            <p className='flex space-x-3'>
              <Link to="/about">
                <Button className="font-[' Lato'] bg-black border border-white p-[15px] flex justify-center content-center text-white" ripple={true}>
                  KNOW MORE<MdKeyboardDoubleArrowRight className="text-xs" />
                </Button>
              </Link>
              <Button className="font-['Cambr Latoia'] border border-white bg-black p-[15px] flex justify-center content-center text-white" ripple={true}>
                Check out Instagram<MdKeyboardDoubleArrowRight className="text-xs" />
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;