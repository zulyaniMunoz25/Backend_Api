const Invetanrio = require('../models/ModuloInventario')
const { request,response} = require('express')
const Usuario = require('../models/ModuloUsuario')
const Marca = require('../models/ModuloMarcas')


const getInventario = async (req, res) => {
    try{
        const Inventario = await Invetanrio.find()
        .populate({
            path:'ModuloUsuario',
            match: { estado: true}
        })
       .populate ({
        path: 'ModuloMarca',
        match: { estado: true}
        })
       .populate ({
        path: 'ModuloEstadoEquipo'
        })
      .populate ({
       path:'ModuloTipoEquipo'
        })
        res.json(Inventario)

    }catch(e){
    console.log(e)
    return res.estatus(500).json({ error: 'Error:' + e })
    }
} 


const createInventario = async (req = request, res = response) => {
    try{

        const data = req.body;
        const { Usuario, marca } = data;
        const usuarioDB = await Usuario.findOne({
            _id: Usuario._id, estado: true   
        })

        if(!usuarioDB){
            return res.status(400).json({ msj:'usuario no existe'})
        }

        const marcaDB = await Marca.findOne({
            _id: marca._id, estado: true
        })

        if(!marcaDB){
            return res.status(400).json({
                msj:'marca no existe'
            })
        }
        const inventario = new Invetanrio(data)
        await inventario.save()
            res.status(201).json(inventario)
        }catch(e){
            console.log(e)
            return  res.status(500).json({msj:'Error' + e})
        }
    }

 
    const getInventarioByID = async (req =request,res = response) => {

    try{
        const {id} = req.params;
        const InventarioDB = await Inventario.findById(id)
        .populate({
            path: 'ModuloUsuario',
            match:{estado: true}
         })
         res.json(InventarioDB)

    }catch(e){
     console.log(e)
     return res.status(500).json({msj: 'Error'})
    }
 }


const updateInventario = async (req = request, res = response) => {

    try{
        const { id } = req.params
        const data = req.body
        const inventario = await inventario.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(inventario)
    } catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'})
    }
}


const deleteInventario = async (req = request, res = response) => {

    try{
        const { id } = req.params
        await Invetanrio.findByIdAndUplate(id)
        return res.status(200).json({msj:'Eliminado correctamente', id })
    
    }catch(e){
        console.log(e)
        return res.status(500).json({msg:'Eliminado correctamente',id})
    }
}

module.exports = {
    getInventario,
    createInventario,
    getInventarioByID,
    updateInventario,
    deleteInventario
}   