//navigation menu code ------------------
console.clear();
const app = (() => {
  let body;
  let menu;
  let menuItems;
  let nav;
  let site;

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
/* 
//viewport detection--------
document.addEventListener("scroll", function () {
  var article = document.querySelector("article");
  var articlePosition = article.getBoundingClientRect();

  // Check if article is in the viewport
  if (articlePosition.top < window.innerHeight && articlePosition.bottom >= 0) {
    article.style.opacity = "1";
    article.style.transform = "translateX(0)";
    article.style.visibility = "visible";
  }
}); */

//fullpage.js animation code -----------
$(document).ready(function () {
  $("#fullpage").fullpage({
    // FullPage.js options
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

    afterLoad: function (origin, destination, direction) {
      // Handle section loading
      var loadedSection = destination.item;
      var articleInSection = loadedSection.querySelector("article");
      if (articleInSection) {
        animateArticle(articleInSection);
      }
    },

    afterSlideLoad: function (section, origin, destination, direction) {
      // Handle slide loading within a section
      var loadedSlide = destination.item;
      var articleInSlide = loadedSlide.querySelector("article");
      if (articleInSlide) {
        animateArticle(articleInSlide);
      }
    },
  });
});

function animateArticle(article) {
  article.style.opacity = "1";
  article.style.transform = "translateX(0)";
  article.style.visibility = "visible";
  article.style.transition =
    "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
}

//VANTA.js animation code ---------------
VANTA.DOTS({
  el: "#vanta_back",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xffffff,
  showLines: false,
});
