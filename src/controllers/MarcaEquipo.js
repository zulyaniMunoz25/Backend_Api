const MarcaEquipo = require('../models/ModuloMarcas')
const {request, response} = require("express")
const Usuario  = require('../models/ModuloUsuario')


const createMarcaEquipo = async (req = request, res = response ) => {
    try{
        const nombre = req.body.nombre
        const marcaEquipoDB= await  MarcaEquipo.findOne({ nombre})
        if(marcaEquipoDB){
          return res.status(400).json({msg: "Marca ya existe"})
        }
        const datos =  req.body
        const marcaEquipo = new MarcaEquipo(datos)
        await marcaEquipo.save ()
        res.status(201).json(marcaEquipo)

    } catch(e) {
        console.log(e)
        return res.status(500).json({msg: e})
    } 
}

const getMarcaEquipo = async (req = request,res = response)=>{
    try{
        if (req.body.estado || req.body.estado == false){
            const estado = req.query.estado
            const query = { estado: estado}
            const marcaEquipoDB = await MarcaEquipo.find(query)
            return res.json(marcaEquipoDB)

        }else{
            const marcaEquipoDB = await MarcaEquipo.find()
            return res.json(marcaEquipoDB)
        } 
    
    } catch(e){
       console.log(e)
       return res.status(500).json({msg: e})
    }
}


const getMarcaEquipoByID = async (req = request, res =response) => {
    try{
        const id = req.params.id
        const marcaEquipoDB = await MarcaEquipo.findById(id)
        return res.json(marcaEquipoDB)

    } catch(e){
            console.log(e)
            return res.status(500).json({msg: e})
    }

}
    
const updateMarcaEquipo = async (req = request,res = response) => {
    try{
        const id = req.params.id
        const data = req.body 
        data.fechaActualizacion = new Date()
        const marcaEquipo = await MarcaEquipo.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(marcaEquipo)
    } catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}   


const deleteMarcaEquipo = async (req = request,res = response) => {
    try{
        const id = req.params.id
        const marcaEquipoDB = await MarcaEquipo.findById(id)
        if(!marcaEquipoDB){
            return res.status(404).json.son({msg: "No existe la marcaEquipo"})
        }   
        await MarcaEquipo.findByIdAnDelete(id)
        return res.status(200).json({msg: "eliminado correcamente" , id})
    } catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}

module.exports = {
    createMarcaEquipo,
    getMarcaEquipo,
    getMarcaEquipoByID,
    updateMarcaEquipo,
    deleteMarcaEquipo,
}


