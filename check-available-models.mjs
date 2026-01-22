import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBqbW_OAvNbRXG5ni4ikkJw-pQCTqzCxSo';

console.log('╔══════════════════════════════════════════════════════════╗');
console.log('║         Checking Available Gemini Models                 ║');
console.log('╚══════════════════════════════════════════════════════════╝\n');

async function checkAvailableModels() {
  try {
    console.log('🔧 Initializing Google Generative AI...\n');
    const genAI = new GoogleGenerativeAI(API_KEY);

    console.log('📋 Attempting to list available models...\n');
    
    // Try to list models (if API supports it)
    try {
      const models = await genAI.listModels();
      console.log('✅ Available Models:\n');
      models.forEach(model => {
        console.log(`   • ${model.name}`);
        console.log(`     Display Name: ${model.displayName}`);
        console.log(`     Supported Methods: ${model.supportedGenerationMethods?.join(', ')}`);
        console.log('');
      });
    } catch (listError) {
      console.log('ℹ️  List models not available via SDK, testing specific models...\n');
    }

    // Test specific model names
    const modelsToTest = [
      'gemini-2.5-flash',
      'gemini-2.0-flash',
      'gemini-1.5-flash',
      'gemini-1.5-flash-latest',
      'gemini-1.5-pro',
      'gemini-1.5-pro-latest',
      'gemini-pro',
      'gemini-pro-vision',
    ];

    console.log('🧪 Testing Specific Models:\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    for (const modelName of modelsToTest) {
      try {
        console.log(`Testing: ${modelName}...`);
        
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent('Hello');
        const text = result.response.text();
        
        console.log(`   ✅ WORKS! Response: "${text.substring(0, 50)}..."`);
        console.log('');
      } catch (error) {
        if (error.message?.includes('404')) {
          console.log(`   ❌ NOT FOUND (404)`);
        } else if (error.message?.includes('403')) {
          console.log(`   ❌ PERMISSION DENIED (403)`);
        } else {
          console.log(`   ❌ ERROR: ${error.message}`);
        }
        console.log('');
      }
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  } catch (error) {
    console.error('\n❌ CRITICAL ERROR:\n');
    console.error(error.message);
    console.error('\nFull error:');
    console.error(error);
  }
}

checkAvailableModels();
