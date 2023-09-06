import "./assets/styles/style.scss";
import "./index.scss";

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

// sous-titre-2

const sousTitre2 = document.querySelector(".sous-titre-2");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sousTitre2.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    sousTitre2.classList.add("active");
  }
});

// sous-titre-3

const sousTitre3 = document.querySelector(".sous-titre-3");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = sousTitre3.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    sousTitre3.classList.add("active");
  }
});

// text-container-1

const textContainer1 = document.querySelector(".text-container-1");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer1.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    textContainer1.classList.add("active");
  }
});

// text-container-3

const textContainer3 = document.querySelector(".text-container-3");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer3.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    textContainer3.classList.add("active");
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
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.7
  ) {
    textContainer5.classList.add("active");
  }
});

// text-container-6

const textContainer6 = document.querySelector(".text-container-6");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer6.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.7
  ) {
    textContainer6.classList.add("active");
  }
});
// text-container-7

const textContainer7 = document.querySelector(".text-container-7");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer7.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.7
  ) {
    textContainer7.classList.add("active");
  }
});
// text-container-8

const textContainer8 = document.querySelector(".text-container-8");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer8.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    textContainer8.classList.add("active");
  }
});

// div-text-container-1

const DivTextContainer1 = document.querySelector(".div-text-container-1");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = DivTextContainer1.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    DivTextContainer1.classList.add("active");
  }
});

// div-text-container-2

const DivTextContainer2 = document.querySelector(".div-text-container-2");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = DivTextContainer2.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    DivTextContainer2.classList.add("active");
  }
});

// div-text-container-3

const DivTextContainer3 = document.querySelector(".div-text-container-3");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = DivTextContainer3.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    DivTextContainer3.classList.add("active");
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

// text-7

const text7 = document.querySelector(".text-7");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text7.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    text7.classList.add("active");
  }
});

// text-8

const text8 = document.querySelector(".text-8");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text8.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    text8.classList.add("active");
  }
});

// text-9

const text9 = document.querySelector(".text-9");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text9.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    text9.classList.add("active");
  }
});

// // separator-ligne-1

// const separatorLigne1 = document.querySelector(".separator-ligne-1");

// window.addEventListener("scroll", () => {
//   const { scrollTop, clientHeight } = document.documentElement;

//   const topElementToTopViewport = separatorLigne1.getBoundingClientRect().top;

//   if (
//     scrollTop >
//     (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.7
//   ) {
//     separatorLigne1.classList.add("active");
//   }
// });

// // separator-ligne-2

// const separatorLigne2 = document.querySelector(".separator-ligne-2");

// window.addEventListener("scroll", () => {
//   const { scrollTop, clientHeight } = document.documentElement;

//   const topElementToTopViewport = separatorLigne2.getBoundingClientRect().top;

//   if (
//     scrollTop >
//     (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.7
//   ) {
//     separatorLigne2.classList.add("active");
//   }
// });

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
