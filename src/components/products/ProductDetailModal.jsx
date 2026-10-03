import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Heart,
  ChevronLeft,
  ChevronRight,
  Truck,
  ShieldCheck,
  Maximize2,
  ChevronDown,
  Sparkles,
  Layers,
  Shirt,
  Grid,
  Scissors,
  CheckCircle2
} from 'lucide-react';
import { generateWhatsAppLink } from '../../data/products';

const ProductDetailModal = ({ product, isOpen, onClose, isFavorite, onToggleFavorite }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Reset active image when product changes
  useEffect(() => {
    setActiveImageIndex(0);
    setIsZoomed(false);
  }, [product]);

  // Handle keyboard ESC to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isZoomed, onClose]);

  if (!isOpen || !product) return null;

  // Determine 5 angles list for product
  const primaryImg = product.image || (
    product.id?.includes('140') ? '/images/products/yarn-140.jpg' :
    product.id?.includes('160') ? '/images/products/yarn-160.jpg' :
    product.id?.includes('sewing') || product.id?.includes('spun') ? '/images/products/sewing-thread.jpg' :
    '/images/products/yarn-110.jpg'
  );

  const imagesList = [
    primaryImg,
    "/images/products/yarn-core.jpg",
    "/images/products/yarn-140.jpg",
    "/images/products/yarn-160.jpg",
    "/images/products/sewing-thread.jpg"
  ];

  const handlePrevImage = (e) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? imagesList.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1));
  };

  const whatsappUrl = generateWhatsAppLink(product, '919157135001');

  // Application icons mapping
  const appIcons = [Shirt, Layers, Grid, Scissors];

  const apps = product.applications && product.applications.length > 0
    ? product.applications
    : [
        "Two-Tone Cross-Dye Weaving",
        "Melange Saree & Dress Materials",
        "Fancy, Jacquard & Brocade Fabrics",
        "Activewear & Textured Knits"
      ];

  return (
    <AnimatePresence>
      <div
        className="product-modal-backdrop"
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.72)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          overflowY: 'auto'
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="product-modal-card"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close product details"
            className="modal-close-round-btn"
            title="Close"
          >
            <X size={18} />
          </button>

          {/* =========================================
              LEFT COLUMN: 5-ANGLE IMAGE GALLERY & TRUST
             ========================================= */}
          <div className="modal-left-col">
            {/* Main Image Frame */}
            <div className="modal-main-img-box">
              <img
                src={imagesList[activeImageIndex % imagesList.length]}
                alt={`${product.name} angle ${activeImageIndex + 1}`}
                className="modal-main-img"
                onError={(e) => { e.currentTarget.src = "/images/products/yarn-110.jpg"; }}
              />

              {/* Expand / Fullscreen Button */}
              <button
                type="button"
                onClick={() => setIsZoomed(!isZoomed)}
                className="modal-img-zoom-btn"
                title="Toggle Expanded View"
                aria-label="Expand image"
              >
                <Maximize2 size={15} />
              </button>
            </div>

            {/* Product Image Angles Selector Strip */}
            <div className="modal-angles-strip">
              <div className="modal-angles-header">
                <span className="modal-angles-title">PRODUCT IMAGE ANGLES</span>
                <div className="modal-angles-controls">
                  <span className="modal-angles-counter">
                    {activeImageIndex + 1} OF {imagesList.length}
                  </span>
                  <div className="modal-angles-arrows">
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      className="modal-angle-arrow-btn"
                      aria-label="Previous angle"
                      title="Previous angle"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextImage}
                      className="modal-angle-arrow-btn"
                      aria-label="Next angle"
                      title="Next angle"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* 5 Angle Thumbnails */}
              <div className="modal-thumbs-grid">
                {imagesList.slice(0, 5).map((imgUrl, idx) => {
                  const isActive = idx === activeImageIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`modal-thumb-btn ${isActive ? 'is-active-thumb' : ''}`}
                      aria-label={`View angle ${idx + 1}`}
                    >
                      <img
                        src={imgUrl}
                        alt={`Angle ${idx + 1}`}
                        className="modal-thumb-img"
                        onError={(e) => { e.currentTarget.src = "/images/products/yarn-110.jpg"; }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Trust & Dispatch Guarantees */}
            <div className="modal-trust-row">
              <div className="modal-trust-card">
                <div className="modal-trust-icon-box trust-truck">
                  <Truck size={18} />
                </div>
                <div className="modal-trust-info">
                  <span className="modal-trust-title">Fast Production &amp; Dispatch</span>
                  <span className="modal-trust-sub">2–4 working days delivery</span>
                </div>
              </div>

              <div className="modal-trust-card">
                <div className="modal-trust-icon-box trust-verified">
                  <ShieldCheck size={18} />
                </div>
                <div className="modal-trust-info">
                  <span className="modal-trust-title">Quality Verified</span>
                  <span className="modal-trust-sub">Lab tested batch strength</span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: PRODUCT SPECS & ACTION
             ========================================= */}
          <div className="modal-right-col">
            {/* Top Badges Row */}
            <div className="modal-badges-row">
              <span className="modal-category-badge">
                {product.category || "AIR TEXTURED YARN (ATY)"}
              </span>
              <span className="modal-denier-badge">
                {product.denier || product.specs?.count || "110 Denier"}
              </span>
            </div>

            {/* Title */}
            <h2 className="modal-product-title">
              {product.name}
            </h2>

            {/* Rating & B2B Standard */}
            <div className="modal-rating-row">
              <div className="modal-stars-wrap">
                <span className="modal-stars">★★★★★</span>
                <span className="modal-rating-num">4.9</span>
              </div>
              <span className="modal-rating-dot">•</span>
              <span className="modal-b2b-badge">Certified B2B Industrial Standard</span>
            </div>

            {/* Description */}
            <p className="modal-description-text">
              {product.longDesc || product.shortDesc || "High-grade continuous polyester filament yarn engineered for superior texture, strength, and smooth weave formation."}
            </p>

            {/* Technical Specifications Section */}
            <div className="modal-specs-section">
              <h4 className="modal-section-subtitle">TECHNICAL SPECIFICATIONS</h4>
              <div className="modal-specs-grid">
                <div className="modal-spec-cell">
                  <span className="modal-spec-cell-label">Denier / Count</span>
                  <span className="modal-spec-cell-val">
                    {product.denier || product.specs?.denier || product.specs?.count || "110 Denier"}
                  </span>
                </div>

                <div className="modal-spec-cell">
                  <span className="modal-spec-cell-label">Yarn Type</span>
                  <span className="modal-spec-cell-val">
                    {product.type || "Polyester Air Textured Yarn (ATY)"}
                  </span>
                </div>

                <div className="modal-spec-cell">
                  <span className="modal-spec-cell-label">Lustre / Finish</span>
                  <span className="modal-spec-cell-val">
                    {product.lustre || "Cationic / Semi-Dull"}
                  </span>
                </div>

                <div className="modal-spec-cell">
                  <span className="modal-spec-cell-label">Standard Package</span>
                  <span className="modal-spec-cell-val">
                    {product.packageType || product.specs?.package || "Paper Cone (3.5kg – 4.5kg)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Typical Industrial Applications & Uses Section */}
            <div className="modal-apps-section">
              <h4 className="modal-section-subtitle">TYPICAL INDUSTRIAL APPLICATIONS &amp; USES</h4>
              <div className="modal-apps-grid">
                {apps.slice(0, 4).map((app, idx) => {
                  const IconComp = appIcons[idx % appIcons.length];
                  return (
                    <div key={idx} className="modal-app-item">
                      <div className="modal-app-icon-pill">
                        <IconComp size={15} />
                      </div>
                      <span className="modal-app-label">{app}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions: WhatsApp Enquiry + Favorite Wishlist Button */}
            <div className="modal-actions-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-whatsapp-enquire-btn"
              >
                {/* SVG WhatsApp Logo */}
                <svg className="modal-wa-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.58 1.961.92 3.031.92h.005c3.181 0 5.767-2.586 5.768-5.766 0-1.541-.6-2.989-1.688-4.077-1.088-1.088-2.535-1.688-4.075-1.688zm3.364 8.232c-.144.405-.837.774-1.17.824-.312.045-.694.075-2.223-.559-1.954-.809-3.213-2.794-3.311-2.924-.097-.13-.79-1.049-.79-2.001 0-.952.498-1.42.676-1.614.177-.194.387-.243.516-.243.13 0 .259.002.372.007.12.006.279-.045.437.336.162.388.551 1.344.599 1.442.049.097.081.211.016.34-.065.13-.097.211-.194.324-.097.113-.205.253-.292.34-.097.097-.199.203-.086.398.113.195.503.829 1.08 1.342.744.662 1.371.867 1.566.964.195.097.308.081.422-.049.113-.13.486-.566.616-.76.13-.194.259-.162.437-.097.178.065 1.134.535 1.328.632.194.097.324.146.372.227.049.081.049.47-.095.875z"/>
                </svg>
                <span>Enquire on WhatsApp</span>
                <ChevronRight size={17} className="modal-enquire-arrow" />
              </a>

              <button
                type="button"
                onClick={() => onToggleFavorite?.(product.id)}
                className={`modal-favorite-btn ${isFavorite ? 'is-favorited' : ''}`}
                aria-label={isFavorite ? "Remove from liked" : "Save to liked"}
                title={isFavorite ? "Remove from Liked" : "Save to Liked"}
              >
                <Heart size={20} fill={isFavorite ? "#ef4444" : "none"} stroke={isFavorite ? "#ef4444" : "currentColor"} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scoped CSS matching the reference screenshot */}
      <style>{`
        .product-modal-card {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 30px 70px -15px rgba(15, 23, 42, 0.25);
          width: 100%;
          max-width: 1100px;
          max-height: 92vh;
          overflow-y: auto;
          position: relative;
          display: grid;
          grid-template-columns: 48% 52%;
          gap: 0;
          z-index: 10000;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .product-modal-card::-webkit-scrollbar,
        .modal-left-col::-webkit-scrollbar,
        .modal-right-col::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }

        [data-theme="dark"] .product-modal-card {
          background: #0f172a;
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 30px 70px -15px rgba(0, 0, 0, 0.7);
        }

        /* Close Button in Top Right */
        .modal-close-round-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #f1f5f9;
          border: 1px solid rgba(226, 232, 240, 0.8);
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 15;
          transition: all 0.2s ease;
        }

        [data-theme="dark"] .modal-close-round-btn {
          background: #1e293b;
          border-color: rgba(255, 255, 255, 0.1);
          color: #94a3b8;
        }

        .modal-close-round-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
          transform: scale(1.06);
        }

        [data-theme="dark"] .modal-close-round-btn:hover {
          background: #334155;
          color: #ffffff;
        }

        /* Left Column */
        .modal-left-col {
          padding: 30px;
          background: #ffffff;
          border-right: 1px solid rgba(241, 245, 249, 0.9);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        [data-theme="dark"] .modal-left-col {
          background: #0b1120;
          border-right-color: rgba(255, 255, 255, 0.06);
        }

        /* Main Image Box */
        .modal-main-img-box {
          position: relative;
          width: 100%;
          height: 290px;
          border-radius: 16px;
          background: linear-gradient(180deg, #f8fafc 0%, #eef2f6 100%);
          border: 1px solid rgba(226, 232, 240, 0.8);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        [data-theme="dark"] .modal-main-img-box {
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          border-color: rgba(255, 255, 255, 0.08);
        }

        .modal-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .modal-img-zoom-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(15, 23, 42, 0.65);
          color: #ffffff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(4px);
          transition: background 0.2s ease;
        }

        .modal-img-zoom-btn:hover {
          background: rgba(15, 23, 42, 0.9);
        }

        /* Angles Strip */
        .modal-angles-strip {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .modal-angles-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-angles-title {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #64748b;
          text-transform: uppercase;
        }

        [data-theme="dark"] .modal-angles-title {
          color: #94a3b8;
        }

        .modal-angles-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .modal-angles-counter {
          font-size: 0.72rem;
          font-weight: 600;
          color: #64748b;
        }

        [data-theme="dark"] .modal-angles-counter {
          color: #94a3b8;
        }

        .modal-angles-arrows {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .modal-angle-arrow-btn {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #f1f5f9;
          border: 1px solid rgba(226, 232, 240, 0.8);
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        [data-theme="dark"] .modal-angle-arrow-btn {
          background: #1e293b;
          border-color: rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
        }

        .modal-angle-arrow-btn:hover {
          background: #4f46e5;
          color: #ffffff;
          border-color: #4f46e5;
        }

        /* 5 Thumbs Grid */
        .modal-thumbs-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
        }

        .modal-thumb-btn {
          position: relative;
          aspect-ratio: 1 / 1;
          border-radius: 10px;
          overflow: hidden;
          background: #f8fafc;
          border: 1.5px solid rgba(226, 232, 240, 0.8);
          padding: 0;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        [data-theme="dark"] .modal-thumb-btn {
          background: #1e293b;
          border-color: rgba(255, 255, 255, 0.08);
        }

        .modal-thumb-btn:hover {
          border-color: #6366f1;
          transform: translateY(-2px);
        }

        .modal-thumb-btn.is-active-thumb {
          border-color: #4f46e5;
          box-shadow: 0 0 0 2.5px rgba(99, 102, 241, 0.35);
        }

        .modal-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Trust Row */
        .modal-trust-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          background: #f8fafc;
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 14px;
          padding: 14px 16px;
        }

        [data-theme="dark"] .modal-trust-row {
          background: rgba(30, 41, 59, 0.4);
          border-color: rgba(255, 255, 255, 0.06);
        }

        .modal-trust-card {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .modal-trust-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .trust-truck {
          background: rgba(99, 102, 241, 0.1);
          color: #4f46e5;
        }

        .trust-verified {
          background: rgba(34, 197, 94, 0.1);
          color: #16a34a;
        }

        .modal-trust-info {
          display: flex;
          flex-direction: column;
        }

        .modal-trust-title {
          font-size: 0.78rem;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.2;
        }

        [data-theme="dark"] .modal-trust-title {
          color: #f8fafc;
        }

        .modal-trust-sub {
          font-size: 0.7rem;
          color: #64748b;
          margin-top: 2px;
        }

        [data-theme="dark"] .modal-trust-sub {
          color: #94a3b8;
        }

        /* Right Column */
        .modal-right-col {
          padding: 34px 36px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .modal-badges-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .modal-category-badge {
          background: rgba(224, 231, 255, 0.85);
          color: #4338ca;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 9999px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        [data-theme="dark"] .modal-category-badge {
          background: rgba(99, 102, 241, 0.2);
          color: #c7d2fe;
        }

        .modal-denier-badge {
          background: #f1f5f9;
          color: #475569;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 9999px;
        }

        [data-theme="dark"] .modal-denier-badge {
          background: #1e293b;
          color: #cbd5e1;
        }

        .modal-product-title {
          font-family: var(--font-serif);
          font-size: 2.1rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
          margin: 0;
        }

        [data-theme="dark"] .modal-product-title {
          color: #f8fafc;
        }

        .modal-rating-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .modal-stars-wrap {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .modal-stars {
          color: #f59e0b;
          font-size: 0.85rem;
          letter-spacing: 1px;
        }

        .modal-rating-num {
          font-size: 0.82rem;
          font-weight: 700;
          color: #1e293b;
        }

        [data-theme="dark"] .modal-rating-num {
          color: #f8fafc;
        }

        .modal-rating-dot {
          color: #cbd5e1;
          font-size: 0.8rem;
        }

        .modal-b2b-badge {
          font-size: 0.8rem;
          color: #64748b;
        }

        [data-theme="dark"] .modal-b2b-badge {
          color: #94a3b8;
        }

        .modal-description-text {
          font-size: 0.88rem;
          line-height: 1.6;
          color: #475569;
          margin: 0;
        }

        [data-theme="dark"] .modal-description-text {
          color: #94a3b8;
        }

        .modal-section-subtitle {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #4f46e5;
          text-transform: uppercase;
          margin: 0 0 10px 0;
        }

        [data-theme="dark"] .modal-section-subtitle {
          color: #818cf8;
        }

        /* Specs Grid */
        .modal-specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          background: #f8fafc;
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 14px;
          padding: 16px 18px;
        }

        [data-theme="dark"] .modal-specs-grid {
          background: rgba(30, 41, 59, 0.4);
          border-color: rgba(255, 255, 255, 0.06);
        }

        .modal-spec-cell {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .modal-spec-cell-label {
          font-size: 0.72rem;
          color: #64748b;
        }

        [data-theme="dark"] .modal-spec-cell-label {
          color: #94a3b8;
        }

        .modal-spec-cell-val {
          font-size: 0.86rem;
          font-weight: 700;
          color: #1e293b;
        }

        [data-theme="dark"] .modal-spec-cell-val {
          color: #f8fafc;
        }

        /* Applications Grid */
        .modal-apps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .modal-app-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .modal-app-icon-pill {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.1);
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        [data-theme="dark"] .modal-app-icon-pill {
          background: rgba(99, 102, 241, 0.2);
          color: #818cf8;
        }

        .modal-app-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: #334155;
          line-height: 1.25;
        }

        [data-theme="dark"] .modal-app-label {
          color: #cbd5e1;
        }

        /* Actions Row */
        .modal-actions-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 6px;
        }

        .modal-whatsapp-enquire-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 22px;
          background: #25D366;
          color: #ffffff;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
          transition: all 0.25s ease;
        }

        .modal-whatsapp-enquire-btn:hover {
          background: #20ba59;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.45);
        }

        .modal-wa-icon {
          width: 20px;
          height: 20px;
        }

        .modal-enquire-arrow {
          transition: transform 0.2s ease;
        }

        .modal-whatsapp-enquire-btn:hover .modal-enquire-arrow {
          transform: translateX(3px);
        }

        .modal-favorite-btn {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #f8fafc;
          border: 1.5px solid rgba(226, 232, 240, 0.8);
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        [data-theme="dark"] .modal-favorite-btn {
          background: #1e293b;
          border-color: rgba(255, 255, 255, 0.1);
          color: #94a3b8;
        }

        .modal-favorite-btn:hover {
          background: #fee2e2;
          color: #ef4444;
          border-color: #fca5a5;
          transform: scale(1.06);
        }

        .modal-favorite-btn.is-favorited {
          background: #fee2e2;
          border-color: #ef4444;
          color: #ef4444;
        }

        /* Modal Responsive */
        @media (max-width: 900px) {
          .product-modal-card {
            grid-template-columns: 1fr;
          }
          .modal-left-col {
            border-right: none;
            border-bottom: 1px solid rgba(226, 232, 240, 0.8);
            padding: 24px;
          }
          .modal-right-col {
            padding: 24px;
          }
        }
      `}</style>
    </AnimatePresence>
  );
};

export default ProductDetailModal;
