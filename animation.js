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