import { useState } from 'react';
import { Link } from 'wouter';
import logoSrc from '@assets/ChatGPT_Image_Jun_2,_2026,_04_57_21_PM_1780399663886.png';

const WATCH_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX5C64eOb1L-yMaCnPYZBL_fayC-N2NlJA04miSsBq-7s0OHFuhE1mqnYQKk_VcKbGVLjZveHeoip73-egQz3YlndSLWeCI7rWiNar-6XvYUtPNby-x_Rdjo5ErPbFUotqJm1mWov32bNtoWx6_g2gh4ePvHQuFLT6nE3QFkjL4HBHhdGws0RdcRYvOBNDxVr42zd-lLCPbn6xkQb_X38UQFNAQsJ32qENtqYrQS_SrLRbRW-LiPkYY';

const S = {
  sans: { fontFamily: 'Montserrat, sans-serif' },
  serif: { fontFamily: "'Playfair Display', serif" },
  gold: '#735c00',
  black: '#000',
  muted: '#444748',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(0,0,0,0.2)',
  padding: '12px 0',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: 16,
  color: S.black,
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: S.muted,
  display: 'block',
  marginBottom: 8,
};

type PayMethod = 'card' | 'wire' | 'apple';

export default function Checkout() {
  const [payMethod, setPayMethod] = useState<PayMethod>('card');

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Checkout Nav */}
      <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, backgroundColor: 'rgba(249,249,249,0.92)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 80, paddingLeft: 80, paddingRight: 80, maxWidth: 1440, margin: '0 auto' }}>
          <Link href="/">
            <img src={logoSrc} alt="Luxora" style={{ height: 44, width: 'auto', cursor: 'pointer', objectFit: 'contain' }} />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: S.muted }}>
            <span className="material-symbols-outlined" style={{ color: S.gold, fontSize: 20 }}>lock</span>
            Secure Checkout
          </div>
          <span className="material-symbols-outlined" style={{ cursor: 'pointer', color: S.black }}>shopping_bag</span>
        </div>
      </header>

      <main style={{ paddingTop: 128, paddingBottom: 120, paddingLeft: 80, paddingRight: 80, maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 80, alignItems: 'start' }}>
          {/* Left: Shipping + Payment */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
            {/* Shipping */}
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                <span style={{ height: 1, width: 32, backgroundColor: S.gold, flexShrink: 0 }} />
                <h2 style={{ ...S.serif, fontSize: 32, fontWeight: 600, color: S.black }}>Shipping Information</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 24px' }}>
                {[
                  { label: 'First Name', placeholder: 'Julian', colSpan: 1 },
                  { label: 'Last Name', placeholder: 'Sterling', colSpan: 1 },
                  { label: 'Delivery Address', placeholder: 'Quai du Mont-Blanc 12', colSpan: 2 },
                  { label: 'City', placeholder: 'Genève', colSpan: 1 },
                  { label: 'Postal Code', placeholder: '1201', colSpan: 1 },
                  { label: 'Contact Phone', placeholder: '+41 22 731 65 00', colSpan: 2 },
                ].map((field) => (
                  <div key={field.label} style={{ gridColumn: `span ${field.colSpan}` }}>
                    <label style={labelStyle}>{field.label}</label>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderBottomColor = S.gold)}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderBottomColor = 'rgba(0,0,0,0.2)')}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Payment */}
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                <span style={{ height: 1, width: 32, backgroundColor: S.gold, flexShrink: 0 }} />
                <h2 style={{ ...S.serif, fontSize: 32, fontWeight: 600, color: S.black }}>Payment Acquisition</h2>
              </div>

              {/* Method selection */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 48 }}>
                {([
                  { id: 'card' as PayMethod, icon: 'credit_card', label: 'CARD' },
                  { id: 'wire' as PayMethod, icon: 'account_balance', label: 'WIRE' },
                  { id: 'apple' as PayMethod, icon: 'contactless', label: 'APPLE PAY' },
                ]).map((method) => (
                  <label
                    key={method.id}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, border: `1px solid ${payMethod === method.id ? S.gold : 'rgba(0,0,0,0.1)'}`, backgroundColor: payMethod === method.id ? '#f3f3f4' : 'transparent', cursor: 'pointer', transition: 'all 0.2s' }}
                    onClick={() => setPayMethod(method.id)}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 28, marginBottom: 8, color: payMethod === method.id ? S.gold : S.muted }}>{method.icon}</span>
                    <span style={{ ...S.sans, fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', color: payMethod === method.id ? S.black : S.muted }}>{method.label}</span>
                  </label>
                ))}
              </div>

              {/* Card details */}
              {payMethod === 'card' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                  <div style={{ position: 'relative' }}>
                    <label style={labelStyle}>Card Number</label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      style={{ ...inputStyle, paddingRight: 64 }}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderBottomColor = S.gold)}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderBottomColor = 'rgba(0,0,0,0.2)')}
                    />
                    <div style={{ position: 'absolute', right: 0, bottom: 12, display: 'flex', gap: 8 }}>
                      <span style={{ width: 32, height: 20, backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: 4 }} />
                      <span style={{ width: 32, height: 20, backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: 4 }} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    <div>
                      <label style={labelStyle}>Expiry Date</label>
                      <input type="text" placeholder="MM / YY" style={inputStyle}
                        onFocus={(e) => ((e.target as HTMLElement).style.borderBottomColor = S.gold)}
                        onBlur={(e) => ((e.target as HTMLElement).style.borderBottomColor = 'rgba(0,0,0,0.2)')}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Security Code (CVV)</label>
                      <input type="password" placeholder="•••" style={inputStyle}
                        onFocus={(e) => ((e.target as HTMLElement).style.borderBottomColor = S.gold)}
                        onBlur={(e) => ((e.target as HTMLElement).style.borderBottomColor = 'rgba(0,0,0,0.2)')}
                      />
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', paddingTop: 32, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              {[
                { icon: 'verified_user', label: 'SECURE SSL CONNECTION' },
                { icon: 'encrypted', label: 'ENCRYPTED TRANSACTION' },
                { icon: 'workspace_premium', label: 'AUTHENTICITY GUARANTEED' },
              ].map((badge) => (
                <div key={badge.icon} style={{ display: 'flex', alignItems: 'center', gap: 8, color: S.muted }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{badge.icon}</span>
                  <span style={{ ...S.sans, fontSize: 10, fontWeight: 600, letterSpacing: '0.1em' }}>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Order summary */}
          <aside>
            <div style={{ position: 'sticky', top: 128, padding: 40, backgroundColor: '#fff', boxShadow: '0 12px 32px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
              <h3 style={{ ...S.serif, fontSize: 24, fontWeight: 600, color: S.black, marginBottom: 32 }}>Purchase Summary</h3>

              {/* Product */}
              <div style={{ display: 'flex', gap: 24, marginBottom: 40, paddingBottom: 32, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ width: 96, height: 120, backgroundColor: '#eeeeee', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={WATCH_IMG} alt="Oceanic Deep 42" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ ...S.sans, fontSize: 14, fontWeight: 600, letterSpacing: '0.05em', color: S.black, marginBottom: 4 }}>OCEANIC DEEP 42</h4>
                    <p style={{ ...S.sans, fontSize: 12, color: S.muted }}>Stellar Silver Edition</p>
                  </div>
                  <p style={{ ...S.sans, fontSize: 14, fontWeight: 600, color: S.gold }}>$12,400.00</p>
                </div>
              </div>

              {/* Line items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                {[
                  { label: 'Subtotal', value: '$12,400.00', gold: false },
                  { label: 'Express Logistics', value: 'Complimentary', gold: true },
                  { label: 'Estimated VAT', value: '$992.00', gold: false },
                ].map((row) => (
                  <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', ...S.sans, fontSize: 16, lineHeight: 1.6 }}>
                    <span style={{ color: S.muted }}>{row.label}</span>
                    <span style={{ color: row.gold ? S.gold : S.black, fontWeight: row.gold ? 600 : 400 }}>{row.value}</span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: 24, borderTop: '1px solid rgba(0,0,0,0.1)', marginBottom: 40 }}>
                <span style={{ ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>TOTAL DUE</span>
                <span style={{ ...S.serif, fontSize: 24, fontWeight: 600, color: S.black }}>$13,392.00</span>
              </div>

              <button
                style={{ width: '100%', backgroundColor: S.black, color: '#fff', padding: '24px', ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'background-color 0.5s' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = S.gold)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = S.black)}
              >
                Complete Acquisition
              </button>

              <p style={{ marginTop: 24, textAlign: 'center', ...S.sans, fontSize: 11, color: S.muted, fontStyle: 'italic' }}>
                By clicking above, you agree to our Terms of Heritage and Private Client agreements.
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* Checkout Footer */}
      <footer style={{ backgroundColor: S.black, color: '#f9f9f9', paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ paddingLeft: 80, paddingRight: 80, maxWidth: 1440, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 280 }}>
            <span style={{ ...S.serif, fontSize: 32, fontWeight: 600, color: '#f9f9f9', display: 'block', marginBottom: 24 }}>LUXORA</span>
            <p style={{ ...S.sans, fontSize: 16, color: 'rgba(249,249,249,0.6)', lineHeight: 1.6 }}>The pinnacle of horological excellence and timeless precision since 1892.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 80px' }}>
            {['Privacy Policy', 'Terms of Service', 'Shipping & Returns', 'Contact Us'].map((link) => (
              <a key={link} href="#" style={{ ...S.sans, fontSize: 16, color: 'rgba(249,249,249,0.8)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#ffe088')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(249,249,249,0.8)')}
              >{link}</a>
            ))}
          </div>
        </div>
        <div style={{ paddingLeft: 80, paddingRight: 80, maxWidth: 1440, margin: '80px auto 0', paddingTop: 32, borderTop: '1px solid rgba(249,249,249,0.1)', textAlign: 'center' }}>
          <p style={{ ...S.sans, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(249,249,249,0.4)' }}>© 2024 LUXORA GENÈVE. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
