const express = require('express');
const router = express.Router();

const { RenderIndex,InscriptionStart,InscriptionFinish, voucherCheck} = require('../controller/patpassController');

router.get('/', RenderIndex);
router.post('/', InscriptionStart);
router.post('/finalizar_suscripcion', InscriptionFinish);
router.post('/voucher', voucherCheck);


module.exports = {
    routes: router
};