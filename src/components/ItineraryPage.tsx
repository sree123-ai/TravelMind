import React, { useState } from 'react';
import { 
  Calendar, Clock, MapPin, Printer, ShieldAlert, Utensils, 
  Sparkles, CheckCircle2, ChevronDown, ChevronUp, Info 
} from 'lucide-react';
import { Destination, LanguageCode, TripContext } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface ItineraryPageProps {
  tripContext: TripContext;
  language: LanguageCode;
  onNavigateToFood: (destination: Destination) => void;
}

export const ItineraryPage: React.FC<ItineraryPageProps> = ({
  tripContext,
  language,
  onNavigateToFood,
}) => {
  const t = TRANSLATIONS[language];
  const destination = tripContext.selectedDestination;
  const days = tripContext.itinerary || [];
  const [activeDayTab, setActiveDayTab] = useState<number>(1);

  const handlePrint = () => {
    window.print();
  };

  const currentDay = days.find((d) => d.day === activeDayTab) || days[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      
      {/* HEADER */}
      <div className="bg-[#fefcf8] rounded-3xl border-3 border-[#ebdcc3] p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-2">
              <Calendar className="w-3.5 h-3.5 text-amber-700" />
              <span>
                {destination ? `${destination.district}, ${destination.state}` : 'AI Itinerary Plan'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900">
              {t.itinerary.pageTitle}
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
              {t.itinerary.pageSubtitle}
            </p>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shadow-[0_3px_0_0_#44403c] active:translate-y-0.5 transition-all self-start md:self-auto"
          >
            <Printer className="w-4 h-4" />
            <span>{t.itinerary.printExport}</span>
          </button>
        </div>

        {/* DAY SELECTOR TABS */}
        {days.length > 0 && (
          <div className="flex items-center gap-2.5 mt-6 overflow-x-auto pb-2">
            {days.map((d) => (
              <button
                key={d.day}
                onClick={() => setActiveDayTab(d.day)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 ${
                  activeDayTab === d.day
                    ? 'bg-amber-600 text-white shadow-[0_3px_0_0_#92400e] -translate-y-0.5'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {t.itinerary.day} {d.day}
              </button>
            ))}
          </div>
        )}
      </div>

      {!currentDay ? (
        <div className="p-8 rounded-3xl bg-white border-2 border-stone-200 text-center text-xs text-stone-500">
          No itinerary available. Select a destination in the Planner tab.
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* DAY THEME BANNER */}
          <div className="p-5 rounded-3xl bg-[#fdfaf5] border-2 border-amber-200 shadow-sm flex items-center justify-between">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900">
                {t.itinerary.day} {currentDay.day} Focus
              </div>
              <h2 className="text-xl font-bold font-serif text-stone-900">
                {currentDay.title}
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 hidden sm:inline-block">
              {currentDay.theme}
            </span>
          </div>

          {/* TIMELINE ACTIVITIES */}
          <div className="space-y-4">
            
            {/* MORNING */}
            <div className="p-6 rounded-3xl bg-white border-2 border-stone-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900">
                  🌅 {t.itinerary.morning} • {currentDay.morning.time}
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  {currentDay.morning.duration}
                </span>
              </div>
              <h3 className="text-lg font-bold font-serif text-stone-900 pt-1">
                {currentDay.morning.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentDay.morning.description}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-stone-500 pt-2 font-medium">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{currentDay.morning.location}</span>
              </div>
            </div>

            {/* AFTERNOON */}
            <div className="p-6 rounded-3xl bg-white border-2 border-stone-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-orange-100 text-orange-900">
                  ☀️ {t.itinerary.afternoon} • {currentDay.afternoon.time}
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  {currentDay.afternoon.duration}
                </span>
              </div>
              <h3 className="text-lg font-bold font-serif text-stone-900 pt-1">
                {currentDay.afternoon.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentDay.afternoon.description}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-stone-500 pt-2 font-medium">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{currentDay.afternoon.location}</span>
              </div>
            </div>

            {/* EVENING */}
            <div className="p-6 rounded-3xl bg-white border-2 border-stone-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-sky-100 text-sky-900">
                  🌇 {t.itinerary.evening} • {currentDay.evening.time}
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  {currentDay.evening.duration}
                </span>
              </div>
              <h3 className="text-lg font-bold font-serif text-stone-900 pt-1">
                {currentDay.evening.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentDay.evening.description}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-stone-500 pt-2 font-medium">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{currentDay.evening.location}</span>
              </div>
            </div>

            {/* NIGHT */}
            <div className="p-6 rounded-3xl bg-white border-2 border-stone-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-indigo-100 text-indigo-900">
                  🌙 {t.itinerary.night} • {currentDay.night.time}
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  {currentDay.night.duration}
                </span>
              </div>
              <h3 className="text-lg font-bold font-serif text-stone-900 pt-1">
                {currentDay.night.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentDay.night.description}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-stone-500 pt-2 font-medium">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{currentDay.night.location}</span>
              </div>
            </div>

          </div>

          {/* MEAL & ALLERGY TIPS SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-3xl bg-emerald-50/70 border-2 border-emerald-300 space-y-2">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-900">
                <Utensils className="w-4 h-4 text-emerald-700" />
                <span>{t.itinerary.foodTip}</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                {currentDay.foodSuggestion}
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-rose-50/70 border-2 border-rose-300 space-y-2">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-rose-900">
                <ShieldAlert className="w-4 h-4 text-rose-700" />
                <span>{t.itinerary.allergyNote}</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                {currentDay.allergyNote || 'Check ingredient lists and notify restaurant staff of active allergies.'}
              </p>
            </div>
          </div>

          {/* CULTURAL ETIQUETTE & LOCAL TIPS */}
          <div className="p-5 rounded-3xl bg-[#faf6ee] border-2 border-amber-200 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs text-stone-700">
              <span className="font-bold text-amber-950 block mb-0.5">
                {t.itinerary.etiquette}
              </span>
              <p>{currentDay.culturalEtiquette}</p>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
