const Discord = require('discord.js')
const client = new Discord.Client()

client.on('Ready', ()=>{
    console.log("봇이 준비되었습니다")
})
client.on('message',msg=>{
    if(msg.content === "지구유튜브"){
        msg.reply("https://www.youtube.com/channel/UCSB-X9iXRdd167ubgVO39WA")
    }
})


client.on('message',msg=>{
    if(msg.content === "맨틀충신 도움말"){
        msg.reply("도움말따윈 없다 지구유튜브 구독,좋아요 누르셈")
    }
})      


client.on('message',msg=>{
    if(msg.content === "맨틀"){
        msg.reply("맨틀=천재")
    }
})


client.on('message',msg=>{
    if(msg.content === "멘틀"){
        msg.reply("멘틀이 아니라 맨틀임ㅋㅋㄹㅃㅃ")
    }
})


client.login('ODEyMTU3NTMyODU2Mzg1NTQ2.YC8qpA.HDJq0ZdQU-mZGCLQt1xYpiOw_U4')