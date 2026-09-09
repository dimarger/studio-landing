const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const toast = document.getElementById('toast');
const modalForm = document.querySelector('.modal__form');
const openModalBtns = document.querySelectorAll('.js-open-modal');

openModalBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add('is-active');
  });
});

modalClose.addEventListener('click', function () {
  modal.classList.remove('is-active');
});

modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.classList.remove('is-active');
  }
});

modalForm.addEventListener('submit', function (e) {
  e.preventDefault();
  modal.classList.remove('is-active');
  modalForm.reset();
  showToast();
});

function showToast() {
  toast.classList.add('is-active');
  setTimeout(function () {
    toast.classList.remove('is-active');
  }, 3000);
}

const tabs = document.querySelectorAll('.tabs__btn');
const projectCards = document.querySelectorAll('.project-card');

tabs.forEach(function (tab) {
  tab.addEventListener('click', function () {
    tabs.forEach(function (t) {
      t.classList.remove('tabs__btn--active');
    });
    tab.classList.add('tabs__btn--active');

    const filter = tab.getAttribute('data-filter');

    projectCards.forEach(function (card) {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        card.classList.remove('is-hidden');
      } else {
        card.classList.add('is-hidden');
      }
    });
  });
});

const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(function (el) {
  observer.observe(el);
});
