// This is a workaround to make it work with TypeScript
// Usage: import LBO from 'lightbox-overlay-react';

// LBO icon props
declare module './lbo_icons' {
    import { ComponentType } from 'react';
  
    export const CloseIcon: ComponentType<any>;
    export const DownloadIcon: ComponentType<any>;
    export const FullScreenIcon: ComponentType<any>;
    export const PrevIcon: ComponentType<any>;
    export const NextIcon: ComponentType<any>;
}