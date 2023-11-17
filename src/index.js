import "./assets/styles/style.scss";
import "./index.scss";

// menu general

const votreBesoincloseOpenMenu = document.querySelector(
  ".votre-besoin-close-open-menu"
);
const notreReseaucloseOpenMenu = document.querySelector(
  ".notre-reseau-close-open-menu"
);

notreReseaucloseOpenMenu.addEventListener("mouseover", () => {
  votreBesoincloseOpenMenu.style.display = "none";
});
notreReseaucloseOpenMenu.addEventListener("mouseout", () => {
  votreBesoincloseOpenMenu.style.display = "flex";
});
votreBesoincloseOpenMenu.addEventListener("mouseover", () => {
  notreReseaucloseOpenMenu.style.display = "none";
});
votreBesoincloseOpenMenu.addEventListener("mouseout", () => {
  notreReseaucloseOpenMenu.style.display = "flex";
});

// menu-xs

const menuXsContent = document.querySelector(".menu-xs-content");
const btnOpen = document.querySelector(".btn-open-close");
const btnBarre1 = document.querySelector(".btn-barre-1");
const btnBarre2 = document.querySelector(".btn-barre-2");

// btn open/close

btnOpen.addEventListener("click", () => {
  const menuTransform1 = getComputedStyle(btnBarre1).transform;
  const menuTransform2 = getComputedStyle(btnBarre2).transform;

  const rotation1 = getRotationAngle(menuTransform1);
  const rotation2 = getRotationAngle(menuTransform2);

  btnBarre1.style.transform = rotation1 === 0 ? "rotate(45deg)" : "rotate(0)";
  btnBarre2.style.transform = rotation2 === 0 ? "rotate(-45deg)" : "rotate(0)";
});

function getRotationAngle(transformValue) {
  if (!transformValue) {
    return 0;
  }

  const transformValues = transformValue.split("(");
  if (transformValues.length < 2) {
    return 0;
  }

  const matrixValues = transformValues[1].split(")")[0].split(",");
  const a = parseFloat(matrixValues[0]);
  const b = parseFloat(matrixValues[1]);
  const c = parseFloat(matrixValues[2]);
  const d = parseFloat(matrixValues[3]);

  const angle = Math.atan2(b, a) * (180 / Math.PI);

  console.log("Raw angle:", angle);

  const positiveAngle = angle < 0 ? angle + 360 : angle;

  console.log("Positive angle:", positiveAngle);

  return positiveAngle;
}

// menu open/close

btnOpen.addEventListener("click", () => {
  const menuDisplay = getComputedStyle(menuXsContent).display;

  if (menuDisplay === "none") {
    menuXsContent.style.display = "flex";
  } else {
    menuXsContent.style.display = "none";
    menuXsLangueContainer.style.display = "none";
  }
});

// menu langue open/close

const btnCloseMenuLangue = document.querySelector(".btn-close-menu-langue-xs");
const btnOpenMenuLangue = document.querySelector(".btn-open-menu-langue-xs");
const btnMenuXsContentlangueClose = document.querySelector(
  ".btn-close-menu-langue-xs-content"
);
const menuXsLangueContainer = document.querySelector(
  ".menu-xs-langue-container"
);

btnOpenMenuLangue.addEventListener("click", () => {
  menuXsLangueContainer.style.display = "flex";
  menuXsLangueContainer.classList.remove("animation-close-menu-langue-xs");
  btnMenuXsContentlangueClose.classList.remove(
    "btn-close-menu-langue-xs-close"
  );
});

btnCloseMenuLangue.addEventListener("click", () => {
  menuXsLangueContainer.classList.add("animation-close-menu-langue-xs");
  setTimeout(() => {
    menuXsLangueContainer.classList.remove("animation-close-menu-langue-xs");
    menuXsLangueContainer.style.display = "none";
  }, 990);
});
btnCloseMenuLangue.addEventListener("click", () => {
  btnMenuXsContentlangueClose.classList.add("btn-close-menu-langue-xs-close");
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
