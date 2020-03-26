const { singup, getUserItems, login, getUser } = require('./controllers/users');
const {
  getAllItems,
  getCreatedBy,
  createItem,
  deleteItem
} = require('./controllers/item');

module.exports = {
  User: {
    items: getUserItems
  },
  Item: {
    user: getCreatedBy
  },
  Query: {
    items: getAllItems,
    user: getUser
  },
  Mutation: {
    singup,
    login,
    createItem,
    deleteItem
  }
};
