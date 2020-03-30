# Sell it Backend

A simple server made with express and `apollo-server-express` to learn how to implement and use a `GraphQL` service.

## API

The server runs on port `4000` by defalut and responds only graphQL requests over the path `/graphql`

The API follow this `GraphQL` schema

```
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
  type Items {
    count: Int!
    items: [Item!]!
  }
  type Query {
    items(offset: Int!, limit: Int!): Items!
    user: User!
  }
  type Mutation {
    createItem(name: String!, description:String!, value:Float!): Item!
    deleteItem(id: ID!): Boolean!,
    singup(name: String!, email: String!, whatsapp: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }
```

The API allow fetch data from `Users` and `Items`

### Authorization

Some Queries and mutations are protected, and a `Authorization` Header must be provide on the request. The `Authorization` is the `token` provided from the `singup` or `login` migration

#### Protected queries

- `user`

#### Protected migrations

- `createItem`
- `deleteItem`

## How to run

Before run the server, must create a file into the config folder called `private-config.json` and pass the `app secret` used to generate the `jwt`

```json
# config/private-config.json

{
  "APP_SECRET": "YOUR_APP_SECRET"
}

```

to run the application just type `npm start`
