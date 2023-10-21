let turnSwitch = document.getElementById("switch");
let bombilla = document.getElementById("bombilla");
let zoom = document.getElementById("zoom");
let zoomLabel = document.getElementById("zoomLabel");
let bright = document.getElementById("bright");
let brightLabel = document.getElementById("brightLabel");
let onoff = false;

function toggleSwitch() {
    if (onoff) {
        turnSwitch.src = "./img/boff.jpg";
        bombilla.src = "./img/off.jpg";
        zoom.style.opacity = 0;
        bright.style.opacity = 0;
        zoomLabel.style.opacity = 0;
        brightLabel.style.opacity = 0;
        onoff = false;
    }
    else {
        turnSwitch.src = "./img/bon.jpg";
        bombilla.src = "./img/on.jpg";
        zoom.style.opacity = 100;
        bright.style.opacity = 100;
        zoomLabel.style.opacity = 100;
        brightLabel.style.opacity = 100;
        onoff = true;
    }
}

function changeZoom(zoom) {
    bombilla.style.zoom = zoom;
}

function changeBrightness(bright) {
    bombilla.style.opacity = bright;
}