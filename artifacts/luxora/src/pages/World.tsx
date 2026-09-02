import Navbar from '@/components/Navbar';

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDE_L0c6jd7cQePfOlo-LKAW7INTTHjGXEMFInOlYLbzwggOSSiDU68V7ghul932P05uJtTrcCrcd8yn9TmUcC_E_4P6PJLk_D2QJt-XHN2-F8eTkIKiDHutfhQpDK_Yk7WinNK-tEdPVX6sge2bWHnLK6kk76Ad5ErXp5oStH9b--Wt84abB_CBikFMrBSLFvlXjbjXQcDLVX_-7qVYa2SZkU4oWgZfCKuk8OEGvWzcCCNuShBBI-K3OBA-v6cXkiTu7X8m-YlP40';
const POL0_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBIfp10cYsw7zjZffWOXtNRPTNE1WtYuc8eiBynOjoqeJGW9MW77rM5r5Hj75IR8eXb-DuAVWuum6s1m6sLKJyG7J5szk2ZNP_VLYfhrXQqeNoiLlEQlwB6C5EjjRalVTxsFuLvdDtvlDKk8Yp52qSk-YhNcwevXMjBC24AApqb175R2uHbix9vQkxWuqQOPqyVUNPcuMGK6ml-3WsyVuIfrpDtSeUFvdnT10RgmwMgBWzgjttGg6jbRoYmH1NOjf8xA_UNhf0dqMg';
const RALLY_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD9CSQ4QGhTiEDdQhN9_3TFg3hlBC6ddc11vGmREjFS84tqt1rV4m132O8VaOKTSko4QgjseewEvbucebcfXoTccWDej_hnzKt8hROuybV1dl4YBMCF0HE9rxw-3J7--zPa6Dxb-6xmKj0sPCu4Vsw0tP3ExxMLO0w-_qMhzYAByFAG8BaEECdju7z9jXBhgYx4ZiyMEnBjqO5Y7BvnQt0UOSVaHeqLinmHVYujXeOKPjWpGj49aKQcP9UOpRff-TtInU-qsHMMFYQ';
const AMALFI_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDjmp9T8o80xm3nUCXlRidRyt2w50bTddTE5nDWZzpriZQDNMFjsmI8xICXbWN9AdmU_lmpZ0d6vABpGv6Lk2IkETDTD3x-8UMqYxlAwPxQ8GP2QqdWJJ6Ed0z5lZU7go_c_5Y611GgVG6UbI75c0e7ht29AcyNqd5jz7liet6vvbGsiMOezmV3yopONJDt8w7rdKLN2XGmpDkyvNhn1GRq91ddEnfd8kHWVAHDo2PH7S0wi8TWqgRMxsSJSIcIBgk1GN1rxcIBsVE';
const GALA_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDdIN5gek0BJaldAhJqZAQvTDw9mrhwbN0qZUGNxRpH_pCnpGpa9963gJnSDGeSw26zbcZ5W1fvI28I5AIz56pkZdTj6o8Us7vlnc2nVORE3yFjxb2gnL_9zD2uz2pQHMezL_T_YXmd7BU_7vmJHHiQOE0FORPjQzlyzVKAfZofh6HLGxx5_5fTwWm0SImeT47T5gidYFUji2qSvEb18EYmQbgkhnnRkolbkclgmVo_K3c2cZmCen0PmcFa1oXDHwR-0h_p4Ko9qhU';
const JOURNAL1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCuYZqT9I0YyQybDlxRyj1810y6WLMczWTVBMGK438x3oa-lAw-uC-64C42a9jnRXCM_Pty_qMMg2zB3d-i3gP8V2PvEPvERXtuErp8SkfnLAAOMuauEtRNkfiePRWNUvgN4SQEmdDQXIw_ue5pg0L41ediFiTvnkdgjdQQXBrh5xfUpmvTeZ2NQb3CsjspvxtFQFThLfjs09d5YonLrvJY-sf5-Ue-aIod1LogoBKXYwyBsqPgwToGfkYw_USXPcy-RMLC7k-MWNA';
const JOURNAL2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDJYKa8OKRiJrMkqat1O-GYYc_HcW7V6TVGDxovIBpvQp_7upW6VQaP0xaCU4p-_4GPJwgkLyEGHjMZ1xjlNHLK5PZQRqde2banCh0sWoFkG-kuMNHX8rMqwS2pnx5UENVP2OTsCVhcsI8jv93y46U5XvD_skXtWLlWBUq_lTg_g26n5qW8UdwnxtzkLGBqUStz_GxDSNMad1BlxqVlZXwejApCPwD9X7Ou89lqRfbD36auIDkX7CDdl19sjLB6DnbgJ9QOHCQlVS4';
const JOURNAL3 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCZh7BZgpEhxxlr-RRgFquMFddkDufRro3HGnKgdZWtIi3_JToQsrtd_BS-wMXfYAWJqfP3XGTsI3lyDLaHHr9U-HFCdGLAngM866-NRdnEfIfrbAEu8x3W2L6SBHgvE5GRAjlhuMYFNbJP96rjcDZr22hzo873S51dGuMUrZBljUfN-2n_VccR_L75EdU8KjX-v_bIW9UhP0KJtqgtmlFR05WDHvZsT-A8NROx5aMWAOxiOvBf4YiWqBqGlwrLjrTZx56ygYTuWQ0';
const WILD1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA5Nwo73JLldHoV8C6lsnZWFvr7bEGYYRBBhgtj8nSmiS1yDxrBMnQXyPxNbLBk2Ui5rtRUjnj2QG_-0d7g6Ns_TaN7NLGdU4WEh48jtjilgmXjRwKWZ6TlNcJ7o-UuCIuXZNTEhIlnPCOmWRT5RzfD7hpg5pvlLFcaE1L2vbiWJv_0thEGhSrgNFxKusA71NHoR2BfBpkaKXZCnDnHahxU3KxV3wdAkyoDkGFA1FgbsMrLT4C-1c-wpPCN0En-g6xPOVwf270lVco';
const WILD2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB0C4OSXSxzp1qHJBattAPbIa2Zb6VtdhnWz_OzqcmRpRiZvKB4HU_J3CojdX_h3affqwFtvTYNbbLBJlTVFILyAbwKEKQi9wYBruo_5i9RYaxkftlQ1sy2T5DLO0RLyCWyCJ1zg83CghSqUlxjf-UhbWu5hdOnMot3d_0a48s1PwmG3q2RwDQOn4l3LC0zO02ZuKKXHSJNgC7xSlZXU3C-WIljKwcfErc4dRiZ6jFtApGh2i6ZVWkzi2ES78vCapS7sjM0wc-emGE';
const WILD3 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCQfwT81S9KHGe7c0hjHRl8u154y786S6ah0w7Z0CLeBbrbDKdx2YxQRe1LRzOtxP7Ul5ASznB2FJcchIKuyZrktgmosV4GTWpmiVLxqruecPbtEWAGdLd7jPMrLb5_PgtKDjo8PWMshApm99j39dYlnznMZsbXjzQDBmNJ1pWdaR6bXQcRat6kzghnk_12tirMnCjdQ1nURJG-tO9a4jm0Fchh1BBvPDRC0CnuTp6P4S7dzgGoVah9nfU6t_Ufb0QeeUZcv_N75G8';
const WILD4 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDiy7G93OGTsragDosYE78lyD_-R-lJymjRZb2M6SeuFwVf8NmPbmloksRZOxFnm0VCQBfn_gjmaYE4GuW9svmgm2_nafAwq7waLRE-m6DStRR_rnri95gxVQ_aC5kYhcOrncEKP-FyhWevrm1_y00CxhqDhk8Wjmr3p17kFyW_jegb1-83v8QdduXqCxkO61Ar3UKuy_1eOofpd4QsuVAxZMOCU1P_f5bqMf0OZ2R8wJ7W5mp0rCr6_TxY9V8T7sv-wgLjv08fkU4';

