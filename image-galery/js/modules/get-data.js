import { showData } from './show-data.js';
import { removeData } from './remove-data.js';

const searchButton = document.querySelector('.search__button');
const searchInput = document.querySelector('.search__input');
let url = 'https://api.unsplash.com/search/photos?query=random&per_page=30&orientation=landscape&client_id=5nl4VW3783SH8KiriINIH-NPFaPNWD__wNmWN1GXv60';

const getUrl = () => {
    const searchQuery = searchInput.value;
    const newSearchQuery = searchQuery.replace(/\s/g, ',');
    url = `https://api.unsplash.com/search/photos?query=${newSearchQuery}&per_page=30&orientation=landscape&client_id=5nl4VW3783SH8KiriINIH-NPFaPNWD__wNmWN1GXv60`;
    getData();
}

export async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    removeData();
    showData(data);
    console.log(data);
}

searchButton.addEventListener('click', getUrl);
searchInput.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.which == 13 || event.keyCode == 13) {
        searchButton.click();
    }
});