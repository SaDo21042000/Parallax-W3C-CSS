window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "nav"  + " animate-top" + " nav-white" + " nav-box-shadow";
        console.log("before")
    } else {
        navbar.className = navbar.className.replace("nav-white nav-box-shadow", "");
        console.log("after")
    }
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
//hide modal
function hidePortfolioModal() {
    document.getElementById("modal01").style.display = "none";
}