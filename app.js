var express = require('express');
var graphqlHTTP = require('express-graphql');
var port = 4000;
/**
 * node does't support ES6 import yet. User require as a workaround
 */
var {schema,root} = require("./schema");
var app = express();

app.use('/graphql',graphqlHTTP({
  schema,
  rootValue:root,
  graphiql:true,
}));

app.listen(port,()=>{
  console.log("Running a Graphql API Server at localhost:4000/graphql")
});