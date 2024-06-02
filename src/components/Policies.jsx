import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const now = new Date();
const formattedDate = now.toLocaleDateString(); // Formatear la fecha

const Policies = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Box id="policy" my={5}>
      <Typography variant="h3" align="center" gutterBottom>
        Declaración de Política de Privacidad para Varto Soluciones
      </Typography>
      </Box>
      <Box>
        <Typography variant="h5" gutterBottom>
          <i>Última actualización: {formattedDate}</i>
        </Typography>
        <Typography variant="h4" gutterBottom>
          Introducción
        </Typography>
        <Typography variant="body1" paragraph>
          En Varto Soluciones, valoramos y respetamos su privacidad. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos sus datos personales de acuerdo con la normativa vigente, incluyendo la Constitución Política de 1980, la Ley N° 19.628 "Sobre protección de la vida privada y Protección de Datos de Carácter Personal", el Reglamento del Registro de Bancos de Datos Personales a cargo de Organismos Públicos, y otras normativas sectoriales relevantes.
        </Typography>

        <Typography variant="h4" paragraph>
          1. Recopilación de Datos Personales
        </Typography>
        <Typography variant="body1" paragraph>
          Recopilamos datos personales directamente de usted a través de formularios en nuestro sitio web, interacciones con nuestros servicios, y de manera automática a través de tecnologías de seguimiento como cookies.
        </Typography>

        <Typography variant="h4" paragraph>
          2. Uso de Datos Personales
        </Typography>
        <Typography variant="body1" paragraph>
          Los datos personales recopilados se utilizan para:
          <Box component="ul" sx={{ pl: 2, listStyleType: 'circle' }}>
            <li>Proveer y mejorar nuestros servicios.</li>
            <li>Procesar y gestionar sus solicitudes y consultas.</li>
            <li>Personalizar su experiencia en nuestro sitio web.</li>
            <li>Cumplir con obligaciones legales y regulatorias.</li>
          </Box>
        </Typography>

        <Typography variant="h4" paragraph>
          3. Almacenamiento y Seguridad de los Datos
        </Typography>
        <Typography variant="body1" paragraph>
          Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción. Los datos se almacenan en servidores seguros y solo personal autorizado tiene acceso a ellos.
        </Typography>

        <Typography variant="h4" paragraph>
          4. Derechos del Usuario
        </Typography>
        <Typography variant="body1" paragraph>
          Usted tiene derecho a:
          <Box component="ul" sx={{ pl: 2, listStyleType: 'circle' }}>
            <li>Acceder, rectificar y eliminar sus datos personales.</li>
            <li>Oponerse al procesamiento de sus datos personales.</li>
            <li>Solicitar la portabilidad de sus datos.</li>
            <li>Exigir la eliminación de sus datos de portales y redes sociales ("derecho al olvido").</li>
          </Box>
        </Typography>

        <Typography variant="h4" paragraph>
          5. Compartición de Datos
        </Typography>
        <Typography variant="body1" paragraph>
          No compartimos sus datos personales con terceros, excepto cuando sea necesario para proporcionar nuestros servicios, cumplir con obligaciones legales, o con su consentimiento expreso.
        </Typography>

        <Typography variant="h4" paragraph>
          6. Cumplimiento con Normativas Internacionales
        </Typography>
        <Typography variant="body1" paragraph>
          Nos comprometemos a cumplir con las recomendaciones de la OCDE sobre Protección de la Privacidad y Flujo Transfronterizo de Datos Personales. Continuamente revisamos y actualizamos nuestras prácticas de privacidad para alinearnos con los estándares internacionales.
        </Typography>

        <Typography variant="h4" paragraph>
          7. Aviso Importante sobre la Publicación de Direcciones
        </Typography>
        <Typography variant="body1" paragraph>
          En Varto Soluciones, la seguridad y privacidad de nuestros clientes es nuestra máxima prioridad. Por esta razón, nos reservamos el derecho de no publicar ninguna dirección física. Esta medida está destinada a proteger tanto los datos personales como la integridad física de nuestros clientes y de nuestro equipo.
          <br/>
          Agradecemos su comprensión y colaboración en este aspecto, ya que juntos podemos garantizar un entorno más seguro y protegido para todos.
        </Typography>

        <Typography variant="h4" paragraph>
          8. Modificaciones a esta Política
        </Typography>
        <Typography variant="body1" paragraph>
          Nos reservamos el derecho de actualizar esta Política de Privacidad para reflejar cambios en nuestras prácticas o en la legislación aplicable. Le notificaremos sobre cualquier cambio significativo a través de nuestro sitio web o por otros medios apropiados.
        </Typography>

        <Typography variant="h4" paragraph>
          Contacto
        </Typography>
        <Typography variant="body1" paragraph>
          Si tiene preguntas o inquietudes sobre nuestra Política de Privacidad, puede contactarnos a través de:
          <br/>
          Email: [policies@vartosoluciones.com]
          <br/>
          Dirección: Puerto Montt, Llanquihue, Chile.
        </Typography>
        <Typography variant="h5" paragraph>
          <i>
            Varto Soluciones
            <br/>
            {formattedDate}
          </i>
        </Typography>
      </Box>
    </Container>
  );
};

export default Policies;