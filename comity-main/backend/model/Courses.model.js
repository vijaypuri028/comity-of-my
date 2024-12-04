// import { type } from "@testing-library/user-event/dist/type";
import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    tag: {
        type: String,
    },
    desc: [{
        type: String
    }],
    about: [{
        type: String
    }],
    link: {
        type: String
    },
    img: {
        type: String
    },
    slideImgs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carousel'
    }]
})

export const Courses = mongoose.model("courses", coursesSchema)