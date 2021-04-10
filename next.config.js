module.exports = {
  publicRuntimeConfig: {
    PROJECT_ROOT: __dirname,
    API_URL: process.env.API_URL,
    ASSETS_URL: process.env.ASSETS_URL,
    PAYSTACK_PUBLIC_KEY: process.env.PAYSTACK_PUBLIC_KEY,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/about-riilfit": { page: "/about-riilfit" },
      "/contact-us": { page: "/contact-us" },
      "/profile": { page: "/profile" },
      "/dreambodi": { page: "/dreambodi" },
    };
  },
};
