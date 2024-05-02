const express = require("express");
const empleadoRepo = require("./repository/empleadoRepo");
const usuarioRepo = require("./repository/usuarioRepo");
const rutasHttp = express.Router();

//Ruta Post Empleado
rutasHttp.post('/Empleados', empleadoRepo.crearNuevo);

//Get todos Empleado
rutasHttp.get('/Empleados', empleadoRepo.listaEmpleados);

//Ruta Put Empleado
rutasHttp.put('/Empleados/:id', empleadoRepo.editarEmpleado);

//Ruta Post Usuario
rutasHttp.post('/Usuarios', usuarioRepo.crearNuevo);

//GET todos usuarios
rutasHttp.get('/Usuarios', usuarioRepo.listaUsuarios);

//Ruta PUT usuario
rutasHttp.put('/Usuarios/:id', usuarioRepo.editarUsuario);

//Ruta DELETE usuario
rutasHttp.delete('/Usuarios/:id', usuarioRepo.borrarUsuario);

//Get home
rutasHttp.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

module.exports = rutasHttp;