/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  env: {
    MONGODB_URI:
      "mongodb+srv://asayyex:Asayyex%401@cluster0.57ph6.mongodb.net/my-market?authSource=admin&replicaSet=atlas-20pvya-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
  },
};
