const crypto = require('node:crypto');
const names = ['El Gallo','El Diablito','La Dama','El Catrín','El Paraguas','La Sirena','La Escalera','La Botella','El Barril','El Árbol','El Melón','El Valiente','El Gorrito','La Muerte','La Pera','La Bandera','El Bandolón','El Violoncello','La Garza','El Pájaro','La Mano','La Bota','La Luna','El Cotorro','El Borracho','El Negrito','El Corazón','La Sandía','El Tambor','El Camarón','Las Jaras','El Músico','La Araña','El Soldado','La Estrella','El Cazo','El Mundo','El Apache','El Nopal','El Alacrán','La Rosa','La Calavera','La Campana','El Cantarito','El Venado','El Sol','La Corona','La Chalupa','El Pino','El Pescado','La Palma','La Maceta','El Arpa','La Rana'];
const emojis = ['🐓','😈','💃','🎩','☂️','🧜‍♀️','🪜','🍾','🛢️','🌳','🍈','🤺','🧢','💀','🍐','🇲🇽','🎸','🎻','🪿','🐦','✋','🥾','🌙','🦜','🍺','🥁','❤️','🍉','🥁','🦐','🏹','🎺','🕷️','🪖','⭐','🍲','🌎','🪶','🌵','🦂','🌹','☠️','🔔','🏺','🦌','☀️','👑','🛶','🌲','🐟','🌴','🪴','🎼','🐸'];
const CARDS = names.map((name,i)=>({id:i+1,name,emoji:emojis[i]}));
const PATTERNS = {line:'Una línea',corners:'Cuatro esquinas',full:'Cartón lleno'};
function shuffle(xs){const a=[...xs];for(let i=a.length-1;i>0;i--){const j=crypto.randomInt(i+1);[a[i],a[j]]=[a[j],a[i]];}return a;}
function board(){return shuffle(CARDS.map(c=>c.id)).slice(0,16);}
function wins(ids,marks,pattern){
 const s=new Set(marks),has=idx=>idx.every(i=>s.has(ids[i]));
 if(pattern==='full')return ids.every(i=>s.has(i));
 if(pattern==='corners')return has([0,3,12,15]);
 if(pattern!=='line')return false;
 for(let i=0;i<4;i++)if(has([4*i,4*i+1,4*i+2,4*i+3])||has([i,i+4,i+8,i+12]))return true;
 return has([0,5,10,15])||has([3,6,9,12]);
}
const roomCode=()=>crypto.randomBytes(3).toString('hex').toUpperCase();
const token=()=>crypto.randomBytes(24).toString('hex');
const cleanName=n=>typeof n==='string'?n.trim().replace(/\s+/g,' ').slice(0,26):'';
module.exports={CARDS,PATTERNS,shuffle,board,wins,roomCode,token,cleanName};
