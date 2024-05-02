
const express = require('express');
const conexionMongo = require('mongoose');

class applicacionAPI{

    constructor(){
        this.express = express();
        require('dotenv').config(); //variables de entorno inicializadas

        //Las siguientes funciones están declaradas abajo, aquí se inicializan
        this.baseDeDatos();
        this.middlewares();
        this.routes();

        this.express.listen(10000, () =>
            console.log("Api con mongo funcionando en el puerto 10.000"));

    }

    async baseDeDatos(){
        await conexionMongo.connect(process.env.URL_BD_MONGO);
    }

    middlewares(){
        this.express.use(express.json());
    }

    routes(){
        this.express.use(require("./rutas"))
    }
}
module.exports = new applicacionAPI().express;