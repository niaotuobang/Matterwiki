const { to } = require('await-to-js')
const { Model } = require('objection')
const initDbConnection = require('../../utils/initDbConnection')

const knex = initDbConnection()
Model.knex(knex)

/**
 * Sets up test database
 */
async function initTestDb () {
  // Verify that it exists
  // 🔗https://github.com/knex/knex/issues/407#issuecomment-52858626
  const [, verifyError]  = await to(knex.raw(`select 1+1 as result`))
  if (verifyError) throw new Error(`Test DB was not found. Was it not created?`)

  // Run migrations
  const [, migrateError] = await to(knex.migrate.latest())
  if (migrateError) throw new Error(`Migration Failed. Wonder what happened? 🤔`)
}

/**
 * Start a transaction 
 */
function startTransaction() {
  return knex.raw(`start transaction`).catch(() => {
    // empty, intentional ignored `catch`
  })
}

/**
 * Rolls back transaction
 */
function rollbackTransaction() {
  return knex.raw("rollback")
}

/**
 * Seeding the db with the files available in .db/seed
 */
async function seedDb() {
  return knex.seed.run()
}

/**
 * This file houses all the helpers involving knex-db-manager, generally used in setup and teardown
 */
module.exports = {
  initTestDb,
  seedDb,
  startTransaction,
  rollbackTransaction
}
