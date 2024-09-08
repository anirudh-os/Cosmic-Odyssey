document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById('hero-video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const colorThief = new ColorThief();

    // Function to lighten or darken color
    function adjustColorBrightness(rgb, percent) {
        return rgb.map(value => Math.min(Math.max(0, value + (value * percent / 100)), 255));
    }

    function extractColor() {
        // Set canvas dimensions to match the video dimensions
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Draw the current video frame to the canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Create an image element to hold the frame
        const img = new Image();
        img.src = canvas.toDataURL('image/png');

        // Extract the color when the image is loaded
        img.onload = function () {
            const dominantColor = colorThief.getColor(img);
            const adjustedColor = adjustColorBrightness(dominantColor, -20); // Darken by 20%
            document.body.style.backgroundColor = `rgb(${adjustedColor.join(',')})`;
        };
    }

    // Extract color when the video metadata is loaded and ready
    video.addEventListener('loadeddata', extractColor);

    // Sidebar toggle functionality
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const closebtn = document.getElementById('closebtn');

    hamburger.addEventListener('click', function () {
        sidebar.style.width = '250px';
    });
});
document.addEventListener("contextmenu", hidemenu);
function hidemenu(e) {
    e.preventDefault();
}

closebtn.addEventListener('click', function () {
    sidebar.style.width = '0';
});

