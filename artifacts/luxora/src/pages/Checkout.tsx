import { useState } from 'react';
import { Link } from 'wouter';
import { useCart } from '@/context/cart-context';

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
  const { items, subtotal } = useCart();
  const vat = subtotal * 0.08;
  const total = subtotal + vat;

  if (items.length === 0) {
    return (
      <main style={{ minHeight: '70vh', padding: '180px 24px 120px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
        <h1 style={{ ...S.serif, fontSize: 48, fontWeight: 600, marginBottom: 16 }}>Your selection is empty</h1>
        <p style={{ ...S.sans, color: S.muted, marginBottom: 28 }}>Add a timepiece before continuing to secure checkout.</p>
        <Link href="/collection">
          <span style={{ display: 'inline-block', background: S.black, color: '#fff', padding: '16px 24px', ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer' }}>Explore Collection</span>
        </Link>
      </main>
    );
  }

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <main style={{ paddingTop: 88, paddingBottom: 120, paddingLeft: 80, paddingRight: 80, maxWidth: 1440, margin: '0 auto' }}>
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

              <div style={{ padding: 24, backgroundColor: '#f3f3f4', border: '1px solid rgba(115,92,0,0.18)' }}>
                <p style={{ ...S.sans, fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: S.gold, marginBottom: 10 }}>
                  Secure payment handoff
                </p>
                <p style={{ ...S.sans, fontSize: 14, lineHeight: 1.7, color: S.muted }}>
                  Payment details are collected only by our certified payment partner after your order request. Luxora never stores card numbers or security codes in this site.
                </p>
              </div>
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40, paddingBottom: 32, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                {items.map((item) => (
                  <div key={item.id} style={{ display: 'flex', gap: 16 }}>
                    <div style={{ width: 72, height: 88, backgroundColor: '#eeeeee', overflow: 'hidden', flexShrink: 0 }}>
                      <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <h4 style={{ ...S.sans, fontSize: 14, fontWeight: 600, letterSpacing: '0.05em', color: S.black, marginBottom: 4 }}>{item.name}</h4>
                        <p style={{ ...S.sans, fontSize: 12, color: S.muted }}>Qty {item.quantity} · {item.subtitle}</p>
                      </div>
                      <p style={{ ...S.sans, fontSize: 14, fontWeight: 600, color: S.gold }}>${(item.price * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Line items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                {[
                  { label: 'Subtotal', value: `$${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, gold: false },
                  { label: 'Express Logistics', value: 'Complimentary', gold: true },
                  { label: 'Estimated VAT', value: `$${vat.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, gold: false },
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
                <span style={{ ...S.serif, fontSize: 24, fontWeight: 600, color: S.black }}>${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
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
