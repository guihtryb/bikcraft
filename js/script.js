const activeNavLink = (link) => {
  const urlBase = link.href.split('.html')[0];
  if(location.href.includes(urlBase)) {
      link.classList.add('active');
  }
}

const navLinks = document.querySelectorAll('.header-menu a');

navLinks.forEach(activeNavLink)

const activeParams = (param) => {
  if(param) {
    const element = document.getElementById(param);
    element.checked = true;
  }
}

const params = new URLSearchParams(location.search);

params.forEach(activeParams);


const questions = document.querySelectorAll('.questions button');

const resetActivedQuestion = () => {
  const prevAnswerActived = document.querySelector('dd.active');
  const prevQuestionActived = prevAnswerActived.previousElementSibling.firstChild;

  if (prevAnswerActived) {
    prevAnswerActived.classList.remove('active');
    prevQuestionActived.setAttribute('aria-expanded', false)
  }
};

const activeQuestion = ({ target }) => {
  resetActivedQuestion();

  const controls = target.getAttribute('aria-controls');
  const answer = document.getElementById(controls);
  const active = answer.classList.contains('active');

  target.setAttribute('aria-expanded', active);

  answer.classList.toggle('active');
};

questions.forEach((question) => question.addEventListener('click', activeQuestion));


const containerGallery = document.querySelector('.bike-images');

const gallery = document.querySelectorAll('.bike-images img');

const switchImage = ({ target }) => {
  const media = matchMedia('(min-width: 1000px)').matches;
  if (media) {
    containerGallery.prepend(target);
  }
}

const galleryEvents = (img) =>  {
  img.addEventListener('click', switchImage);
}

gallery.forEach(galleryEvents);

if(window.SimpleAnime) {
  new SimpleAnime();
}