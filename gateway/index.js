const {ApolloServer} = require('apollo-server')
const {ApolloGateway} = require('@apollo/gateway')
require('dotenv').config();
const server = new ApolloServer({
    gateway: new ApolloGateway({})
})

server
  .listen()
  .then(({url}) => {
    console.log(`🚀 Gateway ready at ${url}`);
  })
  .catch(err => {
    console.error(err);
  });