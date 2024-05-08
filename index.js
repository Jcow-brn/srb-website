// Tabbed Menu
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-yellow", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-yellow";
}
start_elem = document.getElementById("myLink");
if (start_elem != null) {
    start_elem.click();
}

// gallery
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

function clickSpeakerGroup() {
    document.getElementById("speakerGroup").click();
}


//create collapsibles
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.style.display = "none";
    this.nextElementSibling.style.display = "block";

  });
}

//this script ensures the internal links account for the fixed topbar, optional
document.documentElement.style.scrollPaddingTop = document.getElementById('toplinks').offsetHeight - 1 + 'px';
document.documentElement.style.scrollPaddingTop = document.getElementById('toplinks').offsetHeight - 1 + 'px';

//console.log(document.getElementById('toplinks').offsetHeight + 'px');
//console.log(window.getComputedStyle(document.documentElement).scrollPaddingTop);
