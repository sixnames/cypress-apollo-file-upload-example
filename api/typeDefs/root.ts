import gql from 'graphql-tag';

const root = gql`
  directive @auth on FIELD_DEFINITION
  directive @guest on FIELD_DEFINITION
  directive @role(requires: [RoleType]) on OBJECT | FIELD_DEFINITION

  enum SortDirection {
    asc
    desc
  }

  enum RoleType {
    ADMIN
    CUSTOMER
    MANAGER
    SUPER
    LOGISTICIAN
    CONTRACTOR
    DRIVER
    HELPER
    BOOKKEEPER
    WAREHOUSE
    STAGE
  }

  scalar DateTime

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }

  type Image {
    url: String!
    width: Int!
    alt: String!
    title: String!
  }

  type AssetItem {
    publicId: String!
    format: String!
    url: String!
    index: Int!
    width: Int!
    height: Int!
  }

  type Assets {
    data: [AssetItem!]!
  }

  type Query {
    _: String
  }

  type Mutation {
    _: String
  }

  type Subscription {
    _: String
  }
`;

export default root;
