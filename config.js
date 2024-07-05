const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_42_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDg1LFxuICAgICAgICA0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDczLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDc2LFxuICAgICAgICAzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTksXG4gICAgICAgIDY2LFxuICAgICAgICA4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTksXG4gICAgICAgIDc0LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc0LFxuICAgICAgICA0MixcbiAgICAgICAgOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDk0LFxuICAgICAgICA3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDM1LFxuICAgICAgICAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDY2LFxuICAgICAgICA1MixcbiAgICAgICAgMTQzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPRmx5OHdWQ0Z0ZFREODhMUHAzNTdEVytrb3l5cjFycStyODU3dm1KaDR3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODY3MDQyOTI1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjhCMURCMzU0M0M0MkYyNDQyOENBNkYwNTY2NzY0MUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTc5NzU2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdUVjZPOE5nU1FDaDdVbUtuYzdHV3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTlkNzQ0ZTItYmQxNy00YjFkLTk4MWUtZmM2ODE4NGY1ZDRlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDE5NCxcbiAgICAgIDE4MCxcbiAgICAgIDIxNCxcbiAgICAgIDExNixcbiAgICAgIDEwMyxcbiAgICAgIDE2OCxcbiAgICAgIDUyLFxuICAgICAgODcsXG4gICAgICAxNzIsXG4gICAgICAxOTksXG4gICAgICAyMzEsXG4gICAgICAyNDYsXG4gICAgICA2LFxuICAgICAgMTk3LFxuICAgICAgNjgsXG4gICAgICAxNjUsXG4gICAgICAyNixcbiAgICAgIDIwOSxcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMixcbiAgICAgIDE1NyxcbiAgICAgIDY4LFxuICAgICAgMTQsXG4gICAgICA5LFxuICAgICAgMTksXG4gICAgICAxOTAsXG4gICAgICAxMjgsXG4gICAgICAxMjIsXG4gICAgICAyMzAsXG4gICAgICA5OSxcbiAgICAgIDEyMCxcbiAgICAgIDYzLFxuICAgICAgMjM2LFxuICAgICAgMTY0LFxuICAgICAgMTcsXG4gICAgICAxODUsXG4gICAgICAyNTMsXG4gICAgICA2OSxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFONDVKMjFFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTg2NzA0MjkyNTI6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2NTk0NDY2MDE4MTE0NjoxNUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLinrPhtLnhtL/CsOGthOC8kuC8uvCfhaHwn4Wk8J+Fn/CfhZDwn4Wc4Ly74LyS4L+QXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1ROdGFNRUVLVzRuN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwWTA3eHdQSmlXQ0lsUW5VZ1hqNWZOV0FlOXNiRTZYRGVkTnE1T0phMWdBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInV2L1lPc0ViSDg5ZTN0QWV4bFA5dFkyNWk1VFBET05veVlMRXM5SDdoN0ZLZGYvZE5qOHJZd1psS2VNakF4dnZHTlFONUNyOWN4V1lRVmt4Z3YrU0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktVOWpJTWx1THA5ZW9rdm56SVNoREFnK1F2T2ZUWUxxZ044c3RKZWVNRFQ0bXpJMHpqTWJrbXlKN29pdGp1TVdGSkVzV0poYWFsTVpESXZzUGU0WER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODY3MDQyOTI1MjoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxNzk3NTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIMUlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUgxSS5qc29uIjogIntcImtleURhdGFcIjpcIndJayt6RnkwM0EzYW1mUlh1OEkxamhKOU9FWUh1SzZBeUFtZ0x5KzQ4bVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE0ODAyMDM4OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMTc5NzU1MDcwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
