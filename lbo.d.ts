// This is a workaround to make it work with TypeScript
// Usage: import LBO from 'lightbox-overlay-react';

// LBO props
export interface LBOProps {
    initialIndex: number;
    LBOgallery: Array<HTMLImageElement>; 
    onClose: () => void;
    isvisible: boolean;
}

// LBO component
declare const LBO: React.FC<LBOProps>;
  
export default LBO;