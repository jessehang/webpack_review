import Heading from './components/heading/heading.js';
import CloudImage from './components/cloud-image/cloud-image.js';
import React from 'react';

const heading = new Heading();
heading.render('cloud');
const cloudImage = new CloudImage();
cloudImage.render();
