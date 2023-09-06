$(document).ready(function () {
    $('#fullpage').fullpage({
        // FullPage.js options here
      licenseKey: 'gplv3-license',
      navigation: false,
      navigationPosition: 'none',
      controlArrows: true,
      scrollingSpeed: 1000,
      anchors: ['About_Me', 'My_Skills', 'Contact_Me', 'Front_End', 'Back_End', 'Programming_Languages'],

      slidesNavigation: true,
	    slidesNavPosition: 'bottom',
    });
});

/* const animation = anima({
            targets: '.mandala-container',
            transform: ['rotate(0deg)', 'rotate(360deg)'],
            easing: 'linear',
            duration: 500000, // 500s
            loop: true,
        });

        // Start the animation
        animation.play(); */

VANTA.HALO({
  el: "#vanta_back",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  backgroundColor: 0x0
})



$(document).ready(function(){
    $('[data-bs-toggle="offcanvas"]').on('click', function () {
      $('.offcanvas-collapse').toggleClass('open');
    });
});
  
const aboutLink = document.getElementById('aboutLink');
const skillsLink = document.getElementById('skillz');
const contactLink = document.getElementById('contactLink');
const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasDarkNavbar'));

aboutLink.addEventListener('click', () => {
    offcanvas.hide();
});

skillsLink.addEventListener('click', () => {
    offcanvas.hide();
});

contactLink.addEventListener('click', () => {
    offcanvas.hide();
});