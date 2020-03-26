module.exports = `
  type AuthPayload {
    token: String
    user: User
  }
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
    description: String
    value: Float!
    userId: ID!
    user: User!
  }
  type Query {
    items: [Item!]!
    user: User!
  }
  type Mutation {
    createItem(name: String!, description:String!, value:Float!): Item!
    deleteItem(id: ID!): Boolean!,
    singup(name: String!, email: String!, whatsapp: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }
`;
