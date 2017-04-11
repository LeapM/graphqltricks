var port = 4000;
var addr = 'http://localhost:' + port + '/graphql';
var axiso = require('axios');

function logData(response) {
  console.log(response.data);
};

function logError(error) {
  console.log(error);
};
/**
 * simple query
 */
axiso.post(addr, {
    query: '{hello}'
  })
  .then(logData, logError);
/**
 * query with parameter support
 */
let side = 3;
let dice = 5;
axiso.post(addr, {
    query: `
    {
       rollDice(numDice:${dice} , numSide:${side} )
    }
    `
  })
  .then(logData, logError);
/**
 * query by passing sperate variables collection
 */
var query = `query RollDice($dice:Int!, $side: Int){
    rollDice(numDice: $dice, numSide: $side)
  }`;
var variables = {
  dice: 8,
  side: 8
};
axiso.post(addr, {
    query,
    variables
  })
  .then(logData, logError);

/**query object */
axiso.post(addr,{
  query:'{getDie(numSide:4){rollOnce}}'
})
.then(logData,logError);