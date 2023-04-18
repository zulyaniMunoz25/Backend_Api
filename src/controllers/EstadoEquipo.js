const EstadoEquipo = require('../models/ModuloEstadoEquipo')
const{request,response} =require('express')

const createEstadoEquipo = async (req = request, res = response )=>{
    try{
        const nombre = (req.body.nombre)
        ? req.body.nombre.toUpperCase() : '';
        const EstadoEquipoDB=await EstadoEquipo.findOne({ nombre})
        if(EstadoEquipoDB){
            return res.status(400).json({msg: 'Estado ya existe'})
    }
    const datos =  {nombre}
    const estado = new EstadoEquipo(datos)
    await estado.save()
    res.status(201).json(estado)

    } catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}



const getEstadoEquipo= async (req = request, res = response)=>{
    try{
        if (req.body.estado || req.body.estado == false){
            const estado = req.body.estado
            const query = {estado: estado}
            const estadoEquipo = await EstadoEquipo.find(query)
            return res.json(estadoEquipo)

        } else{
            const EstadoEquipoDB =await EstadoEquipo.find()
            return res.json(EstadoEquipoDB)
        }
    
    } catch(e){
        console.log(e)
      return res.status(500).json({msg: e})
    }
}


const getEstadoEquipoByID = async (req = request, res =response) => {
    try{
        const id =req.params.id
        const query = {_id:id}
        const EstadoEquipoDB = await EstadoEquipo.findOne(query)
        return res.json(EstadoEquipoDB)

    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
}
    
    const updateEstadoEquipo = async (req = request, res = response) => {
        try{
            const id = req.params.id
            const data = req.body 
            data.nombre = req.body.nombre.toUpperCase()
            data.fechaActualizacion = new Date()
            const estadoEquipo = await EstadoEquipo.findByIdAndUpdate(id, data,{new: true})
            return res.json(estadoEquipo)

        }catch(e){
            console.log(e)
            return res.status(500).json({msg: e})
        }
    }   


const deleteEstadoEquipo = async (req = request, res = response)=> {
    try{
        const id = req.params.id
        const estadoEquipoDB = await EstadoEquipo.findById(id)
        if(!estadoEquipoDB){
            return res.status(404).json({msg: 'No existe el EstadoEquipo'})
        }   
        await EstadoEquipo.findByIdAndDelete(id)
        return res.status(200).json({msg: 'eliminado correcamente' ,id})

    } catch(e){
            console.log(e)
            return res.status(500).json({msg: e})
    }
}

module.exports = {
    createEstadoEquipo,
    getEstadoEquipo,
    getEstadoEquipoByID,
    updateEstadoEquipo,
    deleteEstadoEquipo
}


