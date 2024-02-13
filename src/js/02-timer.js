// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/material_blue.css');

// const refs = {
//   timePicker: document.querySelector('#datetime-picker'),
//   timerDays: document.querySelector('[data-days]'),
//   timerHours: document.querySelector('[data-hours]'),
//   timerMinutes: document.querySelector('[data-minutes]'),
//   timerSeconds: document.querySelector('[data-seconds]'),
//   startBtn: document.querySelector('[data-start]'),
// };

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   minDate: new Date().fp_incr(1),
//   onClose(selectedDates, dateStr) {
//     time = new Date(selectedDates[0]).getTime(); // - new Date().getTime();

//     // setTimerTime(time);

//     // startCountdownTimer(time);

//     refs.startBtn.toggleAttribute('disabled');
//     refs.startBtn.addEventListener('click', () => startCountdownTimer(time));
//   },
// };

// flatpickr(refs.timePicker, options);

// function convertMs(ms) {
//   // Number of milliseconds per unit of time

//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function startCountdownTimer(time) {
//   setInterval(() => {
//     const ms = time - new Date().getTime();

//     const { days, hours, minutes, seconds } = convertMs(ms);
//     refs.timerDays.textContent = days;
//     refs.timerHours.textContent = hours;
//     refs.timerMinutes.textContent = minutes;
//     refs.timerSeconds.textContent = seconds;
//   }, 1000);
// }

// // function setTimerTime(time) {
// //   const ms = time - new Date().getTime();
// //   const { days, hours, minutes, seconds } = convertMs(ms);
// //   refs.timerDays.textContent = days;
// //   refs.timerHours.textContent = hours;
// //   refs.timerMinutes.textContent = minutes;
// //   refs.timerSeconds.textContent = seconds;
// // }

// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================
// ==================================================================================

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  timePicker: document.querySelector('#datetime-picker'),
  timerDays: document.querySelector('[data-days]'),
  timerHours: document.querySelector('[data-hours]'),
  timerMinutes: document.querySelector('[data-minutes]'),
  timerSeconds: document.querySelector('[data-seconds]'),
  startBtn: document.querySelector('[data-start]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  minDate: new Date().fp_incr(1),
  onClose(selectedDates, dateStr) {
    time = new Date(selectedDates[0]).getTime(); // - new Date().getTime();

    // setTimerTime(time);

    // startCountdownTimer(time);

    refs.startBtn.toggleAttribute('disabled');

    refs.startBtn.addEventListener('click', () => startCountdownTimer(time));
  },
};

flatpickr(refs.timePicker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// function startCountdownTimer(time) {
//   const ms = time - new Date().getTime();

//   console.log('start timer');

//   const { days, hours, minutes, seconds } = convertMs(ms);
//   refs.timerDays.textContent = days;
//   refs.timerHours.textContent = hours;
//   refs.timerMinutes.textContent = minutes;
//   refs.timerSeconds.textContent = seconds;
// }

function startCountdownTimer(time) {
  setInterval(() => {
    setTimerTime(time);
  }, 1000);
}

function setTimerTime(time) {
  const ms = time - new Date().getTime();
  const { days, hours, minutes, seconds } = convertMs(ms);
  refs.timerDays.textContent = addLeadingZero(days);
  refs.timerHours.textContent = addLeadingZero(hours);
  refs.timerMinutes.textContent = addLeadingZero(minutes);
  refs.timerSeconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
