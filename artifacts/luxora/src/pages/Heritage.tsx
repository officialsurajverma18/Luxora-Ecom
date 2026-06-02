import { useState } from 'react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuANIMkTi7ZfDEuImgc_V2KMsDv-v5shxPVOIZoeWgEPqK4-t9KMPTGcym-n9E1FacMQLSmZZRe0V7vhAGEU_hTlFtdUQ8cCHmiLm5k-c71eqBmLhEHaA1U-wIcl37UFqz1mr1I5rzx2BKfxLdonMXWtAFfFqvr0jGK_MG4Jrp-OjqZezm4TmEKbOFDxwyynRtInIoZPM7t-pN7ktCLFyxlkVrq3JzYNwrzhw5uk1F_Qkyim_yD07p2ULOWbgyUiZOY9wNLrvk5g_YE';
const FOUNDER_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUYDqQQhI7kw-awcqgW3cf5Ip_a3FO9lf5aJWMf63w5ChD1B4lLmoEVF0sFFkGXpxRg6U1Z1zr7XF2xKiVNM_U_CevNHiOhANlxocNE8Kd-hR5O0Ux2545cczI7UUB9lrvXoKvGlUgoi8NZDnUBhME5P-czzoQPvMW4-l_lEjtNy5BpG0cp7dZuAgaluHcYQQScA3keXyLwaQhwpJFhEza6aInW7iFUySCJkL79urt_EoTk8JuTReusqkvugGdyFH0v1NrzE14j1o';
const T1894_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIJx_LMlIDFNrsIg1wKjbA59jK5xR8aaLMPNJfJmp1IEmBTNgYYp7Ll97wsfdkjv6j67GsMqy-lekEYeql0gb_JodzjJUHgT_pZJBryqWrKKe_FOXRmn0KyS-7QL3k4PD7fgVmCSrrt2oNzXl-nqSHmwM_gIOP-Cauzf9-zB99kc5oQmgpqgyVrw7lMoie9IdbkvmE7PS1cp7iHIRcAWQadOtEYVuDorUJ9CL8hwmkl4JoN9PVV7mfZIFLbj9y5FB15IU-GbfBqOU';
const T1945_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrQl6rQPhw3lrkfpdCVo8ZwSjzlp8U6KD7Fj1UK1uKPV_u2pWHlfnRTK0kvPfAWatfKgZzq4nszherKOUZlpWSr2qMRp4wfmT5OCv-8mnx2dHdzuf9I1OL1VgWPX92DViSsVZZDLYaVB6eWtVvIgDVCyxztnlBHWksipsp5TAQn3H7ArCCLhGE9UvTNn8cs3QAPBjBT_7X0yhcXHWm4QfWphbDIB9vOaqzYe0sHBPlj8FSqiZamnG7ZywniPLiaaO6cErhXH2-0u4';
const T2024_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjasoqFcsbw-XnhXIqm1ZzrCLmPDZ-olJ31D0VUh2Ziuz3c0L8bxNEVVa-QIWDYPiUHZheG-kkqrhd0uh6QsTxmLQAznF6wykTftb4N1qw50NTb42fQFwKPSEGpONdw1cs08Gwvn1oCCZOj68gchJynOpynhHaPCzEcvnQO7Swo9bCcJbojaglj51AyroBrDOTBsNnqFT-MD31MqfTFOcHiYhdvTf0tfevgLF16BwUL_vvSBemZHJZsLZ3RNolKdpAthrKDg4n_Jg';
const CRAFT_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpp5VQqvrG5sHcZwu7j6SGgVTiY2uVI71YGYzH8jL7XIP0R1uA1105mTqQ9djhaAiLK3GPSVoenycZySnGgU469j7DiMSjix5y977cXcyqVnW_5KaScUmTEI2Fv1_iQEBOOlwcNfx9plDXyVdL4btZMbByV89eOgXCptMfWUXHbKFiZIbpKSXTHoNLs2mUHqj2NvcMdEZSJ3rcjXMIGZjZJE9vAVuPqbKAYEhGAWF5zEY2pkRuGorEBqfswDy5jIn0M-mA98PjS3w';
const G1_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfCuDYkUQGQI8HhuPd_gnbax8xUv0Hjk7H3MsZlB4cBquw1_oeKbmfNbe1J_f8jSzvnDqnE1X07eKrHeoDJ28AEo_MyWI_QnYIeOJmdcP4kVVfon4-kXJW3dHXujZM68E4BBXLrBw1zSRjyNjHxcTgnUMZAlG8ajeYZavK3P0lcA4-j7uwIQ7xnRz1cM0gmw4VF10CSh360kfkT2U_Q9mLP_DLFC9PYqRT0Ug1STFmlwxLkU3ohi2X_I3ArfdGijpJUEjcTQtJ6Gc';
const G2_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOxZlnOsVcQ3JBkuKHnw0s6R1DDKmuNMGQWxBMdFtzS2JxEb990WMkUeeJnjMeXzwd3KJVy89Gfep28McnfuowLyN7GpjmK2RlrrV10K_Qp5IYlkUnluHUCjjga-1n3PnM2ztwPXDg7Y-qTsQ9TkpGM0W_50mDJpUaddelstDAyMIGx-ueHwVarojso1TH7kzUs1fE59ctkt_Hka9FEU50u0TO2pWZEyyyl8OJu8iFi6PGSafady3dpZ2rbZaz-YBamozRgw-zHtxg';
const G3_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQjQUXTcgPIrjOpqwUGSI6I8-sW6yFPP_Jtf3pOGs0_pGlV0DdmtaH36czZkPvNk4qq_B0Rj233T4W95xHrpM3stvGSfolV5ekmL0BziFBfNhAxT9jbe1xaiZflL9rO7aWiyuWDB_6EZWpVR0LPshg7qkNlO5d1Gmj6qrDjmi3Ew8NfPtH4G7teFYeWdlOjzZkkmffs-Sd2MxceWsoB9UgC3LhgUMDBobNu0pbv2QfoOHIH5Bqp3mJ8s_J-kb31fA_R8_wrCF3FxA';

