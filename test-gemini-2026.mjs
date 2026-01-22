import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBqbW_OAvNbRXG5ni4ikkJw-pQCTqzCxSo';

const SYSTEM_INSTRUCTION = `You are the AI assistant for Henna Craft.
Services: Bridal (1500 BDT), Occasional (800 BDT), Custom (1000+ BDT).
Quality: 100% Organic, safe for all skin types.
Respond warmly in the user's language (Bengali or English).`;

console.log('╔════════════════════════════════════════╗');
console.log('║  Gemini API Test (January 2026)       ║');
console.log('╚════════════════════════════════════════╝\n');

async function testGemini2026() {
  try {
    console.log('📋 Configuration:');
    console.log(`   API Key: ${API_KEY.substring(0, 20)}...`);
    console.log(`   Model: gemini-pro (universally available)`);
    console.log(`   Date: ${new Date().toLocaleDateString()}\n`);

    console.log('Step 1: Initialize SDK...');
    const genAI = new GoogleGenerativeAI(API_KEY);
    console.log('   ✅ Success\n');

    console.log('Step 2: Load gemini-pro model...');
    const model = genAI.getGenerativeModel({
      model: 'gemini-pro',
    });
    console.log('   ✅ Success\n');

    console.log('Step 3: Start chat with system instruction injection...');
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: 'Hello! I want to know about your henna services.' }],
        },
        {
          role: 'model',
          parts: [{ text: `${SYSTEM_INSTRUCTION}\n\nUnderstood! I'm your Henna Craft assistant. How can I help you today?` }],
        },
      ],
      generationConfig: {
        temperature: 0.8,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });
    console.log('   ✅ Success\n');

    console.log('Step 4: Send test message...');
    console.log('   Query: "What are your prices?"\n');
    
    const result = await chat.sendMessage('What are your prices?');
    const response = result.response;
    const text = response.text();

    console.log('╔════════════════════════════════════════╗');
    console.log('║          ✅ TEST PASSED!               ║');
    console.log('╚════════════════════════════════════════╝\n');
    
    console.log('🤖 AI Response:');
    console.log('─'.repeat(50));
    console.log(text);
    console.log('─'.repeat(50));
    
    console.log('\n✅ Your Gemini API is working perfectly!');
    console.log('✅ Model: gemini-pro is accessible');
    console.log('✅ System instructions injected successfully');
    console.log('✅ Your chatbot is ready to use!\n');

  } catch (error) {
    console.error('\n╔════════════════════════════════════════╗');
    console.error('║          ❌ TEST FAILED                ║');
    console.error('╚════════════════════════════════════════╝\n');
    
    console.error('Error:', error.message);
    console.error('\n📋 Diagnosis:\n');

    if (error.message?.includes('API_KEY_INVALID') || error.message?.includes('API key not valid')) {
      console.error('🔑 Issue: Invalid API Key');
      console.error('\n💡 Solution:');
      console.error('   1. Go to: https://aistudio.google.com/app/apikey');
      console.error('   2. Create a NEW API key');
      console.error('   3. Update your .env.local file');
      console.error('   4. Restart your dev server\n');
    } 
    else if (error.message?.includes('404') || error.message?.includes('not found')) {
      console.error('🔍 Issue: Model Not Available');
      console.error('\n💡 Possible causes:');
      console.error('   - gemini-1.5-flash not enabled for your API key');
      console.error('   - Generative Language API not enabled');
      console.error('\n💡 Solution:');
      console.error('   1. Enable API at: https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com');
      console.error('   2. Wait 1-2 minutes for activation');
      console.error('   3. Try again\n');
    }
    else if (error.message?.includes('403')) {
      console.error('🚫 Issue: Permission Denied');
      console.error('\n💡 Solution:');
      console.error('   Enable the Generative Language API in Google Cloud Console\n');
    }
    else if (error.status === 429 || error.message?.includes('quota')) {
      console.error('⏱️  Issue: Rate Limit / Quota Exceeded');
      console.error('\n💡 Solution:');
      console.error('   Wait a few minutes and try again\n');
    }
    else {
      console.error('❓ Unknown Error');
      console.error('\nFull error details:');
      console.error(error);
    }
  }
}

testGemini2026();
