
import { useState, useEffect, useCallback } from 'react';
import { CloseIcon, DownloadIcon, FullScreenIcon, PrevIcon, NextIcon } from './lbo_icons';
import { LBOoverlay, LBObottomNav, LBObutton, LBOimg, LBOtopNav, LBOtxt, LBOuserNav } from './lbo_elements';

const LBO = ({ initialIndex, LBOgallery, onClose, isVisible }) => {

    // Current image index (default is the first image in the gallery)
    const [currentIndex, setCurrentIndex] = useState(initialIndex !== -1 ? initialIndex : 0);

    // Get the current image and its index
    const currentImage = LBOgallery[currentIndex];

    // Set current image attributes
    currentImage.title = currentImage.getAttribute('data-title');

    // Download button visibility
    const [download, setDownload] = useState(false);

    // Slide direction
    const [slideDirection, setSlideDirection] = useState('');

    // Update download state when currentIndex changes
    useEffect(() => {
        setDownload(currentImage.getAttribute('data-download') !== null);
    }, [currentImage]);

    // Key for re-rendering the image
    const [key, setKey] = useState(Math.random());

    // Previous image in gallery
    const handlePrev = useCallback(() => {
        if (LBOgallery.length > 1) {
            setSlideDirection("left");
            setCurrentIndex(prevIndex => (prevIndex - 1 + LBOgallery.length) % LBOgallery.length);
            setKey(Math.random()); // Forces re-render
        }
    }, [LBOgallery.length]);

    // Next image in gallery
    const handleNext = useCallback(() => {
        if (LBOgallery.length > 1) {
            setSlideDirection("right");
            setCurrentIndex(prevIndex => (prevIndex + 1) % LBOgallery.length);
            setKey(Math.random()); // Forces re-render
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

    // Touch swipe navigation
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

    // Download image
    const handleDownload = () => {
        const a = document.createElement('a');
        const title = currentImage.title || 'image'; // Default title if not set
        a.download = `${title.replace(/ /g, '_').toLowerCase()}.jpg`; // Sets download filename
        a.href = currentImage.src;
        a.download = '';
        a.click();
    };

    // Fullscreen
    const handleFullscreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    };

    // Lightbox overlay
    return (
        <LBOoverlay isVisible={isVisible}>
            <LBOtopNav>
                <LBOtxt>{currentImage.title}</LBOtxt>
                <LBOuserNav>
                    <LBObutton onClick={handleFullscreen} title="Fullscreen"><FullScreenIcon /></LBObutton>
                    {download && <LBObutton title="Download this image" onClick={handleDownload}><DownloadIcon /></LBObutton>}
                    <LBObutton onClick={onClose} title="Close LBO"><CloseIcon /></LBObutton>
                </LBOuserNav>
            </LBOtopNav>

            <LBOimg 
                key={key} 
                slideDirection={slideDirection} 
                src={currentImage.src} 
                alt={currentImage.alt}  
            />

            {/* Bottom navigation (shown only if more than 1 image in gallery) */}
            {LBOgallery.length > 1 && (
                <LBObottomNav>
                    <LBObutton onClick={handlePrev} title="Previous image in gallery"><PrevIcon /></LBObutton>
                    <LBOtxt>{currentIndex + 1} of {LBOgallery.length}</LBOtxt>
                    <LBObutton onClick={handleNext} title="Next image in gallery"><NextIcon /></LBObutton>
                </LBObottomNav>
            )}
        </LBOoverlay>
    );

}

export default LBO;
module.exports = LBO;