import React, { useState, useEffect } from 'react';

const DealershipInquiry = () => {
  useEffect(() => {
    document.title = "Dealership Inquiry | FILYARN INDUSTRIES";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Apply to become an authorized dealer for Filyarn Industries spun polyester yarns and threads. Submit your dealership inquiry directly to our sales desk."
      );
    }
  }, []);

  const [formData, setFormData] = useState({
    companyName: '',
    gstNumber: '',
    businessSince: '',
    turnover: '',
    teamMember: '',
    name: '',
    email: '',
    phone: '',
    website: '',
    address: '',
    comments: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getFormattedMessage = () => {
    return `*New Dealership Inquiry - Filyarn Industries*

• Company name: ${formData.companyName || 'N/A'}
• GST number: ${formData.gstNumber || 'N/A'}
• Bussiness last since: ${formData.businessSince || 'N/A'}
• Last year turn over: ${formData.turnover || 'N/A'}
• Team Member: ${formData.teamMember || 'N/A'}
• Name: ${formData.name || 'N/A'}
• Email: ${formData.email || 'N/A'}
• Phone number or Mobile number: ${formData.phone || 'N/A'}
• Website URL: ${formData.website || 'N/A'}
• Address: ${formData.address || 'N/A'}
• Comments: ${formData.comments || 'N/A'}`;
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(getFormattedMessage());
    window.open(`https://wa.me/919157135001?text=${text}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Required validation
    if (!formData.companyName || !formData.gstNumber || !formData.businessSince || !formData.turnover || !formData.name || !formData.email || !formData.phone || !formData.address) {
      alert("Please fill in all required fields marked with *");
      return;
    }

    // Directly open WhatsApp with formatted message
    handleWhatsAppSend();
  };

  return (
    <div className="dealership-inquiry-page">
      <div className="container" style={{ maxWidth: '960px', position: 'relative', zIndex: 2 }}>

        {/* Header Block */}
        <div className="inquiry-header-block">
          <span className="inquiry-eyebrow">PARTNER WITH US</span>
          <h1 className="inquiry-main-title font-serif">
            Inquiry <span className="title-bold">Form</span>
          </h1>
          <p className="inquiry-subtitle">
            Apply to become an authorized regional dealer. Fill out the commercial details below to connect directly with our management desk.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="inquiry-form-card">
          <form onSubmit={handleSubmit} className="inquiry-actual-form">
            <div className="inquiry-grid">

              {/* 1. Company name * */}
              <div className="form-field-group">
                <label className="field-label" htmlFor="companyName">
                  Company name <span className="req-star">*</span>
                </label>
                <div className="field-input-wrap">
                  <input
                    id="companyName"
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter registered company name"
                    required
                    className="inquiry-input"
                  />
                </div>
              </div>

              {/* 2. GST number * */}
              <div className="form-field-group">
                <label className="field-label" htmlFor="gstNumber">
                  GST number <span className="req-star">*</span>
                </label>
                <div className="field-input-wrap">
                  <input
                    id="gstNumber"
                    type="text"
                    name="gstNumber"
                    value={formData.gstNumber}
                    onChange={handleInputChange}
                    placeholder="24AAAAA0000A1Z5"
                    required
                    className="inquiry-input"
                  />
                </div>
              </div>

              {/* 3. Bussiness last since * */}
              <div className="form-field-group">
                <label className="field-label" htmlFor="businessSince">
                  Bussiness last since <span className="req-star">*</span>
                </label>
                <div className="field-input-wrap">
                  <input
                    id="businessSince"
                    type="text"
                    name="businessSince"
                    value={formData.businessSince}
                    onChange={handleInputChange}
                    placeholder="e.g. 2012 / 10+ years"
                    required
                    className="inquiry-input"
                  />
                </div>
              </div>

              {/* 4. Last year turn over * */}
              <div className="form-field-group">
                <label className="field-label" htmlFor="turnover">
                  Last year turn over <span className="req-star">*</span>
                </label>
                <div className="field-input-wrap">
                  <input
                    id="turnover"
                    type="text"
                    name="turnover"
                    value={formData.turnover}
                    onChange={handleInputChange}
                    placeholder="e.g. ₹ 5 Cr - ₹ 20 Cr"
                    required
                    className="inquiry-input"
                  />
                </div>
              </div>

              {/* 5. Team Member (Full Width or 2-col) */}
              <div className="form-field-group span-2">
                <label className="field-label" htmlFor="teamMember">
                  Team Member
                </label>
                <div className="field-input-wrap">
                  <input
                    id="teamMember"
                    type="text"
                    name="teamMember"
                    value={formData.teamMember}
                    onChange={handleInputChange}
                    placeholder="e.g. 15 Sales & Logistics Staff"
                    className="inquiry-input"
                  />
                </div>
              </div>

              {/* 6. Name * */}
              <div className="form-field-group">
                <label className="field-label" htmlFor="name">
                  Name <span className="req-star">*</span>
                </label>
                <div className="field-input-wrap">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Authorized Person / Contact Name"
                    required
                    className="inquiry-input"
                  />
                </div>
              </div>

              {/* 7. Email * */}
              <div className="form-field-group">
                <label className="field-label" htmlFor="email">
                  Email <span className="req-star">*</span>
                </label>
                <div className="field-input-wrap">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="contact@company.com"
                    required
                    className="inquiry-input"
                  />
                </div>
              </div>

              {/* 8. Phone number or Mobile number * */}
              <div className="form-field-group">
                <label className="field-label" htmlFor="phone">
                  Phone number or Mobile number <span className="req-star">*</span>
                </label>
                <div className="field-input-wrap">
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    required
                    className="inquiry-input"
                  />
                </div>
              </div>

              {/* 9. Website URL */}
              <div className="form-field-group">
                <label className="field-label" htmlFor="website">
                  Website URL
                </label>
                <div className="field-input-wrap">
                  <input
                    id="website"
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://www.example.com"
                    className="inquiry-input"
                  />
                </div>
              </div>

              {/* 10. Address * (Full width) */}
              <div className="form-field-group span-2">
                <label className="field-label" htmlFor="address">
                  Address <span className="req-star">*</span>
                </label>
                <div className="field-input-wrap">
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Office / Warehouse address, City, State, PIN"
                    required
                    className="inquiry-input"
                  />
                </div>
              </div>

              {/* 11. Comments (Textarea) */}
              <div className="form-field-group span-2">
                <label className="field-label" htmlFor="comments">
                  Comments
                </label>
                <div className="field-input-wrap">
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    placeholder="Comments / Requirements / Target Region / Products of Interest..."
                    rows={4}
                    className="inquiry-textarea"
                  />
                </div>
              </div>

            </div>

            {/* Submit Action */}
            <div className="form-submit-row">
              <button type="submit" className="inquiry-send-btn">
                <span>SEND NOW</span>
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Clean Styles */}
      <style>{`
        .dealership-inquiry-page {
          padding: 60px 0 100px 0;
          background: var(--bg-primary);
          font-family: var(--font-sans);
          min-height: 100vh;
        }

        /* Header block */
        .inquiry-header-block {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 36px auto;
        }

        .inquiry-eyebrow {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #2563eb;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 8px;
        }

        [data-theme="dark"] .inquiry-eyebrow {
          color: #60a5fa;
        }

        .inquiry-main-title {
          font-size: clamp(2.4rem, 4.2vw, 3.2rem);
          font-weight: 400;
          color: var(--text-primary);
          margin: 0 0 12px 0;
          letter-spacing: -0.01em;
        }

        .title-bold {
          font-weight: 800;
          color: #0f172a;
        }

        [data-theme="dark"] .title-bold {
          color: #ffffff;
        }

        .inquiry-subtitle {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        /* Card Container */
        .inquiry-form-card {
          background: var(--card-bg, #ffffff);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: 18px;
          padding: 36px 40px;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.04);
        }

        @media (max-width: 640px) {
          .inquiry-form-card {
            padding: 24px 20px;
            border-radius: 14px;
          }
        }

        [data-theme="dark"] .inquiry-form-card {
          background: #11151f;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.4);
        }

        /* 2-Column Form Fields Grid */
        .inquiry-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px 24px;
        }

        @media (max-width: 640px) {
          .inquiry-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .span-2 {
          grid-column: 1 / -1;
        }

        .form-field-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .field-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .req-star {
          color: #dc2626;
          margin-left: 2px;
        }

        .field-input-wrap {
          width: 100%;
        }

        .inquiry-input {
          width: 100%;
          height: 46px;
          padding: 0 16px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.92rem;
          color: var(--text-primary);
          outline: none;
          font-family: inherit;
          transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
        }

        .inquiry-input:focus {
          background: #ffffff;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        [data-theme="dark"] .inquiry-input {
          background: #182030;
          border-color: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        [data-theme="dark"] .inquiry-input:focus {
          background: #1c2538;
          border-color: #60a5fa;
          box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
        }

        .inquiry-textarea {
          width: 100%;
          padding: 14px 16px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.92rem;
          color: var(--text-primary);
          outline: none;
          font-family: inherit;
          resize: vertical;
          min-height: 110px;
          transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
        }

        .inquiry-textarea:focus {
          background: #ffffff;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        [data-theme="dark"] .inquiry-textarea {
          background: #182030;
          border-color: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        [data-theme="dark"] .inquiry-textarea:focus {
          background: #1c2538;
          border-color: #60a5fa;
          box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
        }

        /* Submit Button matching reference design */
        .form-submit-row {
          display: flex;
          justify-content: center;
          margin-top: 32px;
        }

        .inquiry-send-btn {
          background: #2563eb;
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 13px 46px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: background 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.28);
          font-family: inherit;
        }

        .inquiry-send-btn:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.38);
        }

        [data-theme="dark"] .inquiry-send-btn {
          background: #2563eb;
        }

        [data-theme="dark"] .inquiry-send-btn:hover {
          background: #1d4ed8;
        }

        .inquiry-send-btn:active {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default DealershipInquiry;
