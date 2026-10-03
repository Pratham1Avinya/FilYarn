import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Layers,
  Award,
  Grid,
  ShieldCheck,
  Package,
  Scissors
} from 'lucide-react';
import ProductDetailModal from '../products/ProductDetailModal';
import { productsData } from '../../data/products';

const featuredOfferings = [
  {
    id: "110-aty",
    name: "110 Denier",
    subtitle: "Polyester Yarn (ATY)",
    badge: "★ Premium Quality",
    badgeType: "primary",
    image: "/images/products/yarn-110.jpg",
    specs: [
      { label: "110 Denier", icon: Package },
      { label: "AA Grade", icon: Award },
      { label: "Weave & Knit", icon: Grid }
    ],
    desc: "High-quality 110 denier polyester yarn engineered for strength, smoothness and consistent performance.",
    isHighlighted: true,
    fullProduct: productsData.find(p => p.id === "110-aty") || {
      id: "110-aty",
      name: "110 Aty",
      category: "Air Textured Yarn (ATY)",
      denier: "110 Denier",
      type: "Polyester Air Textured Yarn",
      lustre: "Semi-Dull",
      packageType: "Paper Cone (3.5kg - 4.5kg)",
      shortDesc: "High-bulk, cotton-like feel polyester air-textured yarn engineered for premium apparel and home textiles.",
      longDesc: "110 Aty is manufactured using high-pressure air texturing to introduce micro-loops into continuous polyester filaments. This gives the yarn an organic, cotton-touch feel with high abrasion resistance, dimensional stability, and superior cover factor.",
      applications: [
        "Weaving & Circular Knitting",
        "Suiting, Shirting & Trouser Fabrics",
        "Ladies Kurtis, Saree & Dress Materials",
        "Furnishing & Upholstery Fabrics"
      ],
      images: [
        "/images/products/yarn-110.jpg",
        "/images/products/yarn-core.jpg",
        "/images/products/yarn-140.jpg",
        "/images/products/yarn-160.jpg",
        "/images/products/sewing-thread.jpg"
      ]
    }
  },
  {
    id: "140-aty",
    name: "140 Denier",
    subtitle: "Polyester Yarn (ATY)",
    badge: "Best Seller",
    badgeType: "soft",
    image: "/images/products/yarn-140.jpg",
    specs: [
      { label: "140 Denier", icon: Package },
      { label: "AA Grade", icon: Award },
      { label: "Weave & Knit", icon: Grid }
    ],
    desc: "Durable 140 denier polyester yarn provides excellent strength and uniformity for industrial use.",
    isHighlighted: false,
    fullProduct: productsData.find(p => p.id === "110-aty-catonic") || {
      id: "140-aty",
      name: "140 Aty",
      category: "Air Textured Yarn (ATY)",
      denier: "140 Denier",
      type: "Polyester Air Textured Yarn (ATY)",
      lustre: "Semi-Dull",
      packageType: "Paper Cone (4.0kg - 5.0kg)",
      shortDesc: "Durable 140 denier polyester yarn provides excellent strength and uniformity for industrial use.",
      longDesc: "140 Aty is engineered for medium fabric constructions requiring high tensile strength, durable weave structure, and consistent yarn texture for diverse textile applications.",
      applications: [
        "Weaving & Rapier Looms",
        "Curtain & Drapery Materials",
        "Luggage & Lining Fabrics",
        "Industrial Workwear"
      ],
      images: [
        "/images/products/yarn-140.jpg",
        "/images/products/yarn-core.jpg",
        "/images/products/yarn-110.jpg",
        "/images/products/yarn-160.jpg",
        "/images/products/sewing-thread.jpg"
      ]
    }
  },
  {
    id: "160-aty",
    name: "160 Denier",
    subtitle: "Polyester Yarn (ATY)",
    badge: "High Strength",
    badgeType: "soft",
    image: "/images/products/yarn-160.jpg",
    specs: [
      { label: "160 Denier", icon: Package },
      { label: "AA Grade", icon: Award },
      { label: "Weave & Knit", icon: Grid }
    ],
    desc: "Premium 160 denier yarn with superior tensile strength and smooth texture.",
    isHighlighted: false,
    fullProduct: productsData.find(p => p.id === "160-aty") || {
      id: "160-aty",
      name: "160 Aty",
      category: "Air Textured Yarn (ATY)",
      denier: "160 Denier",
      type: "Medium-Heavy Air Textured Yarn",
      lustre: "Semi-Dull",
      packageType: "Paper Cone (4.0kg - 5.0kg)",
      shortDesc: "Robust 160 denier air textured yarn providing rich body, matte appearance, and high durability.",
      longDesc: "160 Aty is engineered for medium to heavier weight fabric constructions requiring structural substance, durable tensile properties, and natural yarn texture.",
      applications: [
        "Heavy Suitings, Trousers & Blazers",
        "Curtains, Drapery & Sofa Covers",
        "Bags, Luggage Lining & Narrow Tapes",
        "Industrial Workwear & Uniforms"
      ],
      images: [
        "/images/products/yarn-160.jpg",
        "/images/products/yarn-core.jpg",
        "/images/products/yarn-110.jpg",
        "/images/products/yarn-140.jpg",
        "/images/products/sewing-thread.jpg"
      ]
    }
  },
  {
    id: "sewing-thread",
    name: "Sewing Thread",
    subtitle: "Polyester Thread",
    badge: "Wide Range",
    badgeType: "soft",
    image: "/images/products/sewing-thread.jpg",
    specs: [
      { label: "Multi Count", icon: Package },
      { label: "High Strength", icon: ShieldCheck },
      { label: "Garment Use", icon: Scissors }
    ],
    desc: "Reliable sewing thread for high-speed production with excellent stitch formation.",
    isHighlighted: false,
    fullProduct: productsData.find(p => p.id === "spun-40-2") || {
      id: "sewing-thread",
      name: "Polyester Sewing Thread",
      category: "Sewing Thread & Spun Series",
      denier: "Multi Count (30s, 40s)",
      type: "100% Spun Polyester Sewing Thread",
      lustre: "Bright / Lubricated",
      packageType: "King Spool & Cone",
      shortDesc: "Reliable high-speed sewing thread engineered for seam durability and knotless running.",
      longDesc: "Precision manufactured sewing thread with optimal lubrication for high-speed garment stitching, automatic embroidery machines, and heavy-duty seam integrity.",
      applications: [
        "Garment & Apparel Stitching",
        "High-Speed Automatic Sewing",
        "Home Textiles & Quilting",
        "Heavy Seaming & Leather Goods"
      ],
      images: [
        "/images/products/sewing-thread.jpg",
        "/images/products/yarn-core.jpg",
        "/images/products/yarn-110.jpg",
        "/images/products/yarn-140.jpg",
        "/images/products/yarn-160.jpg"
      ]
    }
  }
];

