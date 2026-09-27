import React, { useState, useEffect, useMemo } from 'react';
import { 
  Compass, MapPin, Sparkles, SlidersHorizontal, CloudRain, 
  Sun, ShieldAlert, ArrowRight, CheckCircle2, Ticket, Luggage, 
  Calendar, Utensils, AlertTriangle, Layers, User 
} from 'lucide-react';
import { 
  Destination, LanguageCode, TripContext, UserProfile, LiveWeatherData, PackingItem 
} from './types';
import { VERIFIED_DESTINATIONS, VERIFIED_STATES } from './data/verifiedDestinations';
import { TRANSLATIONS } from './i18n/translations';
import { fetchLiveWeather } from './services/weatherService';
import { generateSmartPackingList, generatePersonalizedItinerary } from './services/packingItineraryService';

import { GlobalBackground } from './components/GlobalBackground';
import { Navbar } from './components/Navbar';
import { AuthModal } from './components/AuthModal';
import { StateDistrictSelector } from './components/StateDistrictSelector';
import { DestinationCard } from './components/DestinationCard';
import { DestinationDetailsModal } from './components/DestinationDetailsModal';
import { FoodPage } from './components/FoodPage';
import { AllergyPage } from './components/AllergyPage';
import { PackingPage } from './components/PackingPage';
import { ItineraryPage } from './components/ItineraryPage';
import { GoogleMapsModal } from './components/GoogleMapsModal';
import { ChatbotDrawer } from './components/ChatbotDrawer';
import { QuestionnaireModal } from './components/QuestionnaireModal';

