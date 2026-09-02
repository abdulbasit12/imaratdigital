/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/validateData",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://sip.imaratdigital.app/" },
          { key: "Access-Control-Allow-Methods", value: "POST, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
          { key: "Access-Control-Max-Age", value: "86400" }
        ]
      }
    ]
  }
};

export default nextConfig;
