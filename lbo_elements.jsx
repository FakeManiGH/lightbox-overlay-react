import styled , { css, keyframes } from 'styled-components';

// LightBox Overlay
export const LBOoverlay = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    box-sizing: border-box;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #11111175;
    z-index: 9997;
    overflow: hidden;
    backdrop-filter: blur(5px);
    animation: ${props => props.$isvisible ? css`${fadeIn} 0.5s ease forwards` : css`${fadeOut} 0.5s ease forwards`};
`;

// Image
export const LBOimg = styled.img`
    position: relative;
    flex-grow: 1;
    box-sizing: border-box;
    height: 100%;
    max-height: 100vh;
    width: 100%;
    padding: 0 10px 0 10px;
    object-fit: contain;
    user-select: none;
    pointer-events: none;
    margin: auto;
    border-radius: 10px;
    z-index: 9998;
    animation: ${props => {
        if (props.$slidedirection === "left") {
            return css`${slideLeft} 0.4s ease`;
        } else if (props.$slidedirection === "right") {
            return css`${slideRight} 0.4s ease`;
        } else {
            return 'none';
        }
    }};
`;

// Top navigation bar
export const LBOtopNav = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding: 12px 15px;
    gap: 10px;
    background: #11111195;
    transition: background 0.3s;

    &:hover {
        background: #111111;
    }
`;

// Bottom navigation bar
export const LBObottomNav = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding: 12px 15px;
    gap: 10px;
    background: #11111195;
    transition: background 0.3s;

    &:hover {
        background: #111111;
    }
`;

// User navigation bar
export const LBOuserNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

// Text
export const LBOtxt = styled.p`
    color: #fff;
    font-family: system-ui, sans-serif;
    font-size: 1em;
    font-weight: 600;
    pointer-events: none;
    -webkit-user-select: none;
    user-select: none;
`;

// Button
export const LBObutton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #e6e6e6;
    background: transparent;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: #ff9900;
    }
`;

// Animation keyframes slideInLeft and slideInRight
const slideLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Animation keyframes fadeOut and fadeIn
const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
