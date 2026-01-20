'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Minus, Trash2 } from 'lucide-react';
import { sendChatMessage } from '../actions/chat';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! Welcome to Henna Craft. 🌿 I\'m your personal styling consultant! আপনার মেহেদির রঙে সাজুক আপনার দিন! ✨\n\nWhat brings you here today?',
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
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = inputMessage;
    setInputMessage('');
    setIsLoading(true);

    try {
      console.log('Client: Sending message:', currentMessage);

      const result = await sendChatMessage(currentMessage);

      console.log('Client: Server action result:', result);

      if (result.success) {
        const assistantMessage = {
          role: 'assistant',
          content: result.message,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantMessage]);
        console.log('Client: Response added to messages');
      } else {
        console.error('Client: Server action returned error:', result);
        throw new Error(result.error || 'Failed to get response');
      }
    } catch (error) {
      console.error('Client: Error in handleSendMessage:', error);
      const errorMessage = {
        role: 'assistant',
        content: `I'm having trouble connecting right now. ${error.message}. Please try again in a moment or contact us via WhatsApp for immediate assistance.`,
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
    setMessages([
      {
        role: 'assistant',
        content: 'Chat cleared! 🌿 Let\'s start fresh. আপনার মেহেদির রঙে সাজুক আপনার দিন! ✨\n\nWhat brings you here today?',
        timestamp: new Date(),
      },
    ]);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const suggestionChips = [
    { label: 'Bridal Packages', message: 'Tell me about bridal packages' },
    { label: 'Aftercare Secrets', message: 'What are the aftercare secrets?' },
    { label: 'Booking Info', message: 'How do I book an appointment?' },
  ];

  const handleSuggestionClick = (message) => {
    setInputMessage(message);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 md:bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#b38b59] to-[#8B6F47] text-black rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(179,139,89,0.6)] transition-all duration-300 flex items-center justify-center group"
            aria-label="Open AI Chat"
          >
            <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0a0a0a]"
            />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
            className="fixed bottom-24 md:bottom-6 right-6 z-50 w-[95vw] sm:w-[400px] h-[600px] max-h-[70vh] md:max-h-[80vh] bg-[#0a0a0a] border-2 border-[#b38b59]/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#b38b59] to-[#8B6F47] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
                  <Sparkles size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-lg">Personal Styling Consultant</h3>
                  <p className="text-xs text-black/70">Your henna expert</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClearChat}
                  className="w-8 h-8 bg-black/20 hover:bg-black/30 rounded-full flex items-center justify-center transition"
                  title="Clear Chat"
                >
                  <Trash2 size={18} className="text-black" />
                </button>
                <button
                  onClick={handleMinimize}
                  className="w-8 h-8 bg-black/20 hover:bg-black/30 rounded-full flex items-center justify-center transition"
                  title="Minimize"
                >
                  <Minus size={20} className="text-black" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-black/20 hover:bg-black/30 rounded-full flex items-center justify-center transition"
                  title="Close"
                >
                  <X size={20} className="text-black" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a]">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-[#2a2a2a] text-[#e0e0e0] rounded-br-sm shadow-lg'
                        : 'bg-gradient-to-br from-[#b38b59]/20 to-[#8B6F47]/10 text-[#d4af6a] border border-[#b38b59]/30 rounded-bl-sm shadow-lg'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                    <p className={`text-xs mt-1 ${msg.role === 'user' ? 'text-black/60' : 'text-[#8B7355]/60'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

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
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 1, 0.5]
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
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 1, 0.5]
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
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 1.2, 
                          delay: 0.6,
                          ease: "easeInOut"
                        }}
                        className="w-2 h-2 bg-[#b38b59] rounded-full"
                      />
                      <span className="ml-2 text-xs text-[#b38b59]/70">AI is typing...</span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>
            )}

            {!isMinimized && (
              <div className="px-4 pb-2">
              <p className="text-xs text-[#8B7355] mb-2">Quick suggestions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestionChips.map((chip, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(chip.message)}
                    disabled={isLoading}
                    className="text-xs px-4 py-2 bg-[#1a1a1a] text-[#b38b59] border-2 border-[#b38b59]/40 rounded-full hover:bg-[#b38b59]/10 hover:border-[#b38b59] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
            )}

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
                  className="flex-1 px-4 py-3 bg-[#1a1a1a] text-[#8B7355] border border-[#b38b59]/30 rounded-full focus:outline-none focus:border-[#b38b59] transition placeholder:text-[#8B7355]/50 disabled:opacity-50"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="w-12 h-12 bg-[#b38b59] text-black rounded-full flex items-center justify-center hover:bg-[#d4af6a] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
