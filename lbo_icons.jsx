import React from 'react';

// Download icon
export const DownloadIcon = () => (
    <div style={{ display: 'flex' }} dangerouslySetInnerHTML={{ __html: 
    `<svg width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
    <path d="m125,0C55.96,0,0,55.96,0,125s55.96,125,125,125,125-55.96,125-125S194.04,0,125,0Zm75,166.02v30H50v-55h30v25h45l-25-25-25-25h35V46.02h30v70h35l-25,25-25,25h45v-25h30v25Z"/>
    </svg>` }} />
);

// Close icon
export const CloseIcon = () => (
    <div style={{ display: 'flex' }} dangerouslySetInnerHTML={{ __html: 
    `<svg width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
    <path d="m125,0C55.96,0,0,55.96,0,125s55.96,125,125,125,125-55.96,125-125S194.04,0,125,0Zm78.84,180.51l-23.33,23.34-55.5-55.51-55.5,55.51-23.33-23.34,55.5-55.51-55.5-55.51,23.33-23.34,55.5,55.51,55.5-55.51,23.33,23.34-55.5,55.51,55.5,55.51Z"/>
    </svg>` }} />
);

// Previous icon
export const PrevIcon = () => (
    <div style={{ display: 'flex' }} dangerouslySetInnerHTML={{ __html: 
    `<svg width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
    <path d="m125,0C55.96,0,0,55.96,0,125s55.96,125,125,125,125-55.96,125-125S194.04,0,125,0Zm45,127.05v75l-62.5-37.5-62.5-37.5,62.5-37.5,62.5-37.5v75Z"/>
    </svg>` }} />
);

// Next icon
export const NextIcon = () => (
    <div style={{ display: 'flex' }} dangerouslySetInnerHTML={{ __html: 
    `<svg width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
    <path d="m125,0C55.96,0,0,55.96,0,125s55.96,125,125,125,125-55.96,125-125S194.04,0,125,0Zm17.5,162.5l-62.5,37.5V50l62.5,37.5,62.5,37.5-62.5,37.5Z"/>
    </svg>` }} />
);

// Fullscreen icon
export const FullScreenIcon = () => (
    <div style={{ display: 'flex' }} dangerouslySetInnerHTML={{ __html: 
    `<svg class="lightbox-download-icon" width="1em" height="1em" viewBox="0 0 250 250" fill="currentColor">
    <path d="m125,0C55.96,0,0,55.96,0,125s55.96,125,125,125,125-55.96,125-125S194.04,0,125,0Zm80,134.29v70.71s-70.71,0-70.71,0l24.76-24.76-34.04-34.04-34.05,34.05,24.75,24.75H45s0-70.71,0-70.71l24.75,24.75,34.05-34.05-34.04-34.04-24.76,24.76V45h70.71s-24.74,24.74-24.74,24.74l34.04,34.04,34.03-34.03-24.75-24.75h70.71v70.71s-24.75-24.75-24.75-24.75l-34.03,34.03,34.04,34.04,24.74-24.74Z"/>
    </svg>` }} />
);