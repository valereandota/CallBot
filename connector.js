const { Client, GatewayIntentBits, Guild } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const CONFIG = require("./config.json");


client.on('ready', async() => {
  console.log(`Logged in as ${client.user.tag}!`);
}); 

client.on('guildMemberAdd', (member)=> {
  member.roles.add(CONFIG.R_PLAYER)
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(CONFIG.T_LOGIN);