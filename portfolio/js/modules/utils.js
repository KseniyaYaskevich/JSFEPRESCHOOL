const seasons = ['winter', 'spring', 'summer', 'autumn'];

export const preloadImages = () => {
    seasons.forEach((value, i) => {
        const img = new Image();
        img.src = `./assets/img/${value}/${i+1}.jpg`;
    });
}