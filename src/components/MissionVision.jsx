import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const MissionVision = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Nuestra Misión y Visión
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Misión
            </Typography>
            <Typography variant="body1" paragraph>
              En Varto, nos dedicamos a proporcionar soluciones de desarrollo de software innovadoras y altamente disponibles. Utilizamos Veeam Backup & Replication (B&R) para garantizar que nuestros desarrollos (produccion) de nuestros clientes estén siempre protegidos y accesibles. Nos especializamos en el modelado preciso de bases de datos y sistemas, asegurando una integración segura y eficiente con los servicios de nuestros clientes. Nuestro enfoque flexible de precios, basado en la evaluación continua de nuevos requerimientos, garantiza un valor justo y adaptado a cada necesidad. Nuestra prioridad es la seguridad revolucionaria en el acceso y gestión de datos en aplicaciones empresariales.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Visión
            </Typography>
            <Typography variant="body1" paragraph>
              Aspiramos a ser líderes en el campo del desarrollo de software implementando nuestras soluciones con respaldos. Nos esforzamos por transformar la manera en que las empresas manejan y protegen sus datos, ofreciendo soluciones robustas y seguras que promuevan la innovación y el crecimiento sostenido. Nuestra visión es construir un futuro donde la seguridad de la información del código y la disponibilidad constante de datos sean pilares fundamentales del éxito empresarial.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MissionVision;