const containerGallery = document.querySelector('.bike-images');

const switchImage = ({ target }) => {
  const media = matchMedia('(min-width: 1000px)').matches;
  if (media) {
    containerGallery.prepend(target);
  }
};

const galleryEvents = (img) =>  {
  img.addEventListener('click', switchImage);
};

const initGallery = () => {
  const gallery = document.querySelectorAll('.bike-images img');

  gallery.forEach(galleryEvents);
};

if(window.SimpleAnime) {
  new SimpleAnime();
}

export default initGallery;
