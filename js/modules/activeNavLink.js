const activeNavLink = (link) => {
  const urlBase = link.href.split('.html')[0];
  if (location.href.includes(urlBase)) {
      link.classList.add('active');
  }
};

const initActiveNavLinks = () => {
  const navLinks = document.querySelectorAll('.header-menu a');

  navLinks.forEach(activeNavLink);
};

export default initActiveNavLinks;
