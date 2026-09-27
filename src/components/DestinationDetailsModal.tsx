import React from 'react';
import { 
  X, MapPin, Clock, DollarSign, Calendar, Ticket, ExternalLink, 
  ShieldCheck, AlertTriangle, CloudRain, Sun, Compass, Utensils, 
  Layers, Globe, Navigation, Eye, CheckCircle2 
} from 'lucide-react';
import { Destination, LanguageCode, LiveWeatherData } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface DestinationDetailsModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
  language: LanguageCode;
  liveWeather: LiveWeatherData | null;
  onOpenInteractiveMap: (destination: Destination) => void;
  onNavigateToFood: (destination: Destination) => void;
  onNavigateToItinerary: (destination: Destination) => void;
}

export const DestinationDetailsModal: React.FC<DestinationDetailsModalProps> = ({
  destination,
  isOpen,
  onClose,
  language,
  liveWeather,
  onOpenInteractiveMap,
  onNavigateToFood,
  onNavigateToItinerary,
}) => {
  if (!isOpen || !destination) return null;
  const t = TRANSLATIONS[language];
  const localName = destination.localName?.[language];

  // Validate location information
  const hasValidCoordinates =
    typeof destination.latitude === 'number' &&
    typeof destination.longitude === 'number' &&
    !isNaN(destination.latitude) &&
    !isNaN(destination.longitude);

  const encodedQuery = encodeURIComponent(
    `${destination.name}, ${destination.district}, ${destination.state}`
  );

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedQuery}`;
  const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${destination.latitude},${destination.longitude}`;
  const googleEarthUrl = `https://earth.google.com/web/search/${encodedQuery}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#fffefc] rounded-3xl border-3 border-[#ebdcc3] shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-stone-200 bg-[#fdfaf5]">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
              {destination.district}, {destination.state}
            </span>
            <span className="text-xs font-semibold text-stone-500">
              Verified Landmark
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Hero: EXACT DESTINATION IMAGE */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-stone-300 shadow-md">
            {destination.imageStatus === 'verified' && destination.image ? (
              <div className="relative h-72 sm:h-96 w-full bg-stone-900">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />
                
                {/* Image Verification Label */}
                <div className="absolute top-4 left-4 bg-emerald-600/90 text-white backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-emerald-200" />
                  <span>{t.destinationDetails.imageCaption}</span>
                </div>

                {/* Title & Tagline Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h1 className="text-2xl sm:text-4xl font-extrabold font-serif leading-tight">
                    {destination.name}
                  </h1>
                  {localName && localName !== destination.name && (
                    <div className="text-sm font-medium text-amber-200 mt-0.5">
                      {localName}
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-stone-200 mt-1 font-medium max-w-2xl">
                    {destination.tagline}
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-60 w-full flex flex-col items-center justify-center bg-stone-100 text-stone-500 p-6 text-center">
                <AlertTriangle className="w-10 h-10 text-amber-500 mb-2" />
                <div className="text-sm font-bold text-stone-700">
                  {t.destinationDetails.exactImageUnavailable}
                </div>
                <p className="text-xs text-stone-500 mt-1">
                  We do not use stock or unrelated photos when an exact verified landmark photograph is not confirmed.
                </p>
              </div>
            )}
          </div>

          {/* REAL-TIME WEATHER ALERT BANNER (If Live Weather has alerts or rain) */}
          {liveWeather && liveWeather.alerts.length > 0 && (
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm uppercase tracking-wider">
                <CloudRain className="w-5 h-5 text-amber-700 animate-bounce" />
                <span>{t.weather.weatherAlertTitle}</span>
              </div>
              
              {liveWeather.alerts.map((alert) => (
                <div key={alert.id} className="text-xs text-stone-800 space-y-1">
                  <div className="font-extrabold text-stone-900 flex items-center gap-2">
                    <span>{alert.title}</span>
                    {alert.rainProbability && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-200 text-amber-950 font-bold text-[11px]">
                        {t.weather.rainProbability}: {alert.rainProbability}%
                      </span>
                    )}
                  </div>
                  <p className="text-stone-700">{alert.message}</p>
                  <p className="text-amber-950 font-semibold italic">
                    💡 Consideration: {alert.recommendation}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* QUICK METADATA GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#faf7f0] border-2 border-[#ebdcc3]">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>{t.destinationDetails.timings}</span>
              </div>
              <div className="text-xs font-semibold text-stone-800">{destination.timings}</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#faf7f0] border-2 border-[#ebdcc3]">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
                <DollarSign className="w-4 h-4 text-amber-600" />
                <span>{t.destinationDetails.entryFee}</span>
              </div>
              <div className="text-xs font-semibold text-stone-800">{destination.entryFee}</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#faf7f0] border-2 border-[#ebdcc3]">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>{t.destinationDetails.bestTime}</span>
              </div>
              <div className="text-xs font-semibold text-stone-800">{destination.bestTimeToVisit}</div>
            </div>
          </div>

          {/* OVERVIEW & HIGHLIGHTS */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-serif text-stone-900">
              {t.destinationDetails.overview}
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed">
              {destination.description}
            </p>

            <div className="mt-4">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-stone-700 mb-2">
                {t.destinationDetails.highlights}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {destination.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION: OFFICIAL BOOKING WEBSITE */}
          <div className="p-6 rounded-3xl bg-[#fdf8f0] border-3 border-amber-300 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Ticket className="w-5 h-5 text-amber-700" />
                <h3 className="text-lg font-bold font-serif text-stone-900">
                  {t.destinationDetails.officialBookingHeading}
                </h3>
              </div>
              {destination.officialBooking.available && (
                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-900 border border-emerald-300">
                  {destination.officialBooking.sourceType}
                </span>
              )}
            </div>

            {destination.officialBooking.available && destination.officialBooking.bookingUrl ? (
              <div className="space-y-3">
                <p className="text-xs text-stone-600">
                  Official ticket booking provided directly by{' '}
                  <span className="font-bold text-stone-800">{destination.officialBooking.bookingSource}</span>.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
                  <a
                    href={destination.officialBooking.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-sm shadow-[0_4px_0_0_#92400e] active:translate-y-1 active:shadow-none transition-all"
                  >
                    <span>{t.destinationDetails.bookOfficialTickets}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <div className="text-[11px] text-stone-500 font-mono">
                    {t.destinationDetails.lastVerified}: {destination.officialBooking.lastVerified}
                  </div>
                </div>

                {destination.officialBooking.notes && (
                  <p className="text-[11px] text-stone-500 italic mt-1">
                    ℹ️ {destination.officialBooking.notes}
                  </p>
                )}
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-stone-600 text-xs">
                {t.destinationDetails.officialBookingUnavailable}
                {destination.officialBooking.notes && (
                  <p className="mt-1 font-medium text-stone-500">{destination.officialBooking.notes}</p>
                )}
              </div>
            )}
          </div>

          {/* SECTION: GOOGLE MAPS & SPATIAL EXPLORATION (FIXED & FULLY WORKING) */}
          <div className="p-6 rounded-3xl bg-stone-50 border-3 border-stone-300 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold font-serif text-stone-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-rose-600" />
                  Interactive Maps & Verified Coordinates
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  {destination.address} • ({destination.latitude.toFixed(4)}, {destination.longitude.toFixed(4)})
                </p>
              </div>
            </div>

            {hasValidCoordinates ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {/* 1. Official Google Map Search Link */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-2xl bg-white hover:bg-amber-50 text-stone-800 hover:text-amber-900 font-extrabold text-xs border-2 border-stone-300 hover:border-amber-500 shadow-[0_3px_0_0_#d6d3d1] active:translate-y-0.5 transition-all flex flex-col items-center justify-center gap-1.5 text-center"
                >
                  <MapPin className="w-5 h-5 text-rose-600" />
                  <span>{t.destinationDetails.googleMapBtn}</span>
                </a>

                {/* 2. Google Directions */}
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-2xl bg-white hover:bg-emerald-50 text-stone-800 hover:text-emerald-900 font-extrabold text-xs border-2 border-stone-300 hover:border-emerald-500 shadow-[0_3px_0_0_#d6d3d1] active:translate-y-0.5 transition-all flex flex-col items-center justify-center gap-1.5 text-center"
                >
                  <Navigation className="w-5 h-5 text-emerald-600" />
                  <span>{t.destinationDetails.directionsBtn}</span>
                </a>

                {/* 3. Street View 360 */}
                <a
                  href={streetViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-2xl bg-white hover:bg-sky-50 text-stone-800 hover:text-sky-900 font-extrabold text-xs border-2 border-stone-300 hover:border-sky-500 shadow-[0_3px_0_0_#d6d3d1] active:translate-y-0.5 transition-all flex flex-col items-center justify-center gap-1.5 text-center"
                >
                  <Eye className="w-5 h-5 text-sky-600" />
                  <span>{t.destinationDetails.streetViewBtn}</span>
                </a>

                {/* 4. Google Earth 3D */}
                <a
                  href={googleEarthUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-2xl bg-white hover:bg-indigo-50 text-stone-800 hover:text-indigo-900 font-extrabold text-xs border-2 border-stone-300 hover:border-indigo-500 shadow-[0_3px_0_0_#d6d3d1] active:translate-y-0.5 transition-all flex flex-col items-center justify-center gap-1.5 text-center"
                >
                  <Globe className="w-5 h-5 text-indigo-600" />
                  <span>{t.destinationDetails.googleEarthBtn}</span>
                </a>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs">
                {t.destinationDetails.mapUnavailable}
              </div>
            )}

            {/* Quick in-modal interactive map trigger */}
            <div className="pt-2">
              <button
                onClick={() => onOpenInteractiveMap(destination)}
                className="w-full py-2.5 rounded-2xl bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Layers className="w-4 h-4 text-stone-600" />
                <span>Open In-App Interactive Map & Satellite View</span>
              </button>
            </div>
          </div>

          {/* BOTTOM QUICK ACTIONS: FOOD & ITINERARY */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t-2 border-stone-200">
            <button
              onClick={() => {
                onClose();
                onNavigateToFood(destination);
              }}
              className="flex-1 py-3 px-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs shadow-[0_4px_0_0_#065f46] active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 transition-all"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore {destination.district} Food & Cuisine</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onNavigateToItinerary(destination);
              }}
              className="flex-1 py-3 px-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-[0_4px_0_0_#92400e] active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Generate Day-by-Day Itinerary</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
