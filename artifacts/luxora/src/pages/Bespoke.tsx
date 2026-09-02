import { useState } from 'react';
import Footer from '@/components/Footer';

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnEwR-M5Gg8OWSP_-8oi5lQHxJmHtdtaflKHq8uZ1hisJklU5KTOa6G2pE_0gN3rFqw3QwPAkv44KlsbS8d354WUQKc-teEk5l9BtK7Zv6s6qZjUmfaJeE9fXropona9u2dOXsU7N6Wrh7oRzqh8Qx8s4I7gKP6ZZyrMs3DQrb6WthvW4ZhYIUmNaGmhvmO4m6DIour8s5IZ0wkXO_cmAct3whUXxE64aAdAJvfKV-i7mbVT-yth-odCBDzriDxSTWI05gnXHOSWA';
const STEP1_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDr3bj9pi6d1TWeFWGZsreOR2v4Df2LtWXPDkKRyxU4wtM5gh4IRADrG1LH6tyKHXuJtDnLPRwr4wyk_G1QrPv3MQWtMwW_HafNUebTVsZ15qSVQGhDf2aJ7l5z_nxDb3Mijc0uEyhjEZdHSHbhQY7Gr66e2y1itp2pefkiN_w4IsEBAak_x0R_68UGp02_wolgVOCVFCiB7OGTEanjjGjqVfyZr-1ZCwSAbRVEeEzApYH_kXd0b367Ys3eGpbfcUVF38ylANyGc8g';
const STEP2_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuClrjhMDcTJlwKv0CfUUYEhs0BF_Je351P_kJgRhMiCGfG6MDQEE4MmOMuZveI6xh1_mr2hlNJfodHXMNgNdrT2EbIay-pdoBJrPl4Ja75k4ltlQWnm-UkCxbKG8t7xFwSS51vk0AFLgBKj2OgIaTTYNsKRZTX1ZXnQCRPDBnlDZ-M__2FrSKT1cmIDYu7DJ0rV_z8bKr8zaqLiTeecwau7cCJqiN4AyRjim2R34iwN01X0YJ81mXsDViFselJ67TiSZwKB1XtLz9E';
const STEP3_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLwGGe9RfnA-9X7RClFJ-NhcIRL0zQBVMckrbU1EF-TrYKyzXPFCY1Ov6_pQEQ4YIQCrl9eSOQ3y4bvQMT49C2jTbxftbo6dOwlD_njT0K6K1l38JOtpYtNjcdXHpmCtf262IxTr-Txx2CdgcgKbeByW5RGYCk2P4km_HNF0Ua3qbiy03_dUB4rsHeIfL5UnzTzUbCLb5ET377wpAAOVxrwA_kh-FlK3xElKCD1NzjvZQWQVi9WeSUqEAWqFVcOUvx6wOfnKm1bSI';
const MAT1_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkacDqkDYKa_ylluLap008_qah95ndFsOtugZuihJRTxvCHB7vk0NVo9vZPpzQVIa1J84J6K48QyrO-0lZcdgTFAMT5QobR800Vn_V_JtKX3EZin5lTsK26brXFI4bhYc2ePlp1cgrXltrRi7oqdCyoGzCO9emUnFwJiFmpQKyPHJnNwnfRexcAFLERL5lz7TiBff1lMo-qBz9F_IuIVBMuy2zhjO4FxzuUah9gQrABQA1D1BWTghWPA_IgyJ3jHeWPkkS5jX4xzI';
const MAT2_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhqD-4nmS9_WclBgo3Vm_IGRpbFLUyCEc6SEzCXh8kEy7vJD6tadsdkdF85eRq497MNpAC3DB1BN7c-t14Eehvp6uHv0YT4wUV-jf4kHyJuEz_Uo7Xz_7A6eKfdkTQfR19mF4NBMv4KWpZW7MRXtvdR-xinffaT4IR5jbLLuufm0xjO_SXNYDNDchACOYMFz-JdehsJLKLsER1CuOPkcK26QodChXGTF5O6tH4LyZaI_ad9B1xkUz26VzfLDZS_J29Og8sW-VV7YY';
const MAT3_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPbkSo5BP4pLxpxPPO3YXwj9D7pDknGMq044IzFotL7rILU6I_RswT4QQcbreuaxuvZaN_X7S-b1wtpOaqjnst469ZojPRm3UbuHvlaBHiaNhGhLWXsB9HgVY6AcAnmLxerNgZl5onV6OPCKz9nlWORgrpNaxy7RHUK_GVWeBoGHb4TvPNc-mXG9CV8fjXkRyuiB2gxIgcD3nP3Tkx7st5NiAKWldDf-dPd3sVaImp_rHwUZHl4LwgynRfS-xkcUU7DbGaYlns4II';

const S = {
  serif: { fontFamily: "'Playfair Display', serif" },
  sans: { fontFamily: 'Montserrat, sans-serif' },
  gold: '#735c00',
  black: '#000',
  muted: '#444748',
};

