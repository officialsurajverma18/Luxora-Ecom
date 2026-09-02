import { useState } from 'react';
import { Link, useParams } from 'wouter';
import Footer from '@/components/Footer';
import { useCart } from '@/context/cart-context';

const MOVEMENT_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDAOYPDfMfiUeU8l6rHOMcdnaIChAGrM-NfDzebx5cIiXtNX4hHmDRJFDfjWxYuToMky8fPiucosYB0FlirWIGdIIwBNbZLcSc4cDM1L7JkBs9UlpH-PpQnBFzeQDS2Ez3VA7rtfMC4Xsa2PW63WnPx1HwaNnlLadKFJlcVtuQ9mQvMa20ckAQQ5pPPGedR9szgnofZl8UAqosqDeV7mH7QT5DE25DP1UQloPhF4yB-iOK-1JWcBMC0_XrjFaLn28bULeY9Tvsdrhg';
const OCEAN_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCofKJWGobAo58zh0JNyPURZXBrELncjLzYv613mIM60B4I0hpJtQEoLfWBmoVFgLZLGxfij1ngzwmfAvaNUUubtjp1ta9DsOnxiuBiyH-o03kikGC6yC7c1O_vM3dFiDXf5yezwPQv6glaNkBeisQPQSSiN9ImPVRPQzhgseROuuN2JaRCKV6OusDsSpqdfCW00Kymcc0ia0XF5hib8aJPCFMsH4H8_jQzvKm6WYD7Arwg_e5xXzPm1AVoets2rMZm6abrLQrNcSo';

type ProductData = {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  description: string;
  accent: string;
  mainImg: string;
  movementLabel: string;
  movementTitle: string;
  movementBody: string;
  resistanceLabel: string;
  resistanceTitle: string;
  resistanceBody: string;
  constructionLabel: string;
  constructionTitle: string;
  constructionBody: string;
  dial: string;
  reserve: string;
};

