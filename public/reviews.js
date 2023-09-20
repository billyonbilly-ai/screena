const txt1 = document.getElementById('movie');
// const rv1 = document.getElementById('review');
const btn1 = document.getElementById('submit');
const out1 = document.getElementById('output1');
const reviewForm = document.getElementById('reviewForm');

function fun1() {
  event.preventDefault();
  out1.innerHTML = `You wrote a review on ${txt1.value }`;
}

reviewForm.addEventListener('submit', fun1);
// btn1.addEventListener('click', fun1);