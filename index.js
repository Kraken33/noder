var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphiql = require('graphql');

var { find } = require('./serv/controllers/controller');
var { schema } = require('./serv/graphql/schema');

var app = express();

var port = process.env.PORT || 8080;



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
  app.listen(port, () => {
    console.log('Running a GraphQL API server at localhost:'+port+'/graphql');
  });
});