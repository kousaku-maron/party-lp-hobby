const path = require('path')

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      pages: path.join(__dirname, 'pages'),
      styles: path.join(__dirname, 'styles'),
      entities: path.join(__dirname, 'entities'),
      components: path.join(__dirname, 'components'),
      repositories: path.join(__dirname, 'repositories'),
      services: path.join(__dirname, 'services')
    }

    return config
  }
}
