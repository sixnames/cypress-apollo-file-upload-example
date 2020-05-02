/* eslint-disable @typescript-eslint/camelcase */
import { FileUpload } from 'graphql-upload';
import { AssetInterface } from '../types';
import cloudinary from 'cloudinary';

export interface StoreUploadsInterface {
  files: FileUpload[];
  fileName: string;
}

const storeUploads = async ({
  files,
  fileName,
}: StoreUploadsInterface): Promise<AssetInterface[]> => {
  return await Promise.all(
    files.map(async (file, index) => {
      const { createReadStream } = await file;
      const publicId = `${fileName}-${index}`;

      // Attempting to save file in cloud
      return new Promise<AssetInterface>((resolve, reject) => {
        // Create cloudinary stream
        const cloudinaryStream = cloudinary.v2.uploader.upload_stream(
          { public_id: publicId },
          function (error, result) {
            if (error) {
              reject(error);
            }

            if (result) {
              resolve({
                publicId: result.public_id,
                width: result.width,
                height: result.height,
                format: result.format,
                url: result.url,
                index,
              });
            }
          },
        );

        // Read file into stream.Readable
        const fileStream = createReadStream();

        // An error occurred with the stream
        fileStream.once('error', (error) => {
          // Be sure to handle this properly!
          reject(error);
        });

        // File is done being read
        fileStream.once('end', () => {
          cloudinaryStream.end();
        });

        // Data is flushed from fileStream in chunks,
        // this callback will be executed for each chunk
        fileStream.on('data', (data) => {
          // Write all file data to the cloud
          cloudinaryStream.write(data);
        });
      });
    }),
  );
};

export default storeUploads;
