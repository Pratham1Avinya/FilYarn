import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory } from 'lucide-react';
import { manufacturingSteps } from '../../data/content';
import Placeholder from '../common/Placeholder';
import Button from '../common/Button';

const ManufacturingSteps = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                staggerChildren: 0.04
              }
            }
          }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span className="section-label">Yarn Production Flow</span>
          <h2 className="section-title" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', rowGap: '0.1em' }}>
            {"Understanding the Yarn".split(" ").map((word, i) => (
              <motion.span
                key={`ms1-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 }
                }}
                style={{ display: 'inline-block', marginRight: '0.25em' }}
              >
                {word}
              </motion.span>
            ))}
            {"Manufacturing Process".split(" ").map((word, i) => (
              <motion.span
                key={`ms2-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 }
                }}
                style={{ display: 'inline-block', marginRight: '0.25em', color: 'var(--color-accent)', fontStyle: 'italic' }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A comprehensive look at the industrial sequence of converting raw fibers into high-tenacity, finished yarn and thread products.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="timeline-container" style={{ position: 'relative', padding: '20px 0' }}>
          {/* Vertical Center Line for Desktop */}
          <div className="center-line" style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            bottom: '0',
            width: '2px',
            backgroundColor: 'var(--border-light)',
            transform: 'translateX(-50%)',
            zIndex: 1
          }} />

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', position: 'relative', zIndex: 2 }}>
            {manufacturingSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.step}
                  style={{
                    display: 'flex',
                    justifyContent: isEven ? 'flex-start' : 'flex-end',
                    alignItems: 'center',
                    position: 'relative'
                  }}
                  className="timeline-row"
                >
                  {/* Center Dot Indicator */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-primary)',
                    border: '3px solid var(--color-accent)',
                    boxShadow: '0 0 10px rgba(197, 168, 128, 0.4)',
                    zIndex: 3
                  }} className="timeline-dot" />

                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    style={{
                      width: '45%',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1.5fr',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--border-radius)',
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                    }}
                    className="timeline-card"
                  >
                    {/* Left: Image Placeholder */}
                    <div style={{ position: 'relative' }}>
                      <Placeholder
                        src={step.image}
                        alt={step.title}
                        ratioClass="ratio-3-4"
                        text={step.title}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        color: 'var(--color-accent)',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontWeight: '700',
                        fontSize: '0.85rem',
                        border: '1px solid rgba(197, 168, 128, 0.3)'
                      }}>
                        {step.step}
                      </div>
                    </div>

                    {/* Right: Info */}
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: '600', marginBottom: '10px', color: 'var(--text-primary)' }}>
                        {step.title}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Button to="/manufacturing" variant="secondary">
            <Factory size={16} />
            Explore Manufacturing Detail
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .center-line {
            left: '20px' !important;
            transform: none !important;
          }
          .timeline-row {
            justify-content: flex-start !important;
            padding-left: 50px !important;
          }
          .timeline-dot {
            left: 20px !important;
            transform: translateY(-50%) !important;
          }
          .timeline-card {
            width: 100% !important;
          }
        }
        @media (max-width: 575px) {
          .timeline-card {
            grid-template-columns: 1fr !important;
          }
          .timeline-card .skeleton-wrapper {
            aspect-ratio: 16 / 9 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ManufacturingSteps;
