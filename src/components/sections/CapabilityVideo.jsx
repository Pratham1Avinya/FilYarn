import React, { useRef } from 'react';
import { Play, Check, ShieldCheck, Truck, Users, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyConfig } from '../../data/config';
import VideoPlayer from '../common/VideoPlayer';

const CapabilityVideo = () => {
  const capabilityPoints = [
    {
      title: "Product Understanding",
      desc: "Solutions aligned with textile and garment requirements, focusing on consistent yarn thickness and strength.",
      icon: <ShieldCheck size={20} />
    },
    {
      title: "Reliable Supply",
      desc: "Focused on dependable sourcing and delivery, meeting the high demands of continuous weaving operations.",
      icon: <Truck size={20} />
    },
    {
      title: "Customer Partnership",
      desc: "Built around clear communication and long-term relationships rather than simple transactional deals.",
      icon: <Users size={20} />
    },
    {
      title: "Future Growth",
      desc: "Continuously improving product availability, service speed, and domestic market reach.",
      icon: <Compass size={20} />
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ marginBottom: '60px' }}>
          <span className="section-label">Manufacturing Scope</span>
          <h2 className="section-title">
            Our Capability: <span>Execution &amp; the Road Ahead</span>
          </h2>
        </div>

        <div className="grid-2">
          {/* Left Column: Cinematic Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              borderRadius: 'var(--border-radius)',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              border: '1px solid var(--border-light)'
            }}>
              <VideoPlayer
                src={companyConfig.videoPaths.manufacturing}
                poster={companyConfig.imagePaths.manufacturingPoster}
                ratioClass="ratio-16-9"
                label="Manufacturing Process Overview"
              />
            </div>
            <div style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              textAlign: 'center',
              marginTop: '12px',
              fontStyle: 'italic'
            }}>
              Take a closer look at our yarn processing and quality control steps.
            </div>
          </motion.div>

          {/* Right Column: Info & Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <span style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
              Strategic Advantages
            </span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '500', marginBottom: '16px' }}>
              Designed to Support B2B Enterprise Demands
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
              At Filyarn Industries, our operations are optimized to provide dependable supply networks and tailored product solutions for domestic garment and industrial weaving operations.
            </p>

            {/* List of Capability Points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {capabilityPoints.map((point, index) => (
                <div key={index} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(197, 168, 128, 0.1)',
                    border: '1px solid rgba(197, 168, 128, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent)',
                    flexShrink: 0
                  }}>
                    {point.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {point.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityVideo;
