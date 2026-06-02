import React, { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Customizer } from '@/components/Customizer';
import { CollectionGrid } from '@/components/CollectionGrid';
import { WatchViewer } from '@/components/WatchViewer';
import logoPath from "@assets/ChatGPT_Image_Jun_2,_2026,_04_57_21_PM_1780399663886.png";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const storyTextRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Load Animation
      const tl = gsap.timeline();
      
      // Split text animation effect for headline
      if (headlineRef.current) {
        const chars = headlineRef.current.innerText.split('');
        headlineRef.current.innerHTML = '';
        chars.forEach(char => {
          const span = document.createElement('span');
          span.innerText = char === ' ' ? '\u00A0' : char;
          span.style.opacity = '0';
          span.style.display = 'inline-block';
          span.style.transform = 'translateY(20px)';
          headlineRef.current?.appendChild(span);
        });

        tl.to(headlineRef.current.children, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.05,
          ease: 'power3.out',
          delay: 0.2
        })
        .to('.hero-sub', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
        .to(lineRef.current, { scaleX: 1, duration: 1, ease: 'power3.inOut' }, '-=0.5')
        .to('.hero-cta', { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }, '-=0.5');
      }

      // Navbar scroll effect — add/remove individual classes
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        onEnter: () => {
          const nav = document.querySelector('.navbar') as HTMLElement | null;
          if (nav) {
            nav.style.backgroundColor = 'rgba(13,13,13,0.92)';
            nav.style.backdropFilter = 'blur(12px)';
            nav.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
          }
        },
        onLeaveBack: () => {
          const nav = document.querySelector('.navbar') as HTMLElement | null;
          if (nav) {
            nav.style.backgroundColor = '';
            nav.style.backdropFilter = '';
            nav.style.borderBottom = '';
          }
        },
      });

      // Story Section Scroll
      if (storyRef.current && storyTextRef.current) {
        const storyLines = storyTextRef.current.querySelectorAll('.story-line');
        gsap.fromTo(storyLines, 
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: storyRef.current,
              start: 'top 70%',
            }
          }
        );
        
        gsap.fromTo('.story-line-separator',
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: storyRef.current,
              start: 'top 70%',
            }
          }
        );
      }

      // Showcase Zoom
      if (showcaseRef.current) {
        gsap.fromTo(showcaseRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: showcaseRef.current,
              start: 'top 80%',
            }
          }
        );
      }

      // Marquee
      if (marqueeRef.current) {
        gsap.to('.marquee-content', {
          xPercent: -50,
          ease: 'none',
          duration: 20,
          repeat: -1,
        });
      }

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white overflow-x-hidden selection:bg-[#B8860B] selection:text-[#0D0D0D]">
      
      {/* Navbar */}
      <nav className="navbar fixed top-0 w-full z-50 transition-all duration-300 py-6 px-8 lg:px-12 flex justify-between items-center">
        <Link href="/">
          <img src={logoPath} alt="Luxora" className="h-8 md:h-10 cursor-pointer object-contain brightness-0 invert" />
        </Link>
        <div className="hidden md:flex space-x-8 text-xs font-sans uppercase tracking-[0.15em] text-white/80">
          <a href="#collection" className="hover:text-[#B8860B] transition-colors">Collection</a>
          <a href="#craftsmanship" className="hover:text-[#B8860B] transition-colors">Craftsmanship</a>
          <a href="#customize" className="hover:text-[#B8860B] transition-colors">Customize</a>
          <a href="#contact" className="hover:text-[#B8860B] transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        {/* Background — cinematic gradient */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 60% 40%, #1a1200 0%, #0a0900 35%, #0D0D0D 70%, #000 100%)',
            }}
          />
          {/* Subtle gold light ray */}
          <div
            className="absolute"
            style={{
              top: '10%',
              right: '15%',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(184,134,11,0.18) 0%, rgba(184,134,11,0.04) 50%, transparent 75%)',
              filter: 'blur(40px)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D0D0D]/30 to-[#0D0D0D]" />
        </div>

        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <h1 ref={headlineRef} className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-[0.25em] uppercase text-white mb-6 font-light">
            Time. Elevated.
          </h1>
          
          <div ref={lineRef} className="h-[1px] bg-[#B8860B] w-32 md:w-48 mb-8 scale-x-0 origin-center"></div>
          
          <p className="hero-sub opacity-0 translate-y-4 text-lg md:text-xl font-sans font-light tracking-widest text-[#F5F0E8]/80 max-w-2xl mx-auto mb-12">
            Precision Swiss movements. Hand-finished cases. Limited to 500 pieces.
          </p>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#collection" className="hero-cta opacity-0 translate-y-4 px-8 py-4 border border-[#B8860B] text-[#B8860B] font-sans text-sm uppercase tracking-widest hover:bg-[#B8860B] hover:text-[#0D0D0D] transition-all duration-500">
              Explore Collection
            </a>
            <a href="#story" className="hero-cta opacity-0 translate-y-4 font-sans text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-white/30 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
              Our Story
            </a>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="story" ref={storyRef} className="py-32 px-8 lg:px-24 bg-[#0D0D0D] border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif text-[#F5F0E8] leading-tight font-light story-line">
              "Crafted for those who understand that perfection is not a standard — it is a minimum."
            </h2>
          </div>
          
          <div ref={storyTextRef} className="w-full lg:w-1/2 flex flex-col pt-4">
            <div className="story-line-separator h-[1px] bg-[#B8860B]/50 w-full mb-12 origin-left"></div>
            <p className="text-[#F5F0E8]/60 font-sans font-light leading-relaxed text-lg story-line mb-6">
              Born in Geneva, Luxora exists at the intersection of traditional horology and modern architectural design. Every piece is an exercise in restraint — removing the unessential until only absolute precision remains.
            </p>
            <p className="text-[#F5F0E8]/60 font-sans font-light leading-relaxed text-lg story-line">
              We do not produce watches for the masses. We forge silent confidence for the few. The weight of a Luxora is the weight of hundreds of hours of obsessive hand-finishing, condensed into millimeters of steel and gold.
            </p>
          </div>
        </div>
      </section>

      {/* 3D Showcase */}
      <section id="craftsmanship" ref={showcaseRef} className="py-24 bg-[#111111] border-b border-white/5 relative">
        <div className="absolute top-12 left-8 lg:left-24 z-10">
          <h2 className="text-2xl md:text-4xl font-serif tracking-[0.3em] uppercase text-[#B8860B]">
            The Heritage Collection
          </h2>
          <p className="mt-4 font-sans text-sm tracking-widest text-white/50 uppercase">Rotate. Inspect. Appreciate every angle.</p>
        </div>
        
        <div className="h-[70vh] w-full mt-16">
          <WatchViewer config={{ dialColor: 'Champagne', strapType: 'Leather', caseFinish: 'Polished' }} />
        </div>
      </section>

      {/* Customizer */}
      <section id="customize" className="border-b border-white/5">
        <Customizer />
      </section>

      {/* Collection Grid */}
      <section id="collection">
        <CollectionGrid />
      </section>

      {/* Marquee */}
      <section className="py-12 bg-[#B8860B] overflow-hidden flex items-center">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          <div className="marquee-content flex space-x-12 pr-12 text-[#0D0D0D] font-serif text-3xl md:text-4xl tracking-widest uppercase items-center">
            <span>HAND-ASSEMBLED</span>
            <span className="text-xl">&bull;</span>
            <span>SWISS MOVEMENT</span>
            <span className="text-xl">&bull;</span>
            <span>LIMITED EDITION</span>
            <span className="text-xl">&bull;</span>
            <span>CERTIFIED CHRONOMETER</span>
            <span className="text-xl">&bull;</span>
            <span>SAPPHIRE CRYSTAL</span>
            <span className="text-xl">&bull;</span>
            <span>5 YEAR WARRANTY</span>
            <span className="text-xl">&bull;</span>
            <span>HAND-ASSEMBLED</span>
            <span className="text-xl">&bull;</span>
            <span>SWISS MOVEMENT</span>
            <span className="text-xl">&bull;</span>
            <span>LIMITED EDITION</span>
            <span className="text-xl">&bull;</span>
            <span>CERTIFIED CHRONOMETER</span>
            <span className="text-xl">&bull;</span>
            <span>SAPPHIRE CRYSTAL</span>
            <span className="text-xl">&bull;</span>
            <span>5 YEAR WARRANTY</span>
            <span className="text-xl">&bull;</span>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-[#0D0D0D] pt-32 pb-12 px-8 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 border-b border-white/10 pb-20">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Reserve Your Piece</h2>
            <form className="space-y-8 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="NAME" 
                  className="w-full bg-transparent border-b border-white/20 pb-4 font-sans text-sm tracking-widest text-white placeholder-white/30 focus:outline-none focus:border-[#B8860B] transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-transparent border-b border-white/20 pb-4 font-sans text-sm tracking-widest text-white placeholder-white/30 focus:outline-none focus:border-[#B8860B] transition-colors"
                />
              </div>
              <button className="px-8 py-4 bg-white text-[#0D0D0D] font-sans text-sm uppercase tracking-widest hover:bg-[#B8860B] transition-colors duration-300 w-full md:w-auto">
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right">
            <img src={logoPath} alt="Luxora" className="h-10 mb-6 brightness-0 invert opacity-80" />
            <p className="font-serif text-xl text-white/70 tracking-widest mb-12 uppercase">Time. Elevated.</p>
            
            <div className="flex space-x-8 font-sans text-xs tracking-[0.2em] text-white/50 uppercase">
              <a href="#" className="hover:text-[#B8860B] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#B8860B] transition-colors">Journal</a>
              <a href="#" className="hover:text-[#B8860B] transition-colors">Boutiques</a>
            </div>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-sans tracking-widest text-white/30 uppercase">
          <p>&copy; 2026 Luxora SA, Geneva &middot; All Rights Reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
