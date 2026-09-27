import { Destination, ItineraryDay, LiveWeatherData, PackingItem, TripContext } from '../types';

export function generateSmartPackingList(
  context: TripContext,
  weather: LiveWeatherData | null
): PackingItem[] {
  const items: PackingItem[] = [
    // Essentials
    { id: 'p-1', name: 'Government Photo ID / Passport & Copies', category: 'essentials', packed: true },
    { id: 'p-2', name: 'Confirmed Hotel & Travel Bookings', category: 'essentials', packed: false },
    { id: 'p-3', name: 'Cash (₹ Indian Rupees) for Heritage Entry & Local Stalls', category: 'essentials', packed: false },
    { id: 'p-4', name: 'Reusable Insulated Water Bottle', category: 'essentials', packed: false },

    // Clothing
    { id: 'p-5', name: 'Breathable Cotton Clothing / Modest Temple Attire', category: 'clothing', packed: false },
    { id: 'p-6', name: 'Comfortable Walking Sandals / Slip-off Shoes (for temples)', category: 'clothing', packed: false },
    { id: 'p-7', name: 'Evening Casual Wear & Socks', category: 'clothing', packed: false },

    // Health & Safety
    { id: 'p-8', name: 'Basic First Aid & Pain Relief Essentials', category: 'health', packed: false },
    { id: 'p-9', name: 'Mosquito Repellent Cream / Spray', category: 'health', packed: false },
    { id: 'p-10', name: 'Hand Sanitizer & Disinfectant Wipes', category: 'health', packed: false },

    // Electronics
    { id: 'p-11', name: 'Smartphone & Heavy-duty Camera / Lens', category: 'electronics', packed: true },
    { id: 'p-12', name: 'Fast Portable Power Bank (10,000–20,000 mAh)', category: 'electronics', packed: false },
    { id: 'p-13', name: 'Universal Charger & Charging Cables', category: 'electronics', packed: false },
  ];

  // Allergy-specific packing connection
  const totalAllergies = [...(context.allergyPreferences || []), ...(context.customAllergies || [])];
  if (totalAllergies.length > 0) {
    items.push({
      id: 'p-allergy-card',
      name: `Emergency Allergy Kit & Prescribed Medication (${totalAllergies.slice(0, 3).join(', ')})`,
      category: 'health',
      packed: false,
      weatherReason: 'Crucial for emergency safety and dining peace of mind',
    });
    items.push({
      id: 'p-chef-card',
      name: 'Local Language Food Allergy Translation Card',
      category: 'health',
      packed: false,
    });
  }

  // Dynamic Weather-Adaptive packing connection based on LIVE WEATHER
  if (weather?.isRainExpected) {
    items.push({
      id: 'p-rain-1',
      name: '☔ Windproof Compact Travel Umbrella',
      category: 'weather',
      packed: false,
      weatherReason: 'Live Weather Alert: Rain expected during your travel dates',
    });
    items.push({
      id: 'p-rain-2',
      name: '👜 Waterproof Backpack Rain Cover / Dry Pouch for Phones',
      category: 'weather',
      packed: false,
      weatherReason: 'Protects documents and electronics during sudden downpours',
    });
    items.push({
      id: 'p-rain-3',
      name: '👟 Quick-Drying Water-Resistant Walking Shoes',
      category: 'weather',
      packed: false,
      weatherReason: 'Recommended for wet paved streets and slippery temple courtyards',
    });
  }

  if (weather && weather.temperature >= 33) {
    items.push({
      id: 'p-heat-1',
      name: '☀️ High SPF Broad Spectrum Sunscreen (SPF 50+)',
      category: 'weather',
      packed: false,
      weatherReason: `Live Weather Alert: Daytime heat reaching ${weather.temperature}°C`,
    });
    items.push({
      id: 'p-heat-2',
      name: '🧢 Wide-Brim Sun Hat or Breathable Cotton Cap',
      category: 'weather',
      packed: false,
      weatherReason: 'Vital for open monument courtyards and rampart walks',
    });
    items.push({
      id: 'p-heat-3',
      name: '🕶️ UV-Protection Polarized Sunglasses',
      category: 'weather',
      packed: false,
      weatherReason: 'Protection against intense glare from monuments and water',
    });
  }

  if (weather && weather.temperature <= 18) {
    items.push({
      id: 'p-cold-1',
      name: '🧥 Warm Fleece Jacket / Cardigan / Pashmina Shawl',
      category: 'weather',
      packed: false,
      weatherReason: `Live Weather Alert: Cool mountain temperatures (${weather.temperature}°C)`,
    });
    items.push({
      id: 'p-cold-2',
      name: '🧣 Warm Neck Scarf or Woolen Beanie Cap',
      category: 'weather',
      packed: false,
      weatherReason: 'Comfortable for early sunrise viewpoints and foggy mornings',
    });
  }

  return items;
}

