const { Client, GatewayIntentBits, Guild } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const SECURITY = require("./serverconnections/security");
const CHANNELS = require("./serverconnections/channels");
const GUILD = require("./serverconnections/guild");

client.on('ready', async() => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(SECURITY.TOKEN.LOGIN);