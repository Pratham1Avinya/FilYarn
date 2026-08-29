import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ArrowUpRight, Award, Compass, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { companyConfig } from '../data/config';
import { valuesData } from '../data/content';
import Placeholder from '../components/common/Placeholder';
import LegacyTimeline from '../components/sections/LegacyTimeline';
import ConnectCTA from '../components/sections/ConnectCTA';

const About = () => {
  const [activePillar, setActivePillar] = useState('mission'); // 'mission' | 'vision' | 'values'

  useEffect(() => {
    document.title = "About Us | FILYARN INDUSTRIES PRIVATE LIMITED";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about Filyarn Industries Pvt. Ltd., our corporate history, board of directors, values, and business registry metrics in Surat, Gujarat.");
    }
  }, []);

  const companyStats = [
    { label: "Incorporated", value: "27 August 2024" },
    { label: "Registered Status", value: "Active" },
    { label: "Authorized Capital", value: "₹15,00,000" },
    { label: "Paid-up Capital", value: "₹15,00,000" }
  ];

  const valuesList = [
    { num: '01', title: 'Quality Excellence', desc: 'Upholding strict product quality benchmarks in every batch.' },
    { num: '02', title: 'Customer Satisfaction', desc: 'Prioritizing client requirements with prompt, personalized service.' },
    { num: '03', title: 'Integrity', desc: 'Maintaining transparency and honesty in all our B2B interactions.' },
    { num: '04', title: 'Innovation', desc: 'Adopting modern techniques to improve manufacturing and processing.' },
    { num: '05', title: 'Reliable Supply', desc: 'Ensuring consistent, on-time bulk deliveries across domestic markets.' },
    { num: '06', title: 'Continuous Improvement', desc: 'Consistently refining our processes, skills, and logistics.' },
    { num: '07', title: 'Responsible Business', desc: 'Operating with ecological responsibility and ethical employment standards.' }
  ];

  // Animation variants
  const tabContentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.2, ease: 'easeIn' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06 }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      
      {/* Hero Header */}
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
            <span className="section-label">Our Story</span>
            <h1 className="font-serif" style={{ 
              fontSize: '3rem', 
              fontWeight: '400', 
              marginBottom: '24px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              rowGap: '0.15em'
            }}>
              {"Built Around Quality,".split(" ").map((word, i) => (
                <motion.span
                  key={`ab1-${i}`}
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
              {"Reliability & Relationships".split(" ").map((word, i) => (
                <motion.span
                  key={`ab2-${i}`}
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
              FILYARN INDUSTRIES PRIVATE LIMITED is a prominent textile manufacturer and B2B supplier based in Surat, Gujarat. We focus on dependable yarn and sewing thread solutions, responsive customer service, and reliable supply for textile and garment businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Split */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">Company Overview</span>
              <h2 className="font-serif" style={{ fontSize: '2.2rem', fontWeight: '400', marginBottom: '20px' }}>
                Delivering <span>Consistent Textile Sourcing</span> Solutions
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.6 }}>
                Based in the textile hub of Surat, Gujarat, Filyarn Industries Pvt. Ltd. was incorporated to establish a professional structure for bulk yarn supply. The company operates in spinning, winding, and yarn trading to supply spun polyester yarn, dyed yarn, and sewing threads.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.6 }}>
                We believe in transparency and compliance. That is why all our registration details are open to review, reinforcing our dedication to secure, long-term B2B relationships.
              </p>

              {/* Stats Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                {companyStats.map((stat, idx) => (
                  <div key={idx} style={{ padding: '16px', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-light)', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-accent)', marginTop: '4px' }}>{stat.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Placeholder
                src="/images/company/about-overview.jpg"
                alt="Filyarn Industries Manufacturing Unit"
                ratioClass="ratio-4-3"
                text="Filyarn Facility Image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directors Board */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label">Corporate Governance</span>
            <h2 className="section-title">
              Board of <span>Directors</span>
            </h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Filyarn is led by experienced professionals directing operations, strategy, and partner relations.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            maxWidth: '960px',
            margin: '0 auto'
          }}>
            {companyConfig.registration.directors.map((director, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card"
                style={{ textAlign: 'center', backgroundColor: 'var(--bg-secondary)' }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-light)',
                  margin: '0 auto 16px auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)'
                }}>
                  <Briefcase size={32} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '4px' }}>{director.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-accent)' }}>{director.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundational Pillars Section */}
      <section className="section section-alt" style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label" style={{ color: 'var(--color-logo-blue)' }}>Foundational Pillars</span>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Our Values: <span>Our Guiding Principles</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: '300', margin: '0 auto', maxWidth: '700px' }}>
              Our values guide how we work, serve customers, and build the future of the yarn and textile business.
            </p>
          </div>

          {/* Interactive Panels/Tabs */}
          <div style={{
            display: 'flex',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-light)',
            borderRadius: '8px',
            padding: '6px',
            marginBottom: '32px'
          }} className="pillars-tabs-row">
            {[
              { id: 'mission', num: '01', label: 'Our Mission', icon: <Compass size={16} /> },
              { id: 'vision', num: '02', label: 'Our Vision', icon: <Eye size={16} /> },
              { id: 'values', num: '03', label: 'Core Values', icon: <Award size={16} /> }
            ].map((tab) => {
              const isActive = activePillar === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActivePillar(tab.id)}
                  style={{
                    flex: '1',
                    padding: '14px 20px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: isActive ? 'var(--color-accent)' : 'transparent',
                    color: isActive ? '#fff' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  className="pillar-tab"
                >
                  <span style={{ fontSize: '0.8rem', opacity: 0.6, fontWeight: '400' }}>{tab.num}</span>
                  {tab.icon}
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display Area */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--border-radius)',
            padding: '40px',
            minHeight: '260px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)'
          }} className="pillars-content-box">
            <AnimatePresence mode="wait">
              {activePillar === 'mission' && (
                <motion.div
                  key="mission"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabContentVariants}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', height: '100%' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Compass size={28} style={{ color: 'var(--color-logo-blue)' }} />
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '600' }}>Our Corporate Mission</h3>
                  </div>
                  <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.8,
                    fontWeight: '300',
                    borderLeft: '4px solid var(--color-logo-blue)',
                    paddingLeft: '24px'
                  }}>
                    {valuesData.mission}
                  </p>
                </motion.div>
              )}

              {activePillar === 'vision' && (
                <motion.div
                  key="vision"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabContentVariants}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', height: '100%' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Eye size={28} style={{ color: 'var(--color-logo-blue)' }} />
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '600' }}>Our Corporate Vision</h3>
                  </div>
                  <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.8,
                    fontWeight: '300',
                    borderLeft: '4px solid var(--color-logo-blue)',
                    paddingLeft: '24px'
                  }}>
                    {valuesData.vision}
                  </p>
                </motion.div>
              )}

              {activePillar === 'values' && (
                <motion.div
                  key="values"
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  variants={staggerContainer}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <Award size={28} style={{ color: 'var(--color-logo-blue)' }} />
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '600' }}>Our Core Values</h3>
                  </div>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                    gap: '20px'
                  }}>
                    {valuesList.map((val) => (
                      <motion.div
                        key={val.num}
                        variants={staggerItem}
                        style={{
                          backgroundColor: 'var(--bg-tertiary)',
                          border: '1px solid var(--border-light)',
                          padding: '20px',
                          borderRadius: '6px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.8rem', color: 'var(--color-logo-blue)', fontWeight: '600' }}>{val.num}</span>
                          <CheckCircle2 size={14} style={{ color: 'var(--color-accent)' }} />
                        </div>
                        <h4 style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--text-primary)' }}>{val.title}</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, fontWeight: '300' }}>{val.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Roadmap Component (Horizontal timeline Roadmap) */}
      <LegacyTimeline />

      {/* Redesigned External Verification */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label" style={{ color: 'var(--color-logo-blue)' }}>External Verification</span>
            <h2 className="section-title">
              Company <span>References</span>
            </h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '600px' }}>
              Review our active corporate standing and verified profiles across public business intelligence resources.
            </p>
          </div>

          {/* Grid Layout: Left featured Zauba Corp card + Right 3 stacked cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '30px'
          }} className="verification-layout-grid">
            
            {/* Left Featured Card (Zauba Corp) - WRAPPED inside interactive block anchor */}
            <a
              href="https://www.zaubacorp.com/FILYARN-INDUSTRIES-PRIVATE-LIMITED-U13130GJ2024PTC154636"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
              className="ref-card-anchor"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--border-radius)',
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                className="featured-ref-card"
              >
                <div>
                  <div style={{
                    height: '40px',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <img
                      src="/images/verification/zaubacorp.svg"
                      alt="ZaubaCorp Logo"
                      style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                    />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '12px', transition: 'color 0.25s' }} className="ref-card-title">
                    Zauba Corp
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '30px', fontWeight: '300' }}>
                    Review corporate financials, active status, board changes, share capital registrations, and incorporation metrics from the official registry.
                  </p>
                </div>
                
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '14px 28px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    borderRadius: '6px',
                    backgroundColor: 'var(--color-accent)',
                    color: '#fff',
                    alignSelf: 'flex-start',
                    transition: 'all 0.25s ease'
                  }}
                  className="ref-action-btn"
                >
                  View Company Data
                  <ArrowUpRight size={16} />
                </span>
              </motion.div>
            </a>

            {/* Right column: 3 smaller vertical cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  id: 'leikart',
                  title: 'LeiKart Registry',
                  logo: '/images/verification/leikart.svg',
                  desc: 'Legal Entity Identifier certificate verification.',
                  url: 'https://www.leikart.com/leicert/335800XWMEZHC6TZV221/'
                },
                {
                  id: 'magicpin',
                  title: 'Magicpin',
                  logo: '/images/verification/magicpin.png',
                  desc: 'Public business presence and local supply directory verification.',
                  url: 'https://magicpin.in/Surat/Pipodara/Other/Filyarn-Industries-Pvt-Ltd/store/2236398?srsltid=AfmBOoq36wEIqSADixu_tMRWTrh1H2RLy21qfq2GE1wuKvzQLNcUha5R'
                },
                {
                  id: 'tracxn',
                  title: 'Tracxn',
                  logo: '/images/verification/tracxn.svg',
                  desc: 'Registry report containing legal profiles, funding status, and registry events.',
                  url: 'https://tracxn.com/d/legal-entities/india/filyarn-industries-private-limited/__zaxDXdyLpqTyuHwIwcOWXpcEVAr04aMgDQ8GzldB7XY#about'
                }
              ].map((card, idx) => (
                <a
                  key={card.id}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
                  className="ref-card-anchor"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    className="small-ref-card"
                  >
                    <div style={{ flex: '1', marginRight: '16px' }}>
                      <div style={{
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '8px',
                        backgroundColor: card.id === 'magicpin' ? 'var(--magicpin-logo-bg)' : 'transparent',
                        padding: card.id === 'magicpin' ? '4px 10px' : '0',
                        borderRadius: '4px',
                        width: 'fit-content'
                      }}>
                        <img
                          src={card.logo}
                          alt={`${card.title} Logo`}
                          style={{ height: '20px', width: 'auto', objectFit: 'contain' }}
                        />
                      </div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px', transition: 'color 0.25s' }} className="ref-card-title">{card.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '300', margin: 0 }}>{card.desc}</p>
                    </div>
                    <span
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)',
                        flexShrink: 0,
                        transition: 'all 0.25s ease'
                      }}
                      className="small-ref-circle-btn"
                    >
                      <ArrowUpRight size={18} />
                    </span>
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConnectCTA />

      <style>{`
        .pillar-tab:hover {
          background-color: rgba(99, 102, 241, 0.05) !important;
        }
        
        /* Premium Card Interaction Styles */
        .ref-card-anchor {
          outline: none;
        }
        .ref-card-anchor:focus-visible .featured-ref-card,
        .ref-card-anchor:focus-visible .small-ref-card {
          border-color: var(--color-accent) !important;
          box-shadow: 0 0 0 3px var(--border-focus) !important;
        }
        
        .ref-card-anchor:hover .featured-ref-card {
          border-color: var(--color-accent) !important;
          box-shadow: 0 12px 35px rgba(99, 102, 241, 0.08) !important;
          transform: translateY(-4px);
        }
        .ref-card-anchor:hover .featured-ref-card .ref-card-title {
          color: var(--color-accent) !important;
        }
        .ref-card-anchor:hover .featured-ref-card .ref-action-btn {
          background-color: var(--color-accent-hover) !important;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);
        }
        
        .ref-card-anchor:hover .small-ref-card {
          border-color: var(--color-accent) !important;
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.06) !important;
          transform: translateX(4px);
        }
        .ref-card-anchor:hover .small-ref-card .ref-card-title {
          color: var(--color-accent) !important;
        }
        .ref-card-anchor:hover .small-ref-card .small-ref-circle-btn {
          background-color: var(--color-accent) !important;
          color: #fff !important;
          border-color: var(--color-accent) !important;
        }

        @media (max-width: 991px) {
          .verification-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .pillars-tabs-row {
            flex-direction: column !important;
            gap: 4px !important;
          }
          .pillar-tab {
            width: 100% !important;
            padding: 12px !important;
          }
          .pillars-content-box {
            padding: 24px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
