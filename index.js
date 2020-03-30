const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const db = require('./models');
const cors = require('cors');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: request => ({ ...request, db })
});

const app = express();
app.use(cors());
server.applyMiddleware({ app, cors: false });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
