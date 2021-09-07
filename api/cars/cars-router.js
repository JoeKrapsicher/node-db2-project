// DO YOUR MAGIC
const express = require('express');

// import models
const Cars = reuire('./cars-model');

const Middleware = require('./cars-middleware')

const router = express.Router();

router.get('/api/cars', (req , res) => {
    Cars.get(req.query)
        .then(cars => {
            console.log("cars is getting fired!")
            res.status(200).json(cars);
        })
        .catch(err => {
            res.status(404).json({message: `${err}`})
        })
})

router.get('/api/cars/:id', (req, res) => {
    Cars.get(req.params.id)
        .then(car => {
            if(car) {
                res.status(200).json(car);
            } else {
                res.status(404).json({message: "Car not found"});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: "Error retriving the car"
            })
        })
})

router.post('/api/cars', (req, res) => {
    Cars.create(req.body)
        .then(car => {
            res.status(201).json(car);
        })
        .catch(err => {
            res.status(500).json({
                message: "Error adding Car"
            })
        })
})