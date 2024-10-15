document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("sidebar").style.width = "175px";
});

document.getElementById("closebtn").addEventListener("click", function () {
    document.getElementById("sidebar").style.width = "0";
});