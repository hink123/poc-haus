const Business = require('../models/Business');

module.exports = {
    getAll,
    getOne,
    createOne,
    updateOne,
    removeOne
}

function getAll(req, res){
    Business.find({}, (err, Businesss) => {
        if (err) res.status(401).json(err);
        res.json({Businesss});
    });
}

function getOne(req, res){
    Business.find({_id: req.params.id}, (err, Business) => {
        if (err) res.status(401).json(err);
        res.json({Business});
    });
}

function createOne(req, res){
    let newBusiness = new Business(req.body);
    newBusiness.save((err, Business) => {
        if (err) res.status(401).json(err);
        res.json({Business})
    });
}

function updateOne(req, res){
    let newBusiness = new Business(req.body);
    Business.findByIdAndUpdate(req.params.id, newBusiness, (err, updatedBusiness) => {
        if (err) res.status(401).json(err);
        res.json({updatedBusiness});
    })
}

function removeOne(req, res){
    Business.findByIdAndDelete(req.params.id, (err, deletedBusiness) => {
        if(err) res.status(401).json(err);
        res.json({deletedBusiness});
    })
}
