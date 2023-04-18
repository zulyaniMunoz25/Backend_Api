const Usuario = require('../models/ModuloUsuario')
const {request, response} = require('express')

const createUsuario = async (req = request, res = response ) => {
    try{
        const data = req.body 
        const email = data.email
        const usuarioDB = await Usuario.findOne({ email })
        if(usuarioDB){
           return res.status(400).json({msg: "Estado ya existe"})
        }
        const usuario =  new Usuario(data)
        await usuario.save()
        return res.status(201).json(usuario)

    }catch(e) {
      console. log(e)
      return res.status(500).json({msg: e})
    }
}



const getUsuario = async (req = request,res = response) => {
    try {
        if (req.body.estado ||req.body.estado == false){
            const estado = req.body.estado
            const  query = {estado: estado}
            const usuarioDB = await Usuario.find(query)
            return res.json(usuarioDB)

        } else {
            const usuarioDB = await Usuario.find()
            return res.json(usuarioDB)
        }
    
    } catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }

}


    const getUsuarioByID = async (req = request, res =response) => {
       try  {
            const id =req.params.id
            const filter = {_id: id}
            const usuarioDB = await Usuario.findOne(filter)
            return res.json(usuarioDB)

        } catch(e){

            console.log(e)
             return res.status(500).json({msg: e})
        }

 }
    
const updateUsuario = async (req = request,res = response) => {
    try{
        const id = req.params.id
        const data = req.body 
        data.fechaActualizacion = new Date()
        console.log(data)
        const usuario = await Usuario.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(usuario)
    } catch(e){
        console.log(e)
        return res.status(500).json({msj: e})
    }
}   


const deleteUsuario = async (req = request, res = response)=> {
    try{
        const id = req.params.id
        const usuarioBD = await Usuario.findById(id)
        if(!usuarioBD){
            return res.status(404).send({msg: "No existe el EstadoEquipo"})
        } else {
            await Usuario.findByIdAndDelete(id)
            console.log(id)
            return res.status(200).send({msg: "eliminado correcamente" ,id})
        }

    } catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}

module.exports = {
    createUsuario,
    getUsuario,
    getUsuarioByID,
    updateUsuario,
    deleteUsuario,
}


