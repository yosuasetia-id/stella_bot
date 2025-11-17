const { SlashCommandBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Menampilkan informasi tentang server dan bot'),

    async execute(interaction, client) {
        const guild = interaction.guild;
        const owner = await guild.fetchOwner();
        const ping = client.ws.ping;

        const fiturList = config.features.map((fitur, i) => `  ${i + 1}. ${fitur}`).join('\n');

        await interaction.reply(
            `📌 **Informasi Server**\n` +
            `- Nama Server: ${guild.name}\n` +
            `- Pemilik: ${owner.user.tag}\n` +
            `- Ping Bot: ${ping}ms\n\n` +
            `🤖 **Informasi Bot**\n` +
            `- Nama Bot: ${config.botName}\n` +
            `- Developer: ${config.developer}\n` +
            `- Prefix: ${config.prefix}\n` +
            `- Versi: ${config.version}\n\n` +
            `🧩 **Fitur Aktif**\n${fiturList}\n\n` +
            `⚠️ Server ini hanya dibuat untuk pengembangan bot saja.`
        );
    }
};