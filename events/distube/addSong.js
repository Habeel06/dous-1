const Discord = require("discord.js")
module.exports = {
  name: "addSong",
  async execute(queue, song){
    const addEmbed = new Discord.EmbedBuilder()
	    .setColor('RANDOM')
	    .setTitle(`🎶 ${song.name} has been added to the queue.`)
      .setThumbnail(song.thumbnail)
      .setDescription(`⌚ Song Duration: \`${song.formattedDuration}\``)
	    .setTimestamp()
	    .setFooter({ text: 'Added by ' + song.user.username });
      queue.textChannel.send({ embeds: [addEmbed] })
  },
}