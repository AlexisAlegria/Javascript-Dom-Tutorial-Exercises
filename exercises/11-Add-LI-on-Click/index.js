let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let list = document.querySelector('#myList');
	let newLi = document.createElement('li');
	newLi.innerHTML = 'Forth element';
	list.appendChild(newLi);
});
