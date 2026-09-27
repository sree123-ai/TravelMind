import React, { useMemo } from 'react';
import { 
  Utensils, ShieldAlert, AlertTriangle, CheckCircle2, MapPin, 
  Leaf, Coffee, Sparkles, HelpCircle, Info 
} from 'lucide-react';
import { Destination, LanguageCode, TripContext } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface FoodPageProps {
  tripContext: TripContext;
  language: LanguageCode;
  onNavigateToAllergyPage: () => void;
}

export const FoodPage: React.FC<FoodPageProps> = ({
  tripContext,
  language,
  onNavigateToAllergyPage,
}) => {
  const t = TRANSLATIONS[language];
  const destination = tripContext.selectedDestination;
  const state = tripContext.selectedState || 'Tamil Nadu';
  const district = tripContext.selectedDistrict || 'Madurai';

  // Active allergies (both preset and custom typed allergies!)
  const activeAllergies = useMemo(() => {
    return [
      ...(tripContext.allergyPreferences || []),
      ...(tripContext.customAllergies || []),
    ];
  }, [tripContext.allergyPreferences, tripContext.customAllergies]);

  const cuisineData = destination?.localCuisine;

  // Filter vegetarian options
  const vegDishes = useMemo(() => {
    return cuisineData?.cuisines.filter((c) => c.category === 'veg' || c.category === 'vegan') || [];
  }, [cuisineData]);

  // Filter vegan options
  const veganDishes = useMemo(() => {
    return cuisineData?.cuisines.filter((c) => c.category === 'vegan') || [];
  }, [cuisineData]);

  // Filter non-vegetarian options
  const nonVegDishes = useMemo(() => {
    return cuisineData?.cuisines.filter((c) => c.category === 'non-veg') || [];
  }, [cuisineData]);

  // Helper to check if dish contains any active allergy
  const getTriggeredAllergies = (allergens: string[]) => {
    if (activeAllergies.length === 0) return [];
    return activeAllergies.filter((myAllergy) =>
      allergens.some((dishAllergen) =>
        dishAllergen.toLowerCase().includes(myAllergy.toLowerCase()) ||
        myAllergy.toLowerCase().includes(dishAllergen.toLowerCase())
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      
      {/* PAGE HEADER */}
      <div className="bg-[#fefcf8] rounded-3xl border-3 border-[#ebdcc3] p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-2">
              <MapPin className="w-3.5 h-3.5 text-amber-700" />
              <span>{district}, {state} Culinary Heritage</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900">
              {t.foodPage.pageTitle}
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
              {t.foodPage.pageSubtitle}
            </p>
          </div>

          {/* Active Allergy Summary Pill */}
          <div className="flex flex-col sm:items-end">
            <button
              onClick={onNavigateToAllergyPage}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-rose-50 border-2 border-rose-300 hover:bg-rose-100 transition-colors text-xs font-bold text-rose-900 shadow-sm"
            >
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>
                {activeAllergies.length > 0
                  ? `${activeAllergies.length} Active Allergies Tracked`
                  : 'No Allergies Set — Configure'}
              </span>
            </button>
            {activeAllergies.length > 0 && (
              <span className="text-[11px] text-stone-500 mt-1 font-medium">
                Avoiding: {activeAllergies.join(', ')}
              </span>
            )}
          </div>
        </div>
      </div>

      {!cuisineData ? (
        <div className="p-8 rounded-3xl bg-white border-2 border-stone-200 text-center space-y-3">
          <Utensils className="w-12 h-12 text-stone-300 mx-auto" />
          <h3 className="text-lg font-bold text-stone-700">{t.foodPage.noFoodData}</h3>
          <p className="text-xs text-stone-500 max-w-md mx-auto">
            Select a verified destination in the Planner to explore its local culinary heritage.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          
          {/* SECTION 1: 🍛 LOCAL CUISINE OVERVIEW */}
          <div className="bg-[#fffdfa] rounded-3xl border-3 border-[#ebdcc3] p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
              <span>{t.foodPage.localCuisine}</span>
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed max-w-4xl">
              {cuisineData.overview}
            </p>
          </div>

          {/* SECTION 2 & 3: 🍽️ POPULAR LOCAL DISHES (ALLERGY-AWARE) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
                {t.foodPage.popularDishes}
              </h2>
              <span className="text-xs text-stone-500 font-semibold">
                Strictly authentic to {district}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cuisineData.cuisines.map((dish, idx) => {
                const triggered = getTriggeredAllergies(dish.allergens);
                const hasAllergyWarning = triggered.length > 0;

                return (
                  <div
                    key={idx}
                    className={`rounded-3xl border-2 p-5 sm:p-6 transition-all flex flex-col justify-between ${
                      hasAllergyWarning
                        ? 'bg-rose-50/60 border-rose-300'
                        : 'bg-white border-stone-200 hover:border-amber-400'
                    }`}
                  >
                    <div>
                      {/* Top Category Badge */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase ${
                              dish.category === 'vegan'
                                ? 'bg-emerald-100 text-emerald-800'
                                : dish.category === 'veg'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-orange-100 text-orange-900'
                            }`}
                          >
                            {dish.category}
                          </span>
                          <span className="text-xs font-semibold text-stone-500 font-serif">
                            {dish.localName}
                          </span>
                        </div>

                        {/* Allergen Warning Banner if triggered */}
                        {hasAllergyWarning && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-600 text-white flex items-center gap-1 shadow-xs animate-pulse">
                            <AlertTriangle className="w-3 h-3" />
                            <span>{t.foodPage.containsAllergenWarning} {triggered.join(', ')}</span>
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold font-serif text-stone-900">
                        {dish.name}
                      </h3>

                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        {dish.description}
                      </p>

                      {/* Allergens in preparation */}
                      <div className="mt-3 text-[11px] text-stone-500 font-medium">
                        <span className="font-bold text-stone-700">Common Allergens:</span>{' '}
                        {dish.allergens.length > 0 ? dish.allergens.join(', ') : 'None typically present'}
                      </div>
                    </div>

                    {/* Famous Spots */}
                    <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500">
                      <span className="font-semibold text-stone-700">Famous Spots:</span>
                      <span className="font-medium text-amber-800">{dish.famousSpots.join(' • ')}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION: 🥗 VEGETARIAN, 🌱 VEGAN & 🍗 NON-VEGETARIAN BREAKDOWN */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Vegetarian Options */}
            <div className="p-6 rounded-3xl bg-[#fbfdfa] border-2 border-green-200 space-y-3">
              <div className="flex items-center gap-2 text-green-900 font-bold text-sm">
                <Leaf className="w-4 h-4 text-green-600" />
                <span>{t.foodPage.vegOptions}</span>
              </div>
              <ul className="text-xs text-stone-700 space-y-2">
                {vegDishes.map((v, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{v.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vegan Options */}
            <div className="p-6 rounded-3xl bg-[#f6fcf8] border-2 border-emerald-200 space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>{t.foodPage.veganOptions}</span>
              </div>
              <ul className="text-xs text-stone-700 space-y-2">
                {veganDishes.length > 0 ? (
                  veganDishes.map((v, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{v.name}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-stone-500 italic">Naturally dairy-free dishes available upon request.</li>
                )}
              </ul>
            </div>

            {/* Non-Vegetarian Options */}
            <div className="p-6 rounded-3xl bg-[#fdfaf7] border-2 border-orange-200 space-y-3">
              <div className="flex items-center gap-2 text-orange-950 font-bold text-sm">
                <Utensils className="w-4 h-4 text-orange-600" />
                <span>{t.foodPage.nonVegOptions}</span>
              </div>
              <ul className="text-xs text-stone-700 space-y-2">
                {nonVegDishes.length > 0 ? (
                  nonVegDishes.map((nv, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{nv.name}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-stone-500 italic">Predominantly traditional vegetarian heritage culinary zone.</li>
                )}
              </ul>
            </div>

          </div>

          {/* SECTION: 📍 RECOMMENDED FOOD PLACES */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
              {t.foodPage.recommendedPlaces}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cuisineData.recommendedPlaces.map((place, idx) => (
                <div key={idx} className="p-5 rounded-3xl bg-white border-2 border-stone-200 shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded-lg bg-stone-100 font-bold text-stone-700">
                      {place.type}
                    </span>
                    <span className="font-extrabold text-amber-700">{place.priceRange}</span>
                  </div>

                  <h3 className="font-extrabold text-base text-stone-900 font-serif">
                    {place.name}
                  </h3>

                  <p className="text-xs text-stone-600">
                    <span className="font-bold text-stone-700">Specialty:</span> {place.specialty}
                  </p>

                  <div className="text-[11px] text-stone-500 flex items-center gap-1 pt-1">
                    <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                    <span>{place.area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: 🥘 FOOD EXPERIENCES */}
          <div className="p-6 rounded-3xl bg-[#faf6ee] border-2 border-[#ebdcc3] space-y-3">
            <h3 className="text-lg font-bold font-serif text-stone-900">
              {t.foodPage.foodExperiences}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-800">
              {cuisineData.foodExperiences.map((exp, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 rounded-2xl bg-white/80 border border-stone-200/80">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{exp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION: ⚠️ FOOD CONSIDERATIONS & ALLERGY SAFETY */}
          <div className="p-6 rounded-3xl bg-amber-50/70 border-2 border-amber-300 space-y-3">
            <div className="flex items-center gap-2 text-amber-950 font-bold text-base">
              <Info className="w-5 h-5 text-amber-700" />
              <span>{t.foodPage.foodConsiderations}</span>
            </div>

            <ul className="text-xs text-stone-700 space-y-2">
              {cuisineData.considerations.map((cons, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold">•</span>
                  <span>{cons}</span>
                </li>
              ))}
              <li className="flex items-start gap-2 font-bold text-amber-950 pt-2 border-t border-amber-200">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{t.foodPage.checkWithProvider}</span>
              </li>
            </ul>
          </div>

        </div>
      )}
    </div>
  );
};
