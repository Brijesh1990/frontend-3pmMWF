# what is graphQL ?
1. GraphQL is a query language for APIs and a runtime for executing those queries with your existing data.

2. It was developed by Facebook in 2012 and released as an open-source project in 2015. 

3. GraphQL provides a more efficient, powerful, and flexible alternative to REST APIs.


4. With GraphQL, clients can request exactly the data they need, and nothing more. This allows for more efficient data retrieval and reduces the amount of data transferred over the network.

5. GraphQL also allows for real-time updates and subscriptions, making it ideal for applications that require real-time data.

6. GraphQL has a strong type system, which allows for better tooling and improved developer experience. It also supports introspection, which allows clients to query the schema for information about the available types and fields.

**how to install graphQL ?**

1. To install GraphQL, you can use npm (Node Package Manager) if you're working with a Node.js environment.

2. First, make sure you have Node.js installed on your machine. You can download it from the official website: https://nodejs.org/

3. Once you have Node.js installed, you can create a new project directory and navigate to it in your terminal.

4. Run the following command to initialize a new Node.js project:

```bash
npm init -y

```

5. Next, you can install the GraphQL package by running the following command:

```bash

npm install express express-graphql graphql --force

```

6. This command will install both the `express-graphql` and `graphql` packages, which are necessary for setting up a GraphQL server.

7. After the installation is complete, you can create a new file (e.g., `server.js`) and start building your GraphQL server using Express and the `express-graphql` middleware.


8. Here's a simple example of how to set up a basic GraphQL server:

```
javascript
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Define a schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Define a resolver
const root = {
  hello: () => 'Hello, world!'
};

// Create an Express app
const app = express();
// Set up the GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable GraphiQL interface
}));
// Start the server
app.listen(4000, () => {
    console.log('GraphQL server running at http://localhost:4000/graphql');
    });
    
```

9. In this example, we define a simple GraphQL schema with a single query called `hello`, which returns a string. We then set up an Express server and use the `express-graphql` middleware to handle GraphQL requests at the `/graphql` endpoint.
