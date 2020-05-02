/* eslint-disable @typescript-eslint/camelcase */
import { ApolloServer } from 'apollo-server-micro';
import typeDefs from '../../api/typeDefs';
import resolvers from '../../api/resolvers';
import { DateTimeResolver } from 'graphql-scalars';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

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
