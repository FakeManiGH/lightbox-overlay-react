// This is a workaround to make it work with TypeScript
// Usage: import LBOimage from 'lightbox-overlay-react';

// LBOimage props
export interface LBOimageProps {
    src: string;
    alt: string;
    gallery: string;
    title: string;
    download: boolean;
}

// LBO image component
declare const LBOimage: React.FC<LBOimageProps>;

export default LBOimage;