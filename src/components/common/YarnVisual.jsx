import React, { useState } from 'react';
import { Package, Eye, Layers, Disc, Sparkles } from 'lucide-react';

const ANGLE_METADATA = [
  { label: "Main Cone Profile", icon: Disc, desc: "Standard Industrial Yarn Package" },
  { label: "45° Oblique Angle", icon: Eye, desc: "Traverse Winding & Shoulder Density" },
  { label: "Cone Base & Core", icon: Layers, desc: "Precision Paper Tube & Barcode Base" },
  { label: "Filament Macro Spec", icon: Sparkles, desc: "Loop Crimp & Fibre Consistency" },
  { label: "Carton Packaging", icon: Package, desc: "Export Standard Moisture-Proof Carton" }
];

const YarnVisual = ({
  src,
  alt = "Yarn Product",
  product,
  viewIndex = 0,
  className = "",
  style = {},
  showBadge = true,
  onImageClick
}) => {
  const [hasError, setHasError] = useState(false);

  const angleInfo = ANGLE_METADATA[viewIndex % ANGLE_METADATA.length];
  const IconComponent = angleInfo.icon;
  const denierLabel = product?.denier || product?.specs?.count || "Industrial Yarn";
  const categoryLabel = product?.category || "Polyester";
  const isCationic = product?.name?.toLowerCase().includes("catonic") || product?.name?.toLowerCase().includes("cationic");
  const isBright = product?.name?.toLowerCase().includes("brt");

  // Palette tones reflecting yarn types (subtle, industrial, elegant)
  const threadColor = isCationic
    ? "rgba(168, 85, 247, 0.45)"
    : isBright
    ? "rgba(56, 189, 248, 0.55)"
    : "rgba(148, 163, 184, 0.4)";

  const accentTone = isCationic ? "#a855f7" : isBright ? "#38bdf8" : "#6366f1";

  return (
    <div
      className={`yarn-visual-wrapper ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '260px',
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: 'var(--border-radius)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--border-light)',
        userSelect: 'none',
        ...style
      }}
      onClick={onImageClick}
    >
      {/* Real Image Render (when file is supplied) */}
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
          onError={() => setHasError(true)}
        />
      ) : (
        /* High-Precision Industrial Yarn Bobbin/Cone Graphic */
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            position: 'relative',
            background: 'radial-gradient(circle at 50% 40%, rgba(99, 102, 241, 0.08) 0%, transparent 70%)'
          }}
        >
          {/* Subtle Industrial Grid Lines */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.04,
              backgroundImage: 'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* SVG Yarn Cone / Spool Artwork */}
          <div style={{ position: 'relative', width: '150px', height: '180px', display: 'flex', justifyContent: 'center' }}>
            <svg
              viewBox="0 0 160 200"
              width="100%"
              height="100%"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.18))' }}
            >
              <defs>
                {/* Paper Core Gradient */}
                <linearGradient id="paperCore" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#bfa888" />
                  <stop offset="50%" stopColor="#e8d9c5" />
                  <stop offset="100%" stopColor="#a38c6b" />
                </linearGradient>

                {/* Yarn Package Body Gradient */}
                <linearGradient id="yarnPackage" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="25%" stopColor="#334155" />
                  <stop offset="50%" stopColor="#475569" />
                  <stop offset="75%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>

                {/* Shading overlay */}
                <linearGradient id="coneHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
                </linearGradient>
              </defs>

              {/* Upper Paper Tube Tip */}
              <path
                d="M 68 18 L 92 18 L 94 36 L 66 36 Z"
                fill="url(#paperCore)"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="1"
              />
              <ellipse cx="80" cy="18" rx="12" ry="3.5" fill="#dfcfb8" stroke="rgba(0,0,0,0.3)" strokeWidth="0.8" />

              {/* Main Yarn Bobbin Trapezoid Profile */}
              <path
                d="M 52 38 L 108 38 C 114 75, 126 125, 134 165 C 134 172, 26 172, 26 165 C 34 125, 46 75, 52 38 Z"
                fill="url(#yarnPackage)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
              />

              {/* Traverse Winding Lines (Simulating High-Speed Precision Winding) */}
              <path d="M 54 48 L 130 156" stroke={threadColor} strokeWidth="1.2" strokeDasharray="3 2" />
              <path d="M 60 42 L 134 150" stroke={threadColor} strokeWidth="1" strokeDasharray="4 2" />
              <path d="M 106 48 L 30 156" stroke={threadColor} strokeWidth="1.2" strokeDasharray="3 2" />
              <path d="M 100 42 L 26 150" stroke={threadColor} strokeWidth="1" strokeDasharray="4 2" />
              
              <path d="M 44 80 Q 80 88 116 80" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
              <path d="M 38 115 Q 80 125 122 115" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
              <path d="M 32 145 Q 80 156 128 145" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />

              {/* Cone Bottom Paper Core Rim */}
              <path
                d="M 42 165 L 118 165 L 115 178 L 45 178 Z"
                fill="url(#paperCore)"
                stroke="rgba(0,0,0,0.3)"
                strokeWidth="0.8"
              />
              <ellipse cx="80" cy="178" rx="35" ry="5.5" fill="#a38c6b" />

              {/* Single Flying Thread Filament */}
              <path
                d="M 108 38 C 122 25, 138 20, 150 35 C 158 45, 144 65, 154 85"
                stroke={accentTone}
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="2 1"
              />
              <circle cx="154" cy="85" r="2.5" fill={accentTone} />
            </svg>
          </div>

          {/* Angle & View Spec Tag */}
          <div
            style={{
              marginTop: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(15, 23, 42, 0.08)',
              padding: '4px 10px',
              borderRadius: '20px',
              border: '1px solid var(--border-light)',
              fontSize: '0.72rem',
              color: 'var(--text-secondary)'
            }}
          >
            <IconComponent size={12} style={{ color: accentTone }} />
            <span>{angleInfo.label}</span>
          </div>

          {/* Product Denier & Model Tag */}
          <div style={{ marginTop: '6px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', display: 'block' }}>
              {product?.name || alt}
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              {denierLabel} • {categoryLabel}
            </span>
          </div>
        </div>
      )}

      {/* Top Left Spec Badge */}
      {showBadge && (
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(6px)',
            color: '#ffffff',
            padding: '3px 8px',
            borderRadius: '4px',
            fontSize: '0.7rem',
            fontWeight: '600',
            letterSpacing: '0.03em',
            border: '1px solid rgba(255,255,255,0.15)',
            zIndex: 2
          }}
        >
          {denierLabel}
        </div>
      )}

      {/* Top Right View Indicator Badge */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-secondary)',
          padding: '2px 8px',
          borderRadius: '4px',
          fontSize: '0.65rem',
          border: '1px solid var(--border-light)',
          fontWeight: '500',
          zIndex: 2
        }}
      >
        View {viewIndex + 1}/5
      </div>
    </div>
  );
};

export default YarnVisual;
