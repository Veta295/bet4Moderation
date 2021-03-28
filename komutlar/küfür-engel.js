const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix 
exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
if(db.has(`kufur_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komut zaten önceden \`açılmış\`. \n Kapatmak için: \`${prefix}küfür kapat\``).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
db.set(`kufur_${message.guild.id}`, "acik")
message.channel.send(new MessageEmbed().setDescription(`${message.author} Küfür filtersini başarıyla \`açtın\`.`).setColor('0x348f36').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
return
}
if (args[0] === 'kapat') {
if(!db.has(`kufur_${message.guild.id}`)) return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komut zaten önceden \`kapatılmış\`. \n Açmak için: \`${prefix}küfür aç\``).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
db.delete(`kufur_${message.guild.id}`)
message.channel.send(new MessageEmbed().setDescription(`${message.author} Küfür filtersini başarıyla \`kapattın\`.`).setColor('0x348f36').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
return
}
message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu çalıştırmak için \`aç\` veya \`kapat\` demen gerekiyor.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür', 'küfür-engel'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-ayarla',
 description: '',
 usage: ''
};