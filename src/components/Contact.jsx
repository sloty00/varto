import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Snackbar } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const prefilledMessage = `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`;

  const handleMessengerClick = () => {
    const encodedMessage = encodeURIComponent(prefilledMessage);
    const url = `https://m.me/269755516230544?ref=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <Container>
      <Box my={5}>
        <Typography variant="h3" align="center" gutterBottom>
          Contacto
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Nombre"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Correo Electrónico"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Mensaje"
            margin="normal"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Box mt={2}>
            <Button variant="contained" color="primary" onClick={handleMessengerClick}>
              Contactar por Messenger
            </Button>
          </Box>
        </Box>
        <Snackbar
          open={copied}
          autoHideDuration={3000}
          onClose={() => setCopied(false)}
          message="Mensaje copiado al portapapeles"
        />
      </Box>
    </Container>
  );
};

export default Contact;