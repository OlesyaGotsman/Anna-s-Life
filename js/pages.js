import { galleryItems } from "./data.js";
const titleContainerRef = document.querySelector(".header__description");
const galleryRef = document.querySelector(".gallery");

// Change code below this line

galleryRef.innerHTML = createGalleryMarkUp();

function createGalleryMarkUp() {
  let params = new URL(document.location).searchParams;
  let cat = parseInt(params.get("cat")); // is the number 18
  if (!cat) cat = 0;
  titleContainerRef.innerHTML = galleryItems[cat].description;

  return galleryItems[cat].data
    .map((elem) => {
      return `
        <a class="gallery__item" href="${elem.original}">
          <img
            class="gallery__image"
            src="${elem.preview}"
            alt="${elem.alt}"
          />
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
