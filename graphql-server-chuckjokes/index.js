const { ApolloServer, gql } = require('apollo-server');
const axios = require("axios");

const baseURL = `https://api.chucknorris.io/jokes/`;

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Category {
    name: String!
  }

  type Joke {
    value: String!
    icon_url: String!
    categories: [String]
  }

  type Query {
		categories : [Category],
		joke(category: String) : Joke
  }
`;


// Resolvers define the technique for fetching the types defined in the schema. 
const resolvers = {
  Query: {
    categories: async () => {
          const result = await axios.get(`${baseURL}categories`);
          const categories = result.data;
          return categories.map((category) => {
              return {
                  name: category
              };
          })
      },

      joke: async (parent, params) => {
          const category = params.category;
          const result = await axios.get(`${baseURL}random?category=${category}`);
          const joke = result.data;
          return {
              value: joke.value,
              icon_url: joke.icon_url,
              categories: joke.categories
          };
      },
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ 
  typeDefs, 
  resolvers 
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
