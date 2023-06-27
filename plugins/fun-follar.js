
let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber si te puedes ${command.replace('how', '')}*`
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
conn.reply(m.chat, `
*¿Hentai?*

*Acabas de hacer hentai con* *${text}* ⁩ So, so, so, so, so, so good.*

*${text}* 
*¡¡Uy, ya ha habido hentai por aquí!!*`, null, { mentions: [user] })
}

handler.command = /^(Follar|violar)/i
handler.fail = null
handler.register = true
export default handler
