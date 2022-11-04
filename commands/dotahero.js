const { SlashCommandBuilder } = require('discord.js');
const heroSearch = require('../announcers/dotainfo')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hero')
		.setDescription('Returns information on hero'),
	async execute(interaction) {
		await heroSearch
		interaction.channel.message.send(heroSearch.name)
	},
};