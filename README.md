# LightBox Overlay - LBOreact

LBOreact is a modern and simple lightbox for react projects. It uses styled-components, is easy to use, and customizable. LBO works for single image or image gallery. 

![LightBox Overlay Preview Image](lbo-react-preview.jpg)

### Contents

- [Overview](#overview)
- [Installation](#installation)
- [Setup](#setup)
- [License](#license-mit)

## Overview

- **Build for React:** LBOreact works on React 18. It has not been tested with older versions. If you're not using react in your project, for non-React projects, use[LBOgeneral](https://github.com/FakeManiGH/lightbox-overlay-general).
    - **Support:** React, Vite, TypeScript.
- **Styled Components:** LBOreact uses styled-components v6.1.11. Its included as peerDependency and is installed.
- **Responsive:** LBO works on all display sizes from desktop to mobile devices.
- **Functionality:** Images browsed inside LBO can be downloaded if downloading for image is allocated. LBO has build in fullscreen mode to browse images in fullscreen.
- **Navigation:**
    - **Mouse:** Use build in buttons with mouse.
    - **Keyboard:** LEFT and RIGHT arrows can be used for moving between images. ESC and BACKSPACE close the LBO.
    - **Touchscreen:** Move between images by swiping left and right. Close LBO by swiping up on screen.
- **Customization:** Styled components and animations can be modified inside lbo_elements -file. Semi basic CSS understanding is needed.

## Installation

To install LBOreact to your React project, type in or copy following snippet to your console:

```
npm install lightbox-overlay-react
```


### Manual Installation

1. Download latest release of LBOreact from [Github](https://github.com/FakeManiGH/lightbox-overlay-react).
2. Extract **/lbo** folder from .zip -file to your project /node_modules or other folder.
3. Install styled components to your project. [Read instructions](https://styled-components.com/docs/basics#installation).
4. import LBOimage components to your document and enjoy.

## Setup

#### Basic LBO gallery setup:

```JSX
import { LBOimage } from 'lightbox-overlay-react';

function App() {
return (
  <>
    <h4>LBO Gallery</h4>
    <div>
      <LBOimage src="path/of/image1" gallery="gallery1" title="img-title1" />
      <LBOimage src="path/of/image2" gallery="gallery1" title="img-title2" />
      <LBOimage src="path/of/image3" gallery="gallery1" title="img-title3" />
      <LBOimage src="path/of/image4" gallery="gallery1" title="img-title4" />
    </div>
  </>
)}

export default App;
```

 >Example above creates an App with gallery of 4 images, which are shown on page (add css to modify size). Images can be clicked and browsed inside lightbox as in preview image on top of the page.
 >>Example lacks **alt** attribute for image description, and by adding **download** attribute on LBOimage allocates download for set image inside the LBO.

 ## License (MIT)

 Copyright © 2024 Timo Anjala

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


