import React, { useState } from 'react';
import { Image, Video, FileImage, ShieldAlert } from 'lucide-react';

const Placeholder = ({ src, alt, className = "", ratioClass = "ratio-16-9", text = "Asset Placeholder" }) => {
  const [hasError, setHasError] = useState(!src);

  const getIcon = () => {
    if (src && src.includes('/products/')) return <FileImage size={32} className="skeleton-icon" />;
    if (src && src.includes('/leadership/')) return <Image size={32} className="skeleton-icon" />;
    if (src && src.includes('/manufacturing/')) return <Image size={32} className="skeleton-icon" />;
    return <Image size={32} className="skeleton-icon" />;
  };

  return (
    <div className={`skeleton-wrapper ${ratioClass} ${className}`} style={{ width: '100%' }}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="skeleton-container" style={{ width: '100%', height: '100%', borderRadius: 'inherit' }}>
          {getIcon()}
          <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '500', marginBottom: '4px' }}>
            {text}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            Aspect Ratio: {ratioClass.replace('ratio-', '').replace('-', '/')}
          </span>
          {src && (
            <div className="skeleton-path">
              {src.startsWith('/') ? `public${src}` : src}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Placeholder;
