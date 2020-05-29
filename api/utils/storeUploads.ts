import { FileUpload } from 'graphql-upload';
import sharp from 'sharp';
import fs, { ReadStream } from 'fs';
import mkdirp from 'mkdirp';

export interface StoreUploadsInterface {
  files: FileUpload[];
  slug: string;
}

export interface GetBufferFromFileStreamInterface {
  stream: ReadStream;
  callback: (buffer: Buffer) => void;
  reject: (reason: any) => void;
}

function getBufferFromFileStream({ stream, callback, reject }: GetBufferFromFileStreamInterface) {
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
    callback(fileBuffer);
  });

  // Data is flushed from fileStream in chunks,
  // this callback will be executed for each chunk
  stream.on('data', (chunk) => {
    chunks.push(chunk); // push data chunk to array
  });
}

const storeUploads = async ({ files, slug }: StoreUploadsInterface): Promise<string[]> => {
  const filesPath = `./assets/${slug}`;
  const exists = fs.existsSync(filesPath);
  if (!exists) {
    await mkdirp(filesPath);
  }

  return await Promise.all(
    files.map(async (file, index) => {
      const { createReadStream } = await file;
      const fileName = `${slug}-${index}`;

      const finalPath = `${filesPath}/${fileName}.jpg`;

      // Attempting to save file in cloud
      return new Promise<string>((resolve, reject) => {
        // Read file into stream.Readable
        const fileStream = createReadStream();

        // Save file to the FS
        getBufferFromFileStream({
          stream: fileStream,
          reject,
          callback: (buffer) => {
            sharp(buffer)
              .jpeg()
              .toFile(finalPath)
              .then(() => {
                resolve(finalPath);
              })
              .catch((error) => {
                reject(error);
              });
          },
        });
      });
    }),
  );
};

export default storeUploads;
