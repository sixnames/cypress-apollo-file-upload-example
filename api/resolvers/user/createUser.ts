import { CreateUserInterface, CreateUserPayloadInterface } from '../../types';
import storeUploads from '../../utils/storeUploads';

async function createUser(
  _: any,
  { input }: CreateUserInterface,
): Promise<CreateUserPayloadInterface> {
  try {
    const images = await storeUploads({ slug: 'file', files: input.images });

    return {
      success: true,
      message: 'User created.',
      user: {
        id: 'new user',
        name: input.name,
        assets: images,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: 'Error',
    };
  }
}

export default createUser;
