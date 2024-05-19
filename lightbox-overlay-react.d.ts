// This is a workaround to make it work with TypeScript
// Usage: import { LBO, LBOimage } from 'lightbox-overlay-react';

// LBO component
declare module 'lightbox-overlay-react' {
    import { ComponentType } from 'react';
  
    export const LBO: ComponentType<any>;
    export const LBOimage: ComponentType<any>;
}