const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});

app.get('/', (req, res) => {
  res.send('<h1>Hello, Neevor!</h1>');
});
