import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const watchGradients = [
  'linear-gradient(160deg, #1a1a2e 0%, #16213e 40%, #0f3460 80%, #533483 100%)',
  'linear-gradient(160deg, #0a0a0a 0%, #1a1a1a 40%, #2d2d2d 80%, #1a0a00 100%)',
  'linear-gradient(160deg, #0d1117 0%, #1c2333 40%, #2d3748 80%, #1a1a2e 100%)',
  'linear-gradient(160deg, #1a2035 0%, #0d1b2a 40%, #1b2838 80%, #0a1628 100%)',
  'linear-gradient(160deg, #0d0d1a 0%, #1a0d2e 40%, #2d1b4e 80%, #1a0d3a 100%)',
  'linear-gradient(160deg, #2d1b00 0%, #3d2600 40%, #2d1b0d 80%, #4a2800 100%)',
];

const watches = [
  { id: 1, name: 'Heritage I', category: 'Heritage', price: 'CHF 12,500', accent: '#D4AF37' },
  { id: 2, name: 'Noir Edition', category: 'Limited', price: 'CHF 18,900', accent: '#B8860B' },
  { id: 3, name: 'Tourbillon S', category: 'Limited', price: 'CHF 45,000', accent: '#C9A227' },
  { id: 4, name: 'GMT Voyager', category: 'Sport', price: 'CHF 14,200', accent: '#A07820' },
  { id: 5, name: 'Perpetual Moon', category: 'Heritage', price: 'CHF 28,000', accent: '#D4AF37' },
  { id: 6, name: 'Skeleton Rose', category: 'Limited', price: 'CHF 32,500', accent: '#B8860B' },
];

const categories = ['All', 'Heritage', 'Limited', 'Sport'];

function WatchIllustration({ index, accent }: { index: number; accent: string }) {
  const bg = watchGradients[index % watchGradients.length];
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: bg }}>
      <div className="flex flex-col items-center" style={{ transform: 'scale(0.7)' }}>
        {/* Strap top */}
        <div className="rounded-t" style={{ width: 56, height: 80, background: '#2a1a10', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }} />
        {/* Case */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: 140,
            height: 140,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e0e0e0 0%, #a0a0a0 50%, #d0d0d0 100%)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.8), inset 0 2px 8px rgba(255,255,255,0.3)',
          }}
        >
          {/* Dial */}
          <div
            className="relative flex items-center justify-center rounded-full"
            style={{
              width: 118,
              height: 118,
              background: 'radial-gradient(circle, #1a1a2e 0%, #0d0d1a 100%)',
              boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            {/* Hour markers */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  width: i % 3 === 0 ? 2.5 : 1,
                  height: i % 3 === 0 ? 10 : 6,
                  background: accent,
                  left: '50%',
                  top: 5,
                  transformOrigin: `50% ${118 / 2 - 5}px`,
                  transform: `translateX(-50%) rotate(${i * 30}deg)`,
                  borderRadius: 1,
                }}
              />
            ))}
            {/* Hands */}
            <div className="absolute" style={{ width: 3, height: 38, background: accent, bottom: '50%', left: '50%', transformOrigin: 'bottom center', transform: 'translateX(-50%) rotate(120deg)', borderRadius: 2 }} />
            <div className="absolute" style={{ width: 2, height: 52, background: '#fff', bottom: '50%', left: '50%', transformOrigin: 'bottom center', transform: 'translateX(-50%) rotate(210deg)', borderRadius: 2, opacity: 0.9 }} />
            <div className="absolute" style={{ width: 8, height: 8, borderRadius: '50%', background: accent, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            <div className="absolute font-serif text-center" style={{ fontSize: 7, letterSpacing: '0.2em', color: accent, bottom: '28%', width: '100%', textAlign: 'center', opacity: 0.8 }}>LUXORA</div>
          </div>
        </div>
        {/* Strap bottom */}
        <div className="rounded-b" style={{ width: 56, height: 80, background: '#2a1a10', boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.5)' }} />
      </div>
    </div>
  );
}

export const CollectionGrid: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredWatches = filter === 'All' ? watches : watches.filter(w => w.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.watch-card');
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
          },
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [filter]);

  return (
    <div className="w-full min-h-screen bg-[#0D0D0D] py-24 px-8 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-[0.2em] mb-4">
            Selected Works
          </h2>
          <div className="h-px w-24 bg-[#B8860B]" />
        </div>
        <div className="flex space-x-6 mt-8 md:mt-0">
          {categories.map(cat => (
            <button
              key={cat}
              data-testid={`filter-${cat.toLowerCase()}`}
              onClick={() => setFilter(cat)}
              className={`text-sm font-sans tracking-widest uppercase transition-colors duration-300 ${
                filter === cat ? 'text-[#B8860B]' : 'text-white/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredWatches.map((watch, idx) => (
          <div
            key={watch.id}
            data-testid={`card-watch-${watch.id}`}
            className="watch-card group relative overflow-hidden bg-[#1A1A1A] aspect-[3/4] cursor-pointer"
          >
            <div className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-105">
              <WatchIllustration index={idx} accent={watch.accent} />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

            <div className="absolute inset-0 border border-[#B8860B] opacity-0 transition-all duration-500 group-hover:opacity-100 scale-95 group-hover:scale-100" />

            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
              <span className="text-xs font-sans tracking-[0.3em] text-[#B8860B] uppercase mb-2 block">{watch.category}</span>
              <h3 className="text-2xl font-serif text-white mb-3 tracking-wide">{watch.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-sm font-sans text-white/60 tracking-wider">From {watch.price}</span>
                <span className="text-sm font-sans text-[#B8860B] uppercase tracking-widest opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Enquire
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
