const User = require("../models/user.model");

module.exports.create = (req,res) => {
    User.create(req.body)
         .then(newUser => res.json(newUser))
         .catch(err => res.json(err));
 };
 module.exports.getAll = (req,res) => {
     User.find()
         .then(allUsers => res.json(allUsers))
         .catch(err => res.json(err));
 };
 module.exports.getOne = (req,res) => {
     User.findById(req.params.id)
         .then(user => res.json(user))
         .catch(err => res.json(err));
 };
 module.exports.update = (req,res) => {
     User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
         .then(user => res.json(user))
         .catch(err => res.json(err));
 };
 module.exports.delete = (req,res) => {
     User.findByIdAndRemove(req.params.id)
         .then(message => res.json(message))
         .catch(err => res.json(err));
 };
