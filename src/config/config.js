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
  production: {
    username: process.env.DB_PRODUCTION_USERNAME,
    password: process.env.DB_PRODUCTION_PASSWORD,
    database: process.env.DB_PRODUCTION_DATABASE,
    host: process.env.DB_PRODUCTION_HOST,
    dialect: 'postgres',
    port: process.env.DB_PRODUCTION_PORT
    // use_env_variable: 'DATABASE_URL',
    // dialect: 'postgres',
    // username: 'DB_PRODUCTION_USERNAME',
    // password: 'DB_PRODUCTION_PASSWORD',
    // protocol: null,
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false,
    //   },
    // },
  },
}