const articles = [
  {
    img: JOURNAL1,
    meta: 'Horology · 12 Min Read',
    title: "The Art of the Complication: A Collector's Guide",
    body:
      'Understanding the intricate mechanics that define the soul of a Luxora timepiece.',
  },
  {
    img: JOURNAL2,
    meta: 'Travel · 8 Min Read',
    title: 'The Uncharted: Hidden Sanctuaries for the Soul',
    body:
      'A curated list of global destinations where time slows down to a rhythmic crawl.',
  },
  {
    img: JOURNAL3,
    meta: 'Heritage · 15 Min Read',
    title: 'Generations of Precision: The Luxora Archive',
    body:
      'Exploring the blueprints and personal journals from our founding atelier.',
  },
];

const events = [
  { img: POL0_IMG, tag: 'Partnership', title: 'The Heritage Polo Cup', wide: true, h: 500 },
  { img: RALLY_IMG, tag: 'Motorsport', title: 'Riviera Rally', wide: false, h: 500 },
  { img: AMALFI_IMG, tag: 'Retreat', title: 'Amalfi Private Preview', wide: false, h: 400 },
  { img: GALA_IMG, tag: 'Society', title: "The 2024 Collectors' Gala", wide: true, h: 400 },
];

export default function World() {
  return (
    <div
      className="light"
      style={{
        backgroundColor: '#f9f9f9',
        color: '#1a1c1c',
        fontFamily: 'Montserrat, sans-serif',
        minHeight: '100vh',
      }}
    >
      <style>{`
        .world-grid {
          max-width: 1440px;
          margin: 0 auto;
        }
        .hero-gradient {
          background: linear-gradient(to bottom, rgba(26, 28, 28, 0.4), rgba(26, 28, 28, 0.1));
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Navbar activeLink="world" />

      <main style={{ paddingTop: 88 }}>
        <section style={{ position: 'relative', height: 921, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img
              src={HERO_IMG}
              alt="A cinematic wide shot of a luxury sailing yacht gliding through the crystal clear azure waters of the Mediterranean during the golden hour."
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="hero-gradient" style={{ position: 'absolute', inset: 0 }} />
          </div>
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              maxWidth: 1440,
              margin: '0 auto',
              width: '100%',
              paddingLeft: 80,
              paddingRight: 80,
              color: '#fff',
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                marginBottom: 24,
                display: 'block',
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              Experience the Extraordinary
            </span>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 64,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                fontWeight: 700,
                maxWidth: 800,
                marginBottom: 32,
              }}
            >
              Beyond Time: The World of Luxora
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                maxWidth: 480,
                marginBottom: 48,
                color: 'rgba(255,255,255,0.9)',
              }}
            >
              An exclusive glimpse into the partnerships, events, and culture that define the Luxora lifestyle.
            </p>
            <button
              style={{
                backgroundColor: '#fff',
                color: '#1a1c1c',
                border: 'none',
                padding: '18px 48px',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
            >
              Explore the Journal
            </button>
          </div>
        </section>

        <section style={{ backgroundColor: '#f9f9f9', padding: '120px 80px' }}>
          <div className="world-grid">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, marginBottom: 64 }}>
              <div style={{ maxWidth: 560 }}>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 32,
                    fontWeight: 600,
                    lineHeight: 1.3,
                    textTransform: 'uppercase',
                    color: '#1a1c1c',
                    marginBottom: 16,
                  }}
                >
                  The Luxora Calendar
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#444748' }}>
                  Access the inaccessible. From Monaco to St. Moritz, our community converges where heritage meets high-performance.
                </p>
              </div>
              <a
                href="#"
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#1a1c1c',
                  textDecoration: 'none',
                  borderBottom: '1px solid #1a1c1c',
                  paddingBottom: 4,
                  whiteSpace: 'nowrap',
                }}
              >
                View All Events
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
              {events.map((item) => (
                <EventCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#f3f3f4', padding: '120px 80px' }}>
          <div className="world-grid">
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#735c00',
                  display: 'block',
                  marginBottom: 16,
                }}
              >
                Curated Stories
              </span>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 32,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                The Journal
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
              {articles.map((article) => (
                <article key={article.title} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ aspectRatio: '4 / 5', overflow: 'hidden', marginBottom: 32 }}>
                    <img
                      src={article.img}
                      alt={article.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      color: '#838484',
                      marginBottom: 12,
                    }}
                  >
                    {article.meta}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 24,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      marginBottom: 16,
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: '#444748',
                      marginBottom: 24,
                      flex: 1,
                    }}
                  >
                    {article.body}
                  </p>
                  <a
                    href="#"
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#1a1c1c',
                      textDecoration: 'none',
                    }}
                  >
                    Read Article +
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#f9f9f9', padding: '120px 0', overflow: 'hidden' }}>
          <div className="world-grid" style={{ paddingLeft: 80, paddingRight: 80 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 64 }}>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 32,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                Seen in the Wild
              </h2>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={{ fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#444748' }}>
                  Join the Conversation
                </span>
                <span style={{ fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>
                  #WorldOfLuxora
                </span>
              </div>
            </div>
          </div>

          <div
            className="hide-scrollbar"
            style={{
              display: 'flex',
              gap: 16,
              paddingLeft: 80,
              paddingRight: 80,
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
            }}
          >
            {[WILD1, WILD2, WILD3, WILD4].map((img, index) => (
              <div
                key={index}
                style={{
                  flex: '0 0 auto',
                  width: 450,
                  aspectRatio: '1 / 1',
                  scrollSnapAlign: 'start',
                  position: 'relative',
                }}
              >
                <img
                  src={img}
                  alt="Seen in the wild"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.2s',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ color: '#fff', fontSize: 36 }}>
                    favorite
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '120px 80px', borderTop: '1px solid rgba(196,199,199,0.3)' }}>
          <div
            className="world-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 64,
              alignItems: 'center',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 32,
                  fontWeight: 600,
                  marginBottom: 24,
                }}
              >
                Enter the Inner Circle
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: '#444748', maxWidth: 420 }}>
                Join the Luxora community for invitations to private events, early access to limited editions, and curated horological insights.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #c4c7c7',
                  padding: '16px 0',
                  outline: 'none',
                  fontSize: 12,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  border: 'none',
                  padding: '16px 24px',
                  maxWidth: 220,
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                Request Invitation
              </button>
            </form>
          </div>
        </section>

        <footer style={{ padding: '120px 80px 48px', borderTop: '1px solid #c4c7c7', background: '#f9f9f9' }}>
          <div className="world-grid" style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 24,
                letterSpacing: '0.18em',
                marginBottom: 40,
              }}
            >
              LUXORA
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32, marginBottom: 24 }}>
              {['Privacy Policy', 'Terms of Service', 'Shipping & Returns', 'Contact Us', 'Store Locator'].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{ fontSize: 12, color: '#444748', textDecoration: 'none' }}
                >
                  {item}
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 48 }}>
              <span className="material-symbols-outlined" style={{ color: '#444748' }}>
                public
              </span>
              <span className="material-symbols-outlined" style={{ color: '#444748' }}>
                camera_alt
              </span>
              <span className="material-symbols-outlined" style={{ color: '#444748' }}>
                play_circle
              </span>
            </div>
            <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#838484' }}>
              (c) 2024 Luxora Watches. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function EventCard({
  img,
  tag,
  title,
  wide,
  h,
}: {
  img: string;
  tag: string;
  title: string;
  wide: boolean;
  h: number;
}) {
  const span = wide ? 8 : 4;
  return (
    <div
      style={{
        gridColumn: `span ${span}`,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        height: h,
      }}
    >
      <img
        src={img}
        alt={title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s' }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
        }}
      />
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)', transition: 'background-color 0.2s' }} />
      <div style={{ position: 'absolute', bottom: 40, left: 40, color: '#fff' }}>
        <span
          style={{
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            backgroundColor: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            padding: '4px 12px',
            display: 'inline-block',
            marginBottom: 16,
          }}
        >
          {tag}
        </span>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, lineHeight: 1.2 }}>
          {title}
        </h3>
      </div>
    </div>
  );
}
