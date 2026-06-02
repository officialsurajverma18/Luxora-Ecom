import { useState } from 'react';
import { Link, useParams } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MAIN_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCStQPNI2t5Epvsk3aciWVm4zO0RbI-qTWQSNLFLpACHoO-CFJhw_H10uxzYhWtNKniYCW1Sdzhs2i3_HqzEuI4n5rw35n0guNlzGWndmHEQcwN_HX0P6hl0dXc05WSupiVa4Q8SMIbwq3vcAcHgamaTE9QdS8PoPdsveedmJi3zc0JbLzcvCpwv3Qsw_VBdCsRpwJPqlkHfDUmngW3n5GlKqb7BAgmjK2R26OfcJxeR-bYH0YJvY6uSwCwBh53kxKq1jHao2S9rss';
const MOVEMENT_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAOYPDfMfiUeU8l6rHOMcdnaIChAGrM-NfDzebx5cIiXtNX4hHmDRJFDfjWxYuToMky8fPiucosYB0FlirWIGdIIwBNbZLcSc4cDM1L7JkBs9UlpH-PpQnBFzeQDS2Ez3VA7rtfMC4Xsa2PW63WnPx1HwaNnlLadKFJlcVtuQ9mQvMa20ckAQQ5pPPGedR9szgnofZl8UAqosqDeV7mH7QT5DE25DP1UQloPhF4yB-iOK-1JWcBMC0_XrjFaLn28bULeY9Tvsdrhg';
const OCEAN_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCofKJWGobAo58zh0JNyPURZXBrELncjLzYv613mIM60B4I0hpJtQEoLfWBmoVFgLZLGxfij1ngzwmfAvaNUUubtjp1ta9DsOnxiuBiyH-o03kikGC6yC7c1O_vM3dFiDXf5yezwPQv6glaNkBeisQPQSSiN9ImPVRPQzhgseROuuN2JaRCKV6OusDsSpqdfCW00Kymcc0ia0XF5hib8aJPCFMsH4H8_jQzvKm6WYD7Arwg_e5xXzPm1AVoets2rMZm6abrLQrNcSo';

const RELATED = [
  {
    id: 'lunar-gmt',
    name: 'Lunar GMT',
    series: 'Travel Series',
    price: '$9,800',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9IDGQqDPMoce8sdNweOM6lOooAIh_xyxylTMa4kdkUC-sPchwYjQ8lVI4rtVwg169_OOH-WmJZqCZKYf97oEhuA8nQRlM3Uh3GJnO3NKQz8B1wYCjHxBHNDbxAQzrwJmb-PH2J5UlvxefF5gtCZGVeC6eGUGdhswoMc4lVs9dlMDseIpEKvSgkwdKaUOXwJ2KztfKxtyOlNLFFDNkxwLZ6N0m_mltwG-U6dRka79fZuykVryZ-vx3EVtht4thrtyIImnVDVANL2M',
  },
  {
    id: 'chronos-heritage',
    name: 'Chronos Heritage',
    series: 'Racing Series',
    price: '$14,200',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhiExUmopF2O2u0j9GDbdJMuN_QVy7305iQDBtIxvmcl6-yCiVl4fd1WHipqxM4x6jk0sCBOOGGZaqJre2aIHkOJBkTD9IV-k6g2vxQv3pvT9NIquqtHqyeSEUxVztBCRLZE7jbgARizA_tZ4we9UkPNK_Avb1p6wKXs1fkvT_kemvqG8V8-wKDicJx3AMhfsL9oyhPOTJyqfO7ITe5m7MCfVqXRHOeS3GZgi4bq9OVX5ynTMLZlaWNmfjJFPL7WhB0r9i6npBLvI',
  },
  {
    id: 'atlas-reserve',
    name: 'Atlas Reserve',
    series: 'Expedition Series',
    price: '$11,500',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC21D1hk6QEF9LdqqRDgNyXYuGZ02ZLQsqoBsvnVX6swMKUKNv6e2EReWKmc88tDPrXcD02VIhheeYC-CL9eZfV53OgBKTQFxqLv1_0R3_LhBfvMQ_by_NhBPACI1gRmUdwqfi-izWu6iKCe8ZMHn_7JjJUxGXE6hgGO6DQcvEzIoeWnnyphzoGpee9yMSQX1RfzTuGFupBbrbqlqgwjsQ-R28SJ8TbU7VzCsej_nu19oE15fAeYppTjW0x7bYMF-HL_KdNvTOeU3k',
  },
];

