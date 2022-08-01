import initAccordion from "./modules/accordion.js";
import initActivedParams from "./modules/activeBudgetParams.js"
import initActiveNavLinks from "./modules/activeNavLink.js";
import initGallery from "./modules/gallery.js";

window.onload = () => {
  initAccordion();
  initActivedParams();
  initActiveNavLinks();
  initGallery();
}
