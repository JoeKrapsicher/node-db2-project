exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()
      .primary()

    tbl.text('vin')
      .unique()
      .notNullable();

    tbl.text('make')
      .notNullable();

    tbl.text('model')
      .notNullable();

    tbl.integer('milage')
      .notNullable();
    
    tbl.text('title')
    tbl.text('transmission')

  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExist('cars')
};
