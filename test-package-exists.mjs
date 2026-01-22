console.log('Testing if @google/genai package exists...\n');

try {
  console.log('Attempting to import @google/genai...');
  const { GoogleGenAI } = await import('@google/genai');
  console.log('✅ SUCCESS: Package exists!');
  console.log('GoogleGenAI:', GoogleGenAI);
} catch (error) {
  console.log('❌ FAILED: Package does not exist');
  console.log('Error:', error.message);
  console.log('\n');
}

try {
  console.log('Attempting to import @google/generative-ai...');
  const { GoogleGenerativeAI } = await import('@google/generative-ai');
  console.log('✅ SUCCESS: Package exists!');
  console.log('GoogleGenerativeAI:', typeof GoogleGenerativeAI);
} catch (error) {
  console.log('❌ FAILED: Package does not exist');
  console.log('Error:', error.message);
}
