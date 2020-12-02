// Apollo Server Instance
const { ApolloServer, PubSub } = require("apollo-server");
// Mongoose Instance
const mongoose = require("mongoose");

// Apollo PubSub
const pubsub = new PubSub();

// GraphQL components
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

// mongoDB cluster configurations
const { MONGODB } = require("./config.js");

// Server Instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

// DATABASE, APOLLO SERVER INITIALIZATION
mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongoDB Connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`server running at ${res.url}`);
  });
