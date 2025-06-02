import { Router } from "express";
import {
    getAllproductos,
    getProductosById,
    postProducto,
    putProducto,
    deleteProducto
} from '../controllers/productos.controller.js'
const Productos = Router();

Productos.get('/', getAllproductos );

Productos.get('/:id', getProductosById );

Productos.put('/:id', putProducto );

Productos.post('/', postProducto );

Productos.delete('/:id', deleteProducto );


export default Productos;