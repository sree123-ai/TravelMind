import { LiveWeatherData, WeatherAlert } from '../types';

export async function fetchLiveWeather(
  lat: number,
  lng: number,
  destinationName: string,
  districtName: string
): Promise<LiveWeatherData> {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat.toFixed(4)}&longitude=${lng.toFixed(4)}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=precipitation_probability,weather_code&forecast_days=3&timezone=auto`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Weather API error status: ${res.status}`);
    }

    const data = await res.json();
    const current = data.current || {};
    const hourly = data.hourly || {};

    const temp = Math.round(current.temperature_2m ?? 28);
    const feelsLike = Math.round(current.apparent_temperature ?? temp);
    const humidity = Math.round(current.relative_humidity_2m ?? 60);
    const windSpeed = Math.round(current.wind_speed_10m ?? 12);
    const weatherCode = current.weather_code ?? 0;
    const currentPrecip = current.precipitation ?? 0;

    // Check hourly forecast for next 24 hours precipitation probability
    const next24Probabilities: number[] = Array.isArray(hourly.precipitation_probability)
      ? hourly.precipitation_probability.slice(0, 24)
      : [];
    const maxProb = next24Probabilities.length > 0 ? Math.max(...next24Probabilities) : 0;

    // Weather code conditions
    // 51, 53, 55 = Drizzle; 61, 63, 65 = Rain; 80, 81, 82 = Showers; 95, 96, 99 = Thunderstorm
    const isRainingNow = currentPrecip > 0.1 || [51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weatherCode);
    const isThunderstorm = [95, 96, 99].includes(weatherCode);
    const rainExpected = isRainingNow || maxProb >= 35 || isThunderstorm;

    const alerts: WeatherAlert[] = [];

    if (rainExpected) {
      alerts.push({
        id: 'alert-rain',
        type: 'rain',
        title: 'Rain Expected Alert',
        message: `Rain is expected in ${districtName} (${destinationName}) during your travel period.`,
        severity: 'warning',
        rainProbability: Math.max(maxProb, isRainingNow ? 85 : 40),
        expectedTiming: isRainingNow ? 'Currently active' : 'Next 24–48 hours',
        recommendation: 'Consider carrying rain protection (compact umbrella, waterproof bag cover, and quick-dry shoes).',
      });
    }

    if (isThunderstorm) {
      alerts.push({
        id: 'alert-thunderstorm',
        type: 'storm',
        title: 'Thunderstorm Advisory',
        message: `Thunderstorm activity detected in ${districtName}. Avoid open hilltop areas during peak lighting.`,
        severity: 'alert',
        recommendation: 'Seek indoor shelter during sudden cloudbursts.',
      });
    }

    if (temp >= 36) {
      alerts.push({
        id: 'alert-heat',
        type: 'heat',
        title: 'High Temperature Alert',
        message: `High ambient temperature (${temp}°C) in ${districtName}.`,
        severity: 'warning',
        recommendation: 'Stay hydrated with electrolyte water, wear wide-brim hats, and use high SPF sunscreen.',
      });
    } else if (temp <= 14) {
      alerts.push({
        id: 'alert-cold',
        type: 'cold',
        title: 'Cold Weather Alert',
        message: `Chilly mountain temperatures (${temp}°C) in ${districtName}.`,
        severity: 'info',
        recommendation: 'Pack thermal innerwear, fleece jacket, and warm gloves for morning and evening tours.',
      });
    }

    if (windSpeed >= 32) {
      alerts.push({
        id: 'alert-wind',
        type: 'wind',
        title: 'Strong Winds Advisory',
        message: `Elevated wind speeds (${windSpeed} km/h) recorded near open viewpoints or coast.`,
        severity: 'info',
        recommendation: 'Secure light personal items and headgear near cliff viewpoints and beaches.',
      });
    }

    // Weather description mapping
    let weatherDescription = 'Clear and Pleasant';
    if (isThunderstorm) weatherDescription = 'Thunderstorm / Stormy';
    else if (isRainingNow) weatherDescription = 'Moderate to Heavy Rain';
    else if (rainExpected) weatherDescription = 'Scattered Clouds with Rain Forecast';
    else if ([1, 2, 3].includes(weatherCode)) weatherDescription = 'Partly Cloudy';
    else if ([45, 48].includes(weatherCode)) weatherDescription = 'Misty / Foggy';

    return {
      temperature: temp,
      apparentTemperature: feelsLike,
      humidity,
      windSpeed,
      weatherCode,
      weatherDescription,
      isRainExpected: rainExpected,
      rainProbability: maxProb,
      alerts,
      fetchedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isLive: true,
    };
  } catch (err) {
    console.warn('Live weather service fetch failed or offline:', err);
    return {
      temperature: 28,
      apparentTemperature: 29,
      humidity: 55,
      windSpeed: 10,
      weatherCode: 0,
      weatherDescription: 'Seasonal Climate Norms (Live Weather Alerts Unavailable)',
      isRainExpected: false,
      rainProbability: 0,
      alerts: [],
      fetchedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isLive: false,
    };
  }
}
