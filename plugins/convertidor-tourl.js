import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `${lenguajeGB['smsAvisoMG']()}πππππππΏππ πΌ ππ πππΏππ π πππΌπππ πππΌ πΎππππππππ ππ ππππΌπΎπ\n\nπππππ ππ πΌ πππΏππ ππ πππΌππ ππ πΎππππππ ππππ πΌ ππππ`
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
m.reply(`*ENLACE ${link}*`)
}
handler.help = ['tourl <reply image>']
handler.tags = ['sticker']
handler.command = /^(upload|tourl|toenlace)$/i
export default handler
