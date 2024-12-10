
function myFunction() {
    var x = document.getElementsByClassName("topnav")[0];
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

document.getElementById('btnAbout').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    document.getElementById('btnAbout').scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly
});