const ProductHighlights = () => {
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [activeCardId, setActiveCardId] = useState("110-aty");

  const handleOpenModal = (item) => {
    const full = item.fullProduct || productsData.find(p => p.id === item.id) || item;
    setActiveModalProduct(full);
  };

  return (
    <section className="section product-offerings-section" id="products-preview">
      {/* Background Decorative Yarn Curves SVG */}
      <svg
        className="offerings-bg-curves"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-50,220 C250,50 480,380 820,160 C1120,-30 1320,290 1520,120"
          stroke="rgba(99, 102, 241, 0.08)"
          strokeWidth="1.5"
        />
        <path
          d="M-80,280 C220,110 450,440 790,220 C1090,30 1290,350 1490,180"
          stroke="rgba(99, 102, 241, 0.05)"
          strokeWidth="1.2"
        />
        <path
          d="M-30,480 C320,520 620,400 950,560 C1250,700 1400,450 1550,520"
          stroke="rgba(99, 102, 241, 0.07)"
          strokeWidth="1.5"
        />
      </svg>

      {/* Decorative Watermark Yarn Ball Icon at bottom right */}
      <div className="offerings-watermark-icon" aria-hidden="true">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="54" stroke="rgba(99, 102, 241, 0.12)" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M25 60 C35 30 85 30 95 60 C85 90 35 90 25 60 Z" stroke="rgba(99, 102, 241, 0.14)" strokeWidth="2" />
          <path d="M60 25 C30 35 30 85 60 95 C90 85 90 35 60 25 Z" stroke="rgba(99, 102, 241, 0.14)" strokeWidth="2" />
          <circle cx="60" cy="60" r="18" stroke="rgba(99, 102, 241, 0.18)" strokeWidth="2" />
        </svg>
      </div>

      <div className="container offerings-container">
        {/* Section Header */}
        <motion.div
          className="offerings-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Flanked Eyebrow */}
          <div className="offerings-eyebrow-wrap">
            <span className="offerings-eyebrow-line" />
            <span className="offerings-eyebrow-text">OUR OFFERINGS</span>
            <span className="offerings-eyebrow-line" />
          </div>

          {/* Main Heading */}
          <h2 className="offerings-title">
            <span className="offerings-title-dark">Yarn &amp; Thread </span>
            <span className="offerings-title-italic">Solutions</span>
          </h2>

          {/* Subtitle */}
          <p className="offerings-desc">
            We supply high-grade polyester yarn and sewing thread categories designed to satisfy the strict demands of knitting, weaving, and sewing enterprises.
          </p>
        </motion.div>

        {/* 4 Cards Grid Layout */}
        <div className="offerings-cards-grid">
          {featuredOfferings.map((item, idx) => {
            const isSelected = activeCardId === item.id;
            return (
              <motion.div
                key={item.id}
                className={`offering-card ${isSelected ? 'is-active-card' : ''}`}
                onClick={() => {
                  setActiveCardId(item.id);
                  handleOpenModal(item);
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
              >
                {/* Top Image Box with Badge */}
                <div className="offering-image-wrap">
                  {/* Badge */}
                  <span className={`offering-badge ${item.badgeType === 'primary' ? 'offering-badge-primary' : 'offering-badge-soft'}`}>
                    {item.badge}
                  </span>

                  {/* Product Cone Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="offering-image"
                    loading="lazy"
                  />
                </div>

                {/* Card Body Content */}
                <div className="offering-body">
                  {/* Product Header Row: Icon + Title & Category */}
                  <div className="offering-title-row">
                    <div className="offering-icon-circle">
                      <Layers size={18} />
                    </div>
                    <div className="offering-title-info">
                      <h3 className="offering-name">{item.name}</h3>
                      <span className="offering-subtitle">{item.subtitle}</span>
                    </div>
                  </div>

                  {/* Spec Badges Row (3 Items with Icons in Clean Row) */}
                  <div className="offering-specs-grid">
                    {item.specs.map((spec, sIdx) => {
                      const SpecIcon = spec.icon;
                      return (
                        <div key={sIdx} className="offering-spec-item" title={spec.label}>
                          <SpecIcon size={13} className="offering-spec-icon" />
                          <span className="offering-spec-label">{spec.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Short Description */}
                  <p className="offering-desc-text">
                    {item.desc}
                  </p>

                  {/* View Details Link Trigger */}
                  <div className="offering-footer">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal(item);
                      }}
                      className="offering-link-btn"
                    >
                      <span>View Details</span>
                      <ArrowRight size={14} className="offering-link-arrow" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View More / Complete Catalogue Button */}
        <motion.div
          className="offerings-cta-wrap"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/products" className="offerings-view-more-btn">
            <span>Explore Complete 20-Product Yarn Catalogue</span>
            <ArrowRight size={17} className="offerings-view-more-arrow" />
          </Link>
        </motion.div>
      </div>

      {/* Product Detail Modal Popup */}
      <ProductDetailModal
        product={activeModalProduct}
        isOpen={Boolean(activeModalProduct)}
        onClose={() => setActiveModalProduct(null)}
      />

      {/* Scoped CSS Styles matching the screenshot accurately */}
      <style>{`
        .product-offerings-section {
          padding: 100px 0 95px 0;
          position: relative;
          background: #ffffff;
          overflow: hidden;
        }

        [data-theme="dark"] .product-offerings-section {
          background: #0b0f19;
        }

        /* Decorative SVGs */
        .offerings-bg-curves {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .offerings-watermark-icon {
          position: absolute;
          right: -30px;
          bottom: -30px;
          width: 220px;
          height: 220px;
          opacity: 0.7;
          pointer-events: none;
          z-index: 0;
        }

        .offerings-container {
          position: relative;
          z-index: 1;
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 30px;
        }

        /* Header Styles */
        .offerings-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 50px auto;
        }

        .offerings-eyebrow-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 14px;
        }

        .offerings-eyebrow-line {
          width: 42px;
          height: 1px;
          background: #6366f1;
          opacity: 0.5;
        }

        .offerings-eyebrow-text {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #4f46e5;
          text-transform: uppercase;
        }

        [data-theme="dark"] .offerings-eyebrow-text {
          color: #818cf8;
        }

        .offerings-title {
          font-size: clamp(2.3rem, 3.8vw, 3.2rem);
          line-height: 1.15;
          margin: 0 0 16px 0;
          font-weight: 700;
        }

        .offerings-title-dark {
          font-family: var(--font-serif);
          color: #0f172a;
        }

        [data-theme="dark"] .offerings-title-dark {
          color: #f8fafc;
        }

        .offerings-title-italic {
          font-family: var(--font-serif);
          font-style: italic;
          color: #4f46e5;
          font-weight: 400;
        }

        [data-theme="dark"] .offerings-title-italic {
          color: #818cf8;
        }

        .offerings-desc {
          font-size: 1.02rem;
          line-height: 1.6;
          color: #64748b;
          margin: 0 auto;
        }

        [data-theme="dark"] .offerings-desc {
          color: #94a3b8;
        }

        /* Grid Container */
        .offerings-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          width: 100%;
          margin-bottom: 48px;
        }

        /* Card Styles */
        .offering-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1.5px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 10px 28px -6px rgba(15, 23, 42, 0.05);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          height: 100%;
        }

        [data-theme="dark"] .offering-card {
          background: #111827;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 12px 30px -8px rgba(0, 0, 0, 0.5);
        }

        .offering-card:hover {
          border-color: rgba(99, 102, 241, 0.45);
          box-shadow: 0 18px 40px -10px rgba(99, 102, 241, 0.16);
        }

        /* Highlighted/Active Card (as seen on 110 Denier in screenshot) */
        .offering-card.is-active-card {
          border-color: #4f46e5;
          box-shadow: 0 18px 42px -10px rgba(99, 102, 241, 0.22);
        }

        [data-theme="dark"] .offering-card.is-active-card {
          border-color: #818cf8;
          box-shadow: 0 18px 44px -8px rgba(99, 102, 241, 0.35);
        }

        /* Image Box */
        .offering-image-wrap {
          position: relative;
          width: 100%;
          height: 230px;
          background: linear-gradient(180deg, #f8faff 0%, #edf2ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 16px;
        }

        [data-theme="dark"] .offering-image-wrap {
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
        }

        .offering-image {
          max-width: 82%;
          max-height: 88%;
          object-fit: contain;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.06));
        }

        .offering-card:hover .offering-image {
          transform: scale(1.05);
        }

        /* Badges */
        .offering-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 9999px;
          letter-spacing: 0.02em;
          z-index: 2;
        }

        .offering-badge-primary {
          background: #4f46e5;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.35);
        }

        .offering-badge-soft {
          background: rgba(224, 231, 255, 0.9);
          color: #4338ca;
          border: 1px solid rgba(199, 210, 254, 0.8);
        }

        [data-theme="dark"] .offering-badge-soft {
          background: rgba(99, 102, 241, 0.18);
          color: #c7d2fe;
          border-color: rgba(99, 102, 241, 0.3);
        }

        /* Body Section */
        .offering-body {
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        /* Title Row */
        .offering-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .offering-icon-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.1);
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        [data-theme="dark"] .offering-icon-circle {
          background: rgba(99, 102, 241, 0.2);
          color: #818cf8;
        }

        .offering-title-info {
          display: flex;
          flex-direction: column;
        }

        .offering-name {
          font-size: 1.12rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
          line-height: 1.25;
        }

        [data-theme="dark"] .offering-name {
          color: #f8fafc;
        }

        .offering-subtitle {
          font-size: 0.78rem;
          color: #64748b;
          margin-top: 2px;
        }

        [data-theme="dark"] .offering-subtitle {
          color: #94a3b8;
        }

        /* Spec Pills Row (3 Items in clean row) */
        .offering-specs-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4px;
          margin-bottom: 16px;
          padding: 8px 2px;
          border-top: 1px solid rgba(226, 232, 240, 0.75);
          border-bottom: 1px solid rgba(226, 232, 240, 0.75);
        }

        [data-theme="dark"] .offering-specs-grid {
          border-color: rgba(255, 255, 255, 0.08);
        }

        .offering-spec-item {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .offering-spec-icon {
          color: #4f46e5;
          opacity: 0.9;
          flex-shrink: 0;
        }

        [data-theme="dark"] .offering-spec-icon {
          color: #818cf8;
        }

        .offering-spec-label {
          font-size: 0.68rem;
          font-weight: 600;
          color: #475569;
          line-height: 1.2;
          white-space: nowrap;
        }

        [data-theme="dark"] .offering-spec-label {
          color: #cbd5e1;
        }

        /* Description */
        .offering-desc-text {
          font-size: 0.85rem;
          line-height: 1.55;
          color: #64748b;
          margin: 0 0 18px 0;
          flex-grow: 1;
        }

        [data-theme="dark"] .offering-desc-text {
          color: #94a3b8;
        }

        /* Footer Link Button */
        .offering-footer {
          margin-top: auto;
          padding-top: 10px;
        }

        .offering-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.88rem;
          font-weight: 600;
          color: #4f46e5;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: gap 0.2s ease, color 0.2s ease;
        }

        [data-theme="dark"] .offering-link-btn {
          color: #818cf8;
        }

        .offering-link-arrow {
          transition: transform 0.25s ease;
        }

        .offering-link-btn:hover {
          color: #3730a3;
          gap: 10px;
        }

        [data-theme="dark"] .offering-link-btn:hover {
          color: #a5b4fc;
        }

        /* CTA Bottom Wrap */
        .offerings-cta-wrap {
          text-align: center;
        }

        .offerings-view-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 34px;
          border-radius: 9999px;
          background: #4f46e5;
          color: #ffffff;
          font-weight: 600;
          font-size: 0.98rem;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(79, 70, 229, 0.3);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .offerings-view-more-btn:hover {
          background: #4338ca;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(79, 70, 229, 0.45);
        }

        .offerings-view-more-arrow {
          transition: transform 0.25s ease;
        }

        .offerings-view-more-btn:hover .offerings-view-more-arrow {
          transform: translateX(5px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .offering-specs-grid {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }

        @media (max-width: 1080px) {
          .offerings-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .offerings-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .product-offerings-section {
            padding: 70px 0 60px 0;
          }
          .offerings-view-more-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductHighlights;
