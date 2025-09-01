/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inhouse.pulse-force.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/self-publishing-fa",
        destination: "/self-publishing-tx",
        permanent: true,
      },
      {
        source: "/digital-book-publishing-fa",
        destination: "/digital-book-publishing-tx",
        permanent: true,
      },
      {
        source: "/amazon-publishing-fa",
        destination: "/amazon-publishing-tx",
        permanent: true,
      },
      {
        source: "/children-Illustration-fa",
        destination: "/children-Illustration-tx",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
