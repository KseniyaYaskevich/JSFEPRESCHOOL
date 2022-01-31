import './modules/menu.js';
import './modules/switch-language.js';
import './modules/theme-toggle.js';
import './modules/portfolio-images.js';
import * as storage from './modules/storage.js';
import { getTranslate } from './modules/switch-language.js';

const getLocalStorage = () => {
    const lang = storage.getItem('lang');

    if (lang) {
        getTranslate(lang);

        if (lang === 'ru') {
            ru.checked = true;
        }
        if (lang === 'en') {
            en.checked = true;
        }
    } else {
        en.checked = true;
    }

    const currentTheme = storage.getItem("theme");

    if (currentTheme == "light") {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
    }
}

window.addEventListener('load', getLocalStorage);

// Self-check---------------------------

console.log(`
                Portfolio #3

1. Смена изображений в секции portfolio +25
    Изображения разных времён года получаем из папок с соответствующими названиями
    Изображения можно заменить на другие с целью улучшения качества созданного приложения
        + при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio 
        отображаются изображения из папки с соответствующим названием +20
        + кнопка, по которой кликнули, становится активной т.е. выделяется стилем. 
        Другие кнопки при этом будут неактивными +5

2. Перевод страницы на два языка +25
    Для перевода можно воспользоваться файлом translate.js
    Содержание файла можно редактировать или полностью изменить с целью улучшения 
    качества созданного приложения
        + при клике по надписи ru англоязычная страница переводится на русский язык +10
        + при клике по надписи en русскоязычная страница переводится на английский язык +10
        + надписи en или ru, соответствующие текущему языку страницы, становятся активными 
        т.е. выделяются стилем +5

3. Переключение светлой и тёмной темы +25
    Внешний вид тёмной темы соответствует макету, который верстали в предыдущих частях задания, 
    внешний вид светлой темы соответствует одному из двух вариантов макетов на выбор. 
    Баллы за оба варианта одинаковые, выбирайте тот, который больше нравится.
        + Вариант первый. Блоки и секции header, hero, contacts, 
        footer остались без изменений, в оставшихся секциях цвет фона и шрифта 
        поменялись местами: фон стал белым, шрифт черным Макет в figma - светлая тема - 1
        + Вариант второй. Изменения затронули все блоки и секции, в том числе поменялись 
        фоновые изображения и есть два варианта меню на выбор Макет в figma - светлая тема - 2
        + На страницу добавлен переключатель при клике по которому:
                + тёмная тема приложения сменяется светлой +10
                + светлая тема приложения сменяется тёмной +10
                + после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют 
                внешний вид при наведении и клике и при этом остаются видимыми на странице 
                (нет ситуации с белым шрифтом на белом фоне) +5

4. Дополнительный функционал: выбранный пользователем язык отображения страницы 
и светлая или тёмная тема сохраняются при перезагрузке страницы +5

5. Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5
    Для получения максимального балла за пункт требований достаточно добавить кнопкам только один эффект
    Можно выбрать любой из предложенных эффектов или добавить свой собственный равноценный им по сложности

    З.ы. Мне не очень хотелось нагромождать кнопки, я пробовала разные варианты и остановилась, 
    как мне кажется, на подходящем для этого сайта. Если Вы думаете, что кнопки не достаточно сложны 
    и хороши, то прошу написать об этом, буду весьма благодарна :)

        85/85
`);