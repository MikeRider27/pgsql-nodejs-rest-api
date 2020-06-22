const { Router } = require('express');
const router = Router();

const { getCalls, getCallsByCi } = require('../controllers/calls.controller');

router.get('/calls', getCalls);
router.get('/calls/:id', getCallsByCi);


module.exports = router;