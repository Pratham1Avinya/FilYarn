import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import Placeholder from '../common/Placeholder';

const CompanyIntro = () => {
  const cards = [
    { title: 'Quality', text: 'Reliable product standards' },
    { title: 'Supply', text: 'Dependable bulk supply' },
    { title: 'Partnership', text: 'Long-term customer relationships' }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="grid-2">
          {/* Left Column: Copy & CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  staggerChildren: 0.04
                }
              }
            }}
          >
            <span className="section-label">Who We Are</span>
            <h2 className="section-title" style={{ display: 'flex', flexWrap: 'wrap', rowGap: '0.1em' }}>
              {"Built Around ".split(" ").map((word, i) => (
                <motion.span
                  key={`ci1-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  style={{ display: 'inline-block', marginRight: '0.2em' }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 }
                }}
                style={{ display: 'inline-block', marginRight: '0.2em', color: 'var(--color-accent)' }}
              >
                Quality,
              </motion.span>
              {"Reliability & Relationships".split(" ").map((word, i) => (
                <motion.span
                  key={`ci2-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  style={{ display: 'inline-block', marginRight: '0.2em' }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
            <p className="section-desc" style={{ marginBottom: '32px' }}>
              Filyarn Industries Pvt. Ltd. is a prominent textile manufacturer and B2B supplier based in Surat, Gujarat. The company focuses on dependable yarn and sewing thread solutions, responsive customer service and reliable supply for textile and garment businesses.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              {cards.map((card, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)' }}>{card.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{card.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button to="/about" variant="secondary">
              About Filyarn
              <ArrowRight size={16} />
            </Button>
          </motion.div>

          {/* Right Column: Asset & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              borderRadius: 'var(--border-radius)',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              border: '1px solid var(--border-light)'
            }}>
              <Placeholder
                src="/images/company/intro.jpg"
                alt="Filyarn Industries Office / Facility"
                ratioClass="ratio-4-3"
                text="Company Facility Overview"
              />
            </div>
            
            {/* Visual accent element behind image */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '-15px',
              width: '80px',
              height: '80px',
              borderLeft: '3px solid var(--color-accent)',
              borderTop: '3px solid var(--color-accent)',
              zIndex: -1,
              opacity: 0.7
            }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
