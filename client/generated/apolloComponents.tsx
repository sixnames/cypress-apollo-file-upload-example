import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** Use JavaScript Date object for date/time fields. */
  DateTime: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};

export type AssetItem = {
   __typename?: 'AssetItem',
  publicId: Scalars['String'],
  format: Scalars['String'],
  url: Scalars['String'],
  index: Scalars['Int'],
  width: Scalars['Int'],
  height: Scalars['Int'],
};

export type Assets = {
   __typename?: 'Assets',
  data: Array<AssetItem>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CreateUserInput = {
  name: Scalars['String'],
  images: Array<Scalars['Upload']>,
};

export type CreateUserPayload = {
   __typename?: 'CreateUserPayload',
  success: Scalars['Boolean'],
  message: Scalars['String'],
  user?: Maybe<User>,
};


export type Image = {
   __typename?: 'Image',
  url: Scalars['String'],
  width: Scalars['Int'],
  alt: Scalars['String'],
  title: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  _?: Maybe<Scalars['String']>,
  createUser: CreateUserPayload,
};


export type MutationCreateUserArgs = {
  input: CreateUserInput
};

export type Query = {
   __typename?: 'Query',
  _?: Maybe<Scalars['String']>,
  me?: Maybe<User>,
};

export enum RoleType {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER',
  Manager = 'MANAGER',
  Super = 'SUPER',
  Logistician = 'LOGISTICIAN',
  Contractor = 'CONTRACTOR',
  Driver = 'DRIVER',
  Helper = 'HELPER',
  Bookkeeper = 'BOOKKEEPER',
  Warehouse = 'WAREHOUSE',
  Stage = 'STAGE'
}

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Subscription = {
   __typename?: 'Subscription',
  _?: Maybe<Scalars['String']>,
};


export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  itemId: Scalars['Int'],
  name: Scalars['String'],
  assets: Assets,
  mainImage?: Maybe<Image>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type UserMainImageArgs = {
  width?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>
};

export type CreateUserMutationVariables = {
  input: CreateUserInput
};


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'CreateUserPayload' }
    & Pick<CreateUserPayload, 'success' | 'message'>
    & { user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
      & { assets: (
        { __typename?: 'Assets' }
        & { data: Array<(
          { __typename?: 'AssetItem' }
          & Pick<AssetItem, 'format' | 'index' | 'publicId' | 'url' | 'width' | 'height'>
        )> }
      ) }
    )> }
  ) }
);


export const CreateUserDocument = gql`
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
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateUserMutation, CreateUserMutationVariables>, 'mutation'>;

    export const CreateUserComponent = (props: CreateUserComponentProps) => (
      <ApolloReactComponents.Mutation<CreateUserMutation, CreateUserMutationVariables> mutation={CreateUserDocument} {...props} />
    );
    

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;