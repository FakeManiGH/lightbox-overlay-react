// This is a workaround to make it work with TypeScript

// Usage: import { LBOoverlay, LBObottomNav, LBObutton, LBOimg, LBOtopNav, LBOtxt, LBOuserNav } from 'lightbox-overlay-react';

// LBOoverlay props
declare module './lbo_elements' {
    import { ComponentType } from 'react';
  
    export const LBOoverlay: ComponentType<any>;
    export const LBObottomNav: ComponentType<any>;
    export const LBObutton: ComponentType<any>;
    export const LBOimg: ComponentType<any>;
    export const LBOtopNav: ComponentType<any>;
    export const LBOtxt: ComponentType<any>;
    export const LBOuserNav: ComponentType<any>;
  }