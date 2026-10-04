import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  MessageSquare,
  MapPin,
  User,
  Building2,
  Mail,
  Tag,
  BarChart3,
  Send,
  Clock,
  Calendar,
  ChevronRight,
  ChevronDown,
  FileText,
  CheckCircle2,
  Maximize2,
  Plus,
  Minus,
  Layers,
  ExternalLink,
  X,
  Search,
  Check
} from 'lucide-react';
import { companyConfig } from '../data/config';

/* =========================================
   SEARCHABLE COMBOBOX COMPONENT
   ========================================= */
const SearchableCombobox = ({
  icon: Icon,
  placeholder,
  searchPlaceholder = 'Search...',
  options = [],
  value = '',
  onChange,
  allowCustom = true,
  name
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef(null);
  const searchInputRef = useRef(null);

  // Close on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Focus search input whenever opened
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 50);
    }
  }, [isOpen]);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (selectedVal) => {
    onChange({ target: { name, value: selectedVal } });
    setIsOpen(false);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange({ target: { name, value: '' } });
  };

  return (
    <div
      className={`form-combobox-wrapper ${isOpen ? 'combobox-open' : ''}`}
      ref={containerRef}
    >
      {/* Pill Trigger */}
      <div
        className={`form-input-pill combobox-trigger ${value ? 'has-value' : ''} ${isOpen ? 'is-active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {Icon && <Icon size={18} className="field-icon" />}
        <span
          className={`combobox-display-text ${value ? 'text-selected' : 'text-placeholder'}`}
        >
          {value || placeholder}
        </span>
        <div className="combobox-actions">
          {value && (
            <button
              type="button"
              className="combobox-clear-btn"
              onClick={handleClear}
              title="Clear selection"
              aria-label="Clear selection"
            >
              <X size={13} />
            </button>
          )}
          <ChevronDown
            size={17}
            className={`combobox-chevron ${isOpen ? 'chevron-rotated' : ''}`}
          />
        </div>
      </div>

      {/* Floating Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="combobox-dropdown-card"
            role="listbox"
          >
            {/* Search Input Header */}
            <div className="combobox-search-box">
              <Search size={15} className="combobox-search-icon" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="combobox-search-input"
                onClick={(e) => e.stopPropagation()}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="combobox-search-clear"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSearchQuery('');
                    searchInputRef.current?.focus();
                  }}
                  title="Clear search"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Options List */}
            <div className="combobox-options-list">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt) => {
                  const isSelected = value === opt;
                  return (
                    <div
                      key={opt}
                      className={`combobox-option-item ${isSelected ? 'option-selected' : ''}`}
                      onClick={() => handleSelect(opt)}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <span className="option-label">{opt}</span>
                      {isSelected && <Check size={16} className="option-check" />}
                    </div>
                  );
                })
              ) : (
                <div className="combobox-empty-state">
                  <p className="combobox-empty-text">No matches for "{searchQuery}"</p>
                  {allowCustom && searchQuery.trim() && (
                    <button
                      type="button"
                      className="combobox-use-custom-btn"
                      onClick={() => handleSelect(searchQuery.trim())}
                    >
                      Use "<strong>{searchQuery.trim()}</strong>"
                    </button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us & Request a Quote | FILYARN INDUSTRIES";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get in touch with Filyarn Industries Pvt. Ltd. sales desk in Surat, Gujarat. Request a bulk yarn quote or connect directly via WhatsApp and Phone."
      );
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    quantity: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mapZoom, setMapZoom] = useState(15);
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);

  const productOptions = [
    "Spun Polyester Dyed Yarn",
    "Raw White Spun Polyester Yarn",
    "Polyester Sewing Thread",
    "Micro Polyester Filament Yarn",
    "Specialty Dope Dyed Yarn",
    "Bulk Textured Filament Yarn",
    "Cotton / Poly Blended Yarn",
    "High Tenacity Industrial Yarn",
    "Recycled Eco-Polyester Yarn",
    "Custom Dyed / Specialty Count"
  ];

  const quantityOptions = [
    "Sample Requirement (< 50 kg)",
    "Less than 500 kg",
    "500 kg - 1,000 kg",
    "1,000 kg - 5,000 kg",
    "5,000 kg - 10,000 kg",
    "Full Container / Bulk (> 10 Tonnes)",
    "20ft FCL Container (~15-18 Tonnes)",
    "40ft HQ Container (~25-28 Tonnes)"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your Name and Phone Number.");
      return;
    }
    setIsSubmitted(true);
  };

  const getFormattedMessage = () => {
    return `Hello Filyarn Industries,
I would like to request a quote.
- Name: ${formData.name}
- Company: ${formData.company || 'N/A'}
- Phone: ${formData.phone}
- Email: ${formData.email || 'N/A'}
- Product: ${formData.product || 'General Yarn Query'}
- Quantity: ${formData.quantity || 'N/A'}
- Message: ${formData.message || 'N/A'}`;
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(getFormattedMessage());
    window.open(`https://wa.me/919157135001?text=${text}`, '_blank');
  };

  const handleMailSend = () => {
    const subject = encodeURIComponent(`B2B Quote Request: ${formData.product || 'Yarn Supply'}`);
    const body = encodeURIComponent(getFormattedMessage());
    window.open(`mailto:info@filyarnindustries.com?subject=${subject}&body=${body}`, '_self');
  };

  // Google Maps embed
  const mapEmbedUrl = `https://maps.google.com/maps?q=Filyarn%20Industries%20Pvt%20Ltd,%20Kudsad,%20Gujarat,%20India&t=&z=${mapZoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="contact-redesign-page">

      {/* Ambient background decoration */}
      <div className="contact-ambient-top-left" aria-hidden="true" />
      <div className="contact-ambient-top-right" aria-hidden="true" />
      <div className="contact-dot-matrix-tr" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1280px' }}>

        {/* =========================================
            HEADER SECTION
           ========================================= */}
        <div className="contact-header-block">
          <div className="contact-eyebrow-row">
            <span className="contact-eyebrow-text">CONNECT WITH US</span>
          </div>

          <h1 className="contact-main-headline font-serif">
            Request a Quote &amp;<br />
            <span className="contact-headline-italic">Start Sourcing</span>
          </h1>

          <p className="contact-header-desc">
            Get in touch with our commercial sales desk in Surat, Gujarat. Fill out our inquiry form,
            or reach us directly via phone or WhatsApp.
          </p>
        </div>

        {/* =========================================
            TOP 3 QUICK CONTACT CARDS
           ========================================= */}
        <div className="contact-quick-cards-grid">
          {/* Card 1: Phone Contact */}
          <a
            href="tel:+919157135001"
            className="contact-quick-card phone-card"
            title="Call Filyarn Industries"
          >
            <div className="quick-card-icon-wrap phone-icon-bg">
              <Phone size={22} className="text-white" />
            </div>
            <div className="quick-card-info">
              <span className="quick-card-label">Phone Contact</span>
              <h4 className="quick-card-value phone-val">+91 91571 35001</h4>
              <p className="quick-card-sub">Mon - Sat, 9:00 AM - 7:00 PM</p>
            </div>
            <div className="quick-card-arrow-btn">
              <ChevronRight size={18} />
            </div>
          </a>

          {/* Card 2: WhatsApp Support */}
          <a
            href="https://wa.me/919157135001?text=Hello%20Filyarn%20Industries%2C%20I%20would%20like%20to%20enquire%20about%20your%20yarn%20and%20sewing%20thread%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="contact-quick-card whatsapp-card"
            title="Open WhatsApp Chat"
          >
            <div className="quick-card-icon-wrap whatsapp-icon-bg">
              <MessageSquare size={22} className="text-white" />
            </div>
            <div className="quick-card-info">
              <span className="quick-card-label">WhatsApp Support</span>
              <h4 className="quick-card-value whatsapp-val">Open Chat</h4>
              <p className="quick-card-sub">Fast response for sales queries</p>
            </div>
            <div className="quick-card-arrow-btn">
              <ChevronRight size={18} />
            </div>
          </a>

          {/* Card 3: Our Location */}
          <a
            href="https://maps.google.com/maps?q=Filyarn%20Industries%20Pvt%20Ltd,%20Kudsad,%20Gujarat,%20India"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-quick-card location-card"
            title="View Location on Google Maps"
          >
            <div className="quick-card-icon-wrap location-icon-bg">
              <MapPin size={22} className="text-white" />
            </div>
            <div className="quick-card-info">
              <span className="quick-card-label">Our Location</span>
              <h4 className="quick-card-value location-val">Filyarn Industries Pvt. Ltd.</h4>
              <p className="quick-card-sub address-text">
                Plot No. 46 &amp; 19, Yogi Awaas Gali, Kuvad, Mankuwa, Surat - 394105, Gujarat, India
              </p>
            </div>
            <div className="quick-card-arrow-btn">
              <ChevronRight size={18} />
            </div>
          </a>
        </div>

        {/* =========================================
            MAIN TWO-COLUMN LAYOUT (FORM + MAP)
           ========================================= */}
        <div className="contact-main-split-grid">

          {/* LEFT: Enquiry & Quote Form Card */}
          <div className="contact-form-card">
            {/* Card Header */}
            <div className="form-card-header">
              <div className="form-card-icon-wrap">
                <FileText size={22} className="form-header-icon" />
              </div>
              <div className="form-card-header-text">
                <h3 className="form-card-title">Enquiry &amp; Quote Form</h3>
                <p className="form-card-subtitle">
                  Fill out the form below and our team will get back to you shortly.
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="contact-actual-form">
              <div className="form-fields-grid">

                {/* Input 1: Your Name */}
                <div className="form-input-pill">
                  <User size={18} className="field-icon" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name *"
                    required
                    className="field-input"
                  />
                </div>

                {/* Input 2: Company Name */}
                <div className="form-input-pill">
                  <Building2 size={18} className="field-icon" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="field-input"
                  />
                </div>

                {/* Input 3: Phone Number */}
                <div className="form-input-pill">
                  <Phone size={18} className="field-icon" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number *"
                    required
                    className="field-input"
                  />
                </div>

                {/* Input 4: Email Address */}
                <div className="form-input-pill">
                  <Mail size={18} className="field-icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="field-input"
                  />
                </div>

                {/* Dropdown 5: Searchable Product Category */}
                <SearchableCombobox
                  name="product"
                  icon={Tag}
                  placeholder="Product Category"
                  searchPlaceholder="Search product category..."
                  options={productOptions}
                  value={formData.product}
                  onChange={handleInputChange}
                  allowCustom={true}
                />

                {/* Dropdown 6: Searchable Required Quantity */}
                <SearchableCombobox
                  name="quantity"
                  icon={BarChart3}
                  placeholder="Required Quantity"
                  searchPlaceholder="Search quantity..."
                  options={quantityOptions}
                  value={formData.quantity}
                  onChange={handleInputChange}
                  allowCustom={true}
                />

              </div>

              {/* Textarea 7: Additional Requirements / Message */}
              <div className="form-textarea-pill">
                <div className="textarea-header-row">
                  <MessageSquare size={18} className="field-icon" />
                  <span className="textarea-label">Additional Requirements / Message</span>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Detail your requirements (e.g. material, count, color, delivery, etc.)"
                  rows={4}
                  className="field-textarea"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="form-submit-btn"
              >
                <Send size={18} />
                <span>Send Enquiry / Request a Quote</span>
              </button>
            </form>
          </div>

          {/* RIGHT: Map & Operating Hours Column */}
          <div className="contact-right-col">

            {/* Interactive Map Box */}
            <div className="contact-map-card">
              <iframe
                title="Filyarn Industries Location"
                src={mapEmbedUrl}
                className="contact-map-iframe"
                loading="lazy"
              />

              {/* Floating Location Tooltip Badge matching design */}
              <div className="map-floating-location-badge">
                <h4 className="map-location-title">Filyarn Industries Pvt. Ltd.</h4>
                <p className="map-location-desc">
                  Plot No. 46 &amp; 19, Yogi Awaas Gali,<br />
                  Kuvad, Mankuwa, Surat - 394105,<br />
                  Gujarat, India
                </p>
              </div>

              {/* Map Floating Action Controls */}
              <div className="map-top-right-ctrls">
                <a
                  href="https://maps.google.com/maps?q=Filyarn%20Industries%20Pvt%20Ltd,%20Kudsad,%20Gujarat,%20India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-ctrl-btn"
                  title="Open Fullscreen in Google Maps"
                >
                  <Maximize2 size={16} />
                </a>
              </div>

              <div className="map-bottom-right-ctrls">
                <button
                  type="button"
                  className="map-ctrl-btn"
                  onClick={() => setMapZoom((prev) => Math.min(prev + 1, 19))}
                  title="Zoom In"
                >
                  <Plus size={16} />
                </button>
                <button
                  type="button"
                  className="map-ctrl-btn"
                  onClick={() => setMapZoom((prev) => Math.max(prev - 1, 10))}
                  title="Zoom Out"
                >
                  <Minus size={16} />
                </button>
              </div>

              <div className="map-bottom-left-layer">
                <a
                  href="https://maps.google.com/maps?q=Filyarn%20Industries%20Pvt%20Ltd,%20Kudsad,%20Gujarat,%20India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-layer-thumb"
                  title="Satellite View on Google Maps"
                >
                  <Layers size={15} />
                </a>
              </div>
            </div>

            {/* Bottom 2 Small Info Cards */}
            <div className="contact-hours-days-grid">

              {/* Card 1: Business Hours */}
              <div className="hours-card">
                <div className="hours-icon-wrap">
                  <Clock size={22} className="hours-icon" />
                </div>
                <div className="hours-info">
                  <h4 className="hours-title">Business Hours</h4>
                  <span className="hours-days">Monday - Saturday</span>
                  <span className="hours-time">9:00 AM - 7:00 PM</span>
                  <p className="hours-note">We typically respond within 24 hours.</p>
                </div>
              </div>

              {/* Card 2: Working Days */}
              <div className="days-card">
                <div className="days-icon-wrap">
                  <Calendar size={22} className="days-icon" />
                </div>
                <div className="days-info">
                  <h4 className="days-title">Working Days</h4>
                  <span className="days-sunday">Sunday</span>
                  <div className="closed-badge-wrap">
                    <span className="closed-pill-badge">Closed</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Submission Success Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="form-success-modal-backdrop"
            onClick={() => setIsSubmitted(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="form-success-modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-icon-btn"
                onClick={() => setIsSubmitted(false)}
              >
                <X size={20} />
              </button>

              <div className="modal-success-icon-wrap">
                <CheckCircle2 size={42} className="text-white" />
              </div>

              <h3 className="modal-success-title">Enquiry Prepared!</h3>
              <p className="modal-success-desc">
                Thank you <strong>{formData.name}</strong>. Choose how you'd like to instantly transmit your requirements:
              </p>

              <div className="modal-action-buttons">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="modal-action-btn whatsapp-action"
                >
                  <MessageSquare size={18} />
                  <span>Send via WhatsApp Desk</span>
                </button>

                <button
                  type="button"
                  onClick={handleMailSend}
                  className="modal-action-btn email-action"
                >
                  <Mail size={18} />
                  <span>Send via Email Client</span>
                </button>
              </div>

              <button
                type="button"
                className="modal-dismiss-btn"
                onClick={() => setIsSubmitted(false)}
              >
                Close Window
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scoped CSS strictly matching the design image */}
      <style>{`
        .contact-redesign-page {
          padding: 60px 0 95px 0;
          background-color: var(--bg-primary);
          position: relative;
          overflow: hidden;
          font-family: var(--font-sans);
          min-height: 100vh;
        }

        /* Ambient soft gradients matching reference */
        .contact-ambient-top-left {
          position: absolute;
          top: 0;
          left: 0;
          width: 520px;
          height: 480px;
          background: radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .contact-ambient-top-right {
          position: absolute;
          top: 0;
          right: 0;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle at 100% 0%, rgba(37, 99, 235, 0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .contact-dot-matrix-tr {
          position: absolute;
          top: 80px;
          right: 48px;
          width: 88px;
          height: 70px;
          background-image: radial-gradient(rgba(37, 99, 235, 0.28) 1.5px, transparent 1.5px);
          background-size: 14px 14px;
          pointer-events: none;
          z-index: 1;
        }

        /* Header Block */
        .contact-header-block {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 46px auto;
        }

        .contact-eyebrow-row {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .contact-eyebrow-line {
          width: 28px;
          height: 1.5px;
          background-color: #2563eb;
          opacity: 0.8;
        }

        .contact-eyebrow-text {
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #2563eb;
          text-transform: uppercase;
        }

        [data-theme="dark"] .contact-eyebrow-text {
          color: #60a5fa;
        }

        .contact-main-headline {
          font-size: clamp(2.6rem, 4.6vw, 3.5rem);
          font-weight: 700;
          line-height: 1.16;
          color: var(--text-primary);
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        .contact-headline-italic {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-weight: 400;
          background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 60%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        [data-theme="dark"] .contact-headline-italic {
          background: linear-gradient(135deg, #818cf8 0%, #93c5fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-header-desc {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.62;
          margin: 0 auto;
          max-width: 620px;
        }

        /* Top 3 Quick Cards Grid */
        .contact-quick-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-bottom: 32px;
        }

        .contact-quick-card {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 20px;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          gap: 18px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        [data-theme="dark"] .contact-quick-card {
          background: #11151f;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }

        .contact-quick-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.09);
          border-color: rgba(147, 197, 253, 0.8);
        }

        .quick-card-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        }

        .phone-icon-bg {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        }

        .whatsapp-icon-bg {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .location-icon-bg {
          background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%);
        }

        .quick-card-info {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
        }

        .quick-card-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-muted);
          margin-bottom: 4px;
        }

        .quick-card-value {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 2px 0;
          line-height: 1.3;
        }

        .phone-val {
          color: #2563eb;
        }

        [data-theme="dark"] .phone-val {
          color: #60a5fa;
        }

        .whatsapp-val {
          color: #059669;
        }

        [data-theme="dark"] .whatsapp-val {
          color: #34d399;
        }

        .location-val {
          color: var(--text-primary);
          font-size: 0.98rem;
        }

        .quick-card-sub {
          font-size: 0.76rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.35;
        }

        .address-text {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .quick-card-arrow-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          flex-shrink: 0;
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
        }

        [data-theme="dark"] .quick-card-arrow-btn {
          background: #1e2638;
          color: #94a3b8;
        }

        .contact-quick-card:hover .quick-card-arrow-btn {
          transform: translateX(3px);
          background: #2563eb;
          color: #ffffff;
        }

        /* Main Split 2-Column Grid */
        .contact-main-split-grid {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 26px;
          align-items: start;
        }

        /* Form Card */
        .contact-form-card {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 24px;
          padding: 34px 34px 32px 34px;
          box-shadow: 0 10px 32px rgba(15, 23, 42, 0.04);
        }

        [data-theme="dark"] .contact-form-card {
          background: #11151f;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.25);
        }

        .form-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 26px;
        }

        .form-card-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #eff6ff;
          border: 1px solid rgba(37, 99, 235, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        [data-theme="dark"] .form-card-icon-wrap {
          background: rgba(37, 99, 235, 0.15);
          border-color: rgba(96, 165, 250, 0.3);
        }

        .form-header-icon {
          color: #2563eb;
        }

        [data-theme="dark"] .form-header-icon {
          color: #60a5fa;
        }

        .form-card-title {
          font-size: 1.28rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 3px 0;
          letter-spacing: -0.01em;
        }

        .form-card-subtitle {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Form Inputs & Grid */
        .form-fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }

        .form-input-pill {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        [data-theme="dark"] .form-input-pill {
          background: #181f2e;
          border-color: rgba(255, 255, 255, 0.1);
        }

        .form-input-pill:focus-within {
          border-color: #2563eb;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        [data-theme="dark"] .form-input-pill:focus-within {
          background: #1c2538;
          border-color: #60a5fa;
          box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
        }

        .field-icon {
          color: #94a3b8;
          flex-shrink: 0;
        }

        .field-input {
          width: 100%;
          border: none;
          background: transparent;
          font-size: 0.9rem;
          color: var(--text-primary);
          outline: none;
          font-family: inherit;
        }

        .field-input::placeholder {
          color: #94a3b8;
        }

        /* =========================================
           SEARCHABLE COMBOBOX STYLES
           ========================================= */
        .form-combobox-wrapper {
          position: relative;
          width: 100%;
          user-select: none;
        }

        .form-combobox-wrapper.combobox-open {
          z-index: 40;
        }

        .combobox-trigger {
          cursor: pointer;
          position: relative;
          justify-content: space-between;
          padding: 12px 14px 12px 16px;
        }

        .combobox-trigger.is-active,
        .combobox-trigger:focus-visible {
          border-color: #2563eb;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        [data-theme="dark"] .combobox-trigger.is-active,
        [data-theme="dark"] .combobox-trigger:focus-visible {
          background: #1c2538;
          border-color: #60a5fa;
          box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
        }

        .combobox-display-text {
          flex: 1;
          font-size: 0.9rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
          margin-right: 8px;
        }

        .combobox-display-text.text-placeholder {
          color: #94a3b8;
          font-weight: 400;
        }

        .combobox-display-text.text-selected {
          color: var(--text-primary);
          font-weight: 500;
        }

        .combobox-actions {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .combobox-clear-btn {
          background: #e2e8f0;
          color: #64748b;
          border: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
          padding: 0;
        }

        .combobox-clear-btn:hover {
          background: #cbd5e1;
          color: #0f172a;
        }

        [data-theme="dark"] .combobox-clear-btn {
          background: #334155;
          color: #94a3b8;
        }

        [data-theme="dark"] .combobox-clear-btn:hover {
          background: #475569;
          color: #ffffff;
        }

        .combobox-chevron {
          color: #94a3b8;
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s ease;
        }

        .combobox-trigger:hover .combobox-chevron,
        .combobox-trigger.is-active .combobox-chevron {
          color: #2563eb;
        }

        [data-theme="dark"] .combobox-trigger:hover .combobox-chevron,
        [data-theme="dark"] .combobox-trigger.is-active .combobox-chevron {
          color: #60a5fa;
        }

        .combobox-chevron.chevron-rotated {
          transform: rotate(180deg);
        }

        /* Floating Dropdown Card */
        .combobox-dropdown-card {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 14px 36px rgba(15, 23, 42, 0.14), 0 4px 12px rgba(15, 23, 42, 0.06);
          overflow: hidden;
          z-index: 50;
          display: flex;
          flex-direction: column;
        }

        [data-theme="dark"] .combobox-dropdown-card {
          background: #151b27;
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
        }

        /* Search input bar inside dropdown */
        .combobox-search-box {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: #f8fafc;
          border-bottom: 1px solid #f1f5f9;
        }

        [data-theme="dark"] .combobox-search-box {
          background: #11151f;
          border-bottom-color: rgba(255, 255, 255, 0.08);
        }

        .combobox-search-icon {
          color: #94a3b8;
          flex-shrink: 0;
        }

        .combobox-search-input {
          width: 100%;
          border: none;
          background: transparent;
          font-size: 0.86rem;
          color: var(--text-primary);
          outline: none;
          font-family: inherit;
        }

        .combobox-search-input::placeholder {
          color: #94a3b8;
        }

        .combobox-search-clear {
          background: #e2e8f0;
          color: #64748b;
          border: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
        }

        [data-theme="dark"] .combobox-search-clear {
          background: #334155;
          color: #94a3b8;
        }

        /* Options list */
        .combobox-options-list {
          max-height: 220px;
          overflow-y: auto;
          padding: 6px;
        }

        .combobox-options-list::-webkit-scrollbar {
          width: 6px;
        }

        .combobox-options-list::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }

        [data-theme="dark"] .combobox-options-list::-webkit-scrollbar-thumb {
          background: #334155;
        }

        .combobox-option-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9px 12px;
          border-radius: 10px;
          font-size: 0.86rem;
          color: var(--text-primary);
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .combobox-option-item:hover {
          background: #eff6ff;
          color: #2563eb;
        }

        [data-theme="dark"] .combobox-option-item:hover {
          background: rgba(37, 99, 235, 0.16);
          color: #60a5fa;
        }

        .combobox-option-item.option-selected {
          background: #eff6ff;
          color: #2563eb;
          font-weight: 600;
        }

        [data-theme="dark"] .combobox-option-item.option-selected {
          background: rgba(37, 99, 235, 0.22);
          color: #60a5fa;
        }

        .option-label {
          flex: 1;
        }

        .option-check {
          color: #2563eb;
          flex-shrink: 0;
        }

        [data-theme="dark"] .option-check {
          color: #60a5fa;
        }

        /* Empty state */
        .combobox-empty-state {
          padding: 16px 12px;
          text-align: center;
        }

        .combobox-empty-text {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin: 0 0 8px 0;
        }

        .combobox-use-custom-btn {
          font-size: 0.8rem;
          color: #2563eb;
          background: #eff6ff;
          border: 1px solid rgba(37, 99, 235, 0.2);
          padding: 6px 14px;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .combobox-use-custom-btn:hover {
          background: #2563eb;
          color: #ffffff;
        }

        [data-theme="dark"] .combobox-use-custom-btn {
          background: rgba(37, 99, 235, 0.18);
          color: #93c5fd;
          border-color: rgba(96, 165, 250, 0.3);
        }

        [data-theme="dark"] .combobox-use-custom-btn:hover {
          background: #2563eb;
          color: #ffffff;
        }

        /* Textarea Pill */
        .form-textarea-pill {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        [data-theme="dark"] .form-textarea-pill {
          background: #181f2e;
          border-color: rgba(255, 255, 255, 0.1);
        }

        .form-textarea-pill:focus-within {
          border-color: #2563eb;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        [data-theme="dark"] .form-textarea-pill:focus-within {
          background: #1c2538;
          border-color: #60a5fa;
          box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
        }

        .textarea-header-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .textarea-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #64748b;
        }

        [data-theme="dark"] .textarea-label {
          color: #94a3b8;
        }

        .field-textarea {
          width: 100%;
          border: none;
          background: transparent;
          font-size: 0.88rem;
          color: var(--text-primary);
          outline: none;
          font-family: inherit;
          resize: vertical;
          min-height: 80px;
          line-height: 1.5;
        }

        .field-textarea::placeholder {
          color: #94a3b8;
          font-size: 0.82rem;
        }

        /* Submit Button */
        .form-submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #4338ca 0%, #3b82f6 100%);
          color: #ffffff;
          font-size: 0.98rem;
          font-weight: 700;
          padding: 15px 24px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
        }

        .form-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 26px rgba(59, 130, 246, 0.45);
          filter: brightness(1.04);
        }

        .form-submit-btn:active {
          transform: translateY(0);
        }

        /* Right Column */
        .contact-right-col {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        /* Map Card */
        .contact-map-card {
          position: relative;
          height: 310px;
          border-radius: 24px;
          overflow: hidden;
          background: #e2e8f0;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
        }

        [data-theme="dark"] .contact-map-card {
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .contact-map-iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        /* Floating Location Card on Map */
        .map-floating-location-badge {
          position: absolute;
          top: 22px;
          left: 50%;
          transform: translateX(-50%);
          background: #ffffff;
          padding: 12px 18px;
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
          border: 1px solid rgba(226, 232, 240, 0.9);
          text-align: center;
          z-index: 5;
          pointer-events: none;
          max-width: 90%;
        }

        [data-theme="dark"] .map-floating-location-badge {
          background: #11151f;
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
        }

        .map-location-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 3px 0;
        }

        [data-theme="dark"] .map-location-title {
          color: #f8fafc;
        }

        .map-location-desc {
          font-size: 0.72rem;
          color: #64748b;
          line-height: 1.35;
          margin: 0;
        }

        [data-theme="dark"] .map-location-desc {
          color: #94a3b8;
        }

        /* Map UI Overlay Buttons */
        .map-top-right-ctrls {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 6;
        }

        .map-bottom-right-ctrls {
          position: absolute;
          bottom: 14px;
          right: 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 6;
        }

        .map-bottom-left-layer {
          position: absolute;
          bottom: 14px;
          left: 14px;
          z-index: 6;
        }

        .map-ctrl-btn {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.12);
          color: #334155;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .map-ctrl-btn:hover {
          background: #f8fafc;
          transform: scale(1.05);
          color: #0f172a;
        }

        .map-layer-thumb {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #334155;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.14);
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .map-layer-thumb:hover {
          transform: scale(1.08);
          color: #2563eb;
        }

        /* Bottom Hours & Days Row */
        .contact-hours-days-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.95fr;
          gap: 16px;
        }

        .hours-card,
        .days-card {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 20px;
          padding: 20px 22px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.03);
        }

        [data-theme="dark"] .hours-card,
        [data-theme="dark"] .days-card {
          background: #11151f;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
        }

        .hours-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #fff7ed;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        [data-theme="dark"] .hours-icon-wrap {
          background: rgba(249, 115, 22, 0.15);
        }

        .hours-icon {
          color: #f97316;
        }

        [data-theme="dark"] .hours-icon {
          color: #fb923c;
        }

        .days-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #faf5ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        [data-theme="dark"] .days-icon-wrap {
          background: rgba(168, 85, 247, 0.15);
        }

        .days-icon {
          color: #a855f7;
        }

        [data-theme="dark"] .days-icon {
          color: #c084fc;
        }

        .hours-info,
        .days-info {
          display: flex;
          flex-direction: column;
        }

        .hours-title,
        .days-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 2px 0;
        }

        .hours-days,
        .days-sunday {
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .hours-time {
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 4px;
        }

        .hours-note {
          font-size: 0.72rem;
          color: var(--text-muted);
          margin: 6px 0 0 0;
        }

        .closed-badge-wrap {
          margin-top: 8px;
        }

        .closed-pill-badge {
          background: #fee2e2;
          color: #ef4444;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 12px;
          border-radius: 9999px;
          display: inline-block;
        }

        [data-theme="dark"] .closed-pill-badge {
          background: rgba(239, 68, 68, 0.2);
          color: #fca5a5;
        }

        /* Success Modal */
        .form-success-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(10, 15, 26, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .form-success-modal-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 36px 32px;
          max-width: 480px;
          width: 100%;
          text-align: center;
          position: relative;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
        }

        [data-theme="dark"] .form-success-modal-card {
          background: #11151f;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .modal-close-icon-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
        }

        .modal-success-icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px auto;
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35);
        }

        .modal-success-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 10px 0;
        }

        .modal-success-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0 0 24px 0;
        }

        .modal-action-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }

        .modal-action-btn {
          padding: 13px 20px;
          border-radius: 9999px;
          font-size: 0.92rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .whatsapp-action {
          background: #25d366;
          color: #ffffff;
        }

        .email-action {
          background: #2563eb;
          color: #ffffff;
        }

        .modal-action-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }

        .modal-dismiss-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 0.84rem;
          font-weight: 600;
          cursor: pointer;
          padding: 8px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .contact-quick-cards-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .contact-main-split-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 640px) {
          .contact-redesign-page {
            padding: 40px 0 70px 0;
          }
          .contact-form-card {
            padding: 24px 20px;
          }
          .form-fields-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .contact-hours-days-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
