import { MutationPayloadInterface } from './common';
import { FileUpload } from 'graphql-upload';

export interface UserInterface {
  id: string;
  name: string;
  assets?: string[];
  mainImage?: string;
}

export interface CreateUserInterface {
  input: {
    name: UserInterface['name'];
    images: FileUpload[];
  };
}

export interface CreateUserPayloadInterface extends MutationPayloadInterface {
  user?: UserInterface;
}
