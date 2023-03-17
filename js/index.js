import { galleryItems } from "./data.js";
const galleryRef = document.querySelector(".gallery");

// Change code below this line

galleryRef.innerHTML = createGalleryMarkUp();

function createGalleryMarkUp() {
  return galleryItems
    .map((elem) => {
      return `
        <a class="gallery__item" href="${elem.original}?cat=${elem.cat}">
          <img
            class="gallery__image"
            src="${elem.preview}"
            alt="${elem.alt}"
          />
          <div class="gallery__description">
          <h1 class="gallery__header">${elem.alt}</h1>
          <p class="gallery__text">
            ${elem.description}
          </p>
        </div>
      </a>
      `;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  caption: "true",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function (e) {
  // Do something…
  console.log(e);
});

gallery.on("error.simplelightbox", function (e) {
  console.log(e); // Some usefull information
});
