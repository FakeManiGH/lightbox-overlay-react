import React, { useState } from 'react';
import LBO from './lbo';

export const LBOimage = ({ src, alt, gallery = '', title, download }) => {
    const [isOpen, setIsOpen] = useState(false);  // Lightbox open/close state
    const [initialIndex, setInitialIndex] = useState(0);  // Initial index of the image in the gallery

    // Gets all images in the gallery with same data-lbo value
    const LBOgallery = Array.from(document.querySelectorAll(`img[data-lbo="${gallery}"]`));

    // Fading animation, on opening and closing the lightbox [state]
    const [isVisible, setIsVisible] = useState(true);

    // Handles opening the lightbox
    const handleOpen = () => {
        const initialIndex = LBOgallery.indexOf(document.querySelector(`img[src="${src}"]`));
        setInitialIndex(initialIndex);
        setIsOpen(true);
        setIsVisible(true);
        document.body.style.overflow = 'hidden';
    };

    // Handles closing the lightbox
    const handleClose = () => {
        setIsVisible(false);
        if (document.fullscreenElement) {
            document.exitFullscreen(); // Exit fullscreen mode if it's active
        }
        setTimeout(() => {
            setIsOpen(false);
            document.body.style.overflow = 'auto';
        }, 500);
    };

  return (
    <>
      <img 
        src={src} 
        alt={alt}
        data-download={download ? '' : null} 
        data-lbo={gallery} 
        data-title={title}
        style={{cursor: 'pointer'}} 
        onClick={handleOpen} 
        loading='lazy'
      />
      {isOpen && (
      <LBO
        initialIndex={initialIndex}
        LBOgallery={LBOgallery}
        onClose={handleClose}
        isVisible={isVisible}
      />
      )}
    </>
  );
};

export default LBOimage;
module.exports = LBOimage;
