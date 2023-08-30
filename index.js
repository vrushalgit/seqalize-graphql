const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
require("dotenv").config();

const models = require("./models");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const  getAllUsers  = require("./controller/user.controller");

const PORT = process.env.SERVER_PORT || 3008;
const app = express();

var server = null;

async function startApollo() {
  server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: { models },
  });

  await server.start();
  server.applyMiddleware({ app, cors: true });
}

app.get("/users", getAllUsers);

startApollo();
app.listen(PORT, () => {
  console.log(` Listening on http://localhost:${PORT}/graphql `);
});
