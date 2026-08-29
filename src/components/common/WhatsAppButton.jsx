import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { companyConfig } from '../../data/config';

// Authentic SVG paths for brand icons
const BRAND_SVGS = {
  whatsapp: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12a9.97 9.97 0 0 0 1.524 5.29L2 22l4.897-1.28A9.92 9.92 0 0 0 12.004 22c5.495 0 9.992-4.5 9.992-10S17.499 2 12.004 2zm5.093 14.28c-.22.617-1.285 1.206-1.776 1.293-.446.08-1.03.149-2.984-.667a12.04 12.04 0 0 1-5.123-4.51c-.675-1.11-1.077-2.39-1.077-3.69 0-2.072 1.07-3.11 1.488-3.52.33-.326.68-.42.9-.42h.64c.2 0 .46.03.68.53.25.56.84 2.07.91 2.22.08.15.13.33.03.53-.1.2-.2.32-.36.5-.16.15-.33.32-.14.65.37.62.82 1.21 1.34 1.74a7.87 7.87 0 0 0 2.28 1.41c.32.15.52.12.71-.1.19-.22.84-.98.98-1.32.14-.34.28-.28.49-.2.2.08 1.32.62 1.55.73.22.1.37.16.42.25.06.09.06.52-.16 1.137z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
};

const BRAND_COLORS = {
  whatsapp: '#25D366',
  instagram: '#E1306C',
  facebook: '#1877F2'
};

const WhatsAppButton = ({
  variant = 'inline', // 'inline' | 'floating' | 'cta'
  text = 'Chat on WhatsApp',
  className = '',
  message = "Hello Filyarn Industries, I would like to enquire about your yarn and sewing thread products."
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/919157135001?text=${encodedMessage}`;
  const [hoveredSocial, setHoveredSocial] = useState(null);

  if (variant === 'floating') {
    // Generate active socials list (only WhatsApp, Instagram, Facebook)
    const activeSocials = [
      { id: 'instagram', url: companyConfig.socialLinks.instagram },
      { id: 'facebook', url: companyConfig.socialLinks.facebook },
      { id: 'whatsapp', url: companyConfig.socialLinks.whatsapp || whatsappUrl }
    ].filter(item => !!item.url);

    return (
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          zIndex: 999,
          alignItems: 'center'
        }}
        className="floating-social-group"
      >
        {activeSocials.map((social) => {
          const isWhatsApp = social.id === 'whatsapp';
          const isHovered = hoveredSocial === social.id;
          
          return (
            <div
              key={social.id}
              style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setHoveredSocial(social.id)}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              {/* Floating Tooltip */}
              {isHovered && (
                <div style={{
                  position: 'absolute',
                  right: '56px',
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  border: '1px solid var(--border-light)',
                  color: '#fff',
                  padding: '5px 12px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  zIndex: 1000
                }}>
                  {social.id === 'whatsapp' ? 'WhatsApp Enquiry' : social.id === 'instagram' ? 'Instagram' : 'Facebook'}
                </div>
              )}

              {/* Action Circle Button */}
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire via ${social.id}`}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  
                  // All socials are neutral by default and light up on hover
                  backgroundColor: isHovered ? BRAND_COLORS[social.id] : 'var(--bg-secondary)',
                  color: isHovered ? '#fff' : 'var(--text-secondary)',
                  border: `1px solid ${isHovered ? BRAND_COLORS[social.id] : 'var(--border-light)'}`,
                  
                  transform: isHovered ? 'scale(1.08) translateY(-2px)' : 'scale(1) translateY(0)'
                }}
              >
                {BRAND_SVGS[social.id]}
              </a>
            </div>
          );
        })}
      </div>
    );
  }

  if (variant === 'cta') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`whatsapp-cta-btn ${className}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '14px 28px',
          backgroundColor: '#25D366',
          color: '#fff',
          borderRadius: '4px',
          fontWeight: '600',
          fontSize: '0.95rem',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.35)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.2)';
        }}
      >
        <MessageSquare size={20} />
        {text}
      </a>
    );
  }

  // default inline / navbar variant
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-inline-btn ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color: '#25D366',
        fontWeight: '500',
        fontSize: '0.9rem',
        cursor: 'pointer',
        transition: 'color 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#128C7E';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = '#25D366';
      }}
    >
      <MessageSquare size={16} />
      {text}
    </a>
  );
};

export default WhatsAppButton;
