const jwt = require('jsonwebtoken');
const { APP_SECRET } = require('../config/private-config.json');

function getUserId(context) {
  const Authorization = context.req.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, APP_SECRET);
    return userId;
  }

  throw new Error('Not authenticated');
}

module.exports = {
  getUserId
};
