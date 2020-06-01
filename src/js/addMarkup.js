import itemMarkup from './templates/itemTemplate.hbs';
import refs from './refs';
//================form=================================
export const addMarkupSearchForm = () => {
  const searchFormMarkup = `
        <form name = "searchForm" class="search-form" id="search-form">
            <input type="search" id="search" name="query" autocomplete="off" placeholder="Search images..."/>
            loadMoreData
        </form>`;
  refs.container.innerHTML = searchFormMarkup;

};

//================Gallery=================================
export const createGallery = dataArr => {
  const createItemUl = liItems => {
    const ulMarkup = `
        <ul class="gallery">
          ${liItems} 
        </ul>`;
    refs.container.insertAdjacentHTML('beforeend', ulMarkup);
  };

  const createItemLi = item => `<li class="galleryListItem">${item}</li>`;

  const createList = dataArr
    .map(item => createItemLi(itemMarkup(item)))
    .join('');

  createItemUl(createList);
};

//=======================================================
{
  // let elem = document.querySelector('#elem');
  // elem.addEventListener('click', function func() {
  // 	let input = document.createElement('input');
  // 	input.value = elem.innerHTML;
  // 	elem.innerHTML = '';
  // 	elem.appendChild(input);
  // 	input.addEventListener('blur', function() {
  // 		elem.innerHTML = this.value;
  // 		elem.addEventListener('click', func); // повесим событие обратно
  // 	});
  // 	elem.removeEventListener('click', func);
  // });
}
