const searchInput = document.querySelector('.search__input');
const searchClear = document.querySelector('.search__clear');

const clearSearch = () => {
    if (searchInput.value) {
        searchInput.value = '';
    }
}

searchClear.addEventListener('click', clearSearch);