const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'ODA4NDI3NzY3MzM0MDQzNzE4.YCGZBw.N7sf52hjh_CZNja0nedmgEZ7am0';

bot.login(token)
bot.on('ready', ()=>{
    console.log('estou pronto para ser usado')
})

bot.on('message',msg=>{
    if(msg.content ==='Eae meus parça!'){
        msg.reply('Eae meu rei, seja bem vindo !!')
    }
    
})