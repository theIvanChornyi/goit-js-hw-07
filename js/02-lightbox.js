import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryPhotoContainer = document.querySelector('.gallery');

function createGallery(galleryItemsArray, galleryContainer) {
  const galleryMarkupString = getMarkupString(galleryItemsArray);

  createGalleryEl(galleryMarkupString, galleryContainer);

  galleryContainer.addEventListener("click", zoomPicture);
}

createGallery(galleryItems, galleryPhotoContainer);


function getMarkupString(galleryItemsArray) {
  const MarkupString = galleryItemsArray
  .map(
    ({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
  )
  .join("");
  return MarkupString;
}
function createGalleryEl(markupString, galleryContainer) {
  galleryContainer.innerHTML = markupString;
}
function zoomPicture(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  let lightbox = new SimpleLightbox('.gallery a',
    {
      captions: true,
      captionType: 'attr',
      captionsData:	'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
      docClose: true,
    });

}