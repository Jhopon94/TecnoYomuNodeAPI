const conexionMongo = require('mongoose');

//Es como la entity de spring
const esquemaEmpleado = new conexionMongo.Schema({
    id:{
        type:Number,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    cargo:{
        type:String,
        required:true
    },
    celular:{
        type:String,
        required:true
    },
    correo:{
        type:String,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:true
    },
    fechaRegistro:{
        type:Date,
        default:Date.now
    },
    disponibleParaUsuario:{
        type:Boolean,
        required:true
    },
    activo:{
        type:Boolean,
        required:true
    }
});

//Ojo, el 'empleado' es como mongoose detecta la colección en la base de datos
module.exports = conexionMongo.model('empleados', esquemaEmpleado);

