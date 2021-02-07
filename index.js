require('dotenv').config() // Load .env file
const axios = require('axios')
const Discord = require('discord.js')
const client = new Discord.Client()

function pingForPlayers() {

	// Ping API for server data.
	axios.get(`https://api.mcsrvstat.us/2/${process.env.MC_SERVER_IP}`).then(res => {
		// If we got a valid response
		if(res.data && res.data.players) {
			let playerCount = res.data.players.online || 0 // Default to zero
			client.user.setPresence({
				game: {
					// Example: "Watching 5 players on server.com"
					name: `${playerCount} player${playerCount !=1 ? 's' : ''} on ${process.env.SERVERNAME}`,
					type: 3 // Use activity type 3 which is "Watching"
				}
			})
			console.log('Updated player count to', playerCount)
		}
		else
			console.log('Could not load player count data for', process.env.MC_SERVER)

	}).catch(err => console.log('Error pinging api.mcsrvstat.us for data:', err))
}

// Runs when client connects to Discord.
client.on('ready', () => {
	console.log('Logged in as', client.user.tag)

	pingForPlayers() // Ping server once on startup
	// Ping the server and set the new status message every x seconds. (Minimum of 1 minute)
	setInterval(pingForPlayers, Math.max(1, process.env.MC_PING_FREQUENCY || 1) * 1000)
})

// Login to Discord
client.login(process.env.DISCORD_TOKEN)

// Webserver so that heroku doesn't close
const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Eddland ready for duty!');
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});