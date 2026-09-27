import React, { useState, useRef, useEffect } from 'react';
import { 
  X, Send, Bot, User, Sparkles, MapPin, ShieldAlert, 
  CloudRain, Ticket, CornerDownLeft, RefreshCw 
} from 'lucide-react';
import { ChatMessage, LanguageCode, TripContext } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { askTravelAssistant } from '../services/aiService';

interface ChatbotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  tripContext: TripContext;
  language: LanguageCode;
}

export const ChatbotDrawer: React.FC<ChatbotDrawerProps> = ({
  isOpen,
  onClose,
  tripContext,
  language,
}) => {
  const t = TRANSLATIONS[language];
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message when drawer opens or language changes
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          role: 'assistant',
          content: t.chatbot.welcomeMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  }, [language, t.chatbot.welcomeMessage, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  if (!isOpen) return null;

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || loading) return;

    const userMessage: ChatMessage = {
      id: `usr_${Date.now()}`,
      role: 'user',
      content: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const reply = await askTravelAssistant({
        message: textToSend,
        tripContext,
        language,
      });

      const assistantMessage: ChatMessage = {
        id: `asst_${Date.now()}`,
        role: 'assistant',
        content: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: `err_${Date.now()}`,
        role: 'assistant',
        content: t.common.error,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const destination = tripContext.selectedDestination;
  const district = tripContext.selectedDistrict || 'Madurai';
  const allergies = [...(tripContext.allergyPreferences || []), ...(tripContext.customAllergies || [])];

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-[#fffdf9] border-l-3 border-[#ebdcc3] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200">
      
      {/* DRAWER TOP BAR */}
      <div className="p-4 sm:p-5 border-b-2 border-stone-200 bg-[#fdfaf5] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-[0_3px_0_0_#065f46]">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-extrabold font-serif text-stone-900">
              {t.chatbot.drawerTitle}
            </h2>
            <p className="text-[11px] text-stone-500 font-medium">
              {t.chatbot.drawerSubtitle}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* ACTIVE CONTEXT CAPSULE BAR */}
      <div className="px-4 py-2 bg-[#f6f2e8] border-b border-stone-200 flex items-center justify-between text-[11px] text-stone-600 overflow-x-auto whitespace-nowrap gap-2">
        <div className="flex items-center gap-1 font-bold text-amber-900">
          <MapPin className="w-3.5 h-3.5 text-amber-700" />
          <span>{destination ? destination.name : district}</span>
        </div>

        {tripContext.liveWeather?.isRainExpected && (
          <div className="flex items-center gap-1 font-bold text-amber-700">
            <CloudRain className="w-3.5 h-3.5" />
            <span>Rain Expected</span>
          </div>
        )}

        {allergies.length > 0 && (
          <div className="flex items-center gap-1 font-bold text-rose-700">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{allergies.length} Allergies Protected</span>
          </div>
        )}
      </div>

      {/* CONVERSATION MESSAGE LIST */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${
              msg.role === 'user' ? 'flex-row-reverse' : ''
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                msg.role === 'user'
                  ? 'bg-amber-600 text-white'
                  : 'bg-emerald-600 text-white'
              }`}
            >
              {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`max-w-[82%] p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-xs whitespace-pre-line ${
                msg.role === 'user'
                  ? 'bg-amber-600 text-white font-medium rounded-tr-none'
                  : 'bg-white border-2 border-[#ebdcc3] text-stone-900 rounded-tl-none font-medium'
              }`}
            >
              {msg.content}
              <div
                className={`text-[9px] mt-1.5 text-right font-mono ${
                  msg.role === 'user' ? 'text-amber-200' : 'text-stone-400'
                }`}
              >
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2 p-3 text-xs text-stone-500 italic">
            <Bot className="w-4 h-4 text-emerald-600 animate-spin" />
            <span>AI is analyzing travel data...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* SUGGESTED QUICK PROMPT CHIPS */}
      <div className="px-4 py-2 border-t border-stone-200/80 bg-[#fdfaf5]">
        <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">
          Suggested Questions
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {t.chatbot.quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-white border border-stone-300 text-stone-700 hover:border-amber-500 hover:text-amber-900 whitespace-nowrap transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* INPUT BAR */}
      <div className="p-4 border-t-2 border-stone-200 bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.chatbot.inputPlaceholder}
            className="flex-1 px-4 py-3 rounded-2xl border-2 border-stone-200 focus:border-emerald-600 focus:outline-none text-stone-900 text-xs sm:text-sm font-medium bg-[#faf7f0]/50"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="p-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_3px_0_0_#065f46] active:translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

    </div>
  );
};
