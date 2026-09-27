import React, { useState } from 'react';
import { X, Sparkles, Check, ChevronRight, ChevronLeft, Edit3, ShieldAlert, Compass, Calendar, DollarSign, Users, Sun, Utensils } from 'lucide-react';
import { BudgetTier, ClimatePreference, LanguageCode, TravelGroup, TravelPace, TripContext } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface QuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: LanguageCode;
  tripContext: TripContext;
  onUpdateTripContext: (partial: Partial<TripContext>) => void;
  onComplete: () => void;
}

export const QuestionnaireModal: React.FC<QuestionnaireModalProps> = ({
  isOpen,
  onClose,
  language,
  tripContext,
  onUpdateTripContext,
  onComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isReviewMode, setIsReviewMode] = useState(false);

  // Local state initialized from tripContext
  const [group, setGroup] = useState<TravelGroup>(tripContext.travelGroup || 'couple');
  const [pace, setPace] = useState<TravelPace>(tripContext.travelPace || 'moderate');
  const [budget, setBudget] = useState<BudgetTier>(tripContext.budgetTier || 'comfort');
  const [climate, setClimate] = useState<ClimatePreference>(tripContext.climatePreference || 'heritage');
  const [foodPrefs, setFoodPrefs] = useState<string[]>(tripContext.foodPreferences || ['Vegetarian']);
  const [allergies, setAllergies] = useState<string[]>(tripContext.allergyPreferences || []);
  const [duration, setDuration] = useState<number>(tripContext.durationDays || 3);

  if (!isOpen) return null;
  const t = TRANSLATIONS[language];

  const totalSteps = 7;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsReviewMode(true);
    }
  };

  const handleBack = () => {
    if (isReviewMode) {
      setIsReviewMode(false);
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSaveAndGenerate = () => {
    onUpdateTripContext({
      travelGroup: group,
      travelPace: pace,
      budgetTier: budget,
      climatePreference: climate,
      foodPreferences: foodPrefs,
      allergyPreferences: allergies,
      durationDays: duration,
    });
    onComplete();
    onClose();
  };

  const toggleFoodPref = (item: string) => {
    if (foodPrefs.includes(item)) {
      setFoodPrefs(foodPrefs.filter((f) => f !== item));
    } else {
      setFoodPrefs([...foodPrefs, item]);
    }
  };

  const toggleAllergy = (item: string) => {
    if (allergies.includes(item)) {
      setAllergies(allergies.filter((a) => a !== item));
    } else {
      setAllergies([...allergies, item]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/65 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#fffdf9] rounded-3xl border-3 border-[#ebdcc3] shadow-2xl p-6 sm:p-8 max-h-[90vh] flex flex-col justify-between overflow-y-auto">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b-2 border-stone-200 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-[0_3px_0_0_#b45309]">
              <Compass className="w-6 h-6 animate-[spin_8s_linear_infinite]" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif text-stone-900">
                {isReviewMode ? t.questionnaire.reviewTitle : t.questionnaire.startPlanning}
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                {isReviewMode ? t.questionnaire.reviewDesc : `${t.questionnaire.stepCount} ${currentStep} of ${totalSteps}`}
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

        {/* Progress Bar (if not in review mode) */}
        {!isReviewMode && (
          <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden mb-6">
            <div
              className="bg-amber-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        )}

        {/* CONTENT BODY */}
        <div className="my-auto py-2">
          {isReviewMode ? (
            /* REVIEW ANSWERS SCREEN */
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-200/80">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  
                  <div className="flex items-start justify-between p-3 rounded-xl bg-white border border-stone-200">
                    <div>
                      <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">Travel Group</div>
                      <div className="font-extrabold text-stone-900 capitalize mt-0.5">{group}</div>
                    </div>
                    <button onClick={() => { setIsReviewMode(false); setCurrentStep(1); }} className="text-amber-700 p-1 hover:bg-amber-50 rounded-lg">
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-start justify-between p-3 rounded-xl bg-white border border-stone-200">
                    <div>
                      <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">Pace & Budget</div>
                      <div className="font-extrabold text-stone-900 capitalize mt-0.5">{pace} pace • {budget} tier</div>
                    </div>
                    <button onClick={() => { setIsReviewMode(false); setCurrentStep(2); }} className="text-amber-700 p-1 hover:bg-amber-50 rounded-lg">
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-start justify-between p-3 rounded-xl bg-white border border-stone-200">
                    <div>
                      <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">Climate Preference</div>
                      <div className="font-extrabold text-stone-900 capitalize mt-0.5">{climate}</div>
                    </div>
                    <button onClick={() => { setIsReviewMode(false); setCurrentStep(4); }} className="text-amber-700 p-1 hover:bg-amber-50 rounded-lg">
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-start justify-between p-3 rounded-xl bg-white border border-stone-200">
                    <div>
                      <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">Duration</div>
                      <div className="font-extrabold text-stone-900 mt-0.5">{duration} Days Itinerary</div>
                    </div>
                    <button onClick={() => { setIsReviewMode(false); setCurrentStep(7); }} className="text-amber-700 p-1 hover:bg-amber-50 rounded-lg">
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="sm:col-span-2 flex items-start justify-between p-3 rounded-xl bg-white border border-stone-200">
                    <div>
                      <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">Food Preferences</div>
                      <div className="font-extrabold text-stone-900 mt-0.5">
                        {foodPrefs.length > 0 ? foodPrefs.join(', ') : 'No specific dietary restriction'}
                      </div>
                    </div>
                    <button onClick={() => { setIsReviewMode(false); setCurrentStep(5); }} className="text-amber-700 p-1 hover:bg-amber-50 rounded-lg">
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="sm:col-span-2 flex items-start justify-between p-3 rounded-xl bg-rose-50/70 border border-rose-200">
                    <div>
                      <div className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                        Food Allergies & Sensitivities
                      </div>
                      <div className="font-extrabold text-rose-950 mt-0.5">
                        {allergies.length > 0 ? allergies.join(', ') : 'None specified (Safe mode)'}
                      </div>
                    </div>
                    <button onClick={() => { setIsReviewMode(false); setCurrentStep(6); }} className="text-rose-700 p-1 hover:bg-rose-100 rounded-lg">
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ) : (
            /* STEP BY STEP QUESTIONNAIRE */
            <div>
              {/* STEP 1: TRAVEL GROUP */}
              {currentStep === 1 && (
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-serif mb-1">{t.questionnaire.groupTitle}</h3>
                  <p className="text-xs text-stone-500 mb-5">{t.questionnaire.groupSubtitle}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'solo', label: 'Solo Traveler', icon: '🎒' },
                      { id: 'couple', label: 'Couple / Romantic', icon: '❤️' },
                      { id: 'family', label: 'Family with Kids', icon: '👨‍👩‍👧‍👦' },
                      { id: 'friends', label: 'Friends Group', icon: '🎉' },
                      { id: 'seniors', label: 'Senior Travelers', icon: '🧓' },
                    ].map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setGroup(g.id as TravelGroup)}
                        className={`p-4 rounded-2xl border-2 text-center transition-all ${
                          group === g.id
                            ? 'border-amber-600 bg-amber-50 shadow-[0_3px_0_0_#b45309]'
                            : 'border-stone-200 bg-white hover:border-amber-300'
                        }`}
                      >
                        <span className="text-2xl block mb-1">{g.icon}</span>
                        <span className="text-xs font-bold text-stone-800">{g.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: TRAVEL PACE */}
              {currentStep === 2 && (
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-serif mb-1">{t.questionnaire.paceTitle}</h3>
                  <p className="text-xs text-stone-500 mb-5">{t.questionnaire.paceSubtitle}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'relaxed', label: 'Relaxed & Slow', desc: '1–2 sights per day, long leisurely meals and rest.', icon: '🧘' },
                      { id: 'moderate', label: 'Balanced & Steady', desc: '3 sights per day, good balance of heritage and cafes.', icon: '🚶' },
                      { id: 'fast', label: 'Action & Fast-Paced', desc: '4+ sights per day, maximize landmarks & photography.', icon: '⚡' },
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPace(p.id as TravelPace)}
                        className={`p-4 rounded-2xl border-2 text-left transition-all ${
                          pace === p.id
                            ? 'border-amber-600 bg-amber-50 shadow-[0_3px_0_0_#b45309]'
                            : 'border-stone-200 bg-white hover:border-amber-300'
                        }`}
                      >
                        <span className="text-2xl block mb-2">{p.icon}</span>
                        <div className="text-sm font-extrabold text-stone-900">{p.label}</div>
                        <p className="text-[11px] text-stone-500 mt-1">{p.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: BUDGET TIER */}
              {currentStep === 3 && (
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-serif mb-1">{t.questionnaire.budgetTitle}</h3>
                  <p className="text-xs text-stone-500 mb-5">{t.questionnaire.budgetSubtitle}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'budget', label: 'Budget / Backpacker', desc: 'Hostels, local heritage eateries, street food, public transport.', icon: '🪙' },
                      { id: 'comfort', label: 'Comfort / Mid-Range', desc: 'Boutique hotels, guided monument passes, curated dine-outs.', icon: '💳' },
                      { id: 'luxury', label: 'Luxury & Heritage Palaces', desc: '5-star heritage properties, private chauffeured tours.', icon: '👑' },
                    ].map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setBudget(b.id as BudgetTier)}
                        className={`p-4 rounded-2xl border-2 text-left transition-all ${
                          budget === b.id
                            ? 'border-amber-600 bg-amber-50 shadow-[0_3px_0_0_#b45309]'
                            : 'border-stone-200 bg-white hover:border-amber-300'
                        }`}
                      >
                        <span className="text-2xl block mb-2">{b.icon}</span>
                        <div className="text-sm font-extrabold text-stone-900">{b.label}</div>
                        <p className="text-[11px] text-stone-500 mt-1">{b.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: CLIMATE PREFERENCE */}
              {currentStep === 4 && (
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-serif mb-1">{t.questionnaire.climateTitle}</h3>
                  <p className="text-xs text-stone-500 mb-5">{t.questionnaire.climateSubtitle}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'heritage', label: 'Heritage & Dry Sunny', desc: 'Fortresses, royal citadels and vibrant bazaars.', icon: '🏰' },
                      { id: 'cool', label: 'Hill Stations & Mist', desc: 'Tea terraces, cloud valleys, cool mountain air.', icon: '⛰️' },
                      { id: 'coastal', label: 'Coastal Breezes & Backwaters', desc: 'Palm lagoons, beaches, and gentle shore air.', icon: '🌊' },
                      { id: 'warm', label: 'Tropical & Cultural Temple Cities', desc: 'Soaring gopurams, riverside ghats, warm evenings.', icon: '🛕' },
                    ].map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setClimate(c.id as ClimatePreference)}
                        className={`p-4 rounded-2xl border-2 text-left transition-all ${
                          climate === c.id
                            ? 'border-amber-600 bg-amber-50 shadow-[0_3px_0_0_#b45309]'
                            : 'border-stone-200 bg-white hover:border-amber-300'
                        }`}
                      >
                        <span className="text-2xl block mb-1">{c.icon}</span>
                        <div className="text-xs font-extrabold text-stone-900">{c.label}</div>
                        <p className="text-[11px] text-stone-500 mt-1">{c.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5: FOOD PREFERENCES */}
              {currentStep === 5 && (
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-serif mb-1">{t.questionnaire.foodTitle}</h3>
                  <p className="text-xs text-stone-500 mb-4">{t.questionnaire.foodSubtitle}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      'Pure Vegetarian',
                      'Vegan (Dairy-Free)',
                      'Non-Vegetarian',
                      'Seafood Lover',
                      'Street Food Explorer',
                      'Jain Friendly',
                    ].map((food) => {
                      const selected = foodPrefs.includes(food);
                      return (
                        <button
                          key={food}
                          type="button"
                          onClick={() => toggleFoodPref(food)}
                          className={`p-3 rounded-2xl border-2 text-left text-xs font-bold transition-all flex items-center justify-between ${
                            selected
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-950 shadow-[0_2px_0_0_#059669]'
                              : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                          }`}
                        >
                          <span>{food}</span>
                          {selected && <Check className="w-4 h-4 text-emerald-600" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 6: ALLERGIES PREFERENCES */}
              {currentStep === 6 && (
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldAlert className="w-5 h-5 text-rose-600" />
                    <h3 className="text-lg font-bold text-stone-900 font-serif">{t.questionnaire.allergiesTitle}</h3>
                  </div>
                  <p className="text-xs text-stone-500 mb-4">{t.questionnaire.allergiesSubtitle}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      'Peanuts',
                      'Tree Nuts',
                      'Dairy / Milk',
                      'Gluten / Wheat',
                      'Shellfish / Seafood',
                      'Eggs',
                      'Sesame',
                      'Mustard',
                    ].map((allergy) => {
                      const selected = allergies.includes(allergy);
                      return (
                        <button
                          key={allergy}
                          type="button"
                          onClick={() => toggleAllergy(allergy)}
                          className={`p-3 rounded-2xl border-2 text-center text-xs font-bold transition-all ${
                            selected
                              ? 'border-rose-600 bg-rose-50 text-rose-950 shadow-[0_2px_0_0_#e11d48]'
                              : 'border-stone-200 bg-white text-stone-700 hover:border-rose-300'
                          }`}
                        >
                          {allergy}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-[11px] text-stone-700 mt-4 italic">
                    Note: You can also type custom allergies at any time in the dedicated Allergy Safety page.
                  </p>
                </div>
              )}

              {/* STEP 7: DURATION */}
              {currentStep === 7 && (
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-serif mb-1">{t.questionnaire.durationTitle}</h3>
                  <p className="text-xs text-stone-500 mb-5">{t.questionnaire.durationSubtitle}</p>
                  <div className="flex items-center justify-center gap-3">
                    {[1, 2, 3, 4, 5, 7].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setDuration(num)}
                        className={`w-14 h-16 rounded-2xl border-2 flex flex-col items-center justify-center font-bold transition-all ${
                          duration === num
                            ? 'border-amber-600 bg-amber-500 text-white shadow-[0_4px_0_0_#92400e] -translate-y-1'
                            : 'border-stone-300 bg-white text-stone-800 hover:border-amber-400'
                        }`}
                      >
                        <span className="text-xl">{num}</span>
                        <span className="text-[10px] uppercase">{t.questionnaire.daysCount}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* BOTTOM ACTION BUTTONS */}
        <div className="flex items-center justify-between border-t-2 border-stone-200 pt-5 mt-6">
          <button
            onClick={handleBack}
            disabled={currentStep === 1 && !isReviewMode}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all ${
              currentStep === 1 && !isReviewMode
                ? 'opacity-40 cursor-not-allowed text-stone-400'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            {t.questionnaire.back}
          </button>

          {isReviewMode ? (
            <button
              onClick={handleSaveAndGenerate}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-sm shadow-[0_4px_0_0_#9a3412] active:translate-y-1 active:shadow-none flex items-center gap-2 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              {t.questionnaire.generatePlan}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-[0_4px_0_0_#92400e] active:translate-y-0.5 flex items-center gap-1.5 transition-all"
            >
              <span>{currentStep === totalSteps ? t.questionnaire.reviewAnswers : t.questionnaire.next}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
