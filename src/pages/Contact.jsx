import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, MessageSquare, Send, CheckCircle, Mail } from 'lucide-react';
import { companyConfig } from '../data/config';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us & Request a Quote | FILYARN";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Contact Filyarn Industries Pvt. Ltd. in Surat, Gujarat. Submit a quote enquiry for spun polyester dyed yarn and sewing thread bulk supply.");
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: 'Spun Polyester Dyed Yarn',
    quantity: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getFormattedMessage = () => {
    return `Hello Filyarn Industries,
I would like to request a quote.
- Name: ${formData.name}
- Company: ${formData.company}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Product: ${formData.product}
- Quantity: ${formData.quantity}
- Message: ${formData.message}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }
    setIsSubmitted(true);
  };

  const handleWhatsAppSubmit = () => {
    const text = encodeURIComponent(getFormattedMessage());
    window.open(`https://wa.me/919157135001?text=${text}`, '_blank');
  };

  const handleMailtoSubmit = () => {
    const subject = encodeURIComponent(`B2B Quote Request: ${formData.product}`);
    const body = encodeURIComponent(getFormattedMessage());
    window.open(`mailto:?subject=${subject}&body=${body}`, '_self');
  };

  // Google Maps embed query targeting the primary company name to avoid the 'Unit 2' marker
  const mapEmbedUrl = `https://maps.google.com/maps?q=Filyarn%20Industries%20Pvt%20Ltd,%20Kudsad,%20Gujarat,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Editorial Header */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.04
                }
              }
            }}
            style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
          >
            <span className="section-label">Connect With Us</span>
            <h1 className="font-serif" style={{ 
              fontSize: '3rem', 
              fontWeight: '400', 
              marginBottom: '24px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              rowGap: '0.15em'
            }}>
              {"Request a Quote &".split(" ").map((word, i) => (
                <motion.span
                  key={`ct1-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  style={{ display: 'inline-block', marginRight: '0.25em' }}
                >
                  {word}
                </motion.span>
              ))}
              <span style={{ width: '100%' }}></span>
              {"Start Sourcing".split(" ").map((word, i) => (
                <motion.span
                  key={`ct2-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  style={{ display: 'inline-block', marginRight: '0.25em', color: 'var(--color-accent)', fontStyle: 'italic' }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: '300' }}>
              Get in touch with our commercial sales desk in Surat, Gujarat. Fill out our bulk yarn enquiry form, or chat directly via WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="section section-alt">
        <div className="container">
          <div className="contact-layout-split" style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '50px',
            alignItems: 'start'
          }}>
            
            {/* Left: Contact Info + Enquiry Form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} className="contact-details-form-col">
              
              <div>
                <h2 className="font-serif" style={{ fontSize: '2rem', fontWeight: '400', marginBottom: '24px' }}>
                  Let's <span>Talk</span>
                </h2>
                
                {/* Contacts card */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }} className="contact-info-cards-row">
                  <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--border-radius)',
                    padding: '24px',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start'
                  }}>
                    <Phone size={24} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '4px' }} />
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '6px', color: 'var(--text-primary)' }}>Phone Contact</h4>
                      <a href={`tel:${companyConfig.phone}`} style={{ fontSize: '0.95rem', color: 'var(--color-accent)', fontWeight: '600' }} className="tel-link">
                        {companyConfig.phone}
                      </a>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                        Mon - Sat, 9:00 AM - 7:00 PM IST
                      </p>
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--border-radius)',
                    padding: '24px',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start'
                  }}>
                    <MessageSquare size={24} style={{ color: '#25D366', flexShrink: 0, marginTop: '4px' }} />
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '6px', color: 'var(--text-primary)' }}>WhatsApp Support</h4>
                      <a href={companyConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', color: '#25D366', fontWeight: '600' }} className="tel-link">
                        Open Chat
                      </a>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                        Fast response for sales queries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* B2B Quote Form Card */}
              <div style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--border-radius)',
                padding: '36px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
              }} className="contact-form-card">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="enquiry-form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                    >
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px', marginBottom: '8px' }}>
                        Enquiry &amp; Quote Form
                      </h3>

                      {/* Row: Name and Company */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
                        <div>
                          <label htmlFor="name" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>Your Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            style={{
                              width: '100%',
                              padding: '12px',
                              backgroundColor: 'var(--bg-tertiary)',
                              border: '1px solid var(--border-light)',
                              borderRadius: '4px',
                              color: 'var(--text-primary)',
                              fontSize: '0.9rem'
                            }}
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>Company Name</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            style={{
                              width: '100%',
                              padding: '12px',
                              backgroundColor: 'var(--bg-tertiary)',
                              border: '1px solid var(--border-light)',
                              borderRadius: '4px',
                              color: 'var(--text-primary)',
                              fontSize: '0.9rem'
                            }}
                            className="form-input"
                          />
                        </div>
                      </div>

                      {/* Row: Phone and Email */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
                        <div>
                          <label htmlFor="phone" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>Phone / Mobile *</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            style={{
                              width: '100%',
                              padding: '12px',
                              backgroundColor: 'var(--bg-tertiary)',
                              border: '1px solid var(--border-light)',
                              borderRadius: '4px',
                              color: 'var(--text-primary)',
                              fontSize: '0.9rem'
                            }}
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            style={{
                              width: '100%',
                              padding: '12px',
                              backgroundColor: 'var(--bg-tertiary)',
                              border: '1px solid var(--border-light)',
                              borderRadius: '4px',
                              color: 'var(--text-primary)',
                              fontSize: '0.9rem'
                            }}
                            className="form-input"
                          />
                        </div>
                      </div>

                      {/* Row: Product and Quantity */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
                        <div>
                          <label htmlFor="product" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>Product Category</label>
                          <select
                            id="product"
                            name="product"
                            value={formData.product}
                            onChange={handleInputChange}
                            style={{
                              width: '100%',
                              padding: '12px',
                              backgroundColor: 'var(--bg-tertiary)',
                              border: '1px solid var(--border-light)',
                              borderRadius: '4px',
                              color: 'var(--text-primary)',
                              fontSize: '0.9rem',
                              cursor: 'pointer'
                            }}
                            className="form-input"
                          >
                            <option value="Spun Polyester Dyed Yarn">Spun Polyester Dyed Yarn</option>
                            <option value="Spun Polyester Sewing Thread">Spun Polyester Sewing Thread</option>
                            <option value="Spun Polyester Yarn">Spun Polyester Yarn (Raw White)</option>
                            <option value="Polyester Sewing Threads">Polyester Sewing Threads</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="quantity" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>Requirement Quantity</label>
                          <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            placeholder="e.g. 500 kgs, 1 Container"
                            value={formData.quantity}
                            onChange={handleInputChange}
                            style={{
                              width: '100%',
                              padding: '12px',
                              backgroundColor: 'var(--bg-tertiary)',
                              border: '1px solid var(--border-light)',
                              borderRadius: '4px',
                              color: 'var(--text-primary)',
                              fontSize: '0.9rem'
                            }}
                            className="form-input"
                          />
                        </div>
                      </div>

                      {/* Message Textarea */}
                      <div>
                        <label htmlFor="message" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>Additional Requirements / Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Detail yarn count (e.g. 2/40, 2/30), twist requirements, colors needed..."
                          style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: 'var(--bg-tertiary)',
                            border: '1px solid var(--border-light)',
                            borderRadius: '4px',
                            color: 'var(--text-primary)',
                            fontSize: '0.9rem',
                            resize: 'vertical'
                          }}
                          className="form-input"
                        />
                      </div>

                      <button
                        type="submit"
                        style={{
                          padding: '14px',
                          backgroundColor: 'var(--color-accent)',
                          color: '#fff',
                          fontWeight: '600',
                          fontSize: '0.95rem',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          transition: 'all 0.3s ease'
                        }}
                        className="form-submit-btn"
                      >
                        <Send size={16} />
                        Generate B2B Draft Enquiry
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-screen"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      style={{ textAlign: 'center', padding: '10px 0' }}
                    >
                      <CheckCircle size={48} style={{ color: 'var(--color-accent)', margin: '0 auto 16px auto' }} />
                      <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '10px' }}>Enquiry Draft Generated!</h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '24px' }}>
                        Your details are ready. Choose one of the following methods to transmit your request to the Filyarn sales team:
                      </p>

                      {/* Summary Box */}
                      <div style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '4px',
                        padding: '16px',
                        fontSize: '0.85rem',
                        textAlign: 'left',
                        marginBottom: '28px',
                        color: 'var(--text-secondary)'
                      }}>
                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px', marginBottom: '8px', fontWeight: '600', color: 'var(--text-primary)' }}>
                          Enquiry Summary
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '4px' }}>
                          <strong>Name:</strong> <span>{formData.name}</span>
                          <strong>Company:</strong> <span>{formData.company || '—'}</span>
                          <strong>Product:</strong> <span>{formData.product}</span>
                          <strong>Quantity:</strong> <span>{formData.quantity || '—'}</span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <button
                          onClick={handleWhatsAppSubmit}
                          style={{
                            padding: '14px',
                            backgroundColor: '#25D366',
                            color: '#fff',
                            fontWeight: '600',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            width: '100%',
                            transition: 'all 0.2s'
                          }}
                          className="action-whatsapp"
                        >
                          <MessageSquare size={18} />
                          Transmit via WhatsApp
                        </button>

                        <button
                          onClick={handleMailtoSubmit}
                          style={{
                            padding: '14px',
                            backgroundColor: 'var(--bg-tertiary)',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--border-light)',
                            fontWeight: '600',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            width: '100%',
                            transition: 'all 0.2s'
                          }}
                          className="action-mailto"
                        >
                          <Mail size={18} style={{ color: 'var(--color-accent)' }} />
                          Prepare Email Draft
                        </button>

                        <button
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({
                              name: '',
                              company: '',
                              phone: '',
                              email: '',
                              product: 'Spun Polyester Dyed Yarn',
                              quantity: '',
                              message: ''
                            });
                          }}
                          style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-secondary)',
                            marginTop: '8px',
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            backgroundColor: 'transparent',
                            border: 'none'
                          }}
                        >
                          Edit Details / Submit New Enquiry
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Find Our Location & Maps Container */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2 className="font-serif" style={{ fontSize: '2rem', fontWeight: '400' }}>
                Find Our <span>Location</span>
              </h2>

              {/* Location Indicator Card (Clear location details) */}
              <div style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--border-radius)',
                padding: '24px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
              }} className="location-indicator-card">
                <MapPin size={28} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Filyarn Industries Pvt. Ltd.
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    PL NO. 48, BL NO.792, ANKUR GALI, KUDSAD, MANGROL, SURAT-, SURAT, 394110, India
                  </p>
                </div>
              </div>

              {/* Responsive Google Maps Box (Strictly targets the main facility marker) */}
              <div style={{
                borderRadius: 'var(--border-radius)',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                backgroundColor: 'var(--bg-secondary)',
                height: '420px'
              }} className="contact-map-col">
                <iframe
                  title="Filyarn Industries Pvt Ltd Office Location Map"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <style>{`
        .tel-link:hover {
          color: var(--color-accent-hover) !important;
          text-decoration: underline;
        }
        .form-input:focus {
          border-color: var(--color-accent) !important;
          box-shadow: 0 0 0 2px var(--border-focus) !important;
        }
        .form-submit-btn:hover {
          background-color: var(--color-accent-hover) !important;
          transform: translateY(-2px);
        }
        .action-whatsapp:hover {
          background-color: #128C7E !important;
          transform: translateY(-2px);
        }
        .action-mailto:hover {
          border-color: var(--color-accent) !important;
          transform: translateY(-2px);
        }
        
        @media (max-width: 991px) {
          .contact-layout-split {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        
        @media (max-width: 768px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        
        @media (max-width: 575px) {
          .contact-info-cards-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
