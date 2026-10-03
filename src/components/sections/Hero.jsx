import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        height: '100vh',
        minHeight: '650px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#07090d',
        paddingTop: 'clamp(85px, 11vh, 105px)' // balances space for top floating navbar
      }}
    >
      {/* 
        BACKGROUND VIDEO:
        Direct, high-clarity video playback calibrated for the new yarn production video.
        Framed (scale 1.22, top-center origin) to completely eliminate bottom edge stock numbers,
        keeping the vibrant yellow yarn spools and high-tech spinning line in crisp focus.
        Plays in an infinite loop without ending, muted & playsInline for guaranteed autoplay.
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 15%',
          transform: 'scale(1.22)',
          transformOrigin: 'top center',
          pointerEvents: 'none',
          zIndex: 0
        }}
      >
        <source src="/videos/Hero-Section/HeroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content moved fully to the LEFT SIDE with zero unnecessary left space */}
      <div 
        className="hero-content-wrapper" 
        style={{ 
          position: 'relative', 
          zIndex: 10,
          width: '100%',
          maxWidth: '100%',
          paddingLeft: '24px',
          paddingRight: '24px',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ maxWidth: '760px', textAlign: 'left', marginLeft: 0, marginRight: 'auto' }}>
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
            {/* Animated Heading — Left-Aligned */}
            <motion.h1
              className="font-serif"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                fontWeight: '600',
                lineHeight: 1.15,
                marginBottom: '20px',
                color: '#ffffff',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                textAlign: 'left',
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

            {/* Supporting Text — Left-Aligned */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: '#ffffff',
                maxWidth: '620px',
                marginBottom: '32px',
                lineHeight: 1.65,
                fontWeight: '500',
                textAlign: 'left'
              }}
            >
              Filyarn Industries Pvt. Ltd. is a yarn trader and manufacturer based in Surat, Gujarat, supplying quality polyester yarn and sewing thread solutions for textile and garment businesses.
            </motion.p>

            {/* CTA Buttons — Left-Aligned */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap'
              }}
            >
              <Button to="/contact" variant="primary">
                <span>Request a Quote</span>
                <ArrowRight size={18} />
              </Button>
              <Button
                to="/manufacturing"
                variant="secondary"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                Explore Manufacturing
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 
        BOTTOM INFINITE MARQUEE:
        Continuous right-to-left oversized outlined typography ticker.
        Completely seamless, stutter-free GPU-accelerated animation without any gaps or pauses.
      */}
      <div 
        className="hero-marquee" 
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '28px',
          left: 0,
          width: '100%',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 4,
          userSelect: 'none',
          lineHeight: 1
        }}
      >
        <div className="hero-marquee-track">
          <div className="hero-marquee-group">
            <span className="hero-marquee-text">Filyarn Industries Pvt. Ltd.</span>
            <span className="hero-marquee-text">Filyarn Industries Pvt. Ltd.</span>
            <span className="hero-marquee-text">Filyarn Industries Pvt. Ltd.</span>
            <span className="hero-marquee-text">Filyarn Industries Pvt. Ltd.</span>
          </div>
          <div className="hero-marquee-group">
            <span className="hero-marquee-text">Filyarn Industries Pvt. Ltd.</span>
            <span className="hero-marquee-text">Filyarn Industries Pvt. Ltd.</span>
            <span className="hero-marquee-text">Filyarn Industries Pvt. Ltd.</span>
            <span className="hero-marquee-text">Filyarn Industries Pvt. Ltd.</span>
          </div>
        </div>
      </div>

      {/* Styles for Infinite Marquee and Responsive Layout */}
      <style>{`
        .hero-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: heroMarquee 48s linear infinite;
        }

        .hero-marquee-group {
          display: flex;
          flex-shrink: 0;
        }

        .hero-marquee-text {
          flex-shrink: 0;
          white-space: nowrap;
          font-family: 'Libre Franklin', 'Franklin Gothic Medium', sans-serif;
          font-size: clamp(55px, 6.5vw, 100px);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.01em;
          color: transparent;
          -webkit-text-stroke: 1.2px rgba(255, 255, 255, 0.75);
          padding-right: clamp(40px, 5vw, 80px);
          padding-bottom: 8px;
        }

        @keyframes heroMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (max-width: 768px) {
          .hero-content-wrapper {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .hero-marquee {
            bottom: 18px !important;
          }
          .hero-marquee-text {
            font-size: clamp(38px, 9vw, 55px) !important;
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.7) !important;
            padding-right: 32px !important;
            padding-bottom: 4px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
