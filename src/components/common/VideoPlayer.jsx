import React, { useRef, useState } from 'react';
import { Play, Pause, Video, AlertTriangle } from 'lucide-react';
import Placeholder from './Placeholder';

const VideoPlayer = ({ src, poster, ratioClass = "ratio-16-9", className = "", label = "Corporate Video" }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Autoplay / playback blocked or file missing: ", err);
        setHasError(true);
      });
    }
  };

  const handleVideoError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`skeleton-wrapper ${ratioClass} ${className}`} style={{ width: '100%' }}>
        <div className="skeleton-container" style={{ width: '100%', height: '100%', borderRadius: 'inherit', padding: '24px' }}>
          <Video size={40} className="skeleton-icon" />
          <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '600', marginBottom: '4px' }}>
            {label} Slot
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
            (Native HTML5 Video Player Fallback)
          </span>
          <div className="skeleton-path">
            public{src}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`video-player-container ${ratioClass} ${className}`} style={{ position: 'relative', width: '100%', borderRadius: 'var(--border-radius)', overflow: 'hidden', border: '1px solid var(--border-light)', backgroundColor: '#000' }}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        controls={isPlaying}
        onClick={togglePlay}
        onError={handleVideoError}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={src} type="video/mp4" onError={handleVideoError} />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <button
          onClick={togglePlay}
          aria-label="Play video"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            backgroundColor: 'rgba(197, 168, 128, 0.95)',
            border: 'none',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
            e.currentTarget.style.backgroundColor = 'var(--color-accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
            e.currentTarget.style.backgroundColor = 'rgba(197, 168, 128, 0.95)';
          }}
        >
          <Play size={28} fill="currentColor" style={{ marginLeft: '4px' }} />
        </button>
      )}

      {/* Video Label Overlay */}
      {!isPlaying && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          padding: '6px 14px',
          borderRadius: '4px',
          fontSize: '0.8rem',
          color: '#fff',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          zIndex: 5
        }}>
          {label}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
