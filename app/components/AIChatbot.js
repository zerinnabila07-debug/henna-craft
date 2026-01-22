'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Minus, Trash2, Zap } from 'lucide-react';
import { sendChatMessage } from '../actions/chat';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '✨ Assalamu Alaikum! I\'m the Henna Craft Assistant.\n\nWelcome to Henna Craft! 🌿 আপনার মেহেদির রঙে সাজুক আপনার দিন!\n\nI can help you with:\n• 💍 Bridal & Occasional packages\n• 💰 Pricing & booking details\n• 🌿 Aftercare secrets for darkest color\n• ✨ Our organic henna quality\n\nWhat would you like to know?',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = inputMessage.trim();
    setInputMessage('');
    setIsLoading(true);

    try {
      // Build conversation history (exclude the initial welcome message)
      const history = messages
        .slice(1) // Skip the initial welcome message
        .filter(msg => msg.role === 'user' || msg.role === 'assistant')
        .map(msg => ({
          role: msg.role,
          content: msg.content,
        }));

      console.log('🔵 Client: Sending message to server action');
      console.log(`   Message: "${currentMessage.substring(0, 50)}..."`);
      console.log(`   History length: ${history.length} messages`);

      // Call Server Action with full conversation history
      const result = await sendChatMessage(currentMessage, history);

      console.log('🔵 Client: Received response from server');
      console.log(`   Success: ${result.success}`);
      
      if (result.success) {
        const assistantMessage = {
          role: 'assistant',
          content: result.message,
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, assistantMessage]);
        
        console.log(`   Response length: ${result.message.length} characters`);
        console.log(`   Response time: ${result.responseTime}ms`);
        console.log(`   Model used: ${result.model}`);
      } else {
        console.error('🔴 Client: Server returned error');
        console.error(`   Error code: ${result.errorCode}`);
        console.error(`   Error message: ${result.error}`);
        
        throw new Error(result.error || 'Failed to get response from AI');
      }
    } catch (error) {
      console.error('🔴 Client: Error in handleSendMessage');
      console.error(`   Error: ${error.message}`);
      
      const errorMessage = {
        role: 'assistant',
        content: `I'm having trouble connecting right now. 😔\n\n${error.message}\n\nPlease try again in a moment, or contact us via WhatsApp for immediate assistance! 📱`,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    console.log('🔵 Client: Clearing chat history');
    setMessages([
      {
        role: 'assistant',
        content: '✨ Chat cleared! Let\'s start fresh.\n\nAssalamu Alaikum! I\'m the Henna Craft Assistant. 🌿\n\nআপনার মেহেদির রঙে সাজুক আপনার দিন!\n\nHow can I help you today?',
        timestamp: new Date(),
      },
    ]);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const suggestionChips = [
    { 
      label: '💍 Bridal Package', 
      message: 'Tell me about your bridal henna package',
      icon: '💍'
    },
    { 
      label: '🌿 Aftercare Tips', 
      message: 'What are the aftercare secrets for darkest color?',
      icon: '🌿'
    },
    { 
      label: '💰 Pricing', 
      message: 'What are your prices for all packages?',
      icon: '💰'
    },
    { 
      label: '📅 Booking', 
      message: 'How do I book an appointment?',
      icon: '📅'
    },
  ];

  const handleSuggestionClick = (message) => {
    if (isLoading) return;
    setInputMessage(message);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, type: 'spring' }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 md:bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#b38b59] to-[#8B6F47] text-black rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(179,139,89,0.6)] transition-all duration-300 flex items-center justify-center group"
            aria-label="Open AI Chatbot"
          >
            <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
            
            {/* Online Indicator */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0a0a0a]"
            />
            
            {/* AI Badge */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center border-2 border-[#0a0a0a]">
              <Zap size={12} className="text-white" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
            className="fixed bottom-24 md:bottom-6 right-6 z-50 w-[95vw] sm:w-[420px] h-[600px] max-h-[70vh] md:max-h-[80vh] bg-[#0a0a0a] border-2 border-[#b38b59]/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#b38b59] to-[#8B6F47] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center relative">
                  <Sparkles size={20} className="text-black" />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#b38b59]" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-base">Henna Craft Assistant</h3>
                  <p className="text-xs text-black/70 flex items-center gap-1">
                    <Zap size={10} /> AI Powered • January 2026
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClearChat}
                  className="w-8 h-8 bg-black/20 hover:bg-black/30 rounded-full flex items-center justify-center transition"
                  title="Clear Chat"
                  aria-label="Clear Chat"
                >
                  <Trash2 size={16} className="text-black" />
                </button>
                <button
                  onClick={handleMinimize}
                  className="w-8 h-8 bg-black/20 hover:bg-black/30 rounded-full flex items-center justify-center transition"
                  title={isMinimized ? 'Maximize' : 'Minimize'}
                  aria-label={isMinimized ? 'Maximize' : 'Minimize'}
                >
                  <Minus size={18} className="text-black" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-black/20 hover:bg-black/30 rounded-full flex items-center justify-center transition"
                  title="Close"
                  aria-label="Close Chat"
                >
                  <X size={18} className="text-black" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            {!isMinimized && (
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a] scrollbar-thin scrollbar-thumb-[#b38b59]/30 scrollbar-track-transparent">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                        msg.role === 'user'
                          ? 'bg-[#2a2a2a] text-[#e0e0e0] rounded-br-sm shadow-lg'
                          : 'bg-gradient-to-br from-[#b38b59]/20 to-[#8B6F47]/10 text-[#d4af6a] border border-[#b38b59]/30 rounded-bl-sm shadow-lg'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                        {msg.content}
                      </p>
                      <p className={`text-xs mt-1.5 ${msg.role === 'user' ? 'text-gray-500' : 'text-[#8B7355]/60'}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex justify-start"
                  >
                    <div className="bg-gradient-to-br from-[#b38b59]/20 to-[#8B6F47]/10 border border-[#b38b59]/30 px-4 py-3 rounded-2xl rounded-bl-sm shadow-lg">
                      <div className="flex gap-1.5 items-center">
                        <motion.div
                          animate={{ 
                            scale: [1, 1.4, 1],
                            opacity: [0.4, 1, 0.4]
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 1.2, 
                            delay: 0,
                            ease: "easeInOut"
                          }}
                          className="w-2 h-2 bg-[#b38b59] rounded-full"
                        />
                        <motion.div
                          animate={{ 
                            scale: [1, 1.4, 1],
                            opacity: [0.4, 1, 0.4]
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 1.2, 
                            delay: 0.3,
                            ease: "easeInOut"
                          }}
                          className="w-2 h-2 bg-[#b38b59] rounded-full"
                        />
                        <motion.div
                          animate={{ 
                            scale: [1, 1.4, 1],
                            opacity: [0.4, 1, 0.4]
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 1.2, 
                            delay: 0.6,
                            ease: "easeInOut"
                          }}
                          className="w-2 h-2 bg-[#b38b59] rounded-full"
                        />
                        <span className="ml-2 text-xs text-[#b38b59]/80 font-medium">AI is thinking...</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}

            {/* Suggestion Chips */}
            {!isMinimized && messages.length <= 2 && (
              <div className="px-4 pb-2 bg-[#0a0a0a]">
                <p className="text-xs text-[#8B7355] mb-2 font-medium">💡 Quick suggestions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestionChips.map((chip, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(chip.message)}
                      disabled={isLoading}
                      className="text-xs px-3 py-2 bg-[#1a1a1a] text-[#b38b59] border border-[#b38b59]/40 rounded-full hover:bg-[#b38b59]/10 hover:border-[#b38b59] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
                    >
                      <span>{chip.icon}</span>
                      <span>{chip.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            {!isMinimized && (
              <div className="p-4 bg-[#0a0a0a] border-t border-[#b38b59]/20">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    disabled={isLoading}
                    className="flex-1 px-4 py-3 bg-[#1a1a1a] text-[#e0e0e0] border border-[#b38b59]/30 rounded-full focus:outline-none focus:border-[#b38b59] focus:ring-1 focus:ring-[#b38b59]/50 transition placeholder:text-[#8B7355]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    className="w-12 h-12 bg-gradient-to-br from-[#b38b59] to-[#8B6F47] text-black rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-[#b38b59]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                    aria-label="Send Message"
                  >
                    <Send size={20} />
                  </button>
                </div>
                
                {/* Footer Info */}
                <p className="text-[10px] text-[#8B7355]/50 mt-2 text-center">
                  Powered by Google Gemini AI • Henna Craft Database 2026
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
