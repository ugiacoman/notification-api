const { parse } = require('url')
const fetch = require('isomorphic-fetch')
const microCors = require('micro-cors')

require('dotenv').config()

const pingSlack = async (request, response) => {
  const { query } = parse(request.url, true)
  var payload = { 'channel': process.env.CHANNEL,
    'username': query.username,
    'text': `${query.text}`,
    'icon_emoji': `:${query.emoji}:`
  }
  const formBody = ['payload=' + JSON.stringify(payload)]

  const res = await fetch(process.env.SLACK_URL, {
    method: 'POST',
    headers: {
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: formBody
  })
  return await res.text()
}

const cors = microCors({ allowMethods: ['GET']})
module.exports = cors(pingSlack)
