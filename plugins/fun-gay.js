let handler = async (m, { conn }) => {
let vn = './Plugins/Audios/gay2.mp3'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'error.png', '*Esta persona es amante de ARCA y Bad Gyal,*\n\n*🏳️‍🌈LOOK AT THIS GAY🏳️‍🌈*', m)
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })
}
handler.help = ['gay']
handler.tags = ['maker']
handler.command = /^(gay)$/i
handler.register = true
export default handler
