const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348099711133";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_20_15_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NixcbiAgICAgICAgODcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE2LFxuICAgICAgICA0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM0LFxuICAgICAgICA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMixcbiAgICAgICAgMTU5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU0LFxuICAgICAgICA0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMjM0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgODMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAzNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTksXG4gICAgICAgIDI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MixcbiAgICAgICAgMjUxLFxuICAgICAgICA5NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjExLFxuICAgICAgICAzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDg1LFxuICAgICAgICA3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieUN0VDRNc0JJd2J4ejBoUmZHb1ZwcVFJcFpkRFRNNEVYZXdKbnFPNGszST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiczlJWnVYc0VTaTZkaTl5YXR3Y1NHUVwiLFxuICBcInBob25lSWRcIjogXCI5Zjg2ZjNlYy1iYTRkLTQyMGMtYWEwNi03NzZkMzg3YTQyNGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE4LFxuICAgICAgOCxcbiAgICAgIDEyOCxcbiAgICAgIDExNyxcbiAgICAgIDE5MyxcbiAgICAgIDk2LFxuICAgICAgMTQyLFxuICAgICAgMjA5LFxuICAgICAgMjI0LFxuICAgICAgMjM0LFxuICAgICAgNjQsXG4gICAgICAxNCxcbiAgICAgIDE4NSxcbiAgICAgIDE0MixcbiAgICAgIDIxNyxcbiAgICAgIDE0NSxcbiAgICAgIDIzNSxcbiAgICAgIDEzNixcbiAgICAgIDE0MSxcbiAgICAgIDE5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAxLFxuICAgICAgNzAsXG4gICAgICAyNTQsXG4gICAgICAxNzksXG4gICAgICAxNzAsXG4gICAgICA3OSxcbiAgICAgIDE3OSxcbiAgICAgIDEzLFxuICAgICAgMTU2LFxuICAgICAgMTc2LFxuICAgICAgMTk5LFxuICAgICAgMTU0LFxuICAgICAgMjUsXG4gICAgICAyNDYsXG4gICAgICAxNzYsXG4gICAgICAxMTcsXG4gICAgICAxNjEsXG4gICAgICA3OSxcbiAgICAgIDU4LFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVdpN0xZUEVNeXZ0N2NHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIybVR4V2YxUWVreHZ2ZlpqTHNiVHN1K095RGN0MWNVU29FY096cE4rSFRVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImh0djUyYWJPWURQamNDRmJKRUJZT2pWS1RpSUo4dXZvUmV1OXVRamJjemZLaDFXOEI3SGRPRiswTnpqY0NHMCtSNmdZVVUzMEw1VHZVQUhwYmlMQ2hRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImovWnUzaUVCeG4rODJhUUc5Q0pBSjVSNmdaUlVBK24zUUdscVEvaVRRaVpEWEhaTFl6SE9Pcng4U3J1SFZpNENyWW9kc0RRRTY4a3BsZ2dkRXdyNkJRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA5OTcxMTEzMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTmF6aXJhIEFiZHVsa2FyaW0gRXNxXCIsXG4gICAgXCJsaWRcIjogXCI1NzAyNDQ4MjE3NzI1MToyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA5OTcxMTEzMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2ODYzMzEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVIxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNUjEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVaFh1WHVMMUY3OG95YlJIVzlqblRKcXhZdWNYbmNrTitjOXZFVkU4WjlvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxNDE1NTE5NDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjc1NjY0MDUwNVwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
