'use server';

const SYSTEM_INSTRUCTION = `You are a Personal Styling Consultant for Henna Craft - warm, sophisticated, and culturally aware.

PERSONALITY & TONE:
- Mix sophisticated English with warm Bengali phrases
- Use cultural phrases: "উৎসবের আমেজ", "মেহেদির রঙে সাজুক আপনার দিন", "শুভ উৎসব"
- Be proactive - ask questions to understand their needs
- Use emojis: ✨🌿💍🤎🎉

PROACTIVE QUESTIONS TO ASK:
1. "What's the occasion?" (wedding, festival, party)
2. "Do you prefer heavy or minimal designs?"
3. "Which body part?" (hands, feet, arms)
4. "When is your event?" (to calculate timing)
5. "Have you used henna before?"

SMART TIMELINE ADVISOR:
- Henna color peaks in 48 hours
- Recommend booking 2 days before main event
- Example: "বিয়ে শনিবার? বৃহস্পতিবার মেহেদী করান!"
- Explain: "Palms get darkest color, feet take longer to darken"

BODY PART SPECIFIC TIPS:
- Palms: Darkest color, lasts 1-2 weeks
- Feet: Takes 48+ hours to darken fully
- Arms: Medium darkness, elegant for parties
- Back of hands: Lighter than palms

CONVERSATIONAL BOOKING:
- Collect name naturally: "May I know your name?"
- Ask event date: "When is the special day?"
- Provide booking summary at end with all details
- Format: "📋 Booking Summary:\nName: [name]\nEvent: [date]\nPackage: [type]"

PACKAGE RECOMMENDATIONS:
Based on occasion:
- Wedding/Bridal → Bridal Package (1500 BDT) 💍
- Festival/Eid → Occasional Package (800 BDT) 🎉
- Party/Simple → Custom Design (1000+ BDT) ✨

Based on preference:
- Heavy/Intricate → Bridal
- Minimal/Modern → Custom
- Traditional → Occasional or Bridal

STAIN (RANG) EDUCATION:
- Fresh henna: Orange-brown
- After 12 hours: Reddish-brown
- After 24 hours: Dark brown
- After 48 hours: DARKEST (peak color) 🤎
- Lasts: 1-2 weeks naturally

WHY ORGANIC MATTERS:
- Chemical cones fade in 3-4 days
- Our organic henna: 1-2 weeks
- Safe for sensitive skin, children, pregnant women
- No PPD, no allergies

CULTURAL WARMTH:
- "আপনার বিশেষ দিনটি আরও সুন্দর হোক মেহেদির রঙে"
- "উৎসবের আমেজ বাড়ুক আমাদের অর্গানিক মেহেদীতে"
- "মেহেদির সুগন্ধে ভরে উঠুক আপনার হাত"

LEAD CAPTURE:
After understanding needs, say:
"Would you like me to arrange a free consultation? Share your number and our artist will call you! 📱"

YOUR ROLE:
Be a helpful stylist who guides, educates, and books. Always ask follow-up questions!`;

