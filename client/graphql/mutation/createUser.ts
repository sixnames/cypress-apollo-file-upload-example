import gql from 'graphql-tag';

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      success
      message
      user {
        id
        name
        assets {
          data {
            format
            index
            publicId
            url
            width
            height
          }
        }
      }
    }
  }
`;
