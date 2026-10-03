import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Sliders, 
  RotateCw, 
  GitMerge, 
  Disc, 
  Droplets, 
  ShieldCheck, 
  PackageCheck, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2
} from 'lucide-react';
import { manufacturingSteps } from '../../data/content';

// Iconography mapping for all 8 manufacturing steps
const STEP_ICONS = [
  Layers,
  Sliders,
  RotateCw,
  GitMerge,
  Disc,
  Droplets,
  ShieldCheck,
  PackageCheck
];

const ManufacturingSteps = () => {
  const sectionRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  // Interaction & auto-scroll references
  const isHoveredRef = useRef(false);
  const isInteractingRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragScrollLeftRef = useRef(0);
  const dragMovedRef = useRef(false);
  const resumeTimeoutRef = useRef(null);

  // Lightbox modal state (only displays large image with Back & Next)
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  const activeModalIndexRef = useRef(null);
  activeModalIndexRef.current = activeModalIndex;

  const totalSteps = manufacturingSteps.length;

  // Auto-scroll loop: continuous, normal comfortable speed, pauses on hover / interaction
  useEffect(() => {
    const el = scrollTrackRef.current;
    if (!el) return;

    let animId;
    // Balanced, comfortable reading speed (normal speed, not fast, not low)
    const speed = 0.8;

    const step = () => {
      if (
        !isHoveredRef.current && 
        !isInteractingRef.current && 
        !isDraggingRef.current && 
        activeModalIndexRef.current === null
      ) {
        el.scrollLeft += speed;

        // When scrolled past the first set of 8 cards, loop seamlessly back to start
        const halfScroll = el.scrollWidth / 2;
        if (el.scrollLeft >= halfScroll) {
          el.scrollLeft -= halfScroll;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += halfScroll;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  // Lightbox Modal Navigation (Next & Back between images)
  const handlePrevModal = useCallback((e) => {
    if (e) e.stopPropagation();
    setActiveModalIndex((prev) => (prev === 0 ? totalSteps - 1 : prev - 1));
  }, [totalSteps]);

  const handleNextModal = useCallback((e) => {
    if (e) e.stopPropagation();
    setActiveModalIndex((prev) => (prev === totalSteps - 1 ? 0 : prev + 1));
  }, [totalSteps]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeModalIndex === null) return;
      if (e.key === 'Escape') setActiveModalIndex(null);
      if (e.key === 'ArrowLeft') handlePrevModal();
      if (e.key === 'ArrowRight') handleNextModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex, handlePrevModal, handleNextModal]);

  // Homepage Previous & Next arrow buttons on sides of track
  const handlePrevTrack = () => {
    const el = scrollTrackRef.current;
    if (!el) return;
    isInteractingRef.current = true;
    el.scrollBy({ left: -340, behavior: 'smooth' });
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 2000);
  };

  const handleNextTrack = () => {
    const el = scrollTrackRef.current;
    if (!el) return;
    isInteractingRef.current = true;
    el.scrollBy({ left: 340, behavior: 'smooth' });
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 2000);
  };

  // Mouse wheel scroll handler (pauses auto-scroll and resumes after inactivity)
  const handleWheel = () => {
    isInteractingRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 1800);
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    const el = scrollTrackRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    isInteractingRef.current = true;
    dragMovedRef.current = false;
    dragStartXRef.current = e.pageX - el.offsetLeft;
    dragScrollLeftRef.current = el.scrollLeft;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const el = scrollTrackRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const delta = (x - dragStartXRef.current) * 1.3;
    if (Math.abs(delta) > 5) {
      dragMovedRef.current = true;
    }
    el.scrollLeft = dragScrollLeftRef.current - delta;
  };

  const handleMouseUpOrLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        isInteractingRef.current = false;
      }, 1800);
    }
  };

  // Hover handlers for the track
  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeaveTrack = () => {
    isHoveredRef.current = false;
    handleMouseUpOrLeave();
  };

  // Handle card click (open large image modal if not dragging)
  const handleCardClick = (stepIndex) => {
    if (!dragMovedRef.current) {
      setActiveModalIndex(stepIndex);
    }
  };

  // Duplicate items for a continuous, seamless infinite loop
  const duplicatedSteps = [...manufacturingSteps, ...manufacturingSteps];

  return (
    <section 
      ref={sectionRef}
      className="section manufacturing-flow-section" 
      style={{ 
        padding: '90px 0', 
        position: 'relative', 
        backgroundColor: 'var(--bg-primary)',
        overflow: 'hidden' 
      }}
    >
      {/* Subtle industrial background pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(rgba(99, 102, 241, 0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.8,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1360px', margin: '0 auto', padding: '0 20px' }}>
        {/* Section Header: Clean centered heading (top-right controls removed as requested) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 46px auto' }}
        >
          <span className="section-label">YARN PRODUCTION FLOW</span>
          <h2 
            className="section-title" 
            style={{ 
              marginBottom: '16px',
              fontSize: 'clamp(2rem, 3.8vw, 3rem)' 
            }}
          >
            Understanding the Yarn Manufacturing{" "}
            <span 
              style={{ 
                color: 'var(--color-accent)', 
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)'
              }}
            >
              Process
            </span>
          </h2>
          <p 
            className="section-desc" 
            style={{ 
              margin: '0 auto', 
              fontSize: '1.05rem', 
              lineHeight: 1.6,
              maxWidth: '620px'
            }}
          >
            An 8-stage precision sequence transforming raw polyester fibers into high-tenacity industrial yarn and thread.
          </p>
        </motion.div>

        {/* 
          CAROUSEL CONTAINER WITH:
          - Auto-scrolling continuous loop at normal speed
          - Pause on cursor hover, resume on mouse leave
          - Mouse wheel & drag support with auto-restart
          - Floating Left & Right Next/Prev buttons
        */}
        <div className="carousel-outer-wrapper">
          {/* Floating Homepage Previous Button */}
          <button
            type="button"
            onClick={handlePrevTrack}
            className="carousel-nav-btn prev-btn"
            aria-label="Previous manufacturing stage"
            title="Previous stage"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Floating Homepage Next Button */}
          <button
            type="button"
            onClick={handleNextTrack}
            className="carousel-nav-btn next-btn"
            aria-label="Next manufacturing stage"
            title="Next stage"
          >
            <ChevronRight size={22} />
          </button>

          {/* Auto-scrolling horizontal process track */}
          <div 
            ref={scrollTrackRef}
            className="process-auto-track"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeaveTrack}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
          >
            {duplicatedSteps.map((step, idx) => {
              const originalIndex = idx % manufacturingSteps.length;
              const IconComponent = STEP_ICONS[originalIndex] || Layers;

              return (
                <React.Fragment key={`${step.step}-${idx}`}>
                  <div 
                    className="process-card-item"
                    onClick={() => handleCardClick(originalIndex)}
                    title="Click to view full image"
                  >
                    {/* Card Image Container */}
                    <div className="card-image-wrap">
                      <img 
                        src={step.image} 
                        alt={`${step.step} — ${step.title}`}
                        className="card-media-image"
                        loading="eager"
                        draggable="false"
                      />
                      <div className="image-overlay-gradient" />
                      
                      {/* Subtle, neutral translucent dark glass number chip */}
                      <span className="step-number-chip">
                        {step.step}
                      </span>

                      {/* Expand indicator icon appearing on hover */}
                      <div className="card-zoom-indicator">
                        <Maximize2 size={13} />
                        <span>View Image</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="card-body-content">
                      <div className="card-title-row">
                        <div className="card-icon-pill">
                          <IconComponent size={17} />
                        </div>
                        <h3 className="card-title">{step.title}</h3>
                      </div>

                      <p className="card-summary">{step.desc}</p>

                      <div className="card-click-hint">
                        <span>Click to view photo</span>
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  </div>

                  {/* Directional Connector between cards */}
                  <div className="flow-connector" aria-hidden="true">
                    <div className="flow-connector-circle">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* 
          Bottom Action: Explore Full Manufacturing Detail Button 
          (Bottom numbers 01-08 and divider line removed as requested)
        */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: 'center', marginTop: '42px' }}
        >
          <Link
            to="/manufacturing"
            className="explore-manufacturing-btn"
          >
            <span>Explore Full Manufacturing Detail</span>
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>

      {/* 
        PURE IMAGE LIGHTBOX MODAL
        "click time only image display not need to diplay all details only image display not other"
        Features:
        - Large, crystal-clear high-res image
        - Back (<) and Next (>) buttons to cycle through stage images
        - Close (X) button
        - Clean minimal stage indicator pill
        - Esc key to close, Left/Right arrow keys to navigate
      */}
      <AnimatePresence>
        {activeModalIndex !== null && (
          <motion.div
            className="image-only-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setActiveModalIndex(null)}
          >
            <motion.div
              className="image-only-lightbox-container"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Close Button */}
              <button
                type="button"
                className="image-lightbox-close-btn"
                onClick={() => setActiveModalIndex(null)}
                aria-label="Close dialog"
                title="Close (Esc)"
              >
                <X size={22} />
              </button>

              {/* Large Image Frame */}
              <div className="image-lightbox-frame">
                <img
                  src={manufacturingSteps[activeModalIndex].image}
                  alt={manufacturingSteps[activeModalIndex].title}
                  className="image-lightbox-img"
                />

                {/* Back / Previous Button */}
                <button
                  type="button"
                  onClick={handlePrevModal}
                  className="image-lightbox-arrow-btn arrow-prev"
                  aria-label="Previous image"
                  title="Previous image (Left arrow)"
                >
                  <ChevronLeft size={28} />
                </button>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={handleNextModal}
                  className="image-lightbox-arrow-btn arrow-next"
                  aria-label="Next image"
                  title="Next image (Right arrow)"
                >
                  <ChevronRight size={28} />
                </button>

                {/* Subtle minimal caption overlay */}
                <div className="image-lightbox-caption">
                  <span className="image-caption-tag">
                    {manufacturingSteps[activeModalIndex].step} OF 08
                  </span>
                  <span className="image-caption-title">
                    {manufacturingSteps[activeModalIndex].title}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scoped CSS Styles */}
      <style>{`
        .carousel-outer-wrapper {
          position: relative;
          width: 100%;
        }

        /* Floating Homepage Next & Prev Navigation Buttons */
        .carousel-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 1.5px solid var(--border-light);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .carousel-nav-btn:hover {
          background: var(--color-accent);
          color: #ffffff;
          border-color: var(--color-accent);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.45);
        }

        .carousel-nav-btn.prev-btn {
          left: -12px;
        }

        .carousel-nav-btn.next-btn {
          right: -12px;
        }

        /* Auto-scrolling horizontal process track */
        .process-auto-track {
          display: flex;
          align-items: stretch;
          gap: 0;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 16px 20px 24px 20px;
          cursor: grab;
          user-select: none;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .process-auto-track:active {
          cursor: grabbing;
        }

        .process-auto-track::-webkit-scrollbar {
          display: none;
        }

        /* Process Card */
        .process-card-item {
          flex: 0 0 300px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
                      border-color 0.35s ease, 
                      box-shadow 0.35s ease;
        }

        .process-card-item:hover {
          transform: translateY(-6px);
          border-color: rgba(99, 102, 241, 0.45);
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.12), 
                      0 0 20px -2px rgba(99, 102, 241, 0.2);
        }

        [data-theme="dark"] .process-card-item {
          background-color: var(--bg-secondary);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        [data-theme="dark"] .process-card-item:hover {
          box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.7), 
                      0 0 24px -2px rgba(99, 102, 241, 0.3);
        }

        .card-image-wrap {
          position: relative;
          width: 100%;
          height: 185px;
          overflow: hidden;
          background-color: #0b0f17;
        }

        .card-media-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .process-card-item:hover .card-media-image {
          transform: scale(1.08);
        }

        .image-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.5) 100%);
          pointer-events: none;
        }

        /* Subtle neutral stage number chip */
        .step-number-chip {
          position: absolute;
          top: 12px;
          left: 12px;
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 0.76rem;
          letter-spacing: 0.06em;
          color: rgba(255, 255, 255, 0.95);
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.22);
          padding: 3px 8px;
          border-radius: 6px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
        }

        .card-zoom-indicator {
          position: absolute;
          bottom: 12px;
          right: 12px;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.72rem;
          font-weight: 600;
          color: #ffffff;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          padding: 3px 8px;
          border-radius: 6px;
          opacity: 0;
          transform: translateY(4px);
          transition: all 0.22s ease;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .process-card-item:hover .card-zoom-indicator {
          opacity: 1;
          transform: translateY(0);
        }

        .card-body-content {
          padding: 18px 18px 20px 18px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .card-icon-pill {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(99, 102, 241, 0.1);
          color: var(--color-accent);
          flex-shrink: 0;
          transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
        }

        .process-card-item:hover .card-icon-pill {
          transform: scale(1.08);
          background: var(--color-accent);
          color: #ffffff;
        }

        .card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.25;
          margin: 0;
        }

        .card-summary {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0 0 14px 0;
          flex-grow: 1;
        }

        .card-click-hint {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 10px;
          border-top: 1px solid var(--border-light);
          font-size: 0.78rem;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        .process-card-item:hover .card-click-hint {
          color: var(--color-accent);
        }

        /* Directional Arrow Connector */
        .flow-connector {
          flex: 0 0 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .flow-connector-circle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          color: var(--text-muted);
          transition: color 0.25s ease, border-color 0.25s ease;
        }

        .process-auto-track:hover .flow-connector-circle {
          color: var(--color-accent);
          border-color: rgba(99, 102, 241, 0.3);
        }

        /* Bottom CTA Button */
        .explore-manufacturing-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border-radius: 9999px;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
          background-color: var(--bg-primary);
          border: 1.5px solid var(--border-light);
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .explore-manufacturing-btn:hover {
          color: #ffffff;
          background-color: var(--color-accent);
          border-color: var(--color-accent);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);
          transform: translateY(-2px);
        }

        .explore-manufacturing-btn svg {
          transition: transform 0.3s ease;
        }

        .explore-manufacturing-btn:hover svg {
          transform: translateX(4px);
        }

        /* 
          IMAGE-ONLY LIGHTBOX MODAL
          "click time only image display not need to diplay all details only image display not other"
        */
        .image-only-lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .image-only-lightbox-container {
          position: relative;
          max-width: 1050px;
          width: 100%;
          max-height: 88vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-lightbox-frame {
          position: relative;
          width: 100%;
          max-height: 84vh;
          border-radius: 18px;
          overflow: hidden;
          background: #000000;
          box-shadow: 0 25px 70px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-lightbox-img {
          width: 100%;
          height: auto;
          max-height: 84vh;
          object-fit: contain;
          display: block;
        }

        /* Lightbox Close Button */
        .image-lightbox-close-btn {
          position: absolute;
          top: -48px;
          right: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 30;
          transition: all 0.2s ease;
        }

        .image-lightbox-close-btn:hover {
          background: var(--color-accent);
          border-color: var(--color-accent);
          transform: scale(1.1);
        }

        /* Large Image Nav Arrows */
        .image-lightbox-arrow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          transition: all 0.22s ease;
        }

        .image-lightbox-arrow-btn:hover {
          background: var(--color-accent);
          border-color: var(--color-accent);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 0 24px rgba(99, 102, 241, 0.65);
        }

        .image-lightbox-arrow-btn.arrow-prev {
          left: 20px;
        }

        .image-lightbox-arrow-btn.arrow-next {
          right: 20px;
        }

        /* Caption overlay */
        .image-lightbox-caption {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 8px 18px;
          border-radius: 9999px;
          color: #ffffff;
          pointer-events: none;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        }

        .image-caption-tag {
          font-family: var(--font-mono, monospace);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #a5b4fc;
        }

        .image-caption-title {
          font-size: 0.92rem;
          font-weight: 600;
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .manufacturing-flow-section {
            padding: 60px 0 !important;
          }

          .carousel-nav-btn {
            display: none !important;
          }

          .process-auto-track {
            padding: 16px 16px 24px 16px;
          }

          .process-card-item {
            flex: 0 0 270px;
          }

          .card-image-wrap {
            height: 170px;
          }

          .image-lightbox-arrow-btn {
            width: 42px;
            height: 42px;
          }

          .image-lightbox-arrow-btn.arrow-prev {
            left: 10px;
          }

          .image-lightbox-arrow-btn.arrow-next {
            right: 10px;
          }

          .image-lightbox-caption {
            bottom: 12px;
            padding: 6px 14px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ManufacturingSteps;
