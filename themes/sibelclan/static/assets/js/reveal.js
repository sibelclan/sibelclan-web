// Animación de entrada al hacer scroll. Sin JS o con reduced-motion, todo se ve normal.
(function () {
  var targets = document.querySelectorAll(
    "main .reveal, section.reveal, .reveal, #sect-body .col-lg-6, #sect-gallery img, #sect-stream .col-lg-6"
  );
  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("reveal", "is-visible"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  targets.forEach(function (el, i) {
    el.classList.add("reveal");
    el.style.transitionDelay = (i % 4) * 80 + "ms";
    io.observe(el);
  });
})();
