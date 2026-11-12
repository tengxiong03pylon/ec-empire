import {test} from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
test('defines exactly eight entrepreneur career pathways',()=>{const src=readFileSync('src/game.ts','utf8');const pathwaySrc=src.split('export const paths:Pathway[]=')[1].split('export const cards:Card[]=')[0];const ids=[...pathwaySrc.matchAll(/\{id:'(startup|acquisition|franchise|innovation|corporate|social|partner|investor)',name:/g)];assert.equal(ids.length,8)});
test('net-worth formula counts liabilities once',()=>{const src=readFileSync('src/game.ts','utf8');assert.match(src,/g\.cash\+g\.value\*g\.ownership-g\.debt/)});
test('game ends after 10 turns',()=>{const src=readFileSync('src/game.ts','utf8');assert.match(src,/MAX_TURNS=10/);assert.match(src,/g\.turn>=MAX_TURNS/)});
test('only public anon key is used by frontend',()=>{const src=readFileSync('src/App.tsx','utf8');assert.doesNotMatch(src,/SERVICE_ROLE|service_role|SUPABASE_SECRET_KEY/)});
