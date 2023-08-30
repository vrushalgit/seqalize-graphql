const { gql } = require("apollo-server-express");

module.exports = gql`
  scalar DateTime
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    role: Role!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum Role {
    ADMIN
    USER
  }

  type Token {
    token: String!
  }

  extend type Mutation {
    signUp(
      name: String!
      username: String!
      email: String!
      password: String!
      role: String!
    ): Token
  }
`;
