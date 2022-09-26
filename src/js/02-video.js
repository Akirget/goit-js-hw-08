import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import '../css/common.css';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-time'));

function playPlayer(item) {
  const currentTime = item.seconds;
  localStorage.setItem('videoplayer-time', currentTime);
}

player.on('timeupdate', throttle(playPlayer, 1000));
