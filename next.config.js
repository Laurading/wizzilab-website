/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites() {
    
    return [
    {
        source: '/mailjet/:action',
        destination: `https://api.mailjet.com/v3.1/:action`,
    },
    ]
  },
    i18n: {
      locales: ['en', 'fr'],
      defaultLocale: 'fr',
    },
  
  nextConfig}




