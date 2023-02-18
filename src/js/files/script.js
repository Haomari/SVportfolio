
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




/* let containers = document.querySelectorAll(".questions-section__item");

function iconHover(event) {
  if (event.target.matches(".questions-section__icon")) {
    let icon = event.target;
    icon.classList.add("_hover");
  }
}

function iconLeave(event) {
  if (event.target.matches(".questions-section__icon")) {
    let icon = event.target;
    icon.classList.remove("_hover");
  }
}

containers.forEach((container) => {
  let icon = container.querySelector(".questions-section__icon");
  icon.addEventListener("mouseover", iconHover);
  icon.addEventListener("mouseout", iconLeave);
}); */


/* let container = document.querySelector(".questions-section__item");

function iconHover(event) {
  if (event.target.matches(".questions-section__text")) {
    let icon = event.target.nextElementSibling;
    icon.classList.add("_hover");
  }
}

function iconLeave(event) {
  if (event.target.matches(".questions-section__text")) {
    let icon = event.target.nextElementSibling;
    icon.classList.remove("_hover");
  }
}

container.addEventListener("mouseover", iconHover);
container.addEventListener("mouseout", iconLeave); */