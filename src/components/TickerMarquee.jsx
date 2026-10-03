import React from 'react';

export default function TickerMarquee() {
  const items = [
    "CCTV CAMERA INSTALLATION",
    "OWN BRAND SONY VISION",
    "MAKE IN INDIA CERTIFIED",
    "4MP IP DOME & BULLET",
    "5MP 36X PTZ SPEED DOMES",
    "SOLAR 4G WIRELESS SURVEILLANCE",
    "ACCESS CONTROL & SMART LOCKS",
    "TIME ATTENDANCE TERMINALS",
    "INTERCOM & VIDEO DOOR PHONES",
    "AUTOMATED BOOM BARRIERS",
    "CENTRALIZED CONTROL ROOMS",
    "JAIPUR & ALL RAJASTHAN"
  ];

  return (
    <div className="bg-slate-900 text-white py-3 overflow-hidden border-y border-slate-800 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-4 mx-4 text-xs sm:text-sm font-extrabold tracking-wider text-slate-200">
            <span>{item}</span>
            <span className="text-amber-400 font-normal">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
