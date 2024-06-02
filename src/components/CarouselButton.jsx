import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

const CarouselButton = ({ onClick, direction }) => {
  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: 'black',
    ...(direction === 'prev' ? { left: 0 } : { right: 0 }), // Posiciona el botón a la izquierda o derecha según la dirección
  };

  return (
    <IconButton onClick={onClick} sx={buttonStyle}>
      {direction === 'prev' ? <ArrowLeft /> : <ArrowRight />}
    </IconButton>
  );
};

export default CarouselButton;