window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// your code here

	let dropDown = document.querySelector('#mySelect');
	for(var i=0; i<countries.length;i++){
		var option = countries[i];
		var el = document.createElement('option');
		el.textContent = option;
		el.value = option;
		dropDown.appendChild(el);
	}  
};
var selection = document.querySelector('#mySelect');
selection.addEventListener('change', selectItem);
function selectItem(e){
	e.preventDefault();
	let countrySelected = e.target.value;
	alert(countrySelected);
}