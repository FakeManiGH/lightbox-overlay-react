
import { LBOimage } from './lbo';
import './Test.css';
import image1 from './assets/scene1.jpg';
import image2 from './assets/wildlife1.jpg';
import image3 from './assets/wildlife2.jpg';
import image4 from './assets/wildlife3.jpg';
import image5 from './assets/wildlife4.jpg';


function Test() {
  return (
    <>
      <h1>LightBox Overlay - LBOreact</h1>
      <hr />
      <h3>Single image</h3>
      <div className='gallery'>
        <LBOimage src={image1} alt="Foggy Winter Scenery" title="Foggy Winter Scenery" />
      </div>
      <hr />
      <h3>LBO Gallery</h3>
      <p>Download enabled for image two and four.</p>
      <div className='gallery'>
        <LBOimage src={image2} alt="Roe deer resting on a field" gallery="wildlife" title="Roe deer resting on a field" />
        <LBOimage src={image3} alt="Roe deer on snowy field" gallery="wildlife" title="Roe deer on snowy field" download />
        <LBOimage src={image4} alt="Lizzard between wooden boards" gallery="wildlife" title="Lizzard between wooden boards" />
        <LBOimage src={image5} alt="Fox standing on hay bale" gallery="wildlife" title="Fox standing on hay bale" download />
      </div>
    </>
    
  );
}

export default Test;
