import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';

const brands = [
  { name: 'Nodejs', logo: '/images/NodejsLogo.png' },
  { name: 'React', logo: '/images/react_logo_2.png' },
  { name: 'JWT', logo: '/images/JWT.png' },
  { name: 'Mysql', logo: '/images/mysql.png' },
  { name: 'Veeam', logo: '/images/veeam3.png' },
  { name: 'Active Directory', logo: '/images/AD.png' },
  { name: 'Firebase Auth', logo: '/images/firebase.png' },
  // Agrega más marcas según sea necesario
];

const BrandSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {brands.map((brand, index) => (
        <Box key={index} sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <img src={brand.logo} alt={brand.name} style={{ maxWidth: '100%', maxHeight: '100px', margin: '0 auto' }} />
        </Box>
      ))}
    </Slider>
  );
};

export default BrandSlider;