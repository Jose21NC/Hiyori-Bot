/*import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}πππΎπππ½πΌ ππ ππππ½ππ π ππππππ\nπππππππ\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\nπππππ πππ ππΌππ ππ πππππ\nπππΌππππ\n*${usedPrefix + command} Billie Eilish - Bellyache*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3 ${urll}`, buttonText: { displayText: 'π΅ πππππ π΅' }, type: 1 },
{ buttonId: `#ytmp4 ${urll}`, buttonText: { displayText: 'π₯ πππππ π₯' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: 'π πππ ππππππππππ π' }, type: 1 }, ]    
let texto1 = `ΰ¦ ππππππ | πππππ
Β» ${title}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ πΏπππΎππππΎπππ | πΏπππΎπππππππ
Β» ${description}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ πππ½πππΎπΌπΏπ | πππ½ππππππΏ
Β» ${publishedTime}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ πΏπππΌπΎπππ | πΏπππΌππππ
Β» ${durationH}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ πππππΌπ | πππππ
Β» ${viewH}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ πππ
Β» ${urll}
*π© π  πͺ β§βββ ${vs} ββββ§ π© π  πͺ*`.trim()
let buttonMessage = { "document": { url: "https://wa.me/5219992095479" }, "fileName": 'β πΏ Κα΄α΄Κα΄α΄α΄α΄α΄α΄Κ α΄α΄ Κα΄α΄α΄α΄Κα΄', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/BrunoSobrino/TheMystic-Bot-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `ΰ¦ ππππππ | πππππ:* ${title}\nΰ¦ πππ½πππΎπΌπΏπ | πππ½ππππππΏ:* ${published}\nΰ¦ πππππΌπ | πππππ:* ${views}\nΰ¦ πππ:* ${url}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: 'β―οΈ πππ ππππππππππ β―οΈ'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*α΄Ι΄α΄ Ιͺα΄Ι΄α΄α΄ α΄α΄α΄Ιͺα΄, α΄Ι’α΄α΄Κα΄α΄ α΄Ι΄ α΄α΄α΄α΄Ι΄α΄α΄...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*[βππππβ] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*'}}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.exp = 20
handler.money = 200
export default handler



*/

import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
try {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' π', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'π» π¦ππ½π²πΏ ππ?ππ?ππΌπ-π π - πͺπ΅π?ππππ½π½ ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

if (!text) throw `${lenguajeGB['smsAvisoMG']()}πππΎπππ½πΌ ππ ππππ½ππ π ππππππ\nπππππππ\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\nπππππ πππ ππΌππ ππ πππππ\nπππΌππππ\n*${usedPrefix + command} Billie Eilish - Bellyache*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw `${lenguajeGB['smsAvisoFG']()}ππ ππ πππΏπ πππΎπππππΌπ ππ πΌππΏππ/πππΏππ. πππππππ πΎππ ππππ ππππ½ππ π ππππππ\n\nπππ πΌππΏππ/πππΏππ πΎππππΏ πππ π½π πππππΏ. πππ πΌππππππ ππΌππ ππ πππππ`
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
 
await conn.sendButton(m.chat, wm, `*π© π  πͺ β§βββ ${vs} ββββ§ π© π  πͺ*

ΰ¦ ππππππ | πππππ
Β» ${title}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ πΏπππΎππππΎπππ | πΏπππΎπππππππ
Β» ${description}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ πππ½πππΎπΌπΏπ | πππ½ππππππΏ
Β» ${publishedTime}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ πΏπππΌπΎπππ | πΏπππΌππππ
Β» ${durationH}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ πππππΌπ | πππππ
Β» ${viewH}
οΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉοΉ
ΰ¦ πππ
Β» ${url}

*π© π  πͺ β§βββ ${vs} ββββ§ π© π  πͺ*`, thumbnail, [['π  π π‘ π¨ βοΈ', '/menu']], m, dos.getRandom())
  
const sections = [{
title: comienzo + ' π‘ π§ππ£π’π¦ ππ πππ¦πππ₯πππ¦ ' + fin,
rows: [
{title: "π  π π¨ π π π’ (Opcion 1)", rowId: `${usedPrefix}yta ${url}`, description: `${title}\n`},
{title: "π  π π¨ π π π’ (Opcion 2)", rowId: `${usedPrefix}play.1 ${url}`, description: `${title}\n`},
{title: "π  π π¨ π π π’   π π’ π", rowId: `${usedPrefix}pdocaudio ${url}`, description: `${title}\n`},
{title: "π  π© π π π π’ (Opcion 1)", rowId: `${usedPrefix}ytv ${url}`, description: `${title}\n`},
{title: "π  π© π π π π’ (Opcion 2)", rowId: `${usedPrefix}play.2 ${url}`, description: `${title}\n`},
{title: "π  π© π π π π’   π π’ π", rowId: `${usedPrefix}pdocvieo ${url}`, description: `${title}\n`}
]},{
title: comienzo + ' π ππ¨π¦π€π¨πππ ππ©ππ‘π­πππ ' + fin,
rows: [
{title: "π  π  π π¦   π₯ π π¦ π¨ π π§ π π π’ π¦", rowId: `${usedPrefix}ytsearch ${text}`}
]}]

const listMessage = {
  text: `*πππππΌ πππ ππΌ ππΌπΎππ πΎππ  ${text}*`,
  footer: global.wm,
  title: `${htki} *β»οΈ πΏπππΎπΌπππΌπ* ${htka}`,
  buttonText: `π πππππππ π`,
  sections
}

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
} catch {
conn.reply(m.chat, '*[βππππβ] πππππππ ππ πππππ, πππππππππ ππ πππππ*', m)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.exp = 20
handler.money = 200
export default handler

