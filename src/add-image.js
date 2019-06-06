import Cloud from './cloud.png'

function addImage() {
  const img = document.createElement('img');
  img.alt = "Cloud";
  img.width = 300;
  img.src = Cloud;

  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;