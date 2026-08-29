import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Award, Compass } from 'lucide-react';
import { roadmapTimeline } from '../../data/content';

const LegacyTimeline = ({ variant = 'default' }) => {
  const getIcon = (year) => {
    switch (year) {
      case '2017': return <Calendar size={20} />;
      case 'Growth Phase': return <TrendingUp size={20} />;
      case 'Today': return <Award size={20} />;
      case 'Future': return <Compass size={20} />;
      default: return <Award size={20} />;
    }
  };

  return (
    <section className={`section ${variant === 'alt' ? 'section-alt' : ''}`} style={{ overflow: 'hidden', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label" style={{ color: 'var(--color-logo-blue)' }}>Our Roadmap</span>
          <h2 className="section-title">
            Our Roadmap: <span>From Where We Started to Where We're Going</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto', maxWidth: '700px' }}>
            A timeline representing our business evolution, growth phases, present state, and long-term customer partnerships.
          </p>
        </div>

        {/* Roadmap Container */}
        <div style={{ position: 'relative', width: '100%', margin: '0 auto', padding: '40px 0' }} className="roadmap-container">
          
          {/* Horizontal Line (Desktop only) */}
          <div style={{
            position: 'absolute',
            top: '70px',
            left: '60px',
            right: '60px',
            height: '4px',
            backgroundColor: 'var(--border-light)',
            zIndex: 1,
            borderRadius: '2px'
          }} className="roadmap-h-line-bg">
            {/* Animated Progress Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              style={{
                height: '100%',
                background: 'var(--gradient-brand)',
                borderRadius: '2px',
                boxShadow: '0 0 12px var(--color-accent)'
              }}
            />
          </div>

          {/* Vertical Line (Mobile only) */}
          <div style={{
            position: 'absolute',
            left: '30px',
            top: '0',
            bottom: '0',
            width: '4px',
            backgroundColor: 'var(--border-light)',
            zIndex: 1,
            display: 'none'
          }} className="roadmap-v-line-bg">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              style={{
                width: '100%',
                background: 'var(--gradient-brand)',
                borderRadius: '2px',
                boxShadow: '0 0 12px var(--color-accent)'
              }}
            />
          </div>

          {/* Timeline Milestones Grid */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 2,
            gap: '24px'
          }} className="roadmap-steps">
            {roadmapTimeline.map((item, idx) => (
              <div key={idx} style={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }} className="roadmap-step-card">
                
                {/* Milestone Node */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: idx * 0.15 }}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    border: '3px solid var(--color-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-logo-blue)',
                    boxShadow: '0 0 15px rgba(99, 102, 241, 0.25)',
                    marginBottom: '28px',
                    zIndex: 3,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  className="roadmap-node"
                >
                  {getIcon(item.year)}
                </motion.div>

                {/* Milestone Detail Card - Setup with flexGrow and height 100% for absolute equal heights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)',
                    padding: '24px',
                    borderRadius: 'var(--border-radius)',
                    width: '100%',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease'
                  }}
                  className="roadmap-card"
                >
                  <span style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-logo-blue)',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '8px'
                  }}>
                    {item.year}
                  </span>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                    transition: 'color 0.25s ease'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    fontWeight: '300',
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pure CSS Styles for Mobile Breakpoint Overrides & Hover Effects */}
      <style>{`
        .roadmap-step-card {
          transition: all 0.3s ease;
        }
        
        /* Premium Synced Hover Animation */
        .roadmap-step-card:hover .roadmap-card {
          transform: translateY(-6px);
          border-color: var(--color-accent) !important;
          box-shadow: 0 12px 30px rgba(99, 102, 241, 0.08) !important;
        }
        
        .roadmap-step-card:hover .roadmap-node {
          transform: scale(1.1);
          border-color: var(--color-logo-blue) !important;
          box-shadow: 0 0 20px rgba(54, 193, 233, 0.3) !important;
        }
        
        .roadmap-step-card:hover .roadmap-card h3 {
          color: var(--color-accent) !important;
        }
        
        @media (max-width: 991px) {
          .roadmap-h-line-bg {
            display: none !important;
          }
          .roadmap-v-line-bg {
            display: block !important;
          }
          .roadmap-steps {
            flex-direction: column !important;
            gap: 32px !important;
            padding-left: 20px !important;
          }
          .roadmap-step-card {
            flex-direction: row !important;
            text-align: left !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          .roadmap-node {
            margin-bottom: 0 !important;
            flex-shrink: 0 !important;
            width: 50px !important;
            height: 50px !important;
          }
          .roadmap-card {
            align-items: flex-start !important;
            min-height: auto !important;
            padding: 20px !important;
            flex-grow: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LegacyTimeline;
