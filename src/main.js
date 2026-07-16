import "./lightbox.js";

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const revealables = document.querySelectorAll(".reveal:not(.in)");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealables.forEach((element) => element.classList.add("in"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  revealables.forEach((element) => observer.observe(element));
}
