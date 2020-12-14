const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`[**Renwil-Komutlar**]`)
  .addField(`**Eğlence-Komutları>**`,`:white_small_square: \`-aşkölçer\` = Etiketlediğiniz kişiyle aranızdaki aşkı ölçer. \n:white_small_square: \`-espri\` = Bota espri yaptırır.\n:white_small_square: \`-kaç-cm\` = Kaç cm olduğunu gösterir :D\n:white_small_square: \`-sor\` = Bota Soru Sorar.`)
  return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eglence'],
  permlevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'eğlence'
}
//Lord Creative