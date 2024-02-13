const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let intervalId = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const toggleAttribute = () => {
  refs.startBtn.toggleAttribute('disabled');
  refs.stopBtn.toggleAttribute('disabled');
};

const OnClickStart = () => {
  toggleAttribute();
  return (intervalId = setInterval(
    () =>
      (refs.body.style.cssText = `background-color: ${getRandomHexColor()}`),
    700
  ));
};

const OnClickStop = () => {
  clearInterval(intervalId);

  toggleAttribute();
};

refs.startBtn.addEventListener('click', OnClickStart);

refs.stopBtn.addEventListener('click', OnClickStop);
