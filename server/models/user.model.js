const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

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
        required: [true, "Your email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        } 
    },
    username: {
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

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set( value => this._confirmPassword = value);

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;