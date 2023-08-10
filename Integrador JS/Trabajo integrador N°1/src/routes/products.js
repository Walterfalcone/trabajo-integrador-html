const express = rquire('express');
const router = express.router();
const controllers = require ('../controllers');

router.get('/listar', controller.listar);
router.get('/detalle', controller.detalle);
router.get('/crear', controller.crear);
 
module.express = router;
