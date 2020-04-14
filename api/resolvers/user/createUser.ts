import { CreateUserInterface, CreateUserPayloadInterface } from '../../types';

async function createUser(
  _: any,
  { input }: CreateUserInterface,
): Promise<CreateUserPayloadInterface> {
  return {
    success: true,
    message: 'User created.',
    user: {
      id: 'new user',
      name: input.name,
      images: [
        {
          regular: 'image.jpg',
          retina: 'image@2x.jpg',
        },
      ],
    },
  };
}

export default createUser;
