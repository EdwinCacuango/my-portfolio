/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['media.graphassets.com'],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  }
}