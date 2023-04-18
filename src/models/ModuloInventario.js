const{ Schema, model } = require("mongoose");

const InventarioSchema = Schema({
    serial:{
        type: String,
        required: [true,"requerido"],
        unique:  [true,"equipo en uso"]
    },
        modelo:{
        type: String,
        required: [true,"modelo requerido"]
    },
    descripcion:{
        type: String
    },
    fotos:{
        type: String
    },
    color:{
        type:String
    },
    fechaCompra:{
        type: Date,
        default: new Date()
    },
    precio:{
        type: Number
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    marca:{
        type: Schema.Types.ObjectId,
        ref:'MarcaEquipo',
        required: true
    },
    estado:{
        type: Schema.Types.ObjectId,
        ref:'EstadoEquipo',
    },

    tipoEquipo: {
        type: Schema.Types.ObjectId,
        ref: 'TipoEquipo',
        required: true
    }
})

module.expots = model('Inventatrio', InventarioSchema)