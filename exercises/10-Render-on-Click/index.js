let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let container = document.createElement('div');
	container.innerHTML = 'Hello World';
	container.style.background = 'yellow';
	document.body.appendChild(container);
});