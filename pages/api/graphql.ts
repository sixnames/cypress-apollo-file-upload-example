import { ApolloServer } from 'apollo-server-micro';
import typeDefs from '../../api/typeDefs';
import resolvers from '../../api/resolvers';
import { DateTimeResolver } from 'graphql-scalars';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: {
    ...resolvers,
    DateTime: DateTimeResolver,
  },
  context: ({ req, res, connection }) => (connection ? connection.context : { req, res }),
  playground:
    process.env.NODE_ENV === 'production'
      ? false
      : {
          settings: {
            'request.credentials': 'include',
          },
        },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
