import i18Obj from './translate.js';
import * as storage from './storage.js'

const ru = document.querySelector('#ru');
const en = document.querySelector('#en');

const getString = (language, key) => {
    if (i18Obj[language].hasOwnProperty(key)) {
        return i18Obj[language][key];
    }
    return key;
}

export const getTranslate = (language) => {
    const dataElements = document.querySelectorAll('[data-i18]');
    const placeholdersElements = document.querySelectorAll('[data-placeholder]');

    for (const currentElement of dataElements) {
        currentElement.innerHTML = getString(language, currentElement.getAttribute('data-i18'));
    }

    for (const placeholder of placeholdersElements) {
        placeholder.setAttribute('placeholder', getString(language, placeholder.getAttribute('data-placeholder')));
    }
}

const saveLangHandler = (evt) => {
    let lang = evt.target.id;
    storage.setItem('lang', lang);
    getTranslate(lang);
}

ru.addEventListener('click', saveLangHandler);
en.addEventListener('click', saveLangHandler);