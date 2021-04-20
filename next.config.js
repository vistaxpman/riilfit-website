module.exports = {
  publicRuntimeConfig: {
    PROJECT_ROOT: __dirname,
    API_URL: process.env.API_URL,
    ASSETS_URL: process.env.ASSETS_URL,
    PAYSTACK_PUBLIC_KEY: process.env.PAYSTACK_PUBLIC_KEY,
  },
  trailingSlash: true
};
