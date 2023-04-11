var heroMainRightWave1 = lottie.loadAnimation({
    container: document.getElementsByClassName("--corner-wave-1")[0],
    renderer: "svg",
    autoplay: true,
    loop: true,
    path: "JSON/heroRightMainWave.json",
});

var heroMainRightWave2 = lottie.loadAnimation({
    container: document.getElementsByClassName("--corner-wave-2")[0],
    renderer: "svg",
    autoplay: true,
    loop: true,
    path: "JSON/heroRightMainWave2.json",
});

heroMainRightWave1.setSpeed(0.5);
heroMainRightWave2.setSpeed(0.25);

function mapNumbers(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}