import mongoose from "mongoose";

const carouselSchema = new mongoose.Schema({
    img: {
        type: [String],
        required: true
    },
    category: {
        type: String,
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courses'
    }
})

export const Carousel = mongoose.model("Carousel", carouselSchema);