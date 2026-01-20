import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyCFLFAXQ2RRs3DLEBsn4A72hnzH3f9I7iA';

console.log('Detailed Error Check\n');
console.log('API Key:', API_KEY);
console.log('Key length:', API_KEY.length);

async function checkError() {
  try {
    console.log('\nAttempting to use gemini-1.5-pro...\n');
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    const result = await model.generateContent('Hello');
    const text = result.response.text();
    
    console.log('✅ SUCCESS!');
    console.log('Response:', text);
    
  } catch (error) {
    console.log('❌ FULL ERROR DETAILS:\n');
    console.log('Error Message:', error.message);
    console.log('\nError Status:', error.status);
    console.log('Error Status Text:', error.statusText);
    
    if (error.errorDetails) {
      console.log('\nError Details:', JSON.stringify(error.errorDetails, null, 2));
    }
    
    console.log('\n═══════════════════════════════════════');
    console.log('DIAGNOSIS:');
    console.log('═══════════════════════════════════════\n');
    
    if (error.message.includes('API_KEY_INVALID') || error.status === 400) {
      console.log('❌ Your API key is INVALID or MALFORMED');
      console.log('\nThe API key format is wrong or the key is not valid.');
      console.log('\nFix:');
      console.log('1. Go to: https://aistudio.google.com/app/apikey');
      console.log('2. DELETE the current key');
      console.log('3. Click "Create API Key"');
      console.log('4. Select "Create API key in new project"');
      console.log('5. Copy the ENTIRE key carefully');
      
    } else if (error.status === 403) {
      console.log('❌ API NOT ENABLED in your Google Cloud Project');
      console.log('\nThe Generative Language API is not enabled.');
      console.log('\nFix:');
      console.log('1. Go to: https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com');
      console.log('2. Click "ENABLE"');
      console.log('3. Wait 1-2 minutes');
      console.log('4. Try again');
      
    } else if (error.status === 404) {
      console.log('❌ MODEL NOT FOUND for your API version');
      console.log('\nThe model name is not available for your API key.');
      console.log('\nThis usually means:');
      console.log('- Your API key is from an old project');
      console.log('- The API version doesn\'t support these models');
      console.log('\nFix:');
      console.log('1. Create a BRAND NEW API key');
      console.log('2. Use Google AI Studio (not Google Cloud Console)');
      console.log('3. Go to: https://aistudio.google.com/app/apikey');
      
    } else if (error.status === 429) {
      console.log('❌ QUOTA EXCEEDED');
      console.log('\nYou have exceeded the free tier limit.');
      console.log('Wait 24 hours or upgrade to paid plan.');
      
    } else {
      console.log('❌ UNKNOWN ERROR');
      console.log('\nCheck your internet connection.');
      console.log('Or try creating a completely new API key.');
    }
    
    console.log('\n═══════════════════════════════════════\n');
  }
}

checkError();
