(() => {
  const handleSelectorButtonClick = () => {
    const btns = document.querySelectorAll('.btn-panel');
    const panels = document.querySelectorAll('.carousel-panel');

    btns.forEach((btn, idx, arr) => {
      btn.addEventListener('click', () => {
        btn.classList.add('selected');
        panels[idx].classList.add('selected');

        arr.forEach((e, i) => {
          if (e !== btn) {
            e.classList.remove('selected');
            panels[i].classList.remove('selected');
          }
        });
      });
    });
  };

  const handleScrollBtn = () => {
    const scrollBtn = document.querySelector('#scroll-btn');
    const sliderView = document.querySelector('#slider');

    scrollBtn.addEventListener('click', () => {
      sliderView.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  handleScrollBtn();
  handleSelectorButtonClick();
})();
