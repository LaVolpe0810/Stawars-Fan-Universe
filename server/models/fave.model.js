const mongoose = require("mongoose");

const FaveSchema = new mongoose.Schema({
    movie: {
        type: String,
        required: [true, "A movie title is required"]
    },
    color: {
        type: String,
        required: [true, "A lightsaber color is required"],
        minlength: [3, "Must be at least 3 characters"]
    },
    qutoe: {
        type: String,
        required: [true, "A quote is required"]
    },
    character: {
        type: String,
        required: [true, "A character is required"]
    },
    ship: {
        type: String,
        required: [true, "A ship is required"]
    }
}, {timestamps: true});

const Fave = mongoose.model("Fave", FaveSchema);

module.exports = Fave;