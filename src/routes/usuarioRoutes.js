const express = require('express');
const router = express.Router();

// GET /api/usuarios
router.get('/', (req, res) => {
  res.json({
    mensaje: 'Lista de usuarios',
    usuarios: ['Juan', 'Maria', 'Pedro']
  });
});

// GET /api/usuarios/1
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ mensaje: `Detalles del usuario con ID: ${id}` });
});

module.exports = router;