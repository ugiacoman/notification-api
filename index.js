const { parse } = require('url')
const fetch = require('isomorphic-fetch')

module.exports = async request => {
  const { query } = parse(request.url, true)

  var payload = { 'channel': query.channel,
                    'username': query.username,
                    'text': query.text,
                    'icon_emoji': ':' + query.emoji + ':'
                  }
  const formBody = ['payload=' + JSON.stringify(payload)]

  const slackURL = 'https://hooks.slack.com/services/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'
  const response = await fetch(slackURL, {
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
                                return 'Missing query params'
                              })
  return response
};
