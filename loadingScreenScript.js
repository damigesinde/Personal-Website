
// DOMContentLoaded event ensures the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const loadingScreen = document.querySelector('.loading-screen');
    const video = document.querySelector('video'); // Select the video element
    // Ensure you define content or adjust based on actual usage

    if (video) {
        video.addEventListener('ended', () => {
            // Hide loading screen and redirect after video ends
            loadingScreen.style.display = 'none';
            document.body.style.overflow = 'auto'; // Allow scrolling
            window.location.replace('home.html'); // Redirect to home.html
        });
    }

});






