const apiKey = '16752813-8ad3a541d9a85fd347d38c131';

const apiService = {
  pageNum: 1,
  perPage: 12,
  search: 'LOVE',

  getData(
    search = this.search,
    pageNum = this.pageNum,
    perPage = this.perPage,
  ) {
    this.pageNum = pageNum;
    this.search = search;
    const baseUrl = 'https://pixabay.com/api/';
    const rest = `?image_type=photo&orientation=horizontal&q=`;
    const searchParams = `${search}&page=${pageNum}&per_page=${perPage}&key=${apiKey}`;
    const url = baseUrl + rest + searchParams;
    console.log(url);

    return fetch(url)
      .then(response => {
        if (response.ok) return response.json();
      })
      .then(data => data.hits)
      .catch(error => console.warn('==Err==', error));
  },

  loadMoreData(e) {
    console.log(this);

    this.pageNum += 1;
    console.log(this.pageNum);
    return this.getData();
  },

  resetPage() {
    this.page = 1;
  },
};

apiService.resetPage()
console.log(apiService.resetPage());



export default apiService;
