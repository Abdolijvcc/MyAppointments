let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat');
let AMCDai = document.querySelector('.AMCDai');

window.onscroll = function() {
    let value = window.scrollY;  // Use 'window.scrollY' for better readability

    // Parallax effect for different elements
    stars.style.left = value * 0.25 + 'px'; // Slow movement for stars
    moon.style.top = value * 0.3 + 'px';   // Slower movement for moon
    mountains3.style.top = value * 0.5 + 'px'; // Moderate speed for mountains3
    mountains4.style.top = value * 0.75 + 'px'; // Faster movement for mountains4
    river.style.top = value + 'px'; // Regular speed for river
    boat6.style.top = value * 1.1 + 'px'; // Slightly faster for boat6
    boat6.style.left = value * 0.3 + 'px'; // Boat moves horizontally as well
    AMCDai.style.fontSize = value + 'px'; // The font size grows as user scrolls

    // Handle font size limit for AMCDai
    if (scrollY >= 67) {
        AMCDai.style.fontSize = '67px';  // Limit font size to 67px
        AMCDai.style.position = 'fixed'; // Fix the position of AMCDai

        if (scrollY >= 478) {
            AMCDai.style.display = 'none';  // Hide AMCDai after scroll reaches 478px
        } else {
            AMCDai.style.display = 'block'; // Show AMCDai
        }

        // Change background gradient based on scroll position
        if (scrollY >= 358.75) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)';
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(#30001c, #2a003d)';
        }
    }
};
