console.clear();

$(document).ready(function () {
  $("#fullpage").fullpage({
    // FullPage.js options here
    licenseKey: "gplv3-license",
    navigation: false,
    navigationPosition: "none",
    controlArrows: true,
    scrollingSpeed: 1000,
    anchors: [
      "Home",
      "About_Me",
      "My_Skills",
      "Contact_Me",
      "Front_End",
      "Back_End",
      "Programming_Languages",
    ],
    menu: "#myMenu",
    slidesNavigation: true,
    slidesNavPosition: "bottom",
  });
});

const app = (() => {
  let body;
  let menu;
  let menuItems;

  const init = () => {
    body = document.querySelector("body");
    menu = document.querySelector(".menu-icon");
    menuItems = document.querySelectorAll(".nav__list-item");

    applyListeners();
  };

  const applyListeners = () => {
    menu.addEventListener("click", () => toggleClass(body, "nav-active"));

    // Add an event listener to each menu item
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Assuming 'nav-active' is the class that shows the menu
        if (body.classList.contains("nav-active")) {
          toggleClass(body, "nav-active");
        }
      });
    });
  };

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass)) {
      element.classList.remove(stringClass);
    } else {
      element.classList.add(stringClass);
    }
  };

  init();
})();

VANTA.DOTS({
  el: "#vanta_back",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  showLines: false,
});
