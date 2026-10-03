import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyConfig } from '../../data/config';

const ConnectCTA = () => {
  const whatsappUrl = companyConfig.whatsappUrl || "https://wa.me/919157135001?text=Hello%20Filyarn%20Industries%2C%20I%20would%20like%20to%20enquire%20about%20your%20yarn%20and%20sewing%20thread%20products.";

  return (
    <section className="connect-section" id="connect">
      {/* Subtle Ambient Background */}
      <div className="connect-backdrop" aria-hidden="true">
        <div className="connect-glow" />
      </div>

      <div className="container connect-container">
        <motion.div
          className="connect-content-box"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow with centered underline */}
          <div className="connect-eyebrow-wrap">
            <span className="connect-eyebrow-text">START A CONVERSATION</span>
            <div className="connect-eyebrow-line" />
          </div>

          {/* Main Editorial Heading */}
          <h2 className="connect-main-heading font-serif">
            <span className="connect-heading-title">Let's Connect:</span>
            <span className="connect-heading-accent">Ready to Source Quality Yarn?</span>
          </h2>

          {/* Subtitle Description */}
          <p className="connect-description">
            Get in touch for competitive pricing, bulk supply, and dependable delivery across India. Our team responds quickly to every B2B enquiry.
          </p>

          {/* Action Buttons Row */}
          <div className="connect-buttons-row">
            {/* Primary Action Button: Request a Quote */}
            <Link to="/contact" className="connect-quote-btn">
              <span>Request a Quote</span>
              <ArrowRight size={17} className="connect-btn-arrow" />
            </Link>

            {/* Secondary Action Button: WhatsApp Enquiry */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="connect-whatsapp-btn"
              aria-label="Enquire on WhatsApp"
            >
              <svg className="connect-whatsapp-icon" viewBox="0 0 24 24" width="21" height="21" fill="currentColor">
                <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12a9.97 9.97 0 0 0 1.524 5.29L2 22l4.897-1.28A9.92 9.92 0 0 0 12.004 22c5.495 0 9.992-4.5 9.992-10S17.499 2 12.004 2zm5.093 14.28c-.22.617-1.285 1.206-1.776 1.293-.446.08-1.03.149-2.984-.667a12.04 12.04 0 0 1-5.123-4.51c-.675-1.11-1.077-2.39-1.077-3.69 0-2.072 1.07-3.11 1.488-3.52.33-.326.68-.42.9-.42h.64c.2 0 .46.03.68.53.25.56.84 2.07.91 2.22.08.15.13.33.03.53-.1.2-.2.32-.36.5-.16.15-.33.32-.14.65.37.62.82 1.21 1.34 1.74a7.87 7.87 0 0 0 2.28 1.41c.32.15.52.12.71-.1.19-.22.84-.98.98-1.32.14-.34.28-.28.49-.2.2.08 1.32.62 1.55.73.22.1.37.16.42.25.06.09.06.52-.16 1.137z" />
              </svg>
              <span>WhatsApp Enquiry</span>
            </a>
          </div>

          {/* Typically responds within 2 hours Note */}
          <div className="connect-response-note">
            <Clock size={16} className="connect-clock-icon" />
            <span>Typically responds within 2 hours during business hours.</span>
          </div>
        </motion.div>
      </div>

      {/* Scoped CSS Styles */}
      <style>{`
        .connect-section {
          padding: 100px 0 105px 0;
          background-color: var(--bg-primary);
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .connect-backdrop {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .connect-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .connect-container {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
        }

        .connect-content-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Eyebrow */
        .connect-eyebrow-wrap {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 22px;
        }

        .connect-eyebrow-text {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #5051F9;
          text-transform: uppercase;
        }

        [data-theme="dark"] .connect-eyebrow-text {
          color: #818cf8;
        }

        .connect-eyebrow-line {
          width: 32px;
          height: 1.5px;
          background-color: #5051F9;
          margin-top: 10px;
          opacity: 0.85;
          border-radius: 999px;
        }

        [data-theme="dark"] .connect-eyebrow-line {
          background-color: #818cf8;
        }

        /* Main Editorial Heading */
        .connect-main-heading {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          margin-bottom: 20px;
          line-height: 1.22;
        }

        .connect-heading-title {
          font-size: clamp(2.3rem, 4.2vw, 3.2rem);
          font-weight: 600;
          color: var(--text-primary);
        }

        .connect-heading-accent {
          font-size: clamp(2.3rem, 4.2vw, 3.2rem);
          font-style: italic;
          font-weight: 400;
          color: #5051F9;
        }

        [data-theme="dark"] .connect-heading-accent {
          color: #818cf8;
        }

        /* Description Paragraph */
        .connect-description {
          font-size: 1.05rem;
          line-height: 1.68;
          color: var(--text-secondary);
          max-width: 660px;
          margin: 0 auto 38px auto;
        }

        /* Action Buttons Row */
        .connect-buttons-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        /* Button 1: Request a Quote (Solid Purple-Blue) */
        .connect-quote-btn {
          background: #5051F9;
          color: #ffffff;
          padding: 14px 32px;
          border-radius: 10px;
          font-size: 0.98rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(80, 81, 249, 0.32);
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .connect-quote-btn:hover {
          background: #4344e6;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(80, 81, 249, 0.45);
        }

        .connect-btn-arrow {
          transition: transform 0.25s ease;
        }

        .connect-quote-btn:hover .connect-btn-arrow {
          transform: translateX(4px);
        }

        /* Button 2: WhatsApp Enquiry (Outlined Green Card Button) */
        .connect-whatsapp-btn {
          background: #ffffff;
          color: #16a34a;
          border: 1.5px solid #22c55e;
          padding: 14px 30px;
          border-radius: 10px;
          font-size: 0.98rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(34, 197, 94, 0.08);
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        [data-theme="dark"] .connect-whatsapp-btn {
          background: #11141b;
          border-color: #22c55e;
          color: #4ade80;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        }

        .connect-whatsapp-btn:hover {
          background: #f0fdf4;
          border-color: #16a34a;
          color: #15803d;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(34, 197, 94, 0.22);
        }

        [data-theme="dark"] .connect-whatsapp-btn:hover {
          background: rgba(34, 197, 94, 0.15);
          color: #86efac;
        }

        .connect-whatsapp-icon {
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        .connect-whatsapp-btn:hover .connect-whatsapp-icon {
          transform: scale(1.1);
        }

        /* Response Note */
        .connect-response-note {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          color: var(--text-muted, #64748b);
          line-height: 1.5;
        }

        .connect-clock-icon {
          color: var(--text-muted, #64748b);
          flex-shrink: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 640px) {
          .connect-section {
            padding: 70px 0 75px 0;
          }

          .connect-heading-title,
          .connect-heading-accent {
            font-size: 2.1rem;
          }

          .connect-buttons-row {
            flex-direction: column;
            width: 100%;
            gap: 14px;
          }

          .connect-quote-btn,
          .connect-whatsapp-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ConnectCTA;
