import React, { useState } from 'react';
import Slider from 'react-slick';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import CarouselButton from './CarouselButton'; // Importa el componente de botón personalizado
import PolicyIcon from '@mui/icons-material/Policy';
import HomeIcon from '@mui/icons-material/Home';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ComputerIcon from '@mui/icons-material/Computer';
import ContactlessIcon from '@mui/icons-material/Contactless';

const carouselItems = [
  {
    title: 'Desarrollo Web',
    description: 'Creamos sitios web personalizados y responsivos.',
    imageUrl: 'images/responsive_web.jpg',
  },
  {
    title: 'Desarrollo APP',
    description: 'Aplicaciones Webs / Workflow para Empresas.',
    imageUrl: 'images/varto_desk.jpg',
  },
  {
    title: 'Consultoría Técnica',
    description: 'Asesoría en tecnologías y soluciones de software.',
    imageUrl: 'images/desarrollo_app1.png',
  },
];

const CarouselHeader = () => {
  const [scrollOffset] = useState(-100); // Inicializa con un valor negativo para desplazar más arriba
  const location = useLocation();
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CarouselButton direction="next" />,
    prevArrow: <CarouselButton direction="prev" />,
  };

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <Box id="inicio">
      <AppBar position="sticky" sx={{ backgroundColor: '#333' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="/images/OIG5.jpg" alt="Logo de la empresa" style={{ height: '50px', marginRight: '20px' }} />
          </Typography>
          <ScrollLink to="inicio" smooth={true} duration={500}>
            <Button color={isActive('/') ? 'primary' : 'inherit'} component={Link} to="/"><HomeIcon />Inicio</Button>
          </ScrollLink>
          <ScrollLink to="misionyvision" smooth={true} duration={500}>
            <Button color={isActive('/') ? 'primary' : 'inherit'} component={Link} to="/"><CheckCircleIcon />Mision y Vision</Button>
          </ScrollLink>
          <ScrollLink to="servicios" smooth={true} duration={500}>
            <Button color={isActive('/') ? 'primary' : 'inherit'} component={Link} to="/"><ComputerIcon />Servicios</Button>
          </ScrollLink>
          <ScrollLink to="footer" smooth={true} duration={500}>
            <Button color={isActive('/') ? 'primary' : 'inherit'} component={Link} to="/"><ContactlessIcon />Contacto</Button>
          </ScrollLink>
          <ScrollLink to="policy" smooth={true} duration={500} offset={scrollOffset}>
            <Button color={isActive('/policies') ? 'primary' : 'inherit'} component={Link} to="/policies"><PolicyIcon />Política de Privacidad</Button>
          </ScrollLink>
        </Toolbar>
      </AppBar>
      <Slider {...settings}>
      {carouselItems.map((item, index) => (
          <Box key={index} sx={{ 
            position: 'relative',
            top: '20%',
            textAlign: 'center', 
            color: 'white' 
            }}>
            {/* Logo de la empresa en cada diapositiva */}
            <Box sx={{
              position: 'absolute',
              top: '25%',
              left: '15%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'rgba(0, 0, 0, 0.0)',
              padding: 2,
              borderRadius: 1,
            }}>
            <img
              src="/images/OIG5.jpg"
              alt="Logo de la empresa"
              style={{
                height: '150px',
                zIndex: 1
              }}
            />
            </Box>
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{ width: '70%', height: '540px', objectFit: 'cover', float: 'right' }} // Tamaño fijo de 300px de alto
            />
            <Box sx={{
              position: 'absolute',
              top: '70%',
              left: '15%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              padding: 2,
              borderRadius: 1,
            }}>
              <Typography variant="h4">{item.title}</Typography>
              <Typography variant="body1">{item.description}</Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselHeader;