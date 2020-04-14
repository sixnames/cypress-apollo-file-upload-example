// import fs from 'fs';
import path from 'path';

const deleteUploads = async ({ files }: { files: string[] }) => {
  return await Promise.all(
    files.map(async (file) => {
      const finalPath = await path.resolve(__dirname, file);
      console.log(finalPath);
      /*return fs.unlink(finalPath, function (err) {
        console.log(err);
      });*/
    }),
  );
};

export default deleteUploads;
