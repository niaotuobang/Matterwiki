const express = require('express')
const helmet = require('helmet')
const compression = require('compression')

// Sets up the DB, starts the knex connection
require('./utils/db')

const appRouter = require('./router')

const errorHandler = require('./middleware/errorHandler')

const app = express()

app.use(helmet())
app.use(compression())

app.use(appRouter)

// Global error handling
// TODO https://www.joyent.com/node-js/production/design/errors
app.use(errorHandler)

module.exports = app
