import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarouselHeader from './components/CarouselHeader';
import Services from './components/Services';
import Footer from './components/Footer';
import { CssBaseline, Container, Box } from '@mui/material';
import BrandSlider from './components/BrandSlider';
import MissionVision from './components/MissionVision'; // Importa el nuevo componente
import Policies from './components/Policies';

function MainContent() {
  return (
    <Container>
      <Box id="inicio" my={5}>
      </Box>
      <Box id="misionyvision" my={5}>
        <MissionVision />
      </Box>
      <Box id="servicios" my={5}>
        <Services />
      </Box>
      <Box id="bslider" my={5}>
        <BrandSlider />
      </Box>
    </Container>
  );
}

function App() {

  return (
    <div>
      <CssBaseline />
      <Router>
          <CarouselHeader />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;