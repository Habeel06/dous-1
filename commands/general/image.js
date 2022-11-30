const Discord = require('discord.js');
const axios = require("axios");
const wait = require('node:timers/promises').setTimeout;
module.exports = {
  data: new Discord.SlashCommandBuilder()
  .setName('image')
  .setDescription('Generate a Image using AI.')
  .addStringOption(option =>
    option.setName('prompt')
      .setDescription('Enter a prompt.')
      .setRequired(true)),

      async execute(interaction) {
        await interaction.reply({content: 'Generating.....Please wait.', ephemeral: true});
          const wait = require('node:timers/promises').setTimeout;
await wait(1500)
    const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey:process.env.IMGAPI,
});
const openai = new OpenAIApi(configuration);


try{
  const response = await openai.createImage({
  prompt: interaction.options.getString('prompt'),
  n: 1,
  size: "1024x1024",
})
  image_url = response.data.data[0].url;
  const ImageEmbed = new Discord.EmbedBuilder()
  .setColor(0xe67e22)
  .setTitle(interaction.options.getString('prompt'))
      .setImage(image_url)
  .setTimestamp()
   .setFooter({ text: 'Type: Image' })
await interaction.channel.send({content:`<@${interaction.user.id}> Your image is ready`, embeds: [ImageEmbed]});
}
catch {
    const errorEmbed = new Discord.EmbedBuilder()
    .setColor(15548997)
    .setDescription('❌Image either NSFW or not found. Try Again!')
  interaction.editReply({content: '', embeds: [errorEmbed], ephemeral: true})}  
    
  }
}
