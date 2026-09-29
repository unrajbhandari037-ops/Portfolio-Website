const bgMusic = document.getElementById("bgMusic");

bgMusic.volume = 0.15;

document.addEventListener("click", () => {
    bgMusic.play().catch(error => {
        console.log("Audio could not start:", error);
    });
}, { once: true });