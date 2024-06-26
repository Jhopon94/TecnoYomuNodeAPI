const empleado = require('../clases/empleado');

class empleadoControlador{

    async crearNuevo(req, res){
        try {
            const datos = await empleado.create(req.body)
            return res.json(datos);
        } catch (error) {
            res.status(500).send({
                message:
                    error.message || "Error de datos al registrar un nuevo empleado"
            });
        }
    }

    async listaEmpleados(req, res){

        const nombre = req.query.nombre;
        var condicion = nombre ? { nombre: { $regex: new RegExp(nombre), $options: "i" } } : {};

        try {
            const datos = await empleado.find(condicion);
            return res.json(datos);
        } catch (error) {
            res.status(500).send({
                message:
                    error.message || "Error al realizar búsqueda de empleados!"
            });
        }
    }

    async editarEmpleado(req, res){

        //Si se envía cuerpo vacío o erróneo
        if(!req.body){
            {
                return res.status(400).send({
                    message: "Por favor, enviar los datos para poder editar!"
                });
            }
        }

        const id = req.params.id; //recoger id

        try {
            const datos = await empleado.findByIdAndUpdate(id, req.body, {useFindAndModify:false});
            //Si no se obtuvieron datos pr la modificación
            if(!datos){
                res.status(404).send({
                    message: "No fue posible actualizar el empleado con id =${id}"
                });
            }else{
                res.send({message: "Empleado actualizado correctamente!"});
            }
        } catch (error) {
            res.status(500).send({
                message: "Error al actualizar el empleado con id" + id
            });
        }
    }

    async encontrarEmpleadoPorCedula(id){
        try {
            const objetoEmpleado = await empleado.findOne({id: id}).exec();
            console.log("el objeto encontrado es: " + objetoEmpleado);
            if(objetoEmpleado === null){
                console.log("noExisteEmpleado");
                return "noExisteEmpleado";
            }else{
                console.log("existe");
                return "existe";
            }
        } catch (error) {
            console.log("errorConexion");
            return "errorConexion";
        }
    }
}
module.exports = new empleadoControlador();





