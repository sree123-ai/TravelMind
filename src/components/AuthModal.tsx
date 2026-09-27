import React, { useState } from 'react';
import { X, Lock, Mail, User, Compass, Sparkles } from 'lucide-react';
import { LanguageCode, UserProfile } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: LanguageCode;
  onLoginSuccess: (user: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  language,
  onLoginSuccess,
}) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;
  const t = TRANSLATIONS[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || (isSignUp && !name)) {
      setError('Please fill in all required fields.');
      return;
    }

    const user: UserProfile = {
      id: `usr_${Date.now()}`,
      name: isSignUp ? name : email.split('@')[0],
      email,
      preferredLanguage: language,
      savedTripsCount: 1,
    };

    localStorage.setItem('travelmind_user', JSON.stringify(user));
    onLoginSuccess(user);
    onClose();
  };

  const handleGuestLogin = () => {
    const guestUser: UserProfile = {
      id: `guest_${Date.now()}`,
      name: 'Guest Traveler',
      email: 'traveler@travelmind.ai',
      preferredLanguage: language,
      savedTripsCount: 0,
    };
    localStorage.setItem('travelmind_user', JSON.stringify(guestUser));
    onLoginSuccess(guestUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#fffdfa] rounded-3xl border-3 border-[#e7dec8] shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="text-center mb-6">
          <div className="inline-flex p-3 rounded-2xl bg-amber-500 text-white shadow-[0_4px_0_0_#b45309] mb-3">
            <Compass className="w-8 h-8 animate-[spin_10s_linear_infinite]" />
          </div>
          <h2 className="text-2xl font-bold font-serif text-stone-900">
            {isSignUp ? t.auth.signupTitle : t.auth.loginTitle}
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            {t.appTagline}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                {t.auth.name}
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sreethu"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-stone-200 focus:border-amber-500 focus:outline-none text-stone-800 text-sm font-medium bg-[#faf7f0]/50"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
              {t.auth.email}
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-stone-200 focus:border-amber-500 focus:outline-none text-stone-800 text-sm font-medium bg-[#faf7f0]/50"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
              {t.auth.password}
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-stone-200 focus:border-amber-500 focus:outline-none text-stone-800 text-sm font-medium bg-[#faf7f0]/50"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-[0_4px_0_0_#92400e] active:translate-y-1 active:shadow-none transition-all"
          >
            {isSignUp ? t.auth.signupBtn : t.auth.loginBtn}
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-stone-200"></div>
          <span className="px-3 text-xs font-bold text-stone-400 uppercase tracking-widest">{t.auth.or}</span>
          <div className="flex-1 border-t border-stone-200"></div>
        </div>

        {/* Guest Mode */}
        <button
          onClick={handleGuestLogin}
          type="button"
          className="w-full py-2.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs border border-stone-300 transition-colors flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>{t.auth.guestBtn}</span>
        </button>

        {/* Switch Mode Toggle */}
        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError('');
            }}
            className="text-xs font-bold text-amber-700 hover:text-amber-800 underline transition-colors"
          >
            {isSignUp ? t.auth.switchLogin : t.auth.switchSignup}
          </button>
        </div>
      </div>
    </div>
  );
};
