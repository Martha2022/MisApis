import Productos from '../models/productos.model.js';
import mongoose from 'mongoose';
import express from 'express';

export const getAllproductos = async (req, res) => {
console.log('obtiene todos los productos');
try {
const productos = await Productos.find({}, {_v:0});
    if(productos.length === 0){
    return res.status(404).json({
    msg: 'No se encontraron datos'
    })
}
    return res.status(200).json({
        productos
    })

}catch (error) {
    return res.status(500).json({
    msg: 'Error al obtener los productos'
    })
}

}


export const getProductosById = async (req, res) => {
console.log('PRODUCTOS POR ID');
const id = req.params.id;
try{
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
        msg: 'ID no valido'
        });
    }
    const producto = await Productos.findById(id);
    if(!producto){
        return res.status(404).json({
        msg: 'Producto no encontrado'
        });
    }
    return res.status(200).json({
    producto
    });
}catch(error){
    return res.status(500).json({
        msg: 'Error al obtener el dato'
    })
}

}

export const postProducto = async (req, res) => {
console.log('POST PRODUCTO');
const body = req.body;
const producto = new Productos(body);
try {
    const validationError = producto.validateSync();
    if(validationError){
        const errorMessages = Object.values(validationError.errors).map(error => error.message);
        return res.status(400).json({
            error: errorMessages
        });
    }
    await producto.save();
    return res.status(201).json({
        producto
    });
} catch (error) {
    return res.status(500).json({
    msg: 'Error al guardar el dato'

    });
}

}

export const putProducto = async (req, res) => {
const id = req.params.id;
const body = req.body;
try{
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
        msg: 'ID no válido'
        });
    }
    const producto = await Productos. findByIdAndUpdate(id,body, {new:true, runValidators: true});
    if(!producto){
        return res.status(404).json({
        msg: 'Producto no encontrado'
        });
    }
    return res.status(200).json({
    producto
    });
}catch (error) {
    return res.status(500).json({
    msg: 'Error al actualizar el Producto'
    });
}

}


export const deleteProducto = async (req, res) => {
console.log('DELETE PRODUCTO');
const id = req.params.id;
try {
    if(!mongoose.Types.ObjectId.isValid(id)){ 
        return res.status(400).json({
        msg: 'ID no válido'
        });
    }
    const producto = await Productos.findByIdAndDelete(id);
    if(!producto){
        return res.status(404).json({
        msg: 'Producto no encontrado'
        })
    }    
    return res.status(200).json({
    msg: 'Producto eliminado',
    dato
    });

} catch (error) {
    return res.status(500).json({
    msg: 'Error al eliminar el Producto'
    });
}
}