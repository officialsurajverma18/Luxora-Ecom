import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useCart } from '@/context/cart-context';

const logoSrc = '/luxora-logo.png';

export type ActiveLink = 'collections' | 'heritage' | 'bespoke' | 'world' | 'none';

interface NavbarProps {
  activeLink?: ActiveLink;
  centered?: boolean;
  brand?: 'logo' | 'text';
}

export default function Navbar({ activeLink = 'collections', centered = false, brand = 'logo' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { id: 'collections', label: 'Collections', href: '/collection' },
    { id: 'heritage', label: 'Heritage', href: '/heritage' },
    { id: 'bespoke', label: 'Bespoke', href: '/bespoke' },
    { id: 'world', label: 'World of Luxora', href: '/world' },
  ];

  const linkStyle = (id: string): React.CSSProperties => ({
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: activeLink === id ? '#9a7b10' : '#1c1c1c',
    borderBottom: activeLink === id ? '1px solid #c9a63d' : '1px solid transparent',
    paddingBottom: 6,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.2s, border-color 0.2s',
    whiteSpace: 'nowrap',
  });

  const icons = (
    <div className="flex items-center" style={{ gap: 28 }}>
      <Link href="/search" aria-label="Search">
        <span className="material-symbols-outlined cursor-pointer hover:opacity-60 transition-opacity" style={{ color: '#111', fontSize: 24 }}>search</span>
      </Link>
      <Link href="/cart" aria-label="Cart">
        <span style={{ position: 'relative', display: 'inline-flex' }}>
          <span className="material-symbols-outlined cursor-pointer hover:opacity-60 transition-opacity" style={{ color: '#111', fontSize: 24 }}>shopping_cart</span>
          {itemCount > 0 && <span className="nav-cart-count" aria-label={`${itemCount} items in cart`}>{itemCount > 99 ? '99+' : itemCount}</span>}
        </span>
      </Link>
      <Link href="/account" aria-label="Account">
        <span className="material-symbols-outlined cursor-pointer hover:opacity-60 transition-opacity" style={{ color: '#111', fontSize: 24 }}>person</span>
      </Link>
    </div>
  );

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: 'rgba(252,252,252,0.96)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.07)' : 'none',
        transition: 'box-shadow 0.3s, background-color 0.3s',
      }}
    >
      <div
        className="luxora-nav-inner"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 88,
          paddingLeft: 40,
          paddingRight: 40,
          maxWidth: 1440,
          margin: '0 auto',
        }}
      >
        <div className="flex items-center" style={{ gap: 30 }}>
          <Link href="/">
            {brand === 'text' ? (
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  letterSpacing: '0.18em',
                  color: '#1a1c1c',
                  textDecoration: 'none',
                }}
              >
                LUXORA
              </span>
            ) : (
              <img
                src={logoSrc}
                alt="Luxora"
                style={{ height: 54, width: 54, cursor: 'pointer', objectFit: 'contain', display: 'block' }}
              />
            )}
          </Link>

          <div className="hidden lg:flex items-center" style={{ gap: 36, marginLeft: 22 }}>
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href}>
                <span style={linkStyle(link.id)}>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center" style={{ gap: 18 }}>
          {icons}
          <button
            type="button"
            className="nav-menu-button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="nav-mobile-menu" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              <span style={linkStyle(link.id)}>{link.label}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
