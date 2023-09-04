import "./je-change-mon-erp.scss";
import "C:/Users/Azstras/OneDrive/Bureau/AURO-IT/src/assets/styles/style.scss";

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
