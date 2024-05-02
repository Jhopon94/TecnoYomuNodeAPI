const usuario = require('../clases/usuario');

class usuarioControlador{

    async crearNuevo(req, res){
        try {
            const datos = await usuario.create(req.body)
            return res.json(datos);
        } catch (error) {
            res.status(500).send({
                message:
                    error.message || "Error de datos al registrar un nuevo usuario"
            });
        }
    }

    async listaUsuarios(req, res){

        const nombre = req.query.nombreUsuario;
        var condicion = nombre ? { nombreUsuario: { $regex: new RegExp(nombre), $options: "i" } } : {};

        try {
            const datos = await usuario.find(condicion);
            return res.json(datos);
        } catch (error) {
            res.status(500).send({
                message:
                    error.message || "Error al realizar búsqueda de Usuarios!"
            });
        }
    }

    async editarUsuario(req, res){

        //Si se envía cuerpo vacío o erróneo
        if(!req.body){
            {
                return res.status(400).send({
                    message: "Por favor, enviar los datos para poder editar!"
                });
            }
        }

        const id = req.params.id; //recoger idEmpleado

        try {
            const datos = await usuario.findByIdAndUpdate(id, req.body, {useFindAndModify:false});
            //Si no se obtuvieron datos pr la modificación
            if(!datos){
                res.status(404).send({
                    message: "No fue posible actualizar el Usuario con id =${id}"
                });
            }else{
                res.send({message: "Usuario actualizado correctamente!"});
            }
        } catch (error) {
            res.status(500).send({
                message: "Error al actualizar el Usuario"
            });
        }
    }

    async borrarUsuario(req, res){
        const id = req.params.id;

        try {
            const datos = await usuario.findByIdAndDelete(id);
            if(!datos){
                res.status(404).send({
                    message: "No fue posible eliminar el usuario!"
                });
            }else{
                res.send({
                    message: "Usuario eliminado correctamente!"
                });
            }
        } catch (error) {
            res.status(500).send({
                message: "Error al eliminar el usuario!"
            });
        }
    }
}
module.exports = new usuarioControlador();
