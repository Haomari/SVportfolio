
let questionsSectionItems = document.querySelectorAll(".questions-section__item");

function iconHover(event) {
  let icon = event.target.closest(".questions-section__item").querySelector(".questions-section__icon");
  icon.classList.add("_hover");
}

function iconLeave(event) {
  let icon = event.target.closest(".questions-section__item").querySelector(".questions-section__icon");
  icon.classList.remove("_hover");
}

questionsSectionItems.forEach((container) => {
  let text = container.querySelector(".questions-section__text");
  text.addEventListener("mouseover", iconHover);
  text.addEventListener("mouseout", iconLeave);
});
