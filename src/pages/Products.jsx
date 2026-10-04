import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Heart,
  Grid,
  List,
  Layers,
  Sparkles,
  Filter,
  X,
  ShieldCheck,
  Truck,
  Users,
  Award,
  Package,
  Scissors,
  ArrowRight,
  ArrowUpRight,
  RotateCcw,
  Check,
  ChevronDown
} from 'lucide-react';
import { productsData } from '../data/products';
import ProductDetailModal from '../components/products/ProductDetailModal';
import useFavorites from '../hooks/useFavorites';

// Badge color & text helper
const getProductBadge = (product, index) => {
  if (product.id === '110-aty') return { text: '★ Premium Quality', type: 'primary' };
  if (product.id === '140-aty' || product.id?.includes('140')) return { text: 'Best Seller', type: 'soft' };
  if (product.id === '160-aty' || product.id?.includes('160')) return { text: 'High Strength', type: 'soft' };
  if (product.id === 'sewing-thread' || product.id?.includes('spun')) return { text: 'Wide Range', type: 'soft' };
  if (index === 4) return { text: 'Popular', type: 'soft' };
  if (index === 5) return { text: 'Best Value', type: 'soft' };
  if (index === 6) return { text: 'New Arrival', type: 'soft' };
  if (index === 7) return { text: 'Custom Option', type: 'soft' };
  return { text: product.category?.split(' ')[0] || 'Quality Assured', type: 'soft' };
};

// Image resolver
const getProductImage = (product) => {
  if (product.id?.includes('140')) return '/images/products/yarn-140.jpg';
  if (product.id?.includes('160')) return '/images/products/yarn-160.jpg';
  if (product.id?.includes('sewing') || product.id?.includes('spun')) return '/images/products/sewing-thread.jpg';
  return '/images/products/yarn-110.jpg';
};

