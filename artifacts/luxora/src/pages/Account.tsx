import Footer from '@/components/Footer';

const orders = [
  { id: 'LX-2048', date: '12 Jun 2026', item: 'Oceanic Deep 42', status: 'Shipped' },
  { id: 'LX-1984', date: '02 May 2026', item: 'Elysium Gold', status: 'Delivered' },
];

const saved = [
  { name: 'Chronos Titanium', price: '$15,200' },
  { name: 'Grand Complication', price: '$145,000' },
  { name: 'Zenith Minimalist', price: '$32,000' },
];

export default function Account() {
  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <main style={{ paddingTop: 88, paddingLeft: 80, paddingRight: 80, paddingBottom: 120 }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <section style={{ paddingTop: 72, paddingBottom: 56, display: 'grid', gridTemplateColumns: '1fr 360px', gap: 40, alignItems: 'end' }}>
            <div>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#735c00', marginBottom: 18 }}>
                Private Client
              </p>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 700, lineHeight: 1.05, marginBottom: 16 }}>
                Your Luxora account
              </h1>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 18, lineHeight: 1.6, color: '#444748', maxWidth: 760 }}>
                Manage orders, saved timepieces, and your private client details in one refined space.
              </p>
            </div>
            <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', padding: 24 }}>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#735c00', marginBottom: 14 }}>
                Client Since
              </p>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600, marginBottom: 8 }}>2019</div>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, color: '#444748' }}>Geneva Private Client Circle</p>
            </div>
          </section>

          <section style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 40, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', padding: 32 }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600, marginBottom: 24 }}>Profile details</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  {[
                    { label: 'Name', value: 'Julian Sterling' },
                    { label: 'Email', value: 'julian@luxora.watch' },
                    { label: 'Phone', value: '+41 22 731 65 00' },
                    { label: 'Preferred Boutique', value: 'Geneva Flagship' },
                  ].map((field) => (
                    <div key={field.label}>
                      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#735c00', marginBottom: 10 }}>{field.label}</p>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 16 }}>{field.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', padding: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 24 }}>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600 }}>Recent orders</h2>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#735c00' }}>View all</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {orders.map((order) => (
                    <div key={order.id} style={{ display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: 18, paddingBottom: 18, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                      <div>
                        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#735c00', marginBottom: 8 }}>{order.id}</p>
                        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#444748' }}>{order.date}</p>
                      </div>
                      <div>
                        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600 }}>{order.item}</p>
                      </div>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#444748' }}>{order.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div style={{ background: '#111', color: '#fff', padding: 32 }}>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 14 }}>
                  Concierge
                </p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600, marginBottom: 16 }}>Private support</h2>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: 24 }}>
                  Your concierge is available for appointments, service inquiries, and private viewings.
                </p>
                <button style={{ width: '100%', background: '#fff', color: '#111', border: 'none', padding: '16px 20px', fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  Contact Concierge
                </button>
              </div>

              <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', padding: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 24 }}>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600 }}>Saved pieces</h2>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#735c00' }}>3 Items</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {saved.map((item) => (
                    <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, paddingBottom: 16, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                      <div>
                        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600, marginBottom: 6 }}>{item.name}</p>
                        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, color: '#444748' }}>In your wishlist</p>
                      </div>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, color: '#735c00' }}>{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>

      <Footer dark={false} />
    </div>
  );
}
