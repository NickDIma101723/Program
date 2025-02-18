const images = [
    'images/image1.png', 
    'images/image2.png', 
    'images/image3.png'
];

let currentImageIndex = 0;

function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    document.getElementById("slider").src = images[currentImageIndex];

    setTimeout(showNextImage, 10000);
}

function playMusic() {
    const music = document.getElementById("background-music");
    music.play();

   setTimeout(() => {
        music.pause();
    }, 30000);
}

showNextImage();
