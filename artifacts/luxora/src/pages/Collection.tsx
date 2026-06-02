import { useState } from 'react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const products = [
  {
    id: 'oceanic-deep-42',
    name: 'Oceanic Deep 42',
    sub: 'Polished Steel & Ceramic',
    price: '$12,400',
    tag: 'New Arrival',
    tagDark: false,
    specs: ['Calibre L.888 Automatic', '72-hour Power Reserve', 'Sapphire Crystal Front & Back', 'Water Resistant to 100m'],
    cta: 'Quick View',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0kP3WtP6m7cFHPWLeF977C8-RdqNx_h8AiJ5ij3NSyCWTyBAk4WfTojBnA18Kx1oQt0pzlXvDWEWDhWNTtGyTPH3LwErLMgNnAvc99-L5x0ngqTEYBPsaPyTkeqHrm80pijGU5ojKqStWSHQfyacS-CYOUA_cKWR-E7maVSwAarRgNGDfZKAWFVl5vHPgR1OetqBeWMbHnRXJScPduTJe0ukB2ewgM2Ogzzb0Z-ujKoTPt-3Yr1rBCfsT51M15nWJusOxLgeazr4',
  },
  {
    id: 'elysium-gold',
    name: 'Elysium Gold',
    sub: '18K Rose Gold',
    price: '$28,900',
    tag: 'Limited Edition',
    tagDark: true,
    specs: ['Manual Wind Calibre M.12', '18K Rose Gold Case', 'Alligator Leather Strap', 'Hand-Engraved Dial'],
    cta: 'Book Appointment',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ6gOeBlk7Z7rEvNDL0-Ak2ugZl6D4BD16mWVYksx5bDfVq5nBZL_dCLBNDrJiLNtqNn71NPPBt2AYUj2WjDgliZ75BTiPPc8Cz72wRrkE-YGI4WkUTNxgwS2i6XXgdflNLwoyg0mAEvaagBAbIuMuvGeApopXI6IcKpH7SYn89OeCxHHGk2-oxaRzTDqLy7Dd10DopiMRgfvXLMRyo6N9cKHh7X1MKQTwP53tun4FmxrPwOcekloT1eDjqmmKBDOH4YA6E6HeEvI',
  },
  {
    id: 'chronos-titanium',
    name: 'Chronos Titanium',
    sub: 'Brushed Titanium',
    price: '$15,200',
    tag: null,
    tagDark: false,
    specs: ['Titanium Grade 5 Case', 'Skeletonized Movement', 'Antireflective Coating', 'Ultra-Lightweight'],
    cta: 'Quick View',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Qad3-8DQO4njxfZnkdcU0Zym7IIKuOuLgSKyKs_KduNl1Uwyp1wLV0AWOV9qsdt2EYGDaDQm47vvK9YsIhUXe6ul3GlX800u3UpAU6ngoF0YNv9x-lt0GHmOnAYWAxCRrl9_CTaRRiOLsdItlqwgKFccVDiQN_igySQ7mIz7DZQ5y0YtqvuntkR904zQsk7Ul06n29c9iTV2RhipcrGuEtW5OH2L_PqgHVupfQv2q2anuS5zYUYZ5iQBiQKN602lWkakFBfqDA0',
  },
  {
    id: 'admiral-navy',
    name: 'Admiral Navy',
    sub: 'Steel & Navy Enamel',
    price: '$9,800',
    tag: null,
    tagDark: false,
    specs: ['Automatic Chronograph', 'Sunray Navy Dial', 'Interchangeable Bracelet', 'Magnified Date Window'],
    cta: 'Quick View',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPrPB58MQhnCqR37m0xqJWHHWpbk4CT-DFo5oVzMphtCgYLyfwi1IDS_mrEUFCiShkS1NgSf_kx8HRe_ag9chwZ6IKl5ODOYxFpVG0wHgSpiRpFu0MnfZ3GJAAXpKiF9CENfEXYIKYGfGtlgEvK9-7oDnbBI5Q8f0iAVaWKHvPiZRjDoBYp-ifh11Xat3YYdhPwnxRNFl-c_QT-3HX7g5GwulpYYIIaQtSBxqIsBZ_GlPQaeRJR2rCc4nLQQKte_RxLOFspNrNpP0',
  },
  {
    id: 'grand-complication',
    name: 'Grand Complication',
    sub: 'White Gold Skeleton',
    price: '$145,000',
    tag: 'Masterpiece',
    tagDark: false,
    tagGray: true,
    specs: ['Calibre 11.20 QP', 'Perpetual Calendar', 'Moon Phase Indicator', 'Geneva Seal Certified'],
    cta: 'Book Appointment',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLihR_ATvfx9ndTGgVLFMCT70bUaclUsH3l7BS4NCeMEggyGSA0A0o5XXNC1duXdJcRjtNSLt2HYxtiZGALUBoIszl-kIixFxrxSGV95XZrpQDKXBuS2LQHiGnO0ARnTv73YJWCXj6dxA-mfo5Qkr4Il5Q6ztYqgVeXbv8vlSzSb0Qm_JV0ZomGJgRcb4Jc-qvPGZl1GSI63QBrWRp6uLDA3WBB1MmLvyUvOkYa-hLlbTu2UEaJ8xnxW-wWbi9wi8HGOXn69eRDws',
  },
  {
    id: 'zenith-minimalist',
    name: 'Zenith Minimalist',
    sub: 'Platinum 950',
    price: '$32,000',
    tag: null,
    tagDark: false,
    specs: ['Ultra-Thin Calibre 1200P', '4.3mm Case Thickness', 'Polished Platinum', 'Hand-Finished Bridges'],
    cta: 'Quick View',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQohKv5IZrvUmVvywaNhASsXstfPnfYs26p7HowVcVTjekS8tPQHxW2LJCIR2ewQyTRrnXl7CTceAouPIHBg5HbtlLztnblAEEfI2KntjsRHDNazCxS04FA0obKWBjpet3qnDngyGjXj6iKbI7bHe8i3dH865M14ZJWNh27csG_Ub_Ge14AmRIgjDzVZiZhyeK405LzzAPmeyRceviFVXM_oj4xnsTcJgPxzJvM7VBI-uv__HsleTg-mvIM_MOowQVBzi4mqwt2hQ',
  },
];

