import React from 'react';
import { MapPin, Sparkles, CheckCircle2, Utensils, Calendar, ArrowRight, ShieldCheck, Ticket } from 'lucide-react';
import { Destination, LanguageCode } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface DestinationCardProps {
  destination: Destination;
  matchScore: number;
  language: LanguageCode;
  onSelectDetails: (destination: Destination) => void;
  onNavigateToFood: (destination: Destination) => void;
  onNavigateToItinerary: (destination: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  matchScore,
  language,
  onSelectDetails,
  onNavigateToFood,
  onNavigateToItinerary,
}) => {
  const t = TRANSLATIONS[language];
  const localName = destination.localName?.[language];

  return (
    <div className="group bg-[#fffdfa] rounded-3xl border-3 border-[#ebdcc3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      
      {/* Exact Verified Destination Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-stone-200">
        {destination.imageStatus === 'verified' && destination.image ? (
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-stone-100 text-stone-500 p-4 text-center">
            <MapPin className="w-8 h-8 text-stone-300 mb-2" />
            <span className="text-xs font-bold">{t.destinationDetails.exactImageUnavailable}</span>
          </div>
        )}

        {/* Gradient Overlay for badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          {/* Match Score Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-white shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>{matchScore}% {t.recommendations.matchScore}</span>
          </div>

          {/* Official Booking Verified Badge */}
          {destination.officialBooking.available ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-emerald-600 text-white shadow-md">
              <Ticket className="w-3 h-3" />
              <span>Official Ticket</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-stone-800/80 text-stone-200 backdrop-blur-xs">
              Direct Entry
            </span>
          )}
        </div>

        {/* Bottom Image Attestation Badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold">
          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-xl">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.recommendations.exactImageVerified}</span>
          </div>
          <div className="text-[10px] text-stone-300 font-mono">
            {destination.district}
          </div>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Geographic Location Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-800 uppercase tracking-wider mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>{destination.district}, {destination.state}</span>
          </div>

          {/* Destination Name */}
          <h3 className="text-xl font-bold font-serif text-stone-900 group-hover:text-amber-800 transition-colors">
            {destination.name}
          </h3>
          {localName && localName !== destination.name && (
            <div className="text-xs font-semibold text-stone-500 mb-2">
              {localName}
            </div>
          )}

          {/* Tagline */}
          <p className="text-xs text-stone-600 font-medium line-clamp-2 mt-1 mb-4 leading-relaxed">
            {destination.tagline}
          </p>

          {/* Key Highlights bullet preview */}
          <div className="space-y-1 mb-5">
            {destination.highlights.slice(0, 2).map((h, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button Row */}
        <div className="pt-4 border-t-2 border-[#f2e7d5] flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => onSelectDetails(destination)}
            className="flex-1 py-2.5 px-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-[0_3px_0_0_#92400e] active:translate-y-0.5 flex items-center justify-center gap-1.5 transition-all"
          >
            <span>{t.recommendations.viewDetails}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onNavigateToFood(destination)}
            title={t.recommendations.viewFood}
            className="py-2.5 px-3 rounded-2xl bg-[#f4ece0] hover:bg-amber-100 text-amber-950 font-bold text-xs border border-amber-300 flex items-center justify-center gap-1.5 transition-colors"
          >
            <Utensils className="w-3.5 h-3.5 text-amber-700" />
            <span className="sm:hidden">{t.recommendations.viewFood}</span>
          </button>

          <button
            onClick={() => onNavigateToItinerary(destination)}
            title={t.recommendations.viewItinerary}
            className="py-2.5 px-3 rounded-2xl bg-[#f4ece0] hover:bg-amber-100 text-amber-950 font-bold text-xs border border-amber-300 flex items-center justify-center gap-1.5 transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-700" />
            <span className="sm:hidden">{t.recommendations.viewItinerary}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
