import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 100
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        max: 500
    },
    image: {
        type: String,
        max: 100
    },
    stock: {
        type: Number,
        required: true,
        max: 1000
    }
})

export const ProductosModel = mongoose.model("productos", Schema);