const { Router } = require('express');
const router = Router();

const { getAgenda, getAgendaByCi } = require('../controllers/agenda.controller');

router.get('/agenda', getAgenda);
router.get('/agenda/:id', getAgendaByCi);


module.exports = router;