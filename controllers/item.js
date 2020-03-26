const { getUserId } = require('../utils/user');

const getAllItems = async (parent, { limit, offset }, { db }, info) => {
  const { count, rows } = await db.Item.findAndCountAll({ limit, offset });
  return {
    count,
    items: rows
  };
};

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
  const userID = getUserId(context);

  const item = await db.Item.findByPk(id, { where: { userID } });
  if (!item) throw new Error('Item Not Found');
  item.destroy();
  return true;
};

module.exports = {
  getAllItems,
  getCreatedBy,
  createItem,
  deleteItem
};
