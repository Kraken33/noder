var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphiql = require('graphql');

var { find } = require('./controllers/controller');
var { schema } = require('./graphql/schema');

var app = express();



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.options('/', function(req, res) {
  console.log();
})

// Get data from model
find((doc) => {
  app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: doc,
    // graphiql: true,
  }));
  app.listen(4000, () => {
    console.log('Running a GraphQL API server at localhost:4000/graphql');
  });
});