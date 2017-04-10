/**
 * node does't support ES6 import yet. User require as a workaround
 */
var {graphql, GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      },
      testfield:{
        type:GraphQLString,
        resolve(){
          return "complete"
        }
      }
    }
  })
});

var query = '{ hello,testfield }';

graphql(schema, query).then(result => {

  // Prints
  // {
  //   data: { hello: "world" }
  // }
  console.log(result);

});