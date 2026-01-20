import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyCFLFAXQ2RRs3DLEBsn4A72hnzH3f9I7iA';

console.log('Testing different model names...\n');

const modelsToTry = [
  'gemini-1.5-pro',
  'gemini-1.5-flash',
  'gemini-pro',
  'models/gemini-1.5-pro',
  'models/gemini-1.5-flash',
  'models/gemini-pro'
];

async function testModel(modelName) {
  try {
    console.log(`Testing: ${modelName}...`);
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent('Hi');
    const text = result.response.text();
    console.log(`   ✅ SUCCESS! Model "${modelName}" works!`);
    console.log(`   Response: ${text.substring(0, 50)}...\n`);
    return modelName;
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message.substring(0, 80)}...\n`);
    return null;
  }
}

async function findWorkingModel() {
  console.log('Searching for a working model...\n');
  
  for (const modelName of modelsToTry) {
    const working = await testModel(modelName);
    if (working) {
      console.log('═══════════════════════════════════════');
      console.log(`✅ FOUND WORKING MODEL: ${working}`);
      console.log('═══════════════════════════════════════');
      console.log('\nUse this model name in your chatbot!');
      return;
    }
  }
  
  console.log('═══════════════════════════════════════');
  console.log('❌ NO WORKING MODEL FOUND');
  console.log('═══════════════════════════════════════');
  console.log('\nYour API key may not have access to Gemini models.');
  console.log('\nSolutions:');
  console.log('1. Create a NEW API key at: https://aistudio.google.com/app/apikey');
  console.log('2. Make sure you select "Gemini API" when creating it');
  console.log('3. Enable Generative Language API in Google Cloud Console');
}

findWorkingModel();
