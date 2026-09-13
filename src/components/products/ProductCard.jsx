import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageSquare, ArrowUpRight, Check, Eye } from 'lucide-react';
import YarnVisual from '../common/YarnVisual';
import { generateWhatsAppLink } from '../../data/products';

const ProductCard = ({ product, onSelect, isFavorite, onToggleFavorite }) => {
  const whatsappUrl = generateWhatsAppLink(product);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className="card product-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0',
        overflow: 'hidden',
        position: 'relative',
        height: '100%',
        backgroundColor: 'var(--bg-secondary)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--border-radius)',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Top Image Box with View Details trigger */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 1',
          overflow: 'hidden',
          cursor: 'pointer',
          backgroundColor: 'var(--bg-primary)'
        }}
        onClick={() => onSelect(product)}
      >
        <YarnVisual
          src={product.images && product.images[0]}
          alt={product.name}
          product={product}
          viewIndex={0}
          style={{ height: '100%', minHeight: 'unset', border: 'none', borderRadius: '0' }}
        />

        {/* Favorite Heart Button (Top Right of Card) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product.id);
          }}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          title={isFavorite ? 'Liked' : 'Like this yarn'}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            zIndex: 5,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(4px)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: isFavorite ? '#ef4444' : '#64748b',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease, color 0.2s ease'
          }}
          className="card-heart-btn"
        >
          <Heart size={18} fill={isFavorite ? '#ef4444' : 'none'} />
        </button>

        {/* Hover Quick View Pill */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(4px)',
            color: '#ffffff',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            opacity: 0,
            transition: 'opacity 0.25s ease, transform 0.25s ease',
            pointerEvents: 'none',
            zIndex: 4
          }}
          className="card-hover-pill"
        >
          <Eye size={14} />
          View 5 Angles & Specs
        </div>
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1
        }}
      >
        {/* Category & Series Pill */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span
            style={{
              fontSize: '0.72rem',
              color: 'var(--color-accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontWeight: '700'
            }}
          >
            {product.category}
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              backgroundColor: 'var(--bg-primary)',
              padding: '2px 6px',
              borderRadius: '3px',
              border: '1px solid var(--border-light)'
            }}
          >
            {product.denier || product.specs?.count}
          </span>
        </div>

        {/* Title */}
        <h3
          onClick={() => onSelect(product)}
          style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '8px',
            cursor: 'pointer',
            transition: 'color 0.2s ease'
          }}
          className="product-card-title"
        >
          {product.name}
        </h3>

        {/* Short Industrial Description */}
        <p
          style={{
            fontSize: '0.84rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            marginBottom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {product.shortDesc}
        </p>

        {/* Highlights: Top 2 Applications */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px', marginTop: 'auto' }}>
          {product.applications?.slice(0, 2).map((app, i) => (
            <span
              key={i}
              style={{
                fontSize: '0.72rem',
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-light)',
                padding: '3px 8px',
                borderRadius: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Check size={11} style={{ color: 'var(--color-accent)' }} />
              {app}
            </span>
          ))}
        </div>

        {/* Card CTA Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px', alignItems: 'center' }}>
          {/* WhatsApp Direct Inquiry Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '10px 14px',
              backgroundColor: '#25D366',
              color: '#ffffff',
              fontWeight: '600',
              fontSize: '0.82rem',
              borderRadius: '6px',
              boxShadow: '0 2px 8px rgba(37, 211, 102, 0.2)',
              transition: 'all 0.2s ease'
            }}
            className="card-whatsapp-btn"
          >
            <MessageSquare size={15} />
            Enquire WhatsApp
          </a>

          {/* Details Modal Trigger Button */}
          <button
            onClick={() => onSelect(product)}
            title="View full specs and image gallery"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '6px',
              border: '1px solid var(--border-light)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            className="card-details-btn"
          >
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>

      <style>{`
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12) !important;
          border-color: rgba(99, 102, 241, 0.3) !important;
        }
        .product-card:hover .card-hover-pill {
          opacity: 1 !important;
          transform: translate(-50%, -4px) !important;
        }
        .product-card-title:hover {
          color: var(--color-accent) !important;
        }
        .card-heart-btn:hover {
          transform: scale(1.12);
        }
        .card-whatsapp-btn:hover {
          background-color: #20ba59 !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.35) !important;
        }
        .card-details-btn:hover {
          background-color: var(--color-accent) !important;
          color: #ffffff !important;
          border-color: var(--color-accent) !important;
        }
      `}</style>
    </motion.div>
  );
};

export default ProductCard;
