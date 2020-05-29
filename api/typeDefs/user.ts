import gql from 'graphql-tag';

const user = gql`
  extend type Query {
    me: User
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): CreateUserPayload!
  }

  input CreateUserInput {
    name: String!
    images: [Upload!]!
  }

  type CreateUserPayload {
    success: Boolean!
    message: String!
    user: User
  }

  type User {
    id: ID!
    itemId: Int!
    name: String!
    assets: [String!]!
    mainImage(width: Int, quality: Int): Image
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`;

export default user;
