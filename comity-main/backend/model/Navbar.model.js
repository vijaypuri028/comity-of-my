import mongoose from "mongoose";

const navbarSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    path: {
        type : String,
    },
    title: {
        type: String,
        required: true
    },
    showThis: {
        type: Boolean,
        default: true
    }
})

export const Navbar = mongoose.model("Navbar", navbarSchema)