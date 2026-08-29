import React from 'react';
import { ArrowRight, Send, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import WhatsAppButton from '../common/WhatsAppButton';

const ConnectCTA = () => {
  return (
    <section className="section" style={{ overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--border-radius)',
            padding: '60px 40px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
            textAlign: 'center'
          }}
          className="cta-banner"
        >
          {/* Subtle Background Lines */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.05,
            backgroundImage: `radial-gradient(var(--color-accent) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            zIndex: 0
          }} />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.04
                }
              }
            }}
            style={{ position: 'relative', zIndex: 2, maxWidth: '640px', margin: '0 auto' }}
          >
            <span className="section-label" style={{ marginBottom: '16px' }}>Start a Conversation</span>
            <h2 className="font-serif" style={{ 
              fontSize: '2.5rem', 
              fontWeight: '400', 
              marginBottom: '20px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              rowGap: '0.15em'
            }}>
              {"Let's Connect:".split(" ").map((word, i) => (
                <motion.span
                  key={`cc1-${i}`}
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
              {"Ready to Source Quality Yarn?".split(" ").map((word, i) => (
                <motion.span
                  key={`cc2-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  style={{ display: 'inline-block', marginRight: '0.25em', color: 'var(--color-accent)', fontStyle: 'italic' }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '36px'
            }}>
              Get in touch for competitive pricing, bulk supply, and dependable delivery across India. Our team responds quickly to every B2B enquiry.
            </p>

            {/* CTA buttons */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <Button to="/contact" variant="primary">
                Request a Quote
                <ArrowRight size={16} />
              </Button>
              <WhatsAppButton variant="cta" text="WhatsApp Enquiry" />
            </div>

            {/* Quick Note */}
            <div style={{
              marginTop: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              color: 'var(--text-muted)'
            }}>
              <Send size={12} />
              <span>Typically responds within 2 hours during business hours.</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 575px) {
          .cta-banner {
            padding: 40px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ConnectCTA;
