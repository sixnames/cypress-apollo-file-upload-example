import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

export const clearTestDataHandler = async () => {
  const models = mongoose.modelNames();

  for (const model of models) {
    await mongoose.model(model).deleteMany({
      name: /cy-test/,
    });
  }
};

const clearTestData = async (_: NextApiRequest, res: NextApiResponse) => {
  await clearTestDataHandler();
  return res.send('cleared');
};

export default clearTestData;
