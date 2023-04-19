const express = require('express');
const app = express();
const cors = require('cors')
const fileUpload = require('express-fileupload')

const TipoEquipo = require('./routes/TipoEquipo')
const EstadoEquipo = require('./routes/EstadoEquipo')
const MarcaEquipo = require('./routes/MarcaEquipo')
const Usuario = require('./routes/Usuarios')
const Inventario = require('./routes/Inventario')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    TempFilesDir: '/tmp/'
}))
app.use(cors({

}))


app.use('/api/TipoEquipo', TipoEquipo)
app.use('/api/EstadoEquipo', EstadoEquipo)
app.use('/api/MarcaEquipo', MarcaEquipo)
app.use('/api/Usuarios',Usuario)
app.use('/api/Inventarios', Inventario)

app.get("*", (req,res) =>{
    return res.status(404).json({
     msj: 'pagina no encontrada'   
    });
});

module.exports = app;


