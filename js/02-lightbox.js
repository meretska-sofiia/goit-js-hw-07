import { galleryItems } from './gallery-items.js';
const galleryWrapperEl = document.querySelector(".gallery");


const makeGallery = (galleryItems) => {
  const arr = [];
  galleryItems.map((el) => {
      const galleryItem = `
    <a class="gallery__item" href="${el.original}">
    <img
      class="gallery__image"
      data-alt="${el.description}"
      src="${el.preview}"
      title="${el.description}"
      alt="${el.description}"
    />
    </a>
   `;
    arr.push(galleryItem);
  });
  const gallery = arr.join("");
  galleryWrapperEl.innerHTML = gallery;
};

makeGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250});
