const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`${client.user.username} Davet Menüsü  `)
        .setDescription(`:white_small_square:**Botun Davet Linki İçin** [TIKLA](https://discord.com/oauth2/authorize?client_id=761144469701132290&scope=bot&permissions=8) \n:white_small_square:**Destek Sunucusu İçin** [TIKLA](https://discord.gg/kj7eR8A)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};
//Lord Creative