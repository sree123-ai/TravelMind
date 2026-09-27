export type LanguageCode = 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferredLanguage: LanguageCode;
  savedTripsCount: number;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: UserProfile | null;
}

export type TravelGroup = 'solo' | 'couple' | 'family' | 'friends' | 'seniors';
export type TravelPace = 'relaxed' | 'moderate' | 'fast';
export type BudgetTier = 'budget' | 'comfort' | 'luxury';
export type ClimatePreference = 'warm' | 'cool' | 'coastal' | 'heritage';

export interface VerifiedBookingInfo {
  available: boolean;
  bookingUrl?: string;
  bookingSource?: string;
  sourceType?: 'OFFICIAL' | 'VERIFIED_PARTNER' | 'DIRECT';
  lastVerified?: string;
  notes?: string;
}

export interface VerifiedDish {
  name: string;
  localName: string;
  category: 'veg' | 'vegan' | 'non-veg';
  description: string;
  allergens: string[];
  famousSpots: string[];
  tags: string[];
}

export interface FoodPlace {
  name: string;
  specialty: string;
  area: string;
  priceRange: '₹' | '₹₹' | '₹₹₹';
  type: 'Restaurant' | 'Street Food' | 'Heritage Mess' | 'Cafe';
  verifiedSafeFor: string[];
}

export interface VerifiedCuisineData {
  overview: string;
  cuisines: VerifiedDish[];
  recommendedPlaces: FoodPlace[];
  foodExperiences: string[];
  considerations: string[];
}

export interface Destination {
  id: string;
  name: string;
  localName?: Record<LanguageCode, string>;
  state: string;
  district: string;
  category: 'temple' | 'heritage' | 'nature' | 'beach' | 'hill_station' | 'wildlife' | 'palace';
  tagline: string;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  entryFee: string;
  timings: string;
  latitude: number;
  longitude: number;
  address: string;
  placeId: string;
  image: string;
  imageAttribution: string;
  imageStatus: 'verified' | 'unavailable';
  officialBooking: VerifiedBookingInfo;
  localCuisine: VerifiedCuisineData;
  idealDays: number;
  suitablePace: TravelPace[];
  suitableGroups: TravelGroup[];
  budgetTier: BudgetTier[];
  climateType: ClimatePreference;
}

export interface DistrictInfo {
  id: string;
  name: string;
  localNames?: Record<LanguageCode, string>;
  state: string;
  tagline: string;
  description: string;
  destinationsCount: number;
  featuredDestinations: string[];
}

export interface StateInfo {
  id: string;
  name: string;
  localNames?: Record<LanguageCode, string>;
  tagline: string;
  description: string;
  districts: DistrictInfo[];
}

export interface WeatherAlert {
  id: string;
  type: 'rain' | 'storm' | 'heat' | 'cold' | 'wind' | 'visibility';
  title: string;
  message: string;
  severity: 'info' | 'warning' | 'alert';
  rainProbability?: number;
  expectedTiming?: string;
  recommendation: string;
}

export interface LiveWeatherData {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
  weatherDescription: string;
  isRainExpected: boolean;
  rainProbability: number;
  alerts: WeatherAlert[];
  fetchedAt: string;
  isLive: boolean;
}

export interface PackingItem {
  id: string;
  name: string;
  category: 'essentials' | 'clothing' | 'health' | 'weather' | 'electronics';
  packed: boolean;
  weatherReason?: string;
  custom?: boolean;
}

export interface ItineraryActivity {
  time: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  ticketNotice?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  theme: string;
  morning: ItineraryActivity;
  afternoon: ItineraryActivity;
  evening: ItineraryActivity;
  night: ItineraryActivity;
  foodSuggestion: string;
  allergyNote?: string;
  culturalEtiquette: string;
}

export interface TripContext {
  selectedState: string;
  selectedDistrict: string;
  selectedDestination: Destination | null;
  searchState: string;
  searchDistrict: string;
  travelGroup: TravelGroup;
  travelPace: TravelPace;
  budgetTier: BudgetTier;
  climatePreference: ClimatePreference;
  foodPreferences: string[];
  allergyPreferences: string[];
  customAllergies: string[];
  interests: string[];
  durationDays: number;
  startDate: string;
  liveWeatherAlerts: WeatherAlert[];
  liveWeather: LiveWeatherData | null;
  packingList: PackingItem[];
  itinerary: ItineraryDay[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  quickReplies?: string[];
}
