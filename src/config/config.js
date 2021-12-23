require('dotenv').config()

module.exports = {
  "development": {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT
  },
  "test": {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT
  },
  // production: {
  //   "use_env_variable": "DATABASE_URL"
  // }
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    username: 'DB_PRODUCTION_USER',
    password: 'DB_PRODUCTION_PASSWORD',
    protocol: null,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
}