const PRODUCTS: Record<string, ProductData> = {
  'oceanic-deep-42': {
    id: 'oceanic-deep-42',
    name: 'Oceanic Deep 42',
    subtitle: "The Professional Mariner's Standard",
    price: '$12,400',
    description:
      "Engineering meets elegance. The Oceanic Deep 42 is a testament to Luxora's commitment to maritime exploration, blending high-grade 316L steel with our signature ceramic bezel technology.",
    accent: '#735c00',
    mainImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCStQPNI2t5Epvsk3aciWVm4zO0RbI-qTWQSNLFLpACHoO-CFJhw_H10uxzYhWtNKniYCW1Sdzhs2i3_HqzEuI4n5rw35n0guNlzGWndmHEQcwN_HX0P6hl0dXc05WSupiVa4Q8SMIbwq3vcAcHgamaTE9QdS8PoPdsveedmJi3zc0JbLzcvCpwv3Qsw_VBdCsRpwJPqlkHfDUmngW3n5GlKqb7BAgmjK2R26OfcJxeR-bYH0YJvY6uSwCwBh53kxKq1jHao2S9rss',
    movementLabel: 'Movement',
    movementTitle: 'Calibre LX-102',
    movementBody:
      'A COSC-certified automatic movement with a Glucydur balance wheel and Nivaflex hairspring for extreme precision.',
    resistanceLabel: 'Resistance',
    resistanceTitle: '300 Meters',
    resistanceBody:
      'Triplock triple waterproofness with a screw-down crown and helium escape valve for saturation diving.',
    constructionLabel: 'Construction',
    constructionTitle: '42mm Brushed Steel',
    constructionBody:
      'Hand-finished 316L stainless steel paired with a unidirectional ceramic bezel.',
    dial: 'Midnight Blue Sunray',
    reserve: '72 Hours',
  },
  'elysium-gold': {
    id: 'elysium-gold',
    name: 'Elysium Gold',
    subtitle: 'Heritage in Warm Rose Gold',
    price: '$28,900',
    description:
      'A refined statement piece shaped by hand in 18K rose gold, designed for collectors who want warmth, weight, and quiet authority.',
    accent: '#a87b2e',
    mainImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ6gOeBlk7Z7rEvNDL0-Ak2ugZl6D4BD16mWVYksx5bDfVq5nBZL_dCLBNDrJiLNtqNn71NPPBt2AYUj2WjDgliZ75BTiPPc8Cz72wRrkE-YGI4WkUTNxgwS2i6XXgdflNLwoyg0mAEvaagBAbIuMuvGeApopXI6IcKpH7SYn89OeCxHHGk2-oxaRzTDqLy7Dd10DopiMRgfvXLMRyo6N9cKHh7X1MKQTwP53tun4FmxrPwOcekloT1eDjqmmKBDOH4YA6E6HeEvI',
    movementLabel: 'Movement',
    movementTitle: 'Manual Wind Calibre',
    movementBody:
      'Manual wind calibre with a long power reserve and softly decorated bridge architecture.',
    resistanceLabel: 'Resistance',
    resistanceTitle: 'Sapphire Display',
    resistanceBody:
      'Balanced everyday wear construction with a sapphire crystal front and back.',
    constructionLabel: 'Construction',
    constructionTitle: '18K Rose Gold',
    constructionBody:
      'Rose gold case with an alligator leather strap and hand-engraved dial.',
    dial: 'Warm Champagne',
    reserve: '60 Hours',
  },
  'chronos-titanium': {
    id: 'chronos-titanium',
    name: 'Chronos Titanium',
    subtitle: 'Brushed Titanium Precision',
    price: '$15,200',
    description:
      'Ultra-light and sharply modern, Chronos Titanium is built for movement, balance, and everyday versatility.',
    accent: '#a8b6c9',
    mainImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Qad3-8DQO4njxfZnkdcU0Zym7IIKuOuLgSKyKs_KduNl1Uwyp1wLV0AWOV9qsdt2EYGDaDQm47vvK9YsIhUXe6ul3GlX800u3UpAU6ngoF0YNv9x-lt0GHmOnAYWAxCRrl9_CTaRRiOLsdItlqwgKFccVDiQN_igySQ7mIz7DZQ5y0YtqvuntkR904zQsk7Ul06n29c9iTV2RhipcrGuEtW5OH2L_PqgHVupfQv2q2anuS5zYUYZ5iQBiQKN602lWkakFBfqDA0',
    movementLabel: 'Movement',
    movementTitle: 'Skeletonized Automatic',
    movementBody:
      'Skeletonized automatic movement with a focus on weight reduction and mechanical clarity.',
    resistanceLabel: 'Resistance',
    resistanceTitle: 'Daily Wear',
    resistanceBody:
      'Engineered for daily wear with anti-reflective sapphire and shock-resistant architecture.',
    constructionLabel: 'Construction',
    constructionTitle: 'Grade 5 Titanium',
    constructionBody:
      'Grade 5 titanium case, ultra-light strap integration, and hand-finished surfaces.',
    dial: 'Graphite Skeleton',
    reserve: '68 Hours',
  },
  'admiral-navy': {
    id: 'admiral-navy',
    name: 'Admiral Navy',
    subtitle: 'Steel & Navy Enamel',
    price: '$9,800',
    description:
      'A timeless chronograph with a rich navy palette and a confident steel profile built for the coast and the city alike.',
    accent: '#27507b',
    mainImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPrPB58MQhnCqR37m0xqJWHHWpbk4CT-DFo5oVzMphtCgYLyfwi1IDS_mrEUFCiShkS1NgSf_kx8HRe_ag9chwZ6IKl5ODOYxFpVG0wHgSpiRpFu0MnfZ3GJAAXpKiF9CENfEXYIKYGfGtlgEvK9-7oDnbBI5Q8f0iAVaWKHvPiZRjDoBYp-ifh11Xat3YYdhPwnxRNFl-c_QT-3HX7g5GwulpYYIIaQtSBxqIsBZ_GlPQaeRJR2rCc4nLQQKte_RxLOFspNrNpP0',
    movementLabel: 'Movement',
    movementTitle: 'Automatic Chronograph',
    movementBody:
      'Automatic chronograph architecture tuned for precision and quick readability.',
    resistanceLabel: 'Resistance',
    resistanceTitle: 'Ceramic Bezel',
    resistanceBody:
      'Ceramic bezel and robust steel case designed for dependable all-weather use.',
    constructionLabel: 'Construction',
    constructionTitle: 'Steel Case',
    constructionBody:
      'Steel case with a sunray navy dial and interchangeable bracelet system.',
    dial: 'Sunray Navy',
    reserve: '48 Hours',
  },
  'grand-complication': {
    id: 'grand-complication',
    name: 'Grand Complication',
    subtitle: 'White Gold Skeleton',
    price: '$145,000',
    description:
      'The apex of the collection, Grand Complication combines ceremonial presence with a mechanically complex silhouette.',
    accent: '#d6c08a',
    mainImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDLihR_ATvfx9ndTGgVLFMCT70bUaclUsH3l7BS4NCeMEggyGSA0A0o5XXNC1duXdJcRjtNSLt2HYxtiZGALUBoIszl-kIixFxrxSGV95XZrpQDKXBuS2LQHiGnO0ARnTv73YJWCXj6dxA-mfo5Qkr4Il5Q6ztYqgVeXbv8vlSzSb0Qm_JV0ZomGJgRcb4Jc-qvPGZl1GSI63QBrWRp6uLDA3WBB1MmLvyUvOkYa-hLlbTu2UEaJ8xnxW-wWbi9wi8HGOXn69eRDws',
    movementLabel: 'Movement',
    movementTitle: 'Perpetual Calendar',
    movementBody:
      'Perpetual calendar architecture with moon phase precision and Geneva Seal finishing.',
    resistanceLabel: 'Resistance',
    resistanceTitle: 'Luxury Sealing',
    resistanceBody:
      'Luxury-first construction with sapphire protection and meticulous internal sealing.',
    constructionLabel: 'Construction',
    constructionTitle: 'White Gold Skeleton',
    constructionBody:
      'White gold skeleton case with hand-engraved bridges and artisanal finishing.',
    dial: 'Ivory Skeleton',
    reserve: '96 Hours',
  },
  'zenith-minimalist': {
    id: 'zenith-minimalist',
    name: 'Zenith Minimalist',
    subtitle: 'Platinum 950',
    price: '$32,000',
    description:
      'Clean lines, restrained proportions, and rare platinum presence define this understated expression of the series.',
    accent: '#c8c6c5',
    mainImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQohKv5IZrvUmVvywaNhASsXstfPnfYs26p7HowVcVTjekS8tPQHxW2LJCIR2ewQyTRrnXl7CTceAouPIHBg5HbtlLztnblAEEfI2KntjsRHDNazCxS04FA0obKWBjpet3qnDngyGjXj6iKbI7bHe8i3dH865M14ZJWNh27csG_Ub_Ge14AmRIgjDzVZiZhyeK405LzzAPmeyRceviFVXM_oj4xnsTcJgPxzJvM7VBI-uv__HsleTg-mvIM_MOowQVBzi4mqwt2hQ',
    movementLabel: 'Movement',
    movementTitle: 'Ultra-thin Calibre',
    movementBody:
      'Ultra-thin automatic calibre with hand-finished bridges and minimal mass.',
    resistanceLabel: 'Resistance',
    resistanceTitle: 'Long-term Wear',
    resistanceBody:
      'Platinum case engineered for long-term durability with discreet luxury.',
    constructionLabel: 'Construction',
    constructionTitle: 'Platinum 950',
    constructionBody:
      'Platinum 950 case with polished surfaces and hand-finished detailing.',
    dial: 'Pale Silver',
    reserve: '74 Hours',
  },
};

