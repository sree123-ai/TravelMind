import React from 'react';

export const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#faf7f0]">
      {/* Subtle warm paper texture and parchment tint */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#b45309 1px, transparent 1px), radial-gradient(#d97706 1px, #faf7f0 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      {/* Decorative subtle travel journal sketches & postage stamps in corners */}
      <div className="absolute top-12 left-8 w-48 h-48 rounded-full border border-amber-900/10 pointer-events-none flex items-center justify-center opacity-30">
        <div className="w-40 h-40 rounded-full border border-dashed border-amber-900/15 flex items-center justify-center text-[10px] uppercase font-bold tracking-widest text-amber-950/20 rotate-[-15deg]">
          ★ TRAVELMIND-AI PASSPORT ENTRY ★
        </div>
      </div>

      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full border border-emerald-900/10 pointer-events-none opacity-25 flex items-center justify-center">
        <div className="w-56 h-56 rounded-full border border-dotted border-emerald-900/20 rotate-[25deg] flex items-center justify-center text-[11px] font-bold tracking-wider text-emerald-950/20">
          EXPLORE • DISCOVER • HERITAGE
        </div>
      </div>

      {/* Soft warm sun glow at top center */}
      <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-amber-200/30 via-orange-100/10 to-transparent blur-3xl pointer-events-none" />
    </div>
  );
};
