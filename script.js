(function () {
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("mobileNav");
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  function closeMenu() {
    if (!btn || !nav) return;
    nav.setAttribute("hidden", "");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Open menu");
  }

  function openMenu() {
    if (!btn || !nav) return;
    nav.removeAttribute("hidden");
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "Close menu");
  }

  if (btn && nav) {
    btn.addEventListener("click", function () {
      if (nav.hasAttribute("hidden")) openMenu();
      else closeMenu();
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* Subtle scroll reveal — respects reduced motion via CSS */
  var prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  if (prefersReduced || !("IntersectionObserver" in window)) {
    nodes.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  nodes.forEach(function (el) {
    observer.observe(el);
  });
})();
