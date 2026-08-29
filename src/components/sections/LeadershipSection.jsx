import React, { useState } from 'react';
import { Play, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyConfig } from '../../data/config';
import Placeholder from '../common/Placeholder';

const LeadershipSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section section-alt" style={{ overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '48px' }}>
          <span className="section-label" style={{ color: 'var(--color-logo-blue)' }}>Our Governance</span>
          <h2 className="section-title">
            Leadership: <span>The People Behind the Vision</span>
          </h2>
        </div>

        {/* Cinematic Layout Container */}
        <div className="leadership-cinematic-container" style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* 65% Video Player Card */}
          <div className="leadership-video-wrapper" style={{
            flex: '0 0 65%',
            position: 'relative',
            borderRadius: 'var(--border-radius)',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)',
            border: '1px solid var(--border-light)',
            backgroundColor: '#000'
          }}>
            {!isPlaying ? (
              <div 
                style={{ position: 'relative', cursor: 'pointer', display: 'block' }}
                onClick={() => setIsPlaying(true)}
                className="video-poster-box"
              >
                {/* Image Poster */}
                <Placeholder
                  src={companyConfig.imagePaths.leadershipPoster}
                  alt="Ghanshyambhai B. Gajera Video Poster"
                  ratioClass="ratio-16-9"
                  text="Leadership Video Message"
                />
                
                {/* Dark overlay with hover transitions */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(10, 13, 22, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.3s ease',
                  zIndex: 2
                }} className="video-overlay">
                  {/* Pulsing Play Button */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: '76px',
                      height: '76px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      boxShadow: '0 10px 30px rgba(99, 102, 241, 0.5)',
                      cursor: 'pointer',
                      zIndex: 3
                    }}
                    className="pulse-button"
                  >
                    <Play size={28} fill="currentColor" style={{ marginLeft: '4px' }} />
                  </motion.div>
                </div>
              </div>
            ) : (
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                <video
                  src={companyConfig.videoPaths.leadership}
                  poster={companyConfig.imagePaths.leadershipPoster}
                  controls
                  autoPlay
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            )}
          </div>

          {/* 35% Copy and Quote Column */}
          <div className="leadership-content-panel" style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative'
          }}>
            {/* Accent Line */}
            <div style={{
              width: '60px',
              height: '4px',
              background: 'var(--gradient-brand)',
              borderRadius: '2px',
              marginBottom: '28px'
            }} />

            <span style={{
              fontSize: '0.85rem',
              color: 'var(--color-logo-blue)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontWeight: '600',
              display: 'block',
              marginBottom: '8px'
            }}>
              Director Statement
            </span>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '400',
              marginBottom: '8px',
              fontFamily: 'var(--font-sans)',
              color: 'var(--text-primary)'
            }}>
              Ghanshyambhai B. Gajera
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              marginBottom: '28px',
              fontWeight: '400'
            }}>
              Co-Founder &amp; Director — Filyarn Industries Pvt. Ltd.
            </p>

            {/* Blockquote Quote */}
            <div style={{
              position: 'relative',
              backgroundColor: 'var(--bg-tertiary)',
              border: '1px solid var(--border-light)',
              padding: '24px 28px',
              borderRadius: 'var(--border-radius)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
            }}>
              <Quote size={40} style={{
                color: 'var(--color-accent)',
                opacity: 0.12,
                position: 'absolute',
                top: '16px',
                right: '20px',
                pointerEvents: 'none'
              }} />
              
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-primary)',
                fontStyle: 'italic',
                lineHeight: 1.7,
                fontWeight: '300',
                position: 'relative',
                zIndex: 2
              }}>
                "Building trust in the textile B2B supply chain requires combining quality yarn standards, dependable bulk supply, and long-term customer partnerships. At Filyarn, our governance centers on these priorities to ensure mutually rewarding business relations."
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .video-poster-box:hover .video-overlay {
          background-color: rgba(10, 13, 22, 0.55) !important;
        }
        
        .pulse-button {
          position: relative;
        }
        .pulse-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid var(--color-accent);
          opacity: 0.7;
          animation: pulseRing 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        @media (max-width: 991px) {
          .leadership-cinematic-container {
            flex-direction: column !important;
            gap: 32px !important;
          }
          .leadership-video-wrapper {
            flex: 0 0 100% !important;
            width: 100% !important;
          }
          .leadership-content-panel {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LeadershipSection;
