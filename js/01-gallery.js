import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryPhotoContainer = document.querySelector(".gallery");

function createGallery(galleryItemsArray, galleryContainer) {
  

  const galleryMarkupString = getMarkupString(galleryItemsArray);

  createGalleryEl(galleryMarkupString, galleryContainer);

  galleryContainer.addEventListener("click", zoomPicture);

}

createGallery(galleryItems, galleryPhotoContainer);

function zoomPicture(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  const imageModal = basicLightbox.create(`
    <img
    src="${event.target.dataset.source}">
    `);
  
  imageModal.show();

  document.addEventListener('keyup', keyClose, { once: true });
  
  function keyClose(event) {
    if (event.code === 'Escape') {
      imageModal.close();
    }
  }
}

function createGalleryEl(markupString, galleryContainer) {
  galleryContainer.innerHTML = markupString;
}

function getMarkupString(galleryItemsArray) {
  const MarkupString = galleryItemsArray
  .map(
    ({ preview, original, description }) =>
    `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
      </a>
    </div>`
  )
  .join("");
  return MarkupString;
}
