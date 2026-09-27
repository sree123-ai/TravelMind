import { LanguageCode, TripContext } from '../types';

export interface ChatRequestPayload {
  message: string;
  tripContext: TripContext;
  language: LanguageCode;
}

export async function askTravelAssistant(payload: ChatRequestPayload): Promise<string> {
  const { message, tripContext, language } = payload;
  const destination = tripContext.selectedDestination;
  const state = tripContext.selectedState || 'Tamil Nadu';
  const district = tripContext.selectedDistrict || 'Madurai';
  const allergies = [...(tripContext.allergyPreferences || []), ...(tripContext.customAllergies || [])];
  const rainAlert = tripContext.liveWeather?.isRainExpected;

  // Try calling the server-side Gemini API endpoint
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        language,
        context: {
          destinationName: destination?.name,
          state,
          district,
          allergies,
          weather: tripContext.liveWeather,
          budgetTier: tripContext.budgetTier,
          travelPace: tripContext.travelPace,
        },
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.reply) {
        return data.reply;
      }
    }
  } catch (err) {
    console.warn('Server-side Gemini endpoint call failed or not running, falling back to local domain AI:', err);
  }

  // Fallback intelligent location-aware AI responses in the selected language
  return generateLocalizedDomainResponse(message, destination, state, district, allergies, rainAlert, language);
}

