import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section style={{
      height: 'calc(100vh - var(--header-height))',
      minHeight: '600px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#07090d' // Solid fallback dark background
    }}>
      {/* Background Graphic Asset Slot */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(197, 168, 128, 0.08) 0%, transparent 70%), linear-gradient(180deg, rgba(10, 12, 16, 0.4) 0%, rgba(10, 12, 16, 0.95) 100%)',
        zIndex: 1
      }} />

      {/* Grid Pattern overlay for B2B industrial tech feel */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.1,
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
        zIndex: 0
      }} />

      {/* Future Background Video / Image Slot Indicator */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        border: '1px dashed rgba(197, 168, 128, 0.3)',
        borderRadius: '4px',
        padding: '6px 12px',
        fontSize: '0.7rem',
        color: 'rgba(197, 168, 128, 0.6)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        zIndex: 2,
        pointerEvents: 'none'
      }}>
        Background Asset Slot: /images/company/hero-bg.jpg
      </div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.15
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Heading */}
          <motion.h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: '400',
              lineHeight: 1.15,
              marginBottom: '24px',
              maxWidth: '960px',
              marginRight: 'auto',
              marginLeft: 'auto',
              color: '#ffffff', // Explicitly white text for dark hero context
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              rowGap: '0.2em'
            }}
          >
            {"Quality Yarn. Reliable Supply.".split(" ").map((word, i) => (
              <motion.span
                key={`w1-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                style={{ display: 'inline-block', marginRight: '0.25em' }}
              >
                {word}
              </motion.span>
            ))}
            <span style={{ width: '100%' }}></span>
            {"Built for".split(" ").map((word, i) => (
              <motion.span
                key={`w2-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                style={{ display: 'inline-block', marginRight: '0.25em' }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              style={{
                display: 'inline-block',
                fontStyle: 'italic',
                color: 'var(--color-accent)'
              }}
            >
              Partnerships.
            </motion.span>
          </motion.h1>

          {/* Supporting Text with slide-in animation */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#94a3b8', // Clear, readable secondary slate text
              maxWidth: '720px',
              marginRight: 'auto',
              marginLeft: 'auto',
              marginBottom: '40px',
              lineHeight: 1.6,
              fontWeight: '300'
            }}
          >
            Filyarn Industries Pvt. Ltd. is a yarn trader and manufacturer based in Surat, Gujarat, supplying quality polyester yarn and sewing thread solutions for textile and garment businesses.
          </motion.p>

          {/* CTA Buttons with delayed appearance */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}
          >
            <Button to="/contact" variant="primary">
              Request a Quote
              <ArrowRight size={18} />
            </Button>
            <Button
              to="/manufacturing"
              variant="secondary"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)';
                e.currentTarget.style.color = 'var(--color-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              Explore Manufacturing
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        color: 'var(--text-muted)',
        fontSize: '0.8rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }}>
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={18} style={{ color: 'var(--color-accent)' }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
