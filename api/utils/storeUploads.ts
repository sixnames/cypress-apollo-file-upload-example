import fs from 'fs';
import path from 'path';
import Jimp from 'jimp';
import DepreciatedJimp from 'jimp';
import { StoreUploadsInterface } from '../types';

async function createUploads({
  files = [],
  fileName,
  toPath,
  urlPath = '',
}: StoreUploadsInterface) {
  return await Promise.all(
    files.map(async (file, i) => {
      // const { createReadStream, mimetype } = await file;
      // const stream = createReadStream();
      // const extension = mimetype.split('/')[1];
      // const name = `${fileName}-${i}.${extension}`;
      // const finalPath = path.resolve(`${toPath}/${name}`);
      // const fileUrl = path.join(urlPath, name);
      const { createReadStream } = await file;
      console.log(fileName, toPath, urlPath, i);

      // Attempting to save file in server
      return new Promise((resolve, reject) => {
        // Store file data chunks in this array
        const chunks: any[] = [];
        // We can use this variable to store the final data
        let fileBuffer;

        // Read file into stream.Readable
        const fileStream = createReadStream();

        // An error occurred with the stream
        fileStream.once('error', (err) => {
          // Be sure to handle this properly!
          reject(err);
        });

        // File is done being read
        fileStream.once('end', () => {
          // create the final data Buffer from data chunks;
          fileBuffer = Buffer.concat(chunks);

          Jimp.read(fileBuffer)
            .then((image: DepreciatedJimp) => {
              const name = `${fileName}-${i}.${image.getExtension()}`;
              const finalPath = path.resolve(`${toPath}/${name}`);
              image.resize(5000, Jimp.AUTO).write(finalPath, (err) => {
                if (!err) {
                  resolve(`${urlPath}/${name}`);
                  return;
                }
                console.log(err);
              });
            })
            .catch((err: any) => {
              reject(err);
            });
          // Of course, you can do anything else you need to here, like emit an event!
        });

        // Data is flushed from fileStream in chunks,
        // this callback will be executed for each chunk
        fileStream.on('data', (chunk) => {
          chunks.push(chunk); // push data chunk to array
          // We can perform actions on the partial data we have so far!
        });

        /*stream
          .pipe(fs.createWriteStream(finalPath))
          .on('finish', () => resolve(fileUrl))
          .on('error', (error) => {
            reject(error);
          });*/
      });
    }),
  );
}

const storeUploads = async ({ files = [], fileName, toPath = 'images' }: StoreUploadsInterface) => {
  try {
    const directoryPath = path.join('./', 'public', toPath, fileName);
    const urlPath = `/public/${toPath}/${fileName}`;

    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }

    return await createUploads({ files, fileName, toPath: directoryPath, urlPath });
  } catch (e) {
    console.log('storeUploads Error', e);
    return [];
  }
};

export default storeUploads;
