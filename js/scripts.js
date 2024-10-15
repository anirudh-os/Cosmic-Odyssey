document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("sidebar").style.width = "175px";
});

document.getElementById("closebtn").addEventListener("click", function () {
    document.getElementById("sidebar").style.width = "0";
});

document.getElementById("sign_in").addEventListener("click", function () {
    window.location.href = "Cosmic-Odyssey/Sign_in_page.html";
});
