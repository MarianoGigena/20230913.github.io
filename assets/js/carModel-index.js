import { showFormModal , formFunction } from "./formModal.js";
import { showReviewModal,reviewFunction } from "./reviewModal.js";
import { galleryCarouselFunction } from "./galleryCarousel.js";
import { sheetShowButton, sheetShowFuntion } from "./sheetShow.js";

showFormModal();
formFunction();

showReviewModal();
reviewFunction();

galleryCarouselFunction();

sheetShowFuntion();
sheetShowButton();

ScrollReveal().reveal('.scrollreveal', { delay: 100 });