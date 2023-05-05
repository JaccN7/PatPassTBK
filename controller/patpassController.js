const { response } = require('express');

const { headerSchema, bodyInscriptionSchema } = require('../models/patpassSchema');
const { token } = require('morgan');
const cabeceras = JSON.stringify(headerSchema);
const inscriptionSchema = JSON.stringify(bodyInscriptionSchema);

const RenderIndex = (req, res, next) => {
    console.log("RenderIndex");

    res.render('index', { title: 'API REST PatPass', url: '', token: '', cabeceras: cabeceras, body: inscriptionSchema});
}

const InscriptionStart = async (req, res, next) => {

    console.log("InscriptionStart");
    //Consumir api
    const patpassInscriptionURL = 'https://pagoautomaticocontarjetasint.transbank.cl/restpatpass/v1/services/patInscription';
    await fetch(patpassInscriptionURL, {
        method: 'POST',
        headers: headerSchema,
        body: JSON.stringify(bodyInscriptionSchema)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.render('index', { title: 'API REST PatPass - Inscripción', url: data.url, token: data.token, cabeceras: JSON.stringify(headerSchema), body: JSON.stringify(bodyInscriptionSchema) });
        }).catch(err => {
            console.log(err);
            res.render('error', { title: 'API REST PatPass - Error', error: err });
        });
}

const InscriptionFinish = async (req, res, next) => {
    console.log("InscriptionFinish");
    console.log(JSON.stringify(req.body.j_token));
    const token = req.body.j_token;
    await fetch('https://pagoautomaticocontarjetasint.transbank.cl/restpatpass/v1/services/status', {
        method: 'POST',
        headers: headerSchema,
        body: JSON.stringify({
            "token": req.body.j_token
        })
    }).then(response => response.json())
        .then(data => {
            console.log(data);
            res.render('finalizar_suscripcion', { title: 'API REST PatPass - Finalizar Inscripción', data: data, token: token });
        }).catch(err => {
            console.log(err);
            res.render('error', { title: 'API REST PatPass - Error', error: err });
        });

}

const voucherCheck = async (req, res, next) => {
    console.log("voucherCheck");
    const token = req.body.j_token;
    console.log(JSON.stringify(req.body));
    //Detectar cuando se renderice la vista voucher.ejs
    res.render('voucher', { title: 'API REST PatPass - Voucher', token: token });
}

module.exports = {
    RenderIndex,
    InscriptionStart,
    InscriptionFinish,
    voucherCheck
}