import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyConfig } from '../../data/config';
import Button from '../common/Button';
import WhatsAppButton from '../common/WhatsAppButton';

const navigationLinks = [
  { path: '/about', label: 'About Us' },
  { path: '/manufacturing', label: 'Manufacturing' },
  { path: '/products', label: 'Products' },
  { path: '/gallery', label: 'Media Gallery' },
  { path: '/contact', label: 'Contact Us' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on change route
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 990,
          height: isScrolled ? '70px' : 'var(--header-height)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: isScrolled ? 'var(--bg-primary)' : 'transparent',
          borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo Brand Area (Left side) */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src={companyConfig.imagePaths.logo}
              alt="FILYARN Logo"
              style={{
                height: '42px',
                width: 'auto',
                display: 'block',
                objectFit: 'contain'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }} className="brand-text-wrapper">
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: '700',
                fontSize: '1.1rem',
                letterSpacing: '0.05em',
                lineHeight: 1.1,
                color: 'var(--text-primary)'
              }}>
                FILYARN
              </span>
              <span style={{
                fontSize: '0.65rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}>
                INDUSTRIES
              </span>
            </div>
          </Link>

          {/* Right side container pushing navigation and actions to the right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="navbar-right-menu">
            {/* Desktop Navigation Links */}
            <nav style={{ display: 'flex', alignItems: 'center' }} className="desktop-nav">
              <ul style={{ listStyle: 'none', display: 'flex', gap: '24px', margin: 0, padding: 0 }}>
                {navigationLinks.map((link) => (
                  <li key={link.path} style={{ position: 'relative' }}>
                    <NavLink
                      to={link.path}
                      style={({ isActive }) => ({
                        fontSize: '0.9rem',
                        fontWeight: isActive ? '600' : '500',
                        color: isActive ? 'var(--color-accent)' : 'var(--text-secondary)',
                        letterSpacing: '0.01em',
                        transition: 'color 0.25s ease',
                        padding: '8px 0',
                        display: 'block'
                      })}
                      className="nav-link-item"
                    >
                      {link.label}
                    </NavLink>
                    {pathname === link.path && (
                      <motion.div
                        layoutId="activeIndicator"
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          height: '2px',
                          backgroundColor: 'var(--color-accent)'
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="desktop-ctas">
              <WhatsAppButton text="WhatsApp Enquiry" />
              <a
                href={`tel:${companyConfig.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s ease'
                }}
                className="navbar-tel"
              >
                <Phone size={16} />
                {companyConfig.phone}
              </a>

              {/* Theme Toggle Switch */}
              <button
                onClick={toggleTheme}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  borderRadius: '50%',
                  transition: 'background-color 0.25s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                aria-label="Toggle theme mode"
                className="theme-switcher-btn"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>

              <Button to="/contact" variant="primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                Request a Quote
              </Button>
            </div>
          </div>

          {/* Mobile Menu Action Area */}
          <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="mobile-actions-wrapper">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px'
              }}
              aria-label="Toggle theme mode"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <a
              href={companyConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Enquiry"
              style={{
                color: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12a9.97 9.97 0 0 0 1.524 5.29L2 22l4.897-1.28A9.92 9.92 0 0 0 12.004 22c5.495 0 9.992-4.5 9.992-10S17.499 2 12.004 2zm5.093 14.28c-.22.617-1.285 1.206-1.776 1.293-.446.08-1.03.149-2.984-.667a12.04 12.04 0 0 1-5.123-4.51c-.675-1.11-1.077-2.39-1.077-3.69 0-2.072 1.07-3.11 1.488-3.52.33-.326.68-.42.9-.42h.64c.2 0 .46.03.68.53.25.56.84 2.07.91 2.22.08.15.13.33.03.53-.1.2-.2.32-.36.5-.16.18-.34.4-.48.54-.16.15-.33.32-.14.65.37.62.82 1.21 1.34 1.74a7.87 7.87 0 0 0 2.28 1.41c.32.15.52.12.71-.1.19-.22.84-.98.98-1.32.14-.34.28-.28.49-.2.2.08 1.32.62 1.55.73.22.1.37.16.42.25.06.09.06.52-.16 1.137z" />
              </svg>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                cursor: 'pointer',
                color: 'var(--text-primary)',
                background: 'transparent',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* CSS Rules specifically for desktop/mobile hiding in pure CSS */}
      <style>{`
        .nav-link-item {
          position: relative;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--color-accent);
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        .nav-link-item:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        .nav-link-item:hover {
          color: var(--color-accent) !important;
        }
        
        @media (max-width: 991px) {
          .navbar-right-menu {
            display: none !important;
          }
          .mobile-actions-wrapper {
            display: flex !important;
          }
        }
        @media (max-width: 480px) {
          .brand-text-wrapper {
            display: none !important;
          }
        }
      `}</style>

      {/* Mobile Slide-in Menu Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: 'var(--header-height)',
              left: 0,
              width: '100%',
              height: 'calc(100vh - var(--header-height))',
              backgroundColor: 'var(--bg-secondary)',
              zIndex: 980,
              borderTop: '1px solid var(--border-light)',
              display: 'flex',
              flexDirection: 'column',
              padding: '40px 24px'
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '24px', padding: 0, margin: '0 0 40px 0' }}>
              {navigationLinks.map((link, idx) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    style={({ isActive }) => ({
                      fontSize: '1.25rem',
                      fontWeight: isActive ? '600' : '400',
                      color: isActive ? 'var(--color-accent)' : 'var(--text-primary)',
                      display: 'block',
                      padding: '6px 0'
                    })}
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '20px', borderBottom: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>Quick Contact</span>
                <a href={`tel:${companyConfig.phone}`} style={{ fontSize: '1.1rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
                  <Phone size={18} style={{ color: 'var(--color-accent)' }} />
                  {companyConfig.phone}
                </a>
                <WhatsAppButton text="Chat on WhatsApp" />
              </div>
              <Button to="/contact" variant="primary" style={{ width: '100%', padding: '14px' }}>
                Request a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
