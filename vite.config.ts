import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

function apiServerPlugin(): Plugin {
  return {
    name: 'api-server-plugin',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res, next) => {
        if (req.method !== 'POST') {
          return next();
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const { message, language, context } = data;

            const apiKey = process.env.GEMINI_API_KEY;
            if (!apiKey) {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  reply: null,
                  warning: 'GEMINI_API_KEY not configured on server',
                })
              );
              return;
            }

            const { GoogleGenAI } = await import('@google/genai');
            const ai = new GoogleGenAI({ apiKey });

            const targetLangName =
              language === 'ta'
                ? 'Tamil'
                : language === 'hi'
                ? 'Hindi'
                : language === 'te'
                ? 'Telugu'
                : language === 'ml'
                ? 'Malayalam'
                : language === 'kn'
                ? 'Kannada'
                : 'English';

            const systemInstruction = `You are TravelMind AI, a friendly, personalized tourism planner and local guide for India.
Current Destination: ${context?.destinationName || 'N/A'}, District: ${context?.district || 'N/A'}, State: ${context?.state || 'N/A'}.
Active Allergies to avoid: ${context?.allergies?.join(', ') || 'None'}.
Weather condition: ${context?.weather?.weatherDescription || 'Normal'}, Rain expected: ${context?.weather?.isRainExpected ? 'YES' : 'NO'}.
Response Language: You MUST reply directly in ${targetLangName}.
Be concise (around 80-120 words), warm, accurate to the exact district, and alert the user if foods in this district commonly contain their allergens.`;

            const response = await ai.models.generateContent({
              model: 'gemini-3.8-flash',
              contents: message,
              config: {
                systemInstruction,
              },
            });

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ reply: response.text }));
          } catch (err: any) {
            console.error('Server-side Gemini API execution error:', err);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ reply: null, error: err.message }));
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), apiServerPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
