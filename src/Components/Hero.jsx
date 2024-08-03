import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className=" text-white h-screen flex items-center justify-center">
        <div className='absolute right-6 top-2'> About </div>
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold mb-8">Know Your Air</h1>
        <p className="text-xl mb-2">Get real-time Air Quality Index (AQI) of different parts of the world,</p>
        <p className="text-xl mb-8">with just a click .</p>
        <Link className="bg-white text-dark-blue font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
        to="/dashboard">
          Check AQI Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
