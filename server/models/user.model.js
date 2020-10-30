const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Your first name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Your last name is required"]
    },
    email: {
        type: String,
        required: [true, "Your email is required"]
    },
    userName: {
        type: String,
        required: [true, "A username is required"]
    },
    password: {
        type: String,
        required: [true, "A password is required"]
    },
    confirm: {
        type: String,
        required: [true, "Please confirm password"]
    }
}, {timestamps: true,});

const User = mongoose.model("User", UserSchema);

module.exports = User;