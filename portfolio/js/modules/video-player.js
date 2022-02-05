const player = document.querySelector('.video__player');
const video = player.querySelector('.video__viewer');
const videoButton = player.querySelector('.video__button');
const playButton = player.querySelector('.controls__icon--play');
const volumeButton = player.querySelector('.controls__icon--volume');
const progress = player.querySelector('.controls__slider--progress');
const volume = player.querySelector('.controls__slider--volume');
let mousedown = false;

const updateVideo = (evt) => {
    const scrubTime = (evt.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
};

const updateVolume = (evt) => {
    const volume = evt.target.value;
    video.volume = volume / 100;
};

const rangeUpdate = (evt) => {
    const elem = evt.target;
    let value = elem.value;
    elem.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #c8c8c8 ${value}%, #c8c8c8 100%)`;
};

const progressUpdate = () => {
    let duration = video.duration;
    let currentTime = video.currentTime;
    progress.value = 100 * currentTime / duration;
    progress.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${progress.value}%, #c8c8c8 ${progress.value}%, #c8c8c8 100%)`;
}

const onPlayToggleClick = () => {
    if (video.paused) {
        video.play();
        playButton.style.backgroundImage = 'url("./assets/svg/pause.svg")';
        videoButton.style.display = 'none';
    } else {
        video.pause();
        playButton.style.backgroundImage = 'url("./assets/svg/play.svg")';
        videoButton.style.display = 'block';
    }
};

const onVolumeToggleClick = () => {
    if (video.muted) {
        volumeButton.style.backgroundImage = 'url("./assets/svg/volume.svg")';
        video.muted = false;
    } else {
        video.muted = true;
        volumeButton.style.backgroundImage = 'url("./assets/svg/mute.svg")';
    }
}

progress.addEventListener('click', updateVideo);
progress.addEventListener('mousemove', (evt) => mousedown && updateVideo(evt));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('input', rangeUpdate);

volume.addEventListener('click', updateVolume);
volume.addEventListener('mousemove', (evt) => mousedown && updateVolume(evt));
volume.addEventListener('mousedown', () => mousedown = true);
volume.addEventListener('mouseup', () => mousedown = false);
volume.addEventListener('input', rangeUpdate);

video.addEventListener('timeupdate', progressUpdate);

video.addEventListener('click', onPlayToggleClick);
videoButton.addEventListener('click', onPlayToggleClick);
playButton.addEventListener('click', onPlayToggleClick);
volumeButton.addEventListener('click', onVolumeToggleClick);