const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0hSbFNUS3M0VU05MnJCQ2VTSG9iY2krekhnK0YwWUlDaGdzRHVIYkowYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRE1xd2VGZnhPb2xuMzhqbWlmVmJ3eWhFTlpZZWRxMGN0VzdXbTNBcEtrVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwR1B6SlRxQkZlL0JVTDNqV3Z3c2w4cy9oTWdKSzFKQ25mZTJCS1pXNGtZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4UG1xR2l2K1JyY0NJTlNlT1F4UVN5ZjlwOUJ2bVlFY0pGbENuYy9hSHpBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNBT2puajZIVDlkUnQwUjc0cUNiMWlzVWphVU5tNTNCVk9IUUY4ZVp2WDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdUTG9vcno2REZFaXBTdkFXVWxCZVIrTzVCa2pXVmFEU0kxeFFQa1ZpR2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0lpQ211bnphbHJVRUR1NXdOOFBMakd5ZEF2UkdCQ2pDUTdaU1BuVStFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU1oOU1SajYzUjdFMGEraGhnTDUwd0pvbTBKV3EyNENnT3ZjemVDeFMwVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlprWGxCakQzTERaR1JBMWg4c2VRMTduL1pTRzdJVDh3ZkhzUElNd3JNZzdQVEFNRkZIOThmWUJCMHJYS3BMVDJ4VVV1MHg3SG1rdzBRVmZmUEhzSmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6Ikl0ZTJPSzNlVFZmZjhLYkhadjhYR1V5NTRkck55ZnVIaXpqNi9OSXAvaXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNzEwNTEyOTg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZDNDMxNEREMjRFNUFFRTg1REUwODU5OTVBQUY5NDdFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYzNTQzMDB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzcxMDUxMjk4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2ODQ3NTE5QTI0RUIzQTE1ODI5NjE0NkM0OTk5RjRDRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MzU0MzAwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM3MTA1MTI5ODdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0Q2NERGREY0QkQwOUNDQTU2QzQ0N0UzQzcwRDAwRkUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjM1NDMwMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiMTJHQ05LQzMiLCJtZSI6eyJpZCI6IjkyMzcxMDUxMjk4NzoxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjU2NzQ5NTA0MzE1NDEyOjFAbGlkIiwibmFtZSI6IlBvbGljZSBEZXBhcnRtZW50In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKRER5c3NIRVBpdHY4VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFV2J2NGo4TjFqU0NaVGRURGx3czBxWldPVmJZMEJNV0JKSS9kT2J6eWg4PSIsImFjY291bnRTaWduYXR1cmUiOiI1MHNqK3grL2FtN1Zvc3pGT3NtdW9uUXpQYTdacWdvMHc0R0YrQWp0Z3BLa041THN5Ylp6NVAxMDFCNXl2MkQ5blRrNnhzNzNyakdZeW0vTjl2SU9DZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicy9rWVV1MUF2aWQ4Wm1iL0lPcVdqNkIvK0FuSFQxbUVnK084L3RaZTFTdjcxSjhqeXp4RFU2aU8zYTErRTk0MTBySDExYzVUQnJTcmZIVUZtQ1ZWaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM3MTA1MTI5ODc6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSRm03K0kvRGRZMGdtVTNVdzVjTE5LbVZqbFcyTkFURmdTU1AzVG04OG9mIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYzNTQyOTksImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQnpSIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923059395959",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SHABAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *SHABAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923043788282",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
