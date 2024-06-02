import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Servicios de Programación
        </Typography>
        <Box>
          <Button color="inherit">
            <Link to="inicio" smooth duration={500}>
              Inicio
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="servicios" smooth duration={500}>
              Servicios
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="contacto" smooth duration={500}>
              Contacto
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;