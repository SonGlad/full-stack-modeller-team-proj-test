const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
//Gallery
(() => {
  const images = document.querySelectorAll('.store-link');
  images.forEach(el => {
    const img = el.querySelector('img');
    el.href = img.src;
  });
})();