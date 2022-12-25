const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Tests if / commands are working and if I will go insane fixing it'),
	async execute(interaction) {
		await interaction.reply('Maddox, you somehow made a functional slash command');
	},
};