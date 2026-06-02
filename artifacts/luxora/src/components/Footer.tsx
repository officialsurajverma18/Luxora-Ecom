interface FooterProps {
  dark?: boolean;
}

export default function Footer({ dark = false }: FooterProps) {
  const bg = dark ? '#000' : '#f9f9f9';
  const textColor = dark ? 'rgba(255,255,255,0.6)' : '#444748';
  const headingColor = dark ? '#fff' : '#000';
  const borderColor = dark ? 'rgba(255,255,255,0.1)' : '#c4c7c7';

  const links = dark
    ? ['Privacy Policy', 'Terms of Service', 'Shipping & Returns', 'Care Guide', 'Contact']
    : ['Privacy Policy', 'Terms of Service', 'Shipping & Returns', 'Contact Us', 'Store Locator'];

  return (
    <footer
      style={{
        backgroundColor: bg,
        borderTop: `1px solid ${borderColor}`,
        paddingTop: 80,
        paddingBottom: 48,
      }}
    >
      <div
        className="flex flex-col items-center mx-auto"
        style={{ paddingLeft: 80, paddingRight: 80, maxWidth: 1440, gap: 32 }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: '0.08em',
            color: headingColor,
          }}
        >
          {dark ? 'LUXORA' : 'LUXORA'}
        </h2>

        <div className="flex flex-wrap justify-center" style={{ gap: '16px 48px' }}>
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="transition-colors duration-200"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 16,
                color: textColor,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = dark ? '#fff' : '#735c00')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = textColor)
              }
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex" style={{ gap: 24 }}>
          <a href="#">
            <span
              className="material-symbols-outlined cursor-pointer transition-colors duration-200"
              style={{ color: textColor }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = dark ? '#e9c349' : '#000')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = textColor)
              }
            >
              public
            </span>
          </a>
          <a href="#">
            <span
              className="material-symbols-outlined cursor-pointer transition-colors duration-200"
              style={{ color: textColor }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = dark ? '#e9c349' : '#000')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = textColor)
              }
            >
              camera_alt
            </span>
          </a>
          <a href="#">
            <span
              className="material-symbols-outlined cursor-pointer transition-colors duration-200"
              style={{ color: textColor }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = dark ? '#e9c349' : '#000')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = textColor)
              }
            >
              play_circle
            </span>
          </a>
        </div>

        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 12,
            color: dark ? 'rgba(255,255,255,0.3)' : 'rgba(68,71,72,0.5)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          © 2024 LUXORA WATCHES. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
