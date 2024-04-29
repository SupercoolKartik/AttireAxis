/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.redwolf.in",
        port: "",
        pathname:
          "/image/cache/catalog/hoodies/dc-comics-batman-red-logo-hoodie-india-600x800.jpg",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/images/I/31mVuCkpc4L.jpg",
      },
      {
        protocol: "https",
        hostname: "www.redwolf.in",
        port: "",
        pathname:
          "/image/cache/catalog/mens-t-shirts/vengeance-t-shirt-female-model-600x800.jpg",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/images/I/612HOf8Nd-L._SL1280_.jpg",
      },
    ],
  },
};

export default nextConfig;
