// import getData from './apiService';
import { createGallery, addMarkupSearchForm } from './addMarkup.js';
import refs from './refs';
import apiService from './apiService';

addMarkupSearchForm();
const form = document.forms.searchForm;

export const searchItems = () => {
  form.addEventListener('submit', searchQuery);
  function searchQuery(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const inputValue = form.query.value;
    
    const gallery = document.querySelector('.gallery');
    gallery && gallery.remove();
    form.reset();
    apiService.getData(inputValue).then(data => createGallery(data));
  }
  
  
};

searchItems();

const incrementPage = () => {
  refs.loadMoreData.addEventListener('click', incr);
};
function incr() {
  const gallery = document.querySelector('.gallery');
  gallery && gallery.remove();
  apiService.loadMoreData().then(data => createGallery(data));
}

incrementPage();
