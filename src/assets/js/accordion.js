(() => {
  const image1 = 'assets/images/landscape1.png';
  const image2 = 'assets/images/landscape2.png';
  const image3 = 'assets/images/landscape3.png';

  const mockItemInfo = {
    title: 'LOREM IPSUM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
  };

  const items = [
    { id: 1, uri: image1, ...mockItemInfo },
    { id: 2, uri: image2, ...mockItemInfo },
    { id: 3, uri: image3, ...mockItemInfo },
    { id: 4, uri: image1, ...mockItemInfo },
    { id: 5, uri: image2, ...mockItemInfo }
  ];

  const renderListItem = (item) => {
    const { id, uri, title, description } = item;
    return `<button id="item-${id}" class="clickable-item">
      <h3 class="item-title">
        ${title}
      </h3>
      <img src="assets/icons/arrowDownWhite.1x.png" alt="arrow" class="item-arrow" id="item-arrow-${id}">
    </button>
    <div id="item-content-${id}" class="item-content">
      <img src="${uri}" alt="Mountains" class="item-img">
      <p class="item-description">${description}</p>
    </div>`;
  };

  const insertItemsIntoItemList = () => {
    const container = document.querySelector('.accordion-container');
    container.innerHTML = items.map((item) => renderListItem(item)).join('');
  };

  const addClickEvent = () => {
    const clickableItems = document.querySelectorAll('.clickable-item');

    const itemContentList = document.querySelectorAll('.item-content');

    clickableItems.forEach((item, idx, arr) => {
      item.addEventListener('click', () => {
        item.classList.add('selected');

        const arrow = item.lastElementChild;
        arrow.src = 'assets/icons/arrowUp.1x.png';

        itemContentList[idx].classList.add('selected');

        arr.forEach((e, i) => {
          if (e !== item) {
            e.classList.remove('selected');
            const unselectedArrow = e.lastElementChild;
            unselectedArrow.src = 'assets/icons/arrowDownWhite.1x.png';
            itemContentList[i].classList.remove('selected');
          }
        });
      });
    });
  };

  insertItemsIntoItemList();
  addClickEvent();
})();
