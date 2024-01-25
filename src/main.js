import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';

const API_KEY = "41829655-bf270f19af5dfab9e341d37e3";

const cardContainer = document.querySelector(".card-container");
const searchForm = document.querySelector(".search-form");
const loader = document.querySelector(".loader");
const fetchMoreBtn = document.querySelector(".btn-more-primary");

searchForm.addEventListener("submit", handleSearch);
fetchMoreBtn.addEventListener("click", fetchMorePhotos);

let page = 1;
let limit = 40;
let totalPages = 1;
let lastQuery = "";
let endMessage = null;
let cardHeight = 0;

fetchMoreBtn.style.display = "none";

const lightbox = new SimpleLightbox(".card-container a", {
  captionsData: "alt",
  captionDelay: 250,
});

function measureCardHeight() {
  const firstCard = document.querySelector('.gallery-item');
  if (firstCard) {
    const cardRect = firstCard.getBoundingClientRect();
    cardHeight = cardRect.height;
  }
}

function afterRender() {
  lightbox.refresh();
  measureCardHeight();
}

async function fetchMorePhotos() {
  if (page > totalPages) {
    return;
  }
  
  showLoader();
  
  try {
    page += 1;
    const data = await fetchPhotos(lastQuery, page, limit);
    renderPhotos(data);
    if (page >= totalPages) {
      fetchMoreBtn.style.display = "none";
      showEndMessage();
    }
    afterRender();
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
    scrollToNextGroup();
    lightbox.refresh();
  }
}

function scrollToNextGroup() {
  window.scrollBy({
    top: 2 * cardHeight,
    behavior: 'smooth',
  });
}

async function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const query = form.elements.query.value;

  if (!query.trim()) {
    return;
  }
  
  clearGallery();
  showLoader();

  try {
    const data = await fetchPhotos(query, page, limit);
    renderPhotos(data);
    totalPages = Math.ceil(100 / limit);
    page = 1;
    lastQuery = query;
    if (data.hits.length === 0) {
      fetchMoreBtn.style.display = "none";
    } else {
      fetchMoreBtn.style.display = "block";
    }
    afterRender();
  } catch (error) {
    onFetchError(error);
  } finally {
    form.reset();
    hideLoader();
    lightbox.refresh(); 
  }
}

async function fetchPhotos(query, page, limit) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${limit}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch photos');
  }
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

  cardContainer.innerHTML += markup;
  lightbox.refresh();
}

function onFetchError(error) {
  iziToast.show({
    position: 'topRight',
    messageColor: '#FFF',
    messageSize: "16px",
    close: false,
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

function showEndMessage() {
  endMessage = iziToast.error({
    position: "topRight",
    message: "We're sorry, but you've reached the end of search results."
  });
}


