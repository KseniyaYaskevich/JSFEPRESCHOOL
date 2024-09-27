const navMain = document.querySelector('.main-nav');
const navToggle = navMain.querySelector('.main-nav__toggle');
const mainNavList = navMain.querySelector('.main-nav__list');

const closeMenu = (evt) => {
        if (evt.target.classList.contains('main-nav__link')) {
                document.body.classList.remove('page__body--lock');
                navMain.classList.remove('main-nav--opened');
        }
}

const onNavToggleClick = () => {
        document.body.classList.toggle('page__body--lock');
        navMain.classList.toggle('main-nav--opened');
};

const onMainNavListClick = (evt) => {
        evt.preventDefault();

        const id = evt.target.getAttribute('href');
        const section = document.querySelector(id);
        if (id) {
                section.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                });
        }
        closeMenu(evt);
};

if (navToggle) {
        navToggle.addEventListener('click', onNavToggleClick);
}

if (mainNavList) {
        mainNavList.addEventListener('click', onMainNavListClick);
}