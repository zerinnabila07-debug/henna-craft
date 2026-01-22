console.log('╔══════════════════════════════════════════════════════════╗');
console.log('║        Testing Both Package Imports                      ║');
console.log('╚══════════════════════════════════════════════════════════╝\n');

console.log('Test 1: Attempting to import @google/genai');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
try {
  const module1 = await import('@google/genai');
  console.log('✅ SUCCESS: @google/genai exists!');
  console.log('Exports:', Object.keys(module1));
  console.log('GoogleGenAI:', typeof module1.GoogleGenAI);
  console.log('');
} catch (error) {
  console.log('❌ FAILED: @google/genai does NOT exist');
  console.log('Error Code:', error.code);
  console.log('Error Message:', error.message);
  console.log('');
}

console.log('Test 2: Attempting to import @google/generative-ai');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
try {
  const module2 = await import('@google/generative-ai');
  console.log('✅ SUCCESS: @google/generative-ai exists!');
  console.log('Exports:', Object.keys(module2));
  console.log('GoogleGenerativeAI:', typeof module2.GoogleGenerativeAI);
  console.log('');
} catch (error) {
  console.log('❌ FAILED: @google/generative-ai does NOT exist');
  console.log('Error Code:', error.code);
  console.log('Error Message:', error.message);
  console.log('');
}

console.log('╔══════════════════════════════════════════════════════════╗');
console.log('║                    CONCLUSION                            ║');
console.log('╚══════════════════════════════════════════════════════════╝\n');
