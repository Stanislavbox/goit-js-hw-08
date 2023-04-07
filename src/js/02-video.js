import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const player = new Player("vimeo-player");
const currentTime = localStorage.getItem("videoplayer-current-time");

const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(currentTime);