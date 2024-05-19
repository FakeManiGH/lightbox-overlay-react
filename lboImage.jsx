import React, { useState } from 'react';
import LBO from './lbo';

// LBOimage component
const LBOimage = ({ src, alt, gallery, title, download }) => {

    const [isOpen, setIsOpen] = useState(false);  // Lightbox open/close state
    const [initialIndex, setInitialIndex] = useState(0);  // Initial index of the image in the gallery

    let LBOgallery = Array.from(document.querySelectorAll(`img[data-lbo="${gallery}"]`));

    if (LBOgallery.length === 0) {
        LBOgallery = [document.querySelector(`img[src="${src}"]`)];
    }

    // Fading animation, on opening and closing the lightbox [state]
    const [isvisible, setisvisible] = useState(true);

    // Handles opening the lightbox
    const handleOpen = () => {
        const initialIndex = LBOgallery.indexOf(document.querySelector(`img[src="${src}"]`));
        setInitialIndex(initialIndex);
        setIsOpen(true);
        setisvisible(true);
        document.body.style.overflow = 'hidden';
    };

    // Handles closing the lightbox
    const handleClose = () => {
        setisvisible(false);
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
        isvisible={isvisible}
      />
      )}
    </>
  );
};

export default LBOimage;