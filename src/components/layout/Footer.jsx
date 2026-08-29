import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import { companyConfig } from '../../data/config';

// Real Brand SVG Paths for absolute logo authenticity
const BRAND_ICONS = {
  whatsapp: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12a9.97 9.97 0 0 0 1.524 5.29L2 22l4.897-1.28A9.92 9.92 0 0 0 12.004 22c5.495 0 9.992-4.5 9.992-10S17.499 2 12.004 2zm5.093 14.28c-.22.617-1.285 1.206-1.776 1.293-.446.08-1.03.149-2.984-.667a12.04 12.04 0 0 1-5.123-4.51c-.675-1.11-1.077-2.39-1.077-3.69 0-2.072 1.07-3.11 1.488-3.52.33-.326.68-.42.9-.42h.64c.2 0 .46.03.68.53.25.56.84 2.07.91 2.22.08.15.13.33.03.53-.1.2-.2.32-.36.5-.16.15-.34.4-.48.54-.16.15-.33.32-.14.65.37.62.82 1.21 1.34 1.74a7.87 7.87 0 0 0 2.28 1.41c.32.15.52.12.71-.1.19-.22.84-.98.98-1.32.14-.34.28-.28.49-.2.2.08 1.32.62 1.55.73.22.1.37.16.42.25.06.09.06.52-.16 1.137z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.002 3.002 0 00-2.11 2.107C0 8.053 0 12 0 12s0 3.947.502 5.837a3.003 3.003 0 002.11 2.107C4.495 20.455 12 20.455 12 20.455s7.505 0 9.388-.511a3.002 3.002 0 002.11-2.107C24 15.947 24 12 24 12s0-3.947-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
};

const BRAND_COLORS = {
  whatsapp: '#25D366',
  instagram: '#E1306C',
  facebook: '#1877F2',
  linkedin: '#0A66C2',
  youtube: '#FF0000',
  x: '#000000'
};

const Footer = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState(null);

  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-light)',
      paddingTop: '80px',
      paddingBottom: '30px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1.2fr 1fr 1.2fr',
          gap: '40px',
          marginBottom: '60px',
          position: 'relative',
          zIndex: 2
        }} className="footer-grid">
          
          {/* Column 1: Company Profile + Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <img
                  src={companyConfig.imagePaths.logo}
                  alt="FILYARN Logo"
                  style={{
                    height: '40px',
                    width: 'auto',
                    display: 'block',
                    objectFit: 'contain'
                  }}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontWeight: '700', fontSize: '1rem', letterSpacing: '0.05em', lineHeight: 1.1, color: 'var(--text-primary)' }}>
                    FILYARN
                  </span>
                  <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    INDUSTRIES
                  </span>
                </div>
              </Link>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '340px',
                margin: 0
              }}>
                Filyarn Industries Pvt. Ltd. is a prominent textile manufacturer and B2B supplier based in Surat, Gujarat — supplying quality polyester yarn and sewing thread solutions across India.
              </p>
            </div>
            
            {/* Social Icons Row - Placed directly below the description, in sequence Instagram, Facebook, WhatsApp */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { id: 'instagram', url: companyConfig.socialLinks.instagram },
                { id: 'facebook', url: companyConfig.socialLinks.facebook },
                { id: 'whatsapp', url: companyConfig.socialLinks.whatsapp }
              ].map((social) => {
                if (!social.url) return null;
                const isHovered = hoveredPlatform === social.id;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.id} page`}
                    onMouseEnter={() => setHoveredPlatform(social.id)}
                    onMouseLeave={() => setHoveredPlatform(null)}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '4px',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      color: isHovered ? '#fff' : 'var(--text-secondary)',
                      backgroundColor: isHovered ? BRAND_COLORS[social.id] : 'transparent',
                      borderColor: isHovered ? BRAND_COLORS[social.id] : 'var(--border-light)',
                      boxShadow: isHovered ? `0 4px 10px ${BRAND_COLORS[social.id]}30` : 'none'
                    }}
                  >
                    {BRAND_ICONS[social.id]}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Our Products */}
          <div>
            <h4 style={{
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-accent)',
              marginBottom: '24px',
              fontWeight: '600'
            }}>
              Our Products
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', padding: 0, margin: 0 }}>
              <li>
                <Link to="/products" className="footer-link" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Spun Polyester Dyed Yarn
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer-link" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Spun Polyester Sewing Thread
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer-link" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Spun Polyester Yarn
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer-link" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Polyester Sewing Threads
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 style={{
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-accent)',
              marginBottom: '24px',
              fontWeight: '600'
            }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', padding: 0, margin: 0 }}>
              <li>
                <Link to="/about" className="footer-link" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="footer-link" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-link" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h4 style={{
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-accent)',
              marginBottom: '24px',
              fontWeight: '600'
            }}>
              Get in Touch
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Phone size={18} style={{ color: 'var(--color-accent)', marginTop: '2px', flexShrink: 0 }} />
                <a href={`tel:${companyConfig.phone}`} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.4 }} className="footer-contact-link">
                  {companyConfig.phone}
                </a>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--color-accent)', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {companyConfig.address.full}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div style={{
          borderTop: '1px solid var(--border-light)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          position: 'relative',
          zIndex: 2
        }} className="footer-bottom">
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            &copy; 2026 FILYARN INDUSTRIES PRIVATE LIMITED. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/about" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-sublink">
              Privacy Policy
            </Link>
            <Link to="/about" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-sublink">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Hover CSS rules */}
      <style>{`
        .footer-link:hover {
          color: var(--color-accent) !important;
          transform: translateX(4px);
        }
        .footer-sublink:hover {
          color: var(--text-secondary) !important;
        }
        .footer-contact-link:hover {
          color: var(--color-accent) !important;
        }
        
        @media (max-width: 991px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 575px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
