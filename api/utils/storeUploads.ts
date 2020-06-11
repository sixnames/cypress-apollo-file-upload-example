import { FileUpload } from 'graphql-upload';
import sharp from 'sharp';
import fs, { ReadStream } from 'fs';
import mkdirp from 'mkdirp';

export interface StoreUploadsInterface {
  files: FileUpload[];
  slug: string;
}

function getBufferFromFileStream(stream: ReadStream) {
  return new Promise<Buffer>((resolve, reject) => {
    // Store file data chunks in this array
    const chunks: any[] = [];
    // We can use this variable to store the final data
    let fileBuffer;

    // An error occurred with the stream
    stream.once('error', (err) => {
      reject(err);
    });

    // File is done being read
    stream.once('end', () => {
      // create the final data Buffer from data chunks;
      fileBuffer = Buffer.concat(chunks);
      resolve(fileBuffer);
    });

    // Data is flushed from fileStream in chunks,
    // this callback will be executed for each chunk
    stream.on('data', (chunk) => {
      chunks.push(chunk); // push data chunk to array
    });
  });
}

const storeUploads = async ({ files, slug }: StoreUploadsInterface): Promise<string[]> => {
  const filesPath = `./assets/${slug}`;
  const filesResolvePath = `/images/${slug}`;
  const exists = fs.existsSync(filesPath);
  if (!exists) {
    await mkdirp(filesPath);
  }

  return await Promise.all(
    files.map(async (file, index) => {
      const { createReadStream } = await file;
      const fileName = `${slug}-${index}`;

      const finalPath = `${filesPath}/${fileName}.jpg`;
      const resolvePath = `${filesResolvePath}/${fileName}.jpg`;

      // Attempting to save file in fs
      return new Promise<string>(async (resolve, reject) => {
        // Read file into stream.Readable
        const fileStream = createReadStream();
        const buffer = await getBufferFromFileStream(fileStream);

        // Save file to the FS
        sharp(buffer)
          .jpeg()
          .toFile(finalPath)
          .then(() => {
            resolve(resolvePath);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }),
  );
};

export default storeUploads;