const collections = [
  { id: 'heritage', label: 'Heritage Series', count: 12 },
  { id: 'nautical', label: 'Nautical Precision', count: 8, active: true },
  { id: 'aviator', label: 'Aviator Limited', count: 4 },
];

export default function Collection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Navbar activeLink="collections" />

      <main style={{ paddingTop: 80 }}>
        {/* Header */}
        <section style={{ paddingLeft: 80, paddingRight: 80, paddingTop: 48, paddingBottom: 64 }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', textAlign: 'center' }}>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#000',
                marginBottom: 16,
              }}
            >
              The Master Collection
            </h1>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 18,
                lineHeight: 1.6,
                color: '#444748',
                maxWidth: 640,
                margin: '0 auto',
                fontStyle: 'italic',
              }}
            >
              A century of horological excellence, defined by precision and understated elegance.
            </p>
          </div>
        </section>

        {/* Product Listing */}
        <section
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            paddingLeft: 80,
            paddingRight: 80,
            paddingBottom: 120,
            display: 'flex',
            gap: 24,
          }}
        >
          {/* Sidebar */}
          <aside style={{ width: 256, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 40 }}>
            {/* Collections filter */}
            <div style={{ borderBottom: '1px solid #c4c7c7', paddingBottom: 16 }}>
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#1a1c1c',
                  marginBottom: 24,
                }}
              >
                Collections
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {collections.map((c) => (
                  <li
                    key={c.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 16,
                      fontWeight: c.active ? 700 : 400,
                      color: c.active ? '#000' : '#444748',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => !c.active && ((e.currentTarget as HTMLElement).style.color = '#000')}
                    onMouseLeave={(e) => !c.active && ((e.currentTarget as HTMLElement).style.color = '#444748')}
                  >
                    <span>{c.label}</span>
                    <span style={{ fontSize: 10, opacity: 0.5 }}>({c.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Material filter */}
            <div style={{ borderBottom: '1px solid #c4c7c7', paddingBottom: 16 }}>
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#1a1c1c',
                  marginBottom: 24,
                }}
              >
                Material
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['18K Rose Gold', 'Brushed Platinum', 'Oyster Steel'].map((m) => (
                  <label
                    key={m}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      cursor: 'pointer',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 16,
                      color: '#444748',
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{ width: 16, height: 16, accentColor: '#000', borderRadius: 0 }}
                    />
                    {m}
                  </label>
                ))}
              </div>
            </div>

            {/* Movement filter */}
            <div style={{ borderBottom: '1px solid #c4c7c7', paddingBottom: 16 }}>
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#1a1c1c',
                  marginBottom: 24,
                }}
              >
                Movement
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Automatic Calibre', 'Manual Wind', 'Chronograph'].map((m) => (
                  <label
                    key={m}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      cursor: 'pointer',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 16,
                      color: '#444748',
                    }}
                  >
                    <input type="radio" name="movement" style={{ accentColor: '#000' }} />
                    {m}
                  </label>
                ))}
              </div>
            </div>

            <button
              style={{
                width: '100%',
                padding: '16px 0',
                border: '1px solid #000',
                backgroundColor: 'transparent',
                color: '#000',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background-color 0.3s, color 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#000';
                (e.target as HTMLElement).style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'transparent';
                (e.target as HTMLElement).style.color = '#000';
              }}
            >
              Clear Filters
            </button>
          </aside>

          {/* Grid */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 40,
                paddingBottom: 16,
                borderBottom: '1px solid #c4c7c7',
              }}
            >
              <span
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(68,71,72,0.6)',
                }}
              >
                Showing 24 Results
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  Sort By:
                </span>
                <select
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 16,
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                >
                  <option>Newest Arrivals</option>
                  <option>Price: High to Low</option>
                  <option>Price: Low to High</option>
                </select>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                rowGap: 64,
                columnGap: 24,
              }}
            >
              {products.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <div
                    style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Image */}
                    <div
                      style={{
                        position: 'relative',
                        aspectRatio: '4/5',
                        backgroundColor: '#f3f3f4',
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
                          transition: 'transform 0.7s ease',
                          transform: hoveredId === product.id ? 'scale(1.05)' : 'scale(1)',
                        }}
                      />

                      {/* Hover overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundColor: 'rgba(0,0,0,0.8)',
                          opacity: hoveredId === product.id ? 1 : 0,
                          transition: 'opacity 0.3s',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 32,
                          textAlign: 'center',
                        }}
                      >
                        <h4
                          style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: '#fff',
                            marginBottom: 16,
                          }}
                        >
                          Technical Specs
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {product.specs.map((spec) => (
                            <p
                              key={spec}
                              style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: 14,
                                color: 'rgba(255,255,255,0.85)',
                              }}
                            >
                              {spec}
                            </p>
                          ))}
                        </div>
                        <div style={{ marginTop: 32 }}>
                          <button
                            style={{
                              backgroundColor: '#fff',
                              color: '#000',
                              padding: '8px 16px',
                              fontFamily: 'Montserrat, sans-serif',
                              fontSize: 10,
                              fontWeight: 600,
                              letterSpacing: '0.15em',
                              textTransform: 'uppercase',
                              border: 'none',
                              cursor: 'pointer',
                            }}
                          >
                            {product.cta}
                          </button>
                        </div>
                      </div>

                      {/* Tag */}
                      {product.tag && (
                        <div
                          style={{
                            position: 'absolute',
                            top: 16,
                            left: 16,
                            backgroundColor: (product as any).tagGray ? '#e2e2e2' : product.tagDark ? '#000' : '#eeeeee',
                            color: product.tagDark ? '#fff' : '#000',
                            padding: '4px 12px',
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: 10,
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {product.tag}
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h3
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 24,
                            fontWeight: 600,
                            color: '#000',
                            marginBottom: 4,
                          }}
                        >
                          {product.name}
                        </h3>
                        <p
                          style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: 14,
                            color: '#444748',
                            marginBottom: 16,
                          }}
                        >
                          {product.sub}
                        </p>
                        <p
                          style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: 18,
                            fontWeight: 600,
                            color: '#1a1c1c',
                          }}
                        >
                          {product.price}
                        </p>
                      </div>
                      <button
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#444748',
                          transition: 'color 0.2s',
                        }}
                        title="Add to Compare"
                        onClick={(e) => e.preventDefault()}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#735c00')}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#444748')}
                      >
                        <span className="material-symbols-outlined">compare_arrows</span>
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div
              style={{
                marginTop: 80,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 16,
              }}
            >
              {[1, 2, 3].map((page) => (
                <span
                  key={page}
                  style={{
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${page === 1 ? '#000' : '#c4c7c7'}`,
                    backgroundColor: page === 1 ? '#000' : 'transparent',
                    color: page === 1 ? '#fff' : '#1a1c1c',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 14,
                    cursor: 'pointer',
                    transition: 'border-color 0.2s',
                  }}
                >
                  {page}
                </span>
              ))}
              <span
                style={{
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#1a1c1c',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>chevron_right</span>
              </span>
            </div>
          </div>
        </section>

        {/* Legacy Banner */}
        <section
          style={{
            backgroundColor: '#000',
            padding: '80px 80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 48,
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 32,
                fontWeight: 600,
                color: '#fff',
                marginBottom: 12,
              }}
            >
              A Legacy of Service
            </h2>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                color: 'rgba(255,255,255,0.7)',
                maxWidth: 480,
              }}
            >
              Experience our masterworks in person. Book a private viewing at any of our global boutiques.
            </p>
          </div>
          <button
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #fff',
              color: '#fff',
              padding: '20px 48px',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = '#735c00';
              (e.target as HTMLElement).style.borderColor = '#735c00';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = 'transparent';
              (e.target as HTMLElement).style.borderColor = '#fff';
            }}
          >
            Book an Appointment
          </button>
        </section>
      </main>

      <Footer dark={false} />
    </div>
  );
}
