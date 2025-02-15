const images = [
    "images/Pink panter.jpg",
    "images/Popeys.jpg",
    "images/Road runner.jpg",
    "images/Scooby doo.jpg",
    "images/Flintstones.jpg",
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
