const Discord = require('discord.js')
module.exports = {
  name: 'playSong',
  once: false,
  execute(queue, song) {
    queue.client.distube.startduration = new Date()
    const playEmbed = new Discord.EmbedBuilder()
      .setTitle(`Now Playing ${song.name} 🎶`)
      .setColor(0xe67e22)
      .setDescription(`⌚ Song Duration: \`${song.formattedDuration}\``)
      .setThumbnail(song.thumbnail)
      .setTimestamp()
      .setFooter({ text: `Requested by: ${song.user.username}` })
    const mesgRow = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId("stopbtn")
          .setLabel("⏹️")
          .setStyle(Discord.ButtonStyle.Primary),
        new Discord.ButtonBuilder()
          .setCustomId("pausebtn")
          .setLabel("⏸️")
          .setStyle(Discord.ButtonStyle.Primary),
        new Discord.ButtonBuilder()
          .setCustomId("skpbtn")
          .setLabel("⏩")
          .setStyle(Discord.ButtonStyle.Primary)
      );
    const mesgRowR = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId("stopbtn")
          .setLabel("⏹️")
          .setStyle(Discord.ButtonStyle.Primary),
        new Discord.ButtonBuilder()
          .setCustomId("pausebtn")
          .setLabel("▶️")
          .setStyle(Discord.ButtonStyle.Primary),
        new Discord.ButtonBuilder()
          .setCustomId("skpbtn")
          .setLabel("⏩")
          .setStyle(Discord.ButtonStyle.Primary)
      );
    queue.textChannel.send({ embeds: [playEmbed], components: [mesgRow] })
  },
};