import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { productsData } from '../../data/content';
import Placeholder from '../common/Placeholder';

const ProductHighlights = () => {
  return (
    <section className="section section-alt">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                staggerChildren: 0.04
              }
            }
          }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span className="section-label">Our Offerings</span>
          <h2 className="section-title" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', rowGap: '0.1em' }}>
            {"Yarn & Thread".split(" ").map((word, i) => (
              <motion.span
                key={`ph1-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 }
                }}
                style={{ display: 'inline-block', marginRight: '0.25em' }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 }
              }}
              style={{ display: 'inline-block', color: 'var(--color-accent)', fontStyle: 'italic' }}
            >
              Solutions
            </motion.span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            We supply high-grade polyester yarn and sewing thread categories designed to satisfy the strict demands of knitting, weaving, and sewing enterprises.
          </p>
        </motion.div>

        <div className="grid-4" style={{ marginBottom: '40px' }}>
          {productsData.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0',
                overflow: 'hidden',
                height: '100%'
              }}
            >
              {/* Product Image Slot */}
              <div style={{ width: '100%', overflow: 'hidden' }}>
                <Placeholder
                  src={product.image}
                  alt={product.name}
                  ratioClass="ratio-1-1"
                  text={`${product.name} image`}
                />
              </div>

              {/* Product Info */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px', flexGrow: 1 }}>
                  {product.shortDesc}
                </p>
                <Link
                  to="/products"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: 'var(--color-accent)',
                    marginTop: 'auto',
                    transition: 'gap 0.2s ease'
                  }}
                  className="product-card-link"
                >
                  Explore Product
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link
            to="/products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '1rem',
              fontWeight: '500',
              color: 'var(--color-accent)',
              borderBottom: '1px solid var(--color-accent)',
              paddingBottom: '4px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-accent-hover)';
              e.currentTarget.style.borderColor = 'var(--color-accent-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-accent)';
              e.currentTarget.style.borderColor = 'var(--color-accent)';
            }}
          >
            View Complete Product Catalogue
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <style>{`
        .product-card-link:hover {
          color: var(--color-accent-hover) !important;
          gap: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default ProductHighlights;
