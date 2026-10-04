import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Send, ChevronRight, ArrowRight } from 'lucide-react';
import { companyConfig } from '../../data/config';

// Authentic Social Media Icons: Instagram, Facebook, and WhatsApp only
const SOCIAL_LINKS = [
  {
    id: 'instagram',
    name: 'Instagram',
    url: companyConfig.socialLinks.instagram || 'https://www.instagram.com/filyarnindustries/',
    bg: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    shadow: '0 4px 12px rgba(225, 48, 108, 0.35)',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    )
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: companyConfig.socialLinks.facebook || 'https://www.facebook.com/profile.php?id=61577801243967',
    bg: '#1877F2',
    shadow: '0 4px 12px rgba(24, 119, 242, 0.35)',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: companyConfig.socialLinks.whatsapp || 'https://wa.me/919157135001',
    bg: '#25D366',
    shadow: '0 4px 12px rgba(37, 211, 102, 0.35)',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
        <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12a9.97 9.97 0 0 0 1.524 5.29L2 22l4.897-1.28A9.92 9.92 0 0 0 12.004 22c5.495 0 9.992-4.5 9.992-10S17.499 2 12.004 2zm5.093 14.28c-.22.617-1.285 1.206-1.776 1.293-.446.08-1.03.149-2.984-.667a12.04 12.04 0 0 1-5.123-4.51c-.675-1.11-1.077-2.39-1.077-3.69 0-2.072 1.07-3.11 1.488-3.52.33-.326.68-.42.9-.42h.64c.2 0 .46.03.68.53.25.56.84 2.07.91 2.22.08.15.13.33.03.53-.1.2-.2.32-.36.5-.16.18-.34.4-.48.54-.16.15-.33.32-.14.65.37.62.82 1.21 1.34 1.74a7.87 7.87 0 0 0 2.28 1.41c.32.15.52.12.71-.1.19-.22.84-.98.98-1.32.14-.34.28-.28.49-.2.2.08 1.32.62 1.55.73.22.1.37.16.42.25.06.09.06.52-.16 1.137z" />
      </svg>
    )
  }
];

