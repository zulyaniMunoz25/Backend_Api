const app = require('./app')
const{mongoConn} = require('./database/configuration')
const dotenv = require('dotenv').config()

app.set('port', process.env.PORT || 4000)

const conn = mongoConn()

app.listen(app.get('port'), ()=> {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});