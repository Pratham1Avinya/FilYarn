import React, { useState, useEffect } from 'react';
import { indiaStatesData, featuredDealerStates } from '../data/indiaMapData';

const DealerNetwork = () => {
  const [activeStateName, setActiveStateName] = useState('Gujarat');
  const [hoveredStateName, setHoveredStateName] = useState(null);

  useEffect(() => {
    document.title = "Dealer Network – India | FILYARN INDUSTRIES";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore Filyarn Industries nationwide dealer network supplying quality spun polyester yarns and sewing threads across major textile states in India."
      );
    }
  }, []);

  const currentSelectedName = hoveredStateName || activeStateName || 'Gujarat';
  const currentStateObj = indiaStatesData.find((s) => s.name === currentSelectedName);

  return (
    <div className="dealer-network-page">
      <div className="container" style={{ maxWidth: '1240px' }}>

        {/* Header Section */}
        <div className="dealer-header-block">
          <span className="dealer-eyebrow-text">OUR PRESENCE</span>
          <h1 className="dealer-main-headline font-serif">
            Dealer Network – <span className="dealer-headline-accent">India</span>
          </h1>
          <p className="dealer-sub-headline">
            Supplying quality spun yarns &amp; threads through authorized dealers across major textile hubs in India.
          </p>
        </div>

        {/* 2-Column Split: Seamless Map on Left, Bulleted Text List on Right */}
        <div className="dealer-split-grid">

          {/* LEFT: Borderless India Vector Map */}
          <div className="dealer-map-panel">
            <div className="dealer-map-svg-frame">
              <svg
                viewBox="40 30 870 990"
                className="dealer-india-svg"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Interactive Map of India showing Filyarn Dealer Network"
              >
                {/* All State Outlines */}
                <g className="india-states-layer">
                  {indiaStatesData.map((state) => {
                    const isHighlighted = state.name === currentSelectedName;
                    const isFeatured = state.isFeatured;

                    return (
                      <path
                        key={state.id}
                        d={state.d}
                        className={`india-state-path ${isHighlighted ? 'state-active' : ''} ${isFeatured ? 'state-featured' : ''}`}
                        onMouseEnter={() => setHoveredStateName(state.name)}
                        onMouseLeave={() => setHoveredStateName(null)}
                        onClick={() => setActiveStateName(state.name)}
                      >
                        <title>{state.name}</title>
                      </path>
                    );
                  })}
                </g>

                {/* State Node Blue Points */}
                <g className="dealer-nodes-layer">
                  {indiaStatesData
                    .filter((s) => s.isFeatured && s.cx && s.cy)
                    .map((state) => {
                      const isSelected = state.name === currentSelectedName;
                      return (
                        <g
                          key={`node-${state.id}`}
                          transform={`translate(${state.cx}, ${state.cy})`}
                          className="dealer-hub-marker"
                          onMouseEnter={() => setHoveredStateName(state.name)}
                          onMouseLeave={() => setHoveredStateName(null)}
                          onClick={() => setActiveStateName(state.name)}
                          style={{ cursor: 'pointer' }}
                        >
                          {isSelected && (
                            <circle
                              r="16"
                              fill="#2563eb"
                              fillOpacity="0.25"
                            />
                          )}
                          <circle
                            r={isSelected ? 6.5 : 4.5}
                            fill={isSelected ? '#ffffff' : '#2563eb'}
                            stroke={isSelected ? '#2563eb' : '#ffffff'}
                            strokeWidth={isSelected ? 3 : 1.5}
                          />
                        </g>
                      );
                    })}
                </g>

                {/* State Name Floating Badge */}
                {currentStateObj && currentStateObj.cx && currentStateObj.cy && (
                  <g
                    className="dealer-tooltip-badge-group"
                    transform={`translate(${currentStateObj.cx + 14}, ${currentStateObj.cy - 12})`}
                    pointerEvents="none"
                  >
                    <rect
                      x="-4"
                      y="-14"
                      width={Math.max(currentStateObj.name.length * 8.5 + 32, 84)}
                      height="26"
                      rx="6"
                      className="tooltip-badge-bg"
                    />
                    <circle cx="6" cy="-1" r="3" fill="#2563eb" />
                    <text
                      x="15"
                      y="3"
                      className="tooltip-badge-text"
                      fontWeight="600"
                      fontSize="12"
                      fill="#0f172a"
                    >
                      {currentStateObj.name}
                    </text>
                  </g>
                )}
              </svg>
            </div>
          </div>

          {/* RIGHT: Pure Simple Text & Points (No boxes, No borders) */}
          <div className="dealer-sidebar-panel">
            <div className="sidebar-panel-header">
              <h3 className="sidebar-title">Dealer States</h3>
              <p className="sidebar-subtitle">Select a state to locate regional supply hubs</p>
            </div>

            {/* Clean 2-Column List of Simple State Names with Bullet Points */}
            <div className="states-simple-list">
              {featuredDealerStates.map((stName) => {
                const isSelected = stName === currentSelectedName;

                return (
                  <button
                    key={stName}
                    type="button"
                    className={`state-text-item ${isSelected ? 'state-active-item' : ''}`}
                    onMouseEnter={() => setHoveredStateName(stName)}
                    onMouseLeave={() => setHoveredStateName(null)}
                    onClick={() => setActiveStateName(stName)}
                  >
                    <span className="state-point" />
                    <span className="state-name-text">{stName}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Clean, Borderless & Box-free Styles */}
      <style>{`
        .dealer-network-page {
          padding: 50px 0 80px 0;
          background: var(--bg-primary);
          font-family: var(--font-sans);
          min-height: 100vh;
        }

        /* Header block */
        .dealer-header-block {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 40px auto;
        }

        .dealer-eyebrow-text {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #2563eb;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 10px;
        }

        [data-theme="dark"] .dealer-eyebrow-text {
          color: #60a5fa;
        }

        .dealer-main-headline {
          font-size: clamp(2.2rem, 3.8vw, 3.1rem);
          font-weight: 800;
          line-height: 1.2;
          color: var(--text-primary);
          margin: 0 0 12px 0;
        }

        .dealer-headline-accent {
          color: #2563eb;
        }

        [data-theme="dark"] .dealer-headline-accent {
          color: #60a5fa;
        }

        .dealer-sub-headline {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        /* 2-Column Split Grid (No outer box cards) */
        .dealer-split-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: start;
        }

        @media (max-width: 960px) {
          .dealer-split-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }

        /* Left Map Panel (Seamless, No Borders, No Card Box) */
        .dealer-map-panel {
          display: flex;
          flex-direction: column;
          background: transparent;
          border: none;
          padding: 0;
          box-shadow: none;
        }

        .dealer-map-svg-frame {
          width: 100%;
          aspect-ratio: 870 / 990;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dealer-india-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        /* SVG States */
        .india-state-path {
          fill: #eaedf0;
          stroke: #ffffff;
          stroke-width: 1.2;
          stroke-linejoin: round;
          cursor: pointer;
          transition: fill 0.18s ease;
        }

        [data-theme="dark"] .india-state-path {
          fill: #1e2636;
          stroke: #111723;
        }

        .india-state-path.state-featured:hover {
          fill: #bfdbfe;
        }

        [data-theme="dark"] .india-state-path.state-featured:hover {
          fill: #1e3a8a;
        }

        .india-state-path.state-active {
          fill: #2563eb !important;
          stroke: #ffffff !important;
          stroke-width: 1.8 !important;
        }

        [data-theme="dark"] .india-state-path.state-active {
          fill: #3b82f6 !important;
        }

        /* Tooltip */
        .tooltip-badge-bg {
          fill: #ffffff;
          stroke: #cbd5e1;
          stroke-width: 1;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.12));
        }

        [data-theme="dark"] .tooltip-badge-bg {
          fill: #0f172a;
          stroke: #334155;
        }

        .tooltip-badge-text {
          font-family: var(--font-sans);
        }

        [data-theme="dark"] .tooltip-badge-text {
          fill: #f8fafc;
        }

        /* Right Sidebar Panel (No box, no border) */
        .dealer-sidebar-panel {
          background: transparent;
          border: none;
          padding: 0;
          box-shadow: none;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .sidebar-panel-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sidebar-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .sidebar-subtitle {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Simple 2-Column List with points (NO BOXES, NO BORDERS) */
        .states-simple-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px 18px;
        }

        .state-text-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 0;
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-size: 0.98rem;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
          transition: color 0.15s ease, transform 0.15s ease;
        }

        .state-point {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #94a3b8;
          flex-shrink: 0;
          transition: all 0.15s ease;
        }

        .state-text-item:hover {
          color: #2563eb;
          transform: translateX(2px);
        }

        [data-theme="dark"] .state-text-item:hover {
          color: #60a5fa;
        }

        .state-text-item:hover .state-point {
          background: #2563eb;
          transform: scale(1.3);
        }

        [data-theme="dark"] .state-text-item:hover .state-point {
          background: #60a5fa;
        }

        .state-text-item.state-active-item {
          color: #2563eb;
          font-weight: 700;
        }

        [data-theme="dark"] .state-text-item.state-active-item {
          color: #60a5fa;
        }

        .state-text-item.state-active-item .state-point {
          background: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);
          transform: scale(1.25);
        }

        [data-theme="dark"] .state-text-item.state-active-item .state-point {
          background: #60a5fa;
          box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.3);
        }
      `}</style>
    </div>
  );
};

export default DealerNetwork;