const Footer = () => {
  return (
    <footer className="filyarn-footer-root">
      {/* Upper Main Footer Section */}
      <div className="footer-main-section">
        {/* Decorative corner accent wave */}
        <div className="footer-ambient-corner" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="footer-columns-grid">

            {/* Column 1: Brand Info & Social Media */}
            <div className="footer-col-brand">
              <Link to="/" className="footer-brand-header" aria-label="Filyarn Industries Home">
                <img
                  src={companyConfig.imagePaths.logo}
                  alt="FILYARN Logo"
                  className="footer-logo-img"
                />
                <div className="footer-brand-title-box">
                  <span className="footer-brand-name">FILYARN</span>
                  <span className="footer-brand-tag">INDUSTRIES</span>
                </div>
              </Link>

              <div className="footer-tagline">
                Quality Yarns for a Better Tomorrow
              </div>

              <p className="footer-description">
                Filyarn Industries Pvt. Ltd. is a prominent textile manufacturer and B2B supplier based
                in Surat, Gujarat — supplying quality polyester yarn and sewing thread solutions across India.
              </p>

              {/* Social Media Icons: Instagram, Facebook, and WhatsApp Only */}
              <div className="footer-social-row">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} page`}
                    className="footer-social-badge"
                    style={{
                      background: social.bg,
                      boxShadow: social.shadow
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Our Products */}
            <div className="footer-col-nav">
              <h4 className="footer-col-heading">OUR PRODUCTS</h4>
              <div className="footer-heading-underline" />
              <ul className="footer-link-list">
                {[
                  'Spun Polyester Dyed Yarn',
                  'Spun Polyester Sewing Thread',
                  'Spun Polyester Yarn',
                  'Polyester Sewing Threads'
                ].map((productName) => (
                  <li key={productName}>
                    <Link to="/products" className="footer-nav-item">
                      <ChevronRight size={14} className="footer-chevron-icon" />
                      <span>{productName}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links (Updated matching our complete website navigation menu) */}
            <div className="footer-col-nav">
              <h4 className="footer-col-heading">QUICK LINKS</h4>
              <div className="footer-heading-underline" />
              <ul className="footer-link-list">
                {[
                  { label: 'About Us', path: '/about' },
                  { label: 'Manufacturing', path: '/manufacturing' },
                  { label: 'Products', path: '/products' },
                  { label: 'Dealer Network', path: '/dealer-network' },
                  { label: 'Dealership Inquiry', path: '/dealership-inquiry' },
                  { label: 'Media Gallery', path: '/gallery' },
                  { label: 'Contact Us', path: '/contact' }
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="footer-nav-item">
                      <ChevronRight size={14} className="footer-chevron-icon" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Get In Touch */}
            <div className="footer-col-contact">
              <h4 className="footer-col-heading">GET IN TOUCH</h4>
              <div className="footer-heading-underline" />

              <div className="footer-contact-items">
                {/* Phone Item */}
                <div className="footer-contact-row">
                  <div className="footer-contact-icon-wrapper">
                    <Phone size={17} />
                  </div>
                  <div className="footer-contact-details">
                    <a
                      href={`tel:${companyConfig.phone}`}
                      className="footer-contact-value"
                    >
                      {companyConfig.phone}
                    </a>
                    <span className="footer-contact-hint">Call us for any inquiry</span>
                  </div>
                </div>

                {/* Location Item */}
                <div className="footer-contact-row">
                  <div className="footer-contact-icon-wrapper location-pin">
                    <MapPin size={17} />
                  </div>
                  <div className="footer-contact-details">
                    <span className="footer-contact-value location-text">
                      {companyConfig.address.full}
                    </span>
                    <span className="footer-contact-hint">Our Location</span>
                  </div>
                </div>

                {/* Email Item */}
                <div className="footer-contact-row">
                  <div className="footer-contact-icon-wrapper">
                    <Mail size={17} />
                  </div>
                  <div className="footer-contact-details">
                    <a
                      href={`mailto:${companyConfig.email || 'info@filyarnindustries.com'}`}
                      className="footer-contact-value"
                    >
                      {companyConfig.email || 'info@filyarnindustries.com'}
                    </a>
                    <span className="footer-contact-hint">Send us an email</span>
                  </div>
                </div>

                {/* Get a Quote Button */}
                <div className="footer-quote-btn-wrapper">
                  <Link to="/contact" className="footer-quote-pill-btn">
                    <Send size={15} className="footer-send-icon" />
                    <span>Get a Quote</span>
                    <ArrowRight size={15} className="footer-arrow-icon" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Developer Credit */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p className="footer-copyright-text">
            &copy; 2026 FILYARN INDUSTRIES PRIVATE LIMITED. All Rights Reserved.
          </p>
          <div className="footer-bottom-dev">
            <span className="footer-dev-text">
              Developed by <strong className="footer-dev-name">Pratham Antala</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Scoped Stylings */}
      <style>{`
        .filyarn-footer-root {
          background-color: var(--bg-primary);
          border-top: 1px solid var(--border-light);
          position: relative;
          overflow: hidden;
          font-family: var(--font-sans);
        }

        .footer-main-section {
          padding: 68px 0 56px 0;
          position: relative;
        }

        /* Decorative ambient corner aura */
        .footer-ambient-corner {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 480px;
          height: 380px;
          background: radial-gradient(circle at 100% 100%, rgba(37, 99, 235, 0.06) 0%, rgba(37, 99, 235, 0) 70%);
          pointer-events: none;
          z-index: 1;
        }

        [data-theme="dark"] .footer-ambient-corner {
          background: radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0) 70%);
        }

        /* 4 Columns Grid */
        .footer-columns-grid {
          display: grid;
          grid-template-columns: 1.8fr 1.15fr 1fr 1.45fr;
          gap: 44px;
          align-items: flex-start;
        }

        /* Brand Column */
        .footer-col-brand {
          display: flex;
          flex-direction: column;
        }

        .footer-brand-header {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          margin-bottom: 12px;
          width: fit-content;
        }

        .footer-logo-img {
          height: 44px;
          width: auto;
          display: block;
          object-fit: contain;
        }

        .footer-brand-title-box {
          display: flex;
          flex-direction: column;
        }

        .footer-brand-name {
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: 0.04em;
          line-height: 1.1;
          color: var(--text-primary);
        }

        .footer-brand-tag {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: var(--text-secondary);
          text-transform: uppercase;
        }

        .footer-tagline {
          color: #2563eb;
          font-size: 0.96rem;
          font-weight: 600;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        [data-theme="dark"] .footer-tagline {
          color: #60a5fa;
        }

        .footer-description {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.62;
          max-width: 360px;
          margin: 0 0 20px 0;
        }

        /* Social Row */
        .footer-social-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-social-badge {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
          text-decoration: none;
        }

        .footer-social-badge:hover {
          transform: translateY(-3px) scale(1.08);
        }

        /* Navigation & Lists */
        .footer-col-nav {
          display: flex;
          flex-direction: column;
        }

        .footer-col-heading {
          font-size: 0.95rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          margin: 0;
        }

        .footer-heading-underline {
          width: 28px;
          height: 3px;
          background: #2563eb;
          border-radius: 2px;
          margin-top: 7px;
          margin-bottom: 22px;
        }

        .footer-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-nav-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .footer-chevron-icon {
          color: #2563eb;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .footer-nav-item:hover {
          color: #2563eb !important;
          transform: translateX(4px);
        }

        .footer-nav-item:hover .footer-chevron-icon {
          transform: translateX(2px);
        }

        /* Contact Column */
        .footer-col-contact {
          display: flex;
          flex-direction: column;
        }

        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-contact-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .footer-contact-icon-wrapper {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #eef2ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        [data-theme="dark"] .footer-contact-icon-wrapper {
          background-color: rgba(37, 99, 235, 0.16);
          color: #60a5fa;
        }

        .footer-contact-row:hover .footer-contact-icon-wrapper {
          transform: scale(1.05);
          background-color: #e0e7ff;
        }

        [data-theme="dark"] .footer-contact-row:hover .footer-contact-icon-wrapper {
          background-color: rgba(37, 99, 235, 0.25);
        }

        .footer-contact-details {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .footer-contact-value {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-primary);
          text-decoration: none;
          line-height: 1.3;
          transition: color 0.2s ease;
        }

        a.footer-contact-value:hover {
          color: #2563eb !important;
        }

        .location-text {
          font-weight: 600;
          font-size: 0.8rem;
          line-height: 1.45;
          max-width: 240px;
        }

        .footer-contact-hint {
          font-size: 0.76rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        /* Pill CTA Button */
        .footer-quote-btn-wrapper {
          margin-top: 4px;
        }

        .footer-quote-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%);
          color: #ffffff !important;
          border-radius: 9999px;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .footer-send-icon {
          transform: rotate(-10deg);
          transition: transform 0.25s ease;
        }

        .footer-arrow-icon {
          transition: transform 0.25s ease;
        }

        .footer-quote-pill-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.45);
          filter: brightness(1.05);
        }

        .footer-quote-pill-btn:hover .footer-send-icon {
          transform: rotate(0deg) scale(1.1);
        }

        .footer-quote-pill-btn:hover .footer-arrow-icon {
          transform: translateX(3px);
        }

        /* Bottom Dark Navy Bar */
        .footer-bottom-bar {
          background-color: #0c1e3d;
          color: #94a3b8;
          padding: 18px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-copyright-text {
          font-size: 0.82rem;
          color: #94a3b8;
          margin: 0;
          letter-spacing: 0.01em;
        }

        .footer-bottom-dev {
          display: flex;
          align-items: center;
        }

        .footer-dev-text {
          font-size: 0.82rem;
          color: #94a3b8;
          letter-spacing: 0.01em;
        }

        .footer-dev-name {
          color: #ffffff;
          font-weight: 600;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .footer-columns-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }
          .location-text {
            max-width: 100% !important;
          }
        }

        @media (max-width: 640px) {
          .footer-main-section {
            padding: 48px 0 40px 0 !important;
          }
          .footer-columns-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .footer-bottom-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
