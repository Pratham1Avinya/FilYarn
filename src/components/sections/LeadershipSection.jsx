import React, { useState } from 'react';
import { Play, Quote, Users, X } from 'lucide-react';
import { companyConfig } from '../../data/config';

const LeadershipSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const partners = [
    {
      id: 'partner-1',
      name: 'GhanshyamBhai B. Gajera',
      image: '/images/leadership/GhanshyamBhai1.png',
      accent: '#2563EB',
      glow: 'rgba(37, 99, 235, 0.15)'
    },
    {
      id: 'partner-2',
      name: 'Hiren A. Kunjadiya',
      image: '/images/leadership/Hiren1.png',
      accent: '#0D9488',
      glow: 'rgba(13, 148, 136, 0.15)'
    },
    {
      id: 'partner-3',
      name: 'KishorBhai V. Gajera',
      image: '/images/leadership/KishorBhai1.png',
      accent: '#8B5CF6',
      glow: 'rgba(139, 92, 246, 0.15)'
    }
  ];

  return (
    <section className="leadership-redesign-section" id="governance-leadership">
      {/* Decorative ambient background accents */}
      <div className="leadership-ambient-glow" aria-hidden="true" />
      <div className="leadership-dots-tr" aria-hidden="true" />
      <div className="leadership-dots-bl" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="leadership-main-grid">

          {/* Left Column: Eyebrow, Title, Description, Partners, Footnote */}
          <div className="leadership-left-col">
            {/* Eyebrow Label */}
            <div className="leadership-badge-row">
              <span className="leadership-badge-dash" />
              <span className="leadership-badge-text">OUR LEADERSHIP</span>
            </div>

            {/* Main Heading */}
            <h2 className="leadership-headline">
              Guided by Vision,<br />
              <span className="text-driven">Driven </span>
              <span className="text-by">by </span>
              <span className="text-people">People</span>
            </h2>

            {/* Subtitle Description */}
            <p className="leadership-subtext">
              Meet the leadership team behind Filyarn Industries — a combination
              of vision, experience and dedication, working together for a better tomorrow.
            </p>

            {/* 3 Partners Grid - Expanded across full column width with large portraits */}
            <div className="leadership-partners-row">
              {partners.map((partner) => (
                <div key={partner.id} className="partner-card">
                  <div
                    className="partner-avatar-wrapper"
                    style={{
                      borderColor: partner.accent,
                      boxShadow: `0 0 0 5px var(--bg-primary), 0 8px 20px -4px rgba(15, 23, 42, 0.1), 0 0 16px ${partner.glow}`
                    }}
                  >
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="partner-avatar-img"
                    />
                  </div>
                  <h4 className="partner-name">{partner.name}</h4>
                </div>
              ))}
            </div>

            {/* Bottom Footnote Note */}
            <div className="leadership-footnote">
              <Users size={16} className="leadership-footnote-icon" />
              <span>Together we build trust, quality and long-term partnerships.</span>
            </div>
          </div>

          {/* Right Column: Story Video Card + Director Quote Card */}
          <div className="leadership-right-col">

            {/* Video Player Card */}
            <div className="leadership-video-card">
              {!isPlaying ? (
                <div
                  className="video-poster-wrapper"
                  onClick={() => setIsPlaying(true)}
                  role="button"
                  tabIndex={0}
                  aria-label="Play leadership story video"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setIsPlaying(true);
                    }
                  }}
                >
                  <img
                    src={companyConfig.imagePaths.leadershipPoster}
                    alt="Filyarn Industries Building - Watch Our Story"
                    className="video-poster-img"
                  />
                  {/* Subtle hover overlay */}
                  <div className="video-card-hover-overlay" />
                </div>
              ) : (
                <div className="video-playing-container">
                  <video
                    src={companyConfig.videoPaths.leadership || '/videos/Hero-Section/HeroVideo.mp4'}
                    poster={companyConfig.imagePaths.leadershipPoster}
                    controls
                    autoPlay
                    className="video-playing-element"
                  />
                  <button
                    type="button"
                    className="video-close-btn"
                    onClick={() => setIsPlaying(false)}
                    aria-label="Close video"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}
            </div>

            {/* Director Statement Quote Card */}
            <div className="leadership-quote-card">
              <div className="quote-mark-icon-wrap">
                <Quote size={28} className="quote-mark-icon" />
              </div>

              <p className="quote-paragraph">
                &ldquo;Building trust in the textile B2B supply chain requires combining quality yarn standards,
                dependable bulk supply, and long-term customer partnerships. At Filyarn, our{' '}
                <strong>governance</strong> centers on these priorities to ensure mutually rewarding{' '}
                <strong>business relationships</strong>.&rdquo;
              </p>

              <div className="quote-author-block">
                <div className="quote-author-accent-dash" />
                <h4 className="quote-author-name">Ghanshyambhai B. Gajera</h4>
                <span className="quote-author-role">Director Statement</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Scoped CSS strictly matching the design image */}
      <style>{`
        .leadership-redesign-section {
          padding: 85px 0 80px 0;
          background-color: var(--bg-primary);
          position: relative;
          overflow: hidden;
          font-family: var(--font-sans);
        }

        /* Ambient subtle glow corner */
        .leadership-ambient-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle at 100% 0%, rgba(37, 99, 235, 0.05) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        [data-theme="dark"] .leadership-ambient-glow {
          background: radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.09) 0%, transparent 70%);
        }

        /* Decorative Dot Matrix in Top-Right and Bottom-Left */
        .leadership-dots-tr {
          position: absolute;
          top: 28px;
          right: 42px;
          width: 84px;
          height: 64px;
          background-image: radial-gradient(rgba(37, 99, 235, 0.22) 1.5px, transparent 1.5px);
          background-size: 13px 13px;
          pointer-events: none;
          z-index: 1;
        }

        .leadership-dots-bl {
          position: absolute;
          bottom: 28px;
          left: 42px;
          width: 84px;
          height: 64px;
          background-image: radial-gradient(rgba(37, 99, 235, 0.22) 1.5px, transparent 1.5px);
          background-size: 13px 13px;
          pointer-events: none;
          z-index: 1;
        }

        /* 2 Columns Main Grid - Spans generously without extra empty gap */
        .leadership-main-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.95fr;
          gap: 36px;
          align-items: center;
        }

        /* Left Column Styles */
        .leadership-left-col {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .leadership-badge-row {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .leadership-badge-dash {
          width: 20px;
          height: 3px;
          background-color: #2563eb;
          border-radius: 2px;
        }

        .leadership-badge-text {
          font-size: 0.82rem;
          font-weight: 700;
          color: #2563eb;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        [data-theme="dark"] .leadership-badge-text {
          color: #60a5fa;
        }

        .leadership-headline {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.16;
          color: var(--text-primary);
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        .text-driven {
          color: #2563eb;
        }

        .text-by {
          color: #2563eb;
        }

        .text-people {
          background: linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #7e22ce 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        [data-theme="dark"] .text-driven,
        [data-theme="dark"] .text-by {
          color: #60a5fa;
        }

        [data-theme="dark"] .text-people {
          background: linear-gradient(135deg, #c084fc 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .leadership-subtext {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          max-width: 100%;
          margin: 0 0 34px 0;
        }

        /* 3 Partners Row - 3 equal columns spanning full left area with enlarged avatars */
        .leadership-partners-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: flex-start;
          margin-bottom: 34px;
          width: 100%;
        }

        .partner-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
        }

        .partner-avatar-wrapper {
          width: 170px;
          height: 170px;
          max-width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          overflow: hidden;
          border: 2.5px solid transparent;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
        }

        .partner-card:hover .partner-avatar-wrapper {
          transform: translateY(-6px) scale(1.03);
        }

        .partner-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 52%;
          border-radius: 50%;
          display: block;
          transform: scale(1.06);
          transform-origin: center 30%;
        }

        .partner-name {
          font-weight: 700;
          font-size: 0.98rem;
          color: var(--text-primary);
          line-height: 1.35;
          margin: 14px 0 0 0;
          text-align: center;
        }

        /* Footnote */
        .leadership-footnote {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          margin-top: 4px;
        }

        .leadership-footnote-icon {
          color: #64748b;
          flex-shrink: 0;
        }

        /* Right Column Styles */
        .leadership-right-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        /* Video Card */
        .leadership-video-card {
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.12);
          background-color: #0b101b;
          position: relative;
          aspect-ratio: 16 / 9;
        }

        .video-poster-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .video-poster-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease, filter 0.3s ease;
        }

        .video-poster-wrapper:hover .video-poster-img {
          transform: scale(1.02);
          filter: brightness(1.03);
        }

        .video-card-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.08);
          transition: background 0.3s ease;
        }

        .video-poster-wrapper:hover .video-card-hover-overlay {
          background: rgba(15, 23, 42, 0);
        }

        .video-playing-container {
          position: relative;
          width: 100%;
          height: 100%;
          background: #000;
        }

        .video-playing-element {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .video-close-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.75);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: transform 0.2s ease, background 0.2s ease;
          z-index: 10;
        }

        .video-close-btn:hover {
          transform: scale(1.1);
          background: #ef4444;
        }

        /* Director Quote Card */
        .leadership-quote-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 28px 32px;
          position: relative;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }

        [data-theme="dark"] .leadership-quote-card {
          background-color: #11151f;
          border-color: rgba(255, 255, 255, 0.08);
        }

        .quote-mark-icon-wrap {
          margin-bottom: 12px;
        }

        .quote-mark-icon {
          color: #4f46e5;
        }

        [data-theme="dark"] .quote-mark-icon {
          color: #818cf8;
        }

        .quote-paragraph {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.68;
          margin: 0 0 20px 0;
        }

        .quote-paragraph strong {
          color: var(--text-primary);
          font-weight: 700;
        }

        .quote-author-block {
          display: flex;
          flex-direction: column;
        }

        .quote-author-accent-dash {
          width: 22px;
          height: 3px;
          background-color: #2563eb;
          border-radius: 2px;
          margin-bottom: 8px;
        }

        .quote-author-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 2px 0;
        }

        .quote-author-role {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .leadership-main-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .leadership-headline {
            font-size: 2.5rem !important;
          }
          .partner-avatar-wrapper {
            width: 140px !important;
            height: 140px !important;
          }
        }

        @media (max-width: 640px) {
          .leadership-redesign-section {
            padding: 56px 0 !important;
          }
          .leadership-headline {
            font-size: 2.1rem !important;
          }
          .leadership-partners-row {
            gap: 12px !important;
          }
          .partner-avatar-wrapper {
            width: 94px !important;
            height: 94px !important;
          }
          .partner-name {
            font-size: 0.8rem !important;
          }
          .leadership-quote-card {
            padding: 22px 20px !important;
          }
        }

        @media (max-width: 380px) {
          .partner-avatar-wrapper {
            width: 80px !important;
            height: 80px !important;
          }
          .partner-name {
            font-size: 0.74rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LeadershipSection;
