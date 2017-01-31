const { parse } = require('url')
const fetch = require('isomorphic-fetch')
require('dotenv').config()

module.exports = async request => {
  const { query } = parse(request.url, true)

  var payload = { 'channel': process.env.CHANNEL,
                    'username': query.username,
                    'text': query.text,
                    'icon_emoji': ':' + query.emoji + ':'
                  }
  const formBody = ['payload=' + JSON.stringify(payload)]

  const response = await fetch(process.env.SLACK_URL, {
                                method: "POST",
                                headers: {
                                  "cache-control": "no-cache",
                                  "content-type": "application/x-www-form-urlencoded"
                                },    
                                body: formBody
                                })
                              .then(function(response) {
                                return response.text()
                              }, function(error) {
                                return 'Couldn\'t reach slack, check if you configured your .env file correctly.'
                              })
                              
  response.setHeader('Access-Control-Allow-Origin', '*')
  return response
};
