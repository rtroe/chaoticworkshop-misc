// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("btn_google");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal_close");

var version = "Android"

// When the user clicks on the button, open the modal 
function modalOpenAndroid() {
    modal.style.display = "block";
    version = "Android"
    console.log(version)
}

function modalOpenApple() {
    modal.style.display = "block";
    version = "iOS"
    console.log(version)
}

// Open Link to Lite Version
function modalOpenLite() {
    
    // Open Lite Android Version
if(version == "Android"){
	window.open("https://play.google.com/store/apps/details?id=com.virtexedge.chaoticworkshoplite");
}

    // Open Lite iOS Version
if(version == "iOS"){
	window.open("https://itunes.apple.com/us/app/the-chaotic-workshop-lite/id1300423325?mt=8");
}
}

// Open Link to Full Version
function modalOpenFull() {
        // Open Full Android Version
if(version == "Android"){
	window.open("https://play.google.com/store/apps/details?id=com.virtexedge.chaoticworkshop");
}

    // Open Full iOS Version
if(version == "iOS"){
	window.open("https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1276208687&mt=8");
}
}

// When the user clicks on <span> (x), close the modal
function modalClose() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}