const knex = require('knex')
const { Model } = require('objection')

const dbConfig = require('../knexfile')

// build the knex instance
const knexInstance = knex(dbConfig)

// build the DB instance
Model.knex(knexInstance)

module.exports = knexInstance
