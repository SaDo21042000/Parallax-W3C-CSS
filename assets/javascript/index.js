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
