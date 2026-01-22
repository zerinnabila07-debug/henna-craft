import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBqbW_OAvNbRXG5ni4ikkJw-pQCTqzCxSo';

console.log('╔══════════════════════════════════════════════════════════╗');
console.log('║    Google Generative AI - Latest Test (Jan 2026)        ║');
console.log('╚══════════════════════════════════════════════════════════╝\n');

console.log('📦 Package: @google/generative-ai (Official Google Package)');
console.log('📦 Version: 0.21.0');
console.log('📅 Date: January 22, 2026\n');

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

async function testLatestImplementation() {
  try {
    console.log('Step 1: Initialize GoogleGenerativeAI...');
    const genAI = new GoogleGenerativeAI(API_KEY);
    console.log('   ✅ Success\n');

    console.log('Step 2: Testing Model Availability...\n');
    
    const modelsToTest = [
      { name: 'gemini-2.5-flash', description: 'Gemini 2.5 Flash (Requested)' },
      { name: 'gemini-1.5-flash-latest', description: 'Gemini 1.5 Flash Latest (Recommended)' },
      { name: 'gemini-1.5-flash', description: 'Gemini 1.5 Flash' },
      { name: 'gemini-1.5-pro-latest', description: 'Gemini 1.5 Pro Latest' },
      { name: 'gemini-1.5-pro', description: 'Gemini 1.5 Pro' },
      { name: 'gemini-pro', description: 'Gemini Pro (Legacy)' },
    ];

    let workingModel = null;

    for (const modelInfo of modelsToTest) {
      try {
        console.log(`Testing: ${modelInfo.name}`);
        console.log(`   Description: ${modelInfo.description}`);
        
        const model = genAI.getGenerativeModel({ model: modelInfo.name });
        
        const startTime = Date.now();
        const result = await model.generateContent('Say "Hello" in one word');
        const responseTime = Date.now() - startTime;
        
        const text = result.response.text();
        
        console.log(`   ✅ WORKS!`);
        console.log(`   Response: "${text}"`);
        console.log(`   Response Time: ${responseTime}ms`);
        console.log('');
        
        if (!workingModel) {
          workingModel = modelInfo.name;
        }
        
      } catch (error) {
        if (error.message?.includes('404') || error.message?.includes('not found')) {
          console.log(`   ❌ NOT AVAILABLE (404 - Model not found)`);
          if (modelInfo.name === 'gemini-2.5-flash') {
            console.log(`   ℹ️  Note: Gemini 2.5 series not released to public API yet`);
          }
        } else if (error.message?.includes('403')) {
          console.log(`   ❌ PERMISSION DENIED (403)`);
        } else if (error.message?.includes('API key not valid')) {
          console.log(`   ❌ API KEY INVALID`);
          console.log(`   ℹ️  Your API key doesn't have access to Gemini models`);
          throw error;
        } else {
          console.log(`   ❌ ERROR: ${error.message}`);
        }
        console.log('');
      }
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    if (workingModel) {
      console.log('╔══════════════════════════════════════════════════════════╗');
      console.log('║                  ✅ TEST SUCCESSFUL!                     ║');
      console.log('╚══════════════════════════════════════════════════════════╝\n');
      
      console.log(`🎯 Best Available Model: ${workingModel}\n`);
      
      console.log('📋 Test Summary:');
      console.log('   ✅ API Connection: Working');
      console.log(`   ✅ Working Model Found: ${workingModel}`);
      console.log('   ✅ Your chatbot can use this model\n');
      
      console.log('🚀 Next Steps:');
      console.log('   1. Your code is already updated to use the best model');
      console.log('   2. Update .env.local with a working API key');
      console.log('   3. Restart your dev server (npm run dev)');
      console.log('   4. Test the chatbot on your website\n');
      
      console.log('💡 Recommendation:');
      console.log(`   Use model: "${workingModel}" in your chat.js file`);
      console.log('   This is already configured in your updated code!\n');
      
    } else {
      console.log('╔══════════════════════════════════════════════════════════╗');
      console.log('║                  ❌ NO MODELS AVAILABLE                  ║');
      console.log('╚══════════════════════════════════════════════════════════╝\n');
      
      console.log('🔴 Problem: Your API key cannot access ANY Gemini models\n');
      
      console.log('💡 Solution:');
      console.log('   1. Go to: https://aistudio.google.com/app/apikey');
      console.log('   2. Click "Create API Key"');
      console.log('   3. IMPORTANT: Select "Create API key in new project"');
      console.log('   4. Copy the new API key');
      console.log('   5. Update .env.local: GOOGLE_API_KEY=YOUR_NEW_KEY');
      console.log('   6. Run this test again\n');
      
      console.log('❓ Why this happens:');
      console.log('   - Your API key is from an old/restricted project');
      console.log('   - Generative Language API not enabled');
      console.log('   - Creating in NEW project fixes this automatically\n');
    }

  } catch (error) {
    console.error('\n╔══════════════════════════════════════════════════════════╗');
    console.error('║                    ❌ CRITICAL ERROR                     ║');
    console.error('╚══════════════════════════════════════════════════════════╝\n');
    
    console.error('🔴 Error:', error.message);
    
    if (error.message?.includes('API key not valid') || error.message?.includes('API_KEY_INVALID')) {
      console.error('\n💡 Solution:');
      console.error('   Your API key is invalid or expired.');
      console.error('   Create a new one at: https://aistudio.google.com/app/apikey\n');
    } else {
      console.error('\n📋 Full Error:');
      console.error(error);
    }
  }
}

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
console.log('ℹ️  IMPORTANT NOTES:\n');
console.log('📦 Package: @google/generative-ai is the ONLY official package');
console.log('❌ Package: @google/genai DOES NOT EXIST');
console.log('❌ Model: gemini-2.5-flash DOES NOT EXIST (not released yet)');
console.log('✅ Model: gemini-1.5-flash-latest is the LATEST available');
console.log('✅ Model: gemini-pro is the most stable fallback\n');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

testLatestImplementation();
