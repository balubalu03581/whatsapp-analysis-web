// function parseChat(text) {
//     const lines = text.split(/\r?\n/); // better newline handling
//     console.log("🧾 Total lines:", lines.length);
  
//     const messagesPerDay = {};
//     const topContacts = {};
//     const emojiUsage = {};
//     const activeHours = {};
  
//     const emojiRegex = /\p{Emoji}/gu;
  
//     for (let i = 0; i < lines.length; i++) {
//       const line = lines[i].trim();
//       if (!line) continue;
  
//       console.log(`\n📄 Line ${i + 1}:`, line);
  
//       const match = line.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4}),\s(\d{1,2}):(\d{2})\s(AM|PM)\s-\s([^:]+):\s(.+)$/);
//       if (!match) {
//         console.log(`❌ Line ${i + 1} does not match expected format.`);
//         continue;
//       }
  
//       const [, day, month, year, hourRaw, minutes, meridian, sender, message] = match;
  
//       let hour = parseInt(hourRaw, 10);
//       if (meridian === 'PM' && hour !== 12) hour += 12;
//       if (meridian === 'AM' && hour === 12) hour = 0;
  
//       const formattedDate = `${month.padStart?.(2, '0')}/${day.padStart?.(2, '0')}/${year}`;
//       const date = new Date(formattedDate).toDateString();
  
//       console.log(`✅ Parsed ➤ Date: ${date}, Hour: ${hour}, Sender: ${sender}, Message: "${message}"`);
  
//       // Count messages per day
//       messagesPerDay[date] = (messagesPerDay[date] || 0) + 1;
  
//       // Count messages per sender
//       topContacts[sender] = (topContacts[sender] || 0) + 1;
  
//       // Count emojis
//       const emojis = message.match(emojiRegex) || [];
//       if (emojis.length > 0) {
//         console.log(`✨ Emojis:`, emojis);
//       }
//       emojis.forEach(e => {
//         emojiUsage[e] = (emojiUsage[e] || 0) + 1;
//       });
  
//       // Count active hours
//       activeHours[hour] = (activeHours[hour] || 0) + 1;
//     }
  
//     console.log("\n📊 Final Output:");
//     console.log("Messages Per Day:", messagesPerDay);
//     console.log("Top Contacts:", topContacts);
//     console.log("Emoji Usage:", emojiUsage);
//     console.log("Active Hours:", activeHours);
  
//     return { messagesPerDay, topContacts, emojiUsage, activeHours };
//   }
  
//   module.exports = { parseChat };
  




  function parseChat(text) {
    const lines = text.split(/\r?\n/);
  
    const messagesPerDay = {};
    const topContacts = {};
    const emojiUsage = {};
    const activeHours = {};
  
    const emojiRegex = /\p{Emoji}/gu;
    const linkRegex = /https?:\/\/\S+/gi;
  
    // Group stats
    let totalMessages = 0;
    let totalMedia = 0;
    let totalPhotos = 0;
    let totalVideos = 0;
    let totalLinks = 0;
  
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
  
      const match = line.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4}),\s(\d{1,2}):(\d{2})\s(AM|PM)\s-\s([^:]+):\s(.+)$/);
      if (!match) continue;
  
      const [, day, month, year, hourRaw, minutes, meridian, sender, message] = match;
  
      let hour = parseInt(hourRaw, 10);
      if (meridian === 'PM' && hour !== 12) hour += 12;
      if (meridian === 'AM' && hour === 12) hour = 0;
  
      const formattedDate = `${month.padStart?.(2, '0')}/${day.padStart?.(2, '0')}/${year}`;
      const date = new Date(formattedDate).toDateString();
  
      totalMessages++;
      messagesPerDay[date] = (messagesPerDay[date] || 0) + 1;
      topContacts[sender] = (topContacts[sender] || 0) + 1;
  
      // Emojis
      const emojis = message.match(emojiRegex) || [];
      emojis.forEach(e => {
        emojiUsage[e] = (emojiUsage[e] || 0) + 1;
      });
  
      // Active hours
      activeHours[hour] = (activeHours[hour] || 0) + 1;
  
      // Media detection
      const lowerMsg = message.toLowerCase();
      if (
        lowerMsg.includes('<media omitted>') ||
        lowerMsg.includes('image omitted') ||
        lowerMsg.includes('photo omitted')
      ) {
        totalMedia++;
        totalPhotos++;
      }
  
      if (
        lowerMsg.includes('video omitted')
      ) {
        totalMedia++;
        totalVideos++;
      }
  
      // Links
      const links = message.match(linkRegex);
      if (links && links.length > 0) {
        totalLinks += links.length;
      }
    }
  
    const groupStats = {
      totalMessages,
      totalMedia,
      totalPhotos,
      totalVideos,
      totalLinks
    };
  
    return {
      messagesPerDay,
      topContacts,
      emojiUsage,
      activeHours,
      groupStats
    };
  }
  
  module.exports = { parseChat };
  