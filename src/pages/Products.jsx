import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Heart,
  Grid,
  Layers,
  Sparkles,
  Filter,
  X,
  PhoneCall,
  HelpCircle,
  PackageCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { productsData } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import ProductDetailModal from '../components/products/ProductDetailModal';
import useFavorites from '../hooks/useFavorites';
import Button from '../components/common/Button';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('sections'); // 'sections' | 'grid'
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const { favorites, isFavorite, toggleFavorite, favoritesCount } = useFavorites();

  // SEO: Update Title and Meta Tags
  useEffect(() => {
    document.title = "Industrial Yarn Catalogue | Filyarn Industries Surat | ATY, Lichi, BRT, Spun";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore Filyarn Industries Surat yarn catalogue: 110/160 ATY, Cationic Air Textured, 80-200 Lichi Polyester & Cationic, 50-100 BRT Bright Filament, Monica, Roto, Anmol, and 30s-40s Spun Polyester yarns."
      );
    }
  }, []);

  // AUTO-UPDATING CATEGORIES: Extracted dynamically from productsData array
  // If a new product is appended with a new category in future, it automatically appears here!
  const categories = useMemo(() => {
    const unique = Array.from(new Set(productsData.map((p) => p.category)));
    return ['All', ...unique];
  }, []);

  // Filtered Products Logic
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      // Favorites filter
      if (showOnlyFavorites && !favorites.includes(product.id)) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDenier = product.denier?.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesLustre = product.lustre?.toLowerCase().includes(query);
        const matchesApps = product.applications?.some((app) => app.toLowerCase().includes(query));
        return matchesName || matchesDenier || matchesCategory || matchesLustre || matchesApps;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, showOnlyFavorites, favorites]);

  // Group filtered products by category for section-wise view
  const groupedSections = useMemo(() => {
    const groups = {};
    filteredProducts.forEach((prod) => {
      const cat = prod.category || 'Other Yarns';
      if (!groups[cat]) {
        groups[cat] = [];
      }
      groups[cat].push(prod);
    });
    return groups;
  }, [filteredProducts]);

  // JSON-LD Structured Data for Google Sitelinks and Product Rich Snippets
  const jsonLdData = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://filyarn.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Products",
              "item": "https://filyarn.com/products"
            }
          ]
        },
        {
          "@type": "ItemList",
          "name": "Filyarn Industries Yarn Product Catalogue",
          "description": "B2B catalog of polyester yarn products manufactured and supplied from Surat, Gujarat.",
          "numberOfItems": productsData.length,
          "itemListElement": productsData.map((prod, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Product",
              "name": prod.name,
              "description": prod.shortDesc,
              "category": prod.category,
              "sku": prod.id,
              "brand": {
                "@type": "Brand",
                "name": "FILYARN"
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "INR",
                "price": "0",
                "description": "Wholesale industrial B2B pricing on inquiry."
              }
            }
          }))
        }
      ]
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Google SEO JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Editorial Header */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-light)', padding: '70px 0 50px 0' }}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 }
              }
            }}
            style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}
          >
            <span className="section-label">B2B Yarn Portfolio & Technical Specifications</span>
            <h1
              className="font-serif"
              style={{
                fontSize: '3rem',
                fontWeight: '400',
                marginBottom: '18px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                rowGap: '0.15em'
              }}
            >
              {"Yarn & Thread".split(" ").map((word, i) => (
                <motion.span
                  key={`hd-${i}`}
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
                style={{
                  display: 'inline-block',
                  marginRight: '0.25em',
                  color: 'var(--color-accent)',
                  fontStyle: 'italic'
                }}
              >
                Catalogue
              </motion.span>
            </h1>

            <p
              style={{
                fontSize: '1.08rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                fontWeight: '300',
                marginBottom: '28px'
              }}
            >
              Surat's trusted source for Air Textured Yarn (ATY), Lichi series (Poli & Cationic), Bright filament (BRT), specialty textured Monica, Roto, Anmol slub, and Spun Polyester yarns. Click any product to explore all 5 image angles and send instant WhatsApp inquiries.
            </p>

            {/* Live Count Metrics Strip */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '24px',
                backgroundColor: 'var(--bg-secondary)',
                padding: '10px 24px',
                borderRadius: '30px',
                border: '1px solid var(--border-light)',
                fontSize: '0.85rem'
              }}
            >
              <div>
                <strong style={{ color: 'var(--color-accent)', fontWeight: '700' }}>{productsData.length}</strong> Products Catalogued
              </div>
              <span style={{ color: 'var(--border-light)' }}>|</span>
              <div>
                <strong style={{ color: 'var(--text-primary)', fontWeight: '700' }}>{categories.length - 1}</strong> Specialized Categories
              </div>
              <span style={{ color: 'var(--border-light)' }}>|</span>
              <div>
                <strong style={{ color: '#25D366', fontWeight: '700' }}>100%</strong> Ready WhatsApp Inquiry
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Interactive Filter & Control Toolbar */}
      <section
        style={{
          position: 'sticky',
          top: '72px',
          zIndex: 40,
          backgroundColor: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-light)',
          padding: '16px 0',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {/* Left: Dynamic Category Filter Chips */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                overflowX: 'auto',
                maxWidth: '100%',
                paddingBottom: '4px',
                scrollbarWidth: 'none'
              }}
              className="category-chips-scroll"
            >
              {categories.map((category) => {
                const isActive = selectedCategory === category && !showOnlyFavorites;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowOnlyFavorites(false);
                    }}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.82rem',
                      fontWeight: isActive ? '600' : '500',
                      backgroundColor: isActive ? 'var(--color-accent)' : 'var(--bg-secondary)',
                      color: isActive ? '#ffffff' : 'var(--text-primary)',
                      border: isActive ? '1px solid var(--color-accent)' : '1px solid var(--border-light)',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s ease',
                      flexShrink: 0
                    }}
                    className="filter-chip"
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Right: Search, Favorites Tab, and View Mode Switch */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              {/* Instant Search Bar */}
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '20px',
                  padding: '6px 14px',
                  width: '220px'
                }}
              >
                <Search size={15} style={{ color: 'var(--text-muted)', marginRight: '8px', flexShrink: 0 }} />
                <input
                  type="text"
                  placeholder="Search yarn / denier..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-primary)',
                    width: '100%',
                    background: 'transparent'
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{ color: 'var(--text-muted)', cursor: 'pointer', padding: '0 2px' }}
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Liked / Favorites Filter Button (Top display requested by user) */}
              <button
                onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  backgroundColor: showOnlyFavorites ? 'rgba(239, 68, 68, 0.12)' : 'var(--bg-secondary)',
                  color: showOnlyFavorites ? '#ef4444' : 'var(--text-primary)',
                  border: showOnlyFavorites ? '1px solid #ef4444' : '1px solid var(--border-light)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
                className="favorites-top-btn"
                title="View your saved/liked yarn products"
              >
                <Heart size={15} fill={showOnlyFavorites || favoritesCount > 0 ? '#ef4444' : 'none'} color="#ef4444" />
                <span>Liked Products</span>
                <span
                  style={{
                    backgroundColor: showOnlyFavorites ? '#ef4444' : 'var(--bg-primary)',
                    color: showOnlyFavorites ? '#ffffff' : 'var(--text-primary)',
                    fontSize: '0.7rem',
                    padding: '2px 7px',
                    borderRadius: '10px',
                    marginLeft: '2px'
                  }}
                >
                  {favoritesCount}
                </span>
              </button>

              {/* View Switch: Section-Wise vs All Grid */}
              <div
                style={{
                  display: 'flex',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '20px',
                  padding: '3px',
                  border: '1px solid var(--border-light)'
                }}
              >
                <button
                  onClick={() => setViewMode('sections')}
                  title="View by Organized Category Sections"
                  style={{
                    padding: '6px 10px',
                    borderRadius: '16px',
                    fontSize: '0.78rem',
                    backgroundColor: viewMode === 'sections' ? 'var(--bg-primary)' : 'transparent',
                    color: viewMode === 'sections' ? 'var(--color-accent)' : 'var(--text-muted)',
                    boxShadow: viewMode === 'sections' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                    fontWeight: viewMode === 'sections' ? '600' : '500'
                  }}
                >
                  <Layers size={14} />
                  Sections
                </button>

                <button
                  onClick={() => setViewMode('grid')}
                  title="View All in Unified Grid"
                  style={{
                    padding: '6px 10px',
                    borderRadius: '16px',
                    fontSize: '0.78rem',
                    backgroundColor: viewMode === 'grid' ? 'var(--bg-primary)' : 'transparent',
                    color: viewMode === 'grid' ? 'var(--color-accent)' : 'var(--text-muted)',
                    boxShadow: viewMode === 'grid' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                    fontWeight: viewMode === 'grid' ? '600' : '500'
                  }}
                >
                  <Grid size={14} />
                  Grid
                </button>
              </div>
            </div>
          </div>

          {/* Active Filter Indicators */}
          {(selectedCategory !== 'All' || searchQuery || showOnlyFavorites) && (
            <div
              style={{
                marginTop: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                flexWrap: 'wrap'
              }}
            >
              <span>Showing:</span>
              {showOnlyFavorites && (
                <span
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    color: '#ef4444',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  Favorites Only
                  <X size={12} style={{ cursor: 'pointer' }} onClick={() => setShowOnlyFavorites(false)} />
                </span>
              )}
              {selectedCategory !== 'All' && (
                <span
                  style={{
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    color: 'var(--color-accent)',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  Category: {selectedCategory}
                  <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSelectedCategory('All')} />
                </span>
              )}
              {searchQuery && (
                <span
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  Query: "{searchQuery}"
                  <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSearchQuery('')} />
                </span>
              )}

              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setShowOnlyFavorites(false);
                }}
                style={{
                  color: 'var(--color-accent)',
                  fontWeight: '600',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  marginLeft: '4px'
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Main Catalogue Section */}
      <main className="section section-alt" style={{ padding: '60px 0 100px 0' }}>
        <div className="container">
          {/* Empty State */}
          {filteredProducts.length === 0 ? (
            <div
              style={{
                maxWidth: '560px',
                margin: '60px auto',
                textAlign: 'center',
                padding: '48px 24px',
                backgroundColor: 'var(--bg-primary)',
                borderRadius: 'var(--border-radius)',
                border: '1px dashed var(--border-light)'
              }}
            >
              {showOnlyFavorites ? (
                <>
                  <Heart size={48} style={{ color: '#ef4444', margin: '0 auto 16px auto', opacity: 0.6 }} />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '8px' }}>
                    No Liked Products Yet
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                    Click the heart icon on any yarn product card or detail modal to add it to your shortlist for fast comparison and WhatsApp inquiry.
                  </p>
                  <Button
                    onClick={() => setShowOnlyFavorites(false)}
                    variant="primary"
                    style={{ padding: '10px 24px', fontSize: '0.9rem' }}
                  >
                    Browse All Yarn Products
                  </Button>
                </>
              ) : (
                <>
                  <Search size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 16px auto' }} />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '8px' }}>
                    No Matching Products Found
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                    We couldn't find any yarn matching "{searchQuery}". Try clearing your search query or selecting another category.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    variant="secondary"
                    style={{ padding: '10px 24px', fontSize: '0.9rem' }}
                  >
                    Reset Filters
                  </Button>
                </>
              )}
            </div>
          ) : viewMode === 'sections' && selectedCategory === 'All' && !showOnlyFavorites ? (
            /* SECTION-WISE PRODUCT VIEW (Organized Grouping) */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '70px' }}>
              {Object.entries(groupedSections).map(([catTitle, catProducts]) => (
                <div key={catTitle} id={catTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
                  {/* Section Banner Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '2px solid var(--border-light)',
                      paddingBottom: '16px',
                      marginBottom: '32px'
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.12em',
                          color: 'var(--color-accent)',
                          fontWeight: '700',
                          display: 'block',
                          marginBottom: '4px'
                        }}
                      >
                        Industrial Category
                      </span>
                      <h2
                        className="font-serif"
                        style={{
                          fontSize: '1.85rem',
                          fontWeight: '500',
                          color: 'var(--text-primary)'
                        }}
                      >
                        {catTitle}
                      </h2>
                    </div>

                    <div
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-light)',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {catProducts.length} {catProducts.length === 1 ? 'Product' : 'Products'}
                    </div>
                  </div>

                  {/* Section Products Grid */}
                  <div className="grid-4" style={{ gap: '24px' }}>
                    {catProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onSelect={setActiveModalProduct}
                        isFavorite={isFavorite(product.id)}
                        onToggleFavorite={toggleFavorite}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ALL PRODUCTS UNIFIED GRID VIEW */
            <div>
              <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Showing <strong>{filteredProducts.length}</strong> of {productsData.length} total yarn items
                </span>
              </div>

              <div className="grid-4" style={{ gap: '24px' }}>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={setActiveModalProduct}
                    isFavorite={isFavorite(product.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Interactive Detail Modal (Matching user reference layout) */}
      <ProductDetailModal
        product={activeModalProduct}
        isOpen={Boolean(activeModalProduct)}
        onClose={() => setActiveModalProduct(null)}
        isFavorite={activeModalProduct ? isFavorite(activeModalProduct.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      {/* B2B Custom Inquiry Callout */}
      <section className="section">
        <div className="container">
          <div
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              textAlign: 'center',
              border: '1px dashed var(--border-light)',
              padding: '40px 30px',
              borderRadius: 'var(--border-radius)',
              backgroundColor: 'var(--bg-secondary)'
            }}
          >
            <HelpCircle size={36} style={{ color: 'var(--color-accent)', margin: '0 auto 14px auto' }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '10px' }}>
              Need Custom Yarn Counts, Twist, or Specific Plies?
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
              We manufacture and source custom specifications including customized deniers, intermingle knot frequencies, special bobbin dimensions, and cationic dyeable blends tailored to your loom machinery. Connect with our Surat sales desk directly.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/919157135001?text=Hello%20Filyarn%20Industries%2C%20I%20would%20like%20to%20discuss%20custom%20yarn%20spinning%20and%20twisting%20specifications."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  fontWeight: '600',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)'
                }}
              >
                Chat on WhatsApp (+91 9157135001)
              </a>

              <Button to="/contact" variant="secondary" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
                Contact Surat Office
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .filter-chip:hover {
          border-color: var(--color-accent) !important;
          color: var(--color-accent) !important;
        }
        .favorites-top-btn:hover {
          border-color: #ef4444 !important;
          transform: translateY(-1px);
        }
        .category-chips-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Products;
