import "./grand-comptes.scss";
import "C:/Users/Azstras/OneDrive/Bureau/AURO-IT/src/assets/styles/style.scss";

// div-text-1

const divText1 = document.querySelector(".div-text-1");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = divText1.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    divText1.classList.add("active");
  }
});

// div-text-2

const divText2 = document.querySelector(".div-text-2");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = divText2.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    divText2.classList.add("active");
  }
});

// sous-titre-1

const sousTitre1 = document.querySelector(".sous-titre-1");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sousTitre1.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    sousTitre1.classList.add("active");
  }
});

// text-container-2

const textContainer2 = document.querySelector(".text-container-2");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer2.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    textContainer2.classList.add("active");
  }
});

// text-container-4

const textContainer4 = document.querySelector(".text-container-4");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer4.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    textContainer4.classList.add("active");
  }
});

// text-container-5

const textContainer5 = document.querySelector(".text-container-5");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer5.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    textContainer5.classList.add("active");
  }
});

// text-1

const text1 = document.querySelector(".text-1");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text1.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    text1.classList.add("active");
  }
});

// text-2

const text2 = document.querySelector(".text-2");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text2.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    text2.classList.add("active");
  }
});

// text-3

const text3 = document.querySelector(".text-3");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text3.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    text3.classList.add("active");
  }
});

// text-4

const text4 = document.querySelector(".text-4");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text4.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    text4.classList.add("active");
  }
});

// text-5

const text5 = document.querySelector(".text-5");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text5.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    text5.classList.add("active");
  }
});

// text-6

const text6 = document.querySelector(".text-6");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text6.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    text6.classList.add("active");
  }
});

// mail-content-1

const mailContent1 = document.querySelector(".mail-content-1");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = mailContent1.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    mailContent1.classList.add("active");
  }
});

// mail-content-2

const mailContent2 = document.querySelector(".mail-content-2");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = mailContent2.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    mailContent2.classList.add("active");
  }
});

// contact

const contact = document.querySelector(".contact");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = contact.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    contact.classList.add("active");
  }
});

// footer

const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = footer.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    footer.classList.add("active");
  }
});

// text-footer

const textFooter = document.querySelector(".text-footer");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textFooter.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textFooter.classList.add("active");
  }
});

// copyright

const copyright = document.querySelector(".copyright");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = copyright.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    copyright.classList.add("active");
  }
});
