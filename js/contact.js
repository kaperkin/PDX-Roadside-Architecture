
////// init function to kick it all off //////////////////////
/////////////////////////////////////////////////////////
function init() {
	// variable declarations
	var radioBtns = document.getElementsByClassName("radioBtns");
	window.otherBtn = document.getElementById("otherBtn");
	window.otherExplain = document.getElementById("otherExplain");
    window.photo = document.getElementById("photo");
    window.link = document.getElementById("link");
    window.photocheckbox = document.getElementById("photoCheckbox");
    window.linkCheckbox = document.getElementById("linkCheckbox");

    // display styling
	otherExplain.style.display = "none";
	photo.style.display="none";
	link.style.display="none";

    // add Event Listeners
    photocheckbox.addEventListener("change", showPhotoBox);
    linkCheckbox.addEventListener("change", showLinkBox);
	//adds event listener to each radio button
	for (var i = 0; i < radioBtns.length; i++) {
		console.log(radioBtns[i].value);
		radioBtns[i].addEventListener("change", showOtherExplain);
	}
}
//////// calls init function when DOM loads ////////////
document.addEventListener("DOMContentLoaded", init);

//Checks if otherBtn is checked, then shows/hides input
function showOtherExplain() {
	if (otherBtn.checked) {
		otherExplain.style.display = "block";
	} else {
		otherExplain.style.display = "none";
	}
}

//////// Show photo input when checkbox is checked ////////
function showPhotoBox(){
	if (photocheckbox.checked){
		photo.style.display="block";
	}else{
		photo.style.display="none";
	}
}

//////// Show link input when checkbox is checked////////
function showLinkBox(){
	if (linkCheckbox.checked){
		link.style.display="block";
	}else{
		link.style.display="none";
	}
}