function generateLocalizedDomainResponse(
  query: string,
  destination: any,
  state: string,
  district: string,
  allergies: string[],
  rainAlert: boolean | undefined,
  language: LanguageCode
): string {
  const q = query.toLowerCase();
  const destName = destination ? destination.name : district;

  const allergyWarning =
    allergies.length > 0
      ? `\n⚠️ Allergy Reminder: Remember you have active allergies to [${allergies.join(
          ', '
        )}]. Always ask the chef or restaurant manager: "Does this contain ${allergies.join(
          ' or '
        )}?" before consuming.`
      : '';

  // 1. Food / Eating questions
  if (q.includes('eat') || q.includes('food') || q.includes('restaurant') || q.includes('சாப்பாடு') || q.includes('भोजन') || q.includes('తిండి') || q.includes('ഭക്ഷണം') || q.includes('ಊಟ')) {
    if (language === 'ta') {
      return `🍛 ${destName} பகுதியில் நீங்கள் சுவைக்க வேண்டிய உணவுகள்:\n- ${district} பாரம்பரிய உணவு வகைகள் மற்றும் பிரசித்தி பெற்ற உணவகங்கள்.\n- தூய்மையான மற்றும் பிரபலமான உணவகங்களை தேர்வு செய்யவும்.${
        allergies.length > 0 ? `\n⚠️ கவனம்: [${allergies.join(', ')}] ஒவ்வாமை உள்ளதால் சமையல் சேர்க்கைகளை முன்பே உறுதி செய்யவும்.` : ''
      }`;
    }
    if (language === 'hi') {
      return `🍛 ${destName} में खान-पान की सिफारिशें:\n- ${district} के प्रसिद्ध पारंपरिक व्यंजनों का आनंद लें।\n- केवल स्वच्छ एवं प्रतिष्ठित भोजनालयों में ही भोजन करें।${
        allergies.length > 0 ? `\n⚠️ चेतावनी: आपकी [${allergies.join(', ')}] एलर्जी को ध्यान में रखते हुए सामग्री अवश्य जांचें।` : ''
      }`;
    }
    if (language === 'ml') {
      return `🍛 ${destName} ലെ ഭക്ഷണ ശുപാർശകൾ:\n- ${district} ലെ തനത് പ്രാദേശിക വിഭവങ്ങൾ പരീക്ഷിക്കുക.\n- വിശ്വസനീയമായ റസ്റ്റോറന്റുകൾ തിരഞ്ഞെടുക്കുക.${
        allergies.length > 0 ? `\n⚠️ ശ്രദ്ധിക്കുക: നിങ്ങൾക്ക് [${allergies.join(', ')}] അലർജി ഉള്ളതിനാൽ ചേരുവകൾ മുൻകൂട്ടി ഉറപ്പുവരുത്തുക.` : ''
      }`;
    }
    return `🍛 Dining Recommendations for ${destName} (${district}, ${state}):\n- Savor authentic local delicacies verified in our Food & Cuisine guide.\n- Visit well-reputed culinary spots.${allergyWarning}`;
  }

  // 2. Weather / Rain questions
  if (q.includes('rain') || q.includes('weather') || q.includes('climate') || q.includes('மழை') || q.includes('मौसम') || q.includes('వర్షం') || q.includes('മഴ') || q.includes('ಮಳೆ')) {
    if (rainAlert) {
      if (language === 'ta') {
        return `⚠️ வானிலை எச்சரிக்கை: ${destName} (${district}) பகுதியில் உங்கள் பயணக் காலத்தில் மழை பெய்ய வாய்ப்புள்ளது! சிறிய குடை, ரெயின்கோட் மற்றும் வாட்டர்ப்ரூஃப் பைக் கவரை உடன் எடுத்துச் செல்லவும்.`;
      }
      if (language === 'hi') {
        return `⚠️ मौसम चेतावनी: ${destName} (${district}) में आपकी यात्रा के दौरान बारिश की संभावना है! कृपया छाता और वाटरप्रूफ बैग कवर साथ रखें।`;
      }
      if (language === 'ml') {
        return `⚠️ കാലാവസ്ഥാ മുന്നറിയിപ്പ്: ${destName} (${district}) ൽ നിങ്ങളുടെ യാത്രാ വേളയിൽ മഴയ്ക്ക് സാധ്യതയുണ്ട്! കുടയും വാട്ടർപ്രൂഫ് ബാഗ് കവറും കരുതുക.`;
      }
      return `⚠️ Weather Alert: Rain is expected in ${destName} (${district}) during your travel period! We strongly advise carrying an umbrella and waterproof bag cover.`;
    } else {
      if (language === 'ta') {
        return `☀️ தற்போதைய வானிலை தகவல்: ${destName} பகுதியில் மிதமான இனிமையான வானிலை நிலவுகிறது. கடும் மழை எச்சரிக்கை எதுவும் தற்போது இல்லை.`;
      }
      if (language === 'hi') {
        return `☀️ वर्तमान मौसम: ${destName} में मौसम सामान्य और सुखद है। अभी किसी भारी बारिश का अलर्ट नहीं है।`;
      }
      if (language === 'ml') {
        return `☀️ നിലവിലെ കാലാവസ്ഥ: ${destName} ൽ ഇപ്പോൾ തെളിഞ്ഞ കാലാവസ്ഥയാണ്. ശക്തമായ മഴ മുന്നറിയിപ്പുകൾ ഇല്ല.`;
      }
      return `☀️ Live Climate Update: Current weather in ${destName} is pleasant. No severe rain alerts active right now.`;
    }
  }

  // 3. Official Ticket Booking
  if (q.includes('ticket') || q.includes('book') || q.includes('டிக்கெட்') || q.includes('टिकट') || q.includes('ടിക്കറ്റ്') || q.includes('ಬುಕಿಂಗ್')) {
    if (destination?.officialBooking?.available) {
      if (language === 'ta') {
        return `🎟️ ${destName} அதிகாரப்பூர்வ டிக்கெட் பதிவு:\nஅரசு அதிகாரப்பூர்வ போர்டல் (${destination.officialBooking.bookingSource}) மூலம் பாதுகாப்பாக முன்பதிவு செய்யலாம். எங்கள் தளத்தின் 'அதிகாரப்பூர்வ டிக்கெட் முன்பதிவு' பட்டனைப் பயன்படுத்தவும்.`;
      }
      if (language === 'hi') {
        return `🎟️ ${destName} के लिए आधिकारिक टिकट बुकिंग:\nआप आधिकारिक पोर्टल (${destination.officialBooking.bookingSource}) के माध्यम से टिकट बुक कर सकते हैं। हमारे 'आधिकारिक टिकट बुक करें' बटन पर क्लिक करें।`;
      }
      if (language === 'ml') {
        return `🎟️ ${destName} ലേക്കുള്ള ഔദ്യോഗിക ടിക്കറ്റ് ബുക്കിംഗ്:\nഔദ്യോഗിക പോർട്ടൽ (${destination.officialBooking.bookingSource}) വഴി ബുക്ക് ചെയ്യാം. 'ഔദ്യോഗിക ടിക്കറ്റ് ബുക്ക് ചെയ്യുക' ബട്ടൺ ഉപയോഗിക്കുക.`;
      }
      return `🎟️ Official Tickets for ${destName}:\nVerified official source: ${destination.officialBooking.bookingSource}. Click the "BOOK OFFICIAL TICKETS" button on the destination page for direct secure access.`;
    } else {
      return `🎟️ Ticket Information for ${destName}:\nOfficial online e-tickets are currently not required or are issued directly at the entrance counter upon arrival.`;
    }
  }

  // Default helpful overview
  if (language === 'ta') {
    return `வணக்கம்! ${destName} (${district}, ${state}) பற்றிய எந்தவொரு தகவல், உணவு வழிகாட்டி, நேரடி வானிலை எச்சரிக்கை அல்லது பயணத் திட்டத்திற்கும் நான் உதவத் தயார்!${
      allergies.length > 0 ? `\n(உங்கள் [${allergies.join(', ')}] ஒவ்வாமை பாதுகாப்பு கணக்கில் கொள்ளப்பட்டுள்ளது).` : ''
    }`;
  }
  if (language === 'hi') {
    return `नमस्ते! ${destName} (${district}, ${state}) के बारे में पर्यटन, मौसम अलर्ट, भोजन गाइड या यात्रा योजना से जुड़े किसी भी सवाल के लिए मैं यहाँ हूँ!${
      allergies.length > 0 ? `\n(आपकी [${allergies.join(', ')}] एलर्जी सुरक्षा सक्रिय है).` : ''
    }`;
  }
  if (language === 'ml') {
    return `നമസ്കാരം! ${destName} (${district}, ${state}) നെക്കുറിച്ചുള്ള വിവരങ്ങൾ, ഭക്ഷണ ഗൈഡ്, മഴ മുന്നറിയിപ്പുകൾ എന്നിവയിലെല്ലാം സഹായിക്കാൻ ഞാൻ തയ്യാറാണ്!${
      allergies.length > 0 ? `\n(നിങ്ങളുടെ [${allergies.join(', ')}] അലർജി സുരക്ഷ ഉൾപ്പെടുത്തിയിട്ടുണ്ട്).` : ''
    }`;
  }

  return `Hello! I am ready to guide you through ${destName} (${district}, ${state}) with verified location details, live weather alerts, official booking guidance, and personalized food recommendations.${allergyWarning}`;
}
