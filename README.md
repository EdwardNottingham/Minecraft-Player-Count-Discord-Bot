# Minecraft Player Count Discord Bot

This bot will update its status message with the current player count of a minecraft server.

![Example output from the bot.](https://i.imgur.com/AZo7Z9H.png)

## How to use

This bot is really easy to use.

Just follow these steps:
1. Have [Node.JS](https://nodejs.org) installed and the Heroku CLI installed.
2. Clone this repository to a folder on your computer.
3. Open a terminal in that folder, and install the packages with `npm install`.
4. Create a new Heroku app and push the repository to it.
5. Navigate to your app settings in Heroku and add the variables listed in the .env-template file with your values.

For information on getting a bot token, follow the steps on [the Discord developer documentation.](https://discordapp.com/developers/docs/intro)

## Extra Info

A friend helped me modify this for my own Discord server, but I wanted to continue the origional author's decision to share it with added flexibility for anyone in the community to use.

This relies on the APIs hosted at https://api.mcsrvstat.us and https://rust-servers.info
