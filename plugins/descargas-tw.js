import { twitterdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}πππππππ ππ ππππΌπΎπ πΏπ πππππππ ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://twitter.com/Animalesybichos/status/1564616107159330816?t=gKqUsstvflSp7Dhpe_nmDg&s=19*\n\nπππππ πΌ πππππππ  ππππ ππ πΏππππππΌπΏ ππππ πππΏππ\nπππΌππππ\n*${usedPrefix + command} https://twitter.com/Animalesybichos/status/1564616107159330816?t=gKqUsstvflSp7Dhpe_nmDg&s=19*`
let res = await twitterdlv2(args[0])
const { url, quality, type } = res[1]

await conn.reply(m.chat, wait, fkontak,  m)
await conn.reply(m.chat, waitt, fkontak,  m)
await conn.reply(m.chat, waittt, fkontak,  m)
await conn.reply(m.chat, waitttt, fkontak,  m)
await conn.sendFile(m.chat, url, 'twitter' + (type == 'image' ? '.jpg' : '.mp4'), `β¨ πΎπΌπππΏπΌπΏ *:* πππΌππππ *Β» ${quality}*\n${wm}`, m)
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((tw|twitter)(dl)?)$/i
handler.limit = 2
handler.exp = 70

export default handler
