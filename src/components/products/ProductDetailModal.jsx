import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Heart,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Maximize2,
  Truck,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import YarnVisual from '../common/YarnVisual';
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

  const imagesList = product.images && product.images.length > 0
    ? product.images
    : [
        `/images/products/${product.id}/main.jpg`,
        `/images/products/${product.id}/angle.jpg`,
        `/images/products/${product.id}/cone.jpg`,
        `/images/products/${product.id}/texture.jpg`,
        `/images/products/${product.id}/package.jpg`
      ];

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? imagesList.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1));
  };

  const whatsappUrl = generateWhatsAppLink(product, '919157135001');

  return (
    <AnimatePresence>
      <div
        className="product-modal-backdrop"
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(10, 12, 16, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          overflowY: 'auto'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="product-modal-content"
          style={{
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
            width: '100%',
            maxWidth: '1040px',
            maxHeight: '92vh',
            overflowY: 'auto',
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: '0'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close product view"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              zIndex: 10,
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              transition: 'all 0.2s ease'
            }}
            className="modal-close-btn"
          >
            <X size={20} />
          </button>

          {/* Left Column: Product Visuals Gallery (Matching Reference Image) */}
          <div
            style={{
              padding: '32px',
              backgroundColor: 'var(--bg-secondary)',
              borderRight: '1px solid var(--border-light)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px'
            }}
            className="product-modal-left"
          >
            {/* Main Image Display Box */}
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-light)',
                aspectRatio: '1 / 1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <YarnVisual
                src={imagesList[activeImageIndex]}
                alt={`${product.name} - View ${activeImageIndex + 1}`}
                product={product}
                viewIndex={activeImageIndex}
                style={{ height: '100%', minHeight: 'unset', border: 'none', borderRadius: '0' }}
              />

              {/* Zoom Preview Toggle Icon */}
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                title="Toggle Expanded View"
                aria-label="Toggle preview size"
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  zIndex: 4,
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'transform 0.2s ease'
                }}
                className="image-zoom-btn"
              >
                <Maximize2 size={16} />
              </button>

              {/* Prev / Next Arrows */}
              <button
                onClick={handlePrevImage}
                aria-label="Previous image"
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 4,
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
                  cursor: 'pointer',
                  border: 'none'
                }}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={handleNextImage}
                aria-label="Next image"
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 4,
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
                  cursor: 'pointer',
                  border: 'none'
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Thumbnail Gallery Strip (4-5 images) */}
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  marginBottom: '10px',
                  fontWeight: '600',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>Product Image Angles</span>
                <span>{activeImageIndex + 1} of {imagesList.length}</span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: '8px',
                  alignItems: 'center'
                }}
              >
                {imagesList.map((img, idx) => {
                  const isActive = idx === activeImageIndex;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      style={{
                        position: 'relative',
                        aspectRatio: '1 / 1',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: isActive ? '2px solid var(--color-accent)' : '1px solid var(--border-light)',
                        backgroundColor: 'var(--bg-primary)',
                        padding: '2px',
                        boxShadow: isActive ? '0 0 0 2px rgba(99, 102, 241, 0.25)' : 'none',
                        transition: 'all 0.2s ease',
                        opacity: isActive ? 1 : 0.7
                      }}
                      className="thumbnail-item"
                    >
                      <YarnVisual
                        src={img}
                        alt={`${product.name} thumb ${idx + 1}`}
                        product={product}
                        viewIndex={idx}
                        showBadge={false}
                        style={{ height: '100%', minHeight: 'unset', border: 'none', borderRadius: '4px' }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Packaging & Dispatch Guarantees */}
            <div
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                padding: '14px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <Truck size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: '600' }}>Surat Hub Dispatch</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>2-4 working days delivery</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <ShieldCheck size={18} style={{ color: '#25D366', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: '600' }}>Quality Verified</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Lab tested batch strength</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Details, Uses, WhatsApp Inquiry, Favorite */}
          <div
            style={{
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflowY: 'auto'
            }}
            className="product-modal-right"
          >
            <div>
              {/* Category & Badge Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span
                  style={{
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    color: 'var(--color-accent)',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    padding: '3px 10px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}
                >
                  {product.category}
                </span>

                <span
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-light)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}
                >
                  {product.denier || product.specs?.count}
                </span>
              </div>

              {/* Product Title */}
              <h2
                className="font-serif"
                style={{
                  fontSize: '2.1rem',
                  fontWeight: '500',
                  lineHeight: '1.2',
                  marginBottom: '14px',
                  color: 'var(--text-primary)'
                }}
              >
                {product.name}
              </h2>

              {/* Quality & Industrial Metric Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--border-light)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b', fontSize: '0.85rem', fontWeight: '600' }}>
                  <span>★★★★★</span>
                  <span style={{ color: 'var(--text-primary)', marginLeft: '4px' }}>4.9</span>
                </div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>•</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Certified B2B Industrial Standard
                </span>
              </div>

              {/* Overview Description */}
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}
              >
                {product.longDesc || product.shortDesc}
              </p>

              {/* Technical Specifications Grid */}
              <div style={{ marginBottom: '24px' }}>
                <h4
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-muted)',
                    marginBottom: '10px',
                    fontWeight: '700'
                  }}
                >
                  Technical Specifications
                </h4>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '10px',
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Denier / Count</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {product.denier || product.specs?.count || "Standard Count"}
                    </span>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Yarn Type</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {product.type || "Polyester"}
                    </span>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Lustre / Finish</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {product.lustre || "Semi-Dull"}
                    </span>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Standard Package</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {product.packageType || product.specs?.package || "Paper Cone"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Typical Applications Checklist */}
              <div style={{ marginBottom: '30px' }}>
                <h4
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-accent)',
                    marginBottom: '12px',
                    fontWeight: '700'
                  }}
                >
                  Typical Industrial Applications & Uses
                </h4>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '8px'
                  }}
                  className="modal-apps-grid"
                >
                  {product.applications && product.applications.map((app, appIdx) => (
                    <div
                      key={appIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.82rem',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <CheckCircle2 size={15} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons: WhatsApp Inquiry CTA + Favorite Heart */}
            <div
              style={{
                paddingTop: '20px',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              {/* WhatsApp Inquiry Button (Replaces Add to Cart) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flexGrow: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '14px 24px',
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  fontWeight: '600',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.28)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer'
                }}
                className="modal-whatsapp-btn"
              >
                <MessageSquare size={20} />
                Enquire on WhatsApp
              </a>

              {/* Favorite / Like Heart Button */}
              <button
                onClick={() => onToggleFavorite(product.id)}
                aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                title={isFavorite ? 'Remove from Liked' : 'Save to Liked Products'}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '8px',
                  border: isFavorite ? '2px solid #ef4444' : '1px solid var(--border-light)',
                  backgroundColor: isFavorite ? 'rgba(239, 68, 68, 0.08)' : 'var(--bg-secondary)',
                  color: isFavorite ? '#ef4444' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
                className="modal-heart-btn"
              >
                <Heart size={22} fill={isFavorite ? '#ef4444' : 'none'} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .modal-close-btn:hover {
          background-color: var(--bg-tertiary) !important;
          transform: rotate(90deg);
        }
        .modal-whatsapp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4) !important;
          background-color: #20ba59 !important;
        }
        .modal-heart-btn:hover {
          transform: scale(1.06);
          border-color: #ef4444 !important;
          color: #ef4444 !important;
        }
        .image-zoom-btn:hover {
          transform: scale(1.1);
        }
        @media (max-width: 860px) {
          .product-modal-content {
            grid-template-columns: 1fr !important;
            max-height: 95vh !important;
          }
          .product-modal-left {
            border-right: none !important;
            border-bottom: 1px solid var(--border-light) !important;
            padding: 24px !important;
          }
          .product-modal-right {
            padding: 24px !important;
          }
        }
        @media (max-width: 520px) {
          .modal-apps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </AnimatePresence>
  );
};

export default ProductDetailModal;
