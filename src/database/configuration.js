const mongoose = require('mongoose')

const mongoConn = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('conectando correctamente con MongoDB')
    }catch(e){
        console.log('error de conexion', e);
        throw new Error('Error de conexion');
    }
}

module.exports = { mongoConn }