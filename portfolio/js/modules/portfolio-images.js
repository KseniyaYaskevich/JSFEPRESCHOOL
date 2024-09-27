import { preloadImages } from './utils.js';

const portfolioButtonsWrapper = document.querySelector('.portfolio__buttons');
const portfolioButtons = document.querySelectorAll('.portfolio__button');
const portfolioImages = document.querySelectorAll('.portfolio__img');

const changeClassActive = (button) => {
        portfolioButtons.forEach(btn => btn.classList.remove('button--active'));
        button.classList.add('button--active');
};

const getImages = (button) => {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${button.dataset.season}/${index + 1}.jpg`);
};

const onPortfolioButtonsClick = (evt) => {
        const currentButton = evt.target;

        if (currentButton.classList.contains('portfolio__button')) {
                changeClassActive(currentButton);
                getImages(currentButton);
        }
};

preloadImages();

portfolioButtonsWrapper.addEventListener('click', onPortfolioButtonsClick);