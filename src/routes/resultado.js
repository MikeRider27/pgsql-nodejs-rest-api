const { Router } = require('express');
const router = Router();

const { getResultado, getResultadoByCi } = require('../controllers/resultado.controller');

router.get('/resultado', getResultado);
router.get('/resultado/:id', getResultadoByCi);


module.exports = router;