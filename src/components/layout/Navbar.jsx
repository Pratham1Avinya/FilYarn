import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sun, Moon, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyConfig } from '../../data/config';
import Button from '../common/Button';

// Exact navigation items with Dealer dropdown
const navigationLinks = [
  { path: '/about', label: 'About Us' },
  { path: '/manufacturing', label: 'Manufacturing' },
  { path: '/products', label: 'Products' },
  {
    label: 'Dealer',
    isDropdown: true,
    children: [
      { label: 'Dealer Network', path: '/dealer-network' },
      { label: 'Dealership Inquiry', path: '/dealership-inquiry' }
    ]
  },
  { path: '/gallery', label: 'Media Gallery' },
  { path: '/contact', label: 'Contact Us' }
];

// Authentic WhatsApp SVG Brand Icon
const WhatsAppIcon = ({ size = 16, color = '#25D366' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    style={{ display: 'block', flexShrink: 0 }}
    aria-hidden="true"
  >
    <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12a9.97 9.97 0 0 0 1.524 5.29L2 22l4.897-1.28A9.92 9.92 0 0 0 12.004 22c5.495 0 9.992-4.5 9.992-10S17.499 2 12.004 2zm5.093 14.28c-.22.617-1.285 1.206-1.776 1.293-.446.08-1.03.149-2.984-.667a12.04 12.04 0 0 1-5.123-4.51c-.675-1.11-1.077-2.39-1.077-3.69 0-2.072 1.07-3.11 1.488-3.52.33-.326.68-.42.9-.42h.64c.2 0 .46.03.68.53.25.56.84 2.07.91 2.22.08.15.13.33.03.53-.1.2-.2.32-.36.5-.16.18-.34.4-.48.54-.16.15-.33.32-.14.65.37.62.82 1.21 1.34 1.74a7.87 7.87 0 0 0 2.28 1.41c.32.15.52.12.71-.1.19-.22.84-.98.98-1.32.14-.34.28-.28.49-.2.2.08 1.32.62 1.55.73.22.1.37.16.42.25.06.09.06.52-.16 1.137z" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDealerOpen, setIsDealerOpen] = useState(false);
  const [mobileDealerOpen, setMobileDealerOpen] = useState(false);
  const dealerHoverTimeout = useRef(null);
  const { pathname } = useLocation();

  // Preserved Theme State & Toggle
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

  // Scroll listener with threshold ~50px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setIsDealerOpen(false);
  }, [pathname]);

  // Hover handlers with debounce for smooth dropdown behavior
  const handleDealerMouseEnter = () => {
    if (dealerHoverTimeout.current) clearTimeout(dealerHoverTimeout.current);
    setIsDealerOpen(true);
  };

  const handleDealerMouseLeave = () => {
    dealerHoverTimeout.current = setTimeout(() => {
      setIsDealerOpen(false);
    }, 140);
  };

  return (
    <>
      {/* 
        PREMIUM FLOATING NAVIGATION SYSTEM
        Evenly distributed, zero-collision layout:
        Logo (Left) | Centered Navigation Links (Center) | Clear CTAs (Right)
      */}
      <header
        className={`filyarn-nav-fixed-wrap ${isScrolled ? 'scrolled' : 'at-top'}`}
        role="banner"
      >
        <div className={`filyarn-nav-capsule ${isScrolled ? 'scrolled' : 'at-top'}`}>
          {/* Ambient Glow Halo */}
          <div className="nav-capsule-halo" aria-hidden="true" />

          {/* Left: Brand Logo */}
          <Link to="/" className="navbar-brand-link" aria-label="Filyarn Industries Home">
            <img
              src={companyConfig.imagePaths.logo}
              alt="FILYARN Logo"
              className="navbar-brand-logo-img"
            />
            <div className="brand-text-wrapper">
              <span className="brand-name-title">FILYARN</span>
              <span className="brand-name-subtitle">INDUSTRIES</span>
            </div>
          </Link>

          {/* 
            Center: Desktop Navigation Links with Dealer Hover Dropdown
          */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="desktop-nav-list">
              {navigationLinks.map((link) => {
                if (link.isDropdown) {
                  return (
                    <li
                      key={link.label}
                      className="desktop-nav-item nav-dropdown-wrapper"
                      onMouseEnter={handleDealerMouseEnter}
                      onMouseLeave={handleDealerMouseLeave}
                    >
                      <button
                        type="button"
                        className={`nav-link-item nav-dropdown-trigger ${isDealerOpen ? 'active-dropdown' : ''}`}
                        aria-expanded={isDealerOpen}
                        aria-haspopup="true"
                      >
                        <span>{link.label}</span>
                      </button>

                      {/* Submenu Dropdown Card */}
                      <AnimatePresence>
                        {isDealerOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.96 }}
                            transition={{ duration: 0.16, ease: 'easeOut' }}
                            className="nav-hover-dropdown-card"
                            onMouseEnter={handleDealerMouseEnter}
                            onMouseLeave={handleDealerMouseLeave}
                          >
                            <div className="nav-dropdown-inner">
                              {link.children.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  to={subItem.path}
                                  onClick={() => setIsDealerOpen(false)}
                                  className="nav-submenu-link"
                                >
                                  <span className="submenu-link-text">{subItem.label}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
                  <li key={link.path} className="desktop-nav-item">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `nav-link-item ${isActive ? 'active-nav-link' : ''}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Desktop Actions & CTAs */}
          <div className="desktop-ctas">
            {/* WhatsApp Enquiry */}
            <a
              href={companyConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-whatsapp-badge"
              aria-label="WhatsApp Enquiry"
            >
              <WhatsAppIcon size={16} color="#25D366" />
              <span className="whatsapp-text">WhatsApp Enquiry</span>
            </a>

            {/* Phone */}
            <a
              href={`tel:${companyConfig.phone}`}
              className="navbar-tel-link"
              aria-label={`Call us at ${companyConfig.phone}`}
            >
              <Phone size={14} style={{ flexShrink: 0 }} />
              <span className="phone-number-text">{companyConfig.phone}</span>
            </a>

            {/* Dark / Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme mode"
              className="navbar-theme-btn"
              type="button"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Request a Quote Button */}
            <Button
              to="/contact"
              variant="primary"
              className="navbar-quote-btn"
            >
              <span>Request a Quote</span>
              <ArrowRight size={14} />
            </Button>
          </div>

          {/* Mobile & Tablet Action Controls */}
          <div className="mobile-actions-wrapper">
            {/* Theme Toggle Button on Mobile */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme mode"
              className="navbar-theme-btn mobile-theme-btn"
              type="button"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* WhatsApp Icon Link on Mobile */}
            <a
              href={companyConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Enquiry"
              className="mobile-whatsapp-btn"
            >
              <WhatsAppIcon size={17} color="#25D366" />
            </a>

            {/* Hamburger / Close Drawer Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="mobile-hamburger-btn"
              type="button"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className={`mobile-drawer-glass ${isScrolled ? 'scrolled-drawer' : 'top-drawer'}`}
          >
            <ul className="mobile-nav-list">
              {navigationLinks.map((link, idx) => {
                if (link.isDropdown) {
                  return (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      className="mobile-dropdown-item-wrap"
                    >
                      <button
                        type="button"
                        className="mobile-nav-item-link mobile-dropdown-toggle"
                        onClick={() => setMobileDealerOpen(!mobileDealerOpen)}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={16}
                          className={`mobile-chevron ${mobileDealerOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileDealerOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mobile-submenu-container"
                          >
                            {link.children.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.path}
                                onClick={() => setIsOpen(false)}
                                className="mobile-submenu-link"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                }

                return (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `mobile-nav-item-link ${isActive ? 'active' : ''}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mobile-drawer-footer">
              <div className="mobile-drawer-contacts">
                <span className="mobile-contacts-label">Quick Contact</span>
                <a
                  href={`tel:${companyConfig.phone}`}
                  className="mobile-phone-link"
                >
                  <Phone size={17} style={{ color: 'var(--color-accent)' }} />
                  {companyConfig.phone}
                </a>
                <a
                  href={companyConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-whatsapp-chat-link"
                >
                  <WhatsAppIcon size={18} color="#25D366" />
                  Chat on WhatsApp
                </a>
              </div>

              <Button
                to="/contact"
                variant="primary"
                onClick={() => setIsOpen(false)}
                className="mobile-quote-cta"
              >
                <span>Request a Quote</span>
                <ArrowRight size={15} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scoped CSS for the Futuristic Floating Navigation Bar */}
      <style>{`
        /* ========================================================
           FLOATING NAVIGATION SYSTEM - STYLES & TRANSITIONS
           ======================================================== */

        .filyarn-nav-fixed-wrap {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 990;
          pointer-events: none;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px 20px 0 20px;
          transition: padding 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .filyarn-nav-fixed-wrap.scrolled {
          padding: 10px 16px 0 16px;
        }

        /* --------------------------------------------------------
           CENTRAL FLOATING CAPSULE CONTAINER
           -------------------------------------------------------- */
        .filyarn-nav-capsule {
          pointer-events: auto;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 95%;
          max-width: 1440px;
          height: 68px;
          padding: 0 28px;
          border-radius: 9999px;
          gap: 20px;
          transition: 
            width 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            max-width 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            height 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            padding 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            gap 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            background-color 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            backdrop-filter 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: width, height, padding, box-shadow, background-color;
        }

        /* LIGHT MODE: Top State */
        .filyarn-nav-capsule.at-top {
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(2, 132, 199, 0.16);
          box-shadow: 
            0 10px 30px -8px rgba(2, 132, 199, 0.12),
            0 4px 20px -2px rgba(99, 102, 241, 0.14),
            0 0 0 1px rgba(255, 255, 255, 0.85) inset;
          backdrop-filter: blur(16px) saturate(160%);
          -webkit-backdrop-filter: blur(16px) saturate(160%);
        }

        /* LIGHT MODE: Scrolled State (compressed capsule) */
        .filyarn-nav-capsule.scrolled {
          width: 90%;
          max-width: 1260px;
          height: 56px;
          padding: 0 20px;
          gap: 12px;
          background: rgba(255, 255, 255, 0.94);
          border: 1px solid rgba(99, 102, 241, 0.22);
          box-shadow: 
            0 14px 36px -4px rgba(15, 23, 42, 0.12),
            0 4px 16px -2px rgba(99, 102, 241, 0.18),
            0 0 0 1px rgba(255, 255, 255, 0.95) inset;
          backdrop-filter: blur(22px) saturate(180%);
          -webkit-backdrop-filter: blur(22px) saturate(180%);
        }

        /* DARK MODE: Top State */
        [data-theme="dark"] .filyarn-nav-capsule.at-top {
          background: rgba(10, 14, 22, 0.72);
          border: 1px solid rgba(54, 193, 233, 0.22);
          box-shadow: 
            0 12px 36px -6px rgba(0, 0, 0, 0.6),
            0 0 24px -2px rgba(54, 193, 233, 0.16),
            0 0 32px -4px rgba(99, 102, 241, 0.18),
            0 0 0 1px rgba(255, 255, 255, 0.08) inset;
          backdrop-filter: blur(16px) saturate(170%);
          -webkit-backdrop-filter: blur(16px) saturate(170%);
        }

        /* DARK MODE: Scrolled State (compressed capsule) */
        [data-theme="dark"] .filyarn-nav-capsule.scrolled {
          width: 90%;
          max-width: 1260px;
          height: 56px;
          padding: 0 20px;
          gap: 12px;
          background: rgba(8, 12, 18, 0.90);
          border: 1px solid rgba(99, 102, 241, 0.32);
          box-shadow: 
            0 16px 42px -4px rgba(0, 0, 0, 0.78),
            0 0 22px rgba(99, 102, 241, 0.26),
            0 2px 10px rgba(54, 193, 233, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.12) inset;
          backdrop-filter: blur(24px) saturate(190%);
          -webkit-backdrop-filter: blur(24px) saturate(190%);
        }

        /* --------------------------------------------------------
           AMBIENT CAPSULE GLOW HALO
           -------------------------------------------------------- */
        .nav-capsule-halo {
          position: absolute;
          inset: -4px -6px;
          border-radius: 9999px;
          pointer-events: none;
          z-index: -1;
          filter: blur(16px);
          opacity: 0.85;
          transition: all 0.45s ease;
        }

        .at-top .nav-capsule-halo {
          background: radial-gradient(ellipse at 50% 50%, rgba(99, 102, 241, 0.18), rgba(2, 132, 199, 0.12), transparent 70%);
        }

        [data-theme="dark"] .at-top .nav-capsule-halo {
          background: radial-gradient(ellipse at 50% 50%, rgba(99, 102, 241, 0.22), rgba(54, 193, 233, 0.18), transparent 70%);
        }

        .scrolled .nav-capsule-halo {
          opacity: 0.6;
          inset: -2px -4px;
        }

        /* --------------------------------------------------------
           BRAND LOGO & TEXT (Left Side)
           -------------------------------------------------------- */
        .navbar-brand-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .navbar-brand-logo-img {
          height: 36px;
          width: auto;
          display: block;
          object-fit: contain;
          transition: height 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scrolled .navbar-brand-logo-img {
          height: 30px;
        }

        .brand-text-wrapper {
          display: flex;
          flex-direction: column;
        }

        .brand-name-title {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.05em;
          line-height: 1.1;
          color: var(--text-primary);
          transition: font-size 0.45s ease;
        }

        .scrolled .brand-name-title {
          font-size: 0.94rem;
        }

        .brand-name-subtitle {
          font-size: 0.60rem;
          color: var(--text-secondary);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          transition: font-size 0.45s ease;
        }

        .scrolled .brand-name-subtitle {
          font-size: 0.54rem;
        }

        /* --------------------------------------------------------
           CENTER NAVIGATION LINKS
           Spacious, readable, centered without any collision!
           -------------------------------------------------------- */
        .desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .desktop-nav-list {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 22px;
          margin: 0;
          padding: 0;
          transition: gap 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scrolled .desktop-nav-list {
          gap: 16px;
        }

        .desktop-nav-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-link-item {
          position: relative;
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-secondary);
          letter-spacing: 0.01em;
          padding: 8px 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.25s ease, padding 0.45s ease, font-size 0.45s ease;
        }

        .scrolled .nav-link-item {
          font-size: 0.83rem;
          padding: 6px 4px;
        }

        /* Hover & Active Underline: Expands symmetrically from center */
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #0284c7, var(--color-accent));
          border-radius: 2px;
          box-shadow: 0 0 8px rgba(99, 102, 241, 0.6);
          transition: width 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link-item:hover::after {
          width: 80%;
        }

        .nav-link-item.active-nav-link::after {
          width: 80%;
        }

        .nav-link-item:hover {
          color: var(--color-accent) !important;
        }

        .nav-link-item.active-nav-link {
          color: var(--color-accent) !important;
          font-weight: 600;
        }

        /* --------------------------------------------------------
           DEALER DROPDOWN & HOVER SUBMENU
           -------------------------------------------------------- */
        .nav-dropdown-wrapper {
          position: relative;
        }

        .nav-dropdown-trigger {
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-secondary);
          display: inline-flex;
          align-items: center;
          gap: 3px;
          padding: 8px 6px;
          outline: none;
          transition: color 0.25s ease, padding 0.45s ease, font-size 0.45s ease;
        }

        .scrolled .nav-dropdown-trigger {
          font-size: 0.83rem;
          padding: 6px 4px;
        }

        .nav-dropdown-trigger:hover,
        .nav-dropdown-trigger.active-dropdown {
          color: var(--color-accent) !important;
        }

        .nav-dropdown-trigger::after {
          content: '';
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #0284c7, var(--color-accent));
          border-radius: 2px;
          box-shadow: 0 0 8px rgba(99, 102, 241, 0.6);
          transition: width 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-dropdown-wrapper:hover .nav-dropdown-trigger::after,
        .nav-dropdown-trigger.active-dropdown::after {
          width: 80%;
        }

        /* Floating Submenu Dropdown Card */
        .nav-hover-dropdown-card {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 195px;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 14px;
          padding: 6px;
          box-shadow: 0 16px 36px -4px rgba(15, 23, 42, 0.12), 0 4px 14px rgba(99, 102, 241, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 1000;
        }

        /* Invisible hover bridge to prevent hover flicker */
        .nav-hover-dropdown-card::before {
          content: '';
          position: absolute;
          top: -14px;
          left: 0;
          right: 0;
          height: 14px;
        }

        [data-theme="dark"] .nav-hover-dropdown-card {
          background: rgba(14, 19, 28, 0.98);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 18px 40px -4px rgba(0, 0, 0, 0.65), 0 2px 10px rgba(99, 102, 241, 0.2);
        }

        .nav-dropdown-inner {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .nav-submenu-link {
          display: block;
          padding: 9px 14px;
          border-radius: 9px;
          font-size: 0.86rem;
          font-weight: 500;
          color: var(--text-primary);
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.15s ease;
          text-align: left;
        }

        .nav-submenu-link:hover {
          background: #eff6ff;
          color: #2563eb;
        }

        [data-theme="dark"] .nav-submenu-link:hover {
          background: rgba(37, 99, 235, 0.18);
          color: #60a5fa;
        }

        /* Mobile Dropdown Items */
        .mobile-dropdown-item-wrap {
          display: flex;
          flex-direction: column;
        }

        .mobile-dropdown-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
        }

        .mobile-chevron {
          transition: transform 0.2s ease;
          color: var(--text-secondary);
        }

        .mobile-chevron.rotate-180 {
          transform: rotate(180deg);
        }

        .mobile-submenu-container {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-left: 14px;
          margin-top: 4px;
          border-left: 2px solid rgba(99, 102, 241, 0.2);
        }

        .mobile-submenu-link {
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .mobile-submenu-link:hover {
          color: var(--color-accent);
          background: rgba(99, 102, 241, 0.08);
        }

        /* --------------------------------------------------------
           RIGHT CTAs & ACTIONS
           -------------------------------------------------------- */
        .desktop-ctas {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          flex-shrink: 0;
          transition: gap 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scrolled .desktop-ctas {
          gap: 9px;
        }

        /* WhatsApp Badge */
        .navbar-whatsapp-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #25D366;
          font-weight: 600;
          font-size: 0.82rem;
          padding: 6px 12px;
          border-radius: 9999px;
          background: rgba(37, 211, 102, 0.08);
          border: 1px solid rgba(37, 211, 102, 0.24);
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.25s ease;
        }

        .scrolled .navbar-whatsapp-badge {
          font-size: 0.78rem;
          padding: 4px 10px;
        }

        .navbar-whatsapp-badge:hover {
          background: rgba(37, 211, 102, 0.16);
          border-color: rgba(37, 211, 102, 0.45);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.25);
        }

        /* Phone Link */
        .navbar-tel-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--text-secondary);
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s ease, font-size 0.45s ease;
        }

        .scrolled .navbar-tel-link {
          font-size: 0.78rem;
        }

        .navbar-tel-link:hover {
          color: var(--text-primary);
        }

        /* Theme Toggle Button */
        .navbar-theme-btn {
          background: transparent;
          border: 1px solid var(--border-light);
          cursor: pointer;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }

        .scrolled .navbar-theme-btn {
          width: 30px;
          height: 30px;
        }

        .navbar-theme-btn:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        /* Request a Quote CTA Button */
        .navbar-quote-btn {
          padding: 8px 18px !important;
          font-size: 0.82rem !important;
          border-radius: 9999px !important;
          font-weight: 600 !important;
          background: var(--gradient-brand) !important;
          box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4) !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
          white-space: nowrap !important;
          text-decoration: none !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .scrolled .navbar-quote-btn {
          padding: 6px 14px !important;
          font-size: 0.78rem !important;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35) !important;
        }

        .navbar-quote-btn:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 6px 22px rgba(99, 102, 241, 0.55) !important;
        }

        /* --------------------------------------------------------
           MOBILE & TABLET ACTIONS
           -------------------------------------------------------- */
        .mobile-actions-wrapper {
          display: none;
          align-items: center;
          gap: 10px;
        }

        .mobile-theme-btn {
          width: 34px !important;
          height: 34px !important;
        }

        .mobile-whatsapp-btn {
          color: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.1);
          border: 1px solid rgba(37, 211, 102, 0.25);
          transition: transform 0.2s ease;
        }

        .mobile-whatsapp-btn:hover {
          transform: scale(1.08);
        }

        .mobile-hamburger-btn {
          cursor: pointer;
          color: var(--text-primary);
          background: transparent;
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          transition: all 0.25s ease;
        }

        .mobile-hamburger-btn:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        /* --------------------------------------------------------
           MOBILE SLIDE-IN GLASS DRAWER
           -------------------------------------------------------- */
        .mobile-drawer-glass {
          position: fixed;
          top: 86px;
          left: 16px;
          right: 16px;
          max-width: 480px;
          margin: 0 auto;
          background-color: var(--bg-secondary);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          z-index: 980;
          border-radius: 24px;
          border: 1px solid var(--border-light);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2), 0 0 30px rgba(99, 102, 241, 0.15);
          display: flex;
          flex-direction: column;
          padding: 28px 24px;
          pointer-events: auto;
        }

        .mobile-drawer-glass.scrolled-drawer {
          top: 74px;
        }

        [data-theme="dark"] .mobile-drawer-glass {
          background-color: rgba(10, 14, 22, 0.95);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(99, 102, 241, 0.25);
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 0;
          margin: 0 0 24px 0;
        }

        .mobile-nav-item-link {
          font-size: 1.15rem;
          font-weight: 400;
          color: var(--text-primary);
          display: block;
          padding: 8px 12px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .mobile-nav-item-link.active {
          color: var(--color-accent);
          font-weight: 600;
          background-color: rgba(99, 102, 241, 0.08);
        }

        .mobile-drawer-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-drawer-contacts {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-light);
        }

        .mobile-contacts-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.12em;
        }

        .mobile-phone-link {
          font-size: 1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-primary);
          text-decoration: none;
        }

        .mobile-whatsapp-chat-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #25D366;
          font-weight: 600;
          font-size: 0.95rem;
          margin-top: 4px;
          text-decoration: none;
        }

        .mobile-quote-cta {
          width: 100% !important;
          padding: 12px !important;
          border-radius: 9999px !important;
          background: var(--gradient-brand) !important;
          box-shadow: 0 4px 18px rgba(99, 102, 241, 0.4) !important;
          justify-content: center !important;
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          text-decoration: none !important;
        }

        /* --------------------------------------------------------
           RESPONSIVE BREAKPOINTS
           -------------------------------------------------------- */
        @media (max-width: 1260px) {
          .phone-number-text {
            display: none;
          }
          .desktop-nav-list {
            gap: 16px;
          }
          .desktop-ctas {
            gap: 10px;
          }
        }

        @media (max-width: 1100px) {
          .desktop-nav,
          .desktop-ctas {
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
          .filyarn-nav-capsule {
            width: 96% !important;
            padding: 0 16px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
