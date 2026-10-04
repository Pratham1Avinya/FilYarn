import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  ArrowRight, 
  Cog, 
  ShieldCheck, 
  Users, 
  Leaf, 
  Maximize2 
} from 'lucide-react';
import { companyConfig } from '../data/config';
import { manufacturingSteps } from '../data/content';
import ConnectCTA from '../components/sections/ConnectCTA';

const Manufacturing = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    document.title = "Manufacturing Facility & Process | FILYARN";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Explore Filyarn Industries state-of-the-art manufacturing facility and our 8-step yarn manufacturing process from raw material to dispatch."
      );
    }
  }, []);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn("Video playback: ", err);
        });
      }
    }
  };

  const handleFullscreen = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  const facilityFeatures = [
    {
      icon: <Cog size={22} />,
      title: "Advanced Technology",
      desc: "Modern machines for superior quality"
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Quality Assurance",
      desc: "Every batch meets global standards"
    },
    {
      icon: <Users size={22} />,
      title: "Skilled Workforce",
      desc: "Expert team with years of experience"
    },
    {
      icon: <Leaf size={22} />,
      title: "Sustainable Process",
      desc: "Responsible manufacturing for a greener future"
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', overflowX: 'hidden' }}>
      {/* Top Hero Section — State-of-the-Art Manufacturing Facility */}
      <section className="mfg-hero-section">
        {/* Subtle Decorative Ambient Lines */}
        <div className="mfg-hero-backdrop-lines" aria-hidden="true">
          <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M-100 200 C300 100, 600 450, 1100 150 C1300 50, 1500 250, 1600 200" stroke="rgba(99,102,241,0.08)" strokeWidth="1.5" />
            <path d="M-50 350 C400 250, 800 500, 1300 280 C1450 200, 1550 350, 1650 300" stroke="rgba(2,132,199,0.07)" strokeWidth="1.5" />
            <path d="M100 100 C500 50, 900 380, 1400 120" stroke="rgba(99,102,241,0.05)" strokeWidth="1.2" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="mfg-hero-grid">
            {/* Left Column: Text & CTA with Staggered Entrance */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.05
                  }
                }
              }}
              className="mfg-hero-content"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="mfg-badge"
              >
                <span>OUR MANUFACTURING</span>
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="mfg-hero-heading font-serif"
              >
                State-of-the-Art <br />
                <span className="mfg-hero-heading-accent">Manufacturing Facility</span>
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
                }}
                className="mfg-hero-subtext"
              >
                We combine advanced technology, skilled workmanship and strict quality control to deliver high-quality yarns and threads for a better tomorrow.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } }
                }}
              >
                <button
                  type="button"
                  className="mfg-watch-video-btn"
                  onClick={handlePlayVideo}
                >
                  <span className="mfg-btn-play-circle">
                    <Play size={13} fill="#ffffff" style={{ marginLeft: '2px', color: '#ffffff' }} />
                  </span>
                  <span>Watch Our Factory Video</span>
                  <ArrowRight size={15} className="mfg-btn-arrow" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column: Video Showcase Card with Floating Glow & Radar Rings */}
            <motion.div
              initial={{ opacity: 0, x: 45, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mfg-hero-video-wrapper"
            >
              <div className="mfg-video-card">
                <video
                  ref={videoRef}
                  src={companyConfig.videoPaths.manufacturing}
                  poster={companyConfig.imagePaths.manufacturingPoster}
                  playsInline
                  controls={isPlaying}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="mfg-video-media"
                />

                {!isPlaying && (
                  <>
                    <div 
                      className="mfg-video-poster-overlay"
                      onClick={handlePlayVideo}
                    />

                    {/* Central Play Button with Vibrant Indigo-Violet Glow and Radar Ripple Rings */}
                    <button
                      type="button"
                      className="mfg-video-center-btn"
                      onClick={handlePlayVideo}
                      aria-label="Play Factory Video"
                    >
                      <Play size={24} fill="#ffffff" style={{ marginLeft: '3px', color: '#ffffff' }} />
                    </button>

                    {/* Duration Badge */}
                    <div className="mfg-video-time-badge">
                      <Play size={10} fill="currentColor" />
                      <span>2:14</span>
                    </div>

                    {/* Fullscreen Button */}
                    <button
                      type="button"
                      className="mfg-video-fullscreen-btn"
                      onClick={handleFullscreen}
                      aria-label="Fullscreen"
                      title="View Fullscreen"
                    >
                      <Maximize2 size={15} />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar: 4 Industrial Capabilities with Staggered Entrance & Interactive Hover */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mfg-features-bar"
          >
            {facilityFeatures.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="mfg-feature-item"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 + idx * 0.08 }}
              >
                <div className="mfg-feature-icon-wrap">
                  {item.icon}
                </div>
                <div className="mfg-feature-text">
                  <h3 className="mfg-feature-title">{item.title}</h3>
                  <p className="mfg-feature-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section — Our Manufacturing Process */}
      <section className="section section-alt" style={{ paddingTop: '90px', paddingBottom: '100px' }}>
        <div className="container">
          {/* Centered Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '70px' }}
          >
            <div className="mfg-badge" style={{ justifyContent: 'center', marginBottom: '14px' }}>
              <span>MANUFACTURING PROCESS</span>
            </div>

            <h2 className="mfg-process-heading font-serif">
              Our <span className="mfg-process-heading-accent">Manufacturing</span> Process
            </h2>

            <p className="mfg-process-desc">
              From raw materials to finished yarn, every step is carefully managed with precision and expertise to ensure consistent quality and performance.
            </p>
          </motion.div>

          {/* Alternating 8 Manufacturing Steps with Left-to-Right & Right-to-Left Slider Entrance */}
          <div className="mfg-steps-container">
            {manufacturingSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              const renderImage = () => (
                <div className="mfg-step-image-card">
                  <img
                    src={step.image}
                    alt={`${step.step} - ${step.title}`}
                    className="mfg-step-image-el"
                    loading="lazy"
                  />
                </div>
              );

              const renderInfo = () => (
                <div className="mfg-step-info-card">
                  <div className="mfg-step-tag-row">
                    <span className="mfg-step-num">{step.step}</span>
                    <div className="mfg-step-num-line" />
                    <span className="mfg-step-tag-label">Production Stage</span>
                  </div>
                  <h3 className="mfg-step-card-title font-serif">{step.title}</h3>
                  <p className="mfg-step-card-desc">{step.desc}</p>
                </div>
              );

              return (
                <div
                  key={step.step}
                  className="mfg-step-row"
                >
                  {/* Left Column (Col 1):
                      - Even (01, 03, 05, 07): Image
                      - Odd (02, 04, 06, 08): Text
                      Slides in from Left to Right (x: -70 -> 0)
                  */}
                  <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mfg-step-col"
                  >
                    {isEven ? renderImage() : renderInfo()}
                  </motion.div>

                  {/* Right Column (Col 2):
                      - Even (01, 03, 05, 07): Text
                      - Odd (02, 04, 06, 08): Image
                      Slides in from Right to Left (x: 70 -> 0)
                  */}
                  <motion.div
                    initial={{ opacity: 0, x: 70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                    className="mfg-step-col"
                  >
                    {isEven ? renderInfo() : renderImage()}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Connect CTA */}
      <ConnectCTA />

      {/* Scoped CSS Styles for Pixel-Perfect Layout and Responsiveness */}
      <style>{`
        /* Hero Section */
        .mfg-hero-section {
          position: relative;
          padding: 60px 0 44px 0;
          background: linear-gradient(180deg, var(--bg-primary) 0%, rgba(99, 102, 241, 0.035) 100%);
          border-bottom: 1px solid var(--border-light);
          overflow: hidden;
        }

        /* Subtle Ambient Contour Lines */
        .mfg-hero-backdrop-lines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.85;
        }

        .mfg-hero-backdrop-lines svg {
          width: 100%;
          height: 100%;
        }

        .mfg-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 48px;
        }

        .mfg-hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        /* Dash Badges */
        .mfg-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-accent);
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .mfg-badge-dash {
          width: 22px;
          height: 1.5px;
          background-color: var(--color-accent);
          opacity: 0.75;
          display: inline-block;
        }

        /* Headings */
        .mfg-hero-heading {
          font-size: 3.25rem;
          font-weight: 400;
          line-height: 1.15;
          margin-bottom: 20px;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .mfg-hero-heading-accent {
          font-style: italic;
          color: var(--color-accent);
          font-weight: 400;
        }

        .mfg-hero-subtext {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.65;
          max-width: 480px;
          margin-bottom: 28px;
        }

        /* Watch Video Button with Pulse Ring */
        .mfg-watch-video-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 8px 24px 8px 10px;
          border-radius: 999px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
          color: var(--text-primary);
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mfg-watch-video-btn:hover {
          transform: translateY(-3px);
          border-color: var(--color-accent);
          box-shadow: 0 10px 28px rgba(99, 102, 241, 0.22);
        }

        .mfg-watch-video-btn:hover .mfg-btn-arrow {
          transform: translateX(5px);
        }

        .mfg-btn-play-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);
          position: relative;
        }

        .mfg-btn-play-circle::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.4);
          animation: btnPulseRing 2.4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
          z-index: -1;
        }

        @keyframes btnPulseRing {
          0% {
            transform: scale(1);
            opacity: 0.85;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        .mfg-btn-arrow {
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          color: var(--color-accent);
        }

        /* Video Showcase Card with Floating Ambient Glow */
        .mfg-hero-video-wrapper {
          width: 100%;
          position: relative;
        }

        .mfg-hero-video-wrapper::before {
          content: '';
          position: absolute;
          inset: -14px;
          background: radial-gradient(circle at 60% 50%, rgba(99, 102, 241, 0.22), transparent 70%);
          filter: blur(26px);
          z-index: 0;
          border-radius: 26px;
          pointer-events: none;
          animation: ambientFloatGlow 5.5s ease-in-out infinite alternate;
        }

        @keyframes ambientFloatGlow {
          0% {
            opacity: 0.5;
            transform: scale(0.97);
          }
          100% {
            opacity: 0.95;
            transform: scale(1.03);
          }
        }

        .mfg-video-card {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 16px;
          overflow: hidden;
          background-color: #0b0f19;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.18);
          border: 1px solid var(--border-light);
          z-index: 1;
        }

        .mfg-video-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mfg-video-card:hover .mfg-video-media {
          transform: scale(1.03);
        }

        .mfg-video-poster-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.12);
          cursor: pointer;
          transition: background 0.35s ease;
        }

        .mfg-video-poster-overlay:hover {
          background: rgba(15, 23, 42, 0.04);
        }

        /* Video Central Play Button with Concentric Radar Waves */
        .mfg-video-center-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          border: 3px solid rgba(255, 255, 255, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.55);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
          z-index: 5;
        }

        .mfg-video-center-btn::before,
        .mfg-video-center-btn::after {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2px solid rgba(99, 102, 241, 0.7);
          animation: videoRadarWave 3s cubic-bezier(0.25, 1, 0.5, 1) infinite;
          pointer-events: none;
        }

        .mfg-video-center-btn::after {
          animation-delay: 1.5s;
        }

        @keyframes videoRadarWave {
          0% {
            transform: scale(0.92);
            opacity: 0.95;
          }
          100% {
            transform: scale(1.68);
            opacity: 0;
          }
        }

        .mfg-video-center-btn:hover {
          transform: translate(-50%, -50%) scale(1.15);
          box-shadow: 0 16px 42px rgba(99, 102, 241, 0.8);
        }

        .mfg-video-time-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(15, 23, 42, 0.78);
          backdrop-filter: blur(8px);
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          z-index: 4;
        }

        .mfg-video-fullscreen-btn {
          position: absolute;
          bottom: 16px;
          right: 16px;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(15, 23, 42, 0.78);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
          z-index: 4;
        }

        .mfg-video-fullscreen-btn:hover {
          background: rgba(99, 102, 241, 0.95);
          transform: scale(1.08);
        }

        /* 4 Features Bottom Bar with Interactive Micro-Animations */
        .mfg-features-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 20px 24px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
          position: relative;
          z-index: 2;
        }

        .mfg-feature-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 10px 18px;
          border-radius: 12px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
        }

        .mfg-feature-item:not(:last-child) {
          border-right: 1px solid var(--border-light);
        }

        .mfg-feature-item:hover {
          background: rgba(99, 102, 241, 0.04);
          transform: translateY(-3px);
        }

        .mfg-feature-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.09);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.1);
        }

        .mfg-feature-item:hover .mfg-feature-icon-wrap {
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: #ffffff;
          transform: scale(1.14) rotate(6deg);
          box-shadow: 0 8px 22px rgba(99, 102, 241, 0.38);
        }

        .mfg-feature-text {
          display: flex;
          flex-direction: column;
        }

        .mfg-feature-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 3px;
          transition: color 0.25s ease;
        }

        .mfg-feature-item:hover .mfg-feature-title {
          color: var(--color-accent);
        }

        .mfg-feature-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin: 0;
        }

        /* Process Section Header */
        .mfg-process-heading {
          font-size: 2.75rem;
          font-weight: 400;
          margin-bottom: 16px;
          color: var(--text-primary);
        }

        .mfg-process-heading-accent {
          font-style: italic;
          color: var(--color-accent);
        }

        .mfg-process-desc {
          font-size: 0.98rem;
          color: var(--text-secondary);
          max-width: 640px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* Alternating Steps Container */
        .mfg-steps-container {
          display: flex;
          flex-direction: column;
          gap: 72px;
          max-width: 1040px;
          margin: 0 auto;
        }

        .mfg-step-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }

        .mfg-step-col {
          width: 100%;
        }

        /* Step Image Card */
        .mfg-step-image-card {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border-light);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
          background-color: var(--bg-secondary);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .mfg-step-image-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 38px rgba(0, 0, 0, 0.16);
        }

        .mfg-step-image-el {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mfg-step-image-card:hover .mfg-step-image-el {
          transform: scale(1.03);
        }

        /* Step Info Card */
        .mfg-step-info-card {
          padding: 8px 0;
        }

        .mfg-step-tag-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .mfg-step-num {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-accent);
          font-family: monospace;
          letter-spacing: -0.02em;
        }

        .mfg-step-num-line {
          width: 36px;
          height: 1.5px;
          background-color: var(--color-accent);
          opacity: 0.8;
        }

        .mfg-step-tag-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          font-weight: 600;
        }

        .mfg-step-card-title {
          font-size: 2.1rem;
          font-weight: 400;
          margin-bottom: 16px;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .mfg-step-card-desc {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .mfg-features-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .mfg-feature-item:nth-child(2) {
            border-right: none;
          }
          .mfg-hero-heading {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .mfg-hero-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .mfg-hero-heading {
            font-size: 2.4rem;
          }
          .mfg-features-bar {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 20px;
          }
          .mfg-feature-item {
            padding: 0;
            border-right: none !important;
          }
          .mfg-step-row {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .mfg-step-card-title {
            font-size: 1.75rem;
          }
          .mfg-process-heading {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Manufacturing;
