module.exports = `
  type User {
    id: ID!
    name: String!
    email: String!
    whatsapp: String!
    items: [Item!]
  }
  type Item {
    id: ID!
    name: String
    description: String!
    value: Float!
    userId: ID!
    user: User!
  }
  type Query {
    items: [Item!]!
    user(id: ID!): User!
  }
  type Mutation {
    createUser(name: String!, email:String!, password:String!, whatsapp:String!): User!
    createItem(name: String!, description:String!, value:Float!, userId: ID!): Item!
    deleteItem(id: ID!): Int!
  }
`;
