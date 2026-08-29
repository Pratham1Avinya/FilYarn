import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Factory, Cog, ShieldCheck, Activity } from 'lucide-react';
import { companyConfig } from '../data/config';
import { manufacturingSteps } from '../data/content';
import Placeholder from '../components/common/Placeholder';
import VideoPlayer from '../components/common/VideoPlayer';
import ConnectCTA from '../components/sections/ConnectCTA';

const Manufacturing = () => {
  useEffect(() => {
    document.title = "Manufacturing Process & Technology | FILYARN";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore the yarn manufacturing flow at Filyarn Industries Pvt. Ltd. Learn how we select raw materials, spin threads, test quality standards and pack cones.");
    }
  }, []);

  const manufacturingHighlights = [
    { title: "Standardized Inputs", desc: "Using staple fibers with tested length, twistability, and denier tolerances.", icon: <Cog size={20} /> },
    { title: "Precision Twisting", desc: "Operating doubled and multi-ply ring frames for uniform seam strength.", icon: <Activity size={20} /> },
    { title: "Batch Inspection", desc: "Validating yarn count, elongation, hairiness, and dye absorption metrics.", icon: <ShieldCheck size={20} /> }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Editorial Header */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.04
                }
              }
            }}
            style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
          >
            <span className="section-label">Process Excellence</span>
            <h1 className="font-serif" style={{ 
              fontSize: '3rem', 
              fontWeight: '400', 
              marginBottom: '24px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              rowGap: '0.15em'
            }}>
              {"Manufacturing &".split(" ").map((word, i) => (
                <motion.span
                  key={`mf1-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  style={{ display: 'inline-block', marginRight: '0.25em' }}
                >
                  {word}
                </motion.span>
              ))}
              <span style={{ width: '100%' }}></span>
              {"Yarn Spinning Process".split(" ").map((word, i) => (
                <motion.span
                  key={`mf2-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  style={{ display: 'inline-block', marginRight: '0.25em', color: 'var(--color-accent)', fontStyle: 'italic' }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: '300' }}>
              We present the standard yarn production workflow below. This educational outline details the industrial stages from selecting raw synthetic fibers to winding and packaging durable yarn cones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Demonstration Section */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span className="section-label">Process Demonstration</span>
              <h2 className="font-serif" style={{ fontSize: '2rem', fontWeight: '400' }}>
                See the <span>Spinning in Action</span>
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
                Watch this industrial breakdown of ring spinning, cone winding, and package finishing.
              </p>
            </div>

            <div style={{
              borderRadius: 'var(--border-radius)',
              overflow: 'hidden',
              boxShadow: '0 20px 45px rgba(0,0,0,0.35)',
              border: '1px solid var(--border-light)'
            }}>
              <VideoPlayer
                src={companyConfig.videoPaths.manufacturing}
                poster={companyConfig.imagePaths.manufacturingPoster}
                ratioClass="ratio-16-9"
                label="Spinning Facility Process Video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Highlights / Tech Specs */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px'
          }} className="mfg-highlights-grid">
            {manufacturingHighlights.map((hl, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', backgroundColor: 'var(--bg-secondary)' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(197, 168, 128, 0.1)',
                  border: '1px solid rgba(197, 168, 128, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)',
                  flexShrink: 0
                }}>
                  {hl.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>{hl.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{hl.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Alternating Steps List */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Flow Details</span>
            <h2 className="section-title">
              Detailed <span>Manufacturing Flow</span>
            </h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Understanding each technical stage required to construct high-strength, color-fast polyester yarns.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', maxWidth: '1000px', margin: '0 auto' }}>
            {manufacturingSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.step}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '48px',
                    alignItems: 'center'
                  }}
                  className="mfg-step-row"
                >
                  {/* Left Column: Image or text depending on order */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ order: isEven ? 1 : 2 }}
                    className="mfg-step-img"
                  >
                    <div style={{
                      borderRadius: 'var(--border-radius)',
                      overflow: 'hidden',
                      border: '1px solid var(--border-light)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                    }}>
                      <Placeholder
                        src={step.image}
                        alt={step.title}
                        ratioClass="ratio-16-9"
                        text={step.title}
                      />
                    </div>
                  </motion.div>

                  {/* Right Column: Text content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{ order: isEven ? 2 : 1 }}
                    className="mfg-step-info"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <span style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: 'var(--color-accent)',
                        fontFamily: 'monospace'
                      }}>
                        {step.step}
                      </span>
                      <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent)' }} />
                      <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                        Production Stage
                      </span>
                    </div>
                    <h3 className="font-serif" style={{ fontSize: '1.8rem', fontWeight: '400', marginBottom: '16px', color: 'var(--text-primary)' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ConnectCTA />

      <style>{`
        @media (max-width: 991px) {
          .mfg-highlights-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 768px) {
          .mfg-step-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .mfg-step-img {
            order: 1 !important;
          }
          .mfg-step-info {
            order: 2 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Manufacturing;
