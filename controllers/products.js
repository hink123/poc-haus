const Product = require('../models/product');

module.exports = {
    getAll,
    getOne,
    createOne,
    updateOne,
    removeOne
}

function getAll(req, res){
    Product.find({}, (err, products) => {
        if (err) res.status(401).json(err);
        res.json({products});
    });
}

function getOne(req, res){
    Product.find({_id: req.params.id}, (err, product) => {
        if (err) res.status(401).json(err);
        res.json({product});
    });
}

function createOne(req, res){
    let newProduct = new Product(req.body);
    newProduct.save((err, product) => {
        if (err) res.status(401).json(err);
        res.json({product})
    });
}

function updateOne(req, res){
    let newProduct = new Product(req.body);
    Product.findByIdAndUpdate(req.params.id, newProduct, (err, updatedProduct) => {
        if (err) res.status(401).json(err);
        res.json({updatedProduct});
    })
}

function removeOne(req, res){
    Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
        if(err) res.status(401).json(err);
        res.json({deletedProduct});
    })
}
