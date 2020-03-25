module.exports = {
  User: {
    items: (parent, args, context, info) => parent.getItems()
  },
  Item: {
    user: (parent, args, context, info) => parent.getUser()
  },
  Query: {
    items: (parent, args, { db }, info) => db.Items.findAll(),
    user: (parent, { id }, { db }, info) => db.User.findByPk(id)
  },
  Mutation: {
    createUser: (parent, { name, email, password, whatsapp }, { db }, info) =>
      db.User.create({ name, email, password, whatsapp }),
    createItem: (parent, { name, description, value, userId }, { db }, info) =>
      db.Item.create({ name, description, value, userId })
  }
};
