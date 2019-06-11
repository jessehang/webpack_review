import Cloud from './cloud.png';
import './cloud-image.scss';

class KiwiImage {
  render() {
    const img = document.createElement('img');
    img.src = Cloud;
    img.alt = 'Cloud';
    img.classList.add('cloud-image');

    const bodyDomElement = document.querySelector('body');
    bodyDomElement.appendChild(img);
  }
}

export default KiwiImage;