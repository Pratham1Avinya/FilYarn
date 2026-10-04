import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, User, Target, ArrowRight } from 'lucide-react';

const roadmapTimeline = [
  {
    step: "01",
    tag: "2017",
    title: "GST Registration",
    desc: "Business formally registered for GST operations, beginning local trading channels and customer sourcing operations in Surat, Gujarat.",
    icon: Calendar
  },
  {
    step: "02",
    tag: "GROWTH PHASE",
    title: "Expanding Yarn Portfolio",
    desc: "Expanded product offerings across polyester yarn and sewing thread categories to fulfill growing industrial clothing requirements.",
    icon: TrendingUp
  },
  {
    step: "03",
    tag: "TODAY",
    title: "Serving Textile Customers",
    desc: "Continuing to develop dependable yarn sourcing, manufacturing, and customer service capabilities. Integrated under active PVT. Ltd. status in 2026.",
    icon: User
  },
  {
    step: "04",
    tag: "FUTURE",
    title: "Growing With Our Customers",
    desc: "Focused on broader product availability, stronger supply capability, and long-term customer partnerships throughout Indian yarn distribution channels.",
    icon: Target
  }
];

const LegacyTimeline = ({ variant = 'default' }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className={`roadmap-section ${variant === 'alt' ? 'roadmap-alt' : ''}`}>
      {/* Decorative Filament Curves and Ambient Corner Accents */}
      <div className="roadmap-backdrop" aria-hidden="true">
        {/* Top-Right Flowing Curves */}
        <svg className="roadmap-curve-tr" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 0 C 150 120, 320 180, 500 80" stroke="rgba(99, 102, 241, 0.16)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 120 0 C 220 180, 380 250, 500 160" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 0 40 C 200 240, 420 320, 500 240" stroke="rgba(2, 132, 199, 0.08)" strokeWidth="1.5" strokeDasharray="4 6" />
        </svg>

        {/* Bottom-Left Flowing Curves */}
        <svg className="roadmap-curve-bl" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 320 C 180 280, 320 360, 480 400" stroke="rgba(99, 102, 241, 0.14)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 0 240 C 160 200, 280 300, 420 400" stroke="rgba(2, 132, 199, 0.1)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 0 160 C 140 140, 250 240, 350 400" stroke="rgba(99, 102, 241, 0.06)" strokeWidth="1.2" strokeDasharray="5 5" />
        </svg>

        {/* Subtle Ambient Radial Glows */}
        <div className="roadmap-glow-tr" />
        <div className="roadmap-glow-bl" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Centered Editorial Header */}
        <div className="roadmap-header">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="roadmap-eyebrow"
          >
            <span>OUR ROADMAP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="roadmap-main-heading font-serif"
          >
            Our Roadmap: <span className="roadmap-heading-accent">From Where We Started to Where We're Going</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="roadmap-subtext"
          >
            A timeline representing our business evolution, growth phases, present state, and long-term customer partnerships.
          </motion.p>
        </div>

        {/* Timeline Grid Container */}
        <div className="roadmap-timeline-wrapper">
          {/* Continuous Connecting Track Line (Desktop) */}
          <div className="roadmap-track-line-wrapper">
            <div className="roadmap-track-base" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="roadmap-track-glow"
            />
          </div>

          {/* 4 Columns: Node + Card */}
          <div className="roadmap-grid">
            {roadmapTimeline.map((item, idx) => {
              const IconComp = item.icon;
              const isHovered = hoveredIdx === idx;

              return (
                <div
                  key={item.step}
                  className={`roadmap-column ${isHovered ? 'is-active' : ''}`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Circular Milestone Node */}
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 20,
                      delay: 0.2 + idx * 0.12
                    }}
                    className="roadmap-node-outer"
                  >
                    <div className="roadmap-node-circle">
                      <IconComp size={21} className="roadmap-node-icon" />
                    </div>
                  </motion.div>

                  {/* Milestone Detail Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.65,
                      delay: 0.3 + idx * 0.12,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="roadmap-card"
                  >
                    {/* Top Tag Pill */}
                    <div className="roadmap-tag-pill">
                      {item.tag}
                    </div>

                    {/* Card Title */}
                    <h3 className="roadmap-card-title">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="roadmap-card-desc">
                      {item.desc}
                    </p>

                    {/* Bottom Number & Arrow Line */}
                    <div className="roadmap-card-footer">
                      <span className="roadmap-card-num font-serif">
                        {item.step}
                      </span>
                      <div className="roadmap-card-footer-line" />
                      <div className="roadmap-card-arrow-circle">
                        <ArrowRight size={15} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scoped CSS Styles */}
      <style>{`
        .roadmap-section {
          padding: 100px 0 110px 0;
          background-color: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .roadmap-section.roadmap-alt {
          background-color: var(--bg-primary);
        }

        /* Decorative Filaments & Background Ambient Glow */
        .roadmap-backdrop {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .roadmap-curve-tr {
          position: absolute;
          top: -20px;
          right: -40px;
          width: 520px;
          height: 420px;
          opacity: 0.9;
        }

        .roadmap-curve-bl {
          position: absolute;
          bottom: -40px;
          left: -40px;
          width: 500px;
          height: 380px;
          opacity: 0.85;
        }

        .roadmap-glow-tr {
          position: absolute;
          top: 0;
          right: 0;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
        }

        .roadmap-glow-bl {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle at bottom left, rgba(2, 132, 199, 0.07) 0%, transparent 70%);
        }

        /* Centered Header Styles */
        .roadmap-header {
          text-align: center;
          margin-bottom: 75px;
          max-width: 850px;
          margin-left: auto;
          margin-right: auto;
        }

        .roadmap-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--color-accent);
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .roadmap-dash {
          width: 24px;
          height: 1.5px;
          background-color: var(--color-accent);
          opacity: 0.8;
          display: inline-block;
        }

        .roadmap-main-heading {
          font-size: clamp(2.2rem, 3.8vw, 3.1rem);
          font-weight: 400;
          line-height: 1.2;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .roadmap-heading-accent {
          font-style: italic;
          color: var(--color-accent);
          font-weight: 400;
        }

        .roadmap-subtext {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.65;
          max-width: 680px;
          margin: 0 auto;
        }

        /* Timeline Wrapper */
        .roadmap-timeline-wrapper {
          position: relative;
          width: 100%;
          margin: 0 auto;
        }

        /* Track line behind nodes */
        .roadmap-track-line-wrapper {
          position: absolute;
          top: 32px;
          left: 12%;
          right: 12%;
          height: 3px;
          z-index: 1;
        }

        .roadmap-track-base {
          position: absolute;
          inset: 0;
          background-color: rgba(99, 102, 241, 0.16);
          border-radius: 999px;
        }

        .roadmap-track-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #818cf8 0%, #6366f1 50%, #818cf8 100%);
          border-radius: 999px;
          transform-origin: left;
          box-shadow: 0 0 14px rgba(99, 102, 241, 0.45);
        }

        /* 4 Columns Grid */
        .roadmap-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
          position: relative;
          z-index: 2;
        }

        .roadmap-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
        }

        /* Node Circle */
        .roadmap-node-outer {
          margin-bottom: 30px;
          position: relative;
          z-index: 3;
        }

        .roadmap-node-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #ffffff;
          border: 2.5px solid #818cf8;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4f46e5;
          box-shadow: 
            0 0 0 6px rgba(99, 102, 241, 0.08),
            0 8px 24px rgba(99, 102, 241, 0.18);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        [data-theme="dark"] .roadmap-node-circle {
          background: #11141b;
          border-color: #6366f1;
          color: #818cf8;
          box-shadow: 
            0 0 0 6px rgba(99, 102, 241, 0.15),
            0 8px 24px rgba(0, 0, 0, 0.5);
        }

        .roadmap-column:hover .roadmap-node-circle {
          transform: scale(1.15);
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          border-color: #ffffff;
          color: #ffffff;
          box-shadow: 
            0 0 0 8px rgba(99, 102, 241, 0.22),
            0 12px 32px rgba(99, 102, 241, 0.5);
        }

        .roadmap-node-icon {
          transition: transform 0.3s ease;
        }

        .roadmap-column:hover .roadmap-node-icon {
          transform: scale(1.08);
        }

        /* Detail Card */
        .roadmap-card {
          width: 100%;
          flex: 1;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.85);
          border-radius: 18px;
          padding: 24px 22px 20px 22px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.04);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        [data-theme="dark"] .roadmap-card {
          background: #11141b;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.4);
        }

        .roadmap-column:hover .roadmap-card {
          transform: translateY(-8px);
          border-color: rgba(99, 102, 241, 0.5);
          box-shadow: 0 18px 40px rgba(99, 102, 241, 0.12);
        }

        /* Top Tag Pill */
        .roadmap-tag-pill {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(99, 102, 241, 0.09);
          color: #4f46e5;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        [data-theme="dark"] .roadmap-tag-pill {
          background: rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
        }

        /* Card Title */
        .roadmap-card-title {
          font-size: 1.22rem;
          font-weight: 700;
          line-height: 1.3;
          color: var(--text-primary);
          margin-bottom: 12px;
          transition: color 0.25s ease;
        }

        .roadmap-column:hover .roadmap-card-title {
          color: var(--color-accent);
        }

        /* Card Description */
        .roadmap-card-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.62;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        /* Footer: Step Number, Line, Arrow */
        .roadmap-card-footer {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
          padding-top: 14px;
        }

        .roadmap-card-num {
          font-size: 1.45rem;
          font-style: italic;
          font-weight: 600;
          color: #818cf8;
          line-height: 1;
        }

        .roadmap-card-footer-line {
          flex: 1;
          height: 1px;
          background-color: rgba(99, 102, 241, 0.18);
          transition: background-color 0.3s ease;
        }

        .roadmap-column:hover .roadmap-card-footer-line {
          background-color: rgba(99, 102, 241, 0.45);
        }

        .roadmap-card-arrow-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.08);
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        [data-theme="dark"] .roadmap-card-arrow-circle {
          background: rgba(99, 102, 241, 0.18);
          color: #a5b4fc;
        }

        .roadmap-column:hover .roadmap-card-arrow-circle {
          background: #4f46e5;
          color: #ffffff;
          transform: translateX(4px);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.35);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .roadmap-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px 24px;
          }
          .roadmap-track-line-wrapper {
            display: none;
          }
          .roadmap-node-outer {
            margin-bottom: 18px;
          }
        }

        @media (max-width: 640px) {
          .roadmap-section {
            padding: 70px 0 80px 0;
          }
          .roadmap-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .roadmap-card {
            padding: 22px 18px;
          }
          .roadmap-node-circle {
            width: 54px;
            height: 54px;
          }
        }
      `}</style>
    </section>
  );
};

export default LegacyTimeline;
