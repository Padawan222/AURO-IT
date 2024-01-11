import "./cat-gestion-de-projet-et-de-programme.scss";
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

// text-container-5

const textContainer5 = document.querySelector(".text-container-5");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer5.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer5.classList.add("animation-text-container-5");
  }
});
// text-container-6

const textContainer6 = document.querySelector(".text-container-6");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer6.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer6.classList.add("animation-text-container-6");
  }
});
// text-container-7

const textContainer7 = document.querySelector(".text-container-7");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer7.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer7.classList.add("animation-text-container-7");
  }
});
// text-container-8

const textContainer8 = document.querySelector(".text-container-8");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer8.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer8.classList.add("animation-text-container-8");
  }
});
// text-container-9

const textContainer9 = document.querySelector(".text-container-9");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer9.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer9.classList.add("animation-text-container-9");
  }
});
// text-container-10

const textContainer10 = document.querySelector(".text-container-10");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer10.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer10.classList.add("animation-text-container-10");
  }
});
// text-container-11

const textContainer11 = document.querySelector(".text-container-11");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer11.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer11.classList.add("animation-text-container-11");
  }
});
// text-container-12

const textContainer12 = document.querySelector(".text-container-12");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer12.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer12.classList.add("animation-text-container-12");
  }
});
// text-container-13

const textContainer13 = document.querySelector(".text-container-13");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer13.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer13.classList.add("animation-text-container-13");
  }
});
// text-container-14

const textContainer14 = document.querySelector(".text-container-14");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer14.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer14.classList.add("animation-text-container-14");
  }
});
// text-container-15

const textContainer15 = document.querySelector(".text-container-15");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer15.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer15.classList.add("animation-text-container-15");
  }
});
// text-container-16

const textContainer16 = document.querySelector(".text-container-16");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer16.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer16.classList.add("animation-text-container-16");
  }
});
// text-container-17

const textContainer17 = document.querySelector(".text-container-17");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer17.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer17.classList.add("animation-text-container-17");
  }
});
// text-container-18

const textContainer18 = document.querySelector(".text-container-18");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer18.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer18.classList.add("animation-text-container-18");
  }
});
// text-container-19

const textContainer19 = document.querySelector(".text-container-19");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer19.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer19.classList.add("animation-text-container-19");
  }
});
// text-container-20

const textContainer20 = document.querySelector(".text-container-20");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = textContainer20.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    textContainer20.classList.add("animation-text-container-20");
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

// text-6

const text6 = document.querySelector(".text-6");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text6.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
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
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
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
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
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
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    text9.classList.add("active");
  }
});
// text-10

const text10 = document.querySelector(".text-10");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text10.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    text10.classList.add("active");
  }
});
// text-11

const text11 = document.querySelector(".text-11");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text11.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    text11.classList.add("active");
  }
});

// text-12

const text12 = document.querySelector(".text-12");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text12.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    text12.classList.add("active");
  }
});

// text-13

const text13 = document.querySelector(".text-13");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text13.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    text13.classList.add("active");
  }
});
// text-14

const text14 = document.querySelector(".text-14");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text14.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    text14.classList.add("active");
  }
});
// text-15

const text15 = document.querySelector(".text-15");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text15.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    text15.classList.add("active");
  }
});
// text-16

const text16 = document.querySelector(".text-16");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text16.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    text16.classList.add("active");
  }
});
// text-17

const text17 = document.querySelector(".text-17");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text17.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    text17.classList.add("active");
  }
});
// text-18

const text18 = document.querySelector(".text-18");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text18.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    text18.classList.add("active");
  }
});
// text-19

const text19 = document.querySelector(".text-19");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text19.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    text19.classList.add("active");
  }
});
// text-20

const text20 = document.querySelector(".text-20");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text20.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    text20.classList.add("active");
  }
});
// text-21

const text21 = document.querySelector(".text-21");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = text21.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1
  ) {
    text21.classList.add("active");
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
