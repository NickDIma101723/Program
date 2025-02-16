const images = [

];

let currentImageIndex = 0;

function showNextImage() {

    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    console.log("Current image:", images[currentImageIndex]);

    document.getElementById("slider").src = images[currentImageIndex];

    setTimeout(showNextImage, 10000);
}

window.onload = showNextImage;
