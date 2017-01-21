# Notifiction-API
Micro API to ping Slack

### Usage
1. Install Yarn: `$ brew install yarn`
2. Install node packages: `$ yarn`
3. Set Port environment variable (Doesn't need to be port 3000): `$ export PORT=3000`
3. Run `$ yarn start`

### Query Params
 * `channel`: Channel to post to ex: `#general` or `@uli` for users
 * `username`: Username to post with (use `%20` for encoding a space)
 * `text`: Message to post
 * `emoji`: The avatar for your post

#### Example
 * `localhost:3000/?channel=@uli&username=Uli%20bot&text=hi%20people&emoji=partyparrot`

#### Access
* `https://blooming-gorge-88603.herokuapp.com/`