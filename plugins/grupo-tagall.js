let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*ღ 𝙈𝙀𝙉𝙎𝘼𝙅𝙀:* ${pesan}`
let teks = `╭━〔 *${lenguajeGB['smstagaa']()}* 〕━⬣\n\n${oi}\n\n`
for (let mem of participants) {
teks += `┃⊹ @${mem.id.split('@')[0]}\n`}
teks += `┃`
teks += `┃ ${wm}`
teks += `╰━━━━━[ *𓃠 ${vs}* ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
