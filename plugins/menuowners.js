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
    const str = `     ┣ *𝑴𝑬𝑵𝑼 𝑯𝒀𝑷𝑬𝑹𝑿𝑮𝑬𝑹𝑨𝑳* ┫
┏━━━━━━━━━━━┓
┣ *🧸❤️‍🩹𝑯𝒚𝒑𝒆𝒓𝑿𝑮𝒆𝒓𝒂𝒍 𝒕𝒆 𝒔𝒂𝒍𝒖𝒅𝒂* @${m.sender.split`@`[0]}
┣ 
┣ 🚀𝑪𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝑯𝒚𝒑𝒆𝒓𝑿𝑮𝒆𝒓𝒂𝒍 𝑶𝒘𝒏𝒆𝒓:
┣ ✅.𝒋𝒐𝒊𝒏 𝒆𝒏𝒍𝒂𝒄𝒆
┣ ✅.𝒖𝒏𝒆𝒕𝒆 𝒆𝒏𝒍𝒂𝒄𝒆
┣ ✅.𝒅𝒂𝒓𝒅𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┣ ✅.𝒅𝒂𝒓𝒙𝒑 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┣ ✅.𝒅𝒂𝒓𝒄𝒐𝒊𝒏𝒔 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┣ ✅.𝒂𝒅𝒅𝒑𝒓𝒆𝒎 @𝒖𝒔𝒆𝒓 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┣ ✅.𝒂𝒅𝒅𝒑𝒓𝒆𝒎2 @𝒖𝒔𝒆𝒓 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┣ ✅.𝒂𝒅𝒅𝒑𝒓𝒆𝒎3 @𝒖𝒔𝒆𝒓 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┣ ✅.𝒂𝒅𝒅𝒑𝒓𝒆𝒎4 @𝒖𝒔𝒆𝒓 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┣ ✅.𝒊𝒅𝒊𝒐𝒎𝒂 𝒍𝒂𝒏𝒈𝒖𝒂𝒋𝒆
┣ ✅.𝒄𝒂𝒋𝒂𝒇𝒖𝒆𝒓𝒕𝒆
┣ ✅.𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒓 𝒕𝒆𝒙𝒕𝒐
┣ ✅.𝒃𝒓𝒐𝒂𝒅𝒄𝒂𝒔𝒕𝒄𝒉𝒂𝒕 𝒕𝒆𝒙𝒕𝒐
┣ ✅.𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒓𝒑𝒗 𝒕𝒆𝒙𝒕𝒐
┣ ✅.𝒃𝒓𝒐𝒂𝒅𝒄𝒂𝒔𝒕𝒈𝒄 𝒕𝒆𝒙𝒕𝒐
┣ ✅.𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒓𝒈𝒓𝒖𝒑𝒐𝒔 𝒕𝒆𝒙𝒕𝒐
┣ ✅.𝒃𝒐𝒓𝒓𝒂𝒓𝒕𝒎𝒑
┣ ✅.𝒅𝒆𝒍𝒆𝒙𝒑 @𝒖𝒔𝒆𝒓
┣ ✅.𝒅𝒆𝒍𝒐𝒑𝒕𝒊𝒎𝒖𝒔𝒄𝒐𝒊𝒏𝒔 @𝒖𝒔𝒆𝒓
┣ ✅.𝒅𝒆𝒍𝒅𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔 @𝒖𝒔𝒆𝒓
┣ ✅.𝒓𝒆𝒊𝒏𝒊𝒄𝒊𝒂𝒓
┣ ✅.𝒖𝒑𝒅𝒂𝒕𝒆
┣ ✅.𝒂𝒅𝒅𝒑𝒓𝒆𝒎 +𝒑𝒓𝒆𝒎 @𝒖𝒔𝒆𝒓
┣ ✅.𝒅𝒆𝒍𝒑𝒓𝒆𝒎 -𝒑𝒓𝒆𝒎 @𝒖𝒔𝒆𝒓
┣ ✅.𝒍𝒊𝒔𝒕𝒂𝒑𝒓𝒆𝒎𝒊𝒖𝒎
┣ ✅.𝒂ñ𝒂𝒅𝒊𝒓𝒅𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔 @𝒖𝒔𝒆𝒓 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┣ ✅.𝒂ñ𝒂𝒅𝒊𝒓𝒙𝒑 @𝒖𝒔𝒆𝒓 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
┣ ✅.𝒂ñ𝒂𝒅𝒊𝒓𝒄𝒐𝒊𝒏𝒔 @𝒖𝒔𝒆𝒓 𝒄𝒂𝒏𝒕𝒊𝒅𝒂𝒅
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
handler.command = /^(menuowners|menúowners|memuowners)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
