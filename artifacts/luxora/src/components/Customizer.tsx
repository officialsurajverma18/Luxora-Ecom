import React, { useEffect, useRef, useReducer } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WatchViewer, WatchConfig } from './WatchViewer';

gsap.registerPlugin(ScrollTrigger);

type Action = 
  | { type: 'SET_DIAL', payload: string }
  | { type: 'SET_STRAP', payload: string }
  | { type: 'SET_CASE', payload: string };

const initialState: WatchConfig = {
  dialColor: 'Champagne',
  strapType: 'Leather',
  caseFinish: 'Polished',
};

function reducer(state: WatchConfig, action: Action): WatchConfig {
  switch (action.type) {
    case 'SET_DIAL':
      return { ...state, dialColor: action.payload };
    case 'SET_STRAP':
      return { ...state, strapType: action.payload };
    case 'SET_CASE':
      return { ...state, caseFinish: action.payload };
    default:
      return state;
  }
}

export const Customizer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        panelRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panelRef.current,
            start: 'top 80%',
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center bg-[#0D0D0D] py-20 px-8 lg:px-24">
      
      {/* Viewer Side */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh]">
        <WatchViewer config={state} />
      </div>

      {/* Controls Side */}
      <div ref={panelRef} className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-16 flex flex-col justify-center space-y-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-[0.2em] mb-4">
            Make It Yours
          </h2>
          <div className="h-px w-24 bg-[#B8860B] mb-8"></div>
        </div>

        <div className="space-y-8">
          {/* Dial */}
          <div className="space-y-4">
            <h3 className="text-sm font-sans tracking-widest text-[#B8860B] uppercase">Dial Color</h3>
            <div className="flex space-x-4">
              {['Champagne', 'Slate', 'Midnight'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => dispatch({ type: 'SET_DIAL', payload: opt })}
                  className={`px-4 py-2 text-sm font-sans uppercase tracking-wider transition-all duration-300 border ${
                    state.dialColor === opt 
                      ? 'border-[#B8860B] text-[#B8860B] bg-[#B8860B]/10' 
                      : 'border-white/20 text-white/60 hover:border-white/50 hover:text-white'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Strap */}
          <div className="space-y-4">
            <h3 className="text-sm font-sans tracking-widest text-[#B8860B] uppercase">Strap</h3>
            <div className="flex space-x-4">
              {['Leather', 'Bracelet', 'Rubber'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => dispatch({ type: 'SET_STRAP', payload: opt })}
                  className={`px-4 py-2 text-sm font-sans uppercase tracking-wider transition-all duration-300 border ${
                    state.strapType === opt 
                      ? 'border-[#B8860B] text-[#B8860B] bg-[#B8860B]/10' 
                      : 'border-white/20 text-white/60 hover:border-white/50 hover:text-white'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Case Finish */}
          <div className="space-y-4">
            <h3 className="text-sm font-sans tracking-widest text-[#B8860B] uppercase">Case Finish</h3>
            <div className="flex space-x-4">
              {['Polished', 'Brushed', 'PVD Gold'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => dispatch({ type: 'SET_CASE', payload: opt })}
                  className={`px-4 py-2 text-sm font-sans uppercase tracking-wider transition-all duration-300 border ${
                    state.caseFinish === opt 
                      ? 'border-[#B8860B] text-[#B8860B] bg-[#B8860B]/10' 
                      : 'border-white/20 text-white/60 hover:border-white/50 hover:text-white'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-[#F5F0E8] font-sans font-light tracking-wide">
            <span className="text-white/50 mr-2">Your Configuration:</span>
            {state.dialColor} dial &middot; {state.strapType} strap &middot; {state.caseFinish} case
          </p>
        </div>
      </div>
    </div>
  );
};
