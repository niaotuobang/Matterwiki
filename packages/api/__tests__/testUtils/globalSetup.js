require('dotenv').config()

const {initTestDb, seedDb, startTransaction, rollbackTransaction} = require('./dbHelpers')

const { makeUsers } = require('./userHelpers')
const makeJwt = require('./makeJwt')
const { userHolder, tokenHolder } = require('./modelHolder')

/**
 * Makes the test users needed, sets it in the holder for future use
 */
async function makeTestUsers () {
  const testUsers = await makeUsers()
  userHolder.set(testUsers)
  return testUsers
}

/**
 * Makes the auth tokens needed, sets it in the holder for future use
 */
function makeTokens (testUsers) {
  const tokens = {}
  tokens.admin = makeJwt(testUsers.admin)
  tokens.user = makeJwt(testUsers.users[0])

  tokenHolder.set(tokens)
}

/**
 * Convenience for API tests, which need default users, default tokens and all that
 */
module.exports = {
  /**
   * Setup block that runs before any of the tests, runs only once/suite
   */
  setupAll: () => initTestDb(),

  /**
   * Setup block that runs before every single test
   */
  setupEach: async () => {
    await startTransaction()
    await seedDb()
    await makeTestUsers()
    
    makeTokens()
  },

  afterEach: async () => {
    await rollbackTransaction()
  }
}
