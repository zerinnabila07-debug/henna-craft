'use server';

import { GoogleGenAI } from '@google/genai';

const HENNA_CRAFT_KNOWLEDGE_BASE = `You are the "Henna Craft Assistant" - an expert AI consultant for Henna Craft, a premium henna artistry service in Dhaka, Bangladesh.

═══════════════════════════════════════════════════════════
IDENTITY & ROLE
═══════════════════════════════════════════════════════════
• Name: Henna Craft Assistant
• Company: Henna Craft (Est. 2020)
• Location: Dhaka, Bangladesh
• Expertise: Organic henna artistry, bridal designs, aftercare guidance
• Tone: Professional, warm, culturally aware, and helpful
• Knowledge Source: Henna Craft Official Database (Updated January 2026)

═══════════════════════════════════════════════════════════
SERVICES & PRICING (January 2026)
═══════════════════════════════════════════════════════════

💍 BRIDAL HENNA: 1500 BDT
   • Full hand & feet coverage (traditional bridal style)
   • Intricate, detailed designs with cultural motifs
   • 2-3 hours professional application
   • Perfect for weddings and major celebrations
   • Most popular package for brides
   • Includes: Pre-wedding consultation, premium henna paste

🎉 OCCASIONAL HENNA: 800 BDT
   • Festival & party designs (Eid, Durga Puja, birthdays, etc.)
   • Beautiful patterns for celebrations
   • Quick application (1-2 hours)
   • Front hands or feet
   • Great for events and gatherings

✨ CUSTOM DESIGNS: Starting from 1000 BDT
   • Personalized artwork tailored to your style
   • Modern, traditional, or fusion designs
   • Price varies by complexity, size, and detail level
   • Arabic, Indian, Pakistani, Moroccan styles available
   • Perfect for unique occasions

═══════════════════════════════════════════════════════════
HENNA QUALITY & SAFETY
═══════════════════════════════════════════════════════════
✓ 100% Organic & Natural
✓ Chemical-Free (No PPD, No Ammonia, No Harmful Additives)
✓ Premium Sojat Henna Leaves (Rajasthan, India - World's Best)
✓ Triple-Filtered with Essential Oils (Lavender, Eucalyptus, Tea Tree)
✓ Safe for ALL: Children, Pregnant Women, Sensitive Skin
✓ Dermatologically Tested
✓ Natural Dark Stain (Lasts 1-2 weeks)
✓ No Allergic Reactions or Side Effects
✓ Fresh paste prepared for each appointment

═══════════════════════════════════════════════════════════
EXPERT AFTERCARE INSTRUCTIONS
═══════════════════════════════════════════════════════════
Follow these steps for the DARKEST, longest-lasting color:

1️⃣ KEEP IT ON: Leave henna paste on for 8+ hours (overnight is BEST)
   • The longer you keep it, the darker the stain
   • Wrap with tissue or cotton cloth to prevent smudging

2️⃣ CLOVE STEAM (লং এর ধোঁয়া): Heat 4-5 cloves on a pan, hold your hands over the steam for 2-3 minutes
   • This is the SECRET to rich, deep color
   • Do this 2-3 times after removing the paste

3️⃣ APPLY MUSTARD OIL (সরিষার তেল): After removing dried paste, apply warm mustard oil
   • Gently massage and let it absorb
   • Helps deepen the color naturally

4️⃣ AVOID WATER & SOAP: No contact with water or soap for 24 hours after removal
   • Water lightens the stain in the first 24 hours
   • Use gloves for washing dishes or cleaning

5️⃣ PEAK COLOR: Henna reaches its darkest shade in 48 hours
   • Be patient! The color develops gradually
   • Starts orange, turns brown, then deep maroon/brown

6️⃣ MAINTENANCE: Apply coconut or olive oil daily to extend the life of your henna

═══════════════════════════════════════════════════════════
BOOKING & TIMELINE ADVICE
═══════════════════════════════════════════════════════════
• Home Service Available: Across Dhaka city (we come to you!)
• Advance Booking: 3-5 days for bridal, 1-2 days for occasional
• Timing Strategy: Book 2 days BEFORE your main event
  Example: Wedding on Saturday? Book henna on Thursday!
  (This gives 48 hours for peak color development)
• Contact Methods: Website booking form or WhatsApp
• What We Bring: All supplies, equipment, and expertise
• Professional, Punctual, Hygienic Service

═══════════════════════════════════════════════════════════
LANGUAGE & COMMUNICATION
═══════════════════════════════════════════════════════════
• Respond in the SAME language the user uses
• English: Professional, warm, clear
• Bengali (বাংলা): Natural, conversational, culturally appropriate
• Banglish: Mix Bengali and English naturally (e.g., "Bridal package ta 1500 BDT")
• Use cultural phrases: "আপনার বিয়ের দিন সুন্দর হোক", "শুভ কামনা রইল"
• Use emojis appropriately: ✨🌿💍🤎🎉

═══════════════════════════════════════════════════════════
CONVERSATION GUIDELINES
═══════════════════════════════════════════════════════════
✓ Remember previous messages in the conversation
✓ Build on earlier context naturally
✓ Be helpful, not pushy about bookings
✓ Provide accurate pricing and information
✓ Offer personalized recommendations based on user needs
✓ If asked about your source: "My information comes from the Henna Craft Official Database"
✓ If unsure about something: Acknowledge and suggest contacting via WhatsApp for specific details
✓ Always maintain a warm, professional, culturally-aware tone

═══════════════════════════════════════════════════════════
YOUR MISSION
═══════════════════════════════════════════════════════════
Help users discover the perfect henna service for their needs, provide expert guidance, and make booking easy and confident. You are their trusted advisor for all things henna!`;

