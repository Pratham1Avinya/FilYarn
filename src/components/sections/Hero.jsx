import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  const videoRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    // Attempt instant autoplay on mount or cache restore
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsVideoReady(true))
          .catch(() => {
            // Autoplay policy fallback: muted autoplay is standard
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().then(() => setIsVideoReady(true)).catch(() => {});
            }
          });
      }
    }
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        backgroundColor: '#07090d',
        paddingTop: 'clamp(90px, 12vh, 120px)',
        paddingBottom: '20px',
        boxSizing: 'border-box'
      }}
    >
      {/* 
        INSTANT POSTER BACKDROP (0ms latency):
        Paints the exact video frame immediately on page load/refresh so
        there is ZERO black screen or flashing while the MP4 streams.
      */}
      <div
        className="hero-video-poster-backdrop"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('/videos/Hero-Section/hero_poster.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 15%',
          transform: 'scale(1.22)',
          transformOrigin: 'top center',
          pointerEvents: 'none',
          zIndex: 0
        }}
        aria-hidden="true"
      />

      {/* 
        BACKGROUND VIDEO:
        Direct, high-clarity video playback calibrated for yarn production.
        Preloaded automatically with fallback poster and smooth cross-fade.
      */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/Hero-Section/hero_poster.webp"
        onLoadedData={() => setIsVideoReady(true)}
        onCanPlay={() => {
          setIsVideoReady(true);
          if (videoRef.current) videoRef.current.play().catch(() => {});
        }}
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
          zIndex: 1,
          opacity: isVideoReady ? 1 : 0.95,
          transition: 'opacity 0.4s ease-out'
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
          boxSizing: 'border-box',
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px'
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
                fontSize: 'clamp(2.4rem, 4.8vw, 4.15rem)',
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
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: '#ffffff',
                maxWidth: '620px',
                marginBottom: '28px',
                lineHeight: 1.6,
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
        Continuous right-to-left outlined typography ticker.
        Placed cleanly at the bottom without overlapping the CTA buttons or text.
      */}
      <div 
        className="hero-marquee" 
        aria-hidden="true"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 4,
          userSelect: 'none',
          lineHeight: 1,
          marginTop: 'auto'
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
          animation: heroMarquee 45s linear infinite;
        }

        .hero-marquee-group {
          display: flex;
          flex-shrink: 0;
        }

        .hero-marquee-text {
          flex-shrink: 0;
          white-space: nowrap;
          font-family: 'Libre Franklin', 'Franklin Gothic Medium', sans-serif;
          font-size: clamp(38px, 4.5vw, 68px);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.01em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.45);
          padding-right: clamp(30px, 4vw, 60px);
          padding-bottom: 4px;
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
          .hero-marquee-text {
            font-size: clamp(28px, 7vw, 42px) !important;
            -webkit-text-stroke: 0.8px rgba(255, 255, 255, 0.4) !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
