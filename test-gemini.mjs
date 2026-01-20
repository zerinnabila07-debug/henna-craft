import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyCFLFAXQ2RRs3DLEBsn4A72hnzH3f9I7iA';

async function test() {
  console.log('========================================');
  console.log('Testing Gemini API Connection');
  console.log('========================================\n');
  
  console.log('API Key:', API_KEY.substring(0, 10) + '...' + API_KEY.substring(API_KEY.length - 5));
  console.log('API Key length:', API_KEY.length);
  
  try {
    console.log('\nInitializing GoogleGenerativeAI...');
    const genAI = new GoogleGenerativeAI(API_KEY);
    
    console.log('Loading model: gemini-pro');
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-pro'
    });
    
    console.log('Sending test message...');
    const result = await model.generateContent('Say hello in one sentence');
    const response = await result.response;
    const text = response.text();
    
    console.log('\n========================================');
    console.log('✅ SUCCESS!');
    console.log('========================================');
    console.log('Response:', text);
    console.log('\n✓ Your API key is working correctly!');
    console.log('✓ Model gemini-pro is accessible');
    console.log('✓ Your chatbot should work now!\n');
    
  } catch (error) {
    console.error('\n========================================');
    console.error('❌ ERROR');
    console.error('========================================');
    console.error('Error message:', error.message);
    
    if (error.message.includes('API_KEY_INVALID') || error.message.includes('API key not valid')) {
      console.error('\n⚠️  Your API key is INVALID or not enabled for Gemini API.');
      console.error('\nFix:');
      console.error('1. Go to: https://aistudio.google.com/app/apikey');
      console.error('2. Create a NEW API key');
      console.error('3. Make sure "Generative Language API" is enabled');
      console.error('4. Update your .env.local file');
    }
    
    if (error.message.includes('404') || error.message.includes('not found')) {
      console.error('\n⚠️  Model not found.');
      console.error('The model "gemini-1.5-flash" may not be available for your API key.');
      console.error('\nTry:');
      console.error('- Using "gemini-pro" instead');
      console.error('- Checking available models at: https://ai.google.dev/models/gemini');
    }
    
    if (error.message.includes('quota') || error.message.includes('429')) {
      console.error('\n⚠️  API quota exceeded. You have reached the free tier limit.');
    }
    
    console.error('\nFull error:');
    console.error(error);
    console.error('\n');
  }
}

test();
