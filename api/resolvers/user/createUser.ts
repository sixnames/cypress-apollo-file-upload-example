import { CreateUserInterface, CreateUserPayloadInterface } from '../../types';
import storeUploads from '../../utils/storeUploads';

async function createUser(
  _: any,
  { input }: CreateUserInterface,
): Promise<CreateUserPayloadInterface> {
  try {
    const images = await storeUploads({ fileName: 'file', files: input.images });

    return {
      success: true,
      message: 'User created.',
      user: {
        id: 'new user',
        name: input.name,
        assets: {
          data: images,
        },
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
