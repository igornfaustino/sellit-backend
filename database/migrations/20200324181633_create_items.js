exports.up = function(knex) {
  return knex.schema.createTable('items', function(table) {
    table.increments('id');

    table.string('name').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.integer('user_id');

    table
      .foreign('user_id')
      .references('id')
      .inTable('users');
  });
};

exports.down = function(knex) {
  return knex.dropTabble('items');
};