const RESPONSES = {
  greeting_en: `Hello! Welcome to Henna Craft! ✨ I'm your personal styling consultant.

মেহেদির রঙে সাজুক আপনার দিন! 🌿

Tell me, what brings you here today? Is it for a wedding, festival, or a special celebration? 💍🎉`,

  greeting_bn: `হ্যালো! Henna Craft এ স্বাগতম! ✨ আমি আপনার পার্সোনাল স্টাইলিং কনসালট্যান্ট।

আপনার মেহেদির রঙে সাজুক আপনার দিন! 🌿

বলুন তো, আজ কী উপলক্ষে এসেছেন? বিয়ে, উৎসব, নাকি কোনো বিশেষ অনুষ্ঠান? 💍🎉`,

  bridal_consultant: `Ah, a wedding! How exciting! 💍✨ উৎসবের আমেজ!

Let me help you choose the perfect bridal henna:

💰 **Bridal Package: 1500 BDT**
📦 Full hand & feet, intricate designs, 2-3 hours
🤎 Darkest, longest-lasting stain

⏰ **Timeline Tip:** Book 2 days BEFORE your wedding!
Why? Henna reaches peak darkness in 48 hours. Wedding on Saturday? Book Thursday! 

🌿 **Body Part Magic:**
- Palms: Darkest color (best for photos!)
- Feet: Takes 48+ hours to fully darken
- Both together: Complete bridal look

Tell me:
1. When is your wedding date? 📅
2. Do you prefer heavy traditional or modern fusion designs?

I'll create the perfect plan for you! ✨`,

  aftercare_consultant: `Let me share the SECRET formula for the DARKEST stain! 🤎✨

**The 48-Hour Journey:**
- Fresh: Orange-brown (don't panic!)
- 12 hours: Reddish-brown
- 24 hours: Dark brown
- 48 hours: DARKEST! (Peak color) 🌟

**Body Part Differences:**
🤲 Palms: Get darkest fastest (warmest part)
🦶 Feet: Take longer (cooler temperature)
💪 Arms: Medium darkness

**Secret Tips:**
⏰ Keep 8+ hours (overnight best!)
🔥 লং এর ধোঁয়া (clove steam) - game changer!
💧 সরিষার তেল after removing
🚫 No soap 24 hours

**Why Our Organic Henna:**
Chemical cones: 3-4 days only
Our organic: 1-2 weeks naturally! 🌿

Which body part are you planning to decorate? I'll give you specific tips! 💍`,

  timeline_advisor: `Let me be your timeline expert! ⏰✨

**The 48-Hour Rule:**
Henna doesn't reach peak color immediately. It's a beautiful journey:

📅 **Perfect Booking Timeline:**
- Main event: Saturday
- Book henna: Thursday
- Peak color: Saturday (your big day!)

**Why 48 hours?**
- Henna oxidizes with air
- Color deepens naturally
- Palms darken faster than feet

**Real Example:**
"বিয়ে শনিবার? বৃহস্পতিবার মেহেদী করান! রঙ হবে একদম পারফেক্ট!" 💍

When is your special event? Let me calculate the perfect booking date for you! 📱`,

  package_recommendation: `Let me recommend the PERFECT package for you! ✨

First, tell me:
1️⃣ What's the occasion? (Wedding/Festival/Party)
2️⃣ Heavy or minimal design preference?
3️⃣ Which body parts? (Hands/Feet/Both)

**Quick Guide:**
💍 **Bridal (1500 BDT):** Full coverage, intricate, 2-3 hours
🎉 **Occasional (800 BDT):** Festival-ready, beautiful, 1-2 hours
✨ **Custom (1000+ BDT):** Your unique style, flexible

Once you tell me, I'll suggest the best fit! উৎসবের আমেজ বাড়ুক! 🌿`,

  booking_summary: `Perfect! Let me create your booking summary! 📋✨

Before I do, I need:
1. Your name? 
2. Event date?
3. Preferred package?

Once you share these, I'll prepare:
📋 **Your Booking Summary**
✅ Best booking date (48 hours before event)
✅ Package details
✅ Aftercare tips
✅ Contact for confirmation

Share your details and let's make your day special! মেহেদির রঙে সাজুক আপনার দিন! 💍`,

  default: `Hello! ✨ I'm your personal henna styling consultant!

আপনার মেহেদির রঙে সাজুক আপনার দিন! 🌿

I can help you with:
💍 Perfect package selection
⏰ Timeline planning (48-hour rule!)
🤎 Stain secrets & body part tips
📱 Booking & consultation

What would you like to know? Ask me anything! 😊`
};

function detectLanguage(message) {
  const bengaliPattern = /[\u0980-\u09FF]/;
  return bengaliPattern.test(message) ? 'bn' : 'en';
}

function findBestResponse(userMessage) {
  const message = userMessage.toLowerCase();
  const lang = detectLanguage(userMessage);
  
  if (message.includes('hello') || message.includes('hi') || message.includes('হ্যালো') || 
      message.includes('হাই') || message.includes('hey')) {
    return lang === 'bn' ? RESPONSES.greeting_bn : RESPONSES.greeting_en;
  }
  
  if (message.includes('bridal') || message.includes('wedding') || message.includes('বিয়ে') || 
      message.includes('ব্রাইডাল') || message.includes('package')) {
    return RESPONSES.bridal_consultant;
  }
  
  if (message.includes('aftercare') || message.includes('secret') || message.includes('darker') || 
      message.includes('stain') || message.includes('rang') || message.includes('রঙ') ||
      message.includes('আফটারকেয়ার') || message.includes('গাঢ়')) {
    return RESPONSES.aftercare_consultant;
  }
  
  if (message.includes('when') || message.includes('timeline') || message.includes('book') || 
      message.includes('48') || message.includes('hour') || message.includes('কখন')) {
    return RESPONSES.timeline_advisor;
  }
  
  if (message.includes('recommend') || message.includes('suggest') || message.includes('which') || 
      message.includes('choose') || message.includes('পরামর্শ') || message.includes('কোনটা')) {
    return RESPONSES.package_recommendation;
  }
  
  if (message.includes('summary') || message.includes('confirm') || message.includes('book now')) {
    return RESPONSES.booking_summary;
  }
  
  return RESPONSES.default;
}

export async function sendChatMessage(userMessage) {
  console.log('\n========================================');
  console.log('=== PERSONAL STYLING CONSULTANT ===');
  console.log('========================================');
  console.log('User message:', userMessage);
  console.log('Language detected:', detectLanguage(userMessage));
  
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  const response = findBestResponse(userMessage);
  
  console.log('Response type: Personal consultation');
  console.log('Response preview:', response.substring(0, 50) + '...');
  console.log('=== SUCCESS ===\n');
  
  return {
    success: true,
    message: response
  };
}
