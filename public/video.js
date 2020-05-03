const video = document.querySelector('#video');

let startup = () => {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    }).then(stream => {
        video.srcObject = stream;
    }).catch(console.error)
}

window.addEventListener("load", startup, false);