const steps = [
  { num: 'I.', title: 'Consultation', img: STEP1_IMG, offset: 0, body: 'Meet with our Master Horologist in a private suite to define your vision. We explore your lifestyle, aesthetic preferences, and the story you wish your timepiece to tell.' },
  { num: 'II.', title: 'Design', img: STEP2_IMG, offset: 96, body: 'Our designers translate your vision into technical blueprints. You will review hand-painted dial renderings and 3D models, refining every millimeter until it is flawless.' },
  { num: 'III.', title: 'Creation', img: STEP3_IMG, offset: 192, body: 'The physical realization. Over six months, our artisans hand-finish every component, from the tourbillon cage to the hand-stitched exotic leather strap.' },
];

export default function Bespoke() {
  const [form, setForm] = useState({ name: '', email: '', commission: '', vision: '' });
  const [mat1Hovered, setMat1Hovered] = useState(false);

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <main>
        {/* ─── HERO ─────────────────────────────────────────────────── */}
        <header style={{ position: 'relative', height: 921, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)', zIndex: 1 }} />
          <img src={HERO_IMG} alt="Bespoke atelier" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'relative', zIndex: 20, textAlign: 'center', padding: '0 20px' }}>
            <span style={{ ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', display: 'block', marginBottom: 24 }}>Uniquely Yours</span>
            <h1 style={{ ...S.serif, fontSize: 80, fontWeight: 700, lineHeight: 1.05, color: '#fff', marginBottom: 32, maxWidth: 900 }}>The Art of Individualism</h1>
            <p style={{ ...S.sans, fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', maxWidth: 640, margin: '0 auto 40px' }}>
              Commission a timepiece that transcends time. A collaborative journey between you and our master artisans.
            </p>
            <a
              href="#inquiry"
              style={{ display: 'inline-block', backgroundColor: '#fff', color: S.black, padding: '20px 40px', ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background-color 0.3s' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.9)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = '#fff')}
            >
              Begin Your Legacy
            </a>
          </div>
          <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', zIndex: 20, animation: 'bounce 2s infinite' }}>
            <span className="material-symbols-outlined" style={{ color: '#fff', fontSize: 32 }}>expand_more</span>
          </div>
        </header>

        {/* ─── PERSONALIZATION JOURNEY ───────────────────────────────── */}
        <section style={{ paddingTop: 120, paddingBottom: 120, paddingLeft: 80, paddingRight: 80, maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2 style={{ ...S.serif, fontSize: 32, fontWeight: 600, color: S.black, marginBottom: 16 }}>The Personalization Journey</h2>
            <div style={{ width: 48, height: 1, backgroundColor: S.black, margin: '0 auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'start' }}>
            {steps.map((step) => (
              <div key={step.num} style={{ marginTop: step.offset }}>
                <div style={{ aspectRatio: '4/5', overflow: 'hidden', marginBottom: 24 }}>
                  <img
                    src={step.img}
                    alt={step.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = 'scale(1.1)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = 'scale(1)')}
                  />
                </div>
                <h3 style={{ ...S.serif, fontSize: 24, fontWeight: 600, color: S.black, marginBottom: 16 }}>{step.num} {step.title}</h3>
                <p style={{ ...S.sans, fontSize: 16, lineHeight: 1.6, color: S.muted }}>{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── EXCEPTIONAL MATERIALS ─────────────────────────────────── */}
        <section style={{ backgroundColor: '#f3f3f4', paddingTop: 120, paddingBottom: 120 }}>
          <div style={{ paddingLeft: 80, paddingRight: 80, maxWidth: 1440, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
              <div style={{ maxWidth: 480 }}>
                <span style={{ ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: S.gold, display: 'block', marginBottom: 16 }}>The Palette</span>
                <h2 style={{ ...S.serif, fontSize: 32, fontWeight: 600, color: S.black, marginBottom: 16 }}>Exceptional Materials</h2>
                <p style={{ ...S.sans, fontSize: 16, lineHeight: 1.6, color: S.muted }}>A curated selection of the world's most precious elements. From meteorite dials to ethically sourced alligator hide, the choice is yours.</p>
              </div>
              <div style={{ display: 'flex', gap: 16 }}>
                {['chevron_left', 'chevron_right'].map((icon) => (
                  <button key={icon} style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,0,0,0.2)', backgroundColor: 'transparent', cursor: 'pointer', transition: 'border-color 0.2s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = S.black)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.2)')}
                  >
                    <span className="material-symbols-outlined">{icon}</span>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '8fr 4fr', gridTemplateRows: '300px 300px', gap: 24 }}>
              {/* Large dial image */}
              <div style={{ gridRow: '1 / 3', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                onMouseEnter={() => setMat1Hovered(true)}
                onMouseLeave={() => setMat1Hovered(false)}
              >
                <img src={MAT1_IMG} alt="Guilloche dial" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', transform: mat1Hovered ? 'scale(1.05)' : 'scale(1)' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', opacity: mat1Hovered ? 1 : 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', border: '1px solid #fff', padding: '8px 24px' }}>View Dials</span>
                </div>
              </div>
              {/* Leather */}
              <div style={{ overflow: 'hidden', cursor: 'pointer' }}>
                <img src={MAT2_IMG} alt="Alligator leather" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = 'scale(1)')}
                />
              </div>
              {/* Gold */}
              <div style={{ overflow: 'hidden', cursor: 'pointer' }}>
                <img src={MAT3_IMG} alt="Rose gold" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = 'scale(1)')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIAL ──────────────────────────────────────────── */}
        <section style={{ paddingTop: 120, paddingBottom: 120, backgroundColor: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ paddingLeft: 80, paddingRight: 80, maxWidth: 1440, margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <div style={{ maxWidth: 768, margin: '0 auto', textAlign: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 48, color: 'rgba(115,92,0,0.3)', display: 'block', marginBottom: 32, fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <blockquote style={{ ...S.serif, fontSize: 32, fontWeight: 600, lineHeight: 1.4, color: S.black, marginBottom: 48 }}>
                "The journey of creating my 'Everest' complication with Luxora was as rewarding as the watch itself. It isn't just a machine; it's a piece of my personal history, meticulously crafted into a wearable legacy."
              </blockquote>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 64, height: 1, backgroundColor: S.black, marginBottom: 16 }} />
                <cite style={{ ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontStyle: 'normal' }}>Victor S. — Private Collector</cite>
              </div>
            </div>
          </div>
        </section>

        {/* ─── INQUIRY FORM ─────────────────────────────────────────── */}
        <section id="inquiry" style={{ paddingTop: 120, paddingBottom: 120, paddingLeft: 80, paddingRight: 80, borderTop: '1px solid rgba(196,199,199,0.3)' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            {/* Left info */}
            <div>
              <h2 style={{ ...S.serif, fontSize: 32, fontWeight: 600, color: S.black, marginBottom: 32 }}>Begin the Conversation</h2>
              <p style={{ ...S.sans, fontSize: 18, lineHeight: 1.6, color: S.muted, marginBottom: 48 }}>
                Due to the exhaustive nature of our bespoke commissions, we only accept twelve projects per annum. Please share your initial thoughts, and our Private Client Director will contact you within 48 hours.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {[
                  { icon: 'location_on', title: 'Global Headquarters', body: 'Rue du Rhône 14, Geneva, Switzerland' },
                  { icon: 'mail', title: 'Direct Commission', body: 'bespoke@luxora.watch' },
                ].map((item) => (
                  <div key={item.icon} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>
                    <span className="material-symbols-outlined" style={{ color: S.gold, fontSize: 24, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                    <div>
                      <h4 style={{ ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>{item.title}</h4>
                      <p style={{ ...S.sans, fontSize: 16, color: S.muted }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form style={{ display: 'flex', flexDirection: 'column', gap: 48 }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
                {[
                  { id: 'name', label: 'Full Name', type: 'text', key: 'name' as const },
                  { id: 'email', label: 'Email Address', type: 'email', key: 'email' as const },
                ].map((field) => (
                  <div key={field.id} style={{ position: 'relative' }}>
                    <input
                      type={field.type}
                      id={field.id}
                      value={form[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      placeholder={field.label}
                      style={{ width: '100%', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.2)', padding: '8px 0', ...S.sans, fontSize: 16, color: S.black, outline: 'none', transition: 'border-color 0.2s' }}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderBottomColor = S.gold)}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderBottomColor = 'rgba(0,0,0,0.2)')}
                    />
                  </div>
                ))}
              </div>

              <div style={{ position: 'relative' }}>
                <select
                  value={form.commission}
                  onChange={(e) => setForm({ ...form, commission: e.target.value })}
                  style={{ width: '100%', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.2)', padding: '8px 0', ...S.sans, fontSize: 16, color: form.commission ? S.black : S.muted, outline: 'none', appearance: 'none', cursor: 'pointer' }}
                >
                  <option value="" disabled>Nature of Commission</option>
                  <option value="full">Full Bespoke Construction</option>
                  <option value="material">Material Personalization</option>
                  <option value="restore">Heritage Restoration</option>
                </select>
                <span className="material-symbols-outlined" style={{ position: 'absolute', right: 0, top: 8, pointerEvents: 'none', fontSize: 20, color: S.muted }}>expand_more</span>
              </div>

              <div>
                <textarea
                  value={form.vision}
                  onChange={(e) => setForm({ ...form, vision: e.target.value })}
                  rows={4}
                  placeholder="Initial Vision or Requirements"
                  style={{ width: '100%', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.2)', padding: '8px 0', ...S.sans, fontSize: 16, color: S.black, outline: 'none', resize: 'none', transition: 'border-color 0.2s' }}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderBottomColor = S.gold)}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderBottomColor = 'rgba(0,0,0,0.2)')}
                />
              </div>

              <button
                type="submit"
                style={{ width: '100%', backgroundColor: S.black, color: '#fff', padding: '24px 32px', ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background-color 0.3s' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#444748')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = S.black)}
              >
                Submit Application
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
