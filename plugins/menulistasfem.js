import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen1;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `     ┣ *𝑴𝑬𝑵𝑼 𝑯𝒀𝑷𝑬𝑹𝑿𝑻𝑯𝑰𝑨𝑵𝒀* ┫
┏━━━━━━━━━━━┓
┣ *🧸❤️‍🩹𝑯𝒚𝒑𝒆𝒓𝑿𝑻𝒉𝒊𝒂𝒏𝒚 𝒕𝒆 𝒔𝒂𝒍𝒖𝒅𝒂* @${m.sender.split`@`[0]}
┣ 
┣ 🚀𝑪𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝑯𝒚𝒑𝒆𝒓𝑿𝑻𝒉𝒊𝒂𝒏𝒚 𝑳𝒊𝒔𝒕𝒂𝒔𝑭𝒆𝒎:
┣ ✅.𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐14
┣ ✅.𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐16
┣ ✅.𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐18
┣ ✅.𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐20
┣ ✅.𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐22
┣ ✅.𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐00
┣ ✅.𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐𝒗𝒔
┣ ✅.𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐14
┣ ✅.𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐16
┣ ✅.𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐18
┣ ✅.𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐20
┣ ✅.𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐22
┣ ✅.𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐00
┣ ✅.𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐𝒗𝒔
┣ ✅.𝒇𝒆𝒎8𝒗𝒔8
┣ ✅.𝒇𝒆𝒎12𝒗𝒔12
┣ ✅.𝒇𝒆𝒎16𝒗𝒔16
┣ ✅.𝒇𝒆𝒎𝒊𝒏𝒕𝒆𝒓𝒏𝒂4
┣ ✅.𝒇𝒆𝒎𝒊𝒏𝒕𝒆𝒓𝒏𝒂6
┗━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '🚀𝑬𝒍 𝒎𝒆𝒏𝒖 𝒕𝒊𝒆𝒏𝒆𝒏 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓, 𝒑𝒐𝒓𝒇𝒂𝒗𝒐𝒓 𝒖𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 .𝒐𝒘𝒏𝒆𝒓 𝒚 𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒕𝒆 𝒄𝒐𝒏 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓\n\n.𝘳𝘦𝘱𝘰𝘳𝘵𝘦 <𝘵𝘦𝘹𝘵𝘰>', m);
  }
};
handler.command = /^(menulistasfem|menúlistasfem|memulistasfem)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
