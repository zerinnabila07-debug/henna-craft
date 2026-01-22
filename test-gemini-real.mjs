import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBqbW_OAvNbRXG5ni4ikkJw-pQCTqzCxSo';

const SYSTEM_INSTRUCTION = `You are a professional AI assistant for "Henna Craft", a premium henna artistry service.

Services: Bridal Henna (1500 BDT), Occasional Henna (800 BDT), Custom Designs (1000+ BDT).
Quality: 100% Organic, chemical-free, PPD-free.
Respond in the same language the user uses (Bengali, English, or Banglish).`;

async function testRealAPI() {
  console.log('========================================');
  console.log('Testing Real Gemini API');
  console.log('========================================\n');
  
  console.log('API Key:', API_KEY.substring(0, 15) + '...');
  console.log('Model: gemini-pro\n');

  try {
    console.log('1. Initializing Google Generative AI...');
    const genAI = new GoogleGenerativeAI(API_KEY);
    console.log('   ✓ Success\n');

    console.log('2. Getting gemini-pro model...');
    const model = genAI.getGenerativeModel({
      model: 'gemini-pro',
    });
    console.log('   ✓ Success\n');

    console.log('3. Starting chat session with system context...');
    const history = [
      {
        role: 'user',
        parts: [{ text: 'Hello, I need information about Henna Craft.' }]
      },
      {
        role: 'model',
        parts: [{ text: `${SYSTEM_INSTRUCTION}\n\nUnderstood! I'm your Henna Craft assistant. How can I help you?` }]
      }
    ];
    
    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.8,
      },
    });
    console.log('   ✓ Success\n');

    console.log('4. Sending test message: "What are your prices?"\n');
    const result = await chat.sendMessage('What are your prices?');
    const response = result.response;
    const text = response.text();
    
    console.log('========================================');
    console.log('✅ SUCCESS!');
    console.log('========================================\n');
    console.log('AI Response:');
    console.log(text);
    console.log('\n✓ Your Gemini API is working correctly!');
    console.log('✓ The chatbot will now use real AI responses!\n');

  } catch (error) {
    console.error('========================================');
    console.error('❌ ERROR');
    console.error('========================================\n');
    console.error('Error:', error.message);
    
    if (error.message?.includes('API_KEY_INVALID') || error.message?.includes('API key not valid')) {
      console.error('\n⚠️  Your API key is INVALID');
      console.error('\nSolution:');
      console.error('1. Go to: https://aistudio.google.com/app/apikey');
      console.error('2. Create a NEW API key');
      console.error('3. Update .env.local with the new key');
      console.error('4. Restart your dev server');
    } else if (error.message?.includes('404')) {
      console.error('\n⚠️  Model not found');
      console.error('The gemini-1.5-flash model may not be available.');
      console.error('Your API key might need to enable the Generative Language API.');
    } else if (error.message?.includes('403')) {
      console.error('\n⚠️  Permission denied');
      console.error('Enable the Generative Language API at:');
      console.error('https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com');
    }
    
    console.error('\nFull error:');
    console.error(error);
  }
}

testRealAPI();