const S = {
  display: { fontFamily: "'Playfair Display', serif", fontWeight: 700 },
  serif: { fontFamily: "'Playfair Display', serif" },
  sans: { fontFamily: 'Montserrat, sans-serif' },
  gold: '#735c00',
  black: '#000000',
  surface: '#1a1c1c',
  muted: '#444748',
  outline: '#c4c7c7',
};

const timeline = [
  {
    year: '1894', title: 'The Geneva Inauguration', side: 'right',
    body: "Opening of the first Luxora workshop. The creation of the 'Calibre Zero', our first in-house movement.",
    img: T1894_IMG,
  },
  {
    year: '1945', title: 'The Golden Era', side: 'left',
    body: "Post-war innovation leads to the introduction of the 'Horizon' series, setting new standards for maritime navigation.",
    img: T1945_IMG,
  },
  {
    year: '2024', title: 'Heritage Reimagined', side: 'right',
    body: 'The launch of our carbon-neutral atelier, merging artisanal roots with future-proof sustainability.',
    img: T2024_IMG,
  },
];

const gallery = [
  { img: G1_IMG, label: 'The 1910 Chronograph', offset: 0 },
  { img: G2_IMG, label: 'Instruments of Precision', offset: 96 },
  { img: G3_IMG, label: "The Artisan's Eye", offset: 0 },
];

