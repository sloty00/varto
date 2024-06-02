import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button, Modal } from '@mui/material';

const services = [
  { 
    title: 'Desarrollo de Software Personalizado', 
    description: 'Ofrecemos soluciones de software a medida que se adaptan a las necesidades específicas de cada cliente, garantizando una integración fluida y eficiente con sus sistemas existentes. Especializados en la creación de aplicaciones web interactivas y atractivas utilizando tecnologías como React, Firebase y Material-UI.',
    details: 'En este servicio, nos enfocamos en entender las necesidades únicas de cada cliente y proporcionar soluciones de software que se integren perfectamente con sus sistemas existentes. Utilizamos tecnologías modernas como React para crear interfaces de usuario atractivas y Firebase para asegurar la gestión eficiente de datos.' 
  },
  { 
    title: 'Veeam Backup & Replication', 
    description: 'Implementamos en nuestros desarrollos, un sistema de respaldo utilizando Veeam Backup & Replication para asegurar que los datos de nuestros clientes estén siempre disponibles y protegidos contra fallos.',
    details: 'Veeam Backup & Replication es una solución confiable para la protección de datos. Nos aseguramos de que los datos de nuestros clientes estén respaldados y accesibles en todo momento, proporcionando tranquilidad y continuidad del negocio.' 
  },
  { 
    title: 'Modelado de Bases de Datos y Sistemas', 
    description: 'Nos especializamos en la creación de modelos E/R precisos y detallados, así como en el diseño de bases de datos robustas, asegurando una estructura sólida y escalable para las aplicaciones de nuestros clientes.',
    details: 'El modelado de bases de datos es crucial para el éxito de cualquier proyecto de software. Creamos modelos E/R detallados que aseguran una base sólida para el desarrollo de aplicaciones escalables y eficientes.'
  },
  { 
    title: 'Seguridad de la Información', 
    description: 'Priorizamos la seguridad en todos nuestros desarrollos, implementando medidas avanzadas para proteger el acceso y la integridad de los datos, garantizando que nuestras aplicaciones sean seguras y confiables.',
    details: [
      { title: 'JWT (JSON Web Tokens):', content: 'Implementación de autenticación segura usando JWT para garantizar la integridad y autenticidad de los tokens en tus aplicaciones.' },
      { title: 'Autenticación de Dos Factores (2FA):', content: 'Configuración de 2FA para añadir una capa adicional de seguridad a los sistemas de autenticación.' },
      { title: 'Integración con Active Directory (AD) + JWT:', content: 'Integración de sistemas de autenticación con Active Directory para aprovechar la gestión centralizada de usuarios y emitir tokens JWT para sesiones autenticadas.' },
      { title: 'Firebase Auth + JWT:', content: 'Uso de Firebase Authentication para gestionar usuarios y generación de tokens JWT para proteger tus aplicaciones web y móviles.' },
      { title: 'Instalación y configuración de Veeam B&R:', content: 'Todas nuestras aplicaciones las entregamos con Veeam B&R configurados hacia nuestras aplicaciones, respaldos para la continuidad de su negocio.' },
      { title: '', content: 'Estos servicios están diseñados para garantizar la seguridad y la protección de tus aplicaciones contra accesos no autorizados.', italic: true }
    ]
  },
  { 
    title: 'Evaluación y Adaptación Continua', 
    description: 'Cada nuevo requerimiento es evaluado y adaptado con precios justos y flexibles, permitiendo a nuestros clientes mantener un control claro sobre sus inversiones y el desarrollo de sus proyectos.',
    details: 'Nuestro enfoque flexible permite a los clientes adaptar sus proyectos a medida que evolucionan sus necesidades. Ofrecemos precios justos y transparentes, evaluando continuamente cada nuevo requerimiento para asegurar el mejor valor para nuestros clientes.' 
  },
];

const ServiceModal = ({ open, handleClose, service }) => (
  <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
    <Box sx={{ 
      position: 'absolute', 
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
      width: 400, 
      bgcolor: 'background.paper', 
      boxShadow: 24, 
      p: 4, 
      maxHeight: '80vh', // Limitar la altura máxima
      overflowY: 'auto' // Habilitar scroll vertical
    }}>
      <Typography id="modal-title" variant="h6" component="h2">
        {service.title}
      </Typography>
      <Box id="modal-description" sx={{ mt: 2 }}>
        {Array.isArray(service.details) ? (
          service.details.map((detail, index) => (
            <Typography key={index} variant="body1" paragraph>
              {detail.title && <strong>{detail.title}</strong>} {detail.italic ? <em>{detail.content}</em> : detail.content}
            </Typography>
          ))
        ) : (
          <Typography variant="body1" paragraph>{service.details}</Typography>
        )}
      </Box>
    </Box>
  </Modal>
);

const Services = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box id="servicios">
      <Typography variant="h3" align='center'>Servicios</Typography><br/>
      <Slider {...settings}>
        {services.map((service, index) => (
          <Box key={index} sx={{ textAlign: 'center', px: 2 }}>
            <Typography variant="h5">{service.title}</Typography>
            <Typography variant="body1">{service.description}</Typography>
            <Button variant="outlined" onClick={() => handleOpen(service)}>Características</Button>
          </Box>
        ))}
        {selectedService && (
        <ServiceModal open={open} handleClose={handleClose} service={selectedService} />
      )}
      </Slider>
    </Box>
  );
};

export default Services;