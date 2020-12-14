const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Komutlar`)
        .setDescription(`:white_small_square: | **${ayarlar.prefix}moderasyon** Moderasyon Komutları.\n :white_small_square: | **${ayarlar.prefix}kullanıcı** Kullanıcıya Komutları.\n :white_small_square: |  **${ayarlar.prefix}eğlence** Eğlence Komutları. **YENİ KOMUT** \n`)
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=761144469701132290&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/mcS7wAwX) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/761144469701132290/vote)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};