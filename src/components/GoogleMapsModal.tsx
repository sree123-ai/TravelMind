import React, { useState } from 'react';
import { 
  X, MapPin, Navigation, Eye, Globe, ExternalLink, 
  Layers, Copy, Check, AlertCircle, Compass 
} from 'lucide-react';
import { Destination, LanguageCode } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface GoogleMapsModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
  language: LanguageCode;
}

export const GoogleMapsModal: React.FC<GoogleMapsModalProps> = ({
  destination,
  isOpen,
  onClose,
  language,
}) => {
  const [copied, setCopied] = useState(false);
  const [mapType, setMapType] = useState<'standard' | 'satellite'>('standard');
  const [zoomLevel, setZoomLevel] = useState(15);

  if (!isOpen || !destination) return null;
  const t = TRANSLATIONS[language];

  // Pre-validate location data to satisfy requirement D:
  // "Before rendering the button: validate that the destination has sufficient verified location information.
  // If required information is missing: show 'Google Maps is unavailable for this destination because verified location data is missing.'
  // Never show 'Page is not available' as the normal result of clicking the button."
  const hasValidData =
    Boolean(destination.name) &&
    typeof destination.latitude === 'number' &&
    typeof destination.longitude === 'number' &&
    !isNaN(destination.latitude) &&
    !isNaN(destination.longitude);

  const encodedDest = encodeURIComponent(
    `${destination.name}, ${destination.district}, ${destination.state}`
  );

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedDest}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedDest}`;
  const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${destination.latitude},${destination.longitude}`;
  const googleEarthUrl = `https://earth.google.com/web/search/${encodedDest}`;

  // Direct safe OpenStreetMap tile embed for zero-failure in-app rendering
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${destination.longitude - 0.015}%2C${destination.latitude - 0.015}%2C${destination.longitude + 0.015}%2C${destination.latitude + 0.015}&layer=mapnik&marker=${destination.latitude}%2C${destination.longitude}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(googleMapsUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#fffefc] rounded-3xl border-3 border-[#ebdcc3] shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-stone-200 bg-[#fdfaf5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-600 text-white flex items-center justify-center shadow-[0_3px_0_0_#9f1239]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-serif text-stone-900">
                {destination.name}
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                {destination.district}, {destination.state} • {destination.latitude.toFixed(4)}° N, {destination.longitude.toFixed(4)}° E
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

        {/* MAP CONTENT */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {!hasValidData ? (
            <div className="p-8 rounded-3xl bg-rose-50 border-2 border-rose-300 text-rose-800 text-center space-y-2">
              <AlertCircle className="w-10 h-10 text-rose-600 mx-auto" />
              <h3 className="text-base font-bold">{t.destinationDetails.mapUnavailable}</h3>
              <p className="text-xs text-rose-700 max-w-md mx-auto">
                Verified latitude and longitude coordinates are required to initialize spatial navigation tools.
              </p>
            </div>
          ) : (
            <>
              {/* INTERACTIVE MAP CONTAINER */}
              <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border-2 border-stone-300 shadow-inner bg-stone-100">
                <iframe
                  title={`Map for ${destination.name}`}
                  src={osmEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                />

                {/* Map Overlay Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-800 flex items-center gap-1.5 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Verified Pin: {destination.name}</span>
                </div>
              </div>

              {/* DYNAMIC REAL WORKING ACTIONS */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-stone-600">
                  <span>Spatial Navigation & Official Google Services</span>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1 text-amber-800 hover:text-amber-900 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied Link' : 'Copy Map Link'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  
                  {/* Google Maps Search Button */}
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-[#faf6ee] hover:bg-amber-100 border-2 border-amber-300 text-stone-900 font-extrabold text-xs shadow-[0_3px_0_0_#d97706] active:translate-y-0.5 transition-all flex flex-col items-center justify-center gap-2 text-center"
                  >
                    <MapPin className="w-6 h-6 text-rose-600" />
                    <span>{t.destinationDetails.googleMapBtn}</span>
                    <span className="text-[10px] text-stone-500 font-normal">Opens Official Map</span>
                  </a>

                  {/* Directions Button */}
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-[#faf6ee] hover:bg-emerald-100 border-2 border-emerald-300 text-stone-900 font-extrabold text-xs shadow-[0_3px_0_0_#059669] active:translate-y-0.5 transition-all flex flex-col items-center justify-center gap-2 text-center"
                  >
                    <Navigation className="w-6 h-6 text-emerald-600" />
                    <span>{t.destinationDetails.directionsBtn}</span>
                    <span className="text-[10px] text-stone-500 font-normal">Turn-by-turn route</span>
                  </a>

                  {/* Street View Button */}
                  <a
                    href={streetViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-[#faf6ee] hover:bg-sky-100 border-2 border-sky-300 text-stone-900 font-extrabold text-xs shadow-[0_3px_0_0_#0284c7] active:translate-y-0.5 transition-all flex flex-col items-center justify-center gap-2 text-center"
                  >
                    <Eye className="w-6 h-6 text-sky-600" />
                    <span>{t.destinationDetails.streetViewBtn}</span>
                    <span className="text-[10px] text-stone-500 font-normal">360° Panorama</span>
                  </a>

                  {/* Google Earth Button */}
                  <a
                    href={googleEarthUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-[#faf6ee] hover:bg-indigo-100 border-2 border-indigo-300 text-stone-900 font-extrabold text-xs shadow-[0_3px_0_0_#4f46e5] active:translate-y-0.5 transition-all flex flex-col items-center justify-center gap-2 text-center"
                  >
                    <Globe className="w-6 h-6 text-indigo-600" />
                    <span>{t.destinationDetails.googleEarthBtn}</span>
                    <span className="text-[10px] text-stone-500 font-normal">3D Globe Orbit</span>
                  </a>

                </div>
              </div>

              {/* ADDRESS & PLACE ID VERIFICATION */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-start gap-2">
                <Compass className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-800">Verified Address:</span> {destination.address}
                  <div className="text-[11px] text-stone-500 font-mono mt-0.5">
                    Google Place ID: {destination.placeId}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
