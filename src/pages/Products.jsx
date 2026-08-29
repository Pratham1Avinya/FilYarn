import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, MessageSquare, PhoneCall, HelpCircle } from 'lucide-react';
import { productsData } from '../data/content';
import Placeholder from '../components/common/Placeholder';
import Button from '../components/common/Button';

const Products = () => {
  useEffect(() => {
    document.title = "Product Catalogue | FILYARN INDUSTRIES PRIVATE LIMITED";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Browse our B2B yarn and sewing thread catalogue. We offer Spun Polyester Dyed Yarn, Sewing Threads, raw Spun Polyester Yarn, and customized options.");
    }
  }, []);

  const getWhatsAppProductLink = (productName) => {
    const msg = `Hello Filyarn Industries, I would like to enquire about your product: ${productName}.`;
    return `https://wa.me/919157135001?text=${encodeURIComponent(msg)}`;
  };

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
            <span className="section-label">B2B Portfolio</span>
            <h1 className="font-serif" style={{ 
              fontSize: '3rem', 
              fontWeight: '400', 
              marginBottom: '24px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              rowGap: '0.15em'
            }}>
              {"Yarn & Thread".split(" ").map((word, i) => (
                <motion.span
                  key={`pr1-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  style={{ display: 'inline-block', marginRight: '0.25em' }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 }
                }}
                style={{ display: 'inline-block', marginRight: '0.25em', color: 'var(--color-accent)', fontStyle: 'italic' }}
              >
                Catalogue
              </motion.span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: '300' }}>
              We supply quality polyester yarns and threads tailored to industrial knitting, automated sewing, and weaving requirements. Select a product below to submit a quotation enquiry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product List Grid */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {productsData.map((product, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--border-radius)',
                    overflow: 'hidden',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.2fr',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
                  }}
                  className="product-grid-row"
                >
                  {/* Left Column: Image placeholder */}
                  <div style={{ order: isEven ? 1 : 2, position: 'relative' }} className="product-grid-img">
                    <Placeholder
                      src={product.image}
                      alt={product.name}
                      ratioClass="ratio-1-1"
                      text={product.name}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '20px',
                      backgroundColor: 'rgba(0, 0, 0, 0.75)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      color: 'var(--color-accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      border: '1px solid rgba(197, 168, 128, 0.3)'
                    }}>
                      B2B Standard Supply
                    </div>
                  </div>

                  {/* Right Column: Copy & Actions */}
                  <div style={{ order: isEven ? 2 : 1, padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="product-grid-info">
                    <h2 className="font-serif" style={{ fontSize: '2rem', fontWeight: '400', marginBottom: '16px', color: 'var(--text-primary)' }}>
                      {product.name}
                    </h2>
                    
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                      {product.longDesc}
                    </p>

                    {/* Applications Checklist */}
                    <div style={{ marginBottom: '32px' }}>
                      <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-accent)', marginBottom: '12px', fontWeight: '600' }}>
                        Typical Applications
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }} className="product-apps-grid">
                        {product.applications.map((app, appIdx) => (
                          <div key={appIdx} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <CheckSquare size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                      <a
                        href={getWhatsAppProductLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '12px 24px',
                          backgroundColor: '#25D366',
                          color: '#fff',
                          fontWeight: '600',
                          borderRadius: '4px',
                          fontSize: '0.9rem',
                          boxShadow: '0 4px 10px rgba(37, 211, 102, 0.2)',
                          transition: 'all 0.3s ease'
                        }}
                        className="product-whatsapp-btn"
                      >
                        <MessageSquare size={18} />
                        Enquire on WhatsApp
                      </a>
                      <Button to="/contact" variant="secondary" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
                        Request Quote File
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Centralized B2B Note */}
      <section className="section">
        <div className="container">
          <div style={{
            maxWidth: '720px',
            margin: '0 auto',
            textAlign: 'center',
            border: '1px dashed var(--border-light)',
            padding: '30px',
            borderRadius: 'var(--border-radius)',
            backgroundColor: 'var(--bg-secondary)'
          }}>
            <HelpCircle size={32} style={{ color: 'var(--color-accent)', margin: '0 auto 12px auto' }} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: '600', marginBottom: '8px' }}>Custom Specifications</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Do you require specific yarn plies, colors, or package dimensions? We handle custom order profiles according to buyer specifications. Contact our Surat sales office directly to discuss custom yarn spinning profiles.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .product-whatsapp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(37, 211, 102, 0.35);
        }
        
        @media (max-width: 991px) {
          .product-grid-row {
            grid-template-columns: 1fr !important;
          }
          .product-grid-img {
            order: 1 !important;
          }
          .product-grid-info {
            order: 2 !important;
            padding: 30px !important;
          }
        }
        @media (max-width: 575px) {
          .product-apps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Products;
