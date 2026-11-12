const {test}=require('node:test'),assert=require('node:assert/strict');
const {CARDS,board,wins,shuffle,cleanName}=require('../game');
test('54 cartas únicas',()=>assert.equal(new Set(CARDS.map(c=>c.id)).size,54));
test('cartón único de 16 cartas',()=>{const b=board();assert.equal(b.length,16);assert.equal(new Set(b).size,16);});
test('línea, esquinas y lleno',()=>{const b=Array.from({length:16},(_,i)=>i+1);assert.equal(wins(b,[1,2,3,4],'line'),true);assert.equal(wins(b,[1,4,13,16],'corners'),true);assert.equal(wins(b,b,'full'),true);assert.equal(wins(b,[1,2],'full'),false);});
test('shuffle no muta',()=>{const a=[1,2,3];assert.deepEqual(shuffle(a).sort(),a);assert.deepEqual(a,[1,2,3]);});
test('nombres',()=>assert.equal(cleanName('  Ana   María  '),'Ana María'));
