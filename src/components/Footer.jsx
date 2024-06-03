import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';

const Footer = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#333', mt: 5 }}> {/* Color de fondo personalizado */}
      <Toolbar>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4}>
            <Box id="footer" display="flex" flexDirection="column" alignItems="center" textAlign="center">
              <Typography variant="h6" gutterBottom>
                Conéctate con nosotros
              </Typography>
              <Box>
                <IconButton color="inherit" href="https://web.facebook.com/vartosolucion" target='_blank'>
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" href="https://twitter.com/tu-pagina" target='_blank'>
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" href="https://github.com/sloty00" target='_blank'>
                  <GitHubIcon />
                </IconButton>
                <a href="https://wa.me/+56940595589?text=Hola%2C%20puedes%20enviarme%20tu%20mensaje%20ahora" target="_blank" rel="noopener noreferrer">
                  <IconButton color="primary">
                    <WhatsAppIcon />
                  </IconButton>
                </a>
                <a href="https://m.me/269755516230544" target="_blank" rel="noopener noreferrer">
                  <IconButton color="primary">
                    <MessageIcon />
                  </IconButton>
                </a>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
              <Typography variant="h6" gutterBottom>
                Ubicación
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="center">
                <LocationOnIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  Dirección: <a href="policies">Leer Políticas</a>.
                </Typography>
              </Box>
              <Typography variant="body1">
                Ciudad: Puerto Montt
              </Typography>
              <Typography variant="body1">
                Provincia: Llanquihue
              </Typography>
              <Typography variant="body1">
                Código Postal: <a href="policies">Leer Políticas</a>.
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="center">
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  Teléfono: +56 9 1234 5678
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} align='center'>
            <Box display="flex" alignItems="center" justifyContent="center" height="100%">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13157.004815616603!2d-72.9424927148904!3d-41.47073608595775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scl!4v1716748950443!5m2!1ses!2scl" 
                width="300" 
                height="250" 
                style={{ border: 3 }}
                title="Contenido embebido desde example.com"
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              © {new Date().getFullYear()} Varto - Todos los derechos reservados
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;