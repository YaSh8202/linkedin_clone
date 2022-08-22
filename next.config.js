/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/:path*{/}?",
        headers: [
          {
            key: "authorization",
            value: "",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
