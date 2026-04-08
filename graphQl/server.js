const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Define a schema
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// // Define a resolver
// const root = {
//   hello: () => 'Hello, world!'
// };


// define a  schema with a query that accepts an argument
// const schema = buildSchema(`
//   type Query {
//     greet(name: String!): String
//   }
// `);

// Define a resolver for the greet query
// const root = {
//   greet: ({ name }) => `Hello, ${name}!`
// };


// Define a schema with a query that returns a list of items
// const schema = buildSchema(`
//   type Query {
//     items: [String]
//   }
// `);

// Define a resolver for the items query
// const root = {
//   items: () => ['electronics', 'clothing', 'books']
// };

// // Create an Express app
// const app = express();
// // Set up the GraphQL endpoint
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true, // Enable GraphiQL interface
// }));


// create a multiple items 
const users=[
    {id:1,name:'John',age:30,salary:50000,address:{street:'123 Main St',city:'New York'}},
    {id:2,name:'Jane',age:25,salary:60000,address:{street:'456 Elm St',city:'Los Angeles'}},
    {id:3,name:'Bob',age:35,salary:70000,address:{street:'789 Oak St',city:'Chicago'}}

]

// Define a resolver for the items query

const root = {
//   items: () => users.map(user => user.name)
  items: () => users.map(user => `${user.name} (${user.age} years old) lives at ${user.address.street}, ${user.address.city} and earns $${user.salary}`)
};


// define a schema with a query that returns a list of items
const schema = buildSchema(`
  type Address {
    street: String
    city: String
  }
    type User {
    id: ID
    name: String
    age: Int
    salary: Float
    address: Address
  }
  type Query {
    items: [String]
  }
`);


// Create an Express app
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable GraphiQL interface
}));

// Start the server
app.listen(4000, () => {
    console.log('GraphQL server running at http://localhost:4000/');
});
