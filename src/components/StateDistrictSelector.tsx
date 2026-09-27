import React, { useState, useMemo } from 'react';
import { Search, MapPin, CheckCircle2, ChevronRight, AlertCircle, RefreshCw } from 'lucide-react';
import { VERIFIED_STATES } from '../data/verifiedDestinations';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface StateDistrictSelectorProps {
  selectedState: string;
  selectedDistrict: string;
  onSelectLocation: (stateName: string, districtName: string) => void;
  language: LanguageCode;
}

export const StateDistrictSelector: React.FC<StateDistrictSelectorProps> = ({
  selectedState,
  selectedDistrict,
  onSelectLocation,
  language,
}) => {
  const t = TRANSLATIONS[language];

  const [stateSearchQuery, setStateSearchQuery] = useState('');
  const [districtSearchQuery, setDistrictSearchQuery] = useState('');
  const [tempSelectedState, setTempSelectedState] = useState<string>(selectedState || 'Tamil Nadu');

  // Filter verified states
  const filteredStates = useMemo(() => {
    if (!stateSearchQuery.trim()) return VERIFIED_STATES;
    const query = stateSearchQuery.trim().toLowerCase();
    return VERIFIED_STATES.filter((s) => {
      const engName = s.name.toLowerCase();
      const localName = s.localNames?.[language]?.toLowerCase() || '';
      return engName.includes(query) || localName.includes(query);
    });
  }, [stateSearchQuery, language]);

  // Current active state object
  const activeStateObj = useMemo(() => {
    return VERIFIED_STATES.find((s) => s.name === tempSelectedState) || VERIFIED_STATES[0];
  }, [tempSelectedState]);

  // Filter verified districts of active state
  const filteredDistricts = useMemo(() => {
    if (!activeStateObj) return [];
    if (!districtSearchQuery.trim()) return activeStateObj.districts;
    const query = districtSearchQuery.trim().toLowerCase();
    return activeStateObj.districts.filter((d) => {
      const engName = d.name.toLowerCase();
      const localName = d.localNames?.[language]?.toLowerCase() || '';
      return engName.includes(query) || localName.includes(query);
    });
  }, [activeStateObj, districtSearchQuery, language]);

  const handleStateClick = (stateName: string) => {
    setTempSelectedState(stateName);
    setStateSearchQuery('');
    setDistrictSearchQuery('');
    // Automatically select first district in newly selected state if switching
    const stateObj = VERIFIED_STATES.find((s) => s.name === stateName);
    if (stateObj && stateObj.districts.length > 0) {
      onSelectLocation(stateName, stateObj.districts[0].name);
    }
  };

  const handleDistrictClick = (districtName: string) => {
    onSelectLocation(tempSelectedState, districtName);
  };

  return (
    <div className="bg-[#fefcf8] rounded-3xl border-3 border-[#ebdcc3] p-5 sm:p-8 shadow-sm">
      
      {/* Header section with active badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-2 border-[#f0e4cf]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
              {t.stateSearch.strictLocationNotice}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
            {t.stateSearch.title}
          </h2>
          <p className="text-xs text-stone-700 mt-1">
            {t.recommendations.subheading}
          </p>
        </div>

        {/* Currently Selected Location Pill */}
        <div className="inline-flex items-center gap-3 bg-amber-500/10 border-2 border-amber-400 px-4 py-2.5 rounded-2xl">
          <MapPin className="w-5 h-5 text-amber-700 animate-bounce" />
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-amber-900">
              Active Verified District
            </div>
            <div className="text-sm font-extrabold text-stone-900">
              {selectedDistrict ? `${selectedDistrict}, ` : ''}{tempSelectedState}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        
        {/* STEP 1: STATE SELECTION */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-xs font-extrabold uppercase tracking-wider text-stone-700 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-[11px] font-bold">1</span>
              {t.stateSearch.verifiedStates}
            </label>
            {stateSearchQuery && (
              <button 
                onClick={() => setStateSearchQuery('')}
                className="text-xs text-amber-700 font-semibold hover:underline"
              >
                Clear Search
              </button>
            )}
          </div>

          {/* Search State Input */}
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-600" />
            <input
              type="text"
              value={stateSearchQuery}
              onChange={(e) => setStateSearchQuery(e.target.value)}
              placeholder={t.stateSearch.searchStatePlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border-2 border-stone-300 focus:border-amber-600 focus:outline-none text-stone-900 text-sm font-medium bg-white placeholder-stone-400 shadow-inner"
            />
          </div>

          {/* Empty search state for unverified search query */}
          {filteredStates.length === 0 ? (
            <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-200 text-rose-800 text-xs flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <div>
                <span className="font-bold">{t.stateSearch.notFound}</span>
                <p className="mt-0.5 text-stone-600">Please choose from our curated verified states.</p>
              </div>
            </div>
          ) : (
            /* Visual State Cards */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[280px] overflow-y-auto pr-1">
              {filteredStates.map((st) => {
                const isSelected = tempSelectedState === st.name;
                const localName = st.localNames?.[language];
                return (
                  <button
                    key={st.id}
                    onClick={() => handleStateClick(st.name)}
                    className={`p-3 rounded-2xl border-2 text-left transition-all relative ${
                      isSelected
                        ? 'border-amber-600 bg-amber-50/80 shadow-[0_3px_0_0_#b45309]'
                        : 'border-stone-200 bg-white hover:border-amber-300 hover:bg-[#faf7f0]'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="font-extrabold text-sm text-stone-900">
                        {st.name}
                        {localName && localName !== st.name && (
                          <span className="block text-xs text-amber-800 font-semibold mt-0.5">
                            {localName}
                          </span>
                        )}
                      </div>
                      {isSelected ? (
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-stone-300 shrink-0" />
                      )}
                    </div>
                    <div className="mt-1 text-[11px] text-stone-700 line-clamp-1">
                      {st.districts.length} Verified Districts
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* STEP 2: DISTRICT SELECTION */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-xs font-extrabold uppercase tracking-wider text-stone-700 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[11px] font-bold">2</span>
              {t.stateSearch.verifiedDistricts} ({tempSelectedState})
            </label>
            {districtSearchQuery && (
              <button 
                onClick={() => setDistrictSearchQuery('')}
                className="text-xs text-amber-700 font-semibold hover:underline"
              >
                Clear Search
              </button>
            )}
          </div>

          {/* Search District Input */}
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-600" />
            <input
              type="text"
              value={districtSearchQuery}
              onChange={(e) => setDistrictSearchQuery(e.target.value)}
              placeholder={t.stateSearch.searchDistrictPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border-2 border-stone-300 focus:border-emerald-600 focus:outline-none text-stone-900 text-sm font-medium bg-white placeholder-stone-400 shadow-inner"
            />
          </div>

          {/* Empty search district for unverified query */}
          {filteredDistricts.length === 0 ? (
            <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-200 text-rose-800 text-xs flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <div>
                <span className="font-bold">{t.stateSearch.notFound}</span>
                <p className="mt-0.5 text-stone-600">Please choose one of the verified districts above.</p>
              </div>
            </div>
          ) : (
            /* Visual District Cards */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[280px] overflow-y-auto pr-1">
              {filteredDistricts.map((dst) => {
                const isSelected = selectedDistrict === dst.name && selectedState === tempSelectedState;
                const localName = dst.localNames?.[language];
                return (
                  <button
                    key={dst.id}
                    onClick={() => handleDistrictClick(dst.name)}
                    className={`p-3 rounded-2xl border-2 text-left transition-all relative ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/80 shadow-[0_3px_0_0_#059669]'
                        : 'border-stone-200 bg-white hover:border-emerald-300 hover:bg-[#faf7f0]'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-extrabold text-sm text-stone-900">
                          {dst.name}
                        </div>
                        {localName && localName !== dst.name && (
                          <div className="text-xs text-emerald-800 font-semibold mt-0.5">
                            {localName}
                          </div>
                        )}
                      </div>
                      {isSelected ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <MapPin className="w-4 h-4 text-stone-300 shrink-0" />
                      )}
                    </div>
                    <p className="mt-1 text-[11px] text-stone-700 line-clamp-1 font-medium">
                      {dst.tagline}
                    </p>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
