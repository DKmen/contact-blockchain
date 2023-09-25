/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    contract: '0x508C1e10164A5cf331F3e482d835DEb4842Be200',
    url:"http://localhost:4000/contact/get-details"
  },
}

module.exports = nextConfig
