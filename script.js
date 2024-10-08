const container = document.querySelector(".container");
const frames = document.querySelectorAll(".frame");

container.addEventListener("click", (event) => {
	removeActiveClasses();
	event.target.classList.add("focused");
});

function removeActiveClasses() {
	frames.forEach((panel) => {
		panel.classList.remove("focused");
	});
}
