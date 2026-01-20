import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyCFLFAXQ2RRs3DLEBsn4A72hnzH3f9I7iA';

console.log('Simple Gemini API Test\n');
console.log('API Key:', API_KEY);
console.log('Key length:', API_KEY.length);

async function test() {
  try {
    console.log('\n1. Creating GoogleGenerativeAI instance...');
    const genAI = new GoogleGenerativeAI(API_KEY);
    console.log('   ✓ Success');

    console.log('\n2. Getting gemini-pro model...');
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    console.log('   ✓ Success');

    console.log('\n3. Generating content...');
    const result = await model.generateContent('Hello');
    console.log('   ✓ Success');

    console.log('\n4. Getting response...');
    const response = result.response;
    const text = response.text();
    console.log('   ✓ Success');

    console.log('\n✅ EVERYTHING WORKS!');
    console.log('Response:', text);
    console.log('\nYour API key is valid and working!');
    
  } catch (error) {
    console.error('\n❌ FAILED at step above');
    console.error('Error:', error.message);
    console.error('\nFull error object:');
    console.error(error);
    
    console.error('\n\n=== DIAGNOSIS ===');
    if (error.message.includes('API key')) {
      console.error('Your API key is INVALID or EXPIRED');
      console.error('\nFix:');
      console.error('1. Go to: https://aistudio.google.com/app/apikey');
      console.error('2. Delete the old key');
      console.error('3. Create a NEW key');
      console.error('4. Copy it EXACTLY (no spaces)');
      console.error('5. Update .env.local');
    } else if (error.message.includes('quota')) {
      console.error('You have exceeded your API quota (free tier limit)');
    } else if (error.message.includes('403')) {
      console.error('API key does not have permission to use Gemini API');
      console.error('Enable it at: https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com');
    } else {
      console.error('Unknown error. Check your internet connection.');
    }
  }
}

test();
