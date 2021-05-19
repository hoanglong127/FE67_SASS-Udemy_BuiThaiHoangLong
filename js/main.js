$(".owl-services").owlCarousel({
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".owl-courses").owlCarousel({
  loop: false,
  margin: 15,
  dots: false,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
  },
});

$(".owl-feedback").owlCarousel({
  loop: false,
  margin: 15,
  dots: false,
  nav: true,
  merge: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
});

$(".owl-students").owlCarousel({
  loop: false,
  margin: 15,
  dots: false,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    990: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
});
