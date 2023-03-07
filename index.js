const express = require('express');
const cors = require('cors');
const path = require('path');
const { dbConnection } = require('./db/config');
require('dotenv').config();

//console.log( process.env );

//Crear el servidor/apicacion de expres

const app = express();

///Conexion a la base de datos
dbConnection();


//directorio publico
app.use(express.static('public'));



//cores
app.use( cors());

//Lectura y parseo del body 
app.use(express.json());



//rutas
app.use('/api/auth', require('./routes/auth'))


//manejar todas las posibles rutas
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
})



app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});



