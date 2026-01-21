const express = require('express');
const path = require('path');
const helmet = require('helmet');
const app = express();

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');

// Configuración de la carpeta 'views' donde se encuentran los archivos .ejs
app.set('views', path.join(__dirname, 'views'));

// Variables globales para todas las vistas (cámbialas aquí y se reflejan en todo el sitio)
const siteData = {
  name: 'Asociación Privada de Patronato',
  year: 2026,
  address: 'Av. Alejandro Bertello, Callao',
  phoneDisplay: '+51 933 221 981',
  phoneTel: '+51933221981',
  whatsappWaMe: 'https://wa.me/51933221981',
  email: 'cetprogn@gmail.com',
  facebookUrl: 'https://www.facebook.com/p/Asociaci%C3%B3n-Privada-De-Patronato-100081356607130/',
  hours: {
    label: 'Lunes a Viernes',
    range: '8:00am - 13:00pm',
  },
};

app.locals.site = siteData;

// Middleware para asegurar que 'site' esté disponible en todas las vistas
app.use((req, res, next) => {
  res.locals.site = siteData;
  next();
});

// Servir archivos estáticos como CSS, imágenes, etc.
app.use(helmet({
  contentSecurityPolicy: false, // usamos CDNs en el frontend; CSP se puede agregar luego con whitelist
}));
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la vista de inicio (index)
app.get('/', (req, res) => {
  res.render('index'); // Esto renderiza 'index.ejs'
});

// Ruta para servicios
app.get('/servicios', (req, res) => {
  res.render('servicios'); // Esto renderiza 'servicios.ejs'
});

// Ruta para contacto
app.get('/contacto', (req, res) => {
  res.render('contacto'); // Esto renderiza 'servicios.ejs'
});

// Ruta para matricula
app.get('/matricula', (req, res) => {
  res.render('matricula'); // Esto renderiza 'servicios.ejs'
});

// Ruta para matricula
app.get('/nosotros', (req, res) => {
  res.render('nosotros'); // Esto renderiza 'servicios.ejs'
});

// 404 (si no matchea ninguna ruta)
app.use((req, res) => {
  res.status(404).render('errors/404');
});

// Handler de errores (500)
app.use((err, req, res, next) => {
  console.error(err);
  if (res.headersSent) return next(err);
  res.status(500).render('errors/500');
});

// Iniciar el servidor
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
