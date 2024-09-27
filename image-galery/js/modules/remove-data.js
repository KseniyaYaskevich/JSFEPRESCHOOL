export const removeData = () => {
    const imageElements = document.querySelectorAll('.gallery__image');
    if (imageElements) {
        imageElements.forEach(element => {
            element.remove();
        });
    }
}