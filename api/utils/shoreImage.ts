import { FileUpload } from 'graphql-upload';
import path from 'path';
import Jimp from 'jimp';
import DepreciatedJimp from 'jimp';
import {
  GetBufferFromFileStreamInterface,
  SaveJimpOriginalInterface,
  StoreImageInterface,
  StoreImageResultInterface,
  StoreTestImageInterface,
} from '../types';
import fs from 'fs';

async function getFileStream(file: FileUpload) {
  const { createReadStream } = await file;
  return createReadStream();
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
    // We can perform actions on the partial data we have so far!
  });
}

function saveJimpOriginal({
  callback,
  fileBuffer,
  fileName,
  index,
  size,
  reject,
}: SaveJimpOriginalInterface) {
  Jimp.read(fileBuffer)
    .then((image: DepreciatedJimp) => {
      const directoryPath = path.join('./', 'public', 'images', fileName);
      const urlPath = `/images/${fileName}`;
      const extension = image.getExtension();
      const sizePostfix = size ? `-${size}` : '';
      const imageBaseName = `${fileName}${sizePostfix}-${index}`;
      const name = `${imageBaseName}.${extension}`;
      const finalPath = path.join(directoryPath, name);
      const result = { regular: '', retina: '' };

      // Check if need to resize
      if (size) {
        // Save regular resized image
        image.resize(size, Jimp.AUTO).write(finalPath, (err) => {
          if (!err) {
            result.regular = `${urlPath}/${name}`;

            // Save 2x scaled and resized image for retina screens
            const retinaName = `${imageBaseName}@2x.${extension}`;
            const retinaPath = path.join(directoryPath, retinaName);
            const retinaUrl = `${urlPath}/${retinaName}`;
            image
              .resize(size, Jimp.AUTO)
              .scale(2)
              .write(retinaPath, (err) => {
                if (!err) {
                  result.retina = retinaUrl;

                  callback(result);
                  return;
                }
                console.log(err);
              });
            return;
          }
          console.log(err);
        });
      } else {
        // Save regular image
        image.write(finalPath, (err) => {
          if (!err) {
            result.regular = `${urlPath}/${name}`;

            // Save 2x scaled image for retina screens
            const retinaName = `${imageBaseName}@2x.${extension}`;
            const retinaPath = path.join(directoryPath, retinaName);
            const retinaUrl = `${urlPath}/${retinaName}`;
            image.scale(2).write(retinaPath, (err) => {
              if (!err) {
                result.retina = retinaUrl;

                callback(result);
                return;
              }
              console.log(err);
            });
            return;
          }
          console.log(err);
        });
      }
    })
    .catch((err: any) => {
      reject(err);
    });
}

export async function storeTestImage({
  url,
  fileName,
  index = 0,
  sizes = {},
  extension = 'jpeg',
}: StoreTestImageInterface) {
  const finalSizes: { [key: string]: number | null } = { original: null, ...sizes };

  if (!fs.existsSync(path.join('./', 'public', 'images', fileName))) {
    return new Promise((resolve, reject) => {
      Jimp.read(url).then((image) => {
        image.getBuffer(Jimp.MIME_JPEG, (err, fileBuffer) => {
          if (!err) {
            const result: { [key: string]: StoreImageResultInterface } = {};
            const sizesKeys = Object.keys(finalSizes);

            sizesKeys.forEach((key, sizeIndex) => {
              const size = finalSizes[key];

              saveJimpOriginal({
                reject,
                fileBuffer,
                fileName,
                index,
                size,
                callback: (storeResult) => {
                  result[key] = storeResult;

                  if (sizeIndex + 1 === sizesKeys.length) {
                    resolve(result);
                  }
                },
              });
            });
          }
        });
      });
    });
  }

  return new Promise((resolve) => {
    const result: { [key: string]: StoreImageResultInterface } = {};
    const sizesKeys = Object.keys(finalSizes);
    const urlPath = `/images/${fileName}`;

    sizesKeys.forEach((key, sizeIndex) => {
      const size = finalSizes[key];
      const sizePostfix = size ? `-${size}` : '';
      const imageBaseName = `${fileName}${sizePostfix}-${index}`;
      const name = `${imageBaseName}.${extension}`;
      result[key] = {
        regular: `${urlPath}/${name}`,
        retina: `${urlPath}/${imageBaseName}@2x.${extension}`,
      };

      if (sizeIndex + 1 === sizesKeys.length) {
        resolve(result);
      }
    });

    return result;
  });
}

async function storeImage({ file, fileName, index = 0, sizes = {} }: StoreImageInterface) {
  const stream = await getFileStream(file);
  const finalSizes: { [key: string]: number | null } = { original: null, ...sizes };

  return new Promise((resolve, reject) =>
    getBufferFromFileStream({
      stream,
      reject,
      callback: (fileBuffer) => {
        const result: { [key: string]: StoreImageResultInterface } = {};
        const sizesKeys = Object.keys(finalSizes);

        sizesKeys.forEach((key, sizeIndex) => {
          const size = finalSizes[key];

          saveJimpOriginal({
            reject,
            fileBuffer,
            fileName,
            index,
            size,
            callback: (storeResult) => {
              result[key] = storeResult;

              if (sizeIndex + 1 === sizesKeys.length) {
                resolve(result);
              }
            },
          });
        });
      },
    }),
  );
}

export default storeImage;
