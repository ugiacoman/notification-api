const { parse } = require('url')
const fetch = require('isomorphic-fetch')

  // http://localhost:3000/?channel=@uli&username=Ulibot&text=hello&emoji=:partyparrot

module.exports = async request => {
  const { query } = parse(request.url, true)

  var payload = { 'channel': query.channel,
                    'username': query.username,
                    'text': query.text,
                    'icon_emoji': query.emoji
                  }
  var formBody = ['payload=' + JSON.stringify(payload)]

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
                                return error.message
                              })
  return response
};