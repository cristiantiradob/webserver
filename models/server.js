const express = require('express')
var cors = require('cors')

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        
        //Cors
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio public
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api/usuarios', require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en http://localhost:',this.port);
        })
    }
}

module.exports = Server;