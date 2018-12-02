

const playSound = (keyCode: number) => {
  // console.log(e);
  const audio: HTMLAudioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  if(audio){
    audio.play();
    audio.currentTime = 0;
    key.classList.add("playing");
  }
}

const killEmStyling = (e: TransitionEvent) => {
  if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

window.addEventListener('load', () => {
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', killEmStyling));
  window.addEventListener('keydown', (e: KeyboardEvent)=> {
    playSound(e.keyCode);
  })
})