export default function ProductDetail() {
  const params = useParams<{ id: string }>();
  const { addItem, items } = useCart();
  const [hoveredRelated, setHoveredRelated] = useState<string | null>(null);
  const [movementHovered, setMovementHovered] = useState(false);
  const product = PRODUCTS[params.id ?? 'oceanic-deep-42'] ?? PRODUCTS['oceanic-deep-42'];
  const related = Object.values(PRODUCTS).filter((item) => item.id !== product.id).slice(0, 3);
  const inCartQuantity = items.find((item) => item.id === product.id)?.quantity ?? 0;

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <main style={{ paddingTop: 88 }}>
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '7fr 5fr',
            minHeight: 921,
          }}
        >
          <div
            style={{
              backgroundColor: '#f4f4f4',
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
              src={product.mainImg}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                maxHeight: 700,
                filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.2))',
              }}
            />
          </div>

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
                {product.name}
              </h1>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: product.accent,
                  marginBottom: 32,
                }}
              >
                {product.subtitle}
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
                {product.price}
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
                {product.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <button
                  type="button"
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
                  onClick={() =>
                    addItem({
                      id: product.id,
                      name: product.name,
                      subtitle: product.subtitle,
                      price: Number(product.price.replace(/[^0-9.]/g, '')),
                      priceLabel: product.price,
                      image: product.mainImg,
                      accent: product.accent,
                      series: 'Oceanic Series',
                    })
                  }
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = '#444748')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = '#000')}
                >
                  {inCartQuantity > 0 ? `Added to Bag (${inCartQuantity})` : 'Add to Bag'}
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
                    <span className="material-symbols-outlined" style={{ color: product.accent, fontSize: 20 }}>
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
              <div style={{ width: 80, height: 1, backgroundColor: product.accent, margin: '0 auto' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
              {[
                {
                  icon: 'settings_suggest',
                  label: product.movementLabel,
                  title: product.movementTitle,
                  body: product.movementBody,
                  dark: false,
                },
                {
                  icon: 'water_drop',
                  label: product.resistanceLabel,
                  title: product.resistanceTitle,
                  body: product.resistanceBody,
                  dark: true,
                },
                {
                  icon: 'architecture',
                  label: product.constructionLabel,
                  title: product.constructionTitle,
                  body: product.constructionBody,
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
                    transition: spec.dark ? 'transform 0.5s' : 'box-shadow 0.5s',
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
                    style={{ color: product.accent, fontSize: 36, marginBottom: 24, display: 'block' }}
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

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 32,
                marginTop: 32,
              }}
            >
              {[
                { label: 'Dial', value: product.dial },
                { label: 'Power Reserve', value: product.reserve },
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
                Every bridge is chamfered by hand, and every screw is polished to a mirror shine. This is not just a timekeeping device; it is a mechanical sculpture designed to outlast its wearer.
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
            <img src={OCEAN_IMG} alt="Deep ocean" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
              {related.map((item) => (
                <Link key={item.id} href={`/product/${item.id}`}>
                  <div
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setHoveredRelated(item.id)}
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
                        src={item.mainImg}
                        alt={item.name}
                        style={{
                          width: '100%',
                          height: 400,
                          objectFit: 'cover',
                          transition: 'transform 0.7s ease',
                          transform: hoveredRelated === item.id ? 'scale(1.05)' : 'scale(1)',
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
                      {item.name}
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
                      Oceanic Series
                    </p>
                    <div
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 16,
                        fontWeight: 700,
                        color: '#1a1c1c',
                      }}
                    >
                      {item.price}
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
