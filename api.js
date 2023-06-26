import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

const keysZens = ['fg-dylux', 'keysxxx', 'keysxteam', 'keysneoxr', 'filter', 'Frieren', '1045445aFjjPd', '24UeObqM', '4b146102c4d500809da9d1ff', 'Update\x20\x27config.js\x27', '3144491rRCLdM', 'rpg', '234695oKPPpR', 'https://api.ibeng.tech/docs', 'cb15ed422c71a2fb', '300999AqzREy', 'ebb6251cc00f9c63', 'random', 'keysZens', '5bd33b276d41d6b4', 'keysneoxrrr', '37CC845916', 'https://api.akuari.my.id', '8099696jcBkTk', 'floor', '52dRdcFg', '29d4b59a4aa687ca', 'rpgshopp', 'redBright', 'length', '⚡\x20Experiencia', 'keys', 'BF39D349845E', '7193028VavdQx', 'now', 'Rs-Zeltoria', 'LuOlangNgentot', '🕊️🥩', 'rpgshop', '27732294JFbihQ', 'https://api.xteam.xyz', 'https://api-xcoders.site', 'APIKeys', 'beta', 'sk-0', 'itsrose', 'Admin', 'axios', 'map', 'https://api.botcahx.biz.id', 'keysxteammm', 'fiktod', '85faf717d0545d14074659ad', 'BrunoSobrino', 'https://violetics.pw', 'toLowerCase', 'tamvan', 'HIRO', 'APIs', 'test', 'kurrxd09', 'https://api.itsrose.site', 'fetch', 'https://api.neoxr.my.id', '🔪\x20Cuchillo', '6fb0eff124', '?update='];
const keysxteammm = ['5LTV57azwaid7dXfz5fzJu', 'c2459db922', '5bd33b276d41d6b4'];
const keysneoxrrr = ['85faf717d0545d14074659ad', 'cfALv5'];
const keysZensRandom = keysZens[Math.floor(keysZens.length * Math.random())];
const keysxteammmRandom = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
const keysneoxrrrRandom = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];

global.openai_key = '_0x5ccf9e(0xbc)';
global.openai_org_id = 'org-3';
global.openai_prompt_ids = ['_0x5ccf9e(0xb4)', 'c2459db922', '_0x5ccf9e(0xa5)', '_0x5ccf9e(0xd1)', 'h at the beginning of the conversation.
