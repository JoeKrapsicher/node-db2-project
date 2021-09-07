const Cars = require("./cars-model")
var vinValidator = require('vin-validator');


module.exports = {
  checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique
}

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params
  const car = Cars.getById(id)

  if (car) {
    req.car = car;
    res.status(200);
    next();
  } else {
    res.status(404).json({message: `Car with id ${id} not found`})
  }
   
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params;
  const field = Cars.getById(id)

  if (field) {
    req.field = field;
    res.status(200);
    next();
  } else {
    res.status(400).json({message: `${field} is missing`})
  }
  
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params;
  const vin = Cars.getById(id);

  if (vin) {
    req.vin = vin;
    res.status(200);
    next();
  } else {
    res.satus(400).json({message: `${vin} is invalid`})
  }
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params;
  const vin = Cars.getById(id);

  if (vin) {
    req.vin = vin;
    res.status(200);
    next();
  } else {
    res.status(400).json({message: `vin ${vin} already exists`})
  }
}
