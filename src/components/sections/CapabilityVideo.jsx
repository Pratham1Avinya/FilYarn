import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Truck,
  Settings,
  ShieldCheck,
  Users,
  Leaf,
  Play,
  Factory
} from 'lucide-react';

const CapabilityVideo = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  // Ensure video auto-plays automatically on mount and handles browser policies
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handled silently for autoplay restriction policies
      });
    }
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // 5 Feature Cards across the bottom matching reference mockup
  const featureCards = [
    {
      icon: Settings,
      title: "Advanced Technology",
      desc: "Modern machines for superior quality and consistent production."
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      desc: "Every batch meets global standards for reliable performance."
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      desc: "Expert team with years of experience in yarn and thread manufacturing."
    },
    {
      icon: Leaf,
      title: "Sustainable Process",
      desc: "Eco-friendly practices for a greener and healthier future."
    },
    {
      icon: Truck,
      title: "Fast Dispatch",
      desc: "Ready to ship within 10 – 15 days."
    }
  ];

  return (
    <section className="mfg-scope-section" id="manufacturing-scope">
      {/* Background Decorative Ambient Curves and Glows */}
      <div className="mfg-backdrop" aria-hidden="true">
        {/* Top-Right Decorative Flowing Thread Line */}
        <svg className="mfg-curve-tr" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 120 0 C 260 160, 420 220, 600 120" stroke="rgba(99, 102, 241, 0.16)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 0 60 C 240 280, 480 340, 600 240" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 200 0 C 340 240, 520 320, 600 300" stroke="rgba(2, 132, 199, 0.08)" strokeWidth="1.2" strokeDasharray="5 5" />
        </svg>

        {/* Bottom-Left Ambient Spool Curves */}
        <svg className="mfg-curve-bl" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 380 C 200 320, 360 420, 560 460" stroke="rgba(99, 102, 241, 0.14)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 0 300 C 180 250, 320 360, 480 460" stroke="rgba(2, 132, 199, 0.09)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        <div className="mfg-glow-top" />
        <div className="mfg-glow-bottom" />
      </div>

      <div className="container mfg-container">
        {/* =========================================
            TOP ROW: EDITORIAL STORY & VIDEO SHOWCASE
           ========================================= */}
        <div className="mfg-top-grid">

          {/* Left Column: Heading, Subtext & Dispatch Card */}
          <motion.div 
            className="mfg-left-content"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow with flanking dashes */}
            <div className="mfg-eyebrow">
              <span className="mfg-dash" />
              <span>MANUFACTURING SCOPE</span>
              <span className="mfg-dash" />
            </div>

            {/* Main Heading */}
            <h2 className="mfg-main-heading font-serif">
              Our Manufacturing <span className="mfg-heading-accent">Capability</span>
            </h2>

            {/* Editorial Description */}
            <p className="mfg-description">
              We combine advanced technology, skilled workmanship and strict quality control to deliver high-quality yarns and threads for a better tomorrow.
            </p>

            {/* Dispatch Time Highlight Box */}
            <motion.div 
              className="mfg-dispatch-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mfg-dispatch-icon-box">
                <Truck size={24} />
              </div>
              <div className="mfg-dispatch-info">
                <span className="mfg-dispatch-label">DISPATCH TIME</span>
                <span className="mfg-dispatch-value">10 – 15 Days</span>
              </div>
              <div className="mfg-dispatch-divider" />
              <p className="mfg-dispatch-desc">
                Fast and reliable delivery to meet your business needs.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Auto-Playing Infinite Video Showcase */}
          <motion.div 
            className="mfg-right-visual"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mfg-visual-wrapper">
              
              {/* Top-Right Floating "Modern Facilities" Badge */}
              <div className="mfg-facilities-badge">
                <div className="mfg-facilities-icon">
                  <Factory size={15} />
                </div>
                <span>Modern Facilities</span>
              </div>

              {/* Infinite Auto-Playing Video Frame */}
              <div 
                className="mfg-image-card" 
                onClick={togglePlayPause}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && togglePlayPause()}
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
                title={isPlaying ? "Click to Pause" : "Click to Play"}
              >
                <video 
                  ref={videoRef}
                  src="/videos/about/About-section.mp4"
                  poster="/images/manufacturing/manufacturing-process-poster.jpg"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="mfg-main-video"
                />

                <div className="mfg-image-overlay" />

                {/* Show subtle play indicator ONLY if paused by user */}
                {!isPlaying && (
                  <div className="mfg-pause-overlay">
                    <div className="mfg-play-core">
                      <Play size={24} className="mfg-play-icon" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

        </div>

        {/* =========================================
            BOTTOM ROW: 5 CAPABILITY FEATURE CARDS
           ========================================= */}
        <div className="mfg-cards-grid">
          {featureCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={card.title}
                className="mfg-feature-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: 0.1 + idx * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {/* Icon Circle */}
                <div className="mfg-card-icon-circle">
                  <IconComp size={22} />
                </div>

                {/* Card Title */}
                <h4 className="mfg-card-title">{card.title}</h4>

                {/* Card Description */}
                <p className="mfg-card-desc">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Editorial Rule */}
        <motion.div 
          className="mfg-footer-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="mfg-footer-dash" />
          <span className="mfg-footer-text">QUALITY • INNOVATION • RELIABILITY</span>
          <span className="mfg-footer-dash" />
        </motion.div>
      </div>

      {/* Scoped CSS Styles */}
      <style>{`
        .mfg-scope-section {
          padding: 100px 0 90px 0;
          background-color: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        /* Decorative Background curves */
        .mfg-backdrop {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .mfg-curve-tr {
          position: absolute;
          top: -30px;
          right: -40px;
          width: 580px;
          height: 480px;
          opacity: 0.85;
        }

        .mfg-curve-bl {
          position: absolute;
          bottom: -50px;
          left: -40px;
          width: 560px;
          height: 450px;
          opacity: 0.75;
        }

        .mfg-glow-top {
          position: absolute;
          top: 0;
          right: 8%;
          width: 460px;
          height: 460px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
        }

        .mfg-glow-bottom {
          position: absolute;
          bottom: 0;
          left: 5%;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(2, 132, 199, 0.07) 0%, transparent 70%);
        }

        .mfg-container {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Top Grid */
        .mfg-top-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 60px;
        }

        /* Eyebrow */
        .mfg-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--color-accent);
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .mfg-dash {
          width: 22px;
          height: 1.5px;
          background-color: var(--color-accent);
          opacity: 0.8;
          display: inline-block;
        }

        /* Heading */
        .mfg-main-heading {
          font-size: clamp(2.3rem, 4vw, 3.2rem);
          font-weight: 400;
          line-height: 1.18;
          color: var(--text-primary);
          margin-bottom: 18px;
        }

        .mfg-heading-accent {
          font-style: italic;
          color: var(--color-accent);
          font-weight: 400;
        }

        .mfg-description {
          font-size: 1rem;
          line-height: 1.68;
          color: var(--text-secondary);
          margin-bottom: 32px;
          max-width: 520px;
        }

        /* Dispatch Time Card */
        .mfg-dispatch-card {
          display: flex;
          align-items: center;
          gap: 18px;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 20px;
          padding: 16px 24px;
          max-width: 480px;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.04);
        }

        [data-theme="dark"] .mfg-dispatch-card {
          background: #11141b;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.4);
        }

        .mfg-dispatch-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.09);
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        [data-theme="dark"] .mfg-dispatch-icon-box {
          background: rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
        }

        .mfg-dispatch-info {
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .mfg-dispatch-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #818cf8;
          text-transform: uppercase;
        }

        .mfg-dispatch-value {
          font-size: 1.25rem;
          font-weight: 800;
          color: #4f46e5;
          line-height: 1.2;
        }

        [data-theme="dark"] .mfg-dispatch-value {
          color: #a5b4fc;
        }

        .mfg-dispatch-divider {
          width: 1px;
          height: 38px;
          background-color: rgba(226, 232, 240, 0.9);
          margin: 0 4px;
        }

        [data-theme="dark"] .mfg-dispatch-divider {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .mfg-dispatch-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.45;
          margin: 0;
        }

        /* Right Visual Wrapper */
        .mfg-visual-wrapper {
          position: relative;
          width: 100%;
        }

        /* Modern Facilities Top-Right Badge */
        .mfg-facilities-badge {
          position: absolute;
          top: -18px;
          right: 22px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          padding: 8px 16px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.12);
          border: 1px solid rgba(226, 232, 240, 0.8);
          font-size: 0.82rem;
          font-weight: 600;
          color: #1e293b;
        }

        [data-theme="dark"] .mfg-facilities-badge {
          background: #1e2433;
          border-color: rgba(255, 255, 255, 0.1);
          color: #f1f5f9;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }

        .mfg-facilities-icon {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          background: #4f46e5;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Main Video Card */
        .mfg-image-card {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: 26px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(226, 232, 240, 0.7);
          box-shadow: 
            0 24px 60px -12px rgba(99, 102, 241, 0.28),
            0 8px 24px -4px rgba(15, 23, 42, 0.08);
          background-color: #0b0f17;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        [data-theme="dark"] .mfg-image-card {
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 28px 70px -12px rgba(99, 102, 241, 0.38),
            0 14px 32px -6px rgba(0, 0, 0, 0.65);
        }

        .mfg-image-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 70px -10px rgba(99, 102, 241, 0.38);
        }

        .mfg-main-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .mfg-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.35) 100%);
          pointer-events: none;
        }

        /* Pause Overlay */
        .mfg-pause-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.35);
          pointer-events: none;
          z-index: 4;
        }

        .mfg-play-core {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(79, 70, 229, 0.6);
        }

        .mfg-play-icon {
          margin-left: 3px;
        }

        /* 5 Feature Cards Grid */
        .mfg-cards-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 22px;
          margin-top: 20px;
          margin-bottom: 50px;
        }

        .mfg-feature-card {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.85);
          border-radius: 18px;
          padding: 28px 20px 24px 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.03);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        [data-theme="dark"] .mfg-feature-card {
          background: #11141b;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .mfg-feature-card:hover {
          transform: translateY(-7px);
          border-color: rgba(99, 102, 241, 0.45);
          box-shadow: 0 16px 36px rgba(99, 102, 241, 0.12);
        }

        .mfg-card-icon-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #eff4ff;
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          transition: all 0.3s ease;
        }

        [data-theme="dark"] .mfg-card-icon-circle {
          background: rgba(99, 102, 241, 0.18);
          color: #a5b4fc;
        }

        .mfg-feature-card:hover .mfg-card-icon-circle {
          background: #4f46e5;
          color: #ffffff;
          transform: scale(1.08);
          box-shadow: 0 6px 16px rgba(79, 70, 229, 0.35);
        }

        .mfg-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 8px;
          transition: color 0.25s ease;
        }

        .mfg-feature-card:hover .mfg-card-title {
          color: var(--color-accent);
        }

        .mfg-card-desc {
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.58;
          margin: 0;
        }

        /* Bottom Editorial Accent Rule */
        .mfg-footer-accent {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
        }

        .mfg-footer-dash {
          width: 48px;
          height: 1.5px;
          background: var(--color-accent);
          opacity: 0.6;
        }

        .mfg-footer-text {
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--color-accent);
          text-transform: uppercase;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .mfg-top-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .mfg-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .mfg-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .mfg-dispatch-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .mfg-dispatch-divider {
            width: 100%;
            height: 1px;
            margin: 8px 0;
          }
          .mfg-image-card {
            height: 300px;
          }
        }

        @media (max-width: 520px) {
          .mfg-cards-grid {
            grid-template-columns: 1fr;
          }
          .mfg-scope-section {
            padding: 70px 0 60px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default CapabilityVideo;
