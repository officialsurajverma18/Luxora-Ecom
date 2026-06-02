import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import logoSrc from '@assets/ChatGPT_Image_Jun_2,_2026,_04_57_21_PM_1780399663886.png';

export type ActiveLink = 'collections' | 'heritage' | 'bespoke' | 'world' | 'none';

interface NavbarProps {
  activeLink?: ActiveLink;
  centered?: boolean;
}

export default function Navbar({ activeLink = 'collections', centered = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'collections', label: 'Collections', href: '/collection' },
    { id: 'heritage', label: 'Heritage', href: '/heritage' },
    { id: 'bespoke', label: 'Bespoke', href: '/bespoke' },
    { id: 'world', label: 'World of Luxora', href: '#' },
  ];

  const linkStyle = (id: string) => ({
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: activeLink === id ? '#735c00' : '#1a1c1c',
    borderBottom: activeLink === id ? '1px solid #735c00' : 'none',
    paddingBottom: activeLink === id ? 2 : 0,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.2s',
    whiteSpace: 'nowrap' as const,
  });

  const icons = (
    <div className="flex items-center" style={{ gap: 24 }}>
      <span className="material-symbols-outlined cursor-pointer hover:opacity-60 transition-opacity" style={{ color: '#000' }}>search</span>
      <span className="material-symbols-outlined cursor-pointer hover:opacity-60 transition-opacity" style={{ color: '#000' }}>shopping_cart</span>
      <span className="material-symbols-outlined cursor-pointer hover:opacity-60 transition-opacity" style={{ color: '#000' }}>person</span>
    </div>
  );

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: 'rgba(249,249,249,0.92)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
        transition: 'box-shadow 0.3s',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 80,
          paddingLeft: 80,
          paddingRight: 80,
          maxWidth: 1440,
          margin: '0 auto',
        }}
      >
        {centered ? (
          /* Centered logo layout (bespoke style) */
          <>
            <div className="hidden md:flex" style={{ gap: 32, flex: 1 }}>
              {navLinks.slice(0, 2).map((link) => (
                <Link key={link.id} href={link.href}>
                  <span style={linkStyle(link.id)}>{link.label}</span>
                </Link>
              ))}
            </div>
            <Link href="/">
              <img
                src={logoSrc}
                alt="Luxora"
                style={{ height: 48, width: 'auto', cursor: 'pointer', objectFit: 'contain' }}
              />
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 32, flex: 1 }}>
              <div className="hidden md:flex" style={{ gap: 32 }}>
                {navLinks.slice(2).map((link) => (
                  <Link key={link.id} href={link.href}>
                    <span style={linkStyle(link.id)}>{link.label}</span>
                  </Link>
                ))}
              </div>
              {icons}
            </div>
          </>
        ) : (
          /* Left logo layout (standard) */
          <>
            <div className="flex items-center" style={{ gap: 48 }}>
              <Link href="/">
                <img
                  src={logoSrc}
                  alt="Luxora"
                  style={{ height: 44, width: 'auto', cursor: 'pointer', objectFit: 'contain' }}
                />
              </Link>
              <div className="hidden md:flex" style={{ gap: 32 }}>
                {navLinks.map((link) => (
                  <Link key={link.id} href={link.href}>
                    <span style={linkStyle(link.id)}>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            {icons}
          </>
        )}
      </div>
    </nav>
  );
}
