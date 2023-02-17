
let questionsSectionText = document.querySelectorAll(".questions-section__text");
let questionsSectionIcon = document.querySelectorAll(".questions-section__icon");
console.log(document.querySelectorAll(".questions-section__icon"))

function iconHover() {
	console.log("i'm good")
	questionsSectionIcon.classList.add("._hover");
};

questionsSectionText.addEventListener("click", iconHover());