import { Link } from 'wouter';
import Footer from '@/components/Footer';
import { useCart } from '@/context/cart-context';

export default function Cart() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const shipping = subtotal > 0 ? 'Complimentary' : '$0.00';
  const vat = subtotal * 0.08;
  const total = subtotal + vat;

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <main className="cart-main" style={{ paddingTop: 88, paddingLeft: 80, paddingRight: 80, paddingBottom: 120 }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <section style={{ textAlign: 'center', paddingTop: 72, paddingBottom: 56 }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#735c00', marginBottom: 18 }}>
              Private Cart
            </p>
            <h1 className="responsive-page-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 700, lineHeight: 1.05, marginBottom: 14 }}>
              Your curated selection
            </h1>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 18, lineHeight: 1.6, color: '#444748', maxWidth: 720, margin: '0 auto' }}>
              Every piece in your cart is presented with the same Luxora atelier standard.
            </p>
          </section>

          <section className="cart-layout" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 40, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {items.length === 0 ? (
                <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', padding: 40, textAlign: 'center' }}>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600, marginBottom: 12 }}>Your cart is empty</h2>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 16, color: '#444748', marginBottom: 24 }}>
                    Start by adding a timepiece from the collection or a product page.
                  </p>
                  <Link href="/collection">
                    <span style={{ display: 'inline-block', background: '#000', color: '#fff', padding: '14px 22px', fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer' }}>
                      Explore Collection
                    </span>
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div className="cart-item" key={item.id} style={{ display: 'grid', gridTemplateColumns: '160px 1fr auto', gap: 24, padding: 24, background: '#fff', border: '1px solid rgba(0,0,0,0.06)' }}>
                    <div style={{ width: 160, aspectRatio: '4 / 5', overflow: 'hidden' }}>
                      <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: item.accent, marginBottom: 10 }}>{item.series}</p>
                      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 600, marginBottom: 8 }}>{item.name}</h2>
                      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 16, color: '#444748', marginBottom: 18 }}>{item.subtitle}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <button type="button" aria-label={`Decrease ${item.name} quantity`} style={{ width: 36, height: 36, border: '1px solid rgba(0,0,0,0.12)', background: '#fff', cursor: 'pointer' }} onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14 }}>{item.quantity}</span>
                        <button type="button" aria-label={`Increase ${item.name} quantity`} style={{ width: 36, height: 36, border: '1px solid rgba(0,0,0,0.12)', background: '#fff', cursor: 'pointer' }} onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 18, fontWeight: 600, marginBottom: 12 }}>{item.priceLabel}</div>
                      <button type="button" aria-label={`Remove ${item.name} from cart`} onClick={() => removeItem(item.id)} style={{ border: 'none', background: 'transparent', fontFamily: 'Montserrat, sans-serif', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#444748', cursor: 'pointer' }}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <aside className="cart-summary" style={{ position: 'sticky', top: 112 }}>
              <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', padding: 32, boxShadow: '0 12px 30px rgba(0,0,0,0.05)' }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600, marginBottom: 24 }}>Order Summary</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                  {[
                    { label: 'Subtotal', value: `$${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` },
                    { label: 'Shipping', value: shipping },
                    { label: 'Estimated VAT', value: `$${vat.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` },
                  ].map((row) => (
                    <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Montserrat, sans-serif', fontSize: 16 }}>
                      <span style={{ color: '#444748' }}>{row.label}</span>
                      <span>{row.value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', paddingTop: 24, borderTop: '1px solid rgba(0,0,0,0.1)', marginBottom: 28 }}>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Total</span>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 600 }}>${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <Link href={items.length > 0 ? '/checkout' : '/collection'}>
                  <span style={{ display: 'block', width: '100%', background: '#000', color: '#fff', textAlign: 'center', padding: '18px 24px', fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16, cursor: 'pointer' }}>
                    {items.length > 0 ? 'Proceed to Checkout' : 'Explore Collection'}
                  </span>
                </Link>
                <button type="button" onClick={clearCart} style={{ width: '100%', background: 'transparent', color: '#000', border: '1px solid rgba(0,0,0,0.12)', padding: '16px 24px', fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16, cursor: 'pointer' }}>
                  Clear Cart
                </button>
                <Link href="/collection">
                  <div style={{ width: '100%', textAlign: 'center', padding: '16px 24px', border: '1px solid rgba(0,0,0,0.12)', fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer' }}>
                    Continue Shopping
                  </div>
                </Link>
              </div>
            </aside>
          </section>
        </div>
      </main>

      <Footer dark={false} />
    </div>
  );
}
