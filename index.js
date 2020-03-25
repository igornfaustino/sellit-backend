const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const db = require('./models');

const server = new ApolloServer({ typeDefs, resolvers, context: { db } });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
