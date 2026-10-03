import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Truck,
  Users,
  ArrowRight,
  Factory
} from 'lucide-react';

const facilityImages = [
  {
    src: "/images/company/who-we-are.jpg",
    alt: "Rieter Spinning Hall - State-of-the-Art Facility"
  },
  {
    src: "/images/manufacturing/manufacturing-process-poster.jpg",
    alt: "Precision Manufacturing and Spinning Lines"
  },
  {
    src: "/images/manufacturing/yarn-twisting.jpg",
    alt: "High-Tenacity TFO Twisting Machines"
  },
  {
    src: "/images/manufacturing/coning.jpg",
    alt: "Precision Coning and Package Winding"
  }
];

const CompanyIntro = () => {
  // Auto-changing facility image state (smooth cross-fade every 4 seconds)
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % facilityImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // 3 Key Value Points as horizontal feature rows with active cycling
  const valuePoints = [
    {
      icon: ShieldCheck,
      title: "Quality",
      desc: "Reliable product standards"
    },
    {
      icon: Truck,
      title: "Supply",
      desc: "Dependable bulk supply"
    },
    {
      icon: Users,
      title: "Partnership",
      desc: "Long-term customer relationships"
    }
  ];

  const [activeValueIndex, setActiveValueIndex] = useState(0);

  // Auto-cycle active feature point highlight every 3.6s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValueIndex((prev) => (prev + 1) % valuePoints.length);
    }, 3600);
    return () => clearInterval(interval);
  }, [valuePoints.length]);

  return (
    <section className="section who-we-are-section" id="who-we-are">
      {/* Subtle background glow accents */}
      <div
        aria-hidden="true"
        className="who-bg-glow"
      />

      <div className="container who-container">
        <div className="who-grid">

          {/* =========================================
              LEFT COLUMN: CONTENT & EDITORIAL STORY
             ========================================= */}
          <motion.div
            className="who-left-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow with delicate flanking lines - Slide in from left */}
            <motion.div 
              className="who-eyebrow-wrap"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="who-eyebrow-line" />
              <span className="who-eyebrow-text">WHO WE ARE</span>
              <span className="who-eyebrow-line" />
            </motion.div>

            {/* Main Editorial Heading - Fade in and slide up */}
            <motion.h2 
              className="who-heading"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="who-heading-line1">Built Around Quality,</span>
              <span className="who-heading-line2">Reliability &amp; Relationships</span>
            </motion.h2>

            {/* Concise Company Description - Fade in */}
            <motion.p 
              className="who-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Filyarn Industries Pvt. Ltd. is a prominent textile manufacturer and B2B supplier based in Surat, Gujarat. The company focuses on dependable yarn and sewing thread solutions, responsive customer service and reliable supply for textile and garment businesses.
            </motion.p>

            {/* Three Value Feature Rows - Staggered Slide In with Active Highlight Indicator */}
            <div className="who-features-list">
              {valuePoints.map((point, index) => {
                const IconComponent = point.icon;
                const isActive = activeValueIndex === index;
                return (
                  <motion.div
                    key={point.title}
                    className={`who-feature-row ${isActive ? 'is-active' : ''}`}
                    onMouseEnter={() => setActiveValueIndex(index)}
                    initial={{ opacity: 0, x: -35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="who-feature-icon-pill">
                      <IconComponent size={20} />
                    </div>
                    <div className="who-feature-text">
                      <h4 className="who-feature-title">{point.title}</h4>
                      <p className="who-feature-desc">{point.desc}</p>
                    </div>
                    {isActive && (
                      <motion.div 
                        layoutId="activeFeatureBar"
                        className="who-feature-active-indicator"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* About Filyarn Premium Outlined Button - Fade in & slide up */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="who-cta-wrap"
            >
              <Link to="/about" className="who-about-btn">
                <span>About Filyarn</span>
                <ArrowRight size={17} className="who-about-arrow" />
              </Link>
            </motion.div>
          </motion.div>

          {/* =========================================
              RIGHT COLUMN: LARGE VIDEO & COMPOSITION
             ========================================= */}
          <motion.div
            className="who-right-visual"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="who-composition-wrap">

              <svg 
                className="who-thread-curves" 
                viewBox="0 0 600 600" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="whoTopThreadGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.85" />
                    <stop offset="60%" stopColor="#818cf8" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.35" />
                  </linearGradient>
                  <linearGradient id="whoBottomThreadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.35" />
                    <stop offset="40%" stopColor="#818cf8" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.9" />
                  </linearGradient>
                  <filter id="whoGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#6366f1" floodOpacity="0.25" />
                  </filter>
                </defs>

                {/* Upper looping filament arch */}
                <motion.path 
                  d="M 68,135 C 128,36 225,22 335,62 C 372,76 400,96 418,122" 
                  stroke="url(#whoTopThreadGrad)" 
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  filter="url(#whoGlowFilter)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, ease: "easeOut" }}
                />
                {/* Upper starting node dot */}
                <circle cx="68" cy="135" r="4.5" fill="#6366f1" />
                <circle cx="68" cy="135" r="2" fill="#ffffff" />

                {/* Lower sweeping filament curve */}
                <motion.path 
                  d="M 108,468 C 158,548 248,580 338,570 C 372,564 395,552 414,538" 
                  stroke="url(#whoBottomThreadGrad)" 
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  filter="url(#whoGlowFilter)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, delay: 0.2, ease: "easeOut" }}
                />
                {/* Lower terminal node dot */}
                <circle cx="414" cy="538" r="4.5" fill="#6366f1" />
                <circle cx="414" cy="538" r="2" fill="#ffffff" />
              </svg>

              {/* Main Company Frame: Auto-changing Facility Images with Smooth Cross-fade */}
              <motion.div 
                className="who-image-frame"
                initial={{ opacity: 0, y: 25, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <AnimatePresence mode="sync">
                  <motion.img 
                    key={currentImageIdx}
                    src={facilityImages[currentImageIdx].src}
                    alt={facilityImages[currentImageIdx].alt}
                    className="who-main-image"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                </AnimatePresence>
                <div className="who-image-overlay" />
              </motion.div>

              {/* Floating Card 1: Top-Right "Trusted Textile Partner" */}
              <motion.div 
                className="who-float-card who-float-top-right"
                initial={{ opacity: 0, y: -25, x: 25 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                animate={{ y: [-3, 3, -3] }}
                transition={{
                  duration: 0.65,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <div className="who-float-icon-box">
                  <Factory size={22} />
                </div>
                <div className="who-float-content">
                  <h5 className="who-float-title">Trusted Textile Partner</h5>
                  <p className="who-float-sub">For a better tomorrow</p>
                </div>
              </motion.div>

              {/* Floating Card 2: Left-Middle Statistics Card */}
              <motion.div 
                className="who-float-card who-float-stats"
                initial={{ opacity: 0, x: -40, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [3, -3, 3] }}
                transition={{
                  duration: 0.65,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                  y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
                }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <div className="who-stat-item">
                  <span className="who-stat-label">Quality Products</span>
                  <span className="who-stat-number">100%</span>
                </div>
                <div className="who-stat-divider" />
                <div className="who-stat-item">
                  <span className="who-stat-label">On-Time Delivery</span>
                  <span className="who-stat-number">99%</span>
                </div>
                <div className="who-stat-divider" />
                <div className="who-stat-item">
                  <span className="who-stat-label">Happy Clients</span>
                  <span className="who-stat-number">100+</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scoped CSS Styles */}
      <style>{`
        .who-we-are-section {
          padding: 110px 0 95px 0;
          position: relative;
          background-color: var(--bg-primary);
          overflow: hidden;
        }

        .who-bg-glow {
          position: absolute;
          top: 15%;
          right: 5%;
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, rgba(99, 102, 241, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .who-container {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .who-grid {
          display: grid;
          grid-template-columns: 46% 54%;
          align-items: center;
          column-gap: 60px;
          row-gap: 50px;
        }

        /* Left Column Styles */
        .who-left-content {
          max-width: 540px;
        }

        .who-eyebrow-wrap {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .who-eyebrow-line {
          width: 30px;
          height: 1.5px;
          background-color: var(--color-accent);
          opacity: 0.75;
          display: inline-block;
        }

        .who-eyebrow-text {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--color-accent);
          text-transform: uppercase;
        }

        .who-heading {
          font-size: clamp(2.1rem, 3.4vw, 2.9rem);
          line-height: 1.18;
          font-weight: 700;
          margin-bottom: 22px;
          display: flex;
          flex-direction: column;
        }

        .who-heading-line1 {
          font-family: var(--font-serif);
          color: var(--text-primary);
          font-weight: 700;
        }

        .who-heading-line2 {
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--color-accent);
          font-weight: 400;
        }

        .who-description {
          font-size: 1.02rem;
          line-height: 1.68;
          color: var(--text-secondary);
          margin-bottom: 34px;
          max-width: 500px;
        }

        /* Value Feature Rows */
        .who-features-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 38px;
        }

        .who-feature-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 10px 18px 10px 12px;
          border-radius: 14px;
          position: relative;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .who-feature-row.is-active,
        .who-feature-row:hover {
          background: rgba(99, 102, 241, 0.05);
          transform: translateX(6px);
        }

        .who-feature-active-indicator {
          position: absolute;
          left: 0;
          top: 15%;
          bottom: 15%;
          width: 3px;
          border-radius: 4px;
          background: linear-gradient(180deg, #6366f1, #4f46e5);
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.6);
        }

        .who-feature-icon-pill {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.08);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(99, 102, 241, 0.15);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
        }

        .who-feature-row.is-active .who-feature-icon-pill,
        .who-feature-row:hover .who-feature-icon-pill {
          transform: scale(1.1);
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
        }

        .who-feature-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .who-feature-title {
          font-size: 1.02rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.25;
          transition: color 0.25s ease;
        }

        .who-feature-row.is-active .who-feature-title,
        .who-feature-row:hover .who-feature-title {
          color: var(--color-accent);
        }

        .who-feature-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Premium Outlined About Button */
        .who-cta-wrap {
          margin-top: 10px;
        }

        .who-about-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 12px 28px;
          border-radius: 9999px;
          background: var(--bg-primary);
          border: 1.5px solid rgba(99, 102, 241, 0.38);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .who-about-btn:hover {
          border-color: var(--color-accent);
          background: rgba(99, 102, 241, 0.05);
          color: var(--color-accent);
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(99, 102, 241, 0.16);
        }

        .who-about-arrow {
          color: var(--color-accent);
          transition: transform 0.25s ease;
        }

        .who-about-btn:hover .who-about-arrow {
          transform: translateX(5px);
        }

        /* Right Column Composition */
        .who-right-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .who-composition-wrap {
          position: relative;
          width: 100%;
          max-width: 530px;
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Decorative Thread Curves */
        .who-thread-curves {
          position: absolute;
          inset: -30px;
          width: calc(100% + 60px);
          height: calc(100% + 60px);
          pointer-events: none;
          z-index: 2;
        }

        /* 
          Main Video Frame with Soft Ambient Glow (Futuristic & Premium Outer Glow)
        */
        .who-image-frame {
          position: relative;
          width: 100%;
          height: 485px;
          border-radius: 28px;
          overflow: hidden;
          z-index: 3;
          border: 1px solid rgba(226, 232, 240, 0.6);
          background-color: #0b0f17;
          box-shadow: 
            0 24px 60px -12px rgba(99, 102, 241, 0.32),
            0 0 50px 0 rgba(99, 102, 241, 0.2),
            0 8px 24px -4px rgba(15, 23, 42, 0.08);
          transition: box-shadow 0.4s ease;
        }

        [data-theme="dark"] .who-image-frame {
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 28px 70px -12px rgba(99, 102, 241, 0.45),
            0 0 60px 4px rgba(99, 102, 241, 0.28),
            0 14px 32px -6px rgba(0, 0, 0, 0.65);
        }

        .who-main-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .who-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.35) 100%);
          pointer-events: none;
          z-index: 3;
        }

        /* Floating Information Card 1: Top-Right (Multi-layer Ambient Soft Shadow & Shimmer) */
        .who-float-card {
          position: absolute;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.7);
          border-radius: 22px;
          z-index: 5;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          overflow: hidden;
          transition: transform 0.25s ease, opacity 0.3s ease, box-shadow 0.25s ease;
        }

        .who-float-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: -120%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          transform: skewX(-20deg);
          animation: cardShimmerSweep 5s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes cardShimmerSweep {
          0%, 70% {
            left: -120%;
            opacity: 0;
          }
          75% {
            opacity: 0.8;
          }
          100% {
            left: 220%;
            opacity: 0;
          }
        }

        [data-theme="dark"] .who-float-card {
          background: rgba(15, 23, 42, 0.94);
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 18px 38px -8px rgba(0, 0, 0, 0.6);
        }

        .who-float-top-right {
          top: -24px;
          right: -28px;
          padding: 18px 22px;
          display: flex;
          align-items: center;
          gap: 14px;
          max-width: 255px;
          box-shadow: 
            0 18px 38px -8px rgba(15, 23, 42, 0.08),
            0 6px 14px -3px rgba(15, 23, 42, 0.03),
            0 0 0 1px rgba(255, 255, 255, 0.9) inset;
        }

        .who-float-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: rgba(99, 102, 241, 0.08);
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .who-float-content {
          display: flex;
          flex-direction: column;
        }

        .who-float-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 2px 0;
          line-height: 1.25;
        }

        [data-theme="dark"] .who-float-title {
          color: #f8fafc;
        }

        .who-float-sub {
          font-size: 0.8rem;
          color: #64748b;
          margin: 0;
          line-height: 1.2;
        }

        /* Floating Card 2: Left-Middle Statistics Card (Soft Ambient Occlusion Shadow) */
        .who-float-stats {
          left: -52px;
          bottom: 55px;
          padding: 24px 26px;
          display: flex;
          flex-direction: column;
          gap: 13px;
          min-width: 180px;
          box-shadow: 
            0 22px 48px -10px rgba(15, 23, 42, 0.09),
            0 8px 18px -4px rgba(15, 23, 42, 0.04),
            0 0 0 1px rgba(255, 255, 255, 0.9) inset;
        }

        .who-stat-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .who-stat-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: #64748b;
          letter-spacing: 0.01em;
        }

        .who-stat-number {
          font-size: 1.65rem;
          font-weight: 800;
          color: #4338ca;
          line-height: 1.15;
          font-family: var(--font-sans);
        }

        [data-theme="dark"] .who-stat-number {
          color: #818cf8;
        }

        .who-stat-divider {
          height: 1px;
          background-color: #f1f5f9;
          width: 100%;
        }

        [data-theme="dark"] .who-stat-divider {
          background-color: rgba(255, 255, 255, 0.08);
        }

        /* Subtle dimming of floating cards during in-place video playback */
        .who-float-card.is-video-playing {
          opacity: 0.22;
          pointer-events: none;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1080px) {
          .who-grid {
            grid-template-columns: 1fr;
            row-gap: 55px;
          }

          .who-left-content {
            max-width: 100%;
          }

          .who-right-visual {
            justify-content: center;
            margin-top: 15px;
          }

          .who-composition-wrap {
            max-width: 500px;
            margin-bottom: 35px;
          }
        }

        @media (max-width: 640px) {
          .who-we-are-section {
            padding: 70px 0 60px 0;
          }

          .who-heading {
            font-size: 1.85rem;
          }

          .who-image-frame {
            height: 360px;
          }

          .who-composition-wrap {
            min-height: auto;
          }

          .who-float-top-right {
            right: 0;
            top: -16px;
            padding: 12px 16px;
            max-width: 210px;
          }

          .who-float-title {
            font-size: 0.82rem;
          }

          .who-float-sub {
            font-size: 0.72rem;
          }

          .who-float-stats {
            left: 0;
            bottom: -20px;
            padding: 14px 16px;
          }

          .who-stat-number {
            font-size: 1.25rem;
          }

          .who-play-button {
            right: -10px;
            width: 80px;
            height: 80px;
          }

          .who-play-ring-middle {
            inset: 11px;
          }

          .who-play-core {
            width: 44px;
            height: 44px;
          }

          .who-play-icon {
            width: 18px;
            height: 18px;
          }

          .who-backdrop-card {
            top: -14px;
            left: -14px;
            right: -12px;
            bottom: -14px;
            width: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default CompanyIntro;
