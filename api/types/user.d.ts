import { MutationPayloadInterface } from './common';
import { FileUpload } from 'graphql-upload';

export interface ImageInterface {
  regular: string;
  retina: string;
}

export interface UserInterface {
  id: string;
  name: string;
  images: ImageInterface[];
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
