const headerSchema = {
    "CommerceCode": "28299257",
    "Authorization": "cxxXQgGD9vrVe4M41FIt",
    "Content-Type": "application/json"
}

const bodyInscriptionSchema = {
    "url": "http://JaccN7:3000/finalizar_suscripcion",
    "nombre": "Diego",
    "pApellido": "Sanchez",
    "sApellido": "Valdovinos",
    "rut": "12345678-5",
    "serviceId": "Service_"+Math.floor(Math.random() * 10000+1),
    "finalUrl": "http://JaccN7:3000/voucher",
    "commerceCode": "28299257",
    "montoMaximo": "",
    "telefonoFijo": "57508624",
    "telefonoCelular": "57508624",
    "nombrePatPass": "Service_"+Math.floor(Math.random() * 10000+1),
    "correoPersona": "persona@test.cl",
    "correoComercio": "comercio@test.cl",
    "direccion": "Merced 156, Santiago, Chile",
    "ciudad": "Santiago"
}

//exportar
module.exports = {
    headerSchema,
    bodyInscriptionSchema
}