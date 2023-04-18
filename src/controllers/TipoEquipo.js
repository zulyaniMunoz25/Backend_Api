const TipoEquipo = require('../models/ModuloTipoEquipo')
const{request, response} = require("express")

const createTipoEquipo = async (req = request, res = response )=>{
    try{
        const nombre = req.body.nombre
        const nombreTipoEquipo = await TipoEquipo.findOne({ nombre })

        if(nombreTipoEquipo){
            return res.status(400).json({msg: "TipoEquipo ya existe"})
        }
        const datos = req.body
        const tipoEquipo = new TipoEquipo(datos)
        await tipoEquipo.save()
        res.status(201).json(tipoEquipo)

    }catch(e) {
       console. log(e)
       return res.status(500).json({msg: e})
    }
}



const getTipoEquipo = async (req = request, res = response)=>{
    try{
        if (req.body.estado || req.body.estado == false) {
            const estado = req.body.estado
            const query = {estado: estado}
            const tipoEquipoDB = await TipoEquipo.find(query)
            return res.json(tipoEquipoDB)
        } else {
            const tipoEquipoDB = await TipoEquipo.find()
            return res.json(tipoEquipoDB)
        }
    
    } catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }

}

const getTipoEquipoByID = async (req = request, res =response) => {
    try{
        const id = req.params.id
        const query = {_id: id}
        const tipoEquipoDB = await TipoEquipo.findOne(query)
        return res.json(tipoEquipoDB)

    }catch(e){
        console.logI(e)
        return res.status(500).json({msg: e})
    }

}
    
const updateTipoEquipo = async (req = request,res = response) => {
    try{
        const data =req.body 
        const id = req.params.id
        
        if(!tipoEquipoDB){
            return res.json({msg: 'No existe el tipo de equipo'})
        }
        data.fechaActualizacion = new Date()
        const tipoEquipo = await TipoEquipo.findByIdAndUpdate(id, data, {new: true})
        return res.json(TipoEquipo)
    } catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}   


const deleteTipoEquipo = async (req = request, res = response)=> {
    try{
        const id = req.params.id
        const tipoEquipoDB = await TipoEquipo.findById(id)
        if(!tipoEquipoDB){
            return res.status(404).json({msg: "No existe el Tipo de Equipo"})
        }   
        await TipoEquipo.findByIdAndDelete(id)
        return res.status(200).json({msg: "eliminado correcamente" , id})
    } catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}

module.exports ={
    createTipoEquipo,
    getTipoEquipo,
    getTipoEquipoByID,
    updateTipoEquipo,
    deleteTipoEquipo,
}


