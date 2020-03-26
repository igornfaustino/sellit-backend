const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { APP_SECRET } = require('../config/private-config.json');
const { getUserId } = require('../utils/user');

const getUser = (parent, args, { db, ...context }, info) => {
  const id = getUserId(context);
  return db.User.findByPk(id);
};

const singup = async (
  parent,
  { name, email, password, whatsapp },
  { db },
  info
) => {
  const cryptedPassword = await bcrypt.hash(password, 10);

  const user = await db.User.create({
    name,
    email,
    password: cryptedPassword,
    whatsapp
  });

  console.log(user);

  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  return {
    token,
    user
  };
};

const login = async (parent, { email, password }, { db }, info) => {
  const user = await db.User.findOne({ where: { email: email } });
  if (!user) {
    throw new Error('No such user found');
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user
  };
};

const getUserItems = (parent, args, context, info) => parent.getItems();

module.exports = { singup, getUserItems, login, getUser };
