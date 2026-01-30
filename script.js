hljs.highlightAll();

/* ============================
         ACCORDION LOGIC
   ============================ */
document.querySelectorAll(".accordion__header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const content = item.querySelector(".accordion__content");

    // Close all others
    document.querySelectorAll(".accordion__item").forEach((other) => {
      if (other !== item) {
        other.classList.remove("active");
        other.querySelector(".accordion__content").style.maxHeight = null;
      }
    });

    item.classList.toggle("active");

    content.style.maxHeight = item.classList.contains("active")
      ? content.scrollHeight + 36 + "px"
      : null;
  });
});
