const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const CONFIG = require("./config.json");
const COMMANDS = require('./deploy-commands');
const { heroSearch } = require('./announcers/dotainfo');
const epicGames = require('./announcers/epic')




client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const guild = await client.guilds.fetch(CONFIG.G_CALLIAN)
  const channel = await guild.channels.fetch(CONFIG.CH_AREA51)
  console.log(channel)
  channel.send("Yo @Callian#2278, check this out. PREPARING SUPER SURRISE")
  setInterval(() => epicGames.freeCheck(channel), 5000)

});

client.on('guildMemberAdd', (member) => {
  member.roles.add(CONFIG.R_TEST)
})




client.login(CONFIG.T_LOGIN);