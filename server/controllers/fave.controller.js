const Fave = require("../models/fave.model");

module.exports.create = (req,res) => {
    Fave.create(req.body)
         .then(newFave => res.json(newFave))
         .catch(err => res.json(err));
 };
 module.exports.getAll = (req,res) => {
     Fave.find()
         .then(allFaves => res.json(allFaves))
         .catch(err => res.json(err));
 };
 module.exports.getOne = (req,res) => {
     Fave.findById(req.params.id)
         .then(fave => res.json(fave))
         .catch(err => res.json(err));
 };
 module.exports.update = (req,res) => {
     Fave.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
         .then(fave => res.json(fave))
         .catch(err => res.json(err));
 };
 module.exports.delete = (req,res) => {
     Fave.findByIdAndRemove(req.params.id)
         .then(message => res.json(message))
         .catch(err => res.json(err));
 };