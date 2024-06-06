function setVideoURL() {
    const iframe = document.getElementById('youtube-video');
    if (iframe) {
        iframe.src = vidURL;
    } else {
        console.error('YouTube iframe not found!');
    }
}

// Load the video URL when the window finishes loading
window.addEventListener('load', setVideoURL);