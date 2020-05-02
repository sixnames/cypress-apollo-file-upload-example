require('dotenv').config();

module.exports = () => {
  return {
    env: {
      // Reference a variable that was defined in the .env file and make it available at Build Time
      DB_USERNAME: process.env.DB_USERNAME,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_HOST: process.env.DB_HOST,
      DB_PORT: process.env.DB_PORT,
      DB_NAME: process.env.DB_NAME,
      ADMIN_NAME: process.env.ADMIN_NAME,
      ADMIN_EMAIL: process.env.ADMIN_EMAIL,
      ADMIN_PHONE: process.env.ADMIN_PHONE,
      ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
      SESS_NAME: process.env.SESS_NAME,
      SESS_TTL: process.env.SESS_TTL,
      CLOUD_NAME: process.env.CLOUD_NAME,
      CLOUD_KEY: process.env.CLOUD_KEY,
      CLOUD_SECRET: process.env.CLOUD_SECRET,
      CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    },
  };
};
