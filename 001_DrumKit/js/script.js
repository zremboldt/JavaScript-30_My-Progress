// Practice from a Wes Bos tutorial: https://www.youtube.com/watch?v=VuN8qwZoego&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH

function keyPress(e) {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // Stop the function from running.
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add('active');
}

function removeClass(e) {
  if (e.propertyName !== 'transform') return; // If propertyName isn't transform, don't run the next line of code.
  this.classList.remove('active'); // classList.remove() is the vanilla JS equivalent to jQuery's removeClass().
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeClass)); // Wait for the CSS transition to end, then run removeClass.
window.addEventListener('keydown', keyPress); // runs the keyPress function.
