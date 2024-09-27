const galleryContainer = document.querySelector('.gallery');

export const showData = (data) => {
    data.results.map((elem) => {
        const imageElement = document.createElement('img');
        imageElement.classList.add('gallery__image');
        imageElement.src = elem.urls.regular;
        imageElement.alt = elem.alt_description;
        galleryContainer.append(imageElement);
    })
}