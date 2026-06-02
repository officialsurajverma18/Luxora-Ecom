import { useState, useEffect } from 'react';
import { Link } from 'wouter';

interface NavbarProps {
  activeLink?: 'collections' | 'heritage' | 'bespoke' | 'world';
  darkFooter?: boolean;
}

export default function Navbar({ activeLink = 'collections' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'collections', label: 'Collections', href: '/collection' },
    { id: 'heritage', label: 'Heritage', href: '#' },
    { id: 'bespoke', label: 'Bespoke', href: '#' },
    { id: 'world', label: 'World of Luxora', href: '#' },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b transition-shadow duration-300"
      style={{
        backgroundColor: 'rgba(249,249,249,0.92)',
        borderBottomColor: 'rgba(0,0,0,0.08)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div
        className="flex justify-between items-center h-20 mx-auto"
        style={{ paddingLeft: 80, paddingRight: 80, maxWidth: 1440 }}
      >
        <div className="flex items-center" style={{ gap: 48 }}>
          <Link href="/">
            <span
              className="cursor-pointer tracking-widest select-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 24,
                fontWeight: 600,
                color: '#000',
                letterSpacing: '0.15em',
              }}
            >
              LUXORA
            </span>
          </Link>
          <div className="hidden md:flex" style={{ gap: 32 }}>
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <Link key={link.id} href={link.href}>
                  <span
                    className="cursor-pointer transition-colors duration-200"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: isActive ? '#735c00' : '#1a1c1c',
                      borderBottom: isActive ? '1px solid #735c00' : 'none',
                      paddingBottom: isActive ? 2 : 0,
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center" style={{ gap: 24 }}>
          <span
            className="material-symbols-outlined cursor-pointer hover:opacity-60 transition-opacity"
            style={{ color: '#000' }}
          >
            search
          </span>
          <span
            className="material-symbols-outlined cursor-pointer hover:opacity-60 transition-opacity"
            style={{ color: '#000' }}
          >
            shopping_cart
          </span>
          <span
            className="material-symbols-outlined cursor-pointer hover:opacity-60 transition-opacity"
            style={{ color: '#000' }}
          >
            person
          </span>
        </div>
      </div>
    </nav>
  );
}
