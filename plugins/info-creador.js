let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `╭─「➻❥ *owner* ➻❥」
│➯ PolBot ✍
│➯Wa.me/13658004458 (CREADOR)
╰───────────────╯`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/motopolar/PolBot` },
'mimetype': `application/${document}`,
'fileName': `⫷᭄ PolBot ✍`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/motopolat/PolBot',
'mediaType': 2,
'previewType': 'pdf',
'title': 'Un bot de whatsapp⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/4eA5nDxPjOA' }},
'caption': text,
'footer': wm,
//'buttons':[
//{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
//{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
handler.register = true
export default handler
