const lightbox = document.querySelector(".lightbox");
const triggers = document.querySelectorAll(".shot-trigger");

if (lightbox && triggers.length) {
  const preview = lightbox.querySelector("img");
  const caption = lightbox.querySelector("figcaption");
  const closeButton = lightbox.querySelector(".lightbox-close");

  // gallery cards carry a title in their caption; the studio frames only have alt text
  const captionFor = (trigger) => {
    const title = trigger.closest("figure")?.querySelector("figcaption b");
    return title ? title.textContent : trigger.querySelector("img").alt;
  };

  for (const trigger of triggers) {
    trigger.addEventListener("click", () => {
      const image = trigger.querySelector("img");
      preview.src = image.currentSrc || image.src;
      preview.alt = image.alt;
      caption.textContent = captionFor(trigger);
      lightbox.showModal();
    });
  }

  // a click on the backdrop reports the dialog itself as the target
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  closeButton.addEventListener("click", () => lightbox.close());
}