export default function App() {
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [currentTab, setCurrentTab] = useState<string>('planner');
  const [user, setUser] = useState<UserProfile | null>(null);

  // Modals state
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Central Trip Context (Requirement Q: All features use the same central tripContext)
  const [tripContext, setTripContext] = useState<TripContext>(() => {
    const defaultDest = VERIFIED_DESTINATIONS[0]; // Meenakshi Amman Temple, Madurai, Tamil Nadu
    return {
      selectedState: defaultDest.state,
      selectedDistrict: defaultDest.district,
      selectedDestination: defaultDest,
      searchState: '',
      searchDistrict: '',
      travelGroup: 'couple',
      travelPace: 'moderate',
      budgetTier: 'comfort',
      climatePreference: 'heritage',
      foodPreferences: ['Vegetarian'],
      allergyPreferences: [],
      customAllergies: [],
      interests: ['Heritage', 'Architecture', 'Culture'],
      durationDays: 3,
      startDate: '2026-10-15',
      liveWeatherAlerts: [],
      liveWeather: null,
      packingList: [],
      itinerary: [],
    };
  });

  const t = TRANSLATIONS[language];

  // Load user from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('travelmind_user');
      if (stored) {
        const parsed = JSON.parse(stored);
        setUser(parsed);
        if (parsed.preferredLanguage) {
          setLanguage(parsed.preferredLanguage);
        }
      }
    } catch (e) {
      console.warn('Failed to parse stored user:', e);
    }
  }, []);

  // Update Trip Context helper
  const updateTripContext = (partial: Partial<TripContext>) => {
    setTripContext((prev) => {
      const updated = { ...prev, ...partial };
      return updated;
    });
  };

  // Handle location selection (State and District)
  const handleSelectLocation = (stateName: string, districtName: string) => {
    // Find matching destinations in this verified district
    const matchingDests = VERIFIED_DESTINATIONS.filter(
      (d) => d.state === stateName && d.district === districtName
    );

    const newDest = matchingDests.length > 0 ? matchingDests[0] : null;

    updateTripContext({
      selectedState: stateName,
      selectedDistrict: districtName,
      selectedDestination: newDest,
    });
  };

  // Fetch live weather whenever the selected destination changes
  useEffect(() => {
    let isCancelled = false;

    async function loadWeather() {
      const dest = tripContext.selectedDestination;
      if (!dest) return;

      const weather = await fetchLiveWeather(
        dest.latitude,
        dest.longitude,
        dest.name,
        dest.district
      );

      if (!isCancelled) {
        // Regenerate smart packing list connected to the live weather & allergies
        const packing = generateSmartPackingList(tripContext, weather);
        const allAllergies = [
          ...(tripContext.allergyPreferences || []),
          ...(tripContext.customAllergies || []),
        ];
        const itinerary = generatePersonalizedItinerary(
          dest,
          tripContext.durationDays,
          allAllergies
        );

        updateTripContext({
          liveWeather: weather,
          liveWeatherAlerts: weather.alerts,
          packingList: packing,
          itinerary,
        });
      }
    }

    loadWeather();

    return () => {
      isCancelled = true;
    };
  }, [
    tripContext.selectedDestination?.id,
    tripContext.durationDays,
    tripContext.allergyPreferences.length,
    tripContext.customAllergies.length,
  ]);

  // STRICT LOCATION-AWARE DESTINATIONS FILTERING (Requirements A & Q)
  // When user selects or searches for State & District, ONLY verified destinations
  // belonging strictly to that geographic location are returned.
  const verifiedDistrictDestinations = useMemo(() => {
    return VERIFIED_DESTINATIONS.filter(
      (d) =>
        d.state === tripContext.selectedState &&
        d.district === tripContext.selectedDistrict
    );
  }, [tripContext.selectedState, tripContext.selectedDistrict]);

  // Calculate Match Score based on user questionnaire preferences
  const calculateMatchScore = (destination: Destination) => {
    let score = 88;
    if (destination.climateType === tripContext.climatePreference) score += 5;
    if (destination.suitablePace.includes(tripContext.travelPace)) score += 4;
    if (destination.suitableGroups.includes(tripContext.travelGroup)) score += 3;
    return Math.min(score, 99);
  };

  const handleOpenDetails = (dest: Destination) => {
    updateTripContext({ selectedDestination: dest });
    setIsDetailsOpen(true);
  };

  const handleOpenInteractiveMap = (dest: Destination) => {
    updateTripContext({ selectedDestination: dest });
    setIsMapModalOpen(true);
  };

  const handleNavigateToFood = (dest: Destination) => {
    updateTripContext({ selectedDestination: dest });
    setCurrentTab('food');
  };

  const handleNavigateToItinerary = (dest: Destination) => {
    updateTripContext({ selectedDestination: dest });
    setCurrentTab('itinerary');
  };

  const activeAllergiesCount =
    (tripContext.allergyPreferences?.length || 0) +
    (tripContext.customAllergies?.length || 0);

  return (
    <div className="min-h-screen text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-900 relative">
      <GlobalBackground />

      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        language={language}
        onSelectLanguage={setLanguage}
        user={user}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={() => {
          localStorage.removeItem('travelmind_user');
          setUser(null);
        }}
        onToggleChatbot={() => setIsChatbotOpen(!isChatbotOpen)}
        activeAllergiesCount={activeAllergiesCount}
      />

      {/* MAIN VIEW CONTAINER */}
      <main className="flex-1 relative z-10">
        
        {/* ============================================================ */}
        {/* TAB 1: PLANNER & RECOMMENDATIONS (HOME) */}
        {/* ============================================================ */}
        {currentTab === 'planner' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
            
            {/* HERO JOURNAL BANNER */}
            <div className="relative rounded-3xl bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 p-8 sm:p-12 text-white shadow-xl overflow-hidden border-3 border-amber-900/20">
              <div className="relative z-10 max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-white/15 backdrop-blur-md border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Personalized AI Tourism Engine</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold font-serif leading-tight">
                  Discover India with Precise Geographic Accuracy
                </h1>

                <p className="text-sm sm:text-base text-amber-100 font-medium leading-relaxed">
                  Strictly location-aware destination recommendations, live weather alerts, authentic district cuisines, and dedicated allergy safety.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setIsQuestionnaireOpen(true)}
                    className="px-6 py-3.5 rounded-2xl bg-white hover:bg-amber-50 text-stone-900 font-extrabold text-sm shadow-[0_4px_0_0_#d6d3d1] active:translate-y-1 active:shadow-none flex items-center gap-2 transition-all"
                  >
                    <SlidersHorizontal className="w-4 h-4 text-amber-700" />
                    <span>{t.questionnaire.startPlanning}</span>
                  </button>

                  <button
                    onClick={() => setIsChatbotOpen(true)}
                    className="px-5 py-3.5 rounded-2xl bg-amber-900/40 hover:bg-amber-900/60 text-white font-bold text-sm border border-white/25 backdrop-blur-md flex items-center gap-2 transition-colors"
                  >
                    <span>{t.nav.assistant}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Decorative Subtle Stamp */}
              <div className="absolute -bottom-8 -right-8 w-60 h-60 rounded-full border-4 border-dashed border-white/15 pointer-events-none flex items-center justify-center rotate-12">
                <Compass className="w-32 h-32 text-white/10" />
              </div>
            </div>

            {/* LIVE WEATHER & RAIN ALERT STATUS BANNER (Requirement I) */}
            {tripContext.liveWeather && (
              <div
                className={`p-5 sm:p-6 rounded-3xl border-3 transition-all ${
                  tripContext.liveWeather.isRainExpected
                    ? 'bg-amber-50 border-amber-400 shadow-md'
                    : 'bg-[#fefcf8] border-[#ebdcc3]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`p-3 rounded-2xl shrink-0 ${
                        tripContext.liveWeather.isRainExpected
                          ? 'bg-amber-500 text-white shadow-[0_3px_0_0_#b45309]'
                          : 'bg-emerald-600 text-white shadow-[0_3px_0_0_#065f46]'
                      }`}
                    >
                      {tripContext.liveWeather.isRainExpected ? (
                        <CloudRain className="w-6 h-6 animate-bounce" />
                      ) : (
                        <Sun className="w-6 h-6" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-stone-500">
                          {t.weather.liveDataLabel} • {tripContext.selectedDistrict}
                        </span>
                        {tripContext.liveWeather.isRainExpected && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-200 text-amber-950 uppercase animate-pulse">
                            Rain Alert Active
                          </span>
                        )}
                      </div>

                      <h2 className="text-base sm:text-lg font-extrabold text-stone-900 mt-0.5">
                        {tripContext.liveWeather.weatherDescription} • {tripContext.liveWeather.temperature}°C (Feels {tripContext.liveWeather.apparentTemperature}°C)
                      </h2>

                      {tripContext.liveWeather.isRainExpected && (
                        <p className="text-xs font-semibold text-amber-950 mt-1">
                          ⚠️ {t.weather.rainAlertMessage} ({t.weather.rainProbability}: {tripContext.liveWeather.rainProbability}%)
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-stone-600 border-t sm:border-t-0 sm:border-l sm:pl-4 border-stone-200 pt-2 sm:pt-0">
                    <Luggage className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{t.weather.packingSyncNotice}</span>
                  </div>
                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* STATE & DISTRICT SEARCH / SELECTOR (Requirement B) */}
            {/* ============================================================ */}
            <StateDistrictSelector
              selectedState={tripContext.selectedState}
              selectedDistrict={tripContext.selectedDistrict}
              onSelectLocation={handleSelectLocation}
              language={language}
            />

            {/* ============================================================ */}
            {/* AI RECOMMENDATION ENGINE RESULTS (Requirement A & C) */}
            {/* ============================================================ */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#f0e4cf] pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
                    {t.recommendations.heading}
                  </h2>
                  <p className="text-xs text-stone-600 font-medium mt-0.5">
                    {t.recommendations.showingResultsFor}{' '}
                    <span className="font-extrabold text-stone-900">
                      {tripContext.selectedDistrict} District, {tripContext.selectedState}
                    </span>
                  </p>
                </div>

                <div className="text-xs font-extrabold px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 self-start sm:self-auto">
                  ✓ Strict State/District Verification Active
                </div>
              </div>

              {verifiedDistrictDestinations.length === 0 ? (
                <div className="p-10 rounded-3xl bg-white border-2 border-stone-200 text-center space-y-3">
                  <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto" />
                  <h3 className="text-base font-bold text-stone-800">
                    {t.recommendations.noDestinationsFound}
                  </h3>
                  <p className="text-xs text-stone-500 max-w-md mx-auto">
                    Try selecting another verified district such as Madurai (Tamil Nadu), Jaipur (Rajasthan), or Ernakulam (Kerala).
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {verifiedDistrictDestinations.map((dest) => (
                    <DestinationCard
                      key={dest.id}
                      destination={dest}
                      matchScore={calculateMatchScore(dest)}
                      language={language}
                      onSelectDetails={handleOpenDetails}
                      onNavigateToFood={handleNavigateToFood}
                      onNavigateToItinerary={handleNavigateToItinerary}
                    />
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: DESTINATIONS BROWSER */}
        {/* ============================================================ */}
        {currentTab === 'destinations' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <div className="bg-[#fefcf8] rounded-3xl border-3 border-[#ebdcc3] p-6 sm:p-8 shadow-sm">
              <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900">
                Verified Landmarks in {tripContext.selectedDistrict}, {tripContext.selectedState}
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Every landmark includes verified exact photography, official ticketing links, and real-time maps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {verifiedDistrictDestinations.map((dest) => (
                <DestinationCard
                  key={dest.id}
                  destination={dest}
                  matchScore={calculateMatchScore(dest)}
                  language={language}
                  onSelectDetails={handleOpenDetails}
                  onNavigateToFood={handleNavigateToFood}
                  onNavigateToItinerary={handleNavigateToItinerary}
                />
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: DEDICATED FOOD & CUISINE PAGE (Requirement E & G) */}
        {/* ============================================================ */}
        {currentTab === 'food' && (
          <FoodPage
            tripContext={tripContext}
            language={language}
            onNavigateToAllergyPage={() => setCurrentTab('allergy')}
          />
        )}

        {/* ============================================================ */}
        {/* TAB 4: DEDICATED ALLERGY & FOOD SAFETY PAGE (Requirement F & G) */}
        {/* ============================================================ */}
        {currentTab === 'allergy' && (
          <AllergyPage
            tripContext={tripContext}
            language={language}
            onUpdateTripContext={updateTripContext}
            onNavigateToFoodPage={() => setCurrentTab('food')}
          />
        )}

        {/* ============================================================ */}
        {/* TAB 5: PACKING LIST (Requirement J) */}
        {/* ============================================================ */}
        {currentTab === 'packing' && (
          <PackingPage
            tripContext={tripContext}
            language={language}
            onUpdateTripContext={updateTripContext}
          />
        )}

        {/* ============================================================ */}
        {/* TAB 6: ITINERARY PLANNER */}
        {/* ============================================================ */}
        {currentTab === 'itinerary' && (
          <ItineraryPage
            tripContext={tripContext}
            language={language}
            onNavigateToFood={handleNavigateToFood}
          />
        )}

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 bg-[#fdfbf7] border-t-2 border-[#e7dec8] py-8 text-center text-xs text-stone-600">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <div className="font-extrabold text-stone-900 font-serif text-base">
            TravelMind AI • 2026 Edition
          </div>
          <p className="max-w-xl mx-auto text-stone-700">
            Personalized AI Tourism & Travel Planner with location-accurate destination recommendations, interactive itineraries, weather alerts, food guides, and packing assistance.
          </p>
        </div>
      </footer>

      {/* ============================================================ */}
      {/* MODALS & DRAWERS */}
      {/* ============================================================ */}
      
      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        language={language}
        onLoginSuccess={(usr) => setUser(usr)}
      />

      {/* Questionnaire Modal (with Review Answers step) */}
      <QuestionnaireModal
        isOpen={isQuestionnaireOpen}
        onClose={() => setIsQuestionnaireOpen(false)}
        language={language}
        tripContext={tripContext}
        onUpdateTripContext={updateTripContext}
        onComplete={() => {
          // Calculation feedback
          setCurrentTab('planner');
        }}
      />

      {/* Destination Details Modal (Exact photo, Official booking, Maps fallback) */}
      <DestinationDetailsModal
        destination={tripContext.selectedDestination}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        language={language}
        liveWeather={tripContext.liveWeather}
        onOpenInteractiveMap={handleOpenInteractiveMap}
        onNavigateToFood={handleNavigateToFood}
        onNavigateToItinerary={handleNavigateToItinerary}
      />

      {/* Google Maps Spatial Modal (Requirement D: Fix broken click / page not available) */}
      <GoogleMapsModal
        destination={tripContext.selectedDestination}
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        language={language}
      />

      {/* AI Assistant Drawer */}
      <ChatbotDrawer
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        tripContext={tripContext}
        language={language}
      />

    </div>
  );
}
