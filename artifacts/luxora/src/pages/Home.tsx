import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import Footer from '@/components/Footer';

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6oz0bwaHY9P3ZwCi-Twe_mGt48igZezz5yF1-qJU5YFr2tXhchktNycSdpyn8fgVNSaK2uTXLgYm948UFXxWMAUoBo5xcsRpGnzON0qcim-p6xDBfA3FH0FQXEBZA8x1LcugI53FPLjZR4xFdD7Dm_04W28G4D1dB6lkBWebTGDmBjeU8MCgNiSonFilg72ei9lA8j0iSw4Wu0EOL2v6XzAoIZ4h1pwnj0Wncaqx69Uv1hCzPPUzamSPC_rwvkw6ADBrnvFXIzHk';
const HERITAGE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9sfR0KXjs9fR9drGdIGKMRHU_p2cHsTnUfVJysywBorvCyUQg82pTZ6ysoBEAAjojDn9OKcu_GAUMpc4ww1o3pb4ig87k5HFqUcZJqQhg5eA8KQONGwEfxBqjVZe7e7qelyACOKjSVOUhSuWcwTG1m62i4_agaQV32y61fcERYPA6o-uK0O_5cG1fL8Kmcwdz7XBH9ShSmUArcrOnvURIy6vzcGIQ9A7B2dhha8fDykizqv27acr_Hvy8PUZx2Mtp7zbnPaGS3y0';
const SPORT_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW_KQwEz8I8TeWnSGImkijX6ob7MwCGMfh1tBSRsCwUVYKVkm0kPAelOptDtINlPcXLs6OTnjnEcebsfUHbo4JxEtK7Hgr0CZ37Pp38porT7xEjnvOSqCHLstmYNvoYdfuCtmttu4lKL4Ecigs-5h1eo2U-XpY59GHTKUKC-lqlHwxmqcMzzAaNhzYb4PZ9hWewiOjCcQiT2Q7jvBeM1oQhR-ppsYA4Ubobos9vOo5Pgz_h0oh8xp2g3ZudSvTXbOj3Fo0VLhV5Yg';
const LIMITED_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1M7YCvBV038okgxogCrwH8GM1W6LANPHWxvafz6I2XCEffciSiPUKPBsZ9p7qGF4cvPC4hxYH7_CIsxIsICM9X6-a0S41RIlNU6uz28PD6hRM4mNQoh5t9QmsafMYsI04d_UOOEzxw_5JMdicy7GbJIfBlBT_0NfGD5sO8iDTZUb_GF9zOOT2zOOmPZYxAsJSCFbFxJEPhktQgIGTGY57p2OdzXdwbvJ6kYPYhzaXvLfJ_6LAL6flct7VpFnsG8dwfGmN7b_QxkM';
const PROD1_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAINhWUtECoIL3jeC5imsVg-DE0FU0aAh1ZdTUR2f5YvXktRFoKKBbHG9t0V8BlmMT57q3zbXNfTSqDANoBHBhDtphGIelPpdVFdUklt0dVuww1oUT5TA3j6XNstzeI6Ces026V0dvIAdVhWiBLH0sCFTSwe2u6BH2dqLmwMdpnhDjhrreZaRoBRi5WF0nO3aQHbzeImlXS-8Z_cIlzET6JUgDhCILtbPRAvrsoVklZGnmV2c6W8QPFGHDm3umKl0PCYj_Eco420ug';
const PROD2_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYq6dblO35k5Tz-7lYkrtMGzy0pPDR2oKsW3l4iVM9R2XCOL0UkgLnRpnfYkCstUQbtG9axms1tdgXm_H7zOu___jU2DeuK4LC-tuwhiL4DVdQ9Ge5wrIKifKrcZV8ghC94KY7_rpPd3feyi3pdP0HeWldtnkTtt_IeVj38o-OB3xgK7HFkoPXcoI9oAXPFbtd6jwn144WG6mDyWbCct-pCOy-lwUDUenJy4Bi6gxeNlgf-3Z56gBQy2bYboVpJdBNMvo8lFD-f-A';
const PROD3_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO9S9Rsk7wXL7gN7rNjfcrB2Q0jHr4lmVqBxyY7nzUthm9xZKNwLK1VK_ay59oNhQA61-6St402IWPywZhg2ccrF632yuIkv8Xjk2tiRjjmyD5XdjC2uE40fx112rJLV6Tz-MxNBFPY6KmTRZ0ZIOdeRiifUj49aUorVsqRZ3x_hY4odW-qOTQOX235S0pI6WW-EqfOpY7GaTP3mIHuAg7zxkRGcAa_0yOkig53mPsD0YjfF78ciiAQl6W3Sgm8kNijjKirWx0PDI';
const PROD4_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVITO6dw42LQ1iKkDBZoYpO4KN5Cc66bP7XPHnfTclRvEH8RDPS3LmIAvoaOce8CeQf1PBQEJyZWmhWbhkOislKMG-uRjpd4diAROnLLMV3mKy_bIXw4xiKU_ZR3R03K8VZ12oyXBy1s1yKc-iQ7e5EtDPXEaZpIww4xQlb7LkfiwabDVnA9O-wLXC6QUepf_HaV0Ax7J3_61ouhrz8dV4ARLrFIDXkFMuHOVYP7y45-TxGAjfH28ntTdfMDiJFsJcYtvlZ_Ikvqk';
const CRAFT_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmO2XQet-rfypjDN8oDI5tT3VBqiHxEEljo4-OcmJe6MyCclEu7ROFzXERSKF4YL_n1RpetEQmuWvNlhl-KPzcAIZtz3qSybf9qQppzMeKDh3FMBbTmKJ-krkPJNx4wgF1uMKxdVocCNQpftjnGHDvD6PIJuuBJvx7gbyif1eyZ1fePWBIRXAYniSeHNA7IK91PfdKLbYSCtMrTZHeT_a_kvg7_y7tYkG2XvSBB_H1_zz6Zd5MUojTHNOD-urINIqjJb-e8ZS_FFA';

