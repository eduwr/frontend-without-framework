(() => {
  const image1 = 'assets/images/landscape1.png';
  const image2 = 'assets/images/landscape2.png';
  const image3 = 'assets/images/landscape3.png';

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

  const renderCard = (data) => {
    return `<div class="card card-${data.id}">
      <img src="${data.uri}" alt="Moutains">
      <h2 class="white">${data.title}</h2>
      <p class="white">${data.description}</h2>
    </div>`;
  };

  const insertCardsToWrapper = () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.innerHTML = images.map((image) => renderCard(image)).join('');
  };

  const sliderAnimation = () => {
    const slider = document.querySelector('.slider-wrapper');

    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');

    let counter = 0;
    let shownPictureNumber = 3;

    window.addEventListener('resize', () => {
      counter = 0;
      const width = window.innerWidth;
      if (width < 900) {
        shownPictureNumber = 1;

        return;
      }
      shownPictureNumber = 3;
    });

    nextBtn.addEventListener('click', () => {
      if (
        (shownPictureNumber === 3 && counter >= 6) ||
        (shownPictureNumber === 1 && counter >= 8)
      ) {
        return;
      }
      const cards = document.querySelectorAll('.card');
      const size = cards[0].clientWidth;

      shownPictureNumber === 3 ? (counter = counter + 3) : counter++;

      slider.style.transform = `translateX(${-size * counter}px)`;
    });

    prevBtn.addEventListener('click', () => {
      const cards = document.querySelectorAll('.card');
      const size = cards[0].clientWidth;
      if (counter <= 0) {
        counter = 0;
        return;
      }
      if (counter <= 2 && shownPictureNumber === 3) {
        counter = 0;
      }
      shownPictureNumber === 3 ? (counter = counter - 3) : counter--;
      slider.style.transform = `translateX(${-size * counter}px)`;
    });
  };

  insertCardsToWrapper();
  sliderAnimation();
})();
