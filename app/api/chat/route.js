import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const HENNA_CRAFT_CONTEXT = `You are a professional customer service assistant for "Henna Craft", a premium henna artistry service in Dhaka, Bangladesh.

IMPORTANT INFORMATION TO ALWAYS REMEMBER:

PRICING:
- Bridal Henna: Starts from 1500 BDT (includes full hand & feet, custom designs, premium quality)
- Occasional Henna: Starts from 800 BDT (for festivals, parties, celebrations)
- Custom Designs: Starts from 1000 BDT (final price depends on design complexity)

HENNA QUALITY:
- 100% Organic & Chemical-Free
- PPD-Free (safe for sensitive skin)
- Premium Sojat Henna leaves from India
- Triple filtered with essential oils
- Freshly hand-rolled cones

AFTERCARE TIPS:
1. The 8-Hour Rule: Leave henna on for at least 8 hours for darker stain
2. Heat Method: Use clove steam for deeper color
3. No Soap Zone: Avoid soap and water for first 24 hours
4. Natural oils help preserve the color

SERVICES:
- Bridal henna with intricate traditional patterns
- Festival and party henna designs
- Custom personalized artwork
- Modern fusion designs
- Traditional mehndi patterns

BOOKING:
- Available for home service in Dhaka
- Advance booking recommended (at least 3-5 days for bridal)
- Contact via WhatsApp or booking form on website

SAFETY:
- Patch test available for sensitive skin
- 100% safe for pregnant women (organic, no chemicals)
- Suitable for all ages

YOUR ROLE:
- Be warm, professional, and helpful
- Answer questions about pricing, services, booking, and aftercare
- If asked about availability or specific booking dates, ask them to use the booking form or WhatsApp
- Keep responses concise but informative
- Use a friendly, conversational tone
- If you don't know something specific, politely direct them to contact via WhatsApp or booking form

RESPONSE STYLE:
- Keep answers brief (2-4 sentences typically)
- Use emojis sparingly and professionally (🌿 for organic, ✨ for special occasions)
- Be enthusiastic about henna art
- Always end with asking if they need anything else`;

export async function POST(request) {
  console.log('=== Chat API Route Called ===');
  
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    
    console.log('API Key exists:', !!apiKey);
    console.log('API Key length:', apiKey?.length || 0);
    
    if (!apiKey) {
      console.error('ERROR: GOOGLE_API_KEY is not defined in environment variables');
      return NextResponse.json(
        { 
          error: 'API key not configured',
          details: 'GOOGLE_API_KEY is missing from environment variables'
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log('Request body received:', { 
      hasMessage: !!body.message, 
      messageLength: body.message?.length,
      historyLength: body.history?.length 
    });

    const { message, history } = body;

    if (!message || typeof message !== 'string') {
      console.error('ERROR: Invalid message format:', message);
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    console.log('Initializing Google Generative AI...');
    const genAI = new GoogleGenerativeAI(apiKey);
    
    console.log('Getting generative model...');
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    console.log('Starting chat with history length:', history?.length || 0);
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: HENNA_CRAFT_CONTEXT }],
        },
        {
          role: 'model',
          parts: [{ text: 'Understood! I am now the professional customer service assistant for Henna Craft. I will provide helpful, accurate information about our services, pricing, organic henna quality, and aftercare tips. How can I assist you today?' }],
        },
        ...(history || []).map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }],
        })),
      ],
      generationConfig: {
        maxOutputTokens: 300,
        temperature: 0.7,
      },
    });

    console.log('Sending message to Gemini API...');
    const result = await chat.sendMessage(message);
    
    console.log('Getting response...');
    const response = await result.response;
    const text = response.text();
    
    console.log('Response received, length:', text.length);
    console.log('=== Chat API Success ===');

    return NextResponse.json({ 
      message: text,
      success: true 
    });

  } catch (error) {
    console.error('=== Chat API Error ===');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    if (error.message?.includes('API key')) {
      console.error('API KEY ERROR: The Google API key appears to be invalid or unauthorized');
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to process your message. Please try again.',
        details: error.message,
        errorType: error.name
      },
      { status: 500 }
    );
  }
}
