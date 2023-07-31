const modal = document.querySelector(".header__modal");
const burgerBtn = document.querySelector(".header__hamburger__box");
const closeBtn = document.querySelector(".close-btn");

const showModal = function () {
  modal.classList.toggle("hide");
};
const closeModal = function () {
  modal.classList.add("hide");
};

burgerBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);
