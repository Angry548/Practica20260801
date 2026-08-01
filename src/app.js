const express = require('express');

// 1. Importar los archivos de rutas
const usuarioRoutes = require('./routes/usuarioRoutes');
const rolRoutes = require('./routes/rolRoutes');

const app = express();

// Middleware para procesar JSON en las peticiones
app.use(express.json());

// 2. Conectar los routers a sus respectivos prefijos de URL
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/roles', rolRoutes);

module.exports = app;