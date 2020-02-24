const jwt = require('jsonwebtoken')

const { TOKEN_EXPIRATION } = require('../../utils/constants')

const authSecret = process.env.AUTH_SECRET

function makeJwt (user) {
  const payloadUser = {
    name: user.name,
    email: user.email,
    about: user.about,
    role: user.role,
    id: user.id
  }

  const token = jwt.sign(payloadUser, authSecret, {
    expiresIn: TOKEN_EXPIRATION
  })

  return token
}

module.exports = makeJwt
