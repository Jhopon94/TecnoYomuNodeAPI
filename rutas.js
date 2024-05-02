const express = require("express");
const empleadoRepo = require("./repository/empleadoRepo");
const rutasHttp = express.Router();

//Ruta Post
rutasHttp.post('/Empleados', empleadoRepo.crearNuevo);

//Get todos
rutasHttp.get('/Empleados', empleadoRepo.listaEmpleados);

//Ruta Put
rutasHttp.put('/Empleados/:id', empleadoRepo.editarEmpleado);

//Get home
rutasHttp.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

module.exports = rutasHttp;