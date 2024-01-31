const videoIframe = document.getElementById('videoIframe');
const audioPlayer = document.getElementById('audioPlayer');
const videoThumbnail = document.getElementById('videoThumbnail');
const videoUrlInput = document.getElementById('videoUrlInput');
const loadVideoButton = document.getElementById('loadVideoButton');

function getVideoIdFromUrl(url) {
    const videoIdMatch = url.match(/[?&]v=([^&]+)/);
    if (videoIdMatch) {
        return videoIdMatch[1];
    }
    return null;
}

loadVideoButton.addEventListener('click', () => {
    const videoUrl = videoUrlInput.value;
    const videoId = getVideoIdFromUrl(videoUrl);

    if (videoId) {
        console.log(`Video ID extracted: ${videoId}`);
        // Embed the YouTube video in the iframe
        videoIframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`; // Auto-play the video
        videoIframe.style.display = 'block';
        audioPlayer.style.display = 'none';
        videoThumbnail.style.display = 'none'; // Hide the thumbnail
        console.log('YouTube video embedded successfully.');
    } else {
        console.log('Invalid YouTube video URL.');
        videoThumbnail.style.display = 'block'; // Display the thumbnail
        videoThumbnail.src = `https://img.youtube.com/vi/${videoId}/0.jpg`; // Load the video thumbnail
        console.log('YouTube video thumbnail loaded.');
    }
});
