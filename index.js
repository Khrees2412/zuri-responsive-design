const navbar = document.querySelector(".nav-bar");
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");

let state = true;
hamburger.addEventListener("click", () => {
	if (state) {
		navlinks.style.display = "flex";
		state = !state;
	} else {
		navlinks.style.display = "none";
		state = !state;
	}
	hamburger.classList.toggle("toggle");
});
