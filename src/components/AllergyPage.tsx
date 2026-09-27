import React, { useState } from 'react';
import { 
  ShieldAlert, Plus, X, AlertTriangle, HeartPulse, Check, 
  Info, Sparkles, Utensils, MapPin 
} from 'lucide-react';
import { LanguageCode, TripContext } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface AllergyPageProps {
  tripContext: TripContext;
  language: LanguageCode;
  onUpdateTripContext: (partial: Partial<TripContext>) => void;
  onNavigateToFoodPage: () => void;
}

const COMMON_ALLERGIES = [
  'Peanuts',
  'Tree Nuts (Almonds, Cashews, Pistachios)',
  'Dairy & Milk (Ghee, Paneer, Curd)',
  'Gluten & Wheat (Maida, Atta, Rava)',
  'Shellfish & Seafood (Crab, Prawns, Fish)',
  'Eggs',
  'Sesame Seeds (Til)',
  'Mustard Seeds',
  'Soy & Soya Chunks',
];

export const AllergyPage: React.FC<AllergyPageProps> = ({
  tripContext,
  language,
  onUpdateTripContext,
  onNavigateToFoodPage,
}) => {
  const t = TRANSLATIONS[language];
  const [customInput, setCustomInput] = useState('');
  const [inputError, setInputError] = useState('');

  const presetAllergies = tripContext.allergyPreferences || [];
  const customAllergies = tripContext.customAllergies || [];

  const handleTogglePreset = (allergy: string) => {
    if (presetAllergies.includes(allergy)) {
      onUpdateTripContext({
        allergyPreferences: presetAllergies.filter((a) => a !== allergy),
      });
    } else {
      onUpdateTripContext({
        allergyPreferences: [...presetAllergies, allergy],
      });
    }
  };

  const handleAddCustomAllergy = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = customInput.trim();
    if (!trimmed) return;

    if (
      customAllergies.some((a) => a.toLowerCase() === trimmed.toLowerCase()) ||
      presetAllergies.some((a) => a.toLowerCase() === trimmed.toLowerCase())
    ) {
      setInputError('This allergy is already added to your profile.');
      return;
    }

    const updated = [...customAllergies, trimmed];
    onUpdateTripContext({ customAllergies: updated });
    setCustomInput('');
    setInputError('');
  };

  const handleRemoveCustomAllergy = (allergyToRemove: string) => {
    onUpdateTripContext({
      customAllergies: customAllergies.filter((a) => a !== allergyToRemove),
    });
  };

  const destination = tripContext.selectedDestination;
  const district = tripContext.selectedDistrict || 'Madurai';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      
      {/* HEADER */}
      <div className="bg-[#fefcf8] rounded-3xl border-3 border-[#ebdcc3] p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-rose-100 text-rose-900 border border-rose-300 mb-2">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
              <span>{t.allergyPage.pageTitle}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900">
              {t.allergyPage.pageTitle}
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
              {t.allergyPage.pageSubtitle}
            </p>
          </div>

          <button
            onClick={onNavigateToFoodPage}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-[0_3px_0_0_#92400e] active:translate-y-0.5 transition-all self-start md:self-auto"
          >
            <Utensils className="w-4 h-4" />
            <span>View Food Recommendations</span>
          </button>
        </div>
      </div>

      {/* CRITICAL MEDICAL & HEALTHCARE DISCLAIMER */}
      <div className="p-5 sm:p-6 rounded-3xl bg-rose-50 border-3 border-rose-300 shadow-sm flex items-start gap-4">
        <HeartPulse className="w-8 h-8 text-rose-600 shrink-0 mt-0.5" />
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-rose-950 font-serif">
            {t.allergyPage.safetyReminderTitle}
          </h3>
          <p className="text-xs text-rose-900 mt-1 leading-relaxed font-semibold">
            {t.allergyPage.safetyReminderText}
          </p>
          <p className="text-[11px] text-rose-800/80 mt-1">
            TravelMind AI does not diagnose allergies or prescribe medication. Always inspect ingredients and confirm preparation methods directly with food vendors.
          </p>
        </div>
      </div>

      {/* ACTIVE ALLERGIES BADGE LIST */}
      <div className="bg-white rounded-3xl border-3 border-stone-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold font-serif text-stone-900 flex items-center justify-between">
          <span>{t.allergyPage.activeAllergies}</span>
          <span className="text-xs font-semibold text-stone-500">
            {presetAllergies.length + customAllergies.length} tracked
          </span>
        </h2>

        {presetAllergies.length === 0 && customAllergies.length === 0 ? (
          <div className="p-4 rounded-2xl bg-[#faf7f0] border border-stone-200 text-stone-500 text-xs italic text-center">
            {t.allergyPage.noAllergiesActive}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2.5">
            {presetAllergies.map((allergy) => (
              <span
                key={allergy}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-950 border border-amber-300 shadow-xs"
              >
                <span>{allergy}</span>
                <button
                  onClick={() => handleTogglePreset(allergy)}
                  className="hover:text-rose-600 transition-colors"
                  title={t.allergyPage.removeAllergy}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}

            {customAllergies.map((custom) => (
              <span
                key={custom}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-rose-100 text-rose-950 border border-rose-300 shadow-xs"
              >
                <span>Custom: {custom}</span>
                <button
                  onClick={() => handleRemoveCustomAllergy(custom)}
                  className="hover:text-rose-600 transition-colors"
                  title={t.allergyPage.removeAllergy}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ADD CUSTOM ALLERGY SECTION */}
      <div className="bg-[#fefcf8] rounded-3xl border-3 border-amber-300 p-6 sm:p-8 space-y-4">
        <div>
          <h2 className="text-lg font-bold font-serif text-stone-900 flex items-center gap-2">
            <Plus className="w-5 h-5 text-amber-600" />
            <span>{t.allergyPage.addCustomAllergy}</span>
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Manually type any specific food allergy (e.g. Peanut, Shellfish, Bell pepper, Mustard, Mushroom, MSG, Soy).
          </p>
        </div>

        <form onSubmit={handleAddCustomAllergy} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={customInput}
            onChange={(e) => {
              setCustomInput(e.target.value);
              setInputError('');
            }}
            placeholder={t.allergyPage.customAllergyPlaceholder}
            className="flex-1 px-4 py-3 rounded-2xl border-2 border-stone-300 focus:border-amber-600 focus:outline-none text-stone-900 text-sm font-medium bg-white shadow-inner"
          />
          <button
            type="submit"
            className="py-3 px-6 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-sm shadow-[0_4px_0_0_#92400e] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-1.5"
          >
            <span>{t.allergyPage.addBtn}</span>
          </button>
        </form>

        {inputError && (
          <p className="text-xs font-semibold text-rose-600">{inputError}</p>
        )}
      </div>

      {/* COMMON VERIFIED ALLERGIES SELECTION GRID */}
      <div className="bg-white rounded-3xl border-3 border-stone-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold font-serif text-stone-900">
          {t.allergyPage.selectCommonAllergies}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {COMMON_ALLERGIES.map((allergy) => {
            const isSelected = presetAllergies.includes(allergy);
            return (
              <button
                key={allergy}
                type="button"
                onClick={() => handleTogglePreset(allergy)}
                className={`p-3.5 rounded-2xl border-2 text-left text-xs font-bold transition-all flex items-center justify-between ${
                  isSelected
                    ? 'border-amber-600 bg-amber-50 text-amber-950 shadow-[0_2px_0_0_#b45309]'
                    : 'border-stone-200 bg-[#faf7f0]/60 text-stone-700 hover:border-amber-300'
                }`}
              >
                <span>{allergy}</span>
                {isSelected && <Check className="w-4 h-4 text-amber-600 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* DESTINATION SPECIFIC ADVISORY */}
      {destination && (
        <div className="p-6 rounded-3xl bg-[#faf6ee] border-2 border-[#ebdcc3] space-y-3">
          <div className="flex items-center gap-2 text-stone-900 font-bold font-serif text-base">
            <MapPin className="w-4 h-4 text-amber-700" />
            <span>
              {t.allergyPage.destinationAdvisory} — {district}
            </span>
          </div>

          <p className="text-xs text-stone-600 leading-relaxed">
            In {district} ({destination.state}), traditional recipes often feature ghee, coconut bases, or cashews in sweet confections. If you have active allergies, mention them explicitly to the restaurant captain before ordering.
          </p>
        </div>
      )}

    </div>
  );
};
