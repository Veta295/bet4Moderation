const db = require('quick.db')
const { Discord, MessageEmbed } = require('discord.js')
 let ayarlar = require('../ayarlar.json')
 var prefix = ayarlar.prefix
exports.run = async (bot, message, args) => {
  
if (!args[0]) return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu çalıştırmak için \`aç\` veya \`kapat\` demen gerekiyor.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
 
if (args[0] == 'aç') {
if(db.has(`reklam_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komut zaten önceden \`açılmış\`. \n Kapatmak için: \`${prefix}reklam kapat\``).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
db.set(`reklam_${message.guild.id}`, 'acik')
message.channel.send(new MessageEmbed().setDescription(`${message.author} Reklam filtersini başarıyla \`açtın\`.`).setColor('0x348f36').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
}
if (args[0] == 'kapat') {
if(!db.has(`reklam_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komut zaten önceden \`kapatılmış\`. \n Açmak için: \`${prefix}reklam aç\``).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
db.delete(`reklam_${message.guild.id}`)
message.channel.send(new MessageEmbed().setDescription(`${message.author} Reklam filtersini başarıyla \`kapattın\`.`).setColor('0x348f36').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
}
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['advertisement','reklam'],
  permLevel: 0
};
 
exports.help = {
  name: 'reklam-engelle',
  description: '',
  usage: ''
};