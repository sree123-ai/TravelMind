import { LanguageCode } from '../types';

export interface Translations {
  appName: string;
  appTagline: string;
  nav: {
    planner: string;
    destinations: string;
    food: string;
    allergy: string;
    packing: string;
    itinerary: string;
    assistant: string;
    login: string;
    signup: string;
    logout: string;
    myAccount: string;
  };
  auth: {
    loginTitle: string;
    signupTitle: string;
    email: string;
    password: string;
    name: string;
    loginBtn: string;
    signupBtn: string;
    guestBtn: string;
    or: string;
    switchSignup: string;
    switchLogin: string;
    welcomeBack: string;
    accountCreated: string;
    loggedOut: string;
  };
  stateSearch: {
    title: string;
    searchStatePlaceholder: string;
    searchDistrictPlaceholder: string;
    selectStatePrompt: string;
    selectDistrictPrompt: string;
    notFound: string;
    verifiedStates: string;
    verifiedDistricts: string;
    changeState: string;
    changeDistrict: string;
    allDestinationsIn: string;
    strictLocationNotice: string;
  };
  questionnaire: {
    startPlanning: string;
    stepCount: string;
    back: string;
    next: string;
    submit: string;
    reviewAnswers: string;
    reviewTitle: string;
    reviewDesc: string;
    edit: string;
    generatePlan: string;
    groupTitle: string;
    groupSubtitle: string;
    paceTitle: string;
    paceSubtitle: string;
    budgetTitle: string;
    budgetSubtitle: string;
    climateTitle: string;
    climateSubtitle: string;
    foodTitle: string;
    foodSubtitle: string;
    allergiesTitle: string;
    allergiesSubtitle: string;
    durationTitle: string;
    durationSubtitle: string;
    daysCount: string;
  };
  recommendations: {
    heading: string;
    subheading: string;
    matchScore: string;
    whyMatch: string;
    verifiedDestination: string;
    exactImageVerified: string;
    viewDetails: string;
    viewFood: string;
    viewItinerary: string;
    noDestinationsFound: string;
    showingResultsFor: string;
    filterBy: string;
  };
  destinationDetails: {
    overview: string;
    highlights: string;
    bestTime: string;
    entryFee: string;
    timings: string;
    address: string;
    officialBookingHeading: string;
    bookOfficialTickets: string;
    officialBookingUnavailable: string;
    verifiedSource: string;
    lastVerified: string;
    imageCaption: string;
    exactImageUnavailable: string;
    googleMapBtn: string;
    directionsBtn: string;
    streetViewBtn: string;
    googleEarthBtn: string;
    interactiveMapBtn: string;
    mapUnavailable: string;
    close: string;
  };
  foodPage: {
    pageTitle: string;
    pageSubtitle: string;
    localCuisine: string;
    vegOptions: string;
    veganOptions: string;
    nonVegOptions: string;
    popularDishes: string;
    recommendedPlaces: string;
    foodExperiences: string;
    foodConsiderations: string;
    containsAllergenWarning: string;
    verifiedSafeNotice: string;
    checkWithProvider: string;
    noFoodData: string;
    exploreDishes: string;
    cuisineBadge: string;
  };
  allergyPage: {
    pageTitle: string;
    pageSubtitle: string;
    selectCommonAllergies: string;
    addCustomAllergy: string;
    customAllergyPlaceholder: string;
    addBtn: string;
    activeAllergies: string;
    noAllergiesActive: string;
    removeAllergy: string;
    safetyReminderTitle: string;
    safetyReminderText: string;
    destinationAdvisory: string;
    cautionDishes: string;
  };
  weather: {
    weatherAlertTitle: string;
    rainAlertHeading: string;
    rainAlertMessage: string;
    rainProbability: string;
    precipitationConsideration: string;
    temp: string;
    feelsLike: string;
    humidity: string;
    wind: string;
    liveDataLabel: string;
    unavailable: string;
    packingSyncNotice: string;
  };
  packing: {
    pageTitle: string;
    pageSubtitle: string;
    progress: string;
    allPacked: string;
    addItemPlaceholder: string;
    addBtn: string;
    categoryEssentials: string;
    categoryClothing: string;
    categoryHealth: string;
    categoryWeather: string;
    categoryElectronics: string;
    weatherAdaptiveTag: string;
  };
  itinerary: {
    pageTitle: string;
    pageSubtitle: string;
    day: string;
    morning: string;
    afternoon: string;
    evening: string;
    night: string;
    foodTip: string;
    allergyNote: string;
    etiquette: string;
    printExport: string;
  };
  chatbot: {
    drawerTitle: string;
    drawerSubtitle: string;
    inputPlaceholder: string;
    send: string;
    quickPrompts: string[];
    welcomeMessage: string;
  };
  common: {
    loading: string;
    error: string;
    retry: string;
    save: string;
    cancel: string;
    success: string;
    days: string;
    verified: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, Translations> = {
  en: {
    appName: 'TravelMind AI',
    appTagline: 'Personalized AI Tourism & Travel Planner',
    nav: {
      planner: 'Planner',
      destinations: 'Destinations',
      food: 'Food & Cuisine',
      allergy: 'Allergy Safety',
      packing: 'Packing List',
      itinerary: 'Itinerary',
      assistant: 'AI Assistant',
      login: 'Log In',
      signup: 'Sign Up',
      logout: 'Log Out',
      myAccount: 'My Account',
    },
    auth: {
      loginTitle: 'Welcome to TravelMind AI',
      signupTitle: 'Create TravelMind Account',
      email: 'Email address',
      password: 'Password',
      name: 'Full Name',
      loginBtn: 'Log In',
      signupBtn: 'Create Account',
      guestBtn: 'Continue as Guest Traveler',
      or: 'OR',
      switchSignup: "Don't have an account? Sign Up",
      switchLogin: 'Already have an account? Log In',
      welcomeBack: 'Welcome back!',
      accountCreated: 'Account created successfully!',
      loggedOut: 'Logged out successfully.',
    },
    stateSearch: {
      title: 'Select Destination Region',
      searchStatePlaceholder: 'Search State (e.g., Rajasthan, Tamil Nadu, Kerala)',
      searchDistrictPlaceholder: 'Search District (e.g., Jaipur, Madurai, Ernakulam)',
      selectStatePrompt: 'Choose or search a verified State first',
      selectDistrictPrompt: 'Now choose or search a verified District',
      notFound: 'Location not found in verified data.',
      verifiedStates: 'Verified States',
      verifiedDistricts: 'Verified Districts',
      changeState: 'Change State',
      changeDistrict: 'Change District',
      allDestinationsIn: 'Showing verified destinations in',
      strictLocationNotice: 'Strict Location Filter Active: Only showing genuine places inside this district.',
    },
    questionnaire: {
      startPlanning: 'Start AI Travel Questionnaire',
      stepCount: 'Step',
      back: 'Back',
      next: 'Next Step',
      submit: 'Calculate AI Plan',
      reviewAnswers: 'Review Answers',
      reviewTitle: 'Review Your Trip Preferences',
      reviewDesc: 'Confirm your answers before AI generates tailored destinations, food guides, and itineraries.',
      edit: 'Edit',
      generatePlan: 'Generate AI Recommendations',
      groupTitle: 'Who is traveling?',
      groupSubtitle: 'Personalizes attractions and accessibility for your travel group',
      paceTitle: 'What is your preferred travel pace?',
      paceSubtitle: 'Determines how many places to visit each day',
      budgetTitle: 'Select your budget tier',
      budgetSubtitle: 'Helps curate accommodations, food experiences, and tickets',
      climateTitle: 'Climate preference',
      climateSubtitle: 'Filter landscapes by your favorite atmosphere',
      foodTitle: 'Food & Dietary preferences',
      foodSubtitle: 'Select one or more culinary choices',
      allergiesTitle: 'Food allergies & sensitivities',
      allergiesSubtitle: 'We will flag and avoid allergen risks across all food suggestions',
      durationTitle: 'Trip Duration & Dates',
      durationSubtitle: 'How many days would you like to explore?',
      daysCount: 'Days',
    },
    recommendations: {
      heading: 'AI Recommended Verified Destinations',
      subheading: 'Strictly matched to your selected geographic location and travel style',
      matchScore: 'Match Score',
      whyMatch: 'Why this destination matches you',
      verifiedDestination: 'Verified Exact Location',
      exactImageVerified: 'Verified Destination Image',
      viewDetails: 'Explore Details & Maps',
      viewFood: 'Food Guide',
      viewItinerary: 'Itinerary Plan',
      noDestinationsFound: 'No verified destinations found matching these strict criteria.',
      showingResultsFor: 'Strictly filtered to',
      filterBy: 'Filter by',
    },
    destinationDetails: {
      overview: 'Destination Overview',
      highlights: 'Key Highlights',
      bestTime: 'Best Time to Visit',
      entryFee: 'Entry Fee & Tickets',
      timings: 'Timings & Hours',
      address: 'Verified Address',
      officialBookingHeading: 'Official Booking & Tickets',
      bookOfficialTickets: '🎟️ BOOK OFFICIAL TICKETS',
      officialBookingUnavailable: 'Official online booking is currently unavailable for this destination.',
      verifiedSource: 'Verified Source',
      lastVerified: 'Last Verified',
      imageCaption: 'Verified Landmark Image',
      exactImageUnavailable: 'Exact destination image unavailable.',
      googleMapBtn: '🗺️ GOOGLE MAP',
      directionsBtn: '🧭 DIRECTIONS',
      streetViewBtn: '👁️ STREET VIEW',
      googleEarthBtn: '🌍 GOOGLE EARTH',
      interactiveMapBtn: '📍 INTERACTIVE MAP',
      mapUnavailable: 'Google Maps is unavailable for this destination because verified location data is missing.',
      close: 'Close Window',
    },
    foodPage: {
      pageTitle: '🍛 Food & Local Cuisine',
      pageSubtitle: 'Authentic local gastronomy strictly filtered to your selected district and allergy profile',
      localCuisine: '🍛 Local Cuisine Overview',
      vegOptions: '🥗 Vegetarian Options',
      veganOptions: '🌱 Vegan Options',
      nonVegOptions: '🍗 Non-Vegetarian Options',
      popularDishes: '🍽️ Popular Local Dishes',
      recommendedPlaces: '📍 Recommended Food Places',
      foodExperiences: '🥘 Food Experiences',
      foodConsiderations: '⚠️ Food Considerations & Precautions',
      containsAllergenWarning: '⚠️ Contains your active allergen:',
      verifiedSafeNotice: 'Verified regional specialty dish',
      checkWithProvider: 'Check ingredients and preparation with the food provider.',
      noFoodData: 'Verified food information is currently unavailable.',
      exploreDishes: 'Explore Regional Specialties',
      cuisineBadge: 'Authentic Local Specialty',
    },
    allergyPage: {
      pageTitle: '⚠️ Allergy & Food Safety',
      pageSubtitle: 'Manage food allergies to dynamically safeguard all food recommendations and itinerary meals',
      selectCommonAllergies: 'Select Common Food Allergies',
      addCustomAllergy: 'Add Custom Allergy',
      customAllergyPlaceholder: 'Type custom allergy (e.g. Peanut, Shellfish, Sesame, Mushroom)...',
      addBtn: '+ ADD CUSTOM ALLERGY',
      activeAllergies: 'Your Active Allergies & Sensitivities',
      noAllergiesActive: 'No active allergies selected. Click above to add.',
      removeAllergy: 'Remove',
      safetyReminderTitle: 'Important Health & Safety Reminder',
      safetyReminderText: "Follow your healthcare professional's advice and carry any required medication or emergency information.",
      destinationAdvisory: 'Destination-Specific Allergy Advisory',
      cautionDishes: 'Dishes requiring vigilance in this district',
    },
    weather: {
      weatherAlertTitle: '⚠️ LIVE WEATHER ALERT',
      rainAlertHeading: 'Rain Expected During Travel Period',
      rainAlertMessage: 'Rain is expected in this location during your travel period. Consider carrying rain protection.',
      rainProbability: 'Precipitation Probability',
      precipitationConsideration: 'Consider carrying an umbrella and waterproof bag cover.',
      temp: 'Temperature',
      feelsLike: 'Feels like',
      humidity: 'Humidity',
      wind: 'Wind speed',
      liveDataLabel: 'Real-time Live Weather Data',
      unavailable: 'Live weather alerts are currently unavailable.',
      packingSyncNotice: 'Your packing list has automatically adapted to current weather forecasts.',
    },
    packing: {
      pageTitle: '🎒 Smart Packing Assistant',
      pageSubtitle: 'Weather-adaptive packing checklist dynamically updated with real-time destination climate',
      progress: 'Packed',
      allPacked: 'Awesome! You are all packed and ready for your journey!',
      addItemPlaceholder: 'Add custom packing item...',
      addBtn: 'Add Item',
      categoryEssentials: 'Document & Travel Essentials',
      categoryClothing: 'Clothing & Footwear',
      categoryHealth: 'Health & Toiletries',
      categoryWeather: 'Weather-Specific Gear',
      categoryElectronics: 'Electronics & Power',
      weatherAdaptiveTag: 'Weather Alert Adaptive Item',
    },
    itinerary: {
      pageTitle: '🗺️ AI Personalized Itinerary',
      pageSubtitle: 'Optimized day-by-day exploration plan tailored to your duration, pace, and dietary needs',
      day: 'Day',
      morning: 'Morning',
      afternoon: 'Afternoon',
      evening: 'Evening',
      night: 'Night',
      foodTip: '🍛 Meal Recommendation',
      allergyNote: '⚠️ Dietary / Allergy Safety Note',
      etiquette: '💡 Cultural Etiquette & Local Tip',
      printExport: 'Print / Save Itinerary',
    },
    chatbot: {
      drawerTitle: 'TravelMind AI Assistant',
      drawerSubtitle: 'Location-aware tourism, food safety & travel guide',
      inputPlaceholder: 'Ask about food, rain alerts, tickets, or packing...',
      send: 'Send',
      quickPrompts: [
        'Where can I eat safely here?',
        'What food should I avoid with my allergy?',
        'Is rain expected during my trip?',
        'How do I book official tickets?',
      ],
      welcomeMessage: 'Hello! I am your TravelMind AI assistant. I know your chosen destination, live weather alerts, and allergy preferences. How can I help you plan?',
    },
    common: {
      loading: 'Loading verified travel data...',
      error: 'An unexpected error occurred. Please try again.',
      retry: 'Retry',
      save: 'Save',
      cancel: 'Cancel',
      success: 'Action completed successfully!',
      days: 'days',
      verified: 'Verified Official',
    },
  },

  ta: {
    appName: 'டிராவல்மைண்ட் ஏஐ (TravelMind AI)',
    appTagline: 'தனிப்பயனாக்கப்பட்ட ஏஐ சுற்றுலா & பயணத் திட்டமிடுபவர்',
    nav: {
      planner: 'திட்டமிடுபவர்',
      destinations: 'இடங்கள்',
      food: 'உணவு & விருந்து',
      allergy: 'ஒவ்வாமை பாதுகாப்பு',
      packing: 'பொருட்கள் பட்டியல்',
      itinerary: 'பயணத் திட்டம்',
      assistant: 'ஏஐ உதவியாளர்',
      login: 'உள்நுழைக',
      signup: 'பதிவு செய்க',
      logout: 'வெளியேறுக',
      myAccount: 'என் கணக்கு',
    },
    auth: {
      loginTitle: 'டிராவல்மைண்ட் ஏஐ-க்கு வரவேற்கிறோம்',
      signupTitle: 'புதிய கணக்கை உருவாக்கவும்',
      email: 'மின்னஞ்சல் முகவரி',
      password: 'கடவுச்சொல்',
      name: 'முழுப் பெயர்',
      loginBtn: 'உள்நுழைக',
      signupBtn: 'கணக்கை உருவாக்கு',
      guestBtn: 'விருந்தினராக தொடரவும்',
      or: 'அல்லது',
      switchSignup: 'கணக்கு இல்லையா? பதிவு செய்க',
      switchLogin: 'ஏற்கனவே கணக்கு உள்ளதா? உள்நுழைக',
      welcomeBack: 'மீண்டும் நல்வரவு!',
      accountCreated: 'கணக்கு வெற்றிகரமாக உருவாக்கப்பட்டது!',
      loggedOut: 'வெற்றிகரமாக வெளியேற்றப்பட்டீர்கள்.',
    },
    stateSearch: {
      title: 'சுற்றுலா பகுதியை தேர்ந்தெடுக்கவும்',
      searchStatePlaceholder: 'மாநிலத்தைத் தேடுக (எ.கா: தமிழ்நாடு, கேரளா, ராஜஸ்தான்)',
      searchDistrictPlaceholder: 'மாவட்டத்தைத் தேடுக (எ.கா: மதுரை, சென்னை, எர்ணாகுளம்)',
      selectStatePrompt: 'முதலில் சரிபார்க்கப்பட்ட மாநிலத்தைத் தேர்ந்தெடுக்கவும்',
      selectDistrictPrompt: 'இப்போது சரிபார்க்கப்பட்ட மாவட்டத்தைத் தேர்ந்தெடுக்கவும்',
      notFound: 'சரிபார்க்கப்பட்ட தரவில் இடம் கிடைக்கவில்லை.',
      verifiedStates: 'சரிபார்க்கப்பட்ட மாநிலங்கள்',
      verifiedDistricts: 'சரிபார்க்கப்பட்ட மாவட்டங்கள்',
      changeState: 'மாநிலத்தை மாற்றுக',
      changeDistrict: 'மாவட்டத்தை மாற்றுக',
      allDestinationsIn: 'இம்மாவட்டத்தின் உண்மையான இடங்கள்:',
      strictLocationNotice: 'துல்லிய இருப்பிட வடிகட்டி: தேர்ந்தெடுக்கப்பட்ட மாவட்டத்தின் உள்ளே உள்ள இடங்கள் மட்டுமே காட்டப்படுகின்றன.',
    },
    questionnaire: {
      startPlanning: 'ஏஐ பயணக் கேள்விகளைத் தொடங்குக',
      stepCount: 'படி',
      back: 'பின்செல்',
      next: 'அடுத்த படி',
      submit: 'திட்டத்தை உருவாக்கு',
      reviewAnswers: 'பதில்களை மதிப்பாய்வு செய்க',
      reviewTitle: 'உங்கள் பயண விருப்பங்களை சரிபார்க்கவும்',
      reviewDesc: 'ஏஐ சிறந்த இடங்களை பரிந்துரைக்கும் முன் உங்கள் விருப்பங்களை உறுதிப்படுத்தவும்.',
      edit: 'மாற்று',
      generatePlan: 'ஏஐ பரிந்துரைகளை உருவாக்குக',
      groupTitle: 'யார் பயணிக்கிறார்கள்?',
      groupSubtitle: 'உங்கள் குழுவிற்கேற்ற இடங்களை வரிசைப்படுத்துகிறது',
      paceTitle: 'உங்கள் பயண வேகம் என்ன?',
      paceSubtitle: 'தினசரி எத்தனை இடங்களை பார்வையிட வேண்டும் என்பதை தீர்மானிக்கிறது',
      budgetTitle: 'பயண வரவுசெலவுத் திட்டம்',
      budgetSubtitle: 'தங்குமிடம் மற்றும் உணவைத் தேர்வு செய்ய உதவுகிறது',
      climateTitle: 'காலநிலை விருப்பம்',
      climateSubtitle: 'குளிர், வெப்பம் அல்லது கடற்கரை பகுதிகளைத் தேர்ந்தெடுக்கவும்',
      foodTitle: 'உணவு விருப்பங்கள்',
      foodSubtitle: 'சைவம், அசைவம் அல்லது பாரம்பரிய உணவு முறைகள்',
      allergiesTitle: 'உணவு ஒவ்வாமைகள் (Allergies)',
      allergiesSubtitle: 'உணவுப் பரிந்துரைகளில் இந்த ஒவ்வாமைகளை முழுமையாகத் தவிர்க்க உதவுகிறது',
      durationTitle: 'பயண நாட்கள் & காலம்',
      durationSubtitle: 'எத்தனை நாட்கள் பயணம் செய்ய விரும்புகிறீர்கள்?',
      daysCount: 'நாட்கள்',
    },
    recommendations: {
      heading: 'ஏஐ பரிந்துரைத்த சரிபார்க்கப்பட்ட சுற்றுலாத் தலங்கள்',
      subheading: 'தேர்ந்தெடுக்கப்பட்ட பகுதி மற்றும் உங்கள் பயண விருப்பங்களுக்கு ஏற்ற இடங்கள்',
      matchScore: 'பொருத்தம்',
      whyMatch: 'இது உங்களுக்கு ஏன் பொருந்துகிறது',
      verifiedDestination: 'உறுதிப்படுத்தப்பட்ட உண்மையான இடம்',
      exactImageVerified: 'உண்மையான புகைப்படச் சான்று',
      viewDetails: 'முழு விவரங்கள் & வரைபடம்',
      viewFood: 'உணவு வழிகாட்டி',
      viewItinerary: 'நாட்குறிப்புத் திட்டம்',
      noDestinationsFound: 'இம்மாவட்டத்தில் இந்த அளவுகோலுக்கு ஏற்ற இடங்கள் இல்லை.',
      showingResultsFor: 'துல்லியமாக காட்டப்படும் பகுதி:',
      filterBy: 'வடிகட்டுதல்',
    },
    destinationDetails: {
      overview: 'சுற்றுலாத் தல விளக்கம்',
      highlights: 'முக்கிய சிறப்பம்சங்கள்',
      bestTime: 'செல்ல சிறந்த காலம்',
      entryFee: 'நுழைவுக் கட்டணம் & டிக்கெட்',
      timings: 'நேரங்கள்',
      address: 'முகவரி',
      officialBookingHeading: 'அரசு அதிகாரப்பூர்வ முன்பதிவு',
      bookOfficialTickets: '🎟️ அதிகாரப்பூர்வ டிக்கெட் முன்பதிவு',
      officialBookingUnavailable: 'இந்த இடத்திற்கு அதிகாரப்பூர்வ ஆன்லைன் முன்பதிவு தற்போது கிடைக்கவில்லை.',
      verifiedSource: 'சரிபார்க்கப்பட்ட தளம்',
      lastVerified: 'கடைசியாக சரிபார்க்கப்பட்டது',
      imageCaption: 'இடத்தின் உண்மையான புகைப்படம்',
      exactImageUnavailable: 'துல்லியமான புகைப்படப் பதிவு கிடைக்கவில்லை.',
      googleMapBtn: '🗺️ கூகுள் வரைபடம் (GOOGLE MAP)',
      directionsBtn: '🧭 வழிகாட்டி (DIRECTIONS)',
      streetViewBtn: '👁️ தெருக் காட்சி (STREET VIEW)',
      googleEarthBtn: '🌍 கூகுள் எர்த் (GOOGLE EARTH)',
      interactiveMapBtn: '📍 நேரடி வரைபடம்',
      mapUnavailable: 'சரிபார்க்கப்பட்ட இருப்பிடத் தகவல் இல்லாததால் கூகுள் வரைபடம் கிடைக்கவில்லை.',
      close: 'மூடுக',
    },
    foodPage: {
      pageTitle: '🍛 உணவு & உள்ளூர் பாரம்பரிய விருந்து',
      pageSubtitle: 'தேர்ந்தெடுக்கப்பட்ட மாவட்டத்திற்கான பாரம்பரிய உணவுகள் மற்றும் ஒவ்வாமை பாதுகாப்பு',
      localCuisine: '🍛 உள்ளூர் உணவுப் பண்பாடு',
      vegOptions: '🥗 சைவ உணவுகள்',
      veganOptions: '🌱 வீகன் (பால் தவிர்த்த சைவ) உணவுகள்',
      nonVegOptions: '🍗 அசைவ உணவுகள்',
      popularDishes: '🍽️ புகழ்பெற்ற உள்ளூர் உணவுகள்',
      recommendedPlaces: '📍 பரிந்துரைக்கப்பட்ட சிறந்த உணவகங்கள்',
      foodExperiences: '🥘 சுவையான உணவு அனுபவங்கள்',
      foodConsiderations: '⚠️ உணவு எச்சரிக்கைகள் & முன்னெச்சரிக்கைகள்',
      containsAllergenWarning: '⚠️ உங்கள் ஒவ்வாமை இதில் உள்ளது:',
      verifiedSafeNotice: 'சரிபார்க்கப்பட்ட பாரம்பரிய உணவு',
      checkWithProvider: 'உணவுப் பொருட்களின் சேர்க்கையை உணவகத்திடம் உறுதி செய்யவும்.',
      noFoodData: 'சரிபார்க்கப்பட்ட உணவுத் தகவல் தற்போது கிடைக்கவில்லை.',
      exploreDishes: 'வட்டார உணவுகளைக் காண்க',
      cuisineBadge: 'உண்மையான பாரம்பரிய உணவு',
    },
    allergyPage: {
      pageTitle: '⚠️ ஒவ்வாமை & உணவுப் பாதுகாப்பு',
      pageSubtitle: 'உணவுப் பரிந்துரைகளில் பாதுகாப்பை உறுதி செய்ய ஒவ்வாமைகளை உள்ளிடவும்',
      selectCommonAllergies: 'பொதுவான உணவு ஒவ்வாமைகளைத் தேர்ந்தெடுக்கவும்',
      addCustomAllergy: 'தனிப்பயன் ஒவ்வாமை சேர்க்க',
      customAllergyPlaceholder: 'ஒவ்வாமை பெயரை தட்டச்சு செய்க (எ.கா: வேர்க்கடலை, பால், இறால்)...',
      addBtn: '+ ஒவ்வாமை சேர்க்க',
      activeAllergies: 'உங்கள் தீவிர உணவு ஒவ்வாமைகள்',
      noAllergiesActive: 'ஒவ்வாமை எதுவும் தேர்ந்தெடுக்கப்படவில்லை.',
      removeAllergy: 'நீக்கு',
      safetyReminderTitle: 'முக்கிய மருத்துவப் பாதுகாப்பு நினைவூட்டல்',
      safetyReminderText: 'உங்கள் மருத்துவரின் ஆலோசனையைப் பின்பற்றி அவசர மருந்துகளையும் மருத்துவத் தகவல்களையும் உடன் எடுத்துச் செல்லவும்.',
      destinationAdvisory: 'மாவட்ட உணவு ஒவ்வாமை எச்சரிக்கை',
      cautionDishes: 'இம்மாவட்டத்தில் கவனமாக இருக்க வேண்டிய உணவுகள்',
    },
    weather: {
      weatherAlertTitle: '⚠️ நேரடி வானிலை எச்சரிக்கை',
      rainAlertHeading: 'பயணக் காலத்தில் மழை பெய்ய வாய்ப்புள்ளது',
      rainAlertMessage: 'உங்கள் பயணக் காலத்தில் இந்த இடத்தில் மழை எதிர்பார்க்கப்படுகிறது. குடை அல்லது மழைப் பாதுகாப்பைக் கொண்டு செல்லவும்.',
      rainProbability: 'மழை பொழிவுக்கான வாய்ப்பு',
      precipitationConsideration: 'குடை மற்றும் நீர்ப்புகா பையைக் கையில் வைத்திருக்கவும்.',
      temp: 'வெப்பநிலை',
      feelsLike: 'உணரப்படும் வெப்பம்',
      humidity: 'ஈரப்பதம்',
      wind: 'காற்றின் வேகம்',
      liveDataLabel: 'நேரடி வானிலை நிலவரம்',
      unavailable: 'நேரடி வானிலை எச்சரிக்கைகள் தற்போது கிடைக்கவில்லை.',
      packingSyncNotice: 'வானிலை எச்சரிக்கைக்கு ஏற்ப உங்கள் பேக்கிங் பட்டியல் புதுப்பிக்கப்பட்டுள்ளது.',
    },
    packing: {
      pageTitle: '🎒 புத்திசாலி பேக்கிங் உதவியாளர்',
      pageSubtitle: 'வானிலை மற்றும் பயண இடத்திற்கேற்ப தானாகப் பரிந்துரைக்கப்படும் பொருட்கள்',
      progress: 'எடுக்கப்பட்டது',
      allPacked: 'சிறப்பு! நீங்கள் பயணத்திற்கு முழுமையாகத் தயாராகிவிட்டீர்கள்!',
      addItemPlaceholder: 'புதிய பொருளைச் சேர்க்க...',
      addBtn: 'பொருள் சேர்க்க',
      categoryEssentials: 'முக்கிய ஆவணங்கள் & அத்தியாவசியப் பொருட்கள்',
      categoryClothing: 'உடைகள் & பாதணிகள்',
      categoryHealth: 'மருத்துவம் & சுகாதாரப் பொருட்கள்',
      categoryWeather: 'வானிலைக்கான பிரத்யேக பொருட்கள்',
      categoryElectronics: 'மின்னணு சாதனங்கள் & சார்ஜர்கள்',
      weatherAdaptiveTag: 'வானிலை எச்சரிக்கைக்கேற்ப சேர்க்கப்பட்ட பொருள்',
    },
    itinerary: {
      pageTitle: '🗺️ தனிப்பயனாக்கப்பட்ட பயணத் திட்டம்',
      pageSubtitle: 'உங்கள் கால அவகாசம் மற்றும் வேகத்திற்கு ஏற்ப அமைக்கப்பட்ட தினசரி அட்டவணை',
      day: 'நாள்',
      morning: 'காலை',
      afternoon: 'மதியம்',
      evening: 'மாலை',
      night: 'இரவு',
      foodTip: '🍛 உணவுப் பரிந்துரை',
      allergyNote: '⚠️ ஒவ்வாமை பாதுகாப்பு குறிப்பு',
      etiquette: '💡 பண்பாட்டு வழிகாட்டல் & குறிப்பு',
      printExport: 'அச்சிடுக / சேமிக்க',
    },
    chatbot: {
      drawerTitle: 'டிராவல்மைண்ட் ஏஐ உதவியாளர்',
      drawerSubtitle: 'சுற்றுலா, உணவுப் பாதுகாப்பு மற்றும் பயண வழிகாட்டி',
      inputPlaceholder: 'உணவு, மழை, டிக்கெட் அல்லது பேக்கிங் பற்றிக் கேளுங்கள்...',
      send: 'அனுப்புக',
      quickPrompts: [
        'இங்கு எங்கு பாதுகாப்பாக சாப்பிடலாம்?',
        'என் ஒவ்வாமைக்கு எதைத் தவிர்க்க வேண்டும்?',
        'மழை பெய்ய வாய்ப்புள்ளதா?',
        'அதிகாரப்பூர்வ டிக்கெட் எடுப்பது எப்படி?',
      ],
      welcomeMessage: 'வணக்கம்! நான் உங்கள் டிராவல்மைண்ட் ஏஐ உதவியாளர். உங்கள் சுற்றுலா இடம், நேரடி வானிலை மற்றும் ஒவ்வாமை விவரங்களை நான் அறிவேன். எதில் உதவ வேண்டும்?',
    },
    common: {
      loading: 'தரவுகள் ஏற்றப்படுகின்றன...',
      error: 'பிழை ஏற்பட்டது. மீண்டும் முயற்சிக்கவும்.',
      retry: 'மீண்டும் முயற்சி',
      save: 'சேமி',
      cancel: 'ரத்து',
      success: 'வெற்றிகரமாக முடிந்தது!',
      days: 'நாட்கள்',
      verified: 'சரிபார்க்கப்பட்டது',
    },
  },

  hi: {
    appName: 'ट्रैवलमाइंड एआई (TravelMind AI)',
    appTagline: 'व्यक्तिगत एआई पर्यटन और यात्रा योजनाकार',
    nav: {
      planner: 'प्लानर',
      destinations: 'गंतव्य स्थल',
      food: 'खान-पान व व्यंजन',
      allergy: 'एलर्जी सुरक्षा',
      packing: 'पैकिंग सूची',
      itinerary: 'यात्रा कार्यक्रम',
      assistant: 'एआई सहायक',
      login: 'लॉग इन',
      signup: 'साइन अप',
      logout: 'लॉग आउट',
      myAccount: 'मेरा खाता',
    },
    auth: {
      loginTitle: 'ट्रैवलमाइंड एआई में आपका स्वागत है',
      signupTitle: 'नया खाता बनाएं',
      email: 'ईमेल पता',
      password: 'पासवर्ड',
      name: 'पूरा नाम',
      loginBtn: 'लॉग इन करें',
      signupBtn: 'खाता बनाएं',
      guestBtn: 'अतिथि के रूप में जारी रखें',
      or: 'या',
      switchSignup: 'खाता नहीं है? साइन अप करें',
      switchLogin: 'पहले से खाता है? लॉग इन करें',
      welcomeBack: 'वापसी पर स्वागत है!',
      accountCreated: 'खाता सफलतापूर्वक बनाया गया!',
      loggedOut: 'सफलतापूर्वक लॉग आउट हो गया।',
    },
    stateSearch: {
      title: 'गंतव्य क्षेत्र चुनें',
      searchStatePlaceholder: 'राज्य खोजें (उदा: राजस्थान, तमिलनाडु, केरल)',
      searchDistrictPlaceholder: 'ज़िला खोजें (उदा: जयपुर, मदुरै, एर्नाकुलम)',
      selectStatePrompt: 'पहले कोई सत्यापित राज्य चुनें',
      selectDistrictPrompt: 'अब उस राज्य का सत्यापित ज़िला चुनें',
      notFound: 'स्थान सत्यापित डेटा में नहीं मिला।',
      verifiedStates: 'सत्यापित राज्य',
      verifiedDistricts: 'सत्यापित ज़िले',
      changeState: 'राज्य बदलें',
      changeDistrict: 'ज़िला बदलें',
      allDestinationsIn: 'इस ज़िले के सत्यापित स्थल:',
      strictLocationNotice: 'सख्त स्थान फ़िल्टर सक्रिय: केवल चयनित ज़िले के वास्तविक स्थान दिखाए जा रहे हैं।',
    },
    questionnaire: {
      startPlanning: 'एआई यात्रा प्रश्नावली शुरू करें',
      stepCount: 'चरण',
      back: 'पीछे',
      next: 'अगला चरण',
      submit: 'योजना तैयार करें',
      reviewAnswers: 'उत्तरों की समीक्षा करें',
      reviewTitle: 'अपनी प्राथमिकताओं की समीक्षा करें',
      reviewDesc: 'सिफारिशें उत्पन्न करने से पहले अपनी प्राथमिकताओं की पुष्टि करें।',
      edit: 'संपादित करें',
      generatePlan: 'एआई सिफारिशें प्राप्त करें',
      groupTitle: 'यात्रा में कौन शामिल है?',
      groupSubtitle: 'समूह के अनुसार सर्वोत्तम पर्यटन स्थल चुनता है',
      paceTitle: 'आपकी पसंदीदा यात्रा गति क्या है?',
      paceSubtitle: 'प्रतिदिन कितने स्थानों पर जाना है यह तय करता है',
      budgetTitle: 'बजट श्रेणी चुनें',
      budgetSubtitle: 'होटल, भोजन और टिकट प्राथमिकताओं में मदद करता है',
      climateTitle: 'जलवायु वरीयता',
      climateSubtitle: 'पहाड़ी, तटीय या ऐतिहासिक वातावरण चुनें',
      foodTitle: 'खान-पान की प्राथमिकता',
      foodSubtitle: 'शाकाहारी, मांसाहारी, जैन या वीगन विकल्प',
      allergiesTitle: 'खाद्य एलर्जी व संवेदनशीलता',
      allergiesSubtitle: 'हम भोजन की सिफारिशों में एलर्जी वाले अवयवों से आगाह करेंगे',
      durationTitle: 'यात्रा की अवधि व दिन',
      durationSubtitle: 'आप कितने दिनों के लिए यात्रा करना चाहते हैं?',
      daysCount: 'दिन',
    },
    recommendations: {
      heading: 'एआई द्वारा अनुशंसित सत्यापित गंतव्य',
      subheading: 'आपके द्वारा चुने गए भौगोलिक ज़िले और यात्रा शैली से शत-प्रतिशत मेल खाते हैं',
      matchScore: 'मैच स्कोर',
      whyMatch: 'यह गंतव्य आपके लिए उपयुक्त क्यों है',
      verifiedDestination: 'सत्यापित वास्तविक स्थान',
      exactImageVerified: 'सत्यापित सटीक छवि',
      viewDetails: 'विवरण व मानचित्र देखें',
      viewFood: 'भोजन गाइड',
      viewItinerary: 'दिन-प्रतिदिन योजना',
      noDestinationsFound: 'इस ज़िले में इस मापदंड के अनुसार कोई स्थान नहीं मिला।',
      showingResultsFor: 'सत्यापित ज़िला:',
      filterBy: 'फ़िल्टर',
    },
    destinationDetails: {
      overview: 'गंतव्य का विवरण',
      highlights: 'प्रमुख आकर्षण',
      bestTime: 'घूमने का सर्वोत्तम समय',
      entryFee: 'प्रवेश शुल्क व टिकट',
      timings: 'खुलने का समय',
      address: 'सत्यापित पता',
      officialBookingHeading: 'आधिकारिक टिकट बुकिंग',
      bookOfficialTickets: '🎟️ आधिकारिक टिकट बुक करें',
      officialBookingUnavailable: 'इस गंतव्य के लिए आधिकारिक ऑनलाइन बुकिंग वर्तमान में उपलब्ध नहीं है।',
      verifiedSource: 'सत्यापित स्रोत',
      lastVerified: 'सत्यापन तिथि',
      imageCaption: 'सत्यापित स्मारक छवि',
      exactImageUnavailable: 'सटीक गंतव्य छवि उपलब्ध नहीं है।',
      googleMapBtn: '🗺️ गूगल मैप (GOOGLE MAP)',
      directionsBtn: '🧭 दिशा-निर्देश (DIRECTIONS)',
      streetViewBtn: '👁️ स्ट्रीट व्यू (STREET VIEW)',
      googleEarthBtn: '🌍 गूगल अर्थ (GOOGLE EARTH)',
      interactiveMapBtn: '📍 इंटरएक्टिव मैप',
      mapUnavailable: 'सत्यापित स्थान डेटा अनुपलब्ध होने के कारण गूगल मैप उपलब्ध नहीं है।',
      close: 'बंद करें',
    },
    foodPage: {
      pageTitle: '🍛 स्थानीय भोजन और व्यंजन',
      pageSubtitle: 'चयनित ज़िले के प्रामाणिक पकवान और आपकी एलर्जी सुरक्षा के अनुरूप सिफारिशें',
      localCuisine: '🍛 स्थानीय व्यंजन परिचय',
      vegOptions: '🥗 शाकाहारी विकल्प',
      veganOptions: '🌱 वीगन विकल्प',
      nonVegOptions: '🍗 मांसाहारी विकल्प',
      popularDishes: '🍽️ प्रसिद्ध स्थानीय पकवान',
      recommendedPlaces: '📍 अनुशंसित प्रामाणिक भोजनालय',
      foodExperiences: '🥘 ख़ास खाद्य अनुभव',
      foodConsiderations: '⚠️ भोजन सावधानियां व सुझाव',
      containsAllergenWarning: '⚠️ इसमें आपकी चुनी गई एलर्जी शामिल हो सकती है:',
      verifiedSafeNotice: 'सत्यापित पारंपरिक व्यंजन',
      checkWithProvider: 'भोजन विक्रेता से सामग्री और तैयारी की पुष्टि अवश्य करें।',
      noFoodData: 'सत्यापित भोजन जानकारी वर्तमान में उपलब्ध नहीं है।',
      exploreDishes: 'स्थानीय पकवान देखें',
      cuisineBadge: 'प्रामाणिक स्थानीय विशिष्टता',
    },
    allergyPage: {
      pageTitle: '⚠️ एलर्जी और खाद्य सुरक्षा',
      pageSubtitle: 'अपनी खाद्य एलर्जी दर्ज करें ताकि सभी भोजन सिफारिशें सुरक्षित रहें',
      selectCommonAllergies: 'सामान्य खाद्य एलर्जी चुनें',
      addCustomAllergy: 'कस्टम एलर्जी जोड़ें',
      customAllergyPlaceholder: 'एलर्जी का नाम लिखें (उदा: मूंगफली, दूध, झींगा, तिल)...',
      addBtn: '+ एलर्जी जोड़ें',
      activeAllergies: 'आपकी सक्रिय एलर्जी व संवेदनशीलताएं',
      noAllergiesActive: 'कोई एलर्जी चयनित नहीं है। ऊपर से जोड़ें।',
      removeAllergy: 'हटाएं',
      safetyReminderTitle: 'महत्वपूर्ण स्वास्थ्य एवं सुरक्षा सूचना',
      safetyReminderText: 'अपने चिकित्सक की सलाह का पालन करें और अपनी आवश्यक दवाइयां हमेशा साथ रखें।',
      destinationAdvisory: 'ज़िला-विशिष्ट एलर्जी परामर्श',
      cautionDishes: 'इस ज़िले में सावधानीपूर्वक खाए जाने वाले व्यंजन',
    },
    weather: {
      weatherAlertTitle: '⚠️ लाइव मौसम चेतावनी',
      rainAlertHeading: 'यात्रा के दौरान बारिश की संभावना',
      rainAlertMessage: 'आपकी यात्रा अवधि के दौरान इस स्थान पर बारिश की संभावना है। कृपया छाता या वाटरप्रूफ सुरक्षा साथ रखें।',
      rainProbability: 'वर्षा की संभावना',
      precipitationConsideration: 'छाता और वाटरप्रूफ बैग कवर साथ रखने पर विचार करें।',
      temp: 'तापमान',
      feelsLike: 'महसूस होता तापमान',
      humidity: 'आर्द्रता',
      wind: 'हवा की गति',
      liveDataLabel: 'वास्तविक लाइव मौसम डेटा',
      unavailable: 'लाइव मौसम अलर्ट वर्तमान में उपलब्ध नहीं हैं।',
      packingSyncNotice: 'आपकी पैकिंग सूची मौसम के अनुसार स्वतः अपडेट हो गई है।',
    },
    packing: {
      pageTitle: '🎒 स्मार्ट पैकिंग सहायक',
      pageSubtitle: 'गंतव्य के लाइव मौसम के आधार पर स्वतः तैयार की गई पैकिंग चेकलिस्ट',
      progress: 'पैक किया गया',
      allPacked: 'शानदार! आपकी पैकिंग पूरी हो गई है और आप तैयार हैं!',
      addItemPlaceholder: 'नया सामान जोड़ें...',
      addBtn: 'जोड़ें',
      categoryEssentials: 'दस्तावेज़ और आवश्यक यात्रा सामान',
      categoryClothing: 'कपड़े और जूते',
      categoryHealth: 'स्वास्थ्य व स्वच्छता सामग्री',
      categoryWeather: 'मौसम-विशिष्ट सामग्री',
      categoryElectronics: 'इलेक्ट्रॉनिक्स व चार्जर',
      weatherAdaptiveTag: 'मौसम चेतावनी अनुसार जोड़ी गई वस्तु',
    },
    itinerary: {
      pageTitle: '🗺️ व्यक्तिगत एआई यात्रा कार्यक्रम',
      pageSubtitle: 'आपकी अवधि, गति और खान-पान की जरूरतों के अनुसार अनुकूलित दिन-प्रतिदिन योजना',
      day: 'दिन',
      morning: 'सुबह',
      afternoon: 'दोपहर',
      evening: 'शाम',
      night: 'रात',
      foodTip: '🍛 भोजन की सलाह',
      allergyNote: '⚠️ एलर्जी व सुरक्षा नोट',
      etiquette: '💡 सांस्कृतिक शिष्टाचार और सुझाव',
      printExport: 'प्रिंट करें / सहेजें',
    },
    chatbot: {
      drawerTitle: 'ट्रैवलमाइंड एआई सहायक',
      drawerSubtitle: 'पर्यटन, मौसम, खान-पान और सुरक्षा मार्गदर्शक',
      inputPlaceholder: 'भोजन, बारिश अलर्ट, टिकट या पैकिंग के बारे में पूछें...',
      send: 'भेजें',
      quickPrompts: [
        'यहां सुरक्षित भोजन कहां मिलेगा?',
        'मेरी एलर्जी में मुझे क्या छोड़ना चाहिए?',
        'क्या बारिश की संभावना है?',
        'आधिकारिक टिकट कैसे बुक करें?',
      ],
      welcomeMessage: 'नमस्ते! मैं आपका ट्रैवलमाइंड एआई सहायक हूं। मुझे आपके चुने हुए गंतव्य, लाइव मौसम और एलर्जी प्राथमिकताओं की जानकारी है। मैं आपकी क्या मदद कर सकता हूं?',
    },
    common: {
      loading: 'डेटा लोड हो रहा है...',
      error: 'त्रुटि हुई। कृपया पुनः प्रयास करें।',
      retry: 'पुनः प्रयास',
      save: 'सहेजें',
      cancel: 'रद्द करें',
      success: 'सफलतापूर्वक पूर्ण हुआ!',
      days: 'दिन',
      verified: 'सत्यापित',
    },
  },

  te: {
    appName: 'ట్రావెల్‌మైండ్ ఏఐ (TravelMind AI)',
    appTagline: 'వ్యక్తిగతీకరించిన ఏఐ పర్యాటక & ప్రయాణ ప్రణాళికాకర్త',
    nav: {
      planner: 'ప్లానర్',
      destinations: 'ప్రదేశాలు',
      food: 'ఆహారం & వంటకాలు',
      allergy: 'అలెర్జీ భద్రత',
      packing: 'ప్యాకింగ్ జాబితా',
      itinerary: 'ప్రయాణ ప్రణాళిక',
      assistant: 'ఏఐ అసిస్టెంట్',
      login: 'లాగిన్',
      signup: 'సైన్ అప్',
      logout: 'లాగ్ అవుట్',
      myAccount: 'నా ఖాతా',
    },
    auth: {
      loginTitle: 'ట్రావెల్‌మైండ్ ఏఐకి స్వాగతం',
      signupTitle: 'ఖాతాను సృష్టించండి',
      email: 'ఈమెయిల్ చిరునామా',
      password: 'పాస్‌వర్డ్',
      name: 'పూర్తి పేరు',
      loginBtn: 'లాగిన్ అవ్వండి',
      signupBtn: 'ఖాతా సృష్టించండి',
      guestBtn: 'అతిథిగా కొనసాగండి',
      or: 'లేదా',
      switchSignup: 'ఖాతా లేదా? సైన్ అప్ చేయండి',
      switchLogin: 'ఖాతా ఉందా? లాగిన్ అవ్వండి',
      welcomeBack: 'మళ్ళీ స్వాగతం!',
      accountCreated: 'ఖాతా విజయవంతంగా సృష్టించబడింది!',
      loggedOut: 'విజయవంతంగా లాగ్ అవుట్ అయ్యారు.',
    },
    stateSearch: {
      title: 'గమ్యస్థాన ప్రాంతాన్ని ఎంచుకోండి',
      searchStatePlaceholder: 'రాష్ట్రాన్ని వెతకండి (ఉదా: తమిళనాడు, కేరళ, రాజస్థాన్)',
      searchDistrictPlaceholder: 'జిల్లాను వెతకండి (ఉదా: మదురై, జైపూర్, ఎర్నాకులం)',
      selectStatePrompt: 'ముందుగా ధృవీకరించబడిన రాష్ట్రాన్ని ఎంచుకోండి',
      selectDistrictPrompt: 'ఇప్పుడు ధృవీకరించబడిన జిల్లాను ఎంచుకోండి',
      notFound: 'ధృవీకరించబడిన డేటాలో స్థానం కనుగొనబడలేదు.',
      verifiedStates: 'ధృవీకరించబడిన రాష్ట్రాలు',
      verifiedDistricts: 'ధృవీకరించబడిన జిల్లాలు',
      changeState: 'రాష్ట్రాన్ని మార్చండి',
      changeDistrict: 'జిల్లాను మార్చండి',
      allDestinationsIn: 'ఈ జిల్లాలోని నిజమైన ప్రదేశాలు:',
      strictLocationNotice: 'ఖచ్చితమైన లొకేషన్ ఫిల్టర్: ఎంచుకున్న జిల్లా లోపలి ప్రదేశాలు మాత్రమే చూపబడతాయి.',
    },
    questionnaire: {
      startPlanning: 'ఏఐ ప్రయాణ ప్రశ్నావళిని ప్రారంభించండి',
      stepCount: 'దశ',
      back: 'వెనుకకు',
      next: 'తదుపరి దశ',
      submit: 'ప్లాన్ రూపొందించండి',
      reviewAnswers: 'సమాధానాలను సమీక్షించండి',
      reviewTitle: 'మీ ప్రయాణ ప్రాధాన్యతలను తనిఖీ చేయండి',
      reviewDesc: 'సిఫార్సులు రూపొందించే ముందు మీ వివరాలను నిర్ధారించండి.',
      edit: 'సవరించు',
      generatePlan: 'ఏఐ సిఫార్సులను పొందండి',
      groupTitle: 'ఎవరు ప్రయాణిస్తున్నారు?',
      groupSubtitle: 'మీ బృందానికి తగిన ప్రదేశాలను ఎంచుకుంటుంది',
      paceTitle: 'మీ ప్రయాణ వేగం ఎంత ఉండాలి?',
      paceSubtitle: 'రోజూ ఎన్ని ప్రదేశాలు చూడాలో నిర్ణయిస్తుంది',
      budgetTitle: 'బడ్జెట్ శ్రేణిని ఎంచుకోండి',
      budgetSubtitle: 'హోటళ్ళు మరియు ఆహార ఖర్చులను సరిపోల్చుతుంది',
      climateTitle: 'వాతావరణ ప్రాధాన్యత',
      climateSubtitle: 'శీతల, తీరప్రాంత లేదా చారిత్రక వాతావరణం',
      foodTitle: 'ఆహార ప్రాధాన్యతలు',
      foodSubtitle: 'శాకాహార, మాంసాహార లేదా సాంప్రదాయ వంటకాలు',
      allergiesTitle: 'ఆహార అలెర్జీలు (Allergies)',
      allergiesSubtitle: 'ఆహార సూచనలలో అలెర్జీ పదార్థాలను నివారించడానికి తోడ్పడుతుంది',
      durationTitle: 'ప్రయాణ సమయం & రోజులు',
      durationSubtitle: 'ఎన్ని రోజులు ప్రయాణించాలనుకుంటున్నారు?',
      daysCount: 'రోజులు',
    },
    recommendations: {
      heading: 'ఏఐ సిఫార్సు చేసిన ధృవీకరించబడిన ప్రదేశాలు',
      subheading: 'ఎంచుకున్న భౌగోళిక జిల్లా మరియు మీ శైలికి సరిగ్గా సరిపోతాయి',
      matchScore: 'మ్యాచ్ స్కోరు',
      whyMatch: 'ఇది మీకు ఎందుకు సరిపోతుంది',
      verifiedDestination: 'ధృవీకరించబడిన నిజమైన ప్రదేశం',
      exactImageVerified: 'ఖచ్చితమైన చిత్రం ధృవీకరించబడింది',
      viewDetails: 'వివరాలు & మ్యాప్ చూడండి',
      viewFood: 'ఆహార గైడ్',
      viewItinerary: 'రోజువారీ ప్లాన్',
      noDestinationsFound: 'ఈ జిల్లాలో ఈ ప్రమాణాలకు సరిపోయే స్థలాలు లేవు.',
      showingResultsFor: 'ధృవీకరించబడిన జిల్లా:',
      filterBy: 'ఫిల్టర్',
    },
    destinationDetails: {
      overview: 'గమ్యస్థాన సమాచారం',
      highlights: 'ముఖ్య ఆకర్షణలు',
      bestTime: 'సందర్శించడానికి ఉత్తమ సమయం',
      entryFee: 'ప్రవేశ రుసుము & టిక్కెట్లు',
      timings: 'సమయాలు',
      address: 'చిరునామా',
      officialBookingHeading: 'అధికారిక టిక్కెట్ బుకింగ్',
      bookOfficialTickets: '🎟️ అధికారిక టిక్కెట్లు బుక్ చేసుకోండి',
      officialBookingUnavailable: 'ఈ గమ్యస్థానానికి అధికారిక ఆన్‌లైన్ బుకింగ్ ప్రస్తుతం అందుబాటులో లేదు.',
      verifiedSource: 'ధృవీకరించబడిన మూలం',
      lastVerified: 'ధృవీకరణ తేదీ',
      imageCaption: 'ధృవీకరించబడిన ఫోటో',
      exactImageUnavailable: 'ఖచ్చితమైన గమ్యస్థాన చిత్రం అందుబాటులో లేదు.',
      googleMapBtn: '🗺️ గూగుల్ మ్యాప్ (GOOGLE MAP)',
      directionsBtn: '🧭 దిశలు (DIRECTIONS)',
      streetViewBtn: '👁️ స్ట్రీట్ వ్యూ (STREET VIEW)',
      googleEarthBtn: '🌍 గూగుల్ ఎర్త్ (GOOGLE EARTH)',
      interactiveMapBtn: '📍 ప్రత్యక్ష మ్యాప్',
      mapUnavailable: 'ధృవీకరించబడిన లొకేషన్ సమాచారం లేనందున గూగుల్ మ్యాప్ అందుబాటులో లేదు.',
      close: 'మూసివేయి',
    },
    foodPage: {
      pageTitle: '🍛 ఆహారం & స్థానిక వంటకాలు',
      pageSubtitle: 'ఎంచుకున్న జిల్లా యొక్క ప్రామాణిక వంటకాలు మరియు అలెర్జీ భద్రతా మార్గదర్శి',
      localCuisine: '🍛 స్థానిక ఆహార సంస్కృతి',
      vegOptions: '🥗 శాకాహార వంటకాలు',
      veganOptions: '🌱 వీగన్ వంటకాలు',
      nonVegOptions: '🍗 మాంసాహార వంటకాలు',
      popularDishes: '🍽️ ప్రసిద్ధ స్థానిక వంటకాలు',
      recommendedPlaces: '📍 సిఫార్సు చేసిన హోటళ్ళు',
      foodExperiences: '🥘 ఆహార అనుభవాలు',
      foodConsiderations: '⚠️ ఆహార జాగ్రత్తలు',
      containsAllergenWarning: '⚠️ మీ అలెర్జీ ఇందులో ఉండవచ్చు:',
      verifiedSafeNotice: 'ధృవీకరించబడిన స్థానిక వంటకం',
      checkWithProvider: 'ఆహార పదార్థాల తయారీని రెస్టారెంట్‌తో సరిచూసుకోండి.',
      noFoodData: 'ధృవీకరించబడిన ఆహార సమాచారం ప్రస్తుతం అందుబాటులో లేదు.',
      exploreDishes: 'వంటకాలను పరిశీలించండి',
      cuisineBadge: 'ప్రామాణిక స్థానిక వంటకం',
    },
    allergyPage: {
      pageTitle: '⚠️ అలెర్జీ & ఆహార భద్రత',
      pageSubtitle: 'భోజన సిఫార్సులలో భద్రత కోసం మీ ఆహార అలెర్జీలను నమోదు చేయండి',
      selectCommonAllergies: 'సాధారణ ఆహార అలెర్జీలను ఎంచుకోండి',
      addCustomAllergy: 'కస్టమ్ అలెర్జీ జోడించండి',
      customAllergyPlaceholder: 'అలెర్జీ పేరును టైప్ చేయండి (ఉదా: వేరుశెనగ, పాలు, రొయ్యలు)...',
      addBtn: '+ అలెర్జీని జోడించండి',
      activeAllergies: 'మీ క్రియాశీల అలెర్జీలు',
      noAllergiesActive: 'అలెర్జీలు ఎంపిక చేయబడలేదు.',
      removeAllergy: 'తొలగించు',
      safetyReminderTitle: 'ముఖ్యమైన ఆరోగ్య మరియు భద్రతా హెచ్చరిక',
      safetyReminderText: 'మీ వైద్యుని సలహాలను అనుసరించండి మరియు అత్యవసర మందులను ఎల్లప్పుడూ వెంట ఉంచుకోండి.',
      destinationAdvisory: 'జిల్లా వారీ అలెర్జీ సలహా',
      cautionDishes: 'ఈ జిల్లాలో జాగ్రత్తగా ఉండవలసిన వంటకాలు',
    },
    weather: {
      weatherAlertTitle: '⚠️ ప్రత్యక్ష వాతావరణ హెచ్చరిక',
      rainAlertHeading: 'ప్రయాణ సమయంలో వర్షం పడే అవకాశం ఉంది',
      rainAlertMessage: 'ఈ ప్రయాణ కాలంలో ఇక్కడ వర్షం కురిసే అవకాశం ఉంది. గొడుగు లేదా వర్ష రక్షణను తీసుకెళ్లండి.',
      rainProbability: 'వర్షపాత సంభావ్యత',
      precipitationConsideration: 'గొడుగు మరియు వాటర్‌ప్రూఫ్ బ్యాగ్ కవర్ వెంట ఉంచుకోవడం మంచిది.',
      temp: 'ఉష్ణోగ్రత',
      feelsLike: 'అనిపించే ఉష్ణోగ్రత',
      humidity: 'తేమ శాతం',
      wind: 'గాలి వేగం',
      liveDataLabel: 'ప్రత్యక్ష వాతావరణ సమాచారం',
      unavailable: 'ప్రత్యక్ష వాతావరణ హెచ్చరికలు ప్రస్తుతం అందుబాటులో లేవు.',
      packingSyncNotice: 'వాతావరణ హెచ్చరికకు అనుగుణంగా మీ ప్యాకింగ్ జాబితా నవీకరించబడింది.',
    },
    packing: {
      pageTitle: '🎒 స్మార్ట్ ప్యాకింగ్ అసిస్టెంట్',
      pageSubtitle: 'వాతావరణం మరియు ప్రయాణ ప్రదేశానికి అనుగుణంగా స్వయంచాలక ప్యాకింగ్ జాబితా',
      progress: 'ప్యాక్ చేయబడింది',
      allPacked: 'అద్భుతం! మీ ప్యాకింగ్ పూర్తయింది, ప్రయాణానికి మీరు సిద్ధం!',
      addItemPlaceholder: 'కొత్త వస్తువును జోడించండి...',
      addBtn: 'జోడించు',
      categoryEssentials: 'ముఖ్యమైన పత్రాలు & ప్రయాణ అవసరాలు',
      categoryClothing: 'దుస్తులు & పాదరక్షలు',
      categoryHealth: 'వైద్యం & పరిశుభ్రత',
      categoryWeather: 'వాతావరణ పరికరాలు',
      categoryElectronics: 'ఎలక్ట్రానిక్స్ & ఛార్జర్లు',
      weatherAdaptiveTag: 'వాతావరణ హెచ్చరిక ద్వారా చేర్చబడిన వస్తువు',
    },
    itinerary: {
      pageTitle: '🗺️ వ్యక్తిగతీకరించిన ప్రయాణ ప్రణాళిక',
      pageSubtitle: 'మీ సమయం మరియు వేగానికి తగినట్లుగా సిద్ధం చేసిన రోజువారీ షెడ్యూల్',
      day: 'రోజు',
      morning: 'ఉదయం',
      afternoon: 'మధ్యాహ్నం',
      evening: 'సాయంత్రం',
      night: 'రాత్రి',
      foodTip: '🍛 భోజన సలహా',
      allergyNote: '⚠️ అలెర్జీ భద్రతా గమనిక',
      etiquette: '💡 సాంస్కృతిక సూచన & చిట్కా',
      printExport: 'ప్రింట్ / సేవ్ చేయండి',
    },
    chatbot: {
      drawerTitle: 'ట్రావెల్‌మైండ్ ఏఐ అసిస్టెంట్',
      drawerSubtitle: 'పర్యాటక, వాతావరణ, ఆహార భద్రతా సహాయకుడు',
      inputPlaceholder: 'ఆహారం, వర్షం హెచ్చరికలు, టిక్కెట్లు లేదా ప్యాకింగ్ గురించి అడగండి...',
      send: 'పంపండి',
      quickPrompts: [
        'ఇక్కడ సురక్షితమైన ఆహారం ఎక్కడ దొరుకుతుంది?',
        'నా అలెర్జీకి నేను వేటిని నివారించాలి?',
        'వర్షం పడే అవకాశం ఉందా?',
        'అధికారిక టిక్కెట్లు ఎలా బుక్ చేయాలి?',
      ],
      welcomeMessage: 'నమస్కారం! నేను మీ ట్రావెల్‌మైండ్ ఏఐ అసిస్టెంట్‌ని. మీ గమ్యస్థానం, ప్రత్యక్ష వాతావరణం మరియు అలెర్జీ ప్రాధాన్యతలను నేను అర్థం చేసుకోగలను. ఎలా సహాయపడగలను?',
    },
    common: {
      loading: 'డేటా లోడ్ అవుతోంది...',
      error: 'లోపం సంభవించింది. మళ్ళీ ప్రయత్నించండి.',
      retry: 'మళ్ళీ ప్రయత్నించు',
      save: 'సేవ్',
      cancel: 'రద్దు చేయి',
      success: 'విజయవంతంగా పూర్తయింది!',
      days: 'రోజులు',
      verified: 'ధృవీకరించబడింది',
    },
  },

  ml: {
    appName: 'ട്രാവൽമൈൻഡ് എഐ (TravelMind AI)',
    appTagline: 'വ്യക്തിഗത എഐ ടൂറിസം & ട്രാവൽ പ്ലാനർ',
    nav: {
      planner: 'പ്ലാനർ',
      destinations: 'സ്ഥലങ്ങൾ',
      food: 'ഭക്ഷണവും രുചിയും',
      allergy: 'അലർജി സുരക്ഷ',
      packing: 'പാക്കിംഗ് ലിസ്റ്റ്',
      itinerary: 'യാത്രാ പദ്ധതി',
      assistant: 'എഐ അസിസ്റ്റന്റ്',
      login: 'ലോഗിൻ',
      signup: 'സൈൻ അപ്പ്',
      logout: 'ലോഗ് ഔട്ട്',
      myAccount: 'എന്റെ അക്കൗണ്ട്',
    },
    auth: {
      loginTitle: 'ട്രാവൽമൈൻഡ് എഐയിലേക്ക് സ്വാഗതം',
      signupTitle: 'പുതിയ അക്കൗണ്ട് ഉണ്ടാക്കുക',
      email: 'ഇമെയിൽ വിലാസം',
      password: 'പാസ്‌വേഡ്',
      name: 'പൂർണ്ണ നാമം',
      loginBtn: 'ലോഗിൻ ചെയ്യുക',
      signupBtn: 'അക്കൗണ്ട് സൃഷ്ടിക്കുക',
      guestBtn: 'ഗസ്റ്റായി തുടരുക',
      or: 'അഥവാ',
      switchSignup: 'അക്കൗണ്ട് ഇല്ലേ? സൈൻ അപ്പ് ചെയ്യുക',
      switchLogin: 'ഇതിനകം അക്കൗണ്ട് ഉണ്ടോ? ലോഗിൻ ചെയ്യുക',
      welcomeBack: 'തിരികെ സ്വാഗതം!',
      accountCreated: 'അക്കൗണ്ട് വിജയകരമായി സൃഷ്ടിച്ചു!',
      loggedOut: 'വിജയകരമായി ലോഗ് ഔട്ട് ചെയ്തു.',
    },
    stateSearch: {
      title: 'യാത്രാ പ്രദേശം തിരഞ്ഞെടുക്കുക',
      searchStatePlaceholder: 'സംസ്ഥാനം തിരയുക (ഉദാ: കേരളം, തമിഴ്നാട്, രാജസ്ഥാൻ)',
      searchDistrictPlaceholder: 'ജില്ല തിരയുക (ഉദാ: എറണാകുളം, ഇടുക്കി, മധുര, ജയ്പൂർ)',
      selectStatePrompt: 'ആദ്യം സ്ഥിരീകരിച്ച സംസ്ഥാനം തിരഞ്ഞെടുക്കുക',
      selectDistrictPrompt: 'ഇനി സ്ഥിരീകരിച്ച ജില്ല തിരഞ്ഞെടുക്കുക',
      notFound: 'സ്ഥിരീകരിച്ച ഡാറ്റയിൽ ഈ സ്ഥലം കണ്ടെത്തിയില്ല.',
      verifiedStates: 'സ്ഥിരീകരിച്ച സംസ്ഥാനങ്ങൾ',
      verifiedDistricts: 'സ്ഥിരീകരിച്ച ജില്ലകൾ',
      changeState: 'സംസ്ഥാനം മാറ്റുക',
      changeDistrict: 'ജില്ല മാറ്റുക',
      allDestinationsIn: 'ഈ ജില്ലയിലെ യഥാർത്ഥ സ്ഥലങ്ങൾ:',
      strictLocationNotice: 'കൃത്യമായ ലൊക്കേഷൻ ഫിൽട്ടർ സജീവം: തിരഞ്ഞെടുത്ത ജില്ലയിലെ യഥാർത്ഥ സ്ഥലങ്ങൾ മാത്രമാണ് കാണിക്കുന്നത്.',
    },
    questionnaire: {
      startPlanning: 'എഐ യാത്രാ ചോദ്യാവലി ആരംഭിക്കുക',
      stepCount: 'ഘട്ടം',
      back: 'പുറകോട്ട്',
      next: 'അടുത്ത ഘട്ടം',
      submit: 'പ്ലാൻ തയ്യാറാക്കുക',
      reviewAnswers: 'ഉത്തരങ്ങൾ അവലോകനം ചെയ്യുക',
      reviewTitle: 'നിങ്ങളുടെ യാത്രാ മുൻഗണനകൾ പരിശോധിക്കുക',
      reviewDesc: 'ശുപാർശകൾ തയ്യാറാക്കുന്നതിന് മുൻപ് വിവരങ്ങൾ ഉറപ്പുവരുത്തുക.',
      edit: 'മാറ്റുക',
      generatePlan: 'എഐ ശുപാർശകൾ ലഭ്യമാക്കുക',
      groupTitle: 'ആരൊക്കെയാണ് യാത്ര ചെയ്യുന്നത്?',
      groupSubtitle: 'യാത്രാ സംഘത്തിന് അനുയോജ്യമായ സ്ഥലങ്ങൾ ക്രമീകരിക്കുന്നു',
      paceTitle: 'യാത്രയുടെ വേഗത എങ്ങനെയായിരിക്കണം?',
      paceSubtitle: 'ദിവസേന എത്ര സ്ഥലങ്ങൾ സന്ദർശിക്കണമെന്ന് തീരുമാനിക്കുന്നു',
      budgetTitle: 'ബഡ്ജറ്റ് തിരഞ്ഞെടുക്കുക',
      budgetSubtitle: 'താമസവും ഭക്ഷണവും നിശ്ചയിക്കാൻ സഹായിക്കുന്നു',
      climateTitle: 'കാലാവസ്ഥാ താൽപ്പര്യം',
      climateSubtitle: 'തണുപ്പ്, തീരദേശം അല്ലെങ്കിൽ പൈതൃക അന്തരീക്ഷം',
      foodTitle: 'ഭക്ഷണ മുൻഗണനകൾ',
      foodSubtitle: 'വെജിറ്റേറിയൻ, നോൺ-വെജ് അല്ലെങ്കിൽ പരമ്പരാഗത ഭക്ഷണങ്ങൾ',
      allergiesTitle: 'ഭക്ഷണ അലർജികൾ (Allergies)',
      allergiesSubtitle: 'ഭക്ഷണ നിർദ്ദേശങ്ങളിൽ അലർജി ഘടകങ്ങൾ ഒഴിവാക്കാൻ സഹായിക്കുന്നു',
      durationTitle: 'യാത്രാ ദിനങ്ങൾ',
      durationSubtitle: 'എത്ര ദിവസത്തെ യാത്രയാണ് ഉദ്ദേശിക്കുന്നത്?',
      daysCount: 'ദിവസങ്ങൾ',
    },
    recommendations: {
      heading: 'എഐ ശുപാർശ ചെയ്ത സ്ഥിരീകരിച്ച സ്ഥലങ്ങൾ',
      subheading: 'തിരഞ്ഞെടുത്ത പ്രദേശത്തിനും നിങ്ങളുടെ താത്പര്യങ്ങൾക്കും ഏറ്റവും അനുയോജ്യമായവ',
      matchScore: 'പൊരുത്തം',
      whyMatch: 'ഇത് നിങ്ങൾക്ക് എന്തുകൊണ്ട് അനുയോജ്യമാകുന്നു',
      verifiedDestination: 'സ്ഥിരീകരിച്ച യഥാർത്ഥ സ്ഥലം',
      exactImageVerified: 'കൃത്യമായ ചിത്രം സ്ഥിരീകരിച്ചു',
      viewDetails: 'വിവരങ്ങളും മാപ്പും കാണുക',
      viewFood: 'ഭക്ഷണ ഗൈഡ്',
      viewItinerary: 'ദിവസേനയുള്ള പ്ലാൻ',
      noDestinationsFound: 'ഈ ജില്ലയിൽ ഈ മാനദണ്ഡങ്ങൾക്ക് അനുയോജ്യമായ സ്ഥലങ്ങൾ ലഭ്യമല്ല.',
      showingResultsFor: 'സ്ഥിരീകരിച്ച ജില്ല:',
      filterBy: 'ഫിൽട്ടർ',
    },
    destinationDetails: {
      overview: 'സ്ഥല വിവരണം',
      highlights: 'പ്രധാന ആകർഷണങ്ങൾ',
      bestTime: 'സന്ദർശിക്കാൻ അനുയോജ്യമായ സമയം',
      entryFee: 'പ്രവേശന ഫീസും ടിക്കറ്റും',
      timings: 'പ്രവർത്തന സമയം',
      address: 'വിലാസം',
      officialBookingHeading: 'ഔദ്യോഗിക ടിക്കറ്റ് ബുക്കിംഗ്',
      bookOfficialTickets: '🎟️ ഔദ്യോഗിക ടിക്കറ്റ് ബുക്ക് ചെയ്യുക',
      officialBookingUnavailable: 'ഈ സ്ഥലത്തേക്ക് നിലവിൽ ഔദ്യോഗിക ഓൺലൈൻ ബുക്കിംഗ് ലഭ്യമല്ല.',
      verifiedSource: 'സ്ഥിരീകരിച്ച ഉറവിടം',
      lastVerified: 'അവസാനം പരിശോധിച്ചത്',
      imageCaption: 'സ്ഥലത്തിന്റെ യഥാർത്ഥ ചിത്രം',
      exactImageUnavailable: 'കൃത്യമായ സ്ഥല ചിത്രം ലഭ്യമല്ല.',
      googleMapBtn: '🗺️ ഗൂഗിൾ മാപ്പ് (GOOGLE MAP)',
      directionsBtn: '🧭 വഴികാട്ടി (DIRECTIONS)',
      streetViewBtn: '👁️ സ്ട്രീറ്റ് വ്യൂ (STREET VIEW)',
      googleEarthBtn: '🌍 ഗൂഗിൾ എർത്ത് (GOOGLE EARTH)',
      interactiveMapBtn: '📍 ഇന്ററാക്ടീവ് മാപ്പ്',
      mapUnavailable: 'സ്ഥിരീകരിച്ച ലൊക്കേഷൻ വിവരങ്ങൾ ഇല്ലാത്തതിനാൽ ഗൂഗിൾ മാപ്പ് ലഭ്യമല്ല.',
      close: 'അടയ്ക്കുക',
    },
    foodPage: {
      pageTitle: '🍛 ഭക്ഷണവും പ്രാദേശിക വിഭവങ്ങളും',
      pageSubtitle: 'തിരഞ്ഞെടുത്ത ജില്ലയിലെ തനത് രുചികളും അലർജി സുരക്ഷാ നിർദ്ദേശങ്ങളും',
      localCuisine: '🍛 പ്രാദേശിക ഭക്ഷണ പാരമ്പര്യം',
      vegOptions: '🥗 വെജിറ്റേറിയൻ വിഭവങ്ങൾ',
      veganOptions: '🌱 വീഗൻ വിഭവങ്ങൾ',
      nonVegOptions: '🍗 നോൺ-വെജിറ്റേറിയൻ വിഭവങ്ങൾ',
      popularDishes: '🍽️ പ്രശസ്ത പ്രാദേശിക വിഭവങ്ങൾ',
      recommendedPlaces: '📍 ശുപാർശ ചെയ്യുന്ന പ്രമുഖ ഹോട്ടലുകൾ',
      foodExperiences: '🥘 രുചി അനുഭവങ്ങൾ',
      foodConsiderations: '⚠️ ഭക്ഷണ മുൻകരുതലുകൾ',
      containsAllergenWarning: '⚠️ നിങ്ങളുടെ അലർജി ഇതിൽ അടങ്ങിയിരിക്കാം:',
      verifiedSafeNotice: 'സ്ഥിരീകരിച്ച പരമ്പരാഗത വിഭവം',
      checkWithProvider: 'ചേരുവകളും പാചക രീതിയും ഹോട്ടലുമായി ഉറപ്പുവരുത്തുക.',
      noFoodData: 'സ്ഥിരീകരിച്ച ഭക്ഷണ വിവരങ്ങൾ നിലവിൽ ലഭ്യമല്ല.',
      exploreDishes: 'വിഭവങ്ങൾ കാണുക',
      cuisineBadge: 'തനത് നാടൻ വിഭവം',
    },
    allergyPage: {
      pageTitle: '⚠️ അലർജിയും ഭക്ഷണ സുരക്ഷയും',
      pageSubtitle: 'സുരക്ഷിതമായ ഭക്ഷണ ശുപാർശകൾക്കായി നിങ്ങളുടെ അലർജികൾ ചേർക്കുക',
      selectCommonAllergies: 'സാധാരണ ഭക്ഷണ അലർജികൾ തിരഞ്ഞെടുക്കുക',
      addCustomAllergy: 'കസ്റ്റം അലർജി ചേർക്കുക',
      customAllergyPlaceholder: 'അലർജിയുടെ പേര് ടൈപ്പ് ചെയ്യുക (ഉദാ: നിലക്കടല, പാൽ, കൊഞ്ച്, എള്ള്)...',
      addBtn: '+ അലർജി ചേർക്കുക',
      activeAllergies: 'നിങ്ങൾ ചേർത്ത അലർജികൾ',
      noAllergiesActive: 'അലർജികളൊന്നും തിരഞ്ഞെടുത്തിട്ടില്ല.',
      removeAllergy: 'ഒഴിവാക്കുക',
      safetyReminderTitle: 'പ്രധാന ആരോഗ്യ & സുരക്ഷാ ഓർമ്മപ്പെടുത്തൽ',
      safetyReminderText: 'ഡോക്ടറുടെ നിർദ്ദേശം പിന്തുടരുക, അത്യാവശ്യ മരുന്നുകൾ എപ്പോഴും കൂടെ കരുതുക.',
      destinationAdvisory: 'ജില്ലാ അലർജി നിർദ്ദേശം',
      cautionDishes: 'ഈ ജില്ലയിൽ പ്രത്യേകം ശ്രദ്ധിക്കേണ്ട വിഭവങ്ങൾ',
    },
    weather: {
      weatherAlertTitle: '⚠️ തത്സമയ കാലാവസ്ഥാ മുന്നറിയിപ്പ്',
      rainAlertHeading: 'യാത്രാ വേളയിൽ മഴയ്ക്ക് സാധ്യതയുണ്ട്',
      rainAlertMessage: 'നിങ്ങളുടെ യാത്രാ കാലയളവിൽ ഈ സ്ഥലത്ത് മഴ പെയ്യാൻ സാധ്യതയുണ്ട്. കുടയോ മഴക്കോട്ടോ കരുതുന്നത് ഉചിതമായിരിക്കും.',
      rainProbability: 'മഴയ്ക്കുള്ള സാധ്യത',
      precipitationConsideration: 'കുടയും വാട്ടർപ്രൂഫ് ബാഗ് കവറും കൈയ്യിൽ കരുതുക.',
      temp: 'താപനില',
      feelsLike: 'അനുഭവപ്പെടുന്ന താപം',
      humidity: 'ഈർപ്പം',
      wind: 'കാറ്റിന്റെ വേഗത',
      liveDataLabel: 'തത്സമയ കാലാവസ്ഥാ വിവരം',
      unavailable: 'തത്സമയ കാലാവസ്ഥാ അലേർട്ടുകൾ നിലവിൽ ലഭ്യമല്ല.',
      packingSyncNotice: 'കാലാവസ്ഥാ മുന്നറിയിപ്പിനനുസരിച്ച് നിങ്ങളുടെ പാക്കിംഗ് ലിസ്റ്റ് അപ്ഡേറ്റ് ചെയ്തിട്ടുണ്ട്.',
    },
    packing: {
      pageTitle: '🎒 സ്മാർട്ട് പാക്കിംഗ് അസിസ്റ്റന്റ്',
      pageSubtitle: 'കാലാവസ്ഥയ്ക്കും സ്ഥലത്തിനും അനുസൃതമായി സ്വയം തയ്യാറാകുന്ന ലിസ്റ്റ്',
      progress: 'പാക്ക് ചെയ്തത്',
      allPacked: 'ഗംഭീരം! പാക്കിംഗ് പൂർത്തിയായി, യാത്രയ്ക്ക് നിങ്ങൾ തയ്യാറാണ്!',
      addItemPlaceholder: 'പുതിയ സാധനം ചേർക്കുക...',
      addBtn: 'ചേർക്കുക',
      categoryEssentials: 'രേഖകളും യാത്രാ അവശ്യവസ്തുക്കളും',
      categoryClothing: 'വസ്ത്രങ്ങളും പാദരക്ഷകളും',
      categoryHealth: 'ആരോഗ്യവും ശുചിത്വവും',
      categoryWeather: 'കാലാവസ്ഥാ അനുയോജ്യമായവ',
      categoryElectronics: 'ഇലക്ട്രോണിക്സും ചാർജറുകളും',
      weatherAdaptiveTag: 'കാലാവസ്ഥാ മുന്നറിയിപ്പനുസരിച്ച് ചേർത്തത്',
    },
    itinerary: {
      pageTitle: '🗺️ വ്യക്തിഗത യാത്രാ പദ്ധതി',
      pageSubtitle: 'നിങ്ങളുടെ സമയത്തിനും വേഗതയ്ക്കും അനുയോജ്യമായി ചിട്ടപ്പെടുത്തിയ പ്ലാൻ',
      day: 'ദിവസം',
      morning: 'രാവിലെ',
      afternoon: 'ഉച്ചയ്ക്ക്',
      evening: 'വൈകുന്നേരം',
      night: 'രാത്രി',
      foodTip: '🍛 ഭക്ഷണ നിർദ്ദേശം',
      allergyNote: '⚠️ അലർജി സുരക്ഷാ കുറിപ്പ്',
      etiquette: '💡 സാംസ്കാരിക മര്യാദകളും ടിപ്പും',
      printExport: 'പ്രിന്റ് / സേവ് ചെയ്യുക',
    },
    chatbot: {
      drawerTitle: 'ട്രാവൽമൈൻഡ് എഐ അസിസ്റ്റന്റ്',
      drawerSubtitle: 'ടൂറിസം, കാലാവസ്ഥ, ഭക്ഷണ സുരക്ഷാ വഴികാട്ടി',
      inputPlaceholder: 'ഭക്ഷണം, മഴ മുന്നറിയിപ്പ്, ടിക്കറ്റുകൾ എന്നിവ ചോദിക്കൂ...',
      send: 'അയക്കുക',
      quickPrompts: [
        'ഇവിടെ സുരക്ഷിതമായി എവിടെ ഭക്ഷണം കഴിക്കാം?',
        'എന്റെ അലർജിക്ക് എന്തൊക്കെ ഒഴിവാക്കണം?',
        'മഴ പെയ്യാൻ സാധ്യതയുണ്ടോ?',
        'ഔദ്യോഗിക ടിക്കറ്റ് എങ്ങനെ ബുക്ക് ചെയ്യാം?',
      ],
      welcomeMessage: 'നമസ്കാരം! ഞാൻ നിങ്ങളുടെ ട്രാവൽമൈൻഡ് എഐ സഹായിയാണ്. തിരഞ്ഞെടുത്ത സ്ഥലം, ലൈവ് കാലാവസ്ഥ, അലർജി വിവരങ്ങൾ എന്നിവ എനിക്കറിയാം. എന്താണ് അറിയേണ്ടത്?',
    },
    common: {
      loading: 'ഡാറ്റ ലോഡ് ചെയ്യുന്നു...',
      error: 'ഒരു തകരാർ സംഭവിച്ചു. വീണ്ടും ശ്രമിക്കുക.',
      retry: 'വീണ്ടും ശ്രമിക്കുക',
      save: 'സേവ്',
      cancel: 'റദ്ദാക്കുക',
      success: 'വിജയകരമായി പൂർത്തിയായി!',
      days: 'ദിവസങ്ങൾ',
      verified: 'സ്ഥിരീകരിച്ചത്',
    },
  },

  kn: {
    appName: 'ಟ್ರಾವೆಲ್‌ಮೈಂಡ್ ಎಐ (TravelMind AI)',
    appTagline: 'ವೈಯಕ್ತಿಕರಿಸಿದ ಎಐ ಪ್ರವಾಸೋದ್ಯಮ ಮತ್ತು ಪ್ರಯಾಣ ಯೋಜಕ',
    nav: {
      planner: 'ಪ್ಲಾನರ್',
      destinations: 'ತಾಣಗಳು',
      food: 'ಆಹಾರ ಮತ್ತು ಪಾಕಪದ್ಧತಿ',
      allergy: 'ಅಲರ್ಜಿ ಸುರಕ್ಷತೆ',
      packing: 'ಪ್ಯಾಕಿಂಗ್ ಪಟ್ಟಿ',
      itinerary: 'ಪ್ರಯಾಣ ವೇಳಾಪಟ್ಟಿ',
      assistant: 'ಎಐ ಸಹಾಯಕ',
      login: 'ಲಾಗಿನ್',
      signup: 'ಸೈನ್ ಅಪ್',
      logout: 'ಲಾಗ್ ಔಟ್',
      myAccount: 'ನನ್ನ ಖಾತೆ',
    },
    auth: {
      loginTitle: 'ಟ್ರಾವೆಲ್‌ಮೈಂಡ್ ಎಐಗೆ ಸುಸ್ವಾಗತ',
      signupTitle: 'ಹೊಸ ಖಾತೆ ರಚಿಸಿ',
      email: 'ಇಮೇಲ್ ವಿಳಾಸ',
      password: 'ಪಾಸ್‌ವರ್ಡ್',
      name: 'ಪೂರ್ಣ ಹೆಸರು',
      loginBtn: 'ಲಾಗಿನ್ ಮಾಡಿ',
      signupBtn: 'ಖಾತೆ ರಚಿಸಿ',
      guestBtn: 'ಅತಿಥಿಯಾಗಿ ಮುಂದುವರಿಯಿರಿ',
      or: 'ಅಥವಾ',
      switchSignup: 'ಖಾತೆ ಇಲ್ಲವೇ? ಸೈನ್ ಅಪ್ ಮಾಡಿ',
      switchLogin: 'ಖಾತೆ ಇದೆಯೇ? ಲಾಗಿನ್ ಮಾಡಿ',
      welcomeBack: 'ಮತ್ತೆ ಸುಸ್ವಾಗತ!',
      accountCreated: 'ಖಾತೆ ಯಶಸ್ವಿಯಾಗಿ ರಚನೆಯಾಗಿದೆ!',
      loggedOut: 'ಯಶಸ್ವಿಯಾಗಿ ಲಾಗ್ ಔಟ್ ಆಗಿದ್ದೀರಿ.',
    },
    stateSearch: {
      title: 'ಗಮ್ಯಸ್ಥಾನ ಪ್ರದೇಶವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
      searchStatePlaceholder: 'ರಾಜ್ಯ ಹುಡುಕಿ (ಉದಾ: ಕರ್ನಾಟಕ, ತಮಿಳುನಾಡು, ಕೇರಳ)',
      searchDistrictPlaceholder: 'ಜಿಲ್ಲೆ ಹುಡುಕಿ (ಉದಾ: ಮೈಸೂರು, ಬೆಂಗಳೂರು, ಮಧುರೈ)',
      selectStatePrompt: 'ಮೊದಲು ದೃಢೀಕರಿಸಿದ ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
      selectDistrictPrompt: 'ಈಗ ದೃಢೀಕರಿಸಿದ ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
      notFound: 'ದೃಢೀಕರಿಸಿದ ಡೇಟಾದಲ್ಲಿ ಈ ಸ್ಥಳ ಕಂಡುಬಂದಿಲ್ಲ.',
      verifiedStates: 'ದೃಢೀಕರಿಸಿದ ರಾಜ್ಯಗಳು',
      verifiedDistricts: 'ದೃಢೀಕರಿಸಿದ ಜಿಲ್ಲೆಗಳು',
      changeState: 'ರಾಜ್ಯ ಬದಲಾಯಿಸಿ',
      changeDistrict: 'ಜಿಲ್ಲೆ ಬದಲಾಯಿಸಿ',
      allDestinationsIn: 'ಈ ಜಿಲ್ಲೆಯ ನಿಜವಾದ ಸ್ಥಳಗಳು:',
      strictLocationNotice: 'ನಿಖರ ಸ್ಥಳ ಫಿಲ್ಟರ್ ಸಕ್ರಿಯವಾಗಿದೆ: ಆಯ್ಕೆಮಾಡಿದ ಜಿಲ್ಲೆಯೊಳಗಿನ ಸ್ಥಳಗಳು ಮಾತ್ರ ತೋರಿಸಲಾಗುತ್ತಿದೆ.',
    },
    questionnaire: {
      startPlanning: 'ಎಐ ಪ್ರಯಾಣ ಪ್ರಶ್ನಾವಳಿ ಪ್ರಾರಂಭಿಸಿ',
      stepCount: 'ಹಂತ',
      back: 'ಹಿಂದೆ',
      next: 'ಮುಂದಿನ ಹಂತ',
      submit: 'ಯೋಜನೆ ರಚಿಸಿ',
      reviewAnswers: 'ಉತ್ತರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',
      reviewTitle: 'ನಿಮ್ಮ ಪ್ರಯಾಣದ ಆದ್ಯತೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',
      reviewDesc: 'ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯುವ ಮೊದಲು ನಿಮ್ಮ ವಿವರಗಳನ್ನು ದೃಢೀಕರಿಸಿ.',
      edit: 'ತಿದ್ದು',
      generatePlan: 'ಎಐ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ',
      groupTitle: 'ಯಾರು ಪ್ರಯಾಣಿಸುತ್ತಿದ್ದಾರೆ?',
      groupSubtitle: 'ನಿಮ್ಮ ಗುಂಪಿಗೆ ಸರಿಹೊಂದುವ ಸ್ಥಳಗಳನ್ನು ಆರಿಸಿಕೊಳ್ಳುತ್ತದೆ',
      paceTitle: 'ನಿಮ್ಮ ಪ್ರಯಾಣದ ವೇಗ ಹೇಗಿರಬೇಕು?',
      paceSubtitle: 'ದಿನಕ್ಕೆ ಎಷ್ಟು ಸ್ಥಳಗಳನ್ನು ನೋಡಬೇಕೆಂದು ನಿರ್ಧರಿಸುತ್ತದೆ',
      budgetTitle: 'ಬಜೆಟ್ ಶ್ರೇಣಿ ಆಯ್ಕೆಮಾಡಿ',
      budgetSubtitle: 'ಹೋಟೆಲ್ ಮತ್ತು ಊಟದ ವೆಚ್ಚಗಳನ್ನು ಅಂದಾಜು ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ',
      climateTitle: 'ಹವಾಮಾನ ಆದ್ಯತೆ',
      climateSubtitle: 'ತಂಪಾದ, ಕರಾವಳಿ ಅಥವಾ ಐತಿಹಾಸಿಕ ವಾತಾವರಣ',
      foodTitle: 'ಆಹಾರ ಆದ್ಯತೆಗಳು',
      foodSubtitle: 'ಸಸ್ಯಾಹಾರಿ, ಮಾಂಸಾಹಾರಿ ಅಥವಾ ಸಾಂಪ್ರದಾಯಿಕ ಆಹಾರಗಳು',
      allergiesTitle: 'ಆಹಾರ ಅಲರ್ಜಿಗಳು (Allergies)',
      allergiesSubtitle: 'ಆಹಾರ ಶಿಫಾರಸುಗಳಲ್ಲಿ ಅಲರ್ಜಿ ಇರುವ ಪದಾರ್ಥಗಳನ್ನು ತಪ್ಪಿಸಲು ನೆರವಾಗುತ್ತದೆ',
      durationTitle: 'ಪ್ರಯಾಣದ ದಿನಗಳು',
      durationSubtitle: 'ಎಷ್ಟು ದಿನಗಳ ಪ್ರಯಾಣ ಮಾಡಲು ಇಚ್ಛಿಸುತ್ತೀರಿ?',
      daysCount: 'ದಿನಗಳು',
    },
    recommendations: {
      heading: 'ಎಐ ಶಿಫಾರಸು ಮಾಡಿದ ದೃಢೀಕರಿಸಿದ ತಾಣಗಳು',
      subheading: 'ಆಯ್ಕೆಮಾಡಿದ ಭೌಗೋಳಿಕ ಜಿಲ್ಲೆ ಮತ್ತು ನಿಮ್ಮ ಆದ್ಯತೆಗೆ ತಕ್ಕಂತೆ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ',
      matchScore: 'ಹೊಂದಾಣಿಕೆ',
      whyMatch: 'ಇದು ನಿಮಗೆ ಏಕೆ ಸೂಕ್ತವಾಗಿದೆ',
      verifiedDestination: 'ದೃಢೀಕರಿಸಿದ ನೈಜ ಸ್ಥಳ',
      exactImageVerified: 'ಖಚಿತವಾದ ಚಿತ್ರ ದೃಢೀಕರಿಸಲಾಗಿದೆ',
      viewDetails: 'ವಿವರಗಳು ಮತ್ತು ನಕ್ಷೆ ನೋಡಿ',
      viewFood: 'ಆಹಾರ ಮಾರ್ಗದರ್ಶಿ',
      viewItinerary: 'ದಿನಚರಿ ಯೋಜನೆ',
      noDestinationsFound: 'ಈ ಜಿಲ್ಲೆಯಲ್ಲಿ ಈ ಮಾನದಂಡಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗುವ ಸ್ಥಳಗಳಿಲ್ಲ.',
      showingResultsFor: 'ದೃಢೀಕರಿಸಿದ ಜಿಲ್ಲೆ:',
      filterBy: 'ಫಿಲ್ಟರ್',
    },
    destinationDetails: {
      overview: 'ತಾಣದ ವಿವರಣೆ',
      highlights: 'ಪ್ರಮುಖ ಆಕರ್ಷಣೆಗಳು',
      bestTime: 'ಭೇಟಿ ನೀಡಲು ಸೂಕ್ತ ಸಮಯ',
      entryFee: 'ಪ್ರವೇಶ ಶುಲ್ಕ ಮತ್ತು ಟಿಕೆಟ್‌ಗಳು',
      timings: 'ಸಮಯ',
      address: 'ವಿಳಾಸ',
      officialBookingHeading: 'ಅಧಿಕೃತ ಟಿಕೆಟ್ ಬುಕಿಂಗ್',
      bookOfficialTickets: '🎟️ ಅಧಿಕೃತ ಟಿಕೆಟ್‌ಗಳನ್ನು ಬುಕ್ ಮಾಡಿ',
      officialBookingUnavailable: 'ಈ ತಾಣಕ್ಕೆ ಅಧಿಕೃತ ಆನ್‌ಲೈನ್ ಬುಕಿಂಗ್ ಪ್ರಸ್ತುತ ಲಭ್ಯವಿಲ್ಲ.',
      verifiedSource: 'ದೃಢೀಕರಿಸಿದ ಮೂಲ',
      lastVerified: 'ದೃಢೀಕರಣ ದಿನಾಂಕ',
      imageCaption: 'ದೃಢೀಕರಿಸಿದ ಛಾಯಾಚಿತ್ರ',
      exactImageUnavailable: 'ನಿಖರವಾದ ಚಿತ್ರ ಲಭ್ಯವಿಲ್ಲ.',
      googleMapBtn: '🗺️ ಗೂಗಲ್ ಮ್ಯಾಪ್ (GOOGLE MAP)',
      directionsBtn: '🧭 ನಿರ್ದೇಶನಗಳು (DIRECTIONS)',
      streetViewBtn: '👁️ ಸ್ಟ್ರೀಟ್ ವ್ಯೂ (STREET VIEW)',
      googleEarthBtn: '🌍 ಗೂಗಲ್ ಅರ್ಥ್ (GOOGLE EARTH)',
      interactiveMapBtn: '📍 ಸಂವಾದಾತ್ಮಕ ನಕ್ಷೆ',
      mapUnavailable: 'ದೃಢೀಕರಿಸಿದ ಸ್ಥಳ ಮಾಹಿತಿ ಇಲ್ಲದಿರುವುದರಿಂದ ಗೂಗಲ್ ಮ್ಯಾಪ್ ಲಭ್ಯವಿಲ್ಲ.',
      close: 'ಮುಚ್ಚಿ',
    },
    foodPage: {
      pageTitle: '🍛 ಆಹಾರ ಮತ್ತು ಸ್ಥಳೀಯ ಪಾಕಪದ್ಧತಿ',
      pageSubtitle: 'ಆಯ್ಕೆಮಾಡಿದ ಜಿಲ್ಲೆಯ ಸಾಂಪ್ರದಾಯಿಕ ಆಹಾರಗಳು ಮತ್ತು ಅಲರ್ಜಿ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು',
      localCuisine: '🍛 ಸ್ಥಳೀಯ ಆಹಾರ ಸಂಸ್ಕೃತಿ',
      vegOptions: '🥗 ಸಸ್ಯಾಹಾರಿ ಆಯ್ಕೆಗಳು',
      veganOptions: '🌱 ವೀಗನ್ ಆಯ್ಕೆಗಳು',
      nonVegOptions: '🍗 ಮಾಂಸಾಹಾರಿ ಆಯ್ಕೆಗಳು',
      popularDishes: '🍽️ ಪ್ರಸಿದ್ಧ ಸ್ಥಳೀಯ ತಿನಿಸುಗಳು',
      recommendedPlaces: '📍 ಶಿಫಾರಸು ಮಾಡಿದ ಹೋಟೆಲ್‌ಗಳು',
      foodExperiences: '🥘 ಆಹಾರ ಅನುಭವಗಳು',
      foodConsiderations: '⚠️ ಆಹಾರ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು',
      containsAllergenWarning: '⚠️ ನಿಮ್ಮ ಅಲರ್ಜಿ ಇದರಲ್ಲಿರಬಹುದು:',
      verifiedSafeNotice: 'ದೃಢೀಕರಿಸಿದ ಸ್ಥಳೀಯ ತಿನಿಸು',
      checkWithProvider: 'ತಯಾರಿಕೆಯ ವಿವರಗಳನ್ನು ಹೋಟೆಲ್‌ನೊಂದಿಗೆ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.',
      noFoodData: 'ದೃಢೀಕರಿಸಿದ ಆಹಾರ ಮಾಹಿತಿ ಪ್ರಸ್ತುತ ಲಭ್ಯವಿಲ್ಲ.',
      exploreDishes: 'ತಿನಿಸುಗಳನ್ನು ನೋಡಿ',
      cuisineBadge: 'ಸಾಂಪ್ರದಾಯಿಕ ಸ್ಥಳೀಯ ತಿನಿಸು',
    },
    allergyPage: {
      pageTitle: '⚠️ ಅಲರ್ಜಿ ಮತ್ತು ಆಹಾರ ಸುರಕ್ಷತೆ',
      pageSubtitle: 'ಸುರಕ್ಷಿತ ಆಹಾರ ಶಿಫಾರಸುಗಳಿಗಾಗಿ ನಿಮ್ಮ ಆಹಾರ ಅಲರ್ಜಿಗಳನ್ನು ನಮೂದಿಸಿ',
      selectCommonAllergies: 'ಸಾಮಾನ್ಯ ಆಹಾರ ಅಲರ್ಜಿಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ',
      addCustomAllergy: 'ಕಸ್ಟಮ್ ಅಲರ್ಜಿ ಸೇರಿಸಿ',
      customAllergyPlaceholder: 'ಅಲರ್ಜಿಯ ಹೆಸರು ಟೈಪ್ ಮಾಡಿ (ಉದಾ: ಕಡಲೆಕಾಯಿ, ಹಾಲು, ಸೀಗಡಿ)...',
      addBtn: '+ ಅಲರ್ಜಿ ಸೇರಿಸಿ',
      activeAllergies: 'ನಿಮ್ಮ ಸಕ್ರಿಯ ಅಲರ್ಜಿಗಳು',
      noAllergiesActive: 'ಯಾವುದೇ ಅಲರ್ಜಿ ಆಯ್ಕೆಮಾಡಲಾಗಿಲ್ಲ.',
      removeAllergy: 'ತೆಗೆದುಹಾಕಿ',
      safetyReminderTitle: 'ಪ್ರಮುಖ ಆರೋಗ್ಯ ಮತ್ತು ಸುರಕ್ಷತಾ ಜ್ಞಾಪನೆ',
      safetyReminderText: 'ನಿಮ್ಮ ವೈದ್ಯರ ಸಲಹೆಯನ್ನು ಅನುಸರಿಸಿ ಮತ್ತು ಅಗತ್ಯ ಔಷಧಿಗಳನ್ನು ಯಾವಾಗಲೂ ಜೊತೆಯಲ್ಲಿಡಿ.',
      destinationAdvisory: 'ಜಿಲ್ಲಾವಾರು ಅಲರ್ಜಿ ಸಲಹೆ',
      cautionDishes: 'ಈ ಜಿಲ್ಲೆಯಲ್ಲಿ ಜಾಗರೂಕರಾಗಿರಬೇಕಾದ ಆಹಾರಗಳು',
    },
    weather: {
      weatherAlertTitle: '⚠️ ನೇರ ಹವಾಮಾನ ಮುನ್ನೆಚ್ಚರಿಕೆ',
      rainAlertHeading: 'ಪ್ರಯಾಣದ ಸಮಯದಲ್ಲಿ ಮಳೆಯಾಗುವ ಸಾಧ್ಯತೆಯಿದೆ',
      rainAlertMessage: 'ನಿಮ್ಮ ಪ್ರಯಾಣದ ಅವಧಿಯಲ್ಲಿ ಇಲ್ಲಿ ಮಳೆಯಾಗುವ ಸಾಧ್ಯತೆಯಿದೆ. ಛತ್ರಿ ಅಥವಾ ಮಳೆ ರಕ್ಷಣೆಯನ್ನು ಜೊತೆಯಲ್ಲಿಟ್ಟುಕೊಳ್ಳಿ.',
      rainProbability: 'ಮಳೆಯಾಗುವ ಸಂಭವನೀಯತೆ',
      precipitationConsideration: 'ಛತ್ರಿ ಮತ್ತು ವಾಟರ್‌ಪ್ರೂಫ್ ಬ್ಯಾಗ್ ಕವರ್ ಜೊತೆಯಲ್ಲಿಟ್ಟುಕೊಳ್ಳಲು ಪರಿಗಣಿಸಿ.',
      temp: 'ತಾಪಮಾನ',
      feelsLike: 'ಅನುಭವವಾಗುವ ತಾಪಮಾನ',
      humidity: 'ಆರ್ದ್ರತೆ',
      wind: 'ಗಾಳಿಯ ವೇಗ',
      liveDataLabel: 'ನೈಜ ಸಮಯದ ಲೈವ್ ಹವಾಮಾನ ಮಾಹಿತಿ',
      unavailable: 'ಲೈವ್ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆಗಳು ಪ್ರಸ್ತುತ ಲಭ್ಯವಿಲ್ಲ.',
      packingSyncNotice: 'ಹವಾಮಾನ ಮುನ್ನೆಚ್ಚರಿಕೆಗೆ ಅನುಗುಣವಾಗಿ ನಿಮ್ಮ ಪ್ಯಾಕಿಂಗ್ ಪಟ್ಟಿ ನವೀಕರಿಸಲಾಗಿದೆ.',
    },
    packing: {
      pageTitle: '🎒 ಸ್ಮಾರ್ಟ್ ಪ್ಯಾಕಿಂಗ್ ಸಹಾಯಕ',
      pageSubtitle: 'ಹವಾಮಾನ ಮತ್ತು ಗಮ್ಯಸ್ಥಾನಕ್ಕೆ ತಕ್ಕಂತೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಿದ್ಧವಾಗುವ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ',
      progress: 'ಪ್ಯಾಕ್ ಮಾಡಲಾಗಿದೆ',
      allPacked: 'ಅದ್ಭುತ! ನಿಮ್ಮ ಪ್ಯಾಕಿಂಗ್ ಮುಗಿದಿದೆ, ಪ್ರಯಾಣಕ್ಕೆ ನೀವು ಸಿದ್ಧ!',
      addItemPlaceholder: 'ಹೊಸ ವಸ್ತುವನ್ನು ಸೇರಿಸಿ...',
      addBtn: 'ಸೇರಿಸಿ',
      categoryEssentials: 'ದಾಖಲೆಗಳು ಮತ್ತು ಪ್ರಮುಖ ವಸ್ತುಗಳು',
      categoryClothing: 'ಉಡುಪುಗಳು ಮತ್ತು ಪಾದರಕ್ಷೆಗಳು',
      categoryHealth: 'ಆರೋಗ್ಯ ಮತ್ತು ನೈರ್ಮಲ್ಯ',
      categoryWeather: 'ಹವಾಮಾನ ಉಪಕರಣಗಳು',
      categoryElectronics: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಮತ್ತು ಚಾರ್ಜರ್‌ಗಳು',
      weatherAdaptiveTag: 'ಹವಾಮಾನ ಮುನ್ನೆಚ್ಚರಿಕೆಯ ಆಧಾರದ ಮೇಲೆ ಸೇರಿಸಲಾದ ವಸ್ತು',
    },
    itinerary: {
      pageTitle: '🗺️ ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಪ್ರಯಾಣ ವೇಳಾಪಟ್ಟಿ',
      pageSubtitle: 'ನಿಮ್ಮ ದಿನಗಳು ಮತ್ತು ವೇಗಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಸಿದ್ಧಪಡಿಸಿದ ದಿನಚರಿ ಯೋಜನೆ',
      day: 'ದಿನ',
      morning: 'ಬೆಳಿಗ್ಗೆ',
      afternoon: 'ಮಧ್ಯಾಹ್ನ',
      evening: 'ಸಂಜೆ',
      night: 'ರಾತ್ರಿ',
      foodTip: '🍛 ಊಟದ ಸಲಹೆ',
      allergyNote: '⚠️ ಅಲರ್ಜಿ ಸುರಕ್ಷತಾ ಟಿಪ್ಪಣಿ',
      etiquette: '💡 ಸಾಂಸ್ಕೃತಿಕ ಶಿಷ್ಟಾಚಾರ ಮತ್ತು ಸಲಹೆ',
      printExport: 'ಮುದ್ರಿಸಿ / ಉಳಿಸಿ',
    },
    chatbot: {
      drawerTitle: 'ಟ್ರಾವಲ್ಮೈಂಡ್ ಎಐ ಸಹಾಯಕ',
      drawerSubtitle: 'ಪ್ರವಾಸ, ಹವಾಮಾನ, ಆಹಾರ ಸುರಕ್ಷತೆಯ ಮಾರ್ಗದರ್ಶಿ',
      inputPlaceholder: 'ಆಹಾರ, ಮಳೆ ಮುನ್ಸೂಚನೆ, ಟಿಕೆಟ್‌ಗಳು ಅಥವಾ ಪ್ಯಾಕಿಂಗ್ ಬಗ್ಗೆ ಕೇಳಿ...',
      send: 'ಕಳುಹಿಸಿ',
      quickPrompts: [
        'ಇಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ಎಲ್ಲಿ ಊಟ ಮಾಡಬಹುದು?',
        'ನನ್ನ ಅಲರ್ಜಿಗೆ ನಾನು ಏನನ್ನು ತಪ್ಪಿಸಬೇಕು?',
        'ಮಳೆಯಾಗುವ ಸಾಧ್ಯತೆ ಇದೆಯೇ?',
        'ಅಧಿಕೃತ ಟಿಕೆಟ್ ಬುಕ್ ಮಾಡುವುದು ಹೇಗೆ?',
      ],
      welcomeMessage: 'ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಟ್ರಾವಲ್ಮೈಂಡ್ ಎಐ ಸಹಾಯಕ. ನಿಮ್ಮ ತಾಣ, ಲೈವ್ ಹವಾಮಾನ ಮತ್ತು ಅಲರ್ಜಿ ವಿವರಗಳು ನನಗೆ ತಿಳಿದಿದೆ. ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?',
    },
    common: {
      loading: 'ಮಾಹಿತಿ ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
      error: 'ದೋಷ ಸಂಭವಿಸಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      retry: 'ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ',
      save: 'ಉಳಿಸಿ',
      cancel: 'ರದ್ದುಮಾಡಿ',
      success: 'ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆ!',
      days: 'ದಿನಗಳು',
      verified: 'ದೃಢೀಕರಿಸಲಾಗಿದೆ',
    },
  },
};
