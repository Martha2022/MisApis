import mongoose from 'mongoose';

const productosSchema = new mongoose.Schema({
id:{
    type: Number,
    required: true
},
title:{
    type: String,
    required: true
},
price:{
    type: Number,
    required: true
},
description:{
    type: String,
    required: false
},
category:{
    type: String,
    required: true
},
image:{
    type: String,
    required: false
},
})

const Productos = mongoose.model("fakestore", productosSchema);

export default Productos;

