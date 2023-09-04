import "./comment-booster-mon-business-avec-le-digital.scss";
import "C:/Users/Azstras/OneDrive/Bureau/AURO-IT/src/assets/styles/style.scss";

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
