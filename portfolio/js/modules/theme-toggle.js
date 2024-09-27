import * as storage from './storage.js'

const themeToggle = document.querySelector('.theme-toggle');

const onThemeToggleClick = () => {
        if (document.body.classList.contains('light-theme')) {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
        } else {
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
        }

        let theme = 'dark';

        if (document.body.classList.contains('light-theme')) {
                theme = 'light';
        }
        storage.setItem('theme', theme);

};

if (themeToggle) {
        themeToggle.addEventListener('click', onThemeToggleClick);
}