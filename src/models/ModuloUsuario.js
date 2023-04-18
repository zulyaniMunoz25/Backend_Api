const { Schema, model } = require("mongoose")

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required:[ true,"nombre de usuario requerido"]
    },
    email:{
        type: String ,  
        required: [true," email requerido"],
        unique: true
    },
    estado:{
        type: Boolean,
        default: true,
        required: true
    },
    fechaCreacion:{
        type: Date,
        default: new Date(),
        required: false
    },
    fechaActualizacion:{
      type: Date,
      default: new Date(),
      required: false
    }

})
module.exports = model('Usuario', UsuarioSchema)

    


