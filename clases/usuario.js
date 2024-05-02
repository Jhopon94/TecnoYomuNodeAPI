const conexionMongo = require('mongoose');

//Es como la entity de spring
const esquemaUsuario = new conexionMongo.Schema({
    idEmpleado:{
        type:Number,
        required:true
    },
    nombreUsuario:{
        type:String,
        required:true
    },
    contrasenia:{
        type:String,
        required:true
    },
    rol:{
        type:String,
        required:true
    },
    fechaRegistro:{
        type:Date,
        default:Date.now
    }
});

//Ojo, el 'usuarios' es como mongoose detecta la colección en la base de datos
module.exports = conexionMongo.model('usuarios', esquemaUsuario);
