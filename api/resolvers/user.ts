import createUser from './user/createUser';
import { ImageArgsInterface, UserInterface } from '../types';
import mainImageResolver from '../utils/mainImageResolver';

const user = {
  Mutation: {
    createUser,
  },

  User: {
    mainImage: (user: UserInterface, args: ImageArgsInterface) =>
      mainImageResolver<UserInterface>(user, args),
  },
};

export default user;
