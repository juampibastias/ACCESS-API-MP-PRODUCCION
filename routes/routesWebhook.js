const {Router} = require('express');
const {PagoProducto} = require('../Controllers/notificacionWebhooks');
const router = Router();
router.post('/notification', PagoProducto);

module.exports = router