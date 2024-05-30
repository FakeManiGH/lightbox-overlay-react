import React, { useState, useEffect, useCallback } from 'react';
import { CloseIcon, DownloadIcon, FullScreenIcon, PrevIcon, NextIcon } from './lbo_icons';
import { LBOoverlay, LBObottomNav, LBObutton, LBOimg, LBOtopNav, LBOtxt, LBOuserNav } from './lbo_elements';    

// Lightbox Overlay component
const LBO = ({ initialIndex, LBOgallery, onClose, isvisible }) => {

    // Set the initial index of the current image
    const [currentIndex, setCurrentIndex] = useState(initialIndex !== -1 ? initialIndex : 0); // Initial index of the current image
    const [download, setDownload] = useState(false); // Set download to false by default
    const [key, setKey] = useState(Math.random()); // Random key for the image component (to force re-rendering of the image component)
    const [slidedirection, setslidedirection] = useState(''); // Slide direction for the image component

    // Get the current image
    const currentImage = LBOgallery[currentIndex];

    // Get title from the current image
    const title = currentImage.dataset.title || 'Image';

    // Get download attribute from the current image
    useEffect(() => {
        setDownload(currentImage.dataset.download !== undefined);
    }, [currentImage]);

    // Previous image in the gallery
    const handlePrev = useCallback(() => {
        if (LBOgallery.length > 1) {
            setslidedirection("left");
            setCurrentIndex(prevIndex => (prevIndex - 1 + LBOgallery.length) % LBOgallery.length);
            setKey(Math.random());
        }
    }, [LBOgallery.length]);

    // Next image in the gallery
    const handleNext = useCallback(() => {
        if (LBOgallery.length > 1) {
            setslidedirection("right");
            setCurrentIndex(prevIndex => (prevIndex + 1) % LBOgallery.length);
            setKey(Math.random());
        }
    }, [LBOgallery.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                handlePrev();
            }
            if (e.key === 'ArrowRight') {
                handleNext();
            }
            if (e.key === 'Escape' || e.key === 'Backspace') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleNext, handlePrev, onClose]);

    // Touch navigation
    useEffect(() => {
        let xLeft = 0;
        let xRight = 0;
        let yTop = 0;
        let yBottom = 0;

        const handleTouchStart = (e) => {
            xLeft = e.touches[0].clientX;
            yTop = e.touches[0].clientY;
        };

        const handleTouchEnd = (e) => {
            xRight = e.changedTouches[0].clientX;
            if (xLeft - xRight > 100) {
                handleNext();
            }
            if (xRight - xLeft > 100) {
                handlePrev();
            }
            yBottom = e.changedTouches[0].clientY;
            if (yTop - yBottom > 100) {
                onClose();
            }
        };

        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchend', handleTouchEnd);

        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [handleNext, handlePrev, onClose]);

    // Download the current image (if download attribute is present)
    const handleDownload = () => {
        const a = document.createElement('a');
        const title = currentImage.title || 'image';
        a.download = `${title.replace(/ /g, '_').toLowerCase()}.jpg`; // Set the download filename
        a.href = currentImage.src;
        a.click();
    };

    // Fullscreen mode
    const handleFullscreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    };

    return (
        <LBOoverlay $isvisible={isvisible}>
            <LBOtopNav>
                <LBOtxt>{title}</LBOtxt>
                <LBOuserNav>
                    <LBObutton onClick={handleFullscreen} title="Fullscreen"><FullScreenIcon /></LBObutton>
                    {download && <LBObutton title="Download this image" onClick={handleDownload}><DownloadIcon /></LBObutton>}
                    <LBObutton onClick={onClose} title="Close LBO"><CloseIcon /></LBObutton>
                </LBOuserNav>
            </LBOtopNav>

            <LBOimg 
                key={key} 
                $slidedirection={slidedirection} 
                src={currentImage.src} 
                alt={currentImage.alt}  
            />

            {LBOgallery.length > 1 && (
                <LBObottomNav>
                    <LBObutton onClick={handlePrev} title="Previous image in gallery"><PrevIcon /></LBObutton>
                    <LBOtxt>{currentIndex + 1} of {LBOgallery.length}</LBOtxt>
                    <LBObutton onClick={handleNext} title="Next image in gallery"><NextIcon /></LBObutton>
                </LBObottomNav>
            )}
        </LBOoverlay>
    );
};

export default LBO;