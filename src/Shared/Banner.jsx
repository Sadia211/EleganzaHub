import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useLoaderData } from 'react-router-dom';

const Banner = () => {
  const bannerContainerStyle = {
    maxHeight: '470px', // Adjust this value as needed
    overflow: 'hidden',
    position: 'relative',
    
  };

  const bannerImageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover', // This will make sure the image covers the area without stretching
  };

  return (
    <div style={bannerContainerStyle}>
      <img 
        src='https://i.ibb.co/S6dwTMm/summer.png' 
        alt='Banner' 
        style={bannerImageStyle} 
      />
    </div>
  );
};

export default Banner;
