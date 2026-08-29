import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { mediaCategories, mediaGalleryItems } from '../data/content';
import Placeholder from '../components/common/Placeholder';

const MediaGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  useEffect(() => {
    document.title = "Company Media Gallery | FILYARN";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Browse photographs of Filyarn Industries Private Limited corporate premises, quality laboratory activities, warehousing hubs, and official business events.");
    }
  }, []);

  // Filter items
  const filteredItems = selectedCategory === "All"
    ? mediaGalleryItems
    : mediaGalleryItems.filter(item => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") setActiveLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems]);

  const handlePrev = () => {
    setActiveLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

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
            <span className="section-label">Media Records</span>
            <h1 className="font-serif" style={{ 
              fontSize: '3rem', 
              fontWeight: '400', 
              marginBottom: '24px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              rowGap: '0.15em'
            }}>
              {"Company ".split(" ").map((word, i) => (
                <motion.span
                  key={`mg1-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  style={{ display: 'inline-block', marginRight: '0.25em' }}
                >
                  {word}
                </motion.span>
              ))}
              {"Media Gallery".split(" ").map((word, i) => (
                <motion.span
                  key={`mg2-${i}`}
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
              Explore visual glimpses of our corporate facilities, office spaces, warehouses, events, and business activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="section section-alt" style={{ minHeight: '600px' }}>
        <div className="container">
          {/* Tabs Filter Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}>
            {mediaCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '10px 20px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  borderRadius: '4px',
                  backgroundColor: selectedCategory === category ? 'var(--color-accent)' : 'var(--bg-tertiary)',
                  color: selectedCategory === category ? '#fff' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: selectedCategory === category ? 'var(--color-accent)' : 'var(--border-light)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
                className="gallery-tab"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry-Grid Layout */}
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => {
                // Apply unequal aspect ratios for masonry feel
                const isFeatured = idx % 3 === 0;
                const ratioClass = isFeatured ? "ratio-16-10" : "ratio-4-3";

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                    onClick={() => setActiveLightboxIndex(idx)}
                    className="gallery-card"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--border-radius)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                  >
                    <Placeholder
                      src={item.image}
                      alt={item.title}
                      ratioClass={ratioClass}
                      text={item.title}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="card-hover-overlay" style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(10, 13, 22, 0.85)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      padding: '20px',
                      textAlign: 'center',
                      zIndex: 2
                    }}>
                      <ZoomIn size={24} style={{ color: 'var(--color-logo-blue)', marginBottom: '8px' }} />
                      <span style={{ fontSize: '1rem', fontWeight: '600', color: '#fff' }}>{item.title}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-logo-blue)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.95)',
              zIndex: 1050,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '24px'
            }}
            onClick={() => setActiveLightboxIndex(null)}
          >
            {/* Top Bar */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '24px',
              right: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '#fff',
              zIndex: 10
            }}>
              <div>
                <span style={{ fontSize: '1rem', fontWeight: '600' }}>
                  {filteredItems[activeLightboxIndex]?.title}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-logo-blue)', textTransform: 'uppercase', display: 'block' }}>
                  Category: {filteredItems[activeLightboxIndex]?.category}
                </span>
              </div>
              <button
                onClick={() => setActiveLightboxIndex(null)}
                style={{
                  cursor: 'pointer',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  border: 'none',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Picture Box with Fallback */}
            <div
              style={{
                width: '100%',
                maxWidth: '900px',
                aspectRatio: '16/9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  left: '-60px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
                className="lightbox-nav"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Image Frame */}
              <div style={{ width: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden' }}>
                {filteredItems[activeLightboxIndex] && (
                  <Placeholder
                    src={filteredItems[activeLightboxIndex].image}
                    alt={filteredItems[activeLightboxIndex].title}
                    ratioClass="ratio-16-9"
                    text={filteredItems[activeLightboxIndex].title}
                  />
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '-60px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
                className="lightbox-nav"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Helper keys text */}
            <div style={{ position: 'absolute', bottom: '20px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              Use Left/Right arrow keys to navigate. Esc to exit.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-card:hover .card-hover-overlay {
          opacity: 1 !important;
        }
        .gallery-tab:hover {
          filter: brightness(1.1);
        }
        
        @media (max-width: 1024px) {
          .lightbox-nav {
            position: static !important;
            transform: none !important;
            margin: 0 10px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MediaGallery;
