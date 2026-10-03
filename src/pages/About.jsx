import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  ArrowUpRight,
  Award,
  Compass,
  Eye,
  ShieldCheck,
  CheckCircle2,
  Truck,
  Users,
  Calendar,
  User,
  CreditCard,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { companyConfig } from '../data/config';
import { valuesData } from '../data/content';
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

      {/* =========================================
          SECTION 1: OUR STORY
         ========================================= */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-grid">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="about-hero-left"
            >
              {/* Eyebrow */}
              <div className="about-hero-eyebrow">
                <span>OUR STORY</span>
                <span className="about-eyebrow-dash" />
              </div>

              {/* Main Heading */}
              <h1 className="about-hero-heading font-serif">
                Built Around Quality,<br />
                <span className="about-heading-accent">Reliability &amp; Relationships</span>
              </h1>

              {/* Description */}
              <p className="about-hero-desc">
                FILYARN INDUSTRIES PRIVATE LIMITED is a prominent textile manufacturer and B2B supplier based in Surat, Gujarat. We focus on dependable yarn and sewing thread solutions, responsive customer service, and reliable supply for textile and garment businesses.
              </p>

              {/* 3 Value Check Pills */}
              <div className="about-hero-badges">
                <div className="about-badge-item">
                  <div className="about-badge-icon">
                    <ShieldCheck size={16} />
                  </div>
                  <span>Premium Quality</span>
                </div>
                <div className="about-badge-item">
                  <div className="about-badge-icon">
                    <Truck size={16} />
                  </div>
                  <span>On-Time Delivery</span>
                </div>
                <div className="about-badge-item">
                  <div className="about-badge-icon">
                    <Users size={16} />
                  </div>
                  <span>Long-Term Partnerships</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Composition with about-main.jpg */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="about-hero-visual"
            >
              <div className="about-visual-container">
                {/* Dot Matrix Pattern */}
                <div className="about-dot-matrix" aria-hidden="true" />

                {/* Decorative Geometric Backdrop Card */}
                <div className="about-geo-card-back" />

                {/* Floating "Trusted Textile Partner" Badge */}
                <div className="about-trusted-badge">
                  <div className="about-trusted-icon">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="about-trusted-text">
                    <span className="about-trusted-title">Trusted Textile</span>
                    <span className="about-trusted-sub">Partner</span>
                  </div>
                </div>

                {/* Main Image Frame */}
                <div className="about-main-img-card">
                  <img
                    src="/images/about/about-main.jpg"
                    alt="Filyarn Industries Textile Sourcing & Spun Yarn"
                    className="about-main-img"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: COMPANY OVERVIEW & ECOSYSTEM
         ========================================= */}
      <section className="overview-section">
        <div className="container">
          <div className="overview-grid">

            {/* Left Column: Story & 4 Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="overview-left"
            >
              <div className="overview-eyebrow">
                <span className="overview-dash" />
                <span>COMPANY OVERVIEW</span>
              </div>

              <h2 className="overview-heading font-serif">
                Delivering Consistent Textile Sourcing Solutions
              </h2>

              <p className="overview-para">
                Based in the textile hub of Surat, Gujarat, Filyarn Industries Pvt. Ltd. was incorporated to establish a professional structure for bulk yarn supply. The company operates in spinning, winding, and yarn trading to supply spun polyester yarn, dyed yarn, and sewing threads.
              </p>

              <p className="overview-para">
                We believe in transparency and compliance. That is why all our registration details are open to review, reinforcing our dedication to secure, long-term B2B relationships.
              </p>

              {/* 2x2 Registration Stats Cards */}
              <div className="overview-stats-grid">
                <div className="overview-stat-card">
                  <div className="overview-stat-icon">
                    <Calendar size={18} />
                  </div>
                  <div className="overview-stat-info">
                    <span className="overview-stat-label">INCORPORATED</span>
                    <span className="overview-stat-val">27 August 2024</span>
                  </div>
                </div>

                <div className="overview-stat-card">
                  <div className="overview-stat-icon">
                    <User size={18} />
                  </div>
                  <div className="overview-stat-info">
                    <span className="overview-stat-label">REGISTERED STATUS</span>
                    <span className="overview-stat-val">Active</span>
                  </div>
                </div>

                <div className="overview-stat-card">
                  <div className="overview-stat-icon">
                    <CreditCard size={18} />
                  </div>
                  <div className="overview-stat-info">
                    <span className="overview-stat-label">AUTHORIZED CAPITAL</span>
                    <span className="overview-stat-val">₹15,00,000</span>
                  </div>
                </div>

                <div className="overview-stat-card">
                  <div className="overview-stat-icon">
                    <TrendingUp size={18} />
                  </div>
                  <div className="overview-stat-info">
                    <span className="overview-stat-label">PAID-UP CAPITAL</span>
                    <span className="overview-stat-val">₹15,00,000</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: OUR MANUFACTURING ECOSYSTEM */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="overview-right"
            >
              <div className="ecosystem-card-wrap">
                {/* Diagonal Hatched Watermarks */}
                <div className="ecosystem-hatch-tl" aria-hidden="true" />
                <div className="ecosystem-hatch-br" aria-hidden="true" />

                {/* Ecosystem Main Card */}
                <div className="ecosystem-card">
                  <h3 className="ecosystem-title font-serif">
                    OUR MANUFACTURING ECOSYSTEM
                  </h3>

                  <div className="ecosystem-flow">
                    {/* Step 1: Raw Material */}
                    <div className="ecosystem-step">
                      <div className="ecosystem-img-wrap">
                        <img
                          src="/images/about/preview_clean_raw.png"
                          alt="Raw Material Sourcing"
                          className="ecosystem-img"
                        />
                      </div>
                      <h4 className="ecosystem-step-title">Raw Material</h4>
                      <p className="ecosystem-step-desc">
                        Sourcing premium plain white yarn
                        <span className="ecosystem-step-note">(Un-dyed, base yarn)</span>
                      </p>
                    </div>

                    {/* Arrow 1 */}
                    <div className="ecosystem-arrow">→</div>

                    {/* Step 2: Dyeing */}
                    <div className="ecosystem-step">
                      <div className="ecosystem-img-wrap">
                        <img
                          src="/images/about/preview_clean_dyeing.png"
                          alt="State of the art dyeing"
                          className="ecosystem-img"
                        />
                      </div>
                      <h4 className="ecosystem-step-title">Dyeing</h4>
                      <p className="ecosystem-step-desc">
                        State-of-the-art color application
                      </p>
                    </div>

                    {/* Arrow 2 */}
                    <div className="ecosystem-arrow">→</div>

                    {/* Step 3: Quality Inspection */}
                    <div className="ecosystem-step">
                      <div className="ecosystem-img-wrap">
                        <img
                          src="/images/about/preview_clean_quality.png"
                          alt="Quality inspection and testing"
                          className="ecosystem-img"
                        />
                      </div>
                      <h4 className="ecosystem-step-title">Quality Inspection</h4>
                      <p className="ecosystem-step-desc">
                        Rigorous fabric standard checks
                      </p>
                    </div>

                    {/* Arrow 3 */}
                    <div className="ecosystem-arrow">→</div>

                    {/* Step 4: Packaging & Dispatch */}
                    <div className="ecosystem-step">
                      <div className="ecosystem-img-wrap">
                        <img
                          src="/images/about/preview_clean_dispatch.png"
                          alt="Packaging and final dispatch"
                          className="ecosystem-img"
                        />
                      </div>
                      <h4 className="ecosystem-step-title">Packaging &amp; Dispatch</h4>
                      <p className="ecosystem-step-desc">
                        Final packing and logistics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
        /* =========================================
           OUR STORY HERO STYLES
           ========================================= */
        .about-hero-section {
          padding: 85px 0 95px 0;
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-light);
          position: relative;
          overflow: hidden;
        }

        .about-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .about-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          background: rgba(80, 81, 249, 0.08);
          border-radius: 20px;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #5051F9;
          margin-bottom: 20px;
          border: 1px solid rgba(80, 81, 249, 0.18);
        }

        [data-theme="dark"] .about-hero-eyebrow {
          background: rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
        }

        .about-eyebrow-dash {
          width: 14px;
          height: 1.5px;
          background: #5051F9;
          opacity: 0.8;
          display: inline-block;
        }

        .about-hero-heading {
          font-size: clamp(2.3rem, 3.8vw, 3.2rem);
          font-weight: 500;
          line-height: 1.2;
          color: var(--text-primary);
          margin-bottom: 22px;
        }

        .about-heading-accent {
          color: #5051F9;
          font-style: italic;
          font-weight: 400;
        }

        [data-theme="dark"] .about-heading-accent {
          color: #818cf8;
        }

        .about-hero-desc {
          font-size: 1.02rem;
          color: var(--text-secondary);
          line-height: 1.68;
          margin-bottom: 32px;
          max-width: 580px;
        }

        .about-hero-badges {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .about-badge-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .about-badge-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(80, 81, 249, 0.12);
          color: #5051F9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        [data-theme="dark"] .about-badge-icon {
          background: rgba(99, 102, 241, 0.25);
          color: #a5b4fc;
        }

        /* Right Visual Composition */
        .about-hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .about-visual-container {
          position: relative;
          width: 100%;
          max-width: 480px;
        }

        .about-dot-matrix {
          position: absolute;
          top: 15px;
          left: -28px;
          width: 70px;
          height: 80px;
          background-image: radial-gradient(#818cf8 1.5px, transparent 1.5px);
          background-size: 12px 12px;
          opacity: 0.65;
          z-index: 1;
        }

        .about-geo-card-back {
          position: absolute;
          bottom: -16px;
          right: -16px;
          width: 80%;
          height: 80%;
          background: rgba(80, 81, 249, 0.14);
          border-radius: 30px;
          z-index: 1;
        }

        .about-main-img-card {
          position: relative;
          z-index: 2;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 48px rgba(15, 23, 42, 0.12);
          border: 1px solid rgba(226, 232, 240, 0.9);
          background: #ffffff;
        }

        [data-theme="dark"] .about-main-img-card {
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.5);
        }

        .about-main-img {
          width: 100%;
          height: 340px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-main-img-card:hover .about-main-img {
          transform: scale(1.04);
        }

        .about-trusted-badge {
          position: absolute;
          top: -14px;
          left: -14px;
          z-index: 5;
          background: #ffffff;
          padding: 8px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.1);
          border: 1px solid rgba(226, 232, 240, 0.9);
        }

        [data-theme="dark"] .about-trusted-badge {
          background: #11141b;
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.4);
        }

        .about-trusted-icon {
          color: #5051F9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-trusted-text {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }

        .about-trusted-title {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .about-trusted-sub {
          font-size: 0.74rem;
          color: var(--text-secondary);
        }

        /* =========================================
           SECTION 2: COMPANY OVERVIEW & ECOSYSTEM
           ========================================= */
        .overview-section {
          padding: 95px 0 105px 0;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-light);
          position: relative;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1.28fr;
          gap: 55px;
          align-items: center;
        }

        .overview-left {
          display: flex;
          flex-direction: column;
        }

        .overview-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #5051F9;
          margin-bottom: 16px;
        }

        .overview-dash {
          width: 20px;
          height: 1.5px;
          background: #5051F9;
          opacity: 0.8;
          display: inline-block;
        }

        .overview-heading {
          font-size: clamp(2rem, 3.4vw, 2.7rem);
          font-weight: 500;
          line-height: 1.24;
          color: var(--text-primary);
          margin-bottom: 22px;
        }

        .overview-para {
          font-size: 0.96rem;
          color: var(--text-secondary);
          line-height: 1.68;
          margin-bottom: 18px;
        }

        .overview-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 14px;
        }

        .overview-stat-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.85);
          border-radius: 12px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        [data-theme="dark"] .overview-stat-card {
          background: #11141b;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
        }

        .overview-stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.08);
        }

        .overview-stat-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(80, 81, 249, 0.1);
          color: #5051F9;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        [data-theme="dark"] .overview-stat-icon {
          background: rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
        }

        .overview-stat-info {
          display: flex;
          flex-direction: column;
        }

        .overview-stat-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .overview-stat-val {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 2px;
        }

        /* Ecosystem Card & Flow */
        .ecosystem-card-wrap {
          position: relative;
          width: 100%;
        }

        .ecosystem-hatch-tl {
          position: absolute;
          top: -24px;
          left: -24px;
          width: 130px;
          height: 120px;
          background: repeating-linear-gradient(45deg, rgba(148, 163, 184, 0.35) 0, rgba(148, 163, 184, 0.35) 1.5px, transparent 1.5px, transparent 8px);
          z-index: 1;
          pointer-events: none;
          border-radius: 8px;
        }

        .ecosystem-hatch-br {
          position: absolute;
          bottom: -24px;
          left: -20px;
          width: 120px;
          height: 100px;
          background: repeating-linear-gradient(45deg, rgba(148, 163, 184, 0.35) 0, rgba(148, 163, 184, 0.35) 1.5px, transparent 1.5px, transparent 8px);
          z-index: 1;
          pointer-events: none;
          border-radius: 8px;
        }

        .ecosystem-card {
          position: relative;
          z-index: 2;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 20px;
          padding: 38px 24px 34px 24px;
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
          text-align: center;
        }

        [data-theme="dark"] .ecosystem-card {
          background: #11141b;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
        }

        .ecosystem-title {
          font-size: 1.45rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin-bottom: 34px;
        }

        .ecosystem-flow {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
        }

        .ecosystem-step {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 0;
        }

        .ecosystem-img-wrap {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }

        .ecosystem-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ecosystem-step:hover .ecosystem-img {
          transform: scale(1.1);
        }

        .ecosystem-step-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.25;
          margin-bottom: 6px;
        }

        .ecosystem-step-desc {
          font-size: 0.74rem;
          color: var(--text-secondary);
          line-height: 1.42;
          margin: 0;
        }

        .ecosystem-step-note {
          display: block;
          color: var(--text-muted);
          font-size: 0.7rem;
          margin-top: 2px;
        }

        .ecosystem-arrow {
          color: #94a3b8;
          font-size: 1.3rem;
          margin-top: 26px;
          flex-shrink: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .about-hero-grid,
          .overview-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .about-visual-container {
            max-width: 100%;
          }

          .about-main-img {
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .about-hero-section {
            padding: 60px 0 65px 0;
          }

          .overview-section {
            padding: 65px 0 70px 0;
          }

          .about-hero-badges {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .ecosystem-flow {
            flex-direction: column;
            align-items: center;
            gap: 22px;
          }

          .ecosystem-arrow {
            transform: rotate(90deg);
            margin: 0;
          }

          .overview-stats-grid {
            grid-template-columns: 1fr;
          }
        }

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
