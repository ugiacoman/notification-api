# Notification-API
Micro API to ping Slack. Why create a wrapper around another API? To secure your Slack for frontend use :) Also ProcFile included for deployment to Heroku.

### Usage
1. Install Yarn: `$ brew install yarn`
2. Install node packages: `$ yarn`
3. Preload your PORT environment variable (Doesn't need to be port 3000): `$ export PORT=3000`. (Micro & Heroku need PORT to be preloaded)
4. Update `.sample-env` to your slack integration URL and remove the `sample-` from the file name. ([Info on dotenv](https://www.npmjs.com/package/dotenv))
3. Run `$ yarn start`

#### Query Params
 * `username`: Username to post with (use `%20` for encoding a space)
 * `text`: Message to post
 * `emoji`: The avatar for your post

#### Example
 * `localhost:3000/?username=Uli%20bot&text=hi%20people&emoji=partyparrot`

#### Heroku Deployment (requires git)
1. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. Make sure you are logged in with Heroku.
3. Create heroku app `heroku create {optional-name-of-app}`
4. Make sure your latest commits are pushed to master and deploy by `git push heroku master`
5. Bonus: If you aren't committing your latest changes to master you can push your latest commit by using `git push heroku HEAD:master`