const sortOptionsList = [
  { id: 'popular', label: 'Popular' },
  { id: 'denier-asc', label: 'Denier: Low to High' },
  { id: 'denier-desc', label: 'Denier: High to Low' },
  { id: 'name-asc', label: 'Name: A to Z' },
  { id: 'cationic', label: 'Cationic Dyeable First' },
  { id: 'high-tenacity', label: 'High Tenacity First' }
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDeniers, setSelectedDeniers] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortBy, setSortBy] = useState('popular');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortSearch, setSortSearch] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  // Close sort combobox on outside click
  useEffect(() => {
    const handleDocClick = (e) => {
      if (!e.target.closest('.products-sort-combobox-wrap')) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  // Auto-open product modal if ?product=ID is present in URL
  useEffect(() => {
    const prodId = searchParams.get('product');
    if (prodId) {
      const found = productsData.find((p) => p.id === prodId);
      if (found) {
        setActiveModalProduct(found);
      }
    }
  }, [searchParams]);

  // SEO
  useEffect(() => {
    document.title = "Premium Quality Yarn & Thread Solutions | Filyarn Industries Surat";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "We offer a wide range of high-quality polyester yarn and sewing thread for textile and garment businesses, ensuring consistency, durability, and reliable supply."
      );
    }
  }, []);

  // Filter Categories Options with Counts
  const categoryCounts = useMemo(() => {
    const map = {};
    productsData.forEach((p) => {
      const cat = p.category || 'Other';
      map[cat] = (map[cat] || 0) + 1;
    });
    return map;
  }, []);

  // Denier list with Counts
  const denierOptions = [
    { label: "110 Denier", value: "110" },
    { label: "140 Denier", value: "140" },
    { label: "160 Denier", value: "160" },
    { label: "200 Denier", value: "200" },
    { label: "300+ Denier", value: "300" }
  ];

  // Types list
  const typeOptions = [
    { label: "Cationic (CDP)", value: "cationic" },
    { label: "Semi-Dull", value: "semi-dull" },
    { label: "Bright / Filament", value: "bright" }
  ];

  const handleToggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleToggleDenier = (den) => {
    setSelectedDeniers((prev) =>
      prev.includes(den) ? prev.filter((d) => d !== den) : [...prev, den]
    );
  };

  const handleToggleType = (typeVal) => {
    setSelectedTypes((prev) =>
      prev.includes(typeVal) ? prev.filter((t) => t !== typeVal) : [...prev, typeVal]
    );
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedDeniers([]);
    setSelectedTypes([]);
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = productsData.filter((product) => {
      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDenier = product.denier?.toLowerCase().includes(q);
        const matchesCategory = product.category?.toLowerCase().includes(q);
        const matchesDesc = product.shortDesc?.toLowerCase().includes(q);
        if (!matchesName && !matchesDenier && !matchesCategory && !matchesDesc) {
          return false;
        }
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }

      // Denier filter
      if (selectedDeniers.length > 0) {
        const hasMatch = selectedDeniers.some((d) => product.denier?.includes(d) || product.name?.includes(d));
        if (!hasMatch) return false;
      }

      // Type filter
      if (selectedTypes.length > 0) {
        const fullStr = `${product.name} ${product.type} ${product.lustre}`.toLowerCase();
        const hasTypeMatch = selectedTypes.some((t) => fullStr.includes(t));
        if (!hasTypeMatch) return false;
      }

      return true;
    });

    // Sorting
    if (sortBy === 'denier-asc') {
      result = [...result].sort((a, b) => (parseInt(a.denier) || 0) - (parseInt(b.denier) || 0));
    } else if (sortBy === 'denier-desc') {
      result = [...result].sort((a, b) => (parseInt(b.denier) || 0) - (parseInt(a.denier) || 0));
    } else if (sortBy === 'name-asc') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'cationic') {
      result = [...result].sort((a, b) => {
        const aCat = a.name.toLowerCase().includes('catonic') || a.name.toLowerCase().includes('cationic');
        const bCat = b.name.toLowerCase().includes('catonic') || b.name.toLowerCase().includes('cationic');
        return bCat - aCat;
      });
    } else if (sortBy === 'high-tenacity') {
      result = [...result].sort((a, b) => (parseInt(b.specs?.tenacity) || 0) - (parseInt(a.specs?.tenacity) || 0));
    }

    return result;
  }, [searchQuery, selectedCategories, selectedDeniers, selectedTypes, sortBy]);

  const currentSortLabel = sortOptionsList.find((o) => o.id === sortBy)?.label || 'Popular';
  const filteredSortOptions = sortOptionsList.filter((o) =>
    o.label.toLowerCase().includes(sortSearch.toLowerCase())
  );

  return (
    <div className="products-page-wrapper">
      {/* =========================================
          HERO / HEADER SECTION (Matching 2nd Image & Header Layout)
         ========================================= */}
      <section className="products-header-section">
        {/* Subtle background decorative wave */}
        <svg
          className="prod-head-bg-curves"
          viewBox="0 0 1440 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M-50,180 C320,60 550,280 880,120 C1180,0 1380,220 1550,100"
            stroke="rgba(99, 102, 241, 0.08)"
            strokeWidth="1.5"
          />
        </svg>

        <div className="container products-header-container">
          <div className="products-header-grid">
            {/* Left Column: Heading & Story */}
            <motion.div
              className="prod-head-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="prod-head-eyebrow-wrap">
                <span className="prod-head-eyebrow-line" />
                <span className="prod-head-eyebrow-text">OUR PRODUCTS</span>
                <span className="prod-head-eyebrow-line" />
              </div>

              <h1 className="prod-head-title">
                <span className="prod-head-title-dark">Premium Quality Yarn &amp;</span>
                <span className="prod-head-title-italic">Thread Solutions</span>
              </h1>

              <p className="prod-head-desc">
                We offer a wide range of high-quality polyester yarn and sewing thread for textile and garment businesses, ensuring consistency, durability, and reliable supply.
              </p>
            </motion.div>

            {/* Center Column: High-Res Yarn Bobbins with Glowing Aura Ring (Exact Image 2) */}
            <motion.div
              className="prod-head-center"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="prod-head-image-wrap">
                {/* Indigo Aura Glow Arc */}
                <div className="prod-head-aura-ring" aria-hidden="true" />
                <img
                  src="/images/products/Product-header.png"
                  alt="Premium Polyester Yarn Cones Spools"
                  className="prod-head-image"
                />
              </div>
            </motion.div>

            {/* Right Column: 3 Vertical Trust Badges */}
            <motion.div
              className="prod-head-right"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Trust 1 */}
              <div className="prod-trust-pill">
                <div className="prod-trust-icon-box">
                  <ShieldCheck size={20} />
                </div>
                <div className="prod-trust-text">
                  <h4 className="prod-trust-title">Consistent Quality</h4>
                  <p className="prod-trust-sub">Reliable product standards</p>
                </div>
              </div>

              {/* Trust 2 */}
              <div className="prod-trust-pill">
                <div className="prod-trust-icon-box">
                  <Truck size={20} />
                </div>
                <div className="prod-trust-text">
                  <h4 className="prod-trust-title">Bulk Supply</h4>
                  <p className="prod-trust-sub">Dependable delivery</p>
                </div>
              </div>

              {/* Trust 3 */}
              <div className="prod-trust-pill">
                <div className="prod-trust-icon-box">
                  <Users size={20} />
                </div>
                <div className="prod-trust-text">
                  <h4 className="prod-trust-title">Long-Term Partnership</h4>
                  <p className="prod-trust-sub">Built for your growth</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          MAIN EXPLORER: SIDEBAR FILTERS & PRODUCT GRID
         ========================================= */}
      <section className="products-main-section">
        <div className="container products-main-container">
          <div className="products-layout-grid">
            {/* =========================================
                LEFT SIDEBAR: FILTERS CARD
               ========================================= */}
            <aside className="products-sidebar">
              <div className="sidebar-filter-card">
                <div className="sidebar-header">
                  <h3 className="sidebar-title">Filter Products</h3>
                </div>

                {/* Search Input Box */}
                <div className="sidebar-search-wrap">
                  <Search size={16} className="sidebar-search-icon" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search yarn, thread..."
                    className="sidebar-search-input"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="sidebar-search-clear"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                {/* Group 1: Product Category */}
                <div className="sidebar-group">
                  <h4 className="sidebar-group-title">Product Category</h4>
                  <div className="sidebar-options-list">
                    {Object.entries(categoryCounts).map(([catName, count]) => {
                      const isChecked = selectedCategories.includes(catName);
                      return (
                        <label key={catName} className="sidebar-checkbox-label">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToggleCategory(catName)}
                            className="sidebar-checkbox"
                          />
                          <span className="sidebar-option-name">{catName}</span>
                          <span className="sidebar-option-count">{count}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Group 2: Denier / Count */}
                <div className="sidebar-group">
                  <h4 className="sidebar-group-title">Denier / Count</h4>
                  <div className="sidebar-options-list">
                    {denierOptions.map((den) => {
                      const isChecked = selectedDeniers.includes(den.value);
                      return (
                        <label key={den.value} className="sidebar-checkbox-label">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToggleDenier(den.value)}
                            className="sidebar-checkbox"
                          />
                          <span className="sidebar-option-name">{den.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Group 3: Yarn Type / Lustre */}
                <div className="sidebar-group">
                  <h4 className="sidebar-group-title">Yarn Type</h4>
                  <div className="sidebar-options-list">
                    {typeOptions.map((t) => {
                      const isChecked = selectedTypes.includes(t.value);
                      return (
                        <label key={t.value} className="sidebar-checkbox-label">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToggleType(t.value)}
                            className="sidebar-checkbox"
                          />
                          <span className="sidebar-option-name">{t.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Clear All Button */}
                <div className="sidebar-footer">
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="sidebar-clear-btn"
                  >
                    <RotateCcw size={14} />
                    <span>Clear All</span>
                  </button>
                </div>
              </div>
            </aside>

            {/* =========================================
                RIGHT COLUMN: PRODUCTS HEADER & 4-COL GRID
               ========================================= */}
            <main className="products-content-col">
              {/* Top Controls Bar: Showing count & Searchable Sort Combobox */}
              <div className="products-top-bar">
                <span className="products-count-label">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </span>

                <div className="products-top-controls">
                  {/* Searchable Sort Combobox */}
                  <div className="products-sort-combobox-wrap">
                    <span className="products-sort-text">Sort by:</span>
                    <button
                      type="button"
                      onClick={() => setIsSortOpen(!isSortOpen)}
                      className="products-sort-trigger-btn"
                      aria-expanded={isSortOpen}
                    >
                      <span>{currentSortLabel}</span>
                      <ChevronDown size={14} className={`sort-chevron ${isSortOpen ? 'is-open' : ''}`} />
                    </button>

                    {/* Combobox Dropdown Panel */}
                    <AnimatePresence>
                      {isSortOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.96 }}
                          transition={{ duration: 0.18 }}
                          className="sort-combobox-dropdown"
                        >
                          <div className="sort-combobox-search-box">
                            <Search size={13} className="sort-combobox-search-icon" />
                            <input
                              type="text"
                              value={sortSearch}
                              onChange={(e) => setSortSearch(e.target.value)}
                              placeholder="Search sorting..."
                              className="sort-combobox-search-input"
                              autoFocus
                            />
                            {sortSearch && (
                              <button
                                type="button"
                                onClick={() => setSortSearch('')}
                                className="sort-combobox-search-clear"
                              >
                                <X size={12} />
                              </button>
                            )}
                          </div>

                          <div className="sort-combobox-options-list">
                            {filteredSortOptions.map((opt) => {
                              const isSelected = sortBy === opt.id;
                              return (
                                <button
                                  key={opt.id}
                                  type="button"
                                  onClick={() => {
                                    setSortBy(opt.id);
                                    setIsSortOpen(false);
                                    setSortSearch('');
                                  }}
                                  className={`sort-combobox-option-btn ${isSelected ? 'is-selected-option' : ''}`}
                                >
                                  <span>{opt.label}</span>
                                  {isSelected && <Check size={14} className="sort-option-check" />}
                                </button>
                              );
                            })}
                            {filteredSortOptions.length === 0 && (
                              <div className="sort-no-options">No matching option</div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* No Results Fallback */}
              {filteredProducts.length === 0 && (
                <div className="products-no-results">
                  <p className="no-results-text">No yarn products matched your filter criteria.</p>
                  <button type="button" onClick={handleClearFilters} className="no-results-clear-btn">
                    Reset All Filters
                  </button>
                </div>
              )}

              {/* 4-Columns Cards Grid matching the screenshot */}
              <div className="products-cards-grid">
                {filteredProducts.map((product, idx) => {
                  const badge = getProductBadge(product, idx);
                  const imgUrl = getProductImage(product);
                  const isHighlighted = idx === 0;

                  return (
                    <motion.div
                      key={product.id}
                      className={`product-catalog-card ${isHighlighted ? 'is-highlighted-card' : ''}`}
                      onClick={() => setActiveModalProduct(product)}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (idx % 4) * 0.06 }}
                      whileHover={{ y: -6 }}
                    >
                      {/* Top Image Box */}
                      <div className="card-image-box">
                        {/* Badge */}
                        <span className={`card-badge ${badge.type === 'primary' ? 'card-badge-primary' : 'card-badge-soft'}`}>
                          {badge.text}
                        </span>

                        {/* Top-Right Trigger Arrow Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveModalProduct(product);
                          }}
                          className="card-top-arrow-btn"
                          aria-label="View product details"
                          title="View product details"
                        >
                          <ArrowRight size={14} />
                        </button>

                        {/* Spool Image */}
                        <img
                          src={imgUrl}
                          alt={product.name}
                          className="card-spool-image"
                          loading="lazy"
                          onError={(e) => { e.currentTarget.src = "/images/products/yarn-110.jpg"; }}
                        />
                      </div>

                      {/* Card Content */}
                      <div className="card-content-wrap">
                        {/* Title Row */}
                        <div className="card-title-row">
                          <div className="card-icon-pill">
                            <Layers size={17} />
                          </div>
                          <div className="card-title-text">
                            <h3 className="card-product-name">{product.name}</h3>
                            <span className="card-product-sub">{product.category || "Polyester Yarn (ATY)"}</span>
                          </div>
                        </div>

                        {/* Specs Row (3 Items with Icons in Clean Row including Cone Weight) */}
                        <div className="card-specs-row">
                          <div className="card-spec-tag" title="Cone / Package Weight">
                            <Package size={13} className="card-spec-icon" />
                            <span><strong>{product.coneWeight || "1.0 kg"}</strong> Cone</span>
                          </div>
                          <div className="card-spec-tag">
                            <Award size={13} className="card-spec-icon" />
                            <span>AA Grade</span>
                          </div>
                          <div className="card-spec-tag">
                            <Grid size={13} className="card-spec-icon" />
                            <span>Weave &amp; Knit</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="card-desc-paragraph">
                          {product.shortDesc || "High-grade continuous polyester filament yarn engineered for superior tensile strength and weave uniformity."}
                        </p>

                        {/* View Details Link */}
                        <div className="card-footer-action">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveModalProduct(product);
                            }}
                            className="card-view-details-btn"
                          >
                            <span>View Details</span>
                            <ArrowRight size={14} className="card-details-arrow" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Explore Complete Range Pill Button */}
              <div className="products-bottom-cta">
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}
                  className="products-range-btn"
                >
                  <span>Explore Complete Product Range</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Interactive Detail Modal (Matching 1st Image specifications) */}
      <ProductDetailModal
        product={activeModalProduct}
        isOpen={Boolean(activeModalProduct)}
        onClose={() => setActiveModalProduct(null)}
        isFavorite={activeModalProduct ? isFavorite(activeModalProduct.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      {/* Scoped CSS Styles */}
      <style>{`
        .products-page-wrapper {
          min-height: 100vh;
          background-color: var(--bg-primary);
          color: var(--text-primary);
        }

        /* =========================================
           HEADER SECTION STYLES
           ========================================= */
        .products-header-section {
          padding: 85px 0 65px 0;
          position: relative;
          background: #ffffff;
          border-bottom: 1px solid rgba(226, 232, 240, 0.7);
          overflow: hidden;
        }

        [data-theme="dark"] .products-header-section {
          background: #0b0f19;
          border-bottom-color: rgba(255, 255, 255, 0.08);
        }

        .prod-head-bg-curves {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .products-header-container {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 30px;
        }

        .products-header-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr 0.85fr;
          align-items: center;
          gap: 36px;
        }

        /* Left Content */
        .prod-head-left {
          max-width: 480px;
        }

        .prod-head-eyebrow-wrap {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .prod-head-eyebrow-line {
          width: 32px;
          height: 1.5px;
          background: #4f46e5;
          opacity: 0.6;
        }

        .prod-head-eyebrow-text {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #4f46e5;
          text-transform: uppercase;
        }

        [data-theme="dark"] .prod-head-eyebrow-text {
          color: #818cf8;
        }

        .prod-head-title {
          font-size: clamp(2.2rem, 3.4vw, 3rem);
          line-height: 1.18;
          font-weight: 700;
          margin: 0 0 16px 0;
          display: flex;
          flex-direction: column;
        }

        .prod-head-title-dark {
          font-family: var(--font-serif);
          color: #0f172a;
        }

        [data-theme="dark"] .prod-head-title-dark {
          color: #f8fafc;
        }

        .prod-head-title-italic {
          font-family: var(--font-serif);
          font-style: italic;
          color: #4f46e5;
          font-weight: 400;
        }

        [data-theme="dark"] .prod-head-title-italic {
          color: #818cf8;
        }

        .prod-head-desc {
          font-size: 0.95rem;
          line-height: 1.62;
          color: #64748b;
          margin: 0;
        }

        [data-theme="dark"] .prod-head-desc {
          color: #94a3b8;
        }

        /* Center Column Image with Aura */
        .prod-head-center {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .prod-head-image-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 380px;
        }

        .prod-head-aura-ring {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(99, 102, 241, 0) 70%);
          border: 1.5px solid rgba(99, 102, 241, 0.2);
          pointer-events: none;
          z-index: 0;
        }

        .prod-head-image {
          position: relative;
          z-index: 1;
          width: 100%;
          max-height: 260px;
          object-fit: contain;
          filter: drop-shadow(0 12px 24px rgba(15, 23, 42, 0.08));
        }

        /* Right Column Trust Badges */
        .prod-head-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .prod-trust-pill {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 18px;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        [data-theme="dark"] .prod-trust-pill {
          background: #111827;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
        }

        .prod-trust-pill:hover {
          transform: translateX(4px);
          border-color: rgba(99, 102, 241, 0.4);
        }

        .prod-trust-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.1);
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        [data-theme="dark"] .prod-trust-icon-box {
          background: rgba(99, 102, 241, 0.2);
          color: #818cf8;
        }

        .prod-trust-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .prod-trust-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
          line-height: 1.25;
        }

        [data-theme="dark"] .prod-trust-title {
          color: #f8fafc;
        }

        .prod-trust-sub {
          font-size: 0.78rem;
          color: #64748b;
          margin: 0;
        }

        [data-theme="dark"] .prod-trust-sub {
          color: #94a3b8;
        }

        /* =========================================
           MAIN EXPLORER LAYOUT
           ========================================= */
        .products-main-section {
          padding: 40px 0 80px 0;
          background: #f8fafc;
        }

        [data-theme="dark"] .products-main-section {
          background: #090d16;
        }

        .products-main-container {
          max-width: 1420px;
          margin: 0 auto;
          padding: 0 30px;
        }

        .products-layout-grid {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 30px;
          align-items: start;
        }

        /* =========================================
           SIDEBAR FILTER STYLES
           ========================================= */
        .products-sidebar {
          position: sticky;
          top: 90px;
        }

        .sidebar-filter-card {
          background: #ffffff;
          border-radius: 18px;
          border: 1px solid rgba(226, 232, 240, 0.85);
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.04);
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        [data-theme="dark"] .sidebar-filter-card {
          background: #111827;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sidebar-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
        }

        [data-theme="dark"] .sidebar-title {
          color: #f8fafc;
        }

        /* Search input */
        .sidebar-search-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .sidebar-search-icon {
          position: absolute;
          left: 12px;
          color: #94a3b8;
          pointer-events: none;
        }

        .sidebar-search-input {
          width: 100%;
          padding: 9px 34px 9px 36px;
          border-radius: 10px;
          border: 1.5px solid rgba(226, 232, 240, 0.9);
          background: #f8fafc;
          font-size: 0.82rem;
          color: #1e293b;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        [data-theme="dark"] .sidebar-search-input {
          background: #1e293b;
          border-color: rgba(255, 255, 255, 0.1);
          color: #f8fafc;
        }

        .sidebar-search-input:focus {
          border-color: #4f46e5;
          background: #ffffff;
        }

        [data-theme="dark"] .sidebar-search-input:focus {
          background: #1e293b;
        }

        .sidebar-search-clear {
          position: absolute;
          right: 10px;
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
        }

        /* Group titles */
        .sidebar-group-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: #334155;
          margin: 0 0 10px 0;
        }

        [data-theme="dark"] .sidebar-group-title {
          color: #cbd5e1;
        }

        .sidebar-options-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sidebar-checkbox-label {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 0.82rem;
          color: #475569;
          cursor: pointer;
          user-select: none;
        }

        [data-theme="dark"] .sidebar-checkbox-label {
          color: #94a3b8;
        }

        .sidebar-checkbox {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          accent-color: #4f46e5;
          cursor: pointer;
        }

        .sidebar-option-name {
          flex: 1;
        }

        .sidebar-option-count {
          font-size: 0.72rem;
          color: #94a3b8;
        }

        .sidebar-footer {
          padding-top: 10px;
          border-top: 1px solid rgba(226, 232, 240, 0.7);
        }

        [data-theme="dark"] .sidebar-footer {
          border-top-color: rgba(255, 255, 255, 0.08);
        }

        .sidebar-clear-btn {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px;
          border-radius: 8px;
          background: #f1f5f9;
          border: 1px solid rgba(226, 232, 240, 0.8);
          color: #475569;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        [data-theme="dark"] .sidebar-clear-btn {
          background: #1e293b;
          border-color: rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
        }

        .sidebar-clear-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        /* =========================================
           PRODUCT GRID & CARDS
           ========================================= */
        .products-content-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .products-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
        }

        .products-count-label {
          font-size: 0.88rem;
          color: #64748b;
          font-weight: 500;
        }

        [data-theme="dark"] .products-count-label {
          color: #94a3b8;
        }

        .products-top-controls {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .products-sort-combobox-wrap {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .products-sort-text {
          font-size: 0.84rem;
          color: #64748b;
          font-weight: 500;
        }

        [data-theme="dark"] .products-sort-text {
          color: #94a3b8;
        }

        .products-sort-trigger-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 10px;
          border: 1.5px solid rgba(226, 232, 240, 0.9);
          background: #ffffff;
          color: #1e293b;
          font-size: 0.84rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
          transition: all 0.2s ease;
        }

        [data-theme="dark"] .products-sort-trigger-btn {
          background: #111827;
          border-color: rgba(255, 255, 255, 0.1);
          color: #f8fafc;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .products-sort-trigger-btn:hover {
          border-color: #4f46e5;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
        }

        .sort-chevron {
          color: #64748b;
          transition: transform 0.2s ease;
        }

        .sort-chevron.is-open {
          transform: rotate(180deg);
        }

        /* Combobox Dropdown */
        .sort-combobox-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          right: 0;
          width: 230px;
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 16px 36px -8px rgba(15, 23, 42, 0.16);
          padding: 8px;
          z-index: 50;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        [data-theme="dark"] .sort-combobox-dropdown {
          background: #111827;
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.6);
        }

        .sort-combobox-search-box {
          position: relative;
          display: flex;
          align-items: center;
          padding: 0 4px;
        }

        .sort-combobox-search-icon {
          position: absolute;
          left: 12px;
          color: #94a3b8;
          pointer-events: none;
        }

        .sort-combobox-search-input {
          width: 100%;
          padding: 6px 26px 6px 30px;
          border-radius: 8px;
          border: 1px solid rgba(226, 232, 240, 0.9);
          background: #f8fafc;
          font-size: 0.78rem;
          color: #1e293b;
          outline: none;
        }

        [data-theme="dark"] .sort-combobox-search-input {
          background: #1e293b;
          border-color: rgba(255, 255, 255, 0.08);
          color: #f8fafc;
        }

        .sort-combobox-search-clear {
          position: absolute;
          right: 10px;
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
        }

        .sort-combobox-options-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
          max-height: 200px;
          overflow-y: auto;
        }

        .sort-combobox-option-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 7px 10px;
          border-radius: 8px;
          background: transparent;
          border: none;
          color: #334155;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          text-align: left;
          transition: background 0.15s ease, color 0.15s ease;
        }

        [data-theme="dark"] .sort-combobox-option-btn {
          color: #cbd5e1;
        }

        .sort-combobox-option-btn:hover {
          background: rgba(99, 102, 241, 0.08);
          color: #4f46e5;
        }

        [data-theme="dark"] .sort-combobox-option-btn:hover {
          background: rgba(99, 102, 241, 0.18);
          color: #818cf8;
        }

        .sort-combobox-option-btn.is-selected-option {
          background: rgba(99, 102, 241, 0.12);
          color: #4f46e5;
          font-weight: 700;
        }

        [data-theme="dark"] .sort-combobox-option-btn.is-selected-option {
          background: rgba(99, 102, 241, 0.22);
          color: #818cf8;
        }

        .sort-option-check {
          color: #4f46e5;
        }

        [data-theme="dark"] .sort-option-check {
          color: #818cf8;
        }

        .sort-no-options {
          padding: 10px;
          text-align: center;
          font-size: 0.78rem;
          color: #94a3b8;
        }

        /* 4 Cards Grid */
        .products-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .products-cards-grid.is-list-layout {
          grid-template-columns: 1fr;
        }

        .product-catalog-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1.5px solid rgba(226, 232, 240, 0.85);
          box-shadow: 0 8px 24px -6px rgba(15, 23, 42, 0.04);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.28s ease, box-shadow 0.28s ease, transform 0.28s ease;
          height: 100%;
        }

        [data-theme="dark"] .product-catalog-card {
          background: #111827;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 26px -8px rgba(0, 0, 0, 0.5);
        }

        .product-catalog-card:hover {
          border-color: rgba(99, 102, 241, 0.45);
          box-shadow: 0 16px 36px -10px rgba(99, 102, 241, 0.18);
        }

        .product-catalog-card.is-highlighted-card {
          border-color: #4f46e5;
          box-shadow: 0 16px 38px -8px rgba(99, 102, 241, 0.24);
        }

        [data-theme="dark"] .product-catalog-card.is-highlighted-card {
          border-color: #818cf8;
          box-shadow: 0 16px 38px -8px rgba(99, 102, 241, 0.35);
        }

        /* Card Image Box */
        .card-image-box {
          position: relative;
          width: 100%;
          height: 205px;
          background: linear-gradient(180deg, #f8faff 0%, #edf2ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 14px;
        }

        [data-theme="dark"] .card-image-box {
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
        }

        .card-spool-image {
          max-width: 80%;
          max-height: 86%;
          object-fit: contain;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.06));
        }

        .product-catalog-card:hover .card-spool-image {
          transform: scale(1.06);
        }

        /* Card Badges */
        .card-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          font-size: 0.68rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 9999px;
          letter-spacing: 0.02em;
          z-index: 2;
        }

        .card-badge-primary {
          background: #4f46e5;
          color: #ffffff;
          box-shadow: 0 3px 10px rgba(79, 70, 229, 0.35);
        }

        .card-badge-soft {
          background: rgba(224, 231, 255, 0.9);
          color: #4338ca;
          border: 1px solid rgba(199, 210, 254, 0.8);
        }

        [data-theme="dark"] .card-badge-soft {
          background: rgba(99, 102, 241, 0.18);
          color: #c7d2fe;
          border-color: rgba(99, 102, 241, 0.3);
        }

        /* Card Top-Right Arrow */
        .card-top-arrow-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(226, 232, 240, 0.9);
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 3;
        }

        [data-theme="dark"] .card-top-arrow-btn {
          background: #1e293b;
          border-color: rgba(255, 255, 255, 0.12);
          color: #818cf8;
        }

        .card-top-arrow-btn:hover {
          background: #4f46e5;
          color: #ffffff;
          transform: scale(1.08);
        }

        /* Card Content */
        .card-content-wrap {
          padding: 18px 16px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .card-icon-pill {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.1);
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        [data-theme="dark"] .card-icon-pill {
          background: rgba(99, 102, 241, 0.2);
          color: #818cf8;
        }

        .card-title-text {
          display: flex;
          flex-direction: column;
        }

        .card-product-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
          line-height: 1.25;
        }

        [data-theme="dark"] .card-product-name {
          color: #f8fafc;
        }

        .card-product-sub {
          font-size: 0.74rem;
          color: #64748b;
          margin-top: 2px;
        }

        [data-theme="dark"] .card-product-sub {
          color: #94a3b8;
        }

        /* Specs Row */
        .card-specs-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4px;
          margin-bottom: 12px;
          padding: 6px 2px;
          border-top: 1px solid rgba(226, 232, 240, 0.75);
          border-bottom: 1px solid rgba(226, 232, 240, 0.75);
        }

        [data-theme="dark"] .card-specs-row {
          border-color: rgba(255, 255, 255, 0.08);
        }

        .card-spec-tag {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-size: 0.65rem;
          font-weight: 600;
          color: #475569;
          white-space: nowrap;
        }

        .card-spec-tag strong {
          color: #1e293b;
          font-weight: 700;
        }

        [data-theme="dark"] .card-spec-tag {
          color: #cbd5e1;
        }

        [data-theme="dark"] .card-spec-tag strong {
          color: #f8fafc;
        }

        .card-spec-icon {
          color: #4f46e5;
          opacity: 0.9;
        }

        [data-theme="dark"] .card-spec-icon {
          color: #818cf8;
        }

        /* Description */
        .card-desc-paragraph {
          font-size: 0.8rem;
          line-height: 1.5;
          color: #64748b;
          margin: 0 0 14px 0;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        [data-theme="dark"] .card-desc-paragraph {
          color: #94a3b8;
        }

        /* View Details Link */
        .card-footer-action {
          margin-top: auto;
        }

        .card-view-details-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #4f46e5;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: gap 0.2s ease, color 0.2s ease;
        }

        [data-theme="dark"] .card-view-details-btn {
          color: #818cf8;
        }

        .card-details-arrow {
          transition: transform 0.2s ease;
        }

        .card-view-details-btn:hover {
          color: #3730a3;
          gap: 9px;
        }

        [data-theme="dark"] .card-view-details-btn:hover {
          color: #a5b4fc;
        }

        /* Bottom Range Button */
        .products-bottom-cta {
          text-align: center;
          margin-top: 35px;
        }

        .products-range-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border-radius: 9999px;
          background: #ffffff;
          border: 1.5px solid rgba(99, 102, 241, 0.4);
          color: #4f46e5;
          font-weight: 600;
          font-size: 0.92rem;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.08);
          transition: all 0.25s ease;
        }

        [data-theme="dark"] .products-range-btn {
          background: #111827;
          border-color: rgba(99, 102, 241, 0.4);
          color: #818cf8;
        }

        .products-range-btn:hover {
          background: #4f46e5;
          color: #ffffff;
          border-color: #4f46e5;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(79, 70, 229, 0.3);
        }

        /* No results */
        .products-no-results {
          text-align: center;
          padding: 50px 20px;
          background: #ffffff;
          border-radius: 16px;
          border: 1px dashed rgba(226, 232, 240, 0.9);
        }

        [data-theme="dark"] .products-no-results {
          background: #111827;
          border-color: rgba(255, 255, 255, 0.1);
        }

        .no-results-clear-btn {
          margin-top: 10px;
          padding: 8px 18px;
          border-radius: 8px;
          background: #4f46e5;
          color: #ffffff;
          border: none;
          font-weight: 600;
          cursor: pointer;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1280px) {
          .products-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 1080px) {
          .products-header-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 30px;
          }
          .prod-head-left {
            max-width: 100%;
          }
          .prod-head-eyebrow-wrap {
            justify-content: center;
          }
          .prod-head-right {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
          }
          .products-layout-grid {
            grid-template-columns: 1fr;
          }
          .products-sidebar {
            position: static;
          }
          .products-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .products-cards-grid {
            grid-template-columns: 1fr;
          }
          .prod-head-right {
            flex-direction: column;
          }
          .products-header-section {
            padding: 55px 0 45px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Products;
