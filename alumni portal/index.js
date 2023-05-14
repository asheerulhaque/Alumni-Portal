document.addEventListener("DOMContentLoaded", function() {
    var parallaxImage = document.querySelector(".parallax-image");
    var speed = 0.5;
  
    window.addEventListener("scroll", function() {
      var yOffset = window.pageYOffset;
      var coords = "center " + (yOffset * speed) + "px";
      parallaxImage.style.backgroundPosition = coords;
    });
  });
  