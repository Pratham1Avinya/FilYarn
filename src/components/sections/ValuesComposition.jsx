import React from 'react';
import { Target, Eye, Compass, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { valuesData } from '../../data/content';

const ValuesComposition = () => {
  return (
    <section className="section section-alt">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">Foundational Pillars</span>
          <h2 className="section-title">
            Our Values: <span>Our Guiding Principles</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Our values guide how we work, serve customers, and build the future of the yarn and textile business.
          </p>
        </div>

        {/* Mission and Vision: Large Editorial Cards */}
        <div className="grid-2" style={{ marginBottom: '60px', alignItems: 'stretch' }}>
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'var(--bg-tertiary)'
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '4px',
              backgroundColor: 'rgba(197, 168, 128, 0.1)',
              border: '1px solid rgba(197, 168, 128, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-accent)',
              marginBottom: '24px'
            }}>
              <Target size={24} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>
              Our Mission
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {valuesData.mission}
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'var(--bg-tertiary)'
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '4px',
              backgroundColor: 'rgba(197, 168, 128, 0.1)',
              border: '1px solid rgba(197, 168, 128, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-accent)',
              marginBottom: '24px'
            }}>
              <Eye size={24} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>
              Our Vision
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {valuesData.vision}
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div>
          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            textAlign: 'center',
            marginBottom: '32px',
            color: 'var(--text-primary)'
          }}>
            Core Values
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {valuesData.coreValues.map((value, idx) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="card"
                style={{
                  padding: '24px',
                  backgroundColor: 'rgba(17, 20, 27, 0.6)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    color: 'var(--color-accent)',
                    backgroundColor: 'rgba(197, 168, 128, 0.1)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    {value.number}
                  </span>
                  <Star size={16} style={{ color: 'var(--color-accent)', opacity: 0.3 }} />
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
                  {value.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesComposition;