export async function sendChatMessage(userMessage, conversationHistory = []) {
  const timestamp = new Date().toISOString();
  
  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║   GEMINI API REQUEST - @google/genai SDK (January 2026)  ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log(`⏰ Timestamp: ${timestamp}`);
  console.log(`📝 User Message: "${userMessage.substring(0, 80)}${userMessage.length > 80 ? '...' : ''}"`);
  console.log(`📚 Conversation History: ${conversationHistory.length} previous messages`);

  try {
    // Step 1: Validate API Key
    // Note: The new SDK uses GEMINI_API_KEY or GOOGLE_API_KEY
    const apiKey = process.env.GEMINI_API_KEY?.trim() || process.env.GOOGLE_API_KEY?.trim();
    
    if (!apiKey) {
      console.error('❌ CRITICAL ERROR: GEMINI_API_KEY or GOOGLE_API_KEY not found in environment');
      console.error('   Check your .env.local file');
      throw new Error('API_KEY_MISSING');
    }

    if (apiKey.length < 30) {
      console.error('❌ CRITICAL ERROR: API key appears invalid (too short)');
      throw new Error('API_KEY_INVALID');
    }

    console.log('✅ API Key: Validated');

    // Step 2: Initialize Google Gen AI Client (New SDK - @google/genai)
    // Documentation: https://www.npmjs.com/package/@google/genai
    const ai = new GoogleGenAI({ apiKey });
    console.log('✅ GoogleGenAI Client: Initialized');

    // Step 3: Define Model
    // Using gemini-2.5-flash - the stable version as of 2025
    // Available models: gemini-2.5-flash, gemini-2.5-pro, gemini-2.0-flash
    const modelName = 'gemini-2.5-flash';
    console.log(`✅ Model: ${modelName}`);

    // Step 4: Build Conversation History for Chat
    console.log('\n📋 Building Conversation History:');
    const chatHistory = [];

    // Add previous conversation history
    if (conversationHistory.length > 0) {
      console.log(`   ✓ Adding ${conversationHistory.length} previous messages`);
      
      let addedCount = 0;
      conversationHistory.forEach((msg, index) => {
        if (msg.role === 'user' || msg.role === 'assistant') {
          chatHistory.push({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }],
          });
          addedCount++;
          
          const preview = msg.content.substring(0, 40);
          console.log(`   [${index}] ${msg.role}: ${preview}${msg.content.length > 40 ? '...' : ''}`);
        }
      });
      
      console.log(`   ✓ Successfully added ${addedCount} messages to history`);
    } else {
      console.log('   ℹ️  No previous history (first message)');
    }

    console.log(`\n📊 Total History Length: ${chatHistory.length} messages`);

    // Step 5: Create Chat Session using ai.chats.create()
    // The new SDK uses ai.chats.create() for multi-turn conversations
    const chat = ai.chats.create({
      model: modelName,
      history: chatHistory,
      config: {
        // System instruction defines the assistant's behavior
        systemInstruction: HENNA_CRAFT_KNOWLEDGE_BASE,
        // Generation configuration
        temperature: 0.85,        // Balanced creativity
        topK: 40,                 // Diverse token selection
        topP: 0.95,               // Nucleus sampling
        maxOutputTokens: 2048,    // Longer responses
        // Safety settings
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_NONE',
          },
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_NONE',
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_NONE',
          },
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_NONE',
          },
        ],
      },
    });

    console.log('✅ Chat Session: Created with system instruction and history');

    // Step 6: Send User Message using chat.sendMessage()
    console.log('\n📤 Sending message to Gemini API...');
    const startTime = Date.now();
    
    // New SDK uses sendMessage with { message: string } format
    const response = await chat.sendMessage({
      message: userMessage,
    });
    
    // Get the response text
    const aiResponse = response.text;
    
    const endTime = Date.now();
    const responseTime = endTime - startTime;

    console.log(`\n✅ Response Received in ${responseTime}ms`);
    console.log(`📏 Response Length: ${aiResponse.length} characters`);
    console.log(`📝 Preview: ${aiResponse.substring(0, 100)}${aiResponse.length > 100 ? '...' : ''}`);

    console.log('\n╔══════════════════════════════════════════════════════════╗');
    console.log('║                    ✅ SUCCESS                            ║');
    console.log('╚══════════════════════════════════════════════════════════╝\n');

    return {
      success: true,
      message: aiResponse,
      timestamp: timestamp,
      responseTime: responseTime,
      model: modelName,
    };

  } catch (error) {
    console.error('\n╔══════════════════════════════════════════════════════════╗');
    console.error('║                     ❌ ERROR                             ║');
    console.error('╚══════════════════════════════════════════════════════════╝');
    console.error(`\n🔴 Error Type: ${error.constructor.name}`);
    console.error(`🔴 Error Message: ${error.message}`);

    // Detailed Error Diagnosis
    let userFriendlyError = 'Unable to process your message. Please try again.';
    let errorCode = 'UNKNOWN_ERROR';

    if (error.message === 'API_KEY_MISSING') {
      console.error('\n💡 SOLUTION: Add GEMINI_API_KEY or GOOGLE_API_KEY to your .env.local file');
      userFriendlyError = 'Chatbot configuration error. Please contact support.';
      errorCode = 'API_KEY_MISSING';
    } 
    else if (error.message === 'API_KEY_INVALID' || error.message?.includes('API key not valid')) {
      console.error('\n💡 SOLUTION:');
      console.error('   1. Go to: https://aistudio.google.com/app/apikey');
      console.error('   2. Create a NEW API key in a NEW project');
      console.error('   3. Update .env.local with the new key (GEMINI_API_KEY=your_key)');
      console.error('   4. Restart your dev server');
      userFriendlyError = 'Invalid API configuration. Please contact support.';
      errorCode = 'API_KEY_INVALID';
    }
    else if (error.message?.includes('404') || error.message?.includes('not found')) {
      console.error('\n💡 DIAGNOSIS: Model not available for this API key');
      console.error('   The Gemini model is not accessible with your current API key.');
      console.error('\n💡 SOLUTION:');
      console.error('   1. Create a NEW API key at: https://aistudio.google.com/app/apikey');
      console.error('   2. Select "Create API key in new project"');
      console.error('   3. Update your .env.local file');
      userFriendlyError = 'AI service temporarily unavailable. Please try again in a moment.';
      errorCode = 'MODEL_NOT_FOUND';
    }
    else if (error.status === 429 || error.message?.includes('quota') || error.message?.includes('rate limit')) {
      console.error('\n💡 DIAGNOSIS: Rate limit or quota exceeded');
      console.error('   You have made too many requests or exceeded your quota.');
      console.error('\n💡 SOLUTION: Wait a few minutes and try again');
      userFriendlyError = 'Too many requests. Please wait a moment and try again.';
      errorCode = 'RATE_LIMIT_EXCEEDED';
    }
    else if (error.status === 403 || error.message?.includes('permission')) {
      console.error('\n💡 DIAGNOSIS: Permission denied');
      console.error('   The Generative Language API may not be enabled.');
      console.error('\n💡 SOLUTION:');
      console.error('   Enable at: https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com');
      userFriendlyError = 'Service access denied. Please contact support.';
      errorCode = 'PERMISSION_DENIED';
    }
    else {
      console.error('\n💡 DIAGNOSIS: Unknown error');
      console.error('   This is an unexpected error. Check full error details below.');
    }

    console.error('\n📋 Full Error Object:');
    console.error(error);
    console.error('\n╚══════════════════════════════════════════════════════════╝\n');

    return {
      success: false,
      error: userFriendlyError,
      errorCode: errorCode,
      timestamp: timestamp,
    };
  }
}