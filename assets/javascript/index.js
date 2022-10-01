//animate top
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var navbar = document.getElementById("myNavbar");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.className =
      "nav" + " animate-top" + " nav-white" + " nav-box-shadow";
  } else {
    navbar.className = navbar.className.replace(
      "animate-top nav-white nav-box-shadow",
      ""
    );
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

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("nav-responsive");
  //x.style.display = "block"
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
