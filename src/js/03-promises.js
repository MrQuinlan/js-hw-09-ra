import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  return new Promise((resolve, rejected) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        rejected(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

const formRef = document.querySelector('.form');

const onFormSubmit = e => {
  e.preventDefault();

  let delay = Number(e.currentTarget.elements.delay.value);
  const step = Number(e.currentTarget.elements.step.value);
  const amount = Number(e.currentTarget.elements.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(result => {
        Notify.success(result);
      })
      .catch(err => {
        Notify.failure(err);
      });

    delay += step;
  }
};

formRef.addEventListener('submit', onFormSubmit);
