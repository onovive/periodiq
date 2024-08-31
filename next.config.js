/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
module.exports = {
  images: {
    // domains: ["avatars.githubusercontent.com"],
    // domains: ["lh3.googleusercontent.com"],
    // domains: ["media.licdn.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};
