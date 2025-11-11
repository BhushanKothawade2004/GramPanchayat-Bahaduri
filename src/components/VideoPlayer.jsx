import { useRef, useEffect } from 'react';

const VideoPlayer = ({ onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Play video when modal opens
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle video play error silently
      });
    }

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-lg transition"
          aria-label="Close Video"
        >
          <svg 
            className="w-6 h-6 text-gray-800" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Container */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <div className="absolute top-0 left-0 w-full h-full rounded-t-lg bg-gray-200 flex items-center justify-center">
            <p className="text-gray-600">Video not available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

