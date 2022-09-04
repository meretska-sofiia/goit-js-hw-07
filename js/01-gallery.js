import { galleryItems } from "./gallery-items.js";

const galleryWrapperEl = document.querySelector(".gallery");

const makeGallery = (galleryItems) => {
  const arr = [];
  galleryItems.map((el) => {
      const galleryItem = `
    <div class="gallery__item">
    <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
    </a>
    </div>`;
    arr.push(galleryItem);
  });
  const gallery = arr.join("");
  galleryWrapperEl.innerHTML = gallery;
};

makeGallery(galleryItems);

let instance;

galleryWrapperEl.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    event.target.src = event.target.dataset.source;

     instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    instance.show()
    
});

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
     instance.close()
 }
});


