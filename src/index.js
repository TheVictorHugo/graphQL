import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID!
      name: String!
      age: Int!
      average: Float!
      married: Boolean!
      arrayString: [String!]!
    }
  `,
  resolvers: {
    Query: {
      id: () => 'dsa54d65asd46asdd',
      name: () => 'Victor Hugo',
      age: () => 31,
      average: () => 50.55,
      married: () => false,
      arrayString: () => ['A', 'B'],
    },
  },
});

server.listen(4004).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