const newArrivals = [
  { name: 'Aurelius Chrono', sub: 'Polished Steel / Midnight Blue', price: '$4,200', img: PROD1_IMG, id: 'aurelius-chrono' },
  { name: 'Vanguard Gold', sub: '18K Rose Gold / Onyx Dial', price: '$12,800', img: PROD2_IMG, id: 'vanguard-gold' },
  { name: 'Skeleton II', sub: 'Titanium / Sapphire Glass', price: '$7,400', img: PROD3_IMG, id: 'skeleton-ii' },
  { name: 'Oceanic GMT', sub: 'Brushed Steel / Emerald Dial', price: '$5,900', img: PROD4_IMG, id: 'oceanic-gmt' },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Subtle parallax on hero
    const handleScroll = () => {
      if (heroRef.current) {
        const img = heroRef.current.querySelector('img') as HTMLImageElement;
        if (img) {
          img.style.transform = `translateY(${window.scrollY * 0.2}px)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <main style={{ paddingTop: 88 }}>
        {/* ─── HERO ─────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          style={{
            position: 'relative',
            height: 921,
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            backgroundColor: '#000',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img
              src={HERO_IMG}
              alt="Mechanical watch movement"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
            />
          </div>

          <div
            style={{
              position: 'relative',
              zIndex: 10,
              paddingLeft: 80,
              paddingRight: 80,
              maxWidth: 1440,
              margin: '0 auto',
              width: '100%',
            }}
          >
            <div style={{ maxWidth: 640 }}>
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#ffe088',
                  marginBottom: 24,
                }}
              >
                Mastery of Time
              </h2>
              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 64,
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: '#fff',
                  marginBottom: 32,
                }}
              >
                Precision in Every Moment
              </h1>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: '#e5e2e1',
                  marginBottom: 40,
                  maxWidth: 480,
                }}
              >
                Handcrafted in our Geneva atelier, each timepiece is a symphony of heritage and innovation designed for the discerning few.
              </p>
              <Link href="/collection">
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#fff',
                    color: '#000',
                    padding: '20px 48px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = '#ffe088')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = '#fff')}
                >
                  Explore Collection
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── CURATED ERAS ─────────────────────────────────────────── */}
        <section
          id="collections"
          style={{
            paddingTop: 120,
            paddingBottom: 120,
            paddingLeft: 80,
            paddingRight: 80,
            maxWidth: 1440,
            margin: '0 auto',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 32,
                fontWeight: 600,
                lineHeight: 1.3,
                color: '#1a1c1c',
                marginBottom: 16,
              }}
            >
              Curated Eras
            </h2>
            <div style={{ width: 80, height: 1, backgroundColor: '#735c00', margin: '0 auto' }} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: 32,
              height: 700,
            }}
          >
            {/* Heritage — large card */}
            <Link href="/collection">
              <div
                style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', height: '100%' }}
                className="group"
              >
                <img
                  src={HERITAGE_IMG}
                  alt="Heritage Collection"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s ease',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.22)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 48,
                    transition: 'background 0.3s',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#fff',
                      marginBottom: 8,
                    }}
                  >
                    The Archive
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 24,
                      fontWeight: 600,
                      color: '#fff',
                    }}
                  >
                    Heritage Collection
                  </h3>
                </div>
              </div>
            </Link>

            {/* Right column — Sport & Limited */}
            <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 32 }}>
              {[
                { img: SPORT_IMG, label: 'Performance', title: 'Sport Series' },
                { img: LIMITED_IMG, label: 'Exclusivity', title: 'Limited Edition' },
              ].map((card) => (
                <Link key={card.title} href="/collection">
                  <div
                    style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', height: '100%' }}
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.7s ease',
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = 'scale(1)')}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.12)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: 32,
                        transition: 'background 0.3s',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: '#fff',
                          marginBottom: 6,
                        }}
                      >
                        {card.label}
                      </span>
                      <h3
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 24,
                          fontWeight: 600,
                          color: '#fff',
                        }}
                      >
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── NEW ARRIVALS ──────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#fff', paddingTop: 120, paddingBottom: 120 }}>
          <div style={{ paddingLeft: 80, paddingRight: 80, maxWidth: 1440, margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginBottom: 64,
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 32,
                    fontWeight: 600,
                    color: '#1a1c1c',
                    marginBottom: 8,
                  }}
                >
                  New Arrivals
                </h2>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 16, color: '#444748' }}>
                  The latest expressions of our craft.
                </p>
              </div>
              <Link href="/collection">
                <span
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#1a1c1c',
                    borderBottom: '1px solid #1a1c1c',
                    paddingBottom: 4,
                    cursor: 'pointer',
                    transition: 'color 0.2s, border-color 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.target as HTMLElement;
                    el.style.color = '#735c00';
                    el.style.borderBottomColor = '#735c00';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.target as HTMLElement;
                    el.style.color = '#1a1c1c';
                    el.style.borderBottomColor = '#1a1c1c';
                  }}
                >
                  View All Arrivals
                </span>
              </Link>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0 32px',
              }}
            >
              {newArrivals.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <div style={{ cursor: 'pointer' }}>
                    <div
                      style={{
                        position: 'relative',
                        aspectRatio: '4/5',
                        overflow: 'hidden',
                        marginBottom: 24,
                      }}
                    >
                      <img
                        src={product.img}
                        alt={product.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = 'scale(1)')}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 16,
                          left: 16,
                          opacity: 0,
                          transition: 'opacity 0.3s',
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0')}
                      >
                        <button
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.9)',
                            backdropFilter: 'blur(4px)',
                            color: '#000',
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            padding: '8px 16px',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          Quick View
                        </button>
                      </div>
                    </div>
                    <h4
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 24,
                        fontWeight: 600,
                        color: '#000',
                        marginBottom: 4,
                      }}
                    >
                      {product.name}
                    </h4>
                    <p
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 16,
                        color: '#444748',
                        marginBottom: 8,
                      }}
                    >
                      {product.sub}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        color: '#735c00',
                      }}
                    >
                      {product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BRAND STORY ──────────────────────────────────────────── */}
        <section style={{ paddingTop: 120, paddingBottom: 120, overflow: 'hidden' }}>
          <div
            style={{
              paddingLeft: 80,
              paddingRight: 80,
              maxWidth: 1440,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 96,
              alignItems: 'center',
            }}
          >
            {/* Text */}
            <div>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#735c00',
                  marginBottom: 16,
                }}
              >
                The Craft
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 64,
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: '#000',
                  marginBottom: 32,
                }}
              >
                Tradition Reimagined
              </h2>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: '#444748',
                  marginBottom: 32,
                }}
              >
                For over a century, Luxora has defined the pinnacle of Swiss horology. Our master watchmakers blend age-old techniques with pioneering technology to create timepieces that are more than instruments—they are legacies.
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 48,
                  borderTop: '1px solid #c4c7c7',
                  paddingTop: 48,
                  marginBottom: 48,
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 24,
                      fontWeight: 600,
                      color: '#000',
                      marginBottom: 8,
                    }}
                  >
                    120+
                  </span>
                  <span
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#444748',
                    }}
                  >
                    Years of Heritage
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 24,
                      fontWeight: 600,
                      color: '#000',
                      marginBottom: 8,
                    }}
                  >
                    380
                  </span>
                  <span
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#444748',
                    }}
                  >
                    Hand-set Components
                  </span>
                </div>
              </div>
              <a
                href="#"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#000',
                  borderBottom: '1px solid #000',
                  paddingBottom: 4,
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.target as HTMLElement;
                  el.style.color = '#735c00';
                  el.style.borderBottomColor = '#735c00';
                }}
                onMouseLeave={(e) => {
                  const el = e.target as HTMLElement;
                  el.style.color = '#000';
                  el.style.borderBottomColor = '#000';
                }}
              >
                Discover Our Story
              </a>
            </div>

            {/* Image */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#e8e8e8',
                  zIndex: -1,
                }}
              />
              <img
                src={CRAFT_IMG}
                alt="Master watchmaker at work"
                className="whisper-shadow"
                style={{ width: '100%', height: 600, objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* ─── NEWSLETTER ───────────────────────────────────────────── */}
        <section
          style={{
            paddingTop: 120,
            paddingBottom: 120,
            backgroundColor: '#000',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <div style={{ paddingLeft: 80, paddingRight: 80, maxWidth: 672, margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 32,
                fontWeight: 600,
                color: '#fff',
                marginBottom: 24,
              }}
            >
              The Inner Circle
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                color: '#e5e2e1',
                marginBottom: 40,
              }}
            >
              Subscribe to receive exclusive access to limited edition launches and private events in our global boutiques.
            </p>
            <form
              style={{ display: 'flex', gap: 16 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.3)',
                  color: '#fff',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  padding: '16px 0',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#fff',
                  color: '#000',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '16px 40px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = '#ffe088')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = '#fff')}
              >
                Join Now
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
