import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const API_KEY = "41829655-bf270f19af5dfab9e341d37e3";

const cardContainer = document.querySelector(".card-container");
const searchForm = document.querySelector(".search-form");
const loader = document.querySelector(".loader");

searchForm.addEventListener("submit", handleSearch);

const lightbox = new SimpleLightbox(".card-container a", {
  captionsData: "alt",
  captionDelay: 250,
});

function handleSearch(event) {
    event.preventDefault();
  
    const form = event.currentTarget;
    const query = form.elements.query.value;
  
    if(!query.trim()) {
        return;
    }
    
    clearGallery()
    showLoader();
  
      fetchPhotos(query)
        .then(renderPhotos)
        .catch(onFetchError)
        .finally(() => {
          form.reset();
          hideLoader();
        });
  }

function fetchPhotos(query) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function renderPhotos(data) {
  const photos = data.hits || [];

  
  if (photos.length === 0) {
    onFetchError(new Error("No images found."));
    return;
  }
  

  const markup = photos
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `
        <li class="gallery-item">
            <a href="${largeImageURL}" class="gallery-link">
                <img 
                class="gallery-image" 
                src="${webformatURL}" 
                alt="${tags}"
                width="360" 
                height="200"
                />
                <ul class="gallery-item-description">
                    <li class="comments" >Likes: ${likes}</li>
                    <li class="comments" >Views: ${views}</li>
                    <li class="comments" >Downloads: ${downloads}</li>
                    <li class="comments" >Comments: ${comments}</li>
                </ul>
            </a>
        </li>
        `
    )
    .join("");

  cardContainer.innerHTML = markup;
  lightbox.refresh();
}

function onFetchError(error) {
  iziToast.show({
    ...iziToastConfig,
    backgroundColor: '#EF4040',
    message: "Sorry, there are no images matching your search query. Please try again!",
  });
}

function clearGallery() {
  cardContainer.innerHTML = "";
}

function showLoader() {
  loader.classList.add("visible"); 
}

function hideLoader() {
  loader.classList.remove("visible"); 
}


const iziToastConfig = {
    position: 'topRight',
    messageColor: '#FFF',
    messageSize: "16px",
    close: false,
}