export default function Heritage() {
  const [hoverImg, setHoverImg] = useState<string | null>(null);

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Navbar activeLink="heritage" />

      <main>
        {/* ─── HERO ─────────────────────────────────────────────────── */}
        <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: '#1c1b1b' }}>
            <img src={HERO_IMG} alt="Watch movement" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
          </div>
          <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 20px' }}>
            <span style={{ ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff', display: 'block', marginBottom: 24, opacity: 0.9 }}>
              A Legacy in Motion
            </span>
            <h1 style={{ ...S.display, fontSize: 64, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: 32 }}>
              The Heritage Collection
            </h1>
            <div style={{ width: 1, height: 96, backgroundColor: 'rgba(255,255,255,0.3)', margin: '0 auto' }} />
          </div>
        </section>

        {/* ─── FOUNDERS' LEGACY ──────────────────────────────────────── */}
        <section style={{ paddingTop: 120, paddingBottom: 120, paddingLeft: 80, paddingRight: 80, maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: '5fr 6fr', gap: 24, alignItems: 'center' }}>
          <div>
            <span style={{ ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, display: 'block', marginBottom: 16 }}>The Visionaries</span>
            <h2 style={{ ...S.serif, fontSize: 32, fontWeight: 600, color: S.black, marginBottom: 32 }}>Founders' Legacy</h2>
            <p style={{ ...S.sans, fontSize: 18, lineHeight: 1.6, color: S.muted, marginBottom: 32 }}>
              In 1894, Arthur and Elena Luxora established their first atelier in the heart of Geneva. Driven by a singular obsession with chronometric perfection, they didn't just build watches; they engineered time itself. Every piece was a testament to their belief that a timepiece is a living vessel of history.
            </p>
            <button
              style={{ backgroundColor: S.black, color: '#fff', padding: '16px 40px', ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = '#444748')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = S.black)}
            >
              Discover the Archive
            </button>
          </div>

          <div style={{ position: 'relative' }}>
            <img src={FOUNDER_IMG} alt="Watchmaker atelier" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', boxShadow: '0 24px 48px rgba(0,0,0,0.2)' }} />
            <div style={{ position: 'absolute', bottom: -40, left: -40, backgroundColor: '#f9f9f9', padding: 32, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              <p style={{ ...S.serif, fontSize: 18, fontStyle: 'italic', color: S.muted, marginBottom: 8 }}>"Time is the ultimate canvas."</p>
              <p style={{ ...S.sans, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase' }}>— A. LUXORA, 1902</p>
            </div>
          </div>
        </section>

        {/* ─── TIMELINE ─────────────────────────────────────────────── */}
        <section style={{ paddingTop: 120, paddingBottom: 120, backgroundColor: '#f3f3f4', overflow: 'hidden' }}>
          <div style={{ paddingLeft: 80, paddingRight: 80, maxWidth: 1440, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 96 }}>
              <h2 style={{ ...S.serif, fontSize: 32, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: S.black, marginBottom: 16 }}>A Century of Precision</h2>
              <div style={{ width: 48, height: 2, backgroundColor: S.gold, margin: '0 auto' }} />
            </div>

            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 128 }}>
              {/* Center line */}
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 1, background: 'linear-gradient(to bottom, transparent, #1a1c1c 10%, #1a1c1c 90%, transparent)', transform: 'translateX(-50%)' }} />

              {timeline.map((item) => (
                <div key={item.year} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, width: '100%' }}>
                  {item.side === 'right' ? (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', textAlign: 'right', paddingRight: 64 }}>
                        <span style={{ ...S.serif, fontSize: 32, fontWeight: 600, color: S.gold, marginBottom: 8 }}>{item.year}</span>
                        <h3 style={{ ...S.serif, fontSize: 24, fontWeight: 600, color: S.black, marginBottom: 16 }}>{item.title}</h3>
                        <p style={{ ...S.sans, fontSize: 16, lineHeight: 1.6, color: S.muted, maxWidth: 384, marginLeft: 'auto' }}>{item.body}</p>
                      </div>
                      <div>
                        <img
                          src={item.img}
                          alt={item.title}
                          style={{ width: '100%', height: 320, objectFit: 'cover', filter: hoverImg === item.year ? 'grayscale(0%)' : 'grayscale(100%)', transition: 'filter 0.7s' }}
                          onMouseEnter={() => setHoverImg(item.year)}
                          onMouseLeave={() => setHoverImg(null)}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <img
                          src={item.img}
                          alt={item.title}
                          style={{ width: '100%', height: 320, objectFit: 'cover', filter: hoverImg === item.year ? 'grayscale(0%)' : 'grayscale(100%)', transition: 'filter 0.7s' }}
                          onMouseEnter={() => setHoverImg(item.year)}
                          onMouseLeave={() => setHoverImg(null)}
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 64 }}>
                        <span style={{ ...S.serif, fontSize: 32, fontWeight: 600, color: S.gold, marginBottom: 8 }}>{item.year}</span>
                        <h3 style={{ ...S.serif, fontSize: 24, fontWeight: 600, color: S.black, marginBottom: 16 }}>{item.title}</h3>
                        <p style={{ ...S.sans, fontSize: 16, lineHeight: 1.6, color: S.muted, maxWidth: 384 }}>{item.body}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CRAFTSMANSHIP FULL BLEED ─────────────────────────────── */}
        <section style={{ position: 'relative', minHeight: 819, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <img src={CRAFT_IMG} alt="Watchmaker hands" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }} />
          </div>
          <div style={{ position: 'relative', zIndex: 10, width: '50%', backgroundColor: '#f9f9f9', padding: '96px', marginRight: 80, boxShadow: '0 32px 64px rgba(0,0,0,0.2)' }}>
            <span style={{ ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, display: 'block', marginBottom: 24 }}>Swiss Craftsmanship</span>
            <h2 style={{ ...S.serif, fontSize: 32, fontWeight: 600, color: S.black, marginBottom: 32 }}>The Art of the Infinite</h2>
            <p style={{ ...S.sans, fontSize: 18, lineHeight: 1.6, color: S.muted, marginBottom: 32 }}>
              At Luxora, we believe that craftsmanship is a silent language. Every gear is hand-polished, every screw is blued by fire, and every dial is finished with the patient hand of a master artist. This is not mass production; this is the relentless pursuit of perfection that defines the Swiss spirit.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, borderTop: `1px solid ${S.outline}`, paddingTop: 32 }}>
              {[{ val: '120+', label: 'Hours of Polishing' }, { val: '288', label: 'Unique Components' }].map((stat) => (
                <div key={stat.val}>
                  <p style={{ ...S.serif, fontSize: 24, fontWeight: 600, color: S.black, marginBottom: 4 }}>{stat.val}</p>
                  <p style={{ ...S.sans, fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#838484' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── MOMENTS OF DISTINCTION ────────────────────────────────── */}
        <section style={{ paddingTop: 120, paddingBottom: 120, paddingLeft: 80, paddingRight: 80, maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
            <div>
              <span style={{ ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, display: 'block', marginBottom: 16 }}>Curated Archive</span>
              <h2 style={{ ...S.serif, fontSize: 32, fontWeight: 600, color: S.black }}>Moments of Distinction</h2>
            </div>
            <Link href="/collection">
              <span style={{ ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: S.black, borderBottom: `1px solid ${S.black}`, paddingBottom: 4, cursor: 'pointer', textDecoration: 'none' }}>View Full Archive</span>
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
            {gallery.map((item) => (
              <div key={item.label} style={{ marginTop: item.offset }}>
                <img
                  src={item.img}
                  alt={item.label}
                  style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', boxShadow: '0 8px 24px rgba(0,0,0,0.05)', filter: hoverImg === item.label ? 'grayscale(0%)' : 'grayscale(100%)', transition: 'filter 0.5s', marginBottom: 24 }}
                  onMouseEnter={() => setHoverImg(item.label)}
                  onMouseLeave={() => setHoverImg(null)}
                />
                <p style={{ ...S.sans, fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: S.surface }}>{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
