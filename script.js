const videoIframe = document.getElementById('videoIframe');
const audioPlayer = document.getElementById('audioPlayer');
const videoUrlInput = document.getElementById('videoUrlInput');
const loadVideoButton = document.getElementById('loadVideoButton');

loadVideoButton.addEventListener('click', () => {
    const videoUrl = videoUrlInput.value;
    if (videoUrl) {
        const videoId = getVideoIdFromUrl(videoUrl);

        if (videoId) {
            // Embed the YouTube video in the iframe
            videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`; // Add `?autoplay=1` to auto-play the video
            videoIframe.style.display = 'block';
            audioPlayer.style.display = 'none';
        }
    }
});

function getVideoIdFromUrl(url) {
    const videoIdMatch = url.match(/[?&]v=([^&]+)/);
    if (videoIdMatch) {
        return videoIdMatch[1];
    }
    return null;
}
