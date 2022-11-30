const Discord = require('discord.js')
const wait = require('node:timers/promises').setTimeout;
const axios = require("axios");

module.exports = {
  data: new Discord.SlashCommandBuilder()
  .setName('translate')
  .setDescription('translate a word or sentence to any language')
  .addStringOption(o =>
    o.setName('from')
                   .setDescription('Select a language to translate from')
                 .addChoices({name: 'English', value:'en'}, {name:'Japanese', value:'ja'}, {name: 'French', value:'fr'}, {name: 'German', value:'de'}, {name: 'Chinese', value:'zh'}, {name: 'Korean', value:'ko'}, {name: 'Hindi', value:'hi'}, {name: 'Urdu', value:'ur'}, {name: 'Spanish', value:'es'},{name: 'Russian', value:'ru'}, {name: 'Portuguese', value:'pt'}, {name: 'Arabic', value:'ar'}, {name:'Indonesian', value:'id'})
                  .setRequired(true))
  .addStringOption(o =>
    o.setName('to')
                   .setDescription('Select a language to translate to')
                  .addChoices({name: 'English', value:'en'}, {name:'Japanese', value:'ja'}, {name: 'French', value:'fr'}, {name: 'German', value:'de'}, {name: 'Chinese', value:'zh'}, {name: 'Korean', value:'ko'}, {name: 'Hindi', value:'hi'}, {name: 'Urdu', value:'ur'}, {name: 'Spanish', value:'es'},{name: 'Russian', value:'ru'}, {name: 'Portuguese', value:'pt'}, {name: 'Arabic', value:'ar'}, {name:'Indonesian', value:'id'})
                  .setRequired(true))
  .addStringOption(o => 
                   o.setName('sentence')
                   .setDescription('enter a word or phrase')
                  .setRequired(true)),
  async execute(interaction) {
let translation;
const options = {

  
  method: 'POST',
  url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
      'content-type': 'application/json',
    'X-RapidAPI-Key': process.env.DOUS_API,
    'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
  },
  data: {"q":`${interaction.options.getString('sentence')}`,"source":`${interaction.options.getString('from')}`,"target":`${interaction.options.getString('to')}`}
};

await axios.request(options).then(function (response) {
translation = response.data.data.translations.translatedText
}).catch(function (error) {
  console.error(error)
});
const translateEmbed = new Discord.EmbedBuilder()
    .setColor(0xe67e22)
    .addFields({name: `Original Sentence (${interaction.options.getString('from')})`, value: `${interaction.options.getString('sentence')}`}, {name: `Translated Sentence (${interaction.options.getString('to')})`, value: `${translation}`})
    .setAuthor({name: `Translation`})
await interaction.reply({embeds: [translateEmbed]})
}
}
