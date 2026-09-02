import { Link } from 'wouter';
import Footer from '@/components/Footer';

const results = [
  {
    id: 'oceanic-deep-42',
    name: 'Oceanic Deep 42',
    category: 'Oceanic Series',
    price: '$12,400',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCStQPNI2t5Epvsk3aciWVm4zO0RbI-qTWQSNLFLpACHoO-CFJhw_H10uxzYhWtNKniYCW1Sdzhs2i3_HqzEuI4n5rw35n0guNlzGWndmHEQcwN_HX0P6hl0dXc05WSupiVa4Q8SMIbwq3vcAcHgamaTE9QdS8PoPdsveedmJi3zc0JbLzcvCpwv3Qsw_VBdCsRpwJPqlkHfDUmngW3n5GlKqb7BAgmjK2R26OfcJxeR-bYH0YJvY6uSwCwBh53kxKq1jHao2S9rss',
  },
  {
    id: 'elysium-gold',
    name: 'Elysium Gold',
    category: 'Heritage Series',
    price: '$28,900',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ6gOeBlk7Z7rEvNDL0-Ak2ugZl6D4BD16mWVYksx5bDfVq5nBZL_dCLBNDrJiLNtqNn71NPPBt2AYUj2WjDgliZ75BTiPPc8Cz72wRrkE-YGI4WkUTNxgwS2i6XXgdflNLwoyg0mAEvaagBAbIuMuvGeApopXI6IcKpH7SYn89OeCxHHGk2-oxaRzTDqLy7Dd10DopiMRgfvXLMRyo6N9cKHh7X1MKQTwP53tun4FmxrPwOcekloT1eDjqmmKBDOH4YA6E6HeEvI',
  },
  {
    id: 'admiral-navy',
    name: 'Admiral Navy',
    category: 'Oceanic Series',
    price: '$9,800',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPrPB58MQhnCqR37m0xqJWHHWpbk4CT-DFo5oVzMphtCgYLyfwi1IDS_mrEUFCiShkS1NgSf_kx8HRe_ag9chwZ6IKl5ODOYxFpVG0wHgSpiRpFu0MnfZ3GJAAXpKiF9CENfEXYIKYGfGtlgEvK9-7oDnbBI5Q8f0iAVaWKHvPiZRjDoBYp-ifh11Xat3YYdhPwnxRNFl-c_QT-3HX7g5GwulpYYIIaQtSBxqIsBZ_GlPQaeRJR2rCc4nLQQKte_RxLOFspNrNpP0',
  },
];

export default function Search() {
  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <main style={{ paddingTop: 88, paddingLeft: 80, paddingRight: 80 }}>
        <section style={{ maxWidth: 1440, margin: '0 auto', paddingTop: 80, paddingBottom: 56 }}>
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#735c00', marginBottom: 18 }}>
              Search The Maison
            </p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 700, lineHeight: 1.05, marginBottom: 20 }}>
              Search the collection
            </h1>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 18, lineHeight: 1.6, color: '#444748', marginBottom: 40 }}>
              Explore watches, stories, and services through Luxora’s refined catalog.
            </p>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, maxWidth: 720, margin: '0 auto' }}>
              <input
                type="search"
                placeholder="Search watches, collections, articles..."
                style={{
                  width: '100%',
                  border: 'none',
                  borderBottom: '1px solid rgba(0,0,0,0.25)',
                  background: 'transparent',
                  padding: '18px 0',
                  outline: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 16,
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  border: 'none',
                  padding: '18px 32px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Search
              </button>
            </form>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
              {['Oceanic Series', 'Heritage Series', 'Bespoke', 'Limited Edition'].map((chip) => (
                <span
                  key={chip}
                  style={{
                    border: '1px solid rgba(0,0,0,0.12)',
                    backgroundColor: '#fff',
                    padding: '10px 14px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 1440, margin: '0 auto', paddingBottom: 120 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 28 }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 600, marginBottom: 8 }}>Trending results</h2>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, color: '#444748' }}>Curated recommendations based on the Oceanic aesthetic.</p>
            </div>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#735c00' }}>12 Results</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {results.map((item) => (
              <Link key={item.id} href={`/product/${item.id}`}>
                <div style={{ cursor: 'pointer', backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                  <div style={{ aspectRatio: '4 / 5', overflow: 'hidden' }}>
                    <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 24 }}>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#735c00', marginBottom: 10 }}>{item.category}</p>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, marginBottom: 8 }}>{item.name}</h3>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 16, color: '#444748' }}>{item.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer dark={false} />
    </div>
  );
}
