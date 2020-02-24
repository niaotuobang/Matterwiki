require('dotenv').config()

module.exports = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8',
    debug: process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
  },
  pool: {
    min: 1,
    max: 1
  },
  seeds: {
    directory: './db/seeds/'
  },
  migrations: {
    directory: './db/migrations/'
  }
}
