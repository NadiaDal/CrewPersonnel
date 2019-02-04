const saveSearch = search =>
  new Promise(resolve => {
    localStorage.setItem('search', JSON.stringify(search));
    resolve();
  });

const getSearch = () =>
  new Promise(resolve => {
    const search = localStorage.getItem('search');

    resolve(JSON.parse(search));
  });

export default { saveSearch, getSearch };
