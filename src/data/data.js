const image1 = require('../assets/images/landscape1.png');
const image2 = require('../assets/images/landscape2.png');
const image3 = require('../assets/images/landscape3.png');

const mockImageInfo = {
  title: 'LOREM IPSUM',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
};

const images = [
  { id: 1, uri: image1, ...mockImageInfo },
  { id: 2, uri: image2, ...mockImageInfo },
  { id: 3, uri: image3, ...mockImageInfo },
  { id: 4, uri: image1, ...mockImageInfo },
  { id: 5, uri: image2, ...mockImageInfo },
  { id: 6, uri: image3, ...mockImageInfo },
  { id: 7, uri: image1, ...mockImageInfo },
  { id: 8, uri: image2, ...mockImageInfo },
  { id: 9, uri: image3, ...mockImageInfo }
];

module.exports = JSON.stringify(images);
