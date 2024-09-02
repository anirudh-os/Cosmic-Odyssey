document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById('hero-video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const colorThief = new ColorThief();
    
    // List of videos to play sequentially
    //const videos = ["../assets/Space2.mp4", "../assets/Space3.mp4"];
    //let currentVideoIndex = 0;

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

    // Extract color every 2 seconds
    video.addEventListener('play', () => {
        setInterval(() => {
            if (!video.paused && !video.ended) {
                extractColor();
            }
        }, 1);
    });

    // Handle video ending
    //video.addEventListener('ended', function () {
        //console.log('Video ended. Changing to the next video.');
        //currentVideoIndex = (currentVideoIndex + 1) % videos.length;
       // console.log('Switching to video:', videos[currentVideoIndex]);
        //video.src = videos[currentVideoIndex];
       // video.load(); // Ensure the video element reloads the new source
       // video.play();
   // });

    // Set initial video
   // video.src = videos[currentVideoIndex];
   // video.load(); // Ensure the video element is properly loaded

    
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const closebtn = document.getElementById('closebtn');

    hamburger.addEventListener('click', function () {
        sidebar.style.width = '250px';
    });

    closebtn.addEventListener('click', function () {
        sidebar.style.width = '0';
    });
});