export function generatePersonalizedItinerary(
  destination: Destination,
  days: number,
  allergies: string[]
): ItineraryDay[] {
  const allergyNote =
    allergies.length > 0
      ? `Allergy Alert: Avoid food containing ${allergies.join(', ')}. Inform the kitchen before placing orders.`
      : 'Enjoy diverse regional delicacies prepared fresh.';

  const itinerary: ItineraryDay[] = [];

  for (let i = 1; i <= Math.min(days, 5); i++) {
    if (i === 1) {
      itinerary.push({
        day: 1,
        title: `Arrival & Iconic Exploration of ${destination.name}`,
        theme: 'Historic Immersion & Architectural Grandeur',
        morning: {
          time: '08:00 AM – 11:30 AM',
          title: `Guided Darshan & Heritage Walk at ${destination.name}`,
          description: `Early entry to experience peaceful ambience. Explore the central courtyards, stone carvings, and holy shrines before crowds peak.`,
          location: destination.address,
          duration: '3 hours',
          ticketNotice: destination.officialBooking.available ? 'Official e-Ticket required' : 'Direct entrance',
        },
        afternoon: {
          time: '12:30 PM – 03:00 PM',
          title: 'Authentic Regional Lunch & Leisure Stroll',
          description: `Enjoy an authentic feast featuring local specialties. Take a relaxed break during midday heat.`,
          location: `${destination.district} Traditional Dining Quarter`,
          duration: '2.5 hours',
        },
        evening: {
          time: '04:30 PM – 07:00 PM',
          title: 'Cultural Highlights & Photography Golden Hour',
          description: `Catch sunset reflections on heritage structures, explore the outer bazars, and capture iconic photographs.`,
          location: `${destination.name} Viewpoints & Surrounding Bazaars`,
          duration: '2.5 hours',
        },
        night: {
          time: '07:30 PM – 09:30 PM',
          title: 'Night Illumination & Traditional Dinner',
          description: `Witness the architectural lighting or sound-and-light show, followed by a memorable dinner.`,
          location: `${destination.district} Night Market Area`,
          duration: '2 hours',
        },
        foodSuggestion: `Try local specialty dishes such as ${destination.localCuisine.cuisines.map((c) => c.name).slice(0, 2).join(' & ')}.`,
        allergyNote,
        culturalEtiquette: 'Dress modestly with covered shoulders and knees. Remove footwear before entering sanctum courtyards.',
      });
    } else if (i === 2) {
      itinerary.push({
        day: 2,
        title: `Royal Traditions, Museums & Artisans of ${destination.district}`,
        theme: 'Living Culture & Artisanal Discoveries',
        morning: {
          time: '08:30 AM – 11:30 AM',
          title: `Secondary Heritage Landmarks & Palace Grounds`,
          description: `Visit secondary palaces, historical museums, and scenic viewpoints around ${destination.district}.`,
          location: `${destination.district} Heritage Enclave`,
          duration: '3 hours',
        },
        afternoon: {
          time: '12:30 PM – 03:30 PM',
          title: 'Artisan Craft Villages & Culinary Tasting',
          description: `Visit local weavers, bronze sculptors, or spice merchants. Enjoy local snacks and artisanal beverages.`,
          location: 'Old Town Craft Guilds',
          duration: '3 hours',
        },
        evening: {
          time: '04:30 PM – 07:30 PM',
          title: 'Scenic Lake Promenade or Sunset Rampart Walk',
          description: 'Experience twilight panoramic views, lakeside breeze, and local street music.',
          location: `${destination.district} Scenic Point`,
          duration: '3 hours',
        },
        night: {
          time: '08:00 PM – 09:30 PM',
          title: 'Fine Dining & Cultural Performance',
          description: 'Classical dance or music recital accompanied by a curated multi-course regional dinner.',
          location: 'Heritage Cultural Center',
          duration: '1.5 hours',
        },
        foodSuggestion: 'Savor traditional thali lunch and famous desserts from historic family eateries.',
        allergyNote,
        culturalEtiquette: 'Always ask permission before photographing local artisans or private ceremonies.',
      });
    } else {
      itinerary.push({
        day: i,
        title: `Off-the-Beaten-Path & Nature Excursions in ${destination.district}`,
        theme: 'Scenic Escapes & Tranquil Vistas',
        morning: {
          time: '07:30 AM – 11:00 AM',
          title: `Nature Trail, Waterway or Hilltop Sunrise`,
          description: `Breathe in pristine surroundings, wildlife sanctuary trail or early boat excursion away from tourist crowds.`,
          location: `Outskirts of ${destination.district}`,
          duration: '3.5 hours',
        },
        afternoon: {
          time: '12:00 PM – 02:30 PM',
          title: 'Farm-to-Table Lunch Experience',
          description: 'Rustic outdoor feast prepared using fresh organic produce and aromatic plantation spices.',
          location: 'Countryside Eco-Retreat',
          duration: '2.5 hours',
        },
        evening: {
          time: '03:30 PM – 06:30 PM',
          title: 'Souvenir Hunting & Local Spice Bazaars',
          description: 'Shop for authentic GI-tagged textiles, wooden carvings, local tea/coffee, and handmade crafts.',
          location: 'Central Heritage Bazaar',
          duration: '3 hours',
        },
        night: {
          time: '07:30 PM – 09:30 PM',
          title: 'Farewell Gala Dinner & Travel Journaling',
          description: 'Relaxed final evening reviewing travel memories, packing gifts, and enjoying a celebratory feast.',
          location: 'Rooftop Panoramic Restaurant',
          duration: '2 hours',
        },
        foodSuggestion: 'Indulge in seasonal culinary surprises and sweet confections.',
        allergyNote,
        culturalEtiquette: 'Bargain courteously at street bazaars with a friendly smile.',
      });
    }
  }

  return itinerary;
}
