/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      {
        source: "/products/deleted_forever",
        destination: "products",
        permanent: true,
      },
      {
        source: "/products/deleted_temp",
        destination: "products",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/items/:slug",
        destination: "/products/:slug",
      },
    ];
  },
};

export default nextConfig;
