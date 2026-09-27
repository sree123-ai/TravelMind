import React, { useState } from 'react';
import { Compass, Globe, Sparkles, User, LogOut, Utensils, ShieldAlert, Luggage, MapPin, Calendar, Bot, Menu, X } from 'lucide-react';
import { LanguageCode, UserProfile } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  language: LanguageCode;
  onSelectLanguage: (lang: LanguageCode) => void;
  user: UserProfile | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  onToggleChatbot: () => void;
  activeAllergiesCount: number;
}

const LANGUAGES: { code: LanguageCode; label: string; nativeName: string }[] = [
  { code: 'en', label: 'English', nativeName: 'English' },
  { code: 'ta', label: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'hi', label: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'te', label: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ml', label: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'kn', label: 'Kannada', nativeName: 'ಕನ್ನಡ' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  language,
  onSelectLanguage,
  user,
  onOpenAuth,
  onLogout,
  onToggleChatbot,
  activeAllergiesCount,
}) => {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const navItems = [
    { id: 'planner', label: t.nav.planner, icon: Compass },
    { id: 'destinations', label: t.nav.destinations, icon: MapPin },
    { id: 'food', label: t.nav.food, icon: Utensils, badge: null },
    { 
      id: 'allergy', 
      label: t.nav.allergy, 
      icon: ShieldAlert, 
      badge: activeAllergiesCount > 0 ? `${activeAllergiesCount}` : null 
    },
    { id: 'packing', label: t.nav.packing, icon: Luggage },
    { id: 'itinerary', label: t.nav.itinerary, icon: Calendar },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#fdfbf7]/90 backdrop-blur-md border-b-2 border-[#e7dec8] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => onSelectTab('planner')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-600 flex items-center justify-center text-white shadow-[0_4px_0_0_#9a3412] transform group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-7 h-7 animate-[spin_12s_linear_infinite]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-2xl tracking-tight text-stone-900 font-serif">
                  TravelMind<span className="text-amber-600 font-sans text-xl ml-0.5">AI</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  <Sparkles className="w-3 h-3 mr-1 text-amber-600" /> 2026 Edition
                </span>
              </div>
              <p className="text-xs text-stone-700 font-medium hidden md:block">
                {t.appTagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#f4ece0]/70 p-1.5 rounded-2xl border border-[#ded3be]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-bold transition-all duration-150 ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-[0_3px_0_0_#92400e] -translate-y-0.5'
                      : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-100' : 'text-stone-500'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-extrabold bg-rose-500 text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border-2 border-stone-300 hover:border-amber-500 text-stone-800 text-xs sm:text-sm font-bold shadow-[0_2px_0_0_#d6d3d1] active:translate-y-0.5 transition-all"
                title="Select Application Language"
              >
                <Globe className="w-4 h-4 text-amber-600" />
                <span>{LANGUAGES.find((l) => l.code === language)?.nativeName}</span>
              </button>

              {langMenuOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-[#fffefb] rounded-2xl shadow-xl border-2 border-amber-200/80 py-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setLangMenuOpen(false)}
                >
                  <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-stone-400 border-b border-stone-100">
                    Application Language
                  </div>
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onSelectLanguage(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2 text-sm font-semibold transition-colors ${
                        language === lang.code
                          ? 'bg-amber-100/70 text-amber-900 font-bold'
                          : 'text-stone-700 hover:bg-amber-50'
                      }`}
                    >
                      <span>{lang.nativeName}</span>
                      <span className="text-xs text-stone-600 font-normal">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* AI Assistant Drawer Trigger */}
            <button
              onClick={onToggleChatbot}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-[0_3px_0_0_#065f46] active:translate-y-0.5 transition-all"
              title={t.nav.assistant}
            >
              <Bot className="w-4 h-4" />
              <span className="hidden sm:inline">{t.nav.assistant}</span>
            </button>

            {/* User Profile / Login */}
            {user ? (
              <div className="flex items-center gap-2">
                <div 
                  onClick={onOpenAuth}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-300 cursor-pointer hover:bg-amber-100 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-xs font-bold text-stone-800 hidden md:inline">
                    {user.name}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="p-2 rounded-xl text-stone-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                  title={t.nav.logout}
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-bold shadow-[0_3px_0_0_#44403c] active:translate-y-0.5 transition-all"
              >
                <User className="w-4 h-4" />
                <span>{t.nav.login}</span>
              </button>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-stone-200/80 text-stone-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fdfbf7] border-t border-stone-200 px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm ${
                  isActive
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-stone-700 bg-stone-100/70 hover:bg-stone-200/70'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-rose-500 text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
