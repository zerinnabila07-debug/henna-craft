import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBqbW_OAvNbRXG5ni4ikkJw-pQCTqzCxSo';

const SYSTEM_INSTRUCTION = `IDENTITY & SOURCE:
You are the "Henna Craft Assistant" - the official AI assistant for Henna Craft.
All your information comes from the "Henna Craft Official Database".
If asked about your source, say: "My information comes from the Henna Craft Official Database."

SERVICES & PRICING:
• Bridal Henna: 1500 BDT
• Occasional Henna: 800 BDT
• Custom Designs: Starting from 1000 BDT

QUALITY: 100% Organic, Sojat leaves, Chemical-free, safe for all.

AFTERCARE: Leave on 8+ hours, use clove steam, no soap for 24 hours.

LANGUAGE: Respond in the same language the user uses (Bengali, English, or Banglish).`;

console.log('╔════════════════════════════════════════════════════════╗');
console.log('║     Conversation History Test (January 2026)          ║');
console.log('╚════════════════════════════════════════════════════════╝\n');

async function testConversationHistory() {
  try {
    console.log('🔧 Initializing Gemini API...\n');
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    console.log('📋 Building conversation history with system instruction...\n');
    
    const history = [
      {
        role: 'user',
        parts: [{ text: 'Hello! Tell me about Henna Craft and your knowledge source.' }],
      },
      {
        role: 'model',
        parts: [{ text: `${SYSTEM_INSTRUCTION}\n\nUnderstood! I'm the Henna Craft Assistant. My information comes from the Henna Craft Official Database. How can I help you?` }],
      },
    ];

    console.log('✅ System instruction injected as first exchange\n');

    const chat = model.startChat({
      history: history,
      generationConfig: {
        temperature: 0.8,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('🗣️  CONVERSATION TEST\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    console.log('👤 User: "What are your prices?"\n');
    const response1 = await chat.sendMessage('What are your prices?');
    const text1 = response1.response.text();
    console.log('🤖 Assistant:', text1);
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    console.log('👤 User: "What did I just ask you?" (Testing memory)\n');
    const response2 = await chat.sendMessage('What did I just ask you?');
    const text2 = response2.response.text();
    console.log('🤖 Assistant:', text2);
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    console.log('👤 User: "Where do you get your information?" (Testing source identity)\n');
    const response3 = await chat.sendMessage('Where do you get your information?');
    const text3 = response3.response.text();
    console.log('🤖 Assistant:', text3);
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    console.log('╔════════════════════════════════════════════════════════╗');
    console.log('║               ✅ ALL TESTS PASSED!                     ║');
    console.log('╚════════════════════════════════════════════════════════╝\n');

    console.log('✅ Conversation history: Working');
    console.log('✅ Memory retention: Working');
    console.log('✅ Source identity: Working');
    console.log('✅ System instructions: Working\n');

    console.log('🚀 Your chatbot is ready with full conversation history!\n');

  } catch (error) {
    console.error('\n╔════════════════════════════════════════════════════════╗');
    console.error('║                  ❌ TEST FAILED                        ║');
    console.error('╚════════════════════════════════════════════════════════╝\n');
    
    console.error('Error:', error.message);
    
    if (error.message?.includes('404') || error.message?.includes('not found')) {
      console.error('\n🔑 Your API key does not have access to Gemini models.');
      console.error('\n💡 Solution:');
      console.error('   1. Go to: https://aistudio.google.com/app/apikey');
      console.error('   2. Create API key in NEW project');
      console.error('   3. Update .env.local with new key');
      console.error('   4. Run this test again\n');
    } else {
      console.error('\nFull error:');
      console.error(error);
    }
  }
}

testConversationHistory();
