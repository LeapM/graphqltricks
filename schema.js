Object.defineProperty(exports, "__esModule", {
  value: true
});

var {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  buildSchema
} = require('graphql');

var{RandomDie}=require('./model');
/**
 * two differernt way to create schema and resolve
 * created by buildSchema helper
 */
var querySchema = buildSchema(`
type RandomDie{
  numSide: Int!
  rollOnce: Int!
  roll(numRolls: Int): [Int]
}

type Query{
  hello: String
  rollDice(numDice: Int!, numSide: Int):[Int]
  getDie(numSide: Int!): RandomDie
}
`);
var root = {
  hello: () => {
    return 'World';
  },
  rollDice: ({
    numDice,
    numSide
  }) => {
    let output = [];
    for (let i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSide || 6)));
    }
    return output;
  },
  getDie:({numSide})=>{
    return new RandomDie(numSide);
  }
}

var query = '{ getDie(numSide:4){numSide}}';

graphql(querySchema, query, root).then((result) => {
  console.log("Schema created by buildSchema Helper")
  console.log(result);
});

/**
 * created by code
 */
var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});

graphql(schema, '{hello}').then(result => {
  console.log("schema created by code:")
  console.log(result);

});

exports.schema = querySchema;
exports.root = root;