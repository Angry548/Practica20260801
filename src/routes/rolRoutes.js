const express = require('express');
const router = express.Router();

// GET /api/roles
router.get('/', (req, res) => {
  res.json({
    mensaje: 'Lista de roles',
    roles: ['Administrador', 'Cliente', 'Editor']
  });
});

// POST /api/roles
router.post('/', (req, res) => {
  const { nombreRol } = req.body;
  res.status(201).json({
    mensaje: 'Rol creado con éxito',
    rol: nombreRol
  });
});

module.exports = router;