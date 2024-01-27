const db = require('../models')
const Product = db.products

exports.findAll = (req, res) => {
    Product.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured'
            })
        })
}

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: 'The name is mandatory'
        })
        return;
    }
    Product.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not insert the data'
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Product.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured'
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id
    Product.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'product updated'
                })
            } else {
                res.send({
                    message: 'Product not found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured'
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Product.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'product deleted'
                })
            } else {
                res.send({
                    message: 'Product not found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured'
            })
        })
}