export default function ProductDetail() {
  const params = useParams<{ id: string }>();
  const [hoveredRelated, setHoveredRelated] = useState<string | null>(null);
  const [movementHovered, setMovementHovered] = useState(false);

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Navbar activeLink="collections" />

      <main style={{ paddingTop: 80 }}>
        {/* ─── PDP HERO ────────────────────────────────────────────── */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '7fr 5fr',
            minHeight: 921,
          }}
        >
          {/* Image Panel */}
          <div
            style={{
              backgroundColor: '#F4F4F4',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 48,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 40,
                left: 80,
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(68,71,72,0.6)',
              }}
            >
              <Link href="/collection">
                <span style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                  Collection
                </span>
              </Link>
              {' / '}Oceanic Series
            </div>
            <img
              src={MAIN_IMG}
              alt="Oceanic Deep 42"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                maxHeight: 700,
                filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.2))',
              }}
            />
          </div>

          {/* Info Panel */}
          <div
            style={{
              padding: '80px 64px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ maxWidth: 400 }}>
              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 32,
                  fontWeight: 600,
                  color: '#000',
                  marginBottom: 8,
                }}
              >
                Oceanic Deep 42
              </h1>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#735c00',
                  marginBottom: 32,
                }}
              >
                The Professional Mariner's Standard
              </p>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 24,
                  fontWeight: 600,
                  color: '#000',
                  marginBottom: 40,
                }}
              >
                $12,400
              </div>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: '#444748',
                  marginBottom: 48,
                }}
              >
                Engineering meets elegance. The Oceanic Deep 42 is a testament to Luxora's commitment to maritime exploration, blending high-grade 316L steel with our signature ceramic bezel technology.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <button
                  style={{
                    width: '100%',
                    backgroundColor: '#000',
                    color: '#fff',
                    padding: '20px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = '#444748')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = '#000')}
                >
                  Add to Bag
                </button>
                <button
                  style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    color: '#000',
                    padding: '20px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(116,120,120,0.3)',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = '#000')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(116,120,120,0.3)')}
                >
                  Book a Private Viewing
                </button>
              </div>

              {/* Trust badges */}
              <div
                style={{
                  marginTop: 48,
                  paddingTop: 32,
                  borderTop: '1px solid rgba(116,120,120,0.1)',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 24,
                }}
              >
                {[
                  { icon: 'verified', text: 'Lifetime Warranty' },
                  { icon: 'public', text: 'Global Shipping' },
                ].map((badge) => (
                  <div key={badge.icon} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span
                      className="material-symbols-outlined"
                      style={{ color: '#735c00', fontSize: 20 }}
                    >
                      {badge.icon}
                    </span>
                    <span
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#444748',
                      }}
                    >
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SPECS ───────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: '#fff',
            paddingTop: 120,
            paddingBottom: 120,
            paddingLeft: 80,
            paddingRight: 80,
          }}
        >
          <div style={{ maxWidth: 1440, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 32,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#000',
                  marginBottom: 16,
                }}
              >
                Horological Specifications
              </h2>
              <div style={{ width: 80, height: 1, backgroundColor: '#735c00', margin: '0 auto' }} />
            </div>

            {/* 3 spec cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
              {[
                {
                  icon: 'settings_suggest',
                  label: 'Movement',
                  title: 'Calibre LX-102',
                  body: 'A COSC-certified automatic movement featuring a Glucydur balance wheel and Nivaflex hairspring for extreme precision.',
                  dark: false,
                },
                {
                  icon: 'water_drop',
                  label: 'Resistance',
                  title: '300 Meters',
                  body: 'Triplock triple waterproofness system with a screw-down crown and helium escape valve for saturation diving.',
                  dark: true,
                },
                {
                  icon: 'architecture',
                  label: 'Construction',
                  title: '42mm Brushed Steel',
                  body: 'Hand-finished 316L grade stainless steel case paired with a unidirectional rotatable ceramic bezel.',
                  dark: false,
                },
              ].map((spec) => (
                <div
                  key={spec.label}
                  style={{
                    backgroundColor: spec.dark ? '#000' : '#fff',
                    color: spec.dark ? '#fff' : '#000',
                    padding: 40,
                    border: spec.dark ? 'none' : '1px solid rgba(116,120,120,0.1)',
                    transition: spec.dark
                      ? 'transform 0.5s'
                      : 'box-shadow 0.5s',
                  }}
                  onMouseEnter={(e) => {
                    if (spec.dark) (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
                    else (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    if (spec.dark) (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                    else (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: '#e9c349', fontSize: 36, marginBottom: 24, display: 'block' }}
                  >
                    {spec.icon}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: spec.dark ? 'rgba(255,255,255,0.6)' : '#000',
                      marginBottom: 16,
                    }}
                  >
                    {spec.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 24,
                      fontWeight: 600,
                      color: spec.dark ? '#fff' : '#000',
                      marginBottom: 16,
                    }}
                  >
                    {spec.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: spec.dark ? 'rgba(255,255,255,0.7)' : '#444748',
                    }}
                  >
                    {spec.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Secondary spec row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 32,
                marginTop: 32,
              }}
            >
              {[
                { label: 'Dial', value: 'Midnight Blue Sunray' },
                { label: 'Power Reserve', value: '72 Hours' },
              ].map((spec) => (
                <div
                  key={spec.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 32,
                    borderBottom: '1px solid rgba(116,120,120,0.2)',
                  }}
                >
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
                    {spec.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 18,
                      color: '#000',
                    }}
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EXPERIENCE THE MOVEMENT ─────────────────────────────── */}
        <section style={{ paddingTop: 120, paddingBottom: 120, overflow: 'hidden' }}>
          <div
            style={{
              maxWidth: 1440,
              margin: '0 auto',
              paddingLeft: 80,
              paddingRight: 80,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              alignItems: 'center',
              gap: 80,
            }}
          >
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: -40,
                  left: -40,
                  width: 160,
                  height: 160,
                  backgroundColor: 'rgba(115,92,0,0.05)',
                  borderRadius: '50%',
                  filter: 'blur(48px)',
                }}
              />
              <img
                src={MOVEMENT_IMG}
                alt="Watch movement"
                style={{
                  width: '100%',
                  filter: movementHovered ? 'grayscale(0%)' : 'grayscale(100%)',
                  transition: 'filter 1s ease',
                }}
                onMouseEnter={() => setMovementHovered(true)}
                onMouseLeave={() => setMovementHovered(false)}
              />
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 32,
                  fontWeight: 600,
                  color: '#000',
                  marginBottom: 32,
                }}
              >
                Experience the Movement
              </h2>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: '#444748',
                  marginBottom: 24,
                }}
              >
                Behind the sapphire crystal caseback lies the heart of the Oceanic Deep. The Calibre LX-102 is a marvel of miniaturization, assembled by hand over the course of eight weeks in our Geneva atelier.
              </p>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: '#444748',
                  marginBottom: 40,
                }}
              >
                Every bridge is chamfered by hand, and every screw is polished to a mirror shine. This isn't just a timekeeping device; it is a mechanical sculpture designed to outlast its wearer.
              </p>
              <a
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 16,
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#000',
                  textDecoration: 'none',
                }}
              >
                Our Craftsmanship Story
                <span
                  className="material-symbols-outlined"
                  style={{ transition: 'transform 0.3s' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = 'translateX(8px)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = 'translateX(0)')}
                >
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── INSPIRATION ─────────────────────────────────────────── */}
        <section
          style={{
            position: 'relative',
            height: 819,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, opacity: 0.4 }}>
            <img
              src={OCEAN_IMG}
              alt="Deep ocean"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              textAlign: 'center',
              maxWidth: 768,
              padding: '0 20px',
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 64,
                fontWeight: 700,
                fontStyle: 'italic',
                lineHeight: 1.1,
                color: '#fff',
                marginBottom: 32,
              }}
            >
              Forged in the Abyss
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 18,
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.8)',
                fontStyle: 'italic',
                marginBottom: 32,
              }}
            >
              "The sea, once it casts its spell, holds one in its net of wonder forever."
            </p>
            <div
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#fff',
              }}
            >
              The Oceanic Philosophy
            </div>
          </div>
        </section>

        {/* ─── RELATED TIMEPIECES ───────────────────────────────────── */}
        <section
          style={{
            paddingTop: 120,
            paddingBottom: 120,
            paddingLeft: 80,
            paddingRight: 80,
            backgroundColor: '#f9f9f9',
          }}
        >
          <div style={{ maxWidth: 1440, margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginBottom: 48,
              }}
            >
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 32,
                  fontWeight: 600,
                  color: '#000',
                }}
              >
                You May Also Like
              </h2>
              <Link href="/collection">
                <span
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#000',
                    borderBottom: '1px solid #000',
                    paddingBottom: 4,
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                >
                  View Collection
                </span>
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
              {RELATED.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <div
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setHoveredRelated(product.id)}
                    onMouseLeave={() => setHoveredRelated(null)}
                  >
                    <div
                      style={{
                        backgroundColor: '#f3f3f4',
                        marginBottom: 24,
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        src={product.img}
                        alt={product.name}
                        style={{
                          width: '100%',
                          height: 400,
                          objectFit: 'cover',
                          transition: 'transform 0.7s ease',
                          transform: hoveredRelated === product.id ? 'scale(1.05)' : 'scale(1)',
                        }}
                      />
                    </div>
                    <h4
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 18,
                        fontWeight: 600,
                        color: '#000',
                        marginBottom: 8,
                      }}
                    >
                      {product.name}
                    </h4>
                    <p
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#444748',
                        marginBottom: 16,
                      }}
                    >
                      {product.series}
                    </p>
                    <div
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 16,
                        fontWeight: 700,
                        color: '#1a1c1c',
                      }}
                    >
                      {product.price}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer dark={true} />
    </div>
  );
}
