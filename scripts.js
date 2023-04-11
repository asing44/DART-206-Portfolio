var heroMainRightWave = lottie.loadAnimation({
    container: document.getElementsByClassName("--corner-wave")[0],
    renderer: "svg",
    autoplay: true,
    loop: true,
    path: "JSON/heroRightMainWave.json",
});

function mapNumbers(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}