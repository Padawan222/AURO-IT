import "./eng-je-change-mon-erp.scss";
import "C:/Users/Azstras/OneDrive/Bureau/AURO-IT/src/assets/styles/style.scss";

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
const menuGeneralXsContent = document.querySelector(".menu-general-xs-content");

// btn open/close

btnOpen.addEventListener("click", () => {
  const menuDisplay = getComputedStyle(menuXsContent).display;
  menuXsContent.classList.remove("animate-open", "animate-close");
  menuGeneralXsContent.classList.remove("menu-general-xs-content-opacity");
  if (menuDisplay === "flex") {
    menuXsContent.classList.add("animate-close");
    menuGeneralXsContent.classList.add("menu-general-xs-content-opacity");
    menuXsContent.addEventListener(
      "animationend",
      function () {
        menuXsContent.style.display = "none";
        menuXsLangueContainer.style.display = "none";
        contentLinkMenuGeneralXs.style.display = "none";
        contentLinkMenuGeneralXs2.style.display = "none";
        contentLinkMenuGeneralXs3.style.display = "none";
        contentLinkMenuGeneralXs4.style.display = "none";
        btnOpenCloseContentLinkMenuGeneralXs.style.transform = "rotate(0deg)";
        btnOpenCloseContentLinkMenuGeneralXs2.style.transform = "rotate(0deg)";
        btnOpenCloseContentLinkMenuGeneralXs3.style.transform = "rotate(0deg)";
        btnOpenCloseContentLinkMenuGeneralXs4.style.transform = "rotate(0deg)";
      },
      { once: true }
    );
  } else {
    menuXsContent.style.display = "flex";
    menuXsContent.classList.add("animate-open");
  }

  const rotation1 = getRotationAngle(getComputedStyle(btnBarre1).transform);
  const rotation2 = getRotationAngle(getComputedStyle(btnBarre2).transform);

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

  const positiveAngle = angle < 0 ? angle + 360 : angle;

  return positiveAngle;
}

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

// menu general xs

// const  btn 1

const contentLinkMenuGeneralXs = document.querySelector(
  ".content-link-menu-general-xs"
);
const btnOpenCloseContentLinkMenuGeneralXs = document.querySelector(
  ".btn-open-close-content-link-menu-general-xs"
);
const linkMenuGeneralXs = document.querySelector(
  ".animation-content-link-menu-general-xs"
);

// const btn 2

const contentLinkMenuGeneralXs2 = document.querySelector(
  ".content-link-menu-general-xs-2"
);
const btnOpenCloseContentLinkMenuGeneralXs2 = document.querySelector(
  ".btn-open-close-content-link-menu-general-xs-2"
);
const linkMenuGeneralXs2 = document.querySelector(
  ".animation-content-link-menu-general-xs-2"
);

//  btn 3

const contentLinkMenuGeneralXs3 = document.querySelector(
  ".content-link-menu-general-xs-3"
);
const btnOpenCloseContentLinkMenuGeneralXs3 = document.querySelector(
  ".btn-open-close-content-link-menu-general-xs-3"
);
const linkMenuGeneralXs3 = document.querySelector(
  ".animation-content-link-menu-general-xs-3"
);

//  btn 4

const contentLinkMenuGeneralXs4 = document.querySelector(
  ".content-link-menu-general-xs-4"
);
const btnOpenCloseContentLinkMenuGeneralXs4 = document.querySelector(
  ".btn-open-close-content-link-menu-general-xs-4"
);
const linkMenuGeneralXs4 = document.querySelector(
  ".animation-content-link-menu-general-xs-4"
);

// btn 1

btnOpenCloseContentLinkMenuGeneralXs.addEventListener("click", () => {
  const menuDisplay = window
    .getComputedStyle(contentLinkMenuGeneralXs)
    .getPropertyValue("display");

  if (menuDisplay === "none") {
    btnOpenCloseContentLinkMenuGeneralXs.style.transform = "rotate(90deg)";
    contentLinkMenuGeneralXs.style.display = "flex";
    btnOpenCloseContentLinkMenuGeneralXs2.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs2.style.display = "none";
    btnOpenCloseContentLinkMenuGeneralXs3.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs3.style.display = "none";
    btnOpenCloseContentLinkMenuGeneralXs4.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs4.style.display = "none";
  } else {
    contentLinkMenuGeneralXs.classList.add(
      "close-content-link-menu-general-xs"
    );
    linkMenuGeneralXs.classList.add("close-link-menu-general-xs");
    btnOpenCloseContentLinkMenuGeneralXs.style.transform = "rotate(0deg)";
    setTimeout(() => {
      contentLinkMenuGeneralXs.style.display = "none";
      contentLinkMenuGeneralXs.classList.remove(
        "close-content-link-menu-general-xs"
      );
      linkMenuGeneralXs.classList.remove("close-link-menu-general-xs");
    }, 990);
  }
});

// btn 2

btnOpenCloseContentLinkMenuGeneralXs2.addEventListener("click", () => {
  const menuDisplay = window
    .getComputedStyle(contentLinkMenuGeneralXs2)
    .getPropertyValue("display");

  if (menuDisplay === "none") {
    btnOpenCloseContentLinkMenuGeneralXs2.style.transform = "rotate(90deg)";
    contentLinkMenuGeneralXs2.style.display = "flex";
    btnOpenCloseContentLinkMenuGeneralXs.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs.style.display = "none";
    btnOpenCloseContentLinkMenuGeneralXs3.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs3.style.display = "none";
    btnOpenCloseContentLinkMenuGeneralXs4.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs4.style.display = "none";
  } else {
    contentLinkMenuGeneralXs2.classList.add(
      "close-content-link-menu-general-xs"
    );
    linkMenuGeneralXs2.classList.add("close-link-menu-general-xs");
    btnOpenCloseContentLinkMenuGeneralXs2.style.transform = "rotate(0deg)";
    setTimeout(() => {
      contentLinkMenuGeneralXs2.style.display = "none";
      contentLinkMenuGeneralXs2.classList.remove(
        "close-content-link-menu-general-xs"
      );
      linkMenuGeneralXs2.classList.remove("close-link-menu-general-xs");
    }, 990);
  }
});

// btn 3

btnOpenCloseContentLinkMenuGeneralXs3.addEventListener("click", () => {
  const menuDisplay = window
    .getComputedStyle(contentLinkMenuGeneralXs3)
    .getPropertyValue("display");

  if (menuDisplay === "none") {
    btnOpenCloseContentLinkMenuGeneralXs3.style.transform = "rotate(90deg)";
    contentLinkMenuGeneralXs3.style.display = "flex";
    btnOpenCloseContentLinkMenuGeneralXs.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs.style.display = "none";
    btnOpenCloseContentLinkMenuGeneralXs2.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs2.style.display = "none";
    btnOpenCloseContentLinkMenuGeneralXs4.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs4.style.display = "none";
  } else {
    contentLinkMenuGeneralXs3.classList.add(
      "close-content-link-menu-general-xs"
    );
    linkMenuGeneralXs3.classList.add("close-link-menu-general-xs");
    btnOpenCloseContentLinkMenuGeneralXs3.style.transform = "rotate(0deg)";
    setTimeout(() => {
      contentLinkMenuGeneralXs3.style.display = "none";
      contentLinkMenuGeneralXs3.classList.remove(
        "close-content-link-menu-general-xs"
      );
      linkMenuGeneralXs3.classList.remove("close-link-menu-general-xs");
    }, 990);
  }
});
// btn 4

btnOpenCloseContentLinkMenuGeneralXs4.addEventListener("click", () => {
  const menuDisplay = window
    .getComputedStyle(contentLinkMenuGeneralXs4)
    .getPropertyValue("display");

  if (menuDisplay === "none") {
    btnOpenCloseContentLinkMenuGeneralXs4.style.transform = "rotate(90deg)";
    contentLinkMenuGeneralXs4.style.display = "flex";
    btnOpenCloseContentLinkMenuGeneralXs.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs.style.display = "none";
    btnOpenCloseContentLinkMenuGeneralXs2.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs2.style.display = "none";
    btnOpenCloseContentLinkMenuGeneralXs3.style.transform = "rotate(0deg)";
    contentLinkMenuGeneralXs3.style.display = "none";
  } else {
    contentLinkMenuGeneralXs4.classList.add(
      "close-content-link-menu-general-xs"
    );
    linkMenuGeneralXs4.classList.add("close-link-menu-general-xs");
    btnOpenCloseContentLinkMenuGeneralXs4.style.transform = "rotate(0deg)";
    setTimeout(() => {
      contentLinkMenuGeneralXs4.style.display = "none";
      contentLinkMenuGeneralXs4.classList.remove(
        "close-content-link-menu-general-xs"
      );
      linkMenuGeneralXs4.classList.remove("close-link-menu-general-xs");
    }, 990);
  }
});

// text-container-2

const textContainer2 = document.querySelector(".text-container-2");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer2.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer2.classList.add("animation-text-container-2");
  }
});

// text-container-4

const textContainer4 = document.querySelector(".text-container-4");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer4.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer4.classList.add("animation-text-container-4");
  }
});

// text-4

const text4 = document.querySelector(".text-4");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text4.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
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
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
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
