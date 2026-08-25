const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox img');
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('[data-lightbox]').forEach((image) => {
  image.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove('open');
  lightboxImage.src = '';
  document.body.style.overflow = '';
}

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
