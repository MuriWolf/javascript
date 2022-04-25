/* Get Our Elements */
const player = document.querySelector(".player")
const video = player.querySelector(".viewer")
const progress = player.querySelector(".progress")
const toogle = player.querySelector(".toggle")
const progressBar = player.querySelector(".progress__filled")
const skipButtons = player.querySelectorAll("[data-skip]")
const ranges = player.querySelectorAll(".player__slider")

const fullScreen = player.querySelector(".fullscreen")

/* Build out functions */
function tooglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function uptadeButton() {
    const icon = this.paused ? "►" : "❚ ❚"
    toogle.textContent = icon
}

function skip() {
    video.currentTime += Number(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function changeSize() {
    if (player.requestFullscreen) {
        player.requestFullscreen()
    }
    if (document.fullscreenElement) {
        document.exitFullscreen()
    }
}

/* Hook up the event listeners */

video.addEventListener("click", tooglePlay);
video.addEventListener("pause", uptadeButton);
video.addEventListener("play", uptadeButton);
toogle.addEventListener("click", tooglePlay);

skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

video.addEventListener("timeupdate", handleProgress);

let mouseDown = false
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mouseDown && scrub(e));
progress.addEventListener("mousedown", () => mouseDown = true);
progress.addEventListener("mouseup", () => mouseDown = false)

fullScreen.addEventListener("click", changeSize)