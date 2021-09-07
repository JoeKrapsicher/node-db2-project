const db = require('../../data/db-config')

module.exports = {
  getAll, getById, create
}

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars')
    .where({ id })
    .first();
}

const create = (cars) => {
  return db('cars')
    .insert(cars)
    .then(ids => {
      return getById(ids[0]);
    })
}
