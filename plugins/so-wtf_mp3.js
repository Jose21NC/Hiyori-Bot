import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 60
global.db.data.users[m.sender].exp += 70
  
let vn = './media/wtf.mp3'
conn.sendMessage(m.chat, { audio: { url: vn }, seconds: '1934.4', ptt: true, mimetype: 'audio/mpeg', fileName: `deja de llorar.mp3` }, { quoted: m })}
handler.customPrefix = /WTF|wtf|Wtf|wataf|watafac|watafack/ 
handler.command = new RegExp
export default handler
