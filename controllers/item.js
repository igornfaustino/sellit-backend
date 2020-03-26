const { getUserId } = require('../utils/user');

const getAllItems = (parent, args, { db }, info) => db.Item.findAll();

const getCreatedBy = async (parent, args, context, info) => parent.getUser();

const createItem = (
  parent,
  { name, description, value },
  { db, ...context },
  info
) => {
  const userId = getUserId(context);
  return db.Item.create({ name, description, value, userId });
};

const deleteItem = async (parent, { id }, { db, ...context }, info) => {
  getUserId(context);

  const item = await db.Item.findByPk(id);
  item.destroy();
  return true;
};

module.exports = {
  getAllItems,
  getCreatedBy,
  createItem,
  deleteItem
};
