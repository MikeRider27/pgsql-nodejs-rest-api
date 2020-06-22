const { Router } = require('express');
const router = Router();

const { getReporte, getReporteByCi } = require('../controllers/reporte.controller');

router.get('/reporte', getReporte);
router.get('/reporte/:id', getReporteByCi);


module.exports = router;