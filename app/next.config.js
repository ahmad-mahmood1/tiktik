/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    domains: ["static.wikia.nocookie.net", "lh3.googleusercontent.com"],
  },
};
