// ToDo
// add scroll to top button
//captions
//underline link after visited on subsections
//photo upload not working
// I hate everything
//underlining on section heads larger for first letter

////// init function to kick it all off //////////////////////
/////////////////////////////////////////////////////////
function mainInit(){
    ///// Declare variables /////
    window.home = document.getElementById("home");
    window.mainContent = document.getElementById("mainContent");
    window.thematicSection = document.getElementById("thematicSection");
    window.iconicSection = document.getElementById("iconicSection");
    window.whimsicalSection = document.getElementById("whimsicalSection");
    window.contactSection = document.getElementById("contactSection");
    window.contactLinks=document.getElementsByClassName("contactLink");
    window.scrollArrow=document.getElementById("scrollArrow");

    ///// Hide content sections ///////
   drawMainContent();


    ////// Add Event Listeners ////////
    home.addEventListener("click", drawMainContent);
    document.getElementById("thematicBlurb").addEventListener("click", drawThematicSection);
    document.getElementById("iconicBlurb").addEventListener("click", drawIconicSection);
    document.getElementById("whimsicalBlurb").addEventListener("click", drawWhimsicalSection);
    scrollArrow.addEventListener("click", scrollToTop);
    for(var i= 0; i<contactLinks.length; i++){
        contactLinks[i].addEventListener("click", drawContactSection);
    }

}
document.addEventListener("DOMContentLoaded", mainInit);


///////// function to draw main content /////////
function drawMainContent(){
   thematicSection.style.display="none";
   iconicSection.style.display="none";
   whimsicalSection.style.display="none";
   contactSection.style.display="none";
   mainContent.style.display="block";
    if (screen.width >= 1200){
        scrollArrow.style.display="none";
    }
   window.scrollTo(0,0);
}

///////// functions to draw sections ///////////
function drawThematicSection(){
    mainContent.style.display="none";
    thematicSection.style.display="block";
    if (screen.width >= 1200){
        scrollArrow.style.display="inline-block";
    }
    window.scrollTo(0,0);
}

function drawIconicSection(){
    mainContent.style.display="none";
    iconicSection.style.display="block";
    if (screen.width >= 1200){
        scrollArrow.style.display="inline-block";
    }
    window.scrollTo(0,0);
}

function drawWhimsicalSection(){
    mainContent.style.display="none";
    whimsicalSection.style.display="block";
    if (screen.width >= 1200){
        scrollArrow.style.display="inline-block";
    }
    window.scrollTo(0,0);
}

function drawContactSection(){
    mainContent.style.display="none";
    thematicSection.style.display="none";
    iconicSection.style.display="none";
    whimsicalSection.style.display="none";
    contactSection.style.display="block";
    window.scrollTo(0,0);
}

function scrollToTop(){
    window.scrollTo(0,0);
}