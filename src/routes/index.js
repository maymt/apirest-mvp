const { Router } = require('express');
const router = Router();

const { getPedidos, getPedidoByObra} = require('../controllers/index.controller')

router.get('/tabla2', getPedidos);
router.get('/tabla2/:obra_oc', getPedidoByObra);

module.exports = router;