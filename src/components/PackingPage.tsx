import React, { useState } from 'react';
import { 
  Luggage, CheckSquare, Square, Plus, CloudRain, Sun, 
  ThermometerSnowflake, ShieldCheck, Sparkles, Filter 
} from 'lucide-react';
import { LanguageCode, PackingItem, TripContext } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface PackingPageProps {
  tripContext: TripContext;
  language: LanguageCode;
  onUpdateTripContext: (partial: Partial<TripContext>) => void;
}

export const PackingPage: React.FC<PackingPageProps> = ({
  tripContext,
  language,
  onUpdateTripContext,
}) => {
  const t = TRANSLATIONS[language];
  const items = tripContext.packingList || [];
  const weather = tripContext.liveWeather;
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [newItemName, setNewItemName] = useState('');

  const toggleItemPacked = (itemId: string) => {
    const updated = items.map((item) =>
      item.id === itemId ? { ...item, packed: !item.packed } : item
    );
    onUpdateTripContext({ packingList: updated });
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const newItem: PackingItem = {
      id: `custom_${Date.now()}`,
      name: newItemName.trim(),
      category: 'essentials',
      packed: false,
      custom: true,
    };

    onUpdateTripContext({ packingList: [...items, newItem] });
    setNewItemName('');
  };

  const packedCount = items.filter((i) => i.packed).length;
  const progressPercent = items.length > 0 ? Math.round((packedCount / items.length) * 100) : 0;

  const filteredItems = items.filter((i) => {
    if (filterCategory === 'all') return true;
    return i.category === filterCategory;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      
      {/* HEADER */}
      <div className="bg-[#fefcf8] rounded-3xl border-3 border-[#ebdcc3] p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-2">
              <Luggage className="w-3.5 h-3.5 text-amber-700" />
              <span>Smart Packing Assistant</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900">
              {t.packing.pageTitle}
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
              {t.packing.pageSubtitle}
            </p>
          </div>

          {/* Progress Pill */}
          <div className="bg-[#faf6ee] border-2 border-amber-300 px-5 py-3 rounded-2xl flex flex-col items-center sm:items-end">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
              {t.packing.progress}
            </span>
            <div className="text-lg font-extrabold text-stone-900">
              {packedCount} / {items.length} ({progressPercent}%)
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-stone-200 h-3 rounded-full overflow-hidden mt-6">
          <div
            className="bg-gradient-to-r from-amber-500 to-emerald-600 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {progressPercent === 100 && (
          <div className="mt-3 p-3 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>{t.packing.allPacked}</span>
          </div>
        )}
      </div>

      {/* WEATHER-ADAPTIVE NOTICE BANNER */}
      {weather && (
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-300 flex items-start gap-3">
          {weather.isRainExpected ? (
            <CloudRain className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          ) : weather.temperature >= 33 ? (
            <Sun className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
          ) : (
            <ThermometerSnowflake className="w-6 h-6 text-sky-500 shrink-0 mt-0.5" />
          )}

          <div className="text-xs text-stone-800">
            <span className="font-extrabold uppercase tracking-wide text-amber-950 block mb-0.5">
              Live Climate Connection
            </span>
            <p>
              {weather.isRainExpected
                ? 'Rain alert is active for your destination. We have automatically added rain protection gear to your checklist.'
                : weather.temperature >= 33
                ? `High daytime temperature (${weather.temperature}°C) detected. Sun protection and hydration essentials have been synced.`
                : 'Current destination weather is pleasant. General travel layers and essentials are prioritized.'}
            </p>
          </div>
        </div>
      )}

      {/* ADD CUSTOM PACKING ITEM */}
      <div className="bg-[#fffdfa] rounded-3xl border-2 border-stone-200 p-5 sm:p-6 shadow-sm">
        <form onSubmit={handleAddItem} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder={t.packing.addItemPlaceholder}
            className="flex-1 px-4 py-2.5 rounded-2xl border-2 border-stone-200 focus:border-amber-600 focus:outline-none text-stone-900 text-xs sm:text-sm font-medium bg-white"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shadow-[0_3px_0_0_#44403c] active:translate-y-0.5 flex items-center justify-center gap-1.5 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>{t.packing.addBtn}</span>
          </button>
        </form>
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'all', label: 'All Items' },
          { id: 'essentials', label: t.packing.categoryEssentials },
          { id: 'clothing', label: t.packing.categoryClothing },
          { id: 'health', label: t.packing.categoryHealth },
          { id: 'weather', label: t.packing.categoryWeather },
          { id: 'electronics', label: t.packing.categoryElectronics },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterCategory(tab.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              filterCategory === tab.id
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* PACKING CHECKLIST ITEMS */}
      <div className="bg-white rounded-3xl border-3 border-stone-200 p-6 sm:p-8 space-y-3">
        {filteredItems.length === 0 ? (
          <div className="p-6 text-center text-xs text-stone-500">
            No items in this category.
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleItemPacked(item.id)}
              className={`p-3.5 sm:p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-start justify-between gap-3 ${
                item.packed
                  ? 'bg-stone-50 border-stone-200 opacity-60'
                  : item.weatherReason
                  ? 'bg-amber-50/50 border-amber-300 hover:border-amber-400'
                  : 'bg-white border-stone-200 hover:border-stone-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {item.packed ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Square className="w-5 h-5 text-stone-400" />
                  )}
                </div>
                <div>
                  <div
                    className={`text-xs sm:text-sm font-bold ${
                      item.packed ? 'line-through text-stone-500' : 'text-stone-900'
                    }`}
                  >
                    {item.name}
                  </div>
                  {item.weatherReason && (
                    <div className="text-[11px] text-amber-800 font-semibold mt-0.5 flex items-center gap-1">
                      <span>• {item.weatherReason}</span>
                    </div>
                  )}
                </div>
              </div>

              {item.weatherReason && (
                <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-900 border border-amber-300">
                  Adaptive
                </span>
              )}
            </div>
          ))
        )}
      </div>

    </div>
  );
};
