import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  Building2,
  Users,
  Settings,
  Calendar,
  Image as ImageIcon,
  Truck,
  Package,
  Box,
  Monitor,
  Users2
} from 'lucide-react';
import { mediaCategories, mediaGalleryItems } from '../data/content';

const getCategoryIcon = (category, size = 14) => {
  switch (category) {
    case 'Premises':
      return <Building2 size={size} />;
    case 'Activities':
      return <Users size={size} />;
    case 'Facility':
      return <Settings size={size} />;
    case 'Events':
      return <Calendar size={size} />;
    case 'All':
    default:
      return <ImageIcon size={size} />;
  }
};

const getItemIcon = (iconType, size = 16) => {
  switch (iconType) {
    case 'building':
      return <Building2 size={size} />;
    case 'desk':
      return <Monitor size={size} />;
    case 'warehouse':
      return <Package size={size} />;
    case 'production':
      return <Settings size={size} />;
    case 'meeting':
      return <Users size={size} />;
    case 'box':
      return <Box size={size} />;
    case 'calendar':
      return <Calendar size={size} />;
    case 'truck':
      return <Truck size={size} />;
    case 'image':
      return <ImageIcon size={size} />;
    case 'team':
      return <Users2 size={size} />;
    default:
      return <Building2 size={size} />;
  }
};

const MediaGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  useEffect(() => {
    document.title = "Company Media Gallery | FILYARN INDUSTRIES";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore photographs of Filyarn Industries Private Limited corporate premises, office facilities, yarn manufacturing floors, warehousing hubs, and celebration events."
      );
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
    <div className="media-gallery-page">

      {/* Header Section */}
      <section className="media-header-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="media-header-content"
          >
            {/* Centered Eyebrow */}
            <div className="media-eyebrow-row">
              <span className="media-eyebrow-text">MEDIA RECORDS</span>
            </div>

            {/* Main Heading */}
            <h1 className="media-main-heading">
              <span className="heading-company font-serif">Company </span>
              <span className="heading-gallery">Media Gallery</span>
            </h1>

            {/* Subtitle */}
            <p className="media-subtext">
              Explore visual glimpses of our corporate facilities, office spaces, warehouses, events, and business activities.
            </p>
          </motion.div>

          {/* Filter Pills Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="media-filter-bar"
          >
            {mediaCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`media-filter-pill ${isActive ? 'active' : ''}`}
                >
                  <span className="pill-icon">{getCategoryIcon(category, 14)}</span>
                  <span>{category}</span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="media-grid-section">
        <div className="container" style={{ maxWidth: '1360px' }}>
          
          {/* If "All" selected: Show 4-column Bento layout matching the exact design */}
          {selectedCategory === "All" ? (
            <motion.div
              layout
              className="media-bento-grid"
            >
              {mediaGalleryItems.map((item, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  key={item.id}
                  onClick={() => setActiveLightboxIndex(idx)}
                  className={`media-bento-card bento-card-${item.gridArea}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="media-card-img"
                    loading="lazy"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="media-card-gradient" />

                  {/* Top-Right Search Zoom Icon */}
                  <button
                    className="media-zoom-btn"
                    aria-label={`View ${item.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveLightboxIndex(idx);
                    }}
                  >
                    <Search size={14} strokeWidth={2.4} />
                  </button>

                  {/* Bottom-Left Frosted Info Badge */}
                  <div className="media-card-badge">
                    <div
                      className="media-badge-icon"
                      style={{ backgroundColor: item.accent }}
                    >
                      {getItemIcon(item.iconType, 16)}
                    </div>
                    <div className="media-badge-text">
                      <h4 className="media-badge-title">{item.title}</h4>
                      <p className="media-badge-subtitle">{item.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Filtered view: responsive uniform grid */
            <motion.div
              layout
              className="media-filtered-grid"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                    onClick={() => setActiveLightboxIndex(idx)}
                    className="media-filtered-card"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="media-card-img"
                      loading="lazy"
                    />

                    <div className="media-card-gradient" />

                    <button
                      className="media-zoom-btn"
                      aria-label={`View ${item.title}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveLightboxIndex(idx);
                      }}
                    >
                      <Search size={14} strokeWidth={2.4} />
                    </button>

                    <div className="media-card-badge">
                      <div
                        className="media-badge-icon"
                        style={{ backgroundColor: item.accent }}
                      >
                        {getItemIcon(item.iconType, 16)}
                      </div>
                      <div className="media-badge-text">
                        <h4 className="media-badge-title">{item.title}</h4>
                        <p className="media-badge-subtitle">{item.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="media-lightbox-backdrop"
            onClick={() => setActiveLightboxIndex(null)}
          >
            {/* Top Bar */}
            <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-info">
                <h3 className="lightbox-title">{filteredItems[activeLightboxIndex].title}</h3>
                <span className="lightbox-sub">{filteredItems[activeLightboxIndex].subtitle} &bull; {filteredItems[activeLightboxIndex].category}</span>
              </div>
              <button
                className="lightbox-close-btn"
                onClick={() => setActiveLightboxIndex(null)}
                aria-label="Close image modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Image Box */}
            <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
              <button
                className="lightbox-arrow-btn left"
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <ChevronLeft size={26} />
              </button>

              <div className="lightbox-img-frame">
                <img
                  src={filteredItems[activeLightboxIndex].image}
                  alt={filteredItems[activeLightboxIndex].title}
                  className="lightbox-img"
                />
              </div>

              <button
                className="lightbox-arrow-btn right"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight size={26} />
              </button>
            </div>

            {/* Bottom Indicator */}
            <div className="lightbox-footer">
              <span>{activeLightboxIndex + 1} of {filteredItems.length} &bull; Use Left/Right keys to navigate, Esc to exit</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scoped CSS styling matching the reference screenshot */}
      <style>{`
        .media-gallery-page {
          background-color: var(--bg-primary);
          min-height: 100vh;
          font-family: var(--font-sans);
          padding-bottom: 90px;
        }

        /* Header Styles */
        .media-header-section {
          padding: 70px 0 36px 0;
          text-align: center;
        }

        .media-header-content {
          max-width: 780px;
          margin: 0 auto;
        }

        .media-eyebrow-row {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .media-eyebrow-line {
          width: 32px;
          height: 1.5px;
          background-color: #6366f1;
          opacity: 0.7;
        }

        .media-eyebrow-text {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #4f46e5;
          text-transform: uppercase;
        }

        [data-theme="dark"] .media-eyebrow-text {
          color: #818cf8;
        }

        .media-main-heading {
          font-size: clamp(2.4rem, 4.5vw, 3.4rem);
          line-height: 1.15;
          margin: 0 0 16px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .heading-company {
          color: var(--text-primary);
          font-weight: 500;
        }

        .heading-gallery {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-weight: 400;
          background: linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        [data-theme="dark"] .heading-gallery {
          background: linear-gradient(135deg, #818cf8 0%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .media-subtext {
          font-size: 0.96rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0 auto 32px auto;
          max-width: 620px;
        }

        /* Filter Pills */
        .media-filter-bar {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          padding: 6px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 9999px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
          margin-top: 4px;
        }

        [data-theme="dark"] .media-filter-bar {
          background-color: #11141c;
          border-color: rgba(255, 255, 255, 0.08);
        }

        .media-filter-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 20px;
          font-size: 0.84rem;
          font-weight: 600;
          border-radius: 9999px;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .media-filter-pill:hover {
          color: var(--text-primary);
          background-color: rgba(99, 102, 241, 0.08);
        }

        .media-filter-pill.active {
          background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(79, 70, 229, 0.35);
        }

        .pill-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Bento Grid Layout matching screenshot */
        .media-grid-section {
          padding: 10px 0 40px 0;
        }

        .media-bento-grid {
          display: grid;
          grid-template-columns: 1.12fr 1.35fr 1.35fr 1.12fr;
          grid-template-rows: 195px 195px 195px;
          gap: 16px;
        }

        /* Card Row & Column Spanning */
        .bento-card-premises {
          grid-column: 1;
          grid-row: 1 / span 2;
        }

        .bento-card-events {
          grid-column: 1;
          grid-row: 3;
        }

        .bento-card-office {
          grid-column: 2;
          grid-row: 1;
        }

        .bento-card-meeting {
          grid-column: 2;
          grid-row: 2;
        }

        .bento-card-loading {
          grid-column: 2;
          grid-row: 3;
        }

        .bento-card-warehouse {
          grid-column: 3;
          grid-row: 1;
        }

        .bento-card-dispatch {
          grid-column: 3;
          grid-row: 2;
        }

        .bento-card-products {
          grid-column: 3;
          grid-row: 3;
        }

        .bento-card-production {
          grid-column: 4;
          grid-row: 1 / span 2;
        }

        .bento-card-team {
          grid-column: 4;
          grid-row: 3;
        }

        /* Generic Card Styling */
        .media-bento-card,
        .media-filtered-card {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          background-color: #0f172a;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.08);
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }

        .media-bento-card:hover,
        .media-filtered-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.18);
        }

        .media-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .media-bento-card:hover .media-card-img,
        .media-filtered-card:hover .media-card-img {
          transform: scale(1.04);
        }

        /* Bottom Dark Gradient for readability */
        .media-card-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0) 40%, rgba(15, 23, 42, 0.88) 100%);
          pointer-events: none;
          z-index: 1;
        }

        /* Top-Right Circular Search Zoom Icon */
        .media-zoom-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
          transition: transform 0.2s ease, background-color 0.2s ease;
          z-index: 3;
        }

        .media-bento-card:hover .media-zoom-btn,
        .media-filtered-card:hover .media-zoom-btn {
          transform: scale(1.08);
          background: #ffffff;
        }

        /* Bottom-Left Frosted Info Badge */
        .media-card-badge {
          position: absolute;
          bottom: 14px;
          left: 14px;
          right: 14px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 14px 8px 8px;
          background: rgba(15, 23, 42, 0.72);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 12px;
          max-width: fit-content;
          z-index: 2;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .media-badge-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .media-badge-text {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }

        .media-badge-title {
          font-size: 0.86rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        .media-badge-subtitle {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.78);
          margin: 1px 0 0 0;
          white-space: nowrap;
        }

        /* Filtered Grid */
        .media-filtered-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }

        .media-filtered-card {
          height: 230px;
        }

        /* Lightbox Modal */
        .media-lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(10, 15, 26, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 1100;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .lightbox-top-bar {
          position: absolute;
          top: 20px;
          left: 32px;
          right: 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #ffffff;
          z-index: 10;
        }

        .lightbox-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin: 0 0 2px 0;
        }

        .lightbox-sub {
          font-size: 0.82rem;
          color: #94a3b8;
        }

        .lightbox-close-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .lightbox-close-btn:hover {
          background-color: #ef4444;
          transform: scale(1.06);
        }

        .lightbox-content-box {
          position: relative;
          max-width: 1020px;
          width: 100%;
          max-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-img-frame {
          width: 100%;
          max-height: 75vh;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
        }

        .lightbox-img {
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
          display: block;
        }

        .lightbox-arrow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
          z-index: 10;
        }

        .lightbox-arrow-btn.left {
          left: -64px;
        }

        .lightbox-arrow-btn.right {
          right: -64px;
        }

        .lightbox-arrow-btn:hover {
          background-color: rgba(99, 102, 241, 0.85);
          transform: translateY(-50%) scale(1.08);
        }

        .lightbox-footer {
          position: absolute;
          bottom: 20px;
          color: #64748b;
          font-size: 0.82rem;
          font-weight: 500;
        }

        /* Responsive Design */
        @media (max-width: 1140px) {
          .media-bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }
          .bento-card-premises,
          .bento-card-production {
            grid-column: auto;
            grid-row: span 1;
            height: 220px;
          }
          .bento-card-events,
          .bento-card-office,
          .bento-card-meeting,
          .bento-card-loading,
          .bento-card-warehouse,
          .bento-card-dispatch,
          .bento-card-products,
          .bento-card-team {
            grid-column: auto;
            grid-row: auto;
            height: 220px;
          }
          .lightbox-arrow-btn.left {
            left: 10px;
          }
          .lightbox-arrow-btn.right {
            right: 10px;
          }
        }

        @media (max-width: 640px) {
          .media-bento-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .media-bento-card,
          .media-filtered-card {
            height: 200px !important;
          }
          .media-filter-bar {
            border-radius: 18px;
            padding: 4px;
          }
          .media-filter-pill {
            padding: 7px 14px;
            font-size: 0.78rem;
          }
          .media-card-badge {
            bottom: 10px;
            left: 10px;
            right: 10px;
            padding: 6px 10px 6px 6px;
          }
          .media-badge-icon {
            width: 28px;
            height: 28px;
          }
          .media-badge-title {
            font-size: 0.8rem;
          }
          .media-badge-subtitle {
            font-size: 0.68rem;
          }
        }
      `}</style>
    </div>
  );
};

export default MediaGallery;
