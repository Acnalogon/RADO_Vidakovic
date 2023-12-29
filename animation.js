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
      animateElements(loadedSection);
    },

    afterSlideLoad: function (section, origin, destination, direction) {
      // Handle slide loading within a section
      var loadedSlide = destination.item;
      var articleInSlide = loadedSlide.querySelector("article");
      if (articleInSlide) {
        animateArticle(articleInSlide);
      }
      animateElements(loadedSlide);
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

function animateElements(sectionOrSlide) {
  // Animate Headers (h1 and h2)
  var headers = sectionOrSlide.querySelectorAll("h1.ml14, h2.ml14");
  headers.forEach((header) => {
    animateHeader(header);
  });
}

function animateHeader(header) {
  // Split text into letters
  var textWrapper = header.querySelector(".letters");
  if (textWrapper) {
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
  }

  // Anime.js timeline for header
  anime
    .timeline({ loop: false })
    .add({
      targets: header.querySelectorAll(".line"),
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      duration: 900,
    })
    .add({
      targets: header.querySelectorAll(".letter"),
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 800,
      offset: "-=600",
      delay: (el, i) => 150 + 25 * i,
    });
}

//VANTA.js animation code ---------------
VANTA.NET({
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
  backgroundColor: 0xd0d0d,
});
