function init() {
	var radioBtns = document.getElementsByClassName("radioBtns");
	var otherBtn = document.getElementById("otherBtn");
	var otherExplain = document.getElementById("otherExplain");
	otherExplain.style.display = "none";

	for (var i = 0; i < radioBtns.length; i++) {
		console.log(radioBtns[i].value);
		radioBtns[i].addEventListener("change", showOtherExplain);
	}
}
document.addEventListener("DOMContentLoaded", init);
function showOtherExplain() {
	if (otherBtn.checked) {
		otherExplain.style.display = "block";
	} else {
		otherExplain.style.display = "none";
	}
}
