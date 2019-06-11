import Heading from './components/heading/heading.js';
import CloudImage from './components/cloud-image/cloud-image.js';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('cloud'));
const cloudImage = new CloudImage();
cloudImage.render();
