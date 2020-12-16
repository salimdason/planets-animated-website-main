// LANDING PAGE ANIMATION
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

var keys = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune"
];
var slider = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 150,
  centeredSlides: true,
  mousewheel: true,
  pagination: {
    el: ".planet-links",
    clickable: true,
    renderBullet: function(index, className) {
      return '<div class="' + className + '">' + keys[index] + "</div>";
    }
  }
});

slider.on("slideChange", function() {
  console.log("SLIDE CHANGED");
  gsap.to(".slide-text span", 0.2, {
    x: "-100px"
  });
  gsap.to(".slide-number span", 0.2, {
    x: "-100px"
  });
  gsap.to(".slide-detail span", 0.5, {
    x: "-1000px"
  });
  gsap.to(".slide-detail-facts div", 0.5, {
    x: "-1000px"
  });
  gsap.to(".swiper-slide-active", 0.5, {
    scale: 0.85
  });
  gsap.to(".swiper-slide .slide-img", 1, {
    rotation: 20
  });
});

slider.on("slideChangeTransitionEnd", function() {
  gsap.to(".swiper-slide .slide-img", 1, {
    rotation: 10
  });
  gsap.to(".slide-text span", 0.2, {
    x: 0,
    delay: 0.1
  });
  gsap.to(".slide-text span", 0, {
    x: "100px"
  });

  gsap.to(".slide-number span", 0.2, {
    x: 0
  });
  gsap.to(".slide-number span", 0, {
    x: "100px"
  });

  gsap.to(".slide-detail span", 0.2, {
    x: 0
  });

  gsap.to(".slide-detail-facts div", 0.5, {
    x: 0
  });

  gsap.to(".swiper-slide-active", 0.5, {
    scale: 1,
    ease: Power4.easeOut
  });

  gsap.to(".swiper-slide-active .slide-text", 0, {
    autoAlpha: 1
  });
  gsap.to(".swiper-slide-active .slide-number", 0, {
    autoAlpha: 1
  });

  gsap.to(".swiper-slide-next .slide-text", 0, {
    autoAlpha: 0
  });
  gsap.to(".swiper-slide-prev .slide-text", 0, {
    autoAlpha: 0
  });

  gsap.to(".swiper-slide-next .slide-number", 0, {
    autoAlpha: 0
  });
  gsap.to(".swiper-slide-prev .slide-number", 0, {
    autoAlpha: 0
  });
});

gsap.to(".rockbg1", 2, {
  y: 12,
  repeat: -1,
  yoyo: true,
  delay: 0
});

gsap.to(".swiper-slide-next .slide-text", 0, {
  autoAlpha: 0
});
gsap.to(".swiper-slide-prev .slide-text", 0, {
  autoAlpha: 0
});

gsap.to(".swiper-slide-next .slide-number", 0, {
  autoAlpha: 0
});
gsap.to(".swiper-slide-prev .slide-number", 0, {
  autoAlpha: 0
});

gsap.to(".swiper-slide", 0, {
  scale: 0.85
});

gsap.to(".swiper-slide-active", 0, {
  scale: 1
});


/* Cursor */

document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
  t.style.left = n.clientX + "px", 
t.style.top = n.clientY + "px", 
e.style.left = n.clientX + "px", 
e.style.top = n.clientY + "px", 
i.style.left = n.clientX + "px", 
i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
  e = document.getElementById("cursor2"),
  i = document.getElementById("cursor3");
function n(t) {
  e.classList.add("hover"), i.classList.add("hover")
}
function s(t) {
  e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
  o(r[a])
}
function o(t) {
  t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}